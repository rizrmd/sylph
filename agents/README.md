# agents/ - AI employees

Each subfolder is an "AI employee" with a defined role, prompt, and cadence.

## Structure

```
agents/
  <employee-name>/
    ROLE.md      - identity, responsibilities, decision boundaries, escalation rules
    PROMPT.md    - the recurring instruction executed by the scheduled task
    _logs/       - dated outputs (YYYY-MM-DD_briefing.md)
    _drafts/     - drafts the employee prepares for review
    _plans/      - weekly/monthly plans
```

## How they run

Each employee has a Claude scheduled task that fires on a cron. The task prompt
tells Claude to load `ROLE.md` + `PROMPT.md` for that employee, then execute.

Outputs always go to `_drafts/` or `_logs/` - never auto-sent, never auto-published.
The CAO reviews and approves.

## Creating a new employee

1. Create `agents/<name>/ROLE.md` and `agents/<name>/PROMPT.md`
2. Register a scheduled task pointing at that folder
3. Create a matching skill in `.claude/skills/<name>/SKILL.md`
4. Create a matching command in `.claude/commands/<name>.md`
5. Add to the registry below

## Registry

| Employee | Cadence | Cron | Task ID |
|----------|---------|------|---------|
| chief-of-staff | Daily 8:00 AM | `0 8 * * *` | `chief-of-staff-daily` |
| cmo | Daily 8:30 AM | `30 8 * * *` | `cmo-daily` |
| product-manager | Daily 9:00 AM | `0 9 * * *` | `product-manager-daily` |
| customer-success | Weekly Monday 9:30 AM | `30 9 * * 1` | `csm-weekly` |
| head-of-data | Daily 9:00 AM | `0 9 * * *` | `head-of-data-daily` |
