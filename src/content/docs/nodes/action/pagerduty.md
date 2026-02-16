---
title: PagerDuty
description: Create, ack, and list incidents.
---

The PagerDuty node lets your agents trigger, acknowledge, and resolve incidents, and find who's on call.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action               | Description                       |
| -------------------- | --------------------------------- |
| Trigger Incident     | Create a new incident             |
| Acknowledge Incident | Acknowledge an incident           |
| Resolve Incident     | Resolve an incident               |
| Find Oncall User     | Find who's on call for a schedule |

## Tips

- **Find Oncall User** is useful for agents that need to route alerts or escalations to the right person.
- **Trigger Incident** requires a service ID — this loads dynamically from your PagerDuty account.
