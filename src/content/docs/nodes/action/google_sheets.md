---
title: Google Sheets Integration
description: Read, write, and manage spreadsheet data from your AI workflows. Append rows, update cells, and format sheets via OAuth.
---

The Google Sheets node lets your agents read, write, and manage spreadsheet data — including rows, cells, worksheets, formatting, and validation.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action                         | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| Add Single Row                 | Append a row (optionally at a specific index)  |
| Add Multiple Rows              | Append multiple rows at once                   |
| Update Row                     | Update a single row                            |
| Update Multiple Rows           | Update rows in a range                         |
| Upsert Row                     | Insert or update a row                         |
| Find Row                       | Find rows by column value                      |
| Delete Rows                    | Delete specific rows                           |
| Clear Cell                     | Clear a specific cell                          |
| Clear Rows                     | Clear row contents (leaves blank rows)         |
| Get Cell                       | Get contents of a specific cell                |
| Get Values in Range            | Get values using A1 notation                   |
| Update Cell                    | Update a single cell                           |
| Create Spreadsheet             | Create or duplicate a spreadsheet              |
| Get Spreadsheet by ID          | Get spreadsheet metadata                       |
| Create Worksheet               | Create a new worksheet tab                     |
| Copy Worksheet                 | Copy a worksheet to another spreadsheet        |
| Delete Worksheet               | Delete a worksheet tab                         |
| List Worksheets                | List all worksheet tabs                        |
| Create Column                  | Add a new column                               |
| Insert Dimension               | Insert rows or columns                         |
| Move Dimension                 | Move rows or columns                           |
| Merge Cells                    | Merge a range into one cell                    |
| Insert Comment                 | Add a comment to a cell                        |
| Insert an Anchored Note        | Add a note to a cell                           |
| Update Formatting              | Update cell formatting                         |
| Add Conditional Format Rule    | Create conditional formatting                  |
| Update Conditional Format Rule | Modify a conditional format rule               |
| Delete Conditional Format Rule | Remove a conditional format rule               |
| Set Data Validation            | Add dropdowns, checkboxes, or validation rules |
| Add Protected Range            | Protect a cell range with permissions          |
| Get Current User               | Get the connected Google account info          |

## Tips

- **A1 notation** — most range-based actions use [A1 notation](https://developers.google.com/sheets/api/guides/concepts#cell) (e.g., `Sheet1!A1:C10`).
- **Find Row** searches by exact column match — for fuzzy matching, read a range and let the AI Agent node filter results.
- **Upsert Row** is useful when your agent needs to update if exists or insert if new.
