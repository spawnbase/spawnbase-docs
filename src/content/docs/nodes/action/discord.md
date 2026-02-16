---
title: Discord
description: Send messages and automate community workflows.
---

The Discord node lets your agents send messages to Discord channels, including rich embeds and interactive components.

## Connection Setup

Discord uses a **bot token** for sending messages — user OAuth tokens cannot post to channels.

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create an application
2. Navigate to **Bot** → copy the bot token
3. Invite the bot to your server with the `Send Messages` permission
4. The bot token is configured as an environment variable in Spawnbase — contact your admin if messages fail with "bot token not configured"

:::caution
The bot must be a member of the server and have `Send Messages` permission in the target channel.
:::

## Available Actions

| Action       | Description                         |
| ------------ | ----------------------------------- |
| Send Message | Send a message to a Discord channel |

## Key Fields

| Field             | Required | Description                                                                                                  |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Channel ID        | Yes      | Discord channel ID — right-click the channel → Copy Channel ID (enable Developer Mode in Discord settings)   |
| Content           | No       | Message text. Optional if you provide embeds.                                                                |
| Embeds            | No       | [Discord embed objects](https://discord.com/developers/docs/resources/message#embed-object) for rich content |
| Message Reference | No       | Reply to a specific message by passing its message ID                                                        |

## Tips

- **Enable Developer Mode** in Discord (User Settings → Advanced → Developer Mode) to copy channel/message IDs via right-click.
- **Content or Embeds required** — at least one must be provided or Discord rejects the message.
