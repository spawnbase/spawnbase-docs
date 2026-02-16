---
title: Quickstart
description: Build your first workflow in 5 minutes
---

Spawnbase is an AI-powered workflow automation platform. Describe what you want to automate in plain English, and the AI copilot builds it for you. Then fine-tune with the visual canvas.

## Prerequisites

- A Spawnbase account ([sign up here](https://spawnbase.ai))
- Basic understanding of what you want to automate

## Step 1: Open the Builder

1. Log in to your Spawnbase dashboard
2. Click **New Workflow**
3. You'll see the workflow builder with the copilot panel open

## Step 2: Describe Your Workflow

In the copilot chat, describe what you want to automate:

```
Every day at 9am, fetch my unread emails,
summarize them with AI, and send the summary to Slack
```

The copilot will generate a workflow structure:

- **Schedule Trigger** - Daily at 9:00 AM
- **Gmail Action** - Fetch unread emails
- **AI Step** - Summarize email content
- **Slack Action** - Post to channel

## Step 3: Review the Canvas

The generated workflow appears on the canvas. Each node shows:

- **Icon** - Visual indicator of the node type
- **Label** - What the node does
- **Connections** - How data flows between nodes

Click any node to see its configuration in the right panel.

## Step 4: Configure Connections

Before running, you need to connect your apps:

1. Click the **Gmail** node
2. Click **Connect Account**
3. Authorize Spawnbase to access your Gmail
4. Repeat for **Slack**

## Step 5: Test Your Workflow

1. Click **Test** in the header
2. The workflow runs with sample data
3. Check each node's output in the execution panel
4. Verify the Slack message was sent

## Step 6: Deploy

Once testing passes:

1. Click **Deploy**
2. Choose your environment (Preview or Production)
3. Your workflow is now live!

## What's Next?

- Understand [what agents are](/agents/overview/)
- Learn [how to build](/agents/build/)
- See [how to deploy](/agents/deploy/)
