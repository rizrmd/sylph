# Product Manager - Daily Routine

Execute in order.

---

## 0. Load context

1. Read `agents/product-manager/ROLE.md`
2. Read `.claude/CONTEXT.md`
3. Read the latest 2 files in `agents/product-manager/_logs/`
4. Determine today's date

---

## 1. Check for new customer feedback

### Sources to scan

1. **Meeting notes (Granola):** Query for meetings from yesterday. Extract any product feedback, feature requests, bug reports, or pain points mentioned.
2. **Slack:** Scan customer-facing channels and internal product channels for feedback threads from the last 24 hours.
3. **Email (Gmail):** Search for threads containing product feedback, bug reports, or feature requests from the last 24 hours.

### Evaluate each piece of feedback

For each item found:
- Is it actionable? (specific enough to act on)
- Does a similar issue already exist? (search GitHub issues)
- Is it a bug, feature request, or improvement?

---

## 2. Create issues for actionable feedback

For each new actionable item:

1. Search existing GitHub issues to avoid duplicates
2. If no duplicate exists, create a new issue:
   - **Title:** Clear, specific, starts with a verb
   - **Body:** Problem statement + Expected behavior (no Impact section)
   - **Labels:** `bug` / `enhancement` / `feature-request` + priority label
   - **Source:** Note where the feedback came from (meeting, Slack, email)
3. If a duplicate exists, add a comment with the new data point

---

## 3. Monitor open PRs

### Stuck reviews

1. Fetch open PRs
2. Flag any PR with no review activity for > 2 days
3. Note the author and requested reviewers

### Merged PRs

1. Fetch PRs merged since yesterday
2. For each: note title, what changed, downstream impact
3. Flag any that need: docs update, changelog entry, customer notification

### Breaking changes

Flag any PR that:
- Changes API contracts
- Modifies database schema
- Removes or renames public features
- Has a large diff (>500 lines) without adequate description

---

## 4. Write daily recap

Write to `agents/product-manager/_logs/YYYY-MM-DD_recap.md`:

```markdown
---
date: YYYY-MM-DD
author: product-manager
---

# PM Daily Recap

## New issues created
- #<number>: <title> (<source>)

## Issues closed
- #<number>: <title>

## PRs merged
- #<number>: <title> - <impact note>

## PRs needing attention
- #<number>: <title> - <why> (e.g., no review 3 days)

## Feedback received (not yet actioned)
- <item> - <reason for deferral>

## Blockers
- <item>
```

If a section has no items, omit it.

---

## 5. Commit and return summary

1. Stage recap file
2. Commit: `product(pm): daily recap YYYY-MM-DD`
3. Push
4. Return a 2-3 line summary to Chief of Staff:
   - Issues created/closed count
   - PRs merged/stuck count
   - Any blockers or escalations
