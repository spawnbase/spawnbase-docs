---
title: Google Drive Integration
description: Manage files, folders, shared drives, and permissions from your AI workflows. Upload, download, and organize via OAuth.
---

The Google Drive node lets your agents manage files, folders, shared drives, comments, and permissions.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

### Files & Folders

| Action                        | Description                                           |
| ----------------------------- | ----------------------------------------------------- |
| Upload File                   | Upload a file                                         |
| Download File                 | Download a file                                       |
| Create New File From Text     | Create a file from plain text                         |
| Create New File From Template | Create a Google Doc from a template with placeholders |
| Copy File                     | Copy a file                                           |
| Update File                   | Update metadata or content                            |
| Move File                     | Move between folders                                  |
| Move File to Trash            | Trash a file or folder                                |
| Delete File                   | Permanently delete (no trash)                         |
| Find File                     | Search by name                                        |
| Find Folder                   | Search for a folder by name                           |
| Find Spreadsheets             | Search for spreadsheets by name                       |
| Find Forms                    | Search for Google Forms by name                       |
| Get File By ID                | Get file metadata                                     |
| List Files                    | List files in a folder                                |
| Create Folder                 | Create an empty folder                                |
| Get Folder ID for a Path      | Resolve a path to a folder ID                         |
| Share File or Folder          | Add sharing permissions and get a share URL           |

### Shared Drives

| Action                   | Description                  |
| ------------------------ | ---------------------------- |
| Create Shared Drive      | Create a new shared drive    |
| Get Shared Drive         | Get shared drive metadata    |
| Update Shared Drive      | Update a shared drive        |
| Delete Shared Drive      | Delete an empty shared drive |
| Search for Shared Drives | Search shared drives         |

### Comments & Replies

| Action            | Description                 |
| ----------------- | --------------------------- |
| Add Comment       | Add a comment to a file     |
| Get Comment By ID | Get a specific comment      |
| List Comments     | List all comments on a file |
| Update Comment    | Update comment content      |
| Resolve Comment   | Mark a comment as resolved  |
| Delete Comment    | Delete a comment            |
| Reply to Comment  | Reply to a comment          |
| Get Reply By ID   | Get a specific reply        |
| List Replies      | List replies on a comment   |
| Update Reply      | Update a reply              |
| Delete Reply      | Delete a reply              |

### Access

| Action                   | Description                           |
| ------------------------ | ------------------------------------- |
| List Access Proposals    | List pending access requests          |
| Resolve Access Proposals | Accept or deny access requests        |
| Get Current User         | Get the connected Google account info |

## Tips

- **Find File** and **Find Folder** search by name — for more complex queries, use Google Drive's [search query syntax](https://developers.google.com/drive/api/guides/search-files).
- **Create New File From Template** supports Mustache-style placeholders (`{{name}}`) in Google Docs.
- **Delete File** is permanent — use **Move File to Trash** for recoverable deletion.
