---
title: Slack
description: Send updates, schedule reminders, and collaborate with your team in real time.
---

The Slack node lets your agents send messages to channels, users, and threads — including scheduled messages and rich Block Kit layouts.

## Connection Setup

Standard OAuth via Spawnbase. When you connect Slack, the bot is added to your workspace and can post to any channel it's been invited to.

:::note
The bot auto-joins channels when sending. If a message fails with a "not in channel" error, manually invite the bot with `/invite @Spawnbase`.
:::

## Available Actions

| Action       | Description                         |
| ------------ | ----------------------------------- |
| Send Message | Send a message to a channel or user |

## Key Fields

| Field            | Required | Description                                                                           |
| ---------------- | -------- | ------------------------------------------------------------------------------------- |
| Channel          | Yes      | Channel ID (`C123...`) or User ID (`U123...`) — loads dynamically from your workspace |
| Text             | Yes      | Message content. Required even when using Blocks.                                     |
| Blocks           | No       | [Block Kit](https://api.slack.com/block-kit) JSON payload for rich layouts            |
| Thread Timestamp | No       | Reply to a specific thread (`1403051575.000407` format)                               |
| Schedule At      | No       | ISO 8601 timestamp or UNIX seconds to schedule the message for later                  |

## Tips

- **Channel ID, not name** — use the channel ID (`C0123ABC`), not `#general`. Find it in Slack: channel name → About → scroll to bottom.
- **Scheduled messages** — set the `Schedule At` field to send later. The bot must stay in the channel until delivery.
- **Thread replies** — pass `Thread Timestamp` to reply in a thread. Enable `Reply Broadcast` to also post to the channel.
