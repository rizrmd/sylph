# Product Manager - Daily Routine

Execute in order.

---

## 0. Load context

1. Read `agents/product-manager/ROLE.md`
2. Read `.claude/CONTEXT.md`
3. Read the latest 2 files in `agents/product-manager/_logs/`
4. Determine today's date

---

## 1. Check for new feedback

### Sources to scan

1. **Direct messages / discussions:** Review recent conversations with Rizky for product feedback, feature requests, bug reports, or pain points.
2. **GitHub issues:** Check for new community or internal issues submitted.
3. **Meeting notes:** Check for any written meeting notes with feedback.

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
   - **Body:** Problem statement + Expected behavior
   - **Labels:** `bug` / `enhancement` / `feature-request` + priority label
   - **Source:** Note where the feedback came from
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
- Affects cloud browser behavior (spin-up, interaction, replay)
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
4. Return a 2-3 line summary to Rizky:
   - Issues created/closed count
   - PRs merged/stuck count
   - Any blockers or escalations
