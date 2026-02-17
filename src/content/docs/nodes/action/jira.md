---
title: Jira Integration
description: Automate Jira from your AI workflows — create, update, and search issues, manage transitions and project boards via OAuth.
---

The Jira node lets your agents create, update, and search issues, manage transitions, and work with projects, comments, and attachments.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action                                | Description                                   |
| ------------------------------------- | --------------------------------------------- |
| Create Issue                          | Create an issue or subtask                    |
| Update Issue                          | Update fields, apply transitions              |
| Get Issue                             | Get full issue details                        |
| Assign Issue                          | Assign an issue to a user                     |
| Transition Issue                      | Move issue to a new status                    |
| Get Transitions                       | List available transitions for an issue       |
| Add Comment To Issue                  | Add a comment                                 |
| List Issue Comments                   | List all comments on an issue                 |
| Update Comment                        | Update an existing comment                    |
| Add Attachment To Issue               | Attach a file                                 |
| Add Multiple Attachments To Issue     | Attach multiple files                         |
| Add Watcher To Issue                  | Add a user as watcher                         |
| Search Issues with JQL                | Search using JQL (GET)                        |
| Search Issues with JQL (POST)         | Search using JQL with enhanced capabilities   |
| Check Issues Against JQL              | Check if issues match JQL queries             |
| Count Issues Using JQL                | Get estimated count for a JQL query           |
| Get Issue Picker Suggestions          | Get issue suggestions matching a query string |
| Get All Projects                      | List all projects                             |
| Delete Project                        | Delete a project                              |
| Create Jira Version in Project        | Create a version/release                      |
| Create Custom Field Options (Context) | Create context for custom field options       |
| Get User                              | Get user details                              |
| Get Users                             | Search for users                              |
| Get Task                              | Check status of an async task                 |

## Tips

- **JQL is powerful** — [Jira Query Language](https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jql/) lets your agent search like `project = "ENG" AND status = "In Progress" AND assignee = currentUser()`.
- **Transition Issue** requires a transition ID — use **Get Transitions** first to discover available transitions for the current issue state.
- Two JQL search actions exist: GET (simpler) and POST (supports enhanced search with expanded fields).
