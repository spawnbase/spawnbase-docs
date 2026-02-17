---
title: Agents Overview
description: Learn what Spawnbase agents are — automated workflows that combine triggers, AI nodes, and app integrations to execute complex tasks.
---

An agent is an automated workflow that executes a series of steps in response to a trigger. Agents combine AI capabilities with app integrations to automate complex tasks.

## Core Components

Every agent consists of:

1. **Trigger** - What starts the agent (schedule, webhook, event)
2. **Nodes** - Actions and logic that execute
3. **Connections** - How data flows between nodes

## How It Works

```
Trigger → Node → Node → Node → Output
            ↓
         (data flows through)
```

When an agent runs:

1. The trigger fires (schedule, webhook, or app event)
2. Each connected node executes in order
3. Data passes from one node to the next
4. The agent completes or errors

## Agent States

| State | Description |
|-------|-------------|
| **Draft** | Being edited, not running |
| **Active** | Live and processing triggers |
| **Paused** | Temporarily stopped |

## Next Steps

- [Build your first agent →](/agents/build/)
