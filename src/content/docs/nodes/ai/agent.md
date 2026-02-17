---
title: AI Agent Node
description: Add LLM-powered reasoning to your workflows. Supports Anthropic, OpenAI, Google, and xAI models with optional tool use for autonomous agents.
---

The AI Agent node executes LLM calls with optional tool use. Without tools, it makes a single LLM call. With tools enabled, it becomes an autonomous agent that can reason, use tools, and iterate.

## Configuration

### Model Selection

Select a provider and model:

| Provider | Popular Models |
|----------|---------------|
| Anthropic | claude-sonnet-4-5, claude-opus-4-5, claude-haiku-4-5 |
| OpenAI | gpt-4o, gpt-4-turbo, o1, o3 |
| xAI | grok-3, grok-4 |
| Google AI Studio | gemini-2.5-pro, gemini-2.5-flash |
| Vertex AI | gemini-2.5-pro, gemini-2.5-flash |
| Groq | llama-3.3-70b-versatile, mixtral-8x7b |
| Workers AI | @cf/meta/llama-3.2-3b-instruct |

**Default:** Anthropic / claude-sonnet-4-5

### Prompts

**System Prompt** (optional)
Sets the AI's role and behavior. Example:
```
You are a data analyst. Be concise and factual.
```

**User Prompt** (required)
The task for the AI. Use template variables to reference data from upstream nodes:
```
Analyze these errors and prioritize by severity:
{{sentry.issues}}
```

**Assistant Messages** (optional)
Add example responses to guide output format. Useful for few-shot prompting.

### Output Format

Controls how the AI structures its response:

| Format | Use Case | Configuration |
|--------|----------|---------------|
| **Text** | Summaries, explanations, chat | Default, no config needed |
| **One result** | Structured data extraction | Define JSON schema |
| **Many results** | Lists, batch processing | Define element schema |
| **Classify** | Categorization, routing | Define options list |

#### Text (Default)
Free-form text response. Best for summaries, explanations, and conversational output.

#### One Result (Object)
Returns a single structured object. Define the schema:
```json
{
  "type": "object",
  "properties": {
    "summary": { "type": "string" },
    "severity": { "type": "string", "enum": ["critical", "high", "medium", "low"] },
    "affectedUsers": { "type": "number" }
  },
  "required": ["summary", "severity"]
}
```

#### Many Results (Array)
Returns a list of structured objects. Define what each element looks like:
```json
{
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "priority": { "type": "number" }
  }
}
```

#### Classify (Choice)
Model selects from predefined options. Good for routing and categorization:
```
critical
high
medium
low
```

### Tools

Adding tools transforms a single LLM call into an autonomous agent that can reason and take actions.

#### System Tools

| Tool | Description |
|------|-------------|
| **Web Fetch** | Fetch a URL and read its content as text |
| **Web Search** | Search the web and get result links |
| **Sandbox** | Execute bash commands, read/write files |

#### MCP Servers

Connect Model Context Protocol servers to give the AI access to external tools:
- Sentry (list issues, search events)
- GitHub (create issues, read files)
- Slack (send messages)
- Custom MCP servers from your workspace

When tools are enabled, the agent will:
1. Analyze the task
2. Decide which tools to use
3. Call tools and observe results
4. Iterate until the task is complete

### Advanced Settings

**Temperature** (0-2)
Controls randomness. Lower = more deterministic, higher = more creative.
- 0: Deterministic (same input = same output)
- 1: Balanced (default)
- 2: Maximum creativity

**Max Steps** (1-50)
Maximum iterations when tools are enabled. The agent stops when:
- Task is complete
- Max steps reached
- Error occurs

Default: 20 steps

## Behavior

### Without Tools
Single LLM call:
```
Input → Prompt → Model → Output
```

### With Tools
Autonomous agent loop:
```
Input → Prompt → Model → [Tool Call → Result]* → Output
```

The agent continues calling tools until it determines the task is complete or hits max steps.

## Examples

### Simple: Summarize Text
```yaml
Model: claude-sonnet-4-5
Prompt: "Summarize this article in 3 bullet points: {{http.response}}"
Output: Text
Tools: None
```

### Structured: Extract Data
```yaml
Model: claude-sonnet-4-5
Prompt: "Extract contact info from: {{webhook.body}}"
Output: One result
Schema:
  name: string
  email: string
  phone: string (optional)
Tools: None
```

### Agent: Research Task
```yaml
Model: claude-opus-4-5
System: "You are a research assistant."
Prompt: "Find the latest pricing for {{input.competitor}} and summarize."
Output: One result
Tools: Web Search, Web Fetch
Max Steps: 10
```

### Classification: Route Tickets
```yaml
Model: claude-haiku-4-5
Prompt: "Classify this support ticket: {{zendesk.ticket}}"
Output: Classify
Options:
  - billing
  - technical
  - feature-request
  - other
```

## Best Practices

1. **Use text output for simple tasks** - Don't over-structure when plain text works
2. **Use structured output for downstream processing** - When other nodes need to parse the result
3. **Enable sandbox only when needed** - It grants filesystem access
4. **Set reasonable max steps** - 5-15 for most tasks, up to 50 for complex research
5. **Use system prompts for consistent behavior** - Define role and constraints upfront

## See Also

- [Nodes Overview](/nodes/overview) - All node types
- [Schedule Trigger](/nodes/trigger/schedule) - Run agents on a schedule
- [Build Agents](/agents/build) - Building agents with the canvas
