# Customer Report (360)

Build a comprehensive report on a single client by pulling structured data from Twenty CRM and conversational context from Gmail, Slack, Notion, and Granola.

## When to use

- "Everything we know about [client]"
- Pre-meeting brief
- Account health check
- Renewal or upsell prep

## Data sources

| Source | What to pull |
|--------|-------------|
| **Twenty CRM** | Company record, contacts, deal stage, ARR, contract dates, tags |
| **Gmail** | Last 10 threads with the client domain - key topics, tone, open asks |
| **Slack** | Mentions of the client name in relevant channels - support issues, internal notes |
| **Granola** | Meeting transcripts with the client in last 90 days - decisions, commitments, sentiment |
| **Notion** | Any client-specific pages or project boards |

## Process

1. **Identify the client** - resolve the name to a CRM record; confirm if ambiguous
2. **Pull CRM data** - company, contacts, deal, contract, ARR, tags
3. **Pull email threads** - summarize last 10 threads, flag open asks
4. **Pull Slack mentions** - summarize relevant messages, flag unresolved issues
5. **Pull meeting notes** - summarize last 3 meetings, extract commitments
6. **Pull Notion pages** - link any client-specific docs
7. **Synthesize** - identify patterns, risks, opportunities
8. **Output the report** using the template below

## Output template

```markdown
# [Client Name] - 360 Report
Generated: YYYY-MM-DD

## Quick facts
- **Stage**: [deal stage]
- **ARR**: [amount]
- **Contract**: [start] to [end]
- **Primary contact**: [name, role]
- **Health**: [green/yellow/red] - [one-line reason]

## Timeline (last 90 days)
- [date] - [event summary]
- ...

## Open items
- [ ] [item from email/Slack/meetings]
- ...

## Internal context
[What we've discussed internally about this client - from Slack and Notion]

## Recommended next step
[One clear action with owner and deadline]
```

## Guardrails

- **Read-only** - never modify CRM records, send emails, or post messages
- **Flag data gaps** - if a source returns nothing, say so explicitly
- **No speculation** - report what the data shows; flag inferences clearly
- **Respect PII** - the report is internal-only; still avoid unnecessary personal details
- **Ask for confirmation** if the client name is ambiguous or matches multiple records
