---
title: Deploy Agents
description: Test your agent with live data, connect third-party accounts, and deploy to preview or production environments.
---

Test your agent, connect apps, and deploy to production.

## Testing

Before deploying:

1. Click **Test** in the header
2. The agent runs with sample data
3. Check each node's output in the execution panel
4. Fix any errors before deploying

## Connecting Apps

Click any app node to connect your account:

1. Click **Connect Account**
2. Authorize Spawnbase to access the app
3. Select which account/workspace to use

## Environments

| Environment | Use Case |
|-------------|----------|
| **Preview** | Staging, safe to test |
| **Production** | Live, customer-facing |

## Deploy

1. Click **Deploy** in the header
2. Choose environment (Preview or Production)
3. Your agent is now live

## Available Integrations

### Communication

| App | Triggers | Actions |
|-----|----------|---------|
| **Slack** | New message, Reaction | Send message, Update |
| **Discord** | New message | Send message, Create channel |
| **Gmail** | New email | Send email, Create draft |

### Development

| App | Triggers | Actions |
|-----|----------|---------|
| **GitHub** | Issue, PR, Push | Create issue, Comment, Merge |
| **Linear** | Issue created/updated | Create issue, Update status |
| **Jira** | Issue created/updated | Create issue, Transition |

### Productivity

| App | Triggers | Actions |
|-----|----------|---------|
| **Notion** | Page created | Create page, Update database |
| **Google Sheets** | Row added | Add row, Update cell |
| **Airtable** | Record created | Create/update record |

### AI Providers

| Provider | Models |
|----------|--------|
| **Anthropic** | Claude Sonnet, Claude Opus |
| **OpenAI** | GPT-4o, GPT-4 Turbo |
| **Google** | Gemini Pro |

### Utilities

| Type | Description |
|------|-------------|
| **Webhook** | Send/receive HTTP requests |
| **Code** | Run JavaScript or Python |
| **Delay** | Wait for specified duration |
| **Filter** | Conditionally pass data |

## Request an Integration

Don't see what you need? [Request an integration](https://github.com/spawnbase/spawnbase/issues/new) on GitHub.
