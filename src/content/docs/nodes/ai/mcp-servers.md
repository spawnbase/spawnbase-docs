---
title: MCP Servers
description: Extend AI agent capabilities with external tools via Model Context Protocol. Connect code search, databases, issue trackers, and more.
---

MCP (Model Context Protocol) servers extend your AI agent's capabilities with external tools — code search, issue tracking, database access, and anything else an MCP server exposes.

## How It Works

1. Open an **AI Agent node** → scroll to **Tools** → click **Add Tool** → **Connect MCP Server**
2. Pick from the catalog or enter a custom server URL
3. Provide credentials (API key, headers, or OAuth)
4. Spawnbase discovers the server's tools and saves the connection
5. The connected server appears in the Add Tool dropdown for all your AI Agent nodes

Once connected, you select which MCP servers each agent node should use. The agent can then call those tools during execution.

## Adding a Server

### From the Catalog

The catalog lists popular MCP servers with pre-filled URLs. You just provide an API key.

### Custom Server

For any MCP-compatible server not in the catalog:

1. Click **Custom MCP Server**
2. Enter the server URL, name, and auth method
3. Test the connection — Spawnbase calls the server to discover available tools
4. Save

## Auth Methods

| Method             | How It Works                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------- |
| **None**           | No authentication. Server is publicly accessible.                                        |
| **Bearer Token**   | API key sent as `Authorization: Bearer <token>` header. Most common for catalog servers. |
| **Custom Headers** | You define arbitrary headers (e.g., `X-API-Key`, multiple auth headers).                 |
| **OAuth**          | Browser-based authorization flow. The server redirects you to its auth provider.         |

## Connection Scope

All MCP server connections are **user-level** — once connected, a server appears in the Add Tool dropdown across all your agents. You choose which servers each agent node uses.

### OAuth Limitation

OAuth MCP servers have one important difference: the OAuth token is stored **per agent node**, not per user.

This means:

- If you connect an OAuth MCP server in Agent A, it works in Agent A
- If you want to use the same OAuth server in Agent B, you need to **re-authorize** in Agent B
- Non-OAuth servers (bearer, custom, none) don't have this limitation — connect once, use everywhere

This is a technical limitation of how OAuth tokens are managed in the runtime. Each agent node has its own isolated runtime instance that stores the token.

## Supported Transports

Spawnbase runs in the cloud, so only remote transports are supported:

| Transport           | Description                                     |
| ------------------- | ----------------------------------------------- |
| **SSE**             | Server-Sent Events — the original MCP transport |
| **Streamable HTTP** | Newer HTTP-based transport (recommended)        |

`stdio` (local process) is **not supported** — MCP servers must be accessible over HTTP.

## Tips

- **Test before saving** — the "Test Connection" step verifies the server is reachable and discovers its tools. If it fails, check the URL and credentials.
- **Tool discovery is automatic** — Spawnbase queries the server for its tool list when you connect. You don't need to configure individual tools.
- **One URL per user** — you can't connect the same server URL twice. To change credentials, edit the existing connection.
