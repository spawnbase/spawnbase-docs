---
title: Troubleshooting
description: Fix common node configuration issues — empty dropdowns, missing permissions, connection errors, and failed executions.
---

This page covers common issues you may encounter when configuring nodes in your workflows.

## App Action Nodes

### Empty dropdown — no options loading

**Symptom:** A dropdown field (e.g., Organization, Project, Channel) shows no options or displays "Failed to load options".

**Cause:** The connected account's API key is either the wrong type or missing required permission scopes. The connection itself may appear successful, but the key lacks the permissions needed to fetch data for specific fields.

**Fix:**
1. Go to Settings → Integrations
2. Disconnect the affected app
3. Reconnect using the correct API key type with the required scopes
4. Check the app-specific setup guide for exact requirements:
   - [PostHog](/nodes/action/posthog#connection-setup) — requires a Personal API key (`phx_`), not a Project API key (`phc_`)

:::note
Spawnbase shows a generic "Failed to load options" error because the upstream provider does not always return a specific reason. The most common cause is incorrect API key type or missing scopes.
:::

### Connection succeeds but action fails at runtime

**Symptom:** The node is fully configured and fields loaded correctly, but execution fails with an authentication or permission error.

**Cause:** The API key used for the connection has read access (enough to load options) but lacks write permissions needed to perform the action.

**Fix:** Reconnect with a key that has both read and write scopes for the resources the action needs. Check the app-specific setup guide for required scopes.

### Connection not appearing after setup

**Symptom:** You completed the connection flow but the node still shows "Connect to [App] to configure this action".

**Cause:** The connection webhook from Pipedream may not have arrived yet, or the browser tab lost focus during the OAuth flow.

**Fix:**
1. Wait a few seconds and refresh the page
2. Check Settings → Integrations to confirm the connection appears there
3. If not listed, reconnect the app

## AI Nodes

### Model not responding or timing out

**Symptom:** The AI node hangs or returns a timeout error during execution.

**Cause:** The selected model may be under heavy load, or the prompt + context exceeds the model's context window.

**Fix:**
1. Try a different model from the model selector
2. Reduce the input size — shorten the prompt or limit upstream data passed in
3. Retry — transient provider errors are common

## Trigger Nodes

### Schedule trigger not firing

**Symptom:** The agent is deployed but the scheduled trigger doesn't execute at the expected time.

**Cause:** Cron schedules use UTC timezone. The schedule may be correct but offset from your local time.

**Fix:**
1. Verify the cron expression matches your intended UTC time
2. Check the agent's run history to confirm whether executions are happening at all
3. Ensure the agent is deployed (draft agents don't execute triggers)
