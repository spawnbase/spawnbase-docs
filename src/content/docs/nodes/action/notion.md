---
title: Notion Integration
description: Automate Notion from your AI workflows — create pages, query databases, and manage content blocks via OAuth.
---

The Notion node lets your agents create and update pages, query databases, manage blocks, and upload files.

## Connection Setup

Standard OAuth via Pipedream Connect. During authorization, you choose which pages and databases the integration can access.

:::note
Notion's OAuth scoping is page-level — if an action can't find a page or database, make sure it was shared with the integration during the connection flow.
:::

## Available Actions

| Action                       | Description                            |
| ---------------------------- | -------------------------------------- |
| Append Block to Parent       | Append blocks to a page or block       |
| Complete File Upload         | Finalize a multi-part file upload      |
| Create Comment               | Comment on a page or discussion thread |
| Create Database              | Create a database with initial schema  |
| Create File Upload           | Start a file upload                    |
| Create Page                  | Create a page under a parent page      |
| Create Page from Data Source | Create a page in a database            |
| Delete Block                 | Archive a block (including pages)      |
| Duplicate Page               | Copy an existing page                  |
| Find Pages or Data Sources   | Search across the workspace            |
| Get Current User             | Get the connected user/bot identity    |
| List All Users               | List all workspace users               |
| List File Uploads            | List file uploads                      |
| Query Data Source            | Query a database with filters          |
| Retrieve Data Source Content | Get all rows from a database           |
| Retrieve Data Source Schema  | Get property schema of a database      |
| Retrieve File Upload         | Get a file upload by ID                |
| Retrieve Page Content        | Get page content as blocks or markdown |
| Retrieve Page Metadata       | Get page properties and metadata       |
| Retrieve Page Property Item  | Get a specific property value          |
| Retrieve User                | Get a user by ID                       |
| Send File Upload             | Upload file content                    |
| Update Child Block           | Update a block's content               |
| Update Data Source           | Update a database schema               |
| Update Page                  | Update page property values            |

## Tips

- **Query Data Source** supports [Notion filter syntax](https://developers.notion.com/reference/post-database-query-filter) — your agent can build complex queries with AND/OR conditions.
- To add content to an existing page, use **Append Block to Parent** — **Update Page** only changes property values, not page content.
- **Retrieve Page Content** can return markdown, which is often easier for agents to work with than raw block objects.
