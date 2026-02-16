---
title: Gmail
description: Send emails, search inboxes, fetch messages.
---

The Gmail node lets your agents send emails, search inboxes, manage labels, and work with drafts and attachments.

## Connection Setup

Standard OAuth via Pipedream Connect. Grants access to the connected Google Workspace or Gmail account.

:::note
The "Update Signature for Email in Organization" action requires a Google Cloud service account with domain-wide delegation — this won't work with a standard OAuth connection.
:::

## Available Actions

| Action                                     | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| Add Label to Email                         | Add label(s) to a message                                    |
| Approve Workflow                           | Suspend workflow until approved by email                     |
| Archive Email                              | Archive a message                                            |
| Create Draft                               | Create a draft email                                         |
| Create Label                               | Create a new label                                           |
| Delete Email                               | Move a message to trash                                      |
| Download Attachment                        | Download an attachment by ID                                 |
| Find Email                                 | Search emails using Gmail search syntax                      |
| Get Send As Alias                          | Get a send-as alias                                          |
| List Labels                                | List all labels                                              |
| List Send As Aliases                       | List all send-as aliases                                     |
| List Thread Messages                       | List messages in a thread                                    |
| Remove Label from Email                    | Remove label(s) from a message                               |
| Send Email                                 | Send an email                                                |
| Update Signature for Email in Organization | Update signature for an org email (requires service account) |
| Update Signature for Primary Email Address | Update signature for the primary email                       |

## Tips

- **Find Email** uses [Gmail search syntax](https://support.google.com/mail/answer/7190) — your agent can construct queries like `from:user@example.com after:2024/01/01 has:attachment`.
- **Approve Workflow** is a Pipedream-specific action that pauses your agent until the recipient approves via email — useful for human-in-the-loop flows.
