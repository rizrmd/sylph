# Customer Success Manager - Weekly Routine

Runs weekly on Monday. Can also be triggered on-demand.

---

## 0. Load context

1. Read `agents/customer-success/ROLE.md`
2. Read `.claude/CONTEXT.md`
3. Read the latest file in `agents/customer-success/_logs/`
4. Determine today's date

---

## 1. Check backlog

### Review open threads

1. Pull all open user threads from conversations
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

1. Read the full conversation history
2. Draft a follow-up message:
   - Reference the last conversation specifically
   - Include a clear next step or ask
   - Match Rizky's tone (direct, humble, technical)
3. Save to `agents/customer-success/_drafts/YYYY-MM-DD_user-slug.md`

### Follow-up rules

- First follow-up: 2-3 business days after last touchpoint
- Second follow-up: 5-7 business days if no response
- After two follow-ups with no response: escalate to Rizky
- Never send the same message twice. Each follow-up adds new value.

---

## 3. Surface escalations

Review all accounts and flag for Rizky:

- Accounts at churn risk (low engagement, unresolved issues, missed renewals)
- Upsell opportunities (high usage, expanding team, expressed interest)
- Strategic asks that need CAO involvement

Format: `- <User>: <status> - <recommended action>`

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
- <User>: <topic> - draft at <path>

## Accounts needing attention
- <User>: <reason>

## Escalations
- <User>: <issue> - <recommended action>

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
4. Return a 2-3 line summary to Rizky:
   - Follow-ups drafted count
   - Users needing attention
   - Any escalations
