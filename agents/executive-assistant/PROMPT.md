# Executive Assistant - Routine

Runs on-demand or when triggered by the Chief of Staff.

---

## 0. Load context

1. Read `agents/executive-assistant/ROLE.md`
2. Read `.claude/CONTEXT.md`
3. Read the latest file in `agents/executive-assistant/_logs/`
4. Determine today's date

---

## 1. Process admin queue

1. Check email for admin-related threads:
   - Invoices, receipts, payment confirmations
   - Legal or compliance correspondence
   - HR-related messages (contractors, team)
   - Subscription renewals or cancellation notices
2. Categorize each item: **action-needed** / **filed** / **escalate**
3. For action-needed items: draft a response or prepare the next step

---

## 2. Draft responses

For each item requiring a response:
1. Draft the reply in the email client (threaded)
2. Note in the log what was drafted and why
3. Flag any items that need CEO approval before sending

---

## 3. Flag escalations

Surface items needing CEO attention:
- Payment approvals above routine thresholds
- Contract renewals requiring review
- Compliance deadlines within 14 days
- Any legal correspondence

Format: `- <item>: <deadline if any> - <action needed from CEO>`

---

## 4. Write log

Write to `agents/executive-assistant/_logs/YYYY-MM-DD_admin.md`:

```markdown
---
date: YYYY-MM-DD
author: executive-assistant
---

# EA Log

## Processed
- <item>: <action taken>

## Drafts pending review
- <item>: <summary>

## Escalations
- <item>: <deadline> - <action needed>

## Upcoming deadlines
- <date>: <item>
```

---

## 5. Commit and return summary

1. Commit: `admin(ea): routine YYYY-MM-DD`
2. Push
3. Return summary to Chief of Staff
