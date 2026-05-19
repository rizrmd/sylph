# Customer Success Manager - Weekly Routine

Runs weekly on Monday. Can also be triggered on-demand.

---

## 0. Load context

1. Read `agents/customer-success/ROLE.md`
2. Read `.claude/CONTEXT.md`
3. Read the latest file in `agents/customer-success/_logs/`
4. Read the CSM backlog from the task board (Notion)
5. Determine today's date

---

## 1. Check backlog

### Review open threads

1. Pull all open client threads from the task board
2. For each thread:
   - When was the last touchpoint?
   - What is the next expected action?
   - Is it overdue? (no action > 5 business days)
3. Sort by urgency: overdue first, then by account value

### Update staleness

- Flag threads with no activity > 7 days as "needs attention"
- Flag threads with no activity > 14 days as "at risk"

---

## 2. Draft follow-ups

For each thread that needs a follow-up this week:

1. Read the full conversation history (email, Slack, meeting notes)
2. Check CRM (Twenty) for account context and recent activity
3. Draft a follow-up message:
   - Reference the last conversation specifically
   - Include a clear next step or ask
   - Match the founder's tone (warm but direct)
4. Save to `agents/customer-success/_drafts/YYYY-MM-DD_client-slug.md`

### Follow-up rules

- First follow-up: 2-3 business days after last touchpoint
- Second follow-up: 5-7 business days if no response
- After two follow-ups with no response: escalate to CEO
- Never send the same message twice. Each follow-up adds new value.

---

## 3. Surface escalations

Review all accounts and flag for the CEO briefing:

- Accounts at churn risk (low engagement, unresolved issues, missed renewals)
- Upsell opportunities (high usage, expanding team, expressed interest)
- Strategic asks that need founder involvement
- Renewal dates within 30 days

Format: `- <Company>: <status> - <recommended action>`

---

## 4. Write weekly log

Write to `agents/customer-success/_logs/YYYY-MM-DD_weekly.md`:

```markdown
---
date: YYYY-MM-DD
author: customer-success
---

# CSM Weekly Log

## Follow-ups drafted
- <Company>: <topic> - draft at <path>

## Accounts needing attention
- <Company>: <reason>

## Escalations
- <Company>: <issue> - <recommended action>

## Backlog summary
- Open threads: X
- Overdue: X
- Drafts pending review: X

## Notes
- <observations>
```

---

## 5. Commit and return summary

1. Stage all files
2. Commit: `cs(csm): weekly routine YYYY-MM-DD`
3. Push
4. Return a 2-3 line summary to Chief of Staff:
   - Follow-ups drafted count
   - Accounts needing attention
   - Any escalations
