---
title: PostHog Integration
description: Query product analytics and capture custom events from your AI workflows. Use HogQL queries and Personal API Keys.
---

The PostHog node lets your agents capture custom events, query analytics with HogQL, and manage insights and cohorts.

## Connection Setup

PostHog requires **two different keys** for full functionality:

### Personal API Key (for connection)

When connecting PostHog via Settings → Integrations, Pipedream authenticates using a **Personal API key** (`phx_...`).

1. Go to [PostHog → Settings → Personal API Keys](https://us.posthog.com/settings/user-api-keys)
2. Click **Create personal API key**
3. Grant scopes: `organization:read`, `project:read`, `event:read`, `event:write`
4. Use this key when connecting PostHog in Spawnbase

:::note
If you skip scopes or leave them at defaults, the connection will succeed but fields may fail to load options. When in doubt, grant all read scopes.
:::

:::caution
Do **not** use a Project API key (`phc_...`) for the connection. Project API keys are for event ingestion only and will fail with a 401 error.
:::

### Project API Key (for event capture)

The **Capture Event** action requires a separate **Project API key** as an input field.

1. Go to [PostHog → Settings → Project API Key](https://us.posthog.com/settings/project#variables)
2. Copy the key (`phc_...`) and paste it into the `projectApiKey` field in the node configuration

## Available Actions

| Action                 | Description                             |
| ---------------------- | --------------------------------------- |
| Capture Event          | Capture a custom event for a user/group |
| Create Project Insight | Create a new insight in a project       |
| Create Query           | Run a HogQL query and return results    |
| Get Cohorts            | Retrieve a list of cohorts              |
| Get Persons            | Retrieve a list of persons              |
| Get Project Insight    | Retrieve a specific insight by ID       |
| Get Surveys            | Retrieve a list of surveys              |
| List Project Insights  | List all insights for a project         |
| Update Project Insight | Update an existing insight              |

## Tips

- **Capture Event** uses the Project API key (`phc_...`), not the Personal API key — this trips up most users.
- **Create Query** accepts [HogQL](https://posthog.com/docs/hogql) — useful for flexible analytics queries your agent can construct dynamically.
- Most read actions require `organization` and `project_id` fields — these load dynamically from your connected account.

## Troubleshooting

See [Node Configuration Troubleshooting](/nodes/troubleshooting) for common issues like empty dropdowns and connection errors.
