---
title: Schedule Trigger
description: Configure recurring agent execution — minutely, hourly, daily, weekly, monthly, or custom cron expressions.
---

The Schedule Trigger runs your agent automatically on a recurring schedule. Configure when and how often your agent executes.

## Configuration

### Frequency Options

| Frequency | Description | Example |
|-----------|-------------|---------|
| **Every X minutes** | Run every N minutes | Every 15 minutes |
| **Hourly** | Run once per hour at a specific minute | Every hour at :30 |
| **Daily** | Run once per day at a specific time | Daily at 9:00 AM |
| **Weekly** | Run on specific days of the week | Monday, Wednesday, Friday at 9:00 AM |
| **Monthly** | Run on a specific day of the month | 1st of every month at 9:00 AM |
| **Custom (cron)** | Advanced: use cron expression | `0 9 * * 1-5` (weekdays at 9 AM) |

**Default:** Daily at 9:00 AM UTC

### Timezone

All schedules run in the configured timezone. Select from major business timezones:

| Region | Timezones |
|--------|-----------|
| Americas | Los Angeles, Denver, Chicago, New York, São Paulo |
| Europe | London, Paris, Moscow |
| MENA | Dubai |
| Asia & Pacific | Mumbai, Singapore, Tokyo, Sydney, Auckland |

**Default:** UTC (or your browser's timezone on first configuration)

Timezones automatically handle daylight saving time transitions.

## Frequency Details

### Every X Minutes

Run at regular intervals throughout the day.

| Field | Description |
|-------|-------------|
| Interval | Minutes between runs (5, 10, 15, 30, etc.) |

Example: Every 15 minutes = runs at :00, :15, :30, :45 past each hour.

### Hourly

Run once per hour.

| Field | Description |
|-------|-------------|
| Minute | Minute of each hour (0-59) |

Example: Minute 30 = runs at 12:30, 13:30, 14:30, etc.

### Daily

Run once per day.

| Field | Description |
|-------|-------------|
| Time | Hour and minute (e.g., 09:00) |

Example: 9:00 AM = runs once daily at 9:00 AM in configured timezone.

### Weekly

Run on specific days of the week.

| Field | Description |
|-------|-------------|
| Days | Select one or more days (Sun-Sat) |
| Time | Hour and minute |

Example: Monday, Wednesday, Friday at 9:00 AM.

### Monthly

Run on a specific day each month.

| Field | Description |
|-------|-------------|
| Day | Day of month (1-31) |
| Time | Hour and minute |

Example: 1st of every month at 9:00 AM.

Note: If day doesn't exist in a month (e.g., 31st in February), the run is skipped.

### Custom (Cron)

For advanced scheduling, enter a cron expression directly.

```
┌───────────── minute (0-59)
│ ┌───────────── hour (0-23)
│ │ ┌───────────── day of month (1-31)
│ │ │ ┌───────────── month (1-12)
│ │ │ │ ┌───────────── day of week (0-6, Sun=0)
│ │ │ │ │
* * * * *
```

Common cron expressions:

| Expression | Description |
|------------|-------------|
| `0 9 * * *` | Daily at 9:00 AM |
| `0 9 * * 1-5` | Weekdays at 9:00 AM |
| `0 */2 * * *` | Every 2 hours |
| `30 8 1 * *` | 1st of month at 8:30 AM |
| `0 0 * * 0` | Every Sunday at midnight |

## Output

The schedule trigger provides execution context to downstream nodes:

| Field | Type | Description |
|-------|------|-------------|
| `scheduledTime` | string | ISO timestamp of when run was scheduled |
| `actualTime` | string | ISO timestamp of actual execution start |
| `runId` | string | Unique identifier for this run |

Access in downstream nodes:
```
{{trigger.scheduledTime}}
{{trigger.runId}}
```

## Examples

### Daily Report
```yaml
Frequency: Daily
Time: 09:00
Timezone: America/New_York
```
Generates a report every morning at 9 AM Eastern.

### Weekday Monitoring
```yaml
Frequency: Weekly
Days: Mon, Tue, Wed, Thu, Fri
Time: 08:00
Timezone: UTC
```
Monitors systems every weekday morning.

### Frequent Polling
```yaml
Frequency: Every X minutes
Interval: 5
```
Checks for updates every 5 minutes.

### End of Month Processing
```yaml
Frequency: Custom (cron)
Expression: 0 18 L * *
Timezone: America/Los_Angeles
```
Runs at 6 PM Pacific on the last day of each month.

## Best Practices

1. **Choose appropriate frequency** - Don't poll every minute if hourly is sufficient
2. **Consider timezone carefully** - Business workflows should match business hours
3. **Use descriptive agent names** - Include schedule in name (e.g., "Daily Error Summary")
4. **Test before deploying** - Use manual runs to verify workflow before enabling schedule

## See Also

- [Nodes Overview](/nodes/overview) - All node types
- [AI Agent](/nodes/ai/agent) - LLM-powered processing
- [Deploy Agents](/agents/deploy) - Deploying scheduled agents
