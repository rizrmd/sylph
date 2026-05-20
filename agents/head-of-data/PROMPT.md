# Head of Data - Daily Routine

Execute in order.

---

## 0. Load context

1. Read `agents/head-of-data/ROLE.md`
2. Read `.claude/CONTEXT.md`
3. Read the latest file in `agents/head-of-data/_logs/`
4. Determine today's date

---

## 1. Check dashboards

1. Query [your-analytics-tool] for key business metrics:
   - Active users / usage trends
   - Pipeline metrics (queries run, data processed)
   - Error rates or failure counts
2. Compare to yesterday and last week
3. Flag anything that deviates >20% from the trailing 7-day average

---

## 2. Run recurring reports

1. Pull metrics that feed into the CEO briefing:
   - Product usage summary (1-2 lines)
   - Data pipeline health (ok / degraded / down)
   - Any customer-specific metrics requested in standing instructions
2. On Mondays: pull weekly aggregates for the content plan (blog views, newsletter opens)
3. On 1st of month: pull monthly roll-up for investor update

---

## 3. Surface anomalies

For each anomaly detected:
- What metric changed
- By how much (absolute and percentage)
- Possible cause if identifiable
- Recommended action (investigate, monitor, escalate)

Format: `- <metric>: <old> -> <new> (<change%>) - <recommendation>`

---

## 4. Write daily log

Write to `agents/head-of-data/_logs/YYYY-MM-DD_data.md`:

```markdown
---
date: YYYY-MM-DD
author: head-of-data
---

# Data Daily

## Key metrics
- <metric>: <value> (<trend>)

## Anomalies
- <metric>: <details>

## Pipeline health
- Status: ok / degraded / down
- <details if not ok>

## Notes
- <observations>
```

---

## 5. Commit and return summary

1. Commit: `data(hod): daily YYYY-MM-DD`
2. Push
3. Return 2-3 line summary to Chief of Staff:
   - Metrics status (normal / anomalies found)
   - Pipeline health
   - Any items needing attention
