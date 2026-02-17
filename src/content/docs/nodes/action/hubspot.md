---
title: HubSpot Integration
description: Automate HubSpot CRM from your AI workflows — manage contacts, deals, marketing emails, and conversations via OAuth.
---

The HubSpot node lets your agents work across the full HubSpot platform — CRM objects, marketing emails, workflows, conversations, and CMS pages.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

:::note
Some workflow actions require a **Marketing Hub Enterprise** account.
:::

## Available Actions

### CRM

| Action                         | Description                                                   |
| ------------------------------ | ------------------------------------------------------------- |
| Create or Update Contact       | Create or update a contact by ID or email                     |
| Batch Create or Update Contact | Bulk create/update contacts                                   |
| Get Contact                    | Get contact details                                           |
| Update Contact                 | Update a contact                                              |
| Add Contact to List            | Add contact to a static list                                  |
| Get Subscription Preferences   | Get a contact's subscription preferences                      |
| Create Company                 | Create a company                                              |
| Batch Create Companies         | Bulk create companies                                         |
| Batch Update Companies         | Bulk update companies                                         |
| Batch Upsert Companies         | Bulk upsert companies                                         |
| Get Company                    | Get company details                                           |
| Update Company                 | Update a company                                              |
| Create Deal                    | Create a deal                                                 |
| Get Deal                       | Get deal details                                              |
| Update Deal                    | Update a deal                                                 |
| Create Lead                    | Create a lead                                                 |
| Update Lead                    | Update a lead                                                 |
| Create Ticket                  | Create a ticket                                               |
| Create Custom Object           | Create a custom CRM object                                    |
| Update Custom Object           | Update a custom CRM object                                    |
| Create Associations            | Associate objects together                                    |
| Search CRM                     | Search contacts, companies, deals, tickets, or custom objects |
| Create Engagement              | Create an engagement (call, email, note, etc.)                |
| Create Note                    | Create a note                                                 |
| Create Task                    | Create a task                                                 |
| Create Meeting                 | Create a meeting                                              |
| Get Meeting                    | Get meeting details                                           |
| Get Associated Emails          | Get emails for a contact/company/deal                         |
| Get Associated Meetings        | Get meetings for a contact/company/deal                       |
| Create Communication           | Create a WhatsApp, LinkedIn, or SMS message                   |

### Marketing

| Action                    | Description                             |
| ------------------------- | --------------------------------------- |
| Create Marketing Email    | Create a marketing email                |
| Clone Marketing Email     | Clone an existing marketing email       |
| List Marketing Emails     | List marketing emails                   |
| List Marketing Events     | List marketing events                   |
| List Campaigns            | List campaigns                          |
| Create Form               | Create a form                           |
| List Forms                | List forms                              |
| Update Fields on the Form | Update form fields                      |
| Get File Public URL       | Get public URL for a form-uploaded file |

### Workflows

| Action                              | Description                    |
| ----------------------------------- | ------------------------------ |
| Create a New Workflow               | Create a workflow (legacy v3)  |
| Create Contact Workflow             | Create a contact workflow (v4) |
| Retrieve Workflows                  | List all workflows             |
| Retrieve Workflow Details           | Get workflow by ID             |
| Retrieve Workflow Emails            | Get emails sent by a workflow  |
| Retrieve Migrated Workflow Mappings | Map v3 → v4 workflow IDs       |
| Enroll Contact Into Workflow        | Add contact to a workflow      |
| Delete a Workflow                   | Delete a workflow              |

### Conversations

| Action        | Description                |
| ------------- | -------------------------- |
| List Inboxes  | List conversation inboxes  |
| Get Inbox     | Get inbox details          |
| List Channels | List channels              |
| Get Channel   | Get channel details        |
| List Threads  | List conversation threads  |
| List Messages | List messages in a thread  |
| Send Message  | Send a message to a thread |
| Add Comment   | Add a comment to a thread  |

### CMS

| Action              | Description           |
| ------------------- | --------------------- |
| Create Page         | Create a site page    |
| Update Page         | Update a site page    |
| Create Landing Page | Create a landing page |
| Update Landing Page | Update a landing page |
| Clone Site Page     | Clone a site page     |
| List Pages          | List site pages       |
| List Blog Posts     | List blog posts       |
| List Templates      | List templates        |

## Tips

- **Search CRM** is the most versatile action — supports contacts, companies, deals, tickets, leads, and custom objects with filter groups.
- Workflow actions span two API versions (v3 legacy and v4). Use **Retrieve Migrated Workflow Mappings** to find v4 equivalents.
- **Enroll Contact Into Workflow** only works with contact-based workflows on Marketing Hub Enterprise.
