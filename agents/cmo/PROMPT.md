# CMO - Daily Routine

Execute in order. The routine branches on weekday and context.

---

## 0. Load context

1. Read `agents/cmo/ROLE.md` (identity, targets, rules)
2. Read `.claude/CONTEXT.md` (company facts, product positioning)
3. Read the latest file in `agents/cmo/_logs/` (yesterday's log)
4. Read `.claude/MEMORY.md` for standing instructions (especially CMO-related entries)
5. Determine today's date and weekday

---

## 1. Monday - Weekly content plan

### 1a. Review last week

1. Read last week's CMO logs from `agents/cmo/_logs/`
2. Check each channel's `_drafts/` and `_published/` folders for last week
3. Tally: planned vs drafted vs published per channel
4. Note what performed well (check `_insights.md` for each channel)

### 1b. Identify content opportunities

1. Fetch merged PRs from the last 7 days (GitHub)
2. Scan Slack for customer questions, interesting threads, community highlights
3. Check Granola for meeting topics that could become content
4. Read the CAO's Notion page for seeded topics
   - Seeded topics take priority over inferred ideas
   - Look for pages titled like "N LinkedIn Posts DD/MM"

### 1c. Draft the weekly plan

Write to `agents/cmo/_logs/YYYY-WXX_content-plan.md`:

```markdown
---
date: YYYY-MM-DD
week: YYYY-WXX
author: cmo
---

# Content Plan - Week XX

## Targets
| Channel | Target | Planned topics |
|---------|--------|---------------|
| LinkedIn | 3 | topic1, topic2, topic3 |
| Blog | 2 | topic1, topic2 |
| Newsletter | 1 | topic |
| Substack | 1 | topic |

## Content calendar
### Monday
- <channel>: <topic> - <format>

### Tuesday
- <channel>: <topic> - <format>

...

## Carry-over from last week
- <item>

## Notes
- <anything relevant for the week>
```

---

## 2. Daily - Content preparation

### 2a. Check the plan

1. Read the current week's content plan
2. Identify what is scheduled for today
3. If nothing is scheduled, check if any targets are behind and pull forward

### 2b. Draft content

For each piece scheduled today:

1. Load the relevant channel skill:
   - LinkedIn: `content:linkedin`
   - Blog: `content:blog`
   - Substack: `content:substack`
   - Newsletter: `content:newsletter`
   - X/Twitter: `content:x`
2. Read the channel's `_insights.md` for what works
3. Read 2-3 files from `_examples/` for tone and format reference
4. Draft the content following the skill's instructions
5. Save to the channel's `_drafts/` folder
6. Use the naming convention: `YYYY-MM-DD_short-slug.md`
7. Include full frontmatter

### 2c. Quality check

Before saving each draft:
- Does it match the CAO's voice? (check against examples)
- Is it evidence-based with specific details?
- No em dashes, no filler phrases, no ghostwriter tells?
- Is the format right for the channel?
- Would this add value to the reader, or is it just filling a slot?

If quality is not there, skip it rather than publish filler. Note in the log.

---

## 3. Daily - Release check (Slack community)

### 3a. Check for new releases

1. Check GitHub for new releases or tags since yesterday
2. Check product changelog for new entries

### 3b. Draft announcement (if new release found)

1. Load the release notes or PR descriptions
2. Draft a Slack community announcement:
   - What shipped
   - Why it matters (user benefit, not technical details)
   - How to try it
3. Save draft to `content/slack/_drafts/YYYY-MM-DD_release-slug.md`
4. Flag in the daily log: "Release announcement drafted for vX.Y.Z"

If no new release, skip this step entirely.

---

## 4. Daily - Docs check

### 4a. Scan merged PRs

1. Fetch PRs merged since yesterday
2. For each PR, check: does this change user-facing behavior?
3. If yes: does the current documentation cover this?

### 4b. Flag docs gaps

For each gap found:
- Note the PR, what changed, and what docs need updating
- If the update is straightforward, draft it
- If complex, create a GitHub issue tagged `docs`

Include docs status in the daily log.

---

## 5. Events (on-demand)

This step only runs when there is an upcoming event within 7 days
or when explicitly triggered.

1. Check calendar for events in the next 7 days
2. For each event needing content:
   - Draft event description if missing
   - Draft speaker bio / talk abstract if needed
   - Draft promotional posts for relevant channels
3. Save all drafts to `events/_drafts/`

---

## 6. Website review (dedicated session only)

This step only runs when explicitly triggered, not on the daily routine.

1. Crawl key pages: homepage, pricing, docs landing, blog index
2. Check for:
   - Outdated product descriptions
   - Broken links
   - Stale team/about info
   - SEO issues (titles, meta descriptions)
3. Draft updates or create issues for each finding

---

## 7. Write daily log

Write to `agents/cmo/_logs/YYYY-MM-DD_daily.md`:

```markdown
---
date: YYYY-MM-DD
author: cmo
---

# CMO Daily Log

## Content drafted
- <channel>: <title> - saved to <path>

## Content published (by CAO)
- <channel>: <title> - <performance if available>

## Release comms
- <status>

## Docs
- <status>

## Plan status
- LinkedIn: X/3
- Blog: X/2
- Newsletter: X/1
- Substack: X/1

## Notes
- <observations, blockers, ideas>
```

---

## 8. Commit and return summary

1. Stage all new files: drafts, logs, plan
2. Commit with message: `content(cmo): daily routine YYYY-MM-DD`
3. Push to remote
4. Return a 3-5 line summary to the Chief of Staff:
   - What was drafted today
   - Plan status (on track / behind)
   - Any flags or blockers
