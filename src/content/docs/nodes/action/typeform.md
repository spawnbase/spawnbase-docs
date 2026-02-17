---
title: Typeform Integration
description: Automate Typeform from your AI workflows — create forms, fetch responses, manage images and webhooks via OAuth.
---

The Typeform node lets your agents create and manage forms, fetch responses, and work with images.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action                                      | Description                                  |
| ------------------------------------------- | -------------------------------------------- |
| Create a Form                               | Create a form with fields                    |
| Get a Form                                  | Get form data by ID                          |
| List Forms                                  | List all forms                               |
| Duplicate a Form                            | Duplicate an existing form                   |
| Update Form Title                           | Update a form's title                        |
| Update Dropdown, Multiple Choice or Ranking | Update choices on dropdown/MC/ranking fields |
| Delete Form                                 | Delete a form                                |
| List Responses                              | Get form responses with timestamps           |
| Lookup Responses                            | Search responses by query                    |
| Create an Image                             | Upload an image to your account              |
| List Images                                 | List all images                              |
| Delete an Image                             | Delete an image                              |

## Tips

- **List Responses** includes both landing and submission timestamps — useful for calculating completion rates.
- **Lookup Responses** supports text search across all response fields.
