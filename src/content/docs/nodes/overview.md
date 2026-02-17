---
title: Nodes Overview
description: Explore the building blocks of Spawnbase agents — triggers, AI nodes, app actions, and control flow. Learn what each node type does.
---

Nodes are the building blocks of agents. Each node performs a specific action, and you connect them to create workflows.

## Node Types

| Type | Purpose | Examples |
|------|---------|----------|
| **Trigger** | Starts the agent | Schedule, Webhook |
| **AI** | Processes with AI | Analyze, Summarize, Classify |
| **[Action](/nodes/action/apps)** | Performs operations | Send Slack message, Create Linear issue, Capture PostHog event |
| **Control** | Controls flow | Condition, Loop, Delay |

## Triggers

Every agent needs exactly one trigger. Without a trigger, agents can only be run manually.

| Trigger | Description |
|---------|-------------|
| [Schedule](/nodes/trigger/schedule) | Run on a cron schedule (hourly, daily, weekly) |
| Webhook | Receive HTTP POST requests (coming soon) |
| App Event | React to events from connected apps (coming soon) |

## AI Nodes

AI nodes are what make Spawnbase powerful. They can analyze, summarize, classify, generate, and more.

| Node | Description |
|------|-------------|
| [AI Agent](/nodes/ai/agent) | LLM-powered node with optional tool use |

## Data Flow

Nodes connect via edges. Data flows from left to right:

```
Trigger → AI Node → Action
```

Each node's output is available to downstream nodes using template variables:

```
{{nodeName.fieldName}}
```

For example, if an AI node named "analyzer" outputs a summary field:

```
{{analyzer.summary}}
```
