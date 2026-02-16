---
title: App Actions
description: Connect third-party apps to your workflows
---

App action nodes let your agents interact with external services — send Slack messages, create Linear issues, capture PostHog events, and more.

## Supported Apps

| App | Category | Description |
|-----|----------|-------------|
| [Slack](/nodes/action/slack) | Communication | Send updates, schedule reminders, collaborate in real time |
| [GitHub](/nodes/action/github) | Developer Tools | Monitor PRs, triage issues, automate repo workflows |
| [Sentry](/nodes/action/sentry) | Observability | Track errors and surface issue context |
| [Notion](/nodes/action/notion) | Productivity | Query databases, retrieve and create pages |
| [Google Sheets](/nodes/action/google_sheets) | Database | Append, read, and clear spreadsheet data |
| [Gmail](/nodes/action/gmail) | Email | Send emails, search inboxes, fetch messages |
| [Discord](/nodes/action/discord) | Communication | Send messages, automate community workflows |
| [Linear](/nodes/action/linear) | Project Management | Create and update issues |
| [PagerDuty](/nodes/action/pagerduty) | Operations | Create, ack, and list incidents |
| [Airtable](/nodes/action/airtable) | Database | Work with relational bases for CRM or ops |
| [PostHog](/nodes/action/posthog) | Analytics | Query analytics insights or capture custom events |
| [Typeform](/nodes/action/typeform) | Forms | Fetch responses, inspect forms, manage webhooks |
| [Google Drive](/nodes/action/google_drive) | Storage | Browse files, upload assets, sync docs |
| [Jira](/nodes/action/jira) | Project Management | Create issues, search across projects |
| [HubSpot](/nodes/action/hubspot) | CRM | Manage contacts, deals, and CRM automation |

## How It Works

1. **Add the node** — Drag an app action node into your workflow
2. **Connect your account** — Click "Connect" directly in the node configuration panel, or go to Settings → Integrations
3. **Pick an action** — Select what you want to do (e.g., "Send Message" for Slack)
4. **Configure fields** — Fill in the required parameters. Some fields load options dynamically from your connected account.

## Connection Setup

All app connections are managed through [Pipedream Connect](https://pipedream.com/docs/connect). When you connect an app, Pipedream handles OAuth flows and credential storage.

:::caution
Some apps require specific API key types or permission scopes during connection. Check the individual app page for setup requirements.
:::
