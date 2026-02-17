---
title: Sentry Integration
description: Monitor and triage Sentry errors from your AI workflows — list issues, inspect events, and update issue status via OAuth.
---

The Sentry node lets your agents list and update issues and events from your Sentry projects.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action              | Description                                      |
| ------------------- | ------------------------------------------------ |
| List Project Issues | List issues for a project                        |
| List Issue Events   | List events for a specific issue                 |
| List Project Events | List all events for a project                    |
| Update Issue        | Update issue attributes (status, assignee, etc.) |

## Tips

- **List Project Issues** returns issues sorted by priority — useful for agents that triage or summarize error trends.
- **Update Issue** can change status (`resolved`, `ignored`, `unresolved`), assign to a user, or merge issues.
