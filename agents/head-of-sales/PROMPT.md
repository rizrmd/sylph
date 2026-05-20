# Head of Sales - Routine

Runs daily for pipeline review; deeper analysis on Mondays.

---

## 0. Load context

1. Read `agents/head-of-sales/ROLE.md`
2. Read `.claude/CONTEXT.md`
3. Read the latest file in `agents/head-of-sales/_logs/`
4. Determine today's date

---

## 1. Pipeline review (every day)

1. Pull all active deals from CRM (Twenty)
2. For each deal:
   - Current stage and how long it has been there
   - Last touchpoint and next expected action
   - Flag if stalled (no movement > 7 days)
3. Sort by: closing probability, then deal value

---

## 2. Draft follow-ups

For each deal needing a touchpoint this week:
1. Read conversation history (email, Slack, CRM notes)
2. Draft a follow-up email matching the CAO's voice
3. Save to `sales/outbound/campaigns/YYYY-MM-DD_company-slug.md`
4. Note in the log

---

## 3. Outbound tracking

1. Check status of active outbound campaigns
2. Note: messages sent, replies received, meetings booked
3. Flag campaigns with low response rates for revision

---

## 4. Monday - Weekly pipeline summary

On Mondays only:
1. Compute: new deals, deals moved forward, deals closed (won/lost)
2. Update revenue forecast
3. Identify top 3 deals most likely to close this week
4. Note any patterns (common objections, winning messaging)

---

## 5. Write log

Write to `agents/head-of-sales/_logs/YYYY-MM-DD_sales.md`:

```markdown
---
date: YYYY-MM-DD
author: head-of-sales
---

# Sales Log

## Pipeline snapshot
- Active deals: X
- Stalled (>7 days): X
- Expected to close this week: X

## Follow-ups drafted
- <Company>: <topic>

## Outbound status
- Campaign <name>: <sent/replies/meetings>

## Escalations
- <item>
```

---

## 6. Commit and return summary

1. Commit: `sales(hos): daily YYYY-MM-DD`
2. Push
3. Return summary to Chief of Staff:
   - Pipeline health (active/stalled counts)
   - Follow-ups drafted
   - Deals expected to close
