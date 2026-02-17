---
title: Linear Integration
description: Automate Linear from your AI workflows — create and update issues, search projects, and manage team backlogs via OAuth.
---

The Linear node lets your agents create and update issues, search across projects, and manage teams and projects.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action           | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| Create Issue     | Create an issue (requires team ID and title)               |
| Create Project   | Create a new project                                       |
| Get Current User | Get the authenticated user's profile and teams             |
| Get Issue        | Get full issue details by ID                               |
| Get Teams        | List all teams in the workspace                            |
| List Projects    | List all projects                                          |
| Search Issues    | Search by team, project, assignee, labels, state, or text  |
| Update Issue     | Update title, description, assignee, state, priority, etc. |

## Tips

- **Create Issue** requires a team ID — use **Get Teams** first if your agent needs to discover available teams.
- **Search Issues** supports filtering by multiple dimensions and text query — useful for agents that triage or summarize backlogs.
