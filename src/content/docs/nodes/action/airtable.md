---
title: Airtable Integration
description: Automate Airtable from your AI workflows — create, read, update, and search records across bases. Connect via OAuth.
---

The Airtable node lets your agents create, read, update, and search records across bases, tables, and views.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action                  | Description                            |
| ----------------------- | -------------------------------------- |
| Create Single Record    | Add a record to a table                |
| Create Multiple Records | Add multiple records in one operation  |
| Create or Update Record | Create or update based on match        |
| Get Record              | Get a record by ID                     |
| Get Record Or Create    | Get a record or create it if missing   |
| List Records            | List records with optional sort/filter |
| List Records in View    | List records from a specific view      |
| Search Records          | Search by formula or field value       |
| Update Record           | Update a record by ID                  |
| Delete Record           | Delete a record                        |
| Create Table            | Create a new table                     |
| Update Table            | Update table metadata                  |
| List Tables             | List tables in a base                  |
| Create Field            | Add a field to a table                 |
| Update Field            | Update a field definition              |
| List Bases              | List accessible bases                  |
| Create Comment          | Comment on a record                    |
| Update Comment          | Update a comment                       |

## Tips

- **Search Records** supports [Airtable formula syntax](https://support.airtable.com/docs/formula-field-reference) — your agent can filter with expressions like `{Status} = 'Active'`.
- **Create or Update Record** is useful for idempotent operations — it matches on a specified field and updates if found.
- **List Records in View** respects the view's existing filters and sort order — simpler than building filter formulas.
