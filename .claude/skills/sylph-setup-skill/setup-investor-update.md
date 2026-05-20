# Setup: Investor Update

Guide for setting up the investor update skill with the CAO's format, metrics, and voice.

## Prerequisites

- Global setup complete (`/sylph-setup`)

## Step 1: Gather an example from the CAO

Investor updates are private and can't be derived from the web. Ask the CAO one question:

**"Paste your last investor update (or the one you're most happy with). I'll derive your format, metrics, structure, and tone from it."**

That's it. One example is enough to derive everything.

## Step 2: Auto-extract patterns from the example

From the investor update she provides, analyze:

1. **Structure**: what sections does she include? (TL;DR, highlights, metrics, product update, team, asks, lowlights)
2. **Metrics**: what numbers does she report? (MRR, growth rate, runway, burn, users, retention, etc.)
3. **Tone**: transparent and direct? Optimistic? Data-heavy? How does she handle bad news?
4. **Length**: total word count and per-section balance.
5. **Format**: is it an email, PDF, Notion page, or Google Doc?
6. **Cadence signals**: does the update reference "this month" or "this quarter"?
7. **Narrative approach**: does she lead with wins, lead with metrics, or lead with a story?

Save the example to `finance/investor-updates/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: investor-update
format: [monthly | quarterly]
status: published
notes: "[structure, tone, and what works about this update]"
---
```

## Step 3: Write insights

Write the derived analysis to `finance/investor-updates/_insights.md`:

```markdown
# Investor Update Insights

## Format
- Cadence: [monthly / quarterly - derived from update]
- Distribution: [email / PDF / Notion - derived from format]
- Recipients: [ask CAO if not obvious]

## Structure
1. [Section 1 - e.g. TL;DR / highlights]
2. [Section 2 - e.g. key metrics]
3. [Section 3 - e.g. product update]
4. [Section 4 - e.g. team / hiring]
5. [Section 5 - e.g. asks]

## Key metrics
| Metric | Source | How to pull |
|--------|--------|-------------|
| [metric 1] | [source if mentioned] | [method] |
| [metric 2] | [source if mentioned] | [method] |

## Tone
- [transparent, direct, founder-voice - derived from example]
- Bad months: [how she frames challenges - derived from example]

## What investors care about
- [top concerns derived from the update's emphasis and asks section]
```

## Step 4: Confirm with the CAO

Present the derived insights:

> "From your update, I see: [number] sections, [cadence], leading with [narrative approach]. Key metrics are [list]. Your tone is [description]. Does this capture it? Who receives these updates - all investors, board only, advisors too?"

Incorporate her corrections.

## Step 5: Configure the skill

Open `.claude/skills/finance/investor-update/SKILL.md` and fill in:

- Update template (section by section from analysis)
- Metrics table with data sources
- Tone and voice rules
- Distribution workflow

## Step 6: Test generation

Generate one investor update for the current month. Ask for feedback on structure, tone, and metrics coverage. Capture edits in `finance/investor-updates/_insights.md`.
