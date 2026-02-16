---
title: Build
description: How to build agents in Spawnbase
---

Build agents using the visual canvas and AI copilot.

## The Canvas

The canvas is where you design your agent. Drag nodes from the panel, connect them, and configure each step.

## Node Types

| Type | Purpose | Examples |
|------|---------|----------|
| **Trigger** | Starts the agent | Schedule, Webhook, App event |
| **Action** | Performs operation | Send email, Create issue |
| **AI** | Processes with AI | Summarize, Classify, Generate |
| **Control** | Controls flow | Condition, Loop, Delay |

See [Nodes Overview](/nodes/overview) for full reference.

## Triggers

Every agent needs exactly one trigger:

- [**Schedule**](/nodes/trigger/schedule) - Run on cron (hourly, daily, weekly)
- **Webhook** - Receive HTTP requests (coming soon)
- **App Event** - React to events from connected apps (coming soon)
- **Manual** - Trigger via button or API

## AI Nodes

[AI Agent nodes](/nodes/ai/agent) process data with LLMs. Write a prompt describing what you need - the AI handles the rest.

Enable tools (web search, code execution, integrations) to give the AI autonomous capabilities.

## Connections

Drag from output handle (right side) to input handle (left side) to connect nodes. Data flows through connections automatically.

Each node's output becomes available to downstream nodes via `{{nodeName.output}}` syntax.

## Using the Copilot

Instead of building manually, describe what you want:

```
Every morning, check GitHub issues labeled 'urgent',
summarize them with AI, and post to Slack
```

The copilot generates the full agent structure. Refine with the canvas if needed.

## Next Steps

- [Deploy your agent →](/agents/deploy/)
