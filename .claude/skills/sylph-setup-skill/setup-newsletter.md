# Setup: Newsletter

Guide for setting up the newsletter skill by pulling past editions from the CAO's newsletter platform.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company website URL available in `CONTEXT.md`

## Step 1: Connect the newsletter tool

Ask the CAO:

> **What newsletter platform do you use?** (e.g., Substack, Beehiiv, Mailchimp, ConvertKit, HubSpot, Brevo, or other)

### If she uses a platform with MCP or API:

1. **Ask her to connect the MCP or API** for that platform
2. **Query past editions** - pull the last 15-20 newsletter editions with:
   - Subject line
   - Full body content
   - Send date
   - Performance data: subscribers, open rate, click rate, unsubscribes (if available)
3. **Save all editions to `content/newsletter/_published/`** with frontmatter:

```yaml
---
date: YYYY-MM-DD
channel: newsletter
topic: [derived from content]
format: [curated-links | long-form | hybrid | roundup | product-update]
status: published
performance:
  subscribers: [number if available]
  open_rate: [percentage if available]
  click_rate: [percentage if available]
tool: [Substack | Beehiiv | Mailchimp | etc.]
notes:
---

[full newsletter content here]
```

4. **Promote the top 3-5 editions** (by open rate or engagement) to `content/newsletter/_examples/`

### If the platform has a public archive (Substack, Beehiiv):

1. Search for the archive URL:
   - Check CONTEXT.md website for newsletter links
   - Search: `"[company name]" site:substack.com` or `"[company name]" newsletter archive`
   - Check website footer/navigation
2. **Use browser or WebFetch to read the last 15-20 editions** from the archive
3. Save to `content/newsletter/_published/` with frontmatter (performance data won't be available publicly)
4. Promote the 3-5 best to `_examples/`

### If no platform or archive available:

Ask:

> **Paste 2-3 of your recent newsletter editions. For each: what was the open rate and what subject line did you use?**

Save to `content/newsletter/_examples/` with the same frontmatter format.

## Step 2: Derive insights automatically

From all collected editions, analyze:

### Format analysis
- **Type**: curated links, long-form essay, hybrid, product updates, roundup?
- **Length**: typical word count per edition
- **Sections**: recurring sections and their order
- **Visual elements**: images, dividers, embedded content

### Voice analysis
- **Subject line style**: descriptive, curiosity-driven, numbered, emoji usage, length
- **Opener pattern**: personal anecdote, straight to value, weekly recap, question, news hook
- **Closer pattern**: CTA, question for replies, preview of next issue, signature
- **Tone**: how does newsletter voice differ from other channels? More personal? More curated?

### Performance analysis (if data available)
- **Best open rates**: which subject line styles drive opens?
- **Best click rates**: which content types drive clicks?
- **Unsubscribe patterns**: any edition types that lost subscribers?
- **Engagement trends**: growing or shrinking engagement over time?

### Topic analysis
- **Recurring themes**: what she covers most
- **Content mix**: original writing vs curated links vs announcements
- **Cadence**: sending frequency derived from dates

### Write insights

Write to `content/newsletter/_insights.md`:

```markdown
# Newsletter Insights

## Format
- Type: [curated / long-form / hybrid]
- Length: [typical word count]
- Sections: [recurring sections identified]
- Platform: [tool name]

## What works
- Subject lines: [top-performing patterns with data]
- Topics: [what drives opens and clicks]
- Opener style: [how editions open]
- Closer style: [how editions end]
- Best open rate: [X]% on [subject line style]

## What doesn't work
- [patterns from underperforming editions]
- [subject lines with low open rates]

## Cadence
- [sending frequency derived from dates]

## Audience
- Subscribers: [count if available]
- Audience signals from content targeting

## Performance benchmarks
- Median edition: [X]% open rate, [Y]% click rate
- Top edition: [X]% open rate, [Y]% click rate
- Below average: [X]% open rate
```

## Step 3: Confirm with the CAO

Present the derived insights:

> I pulled [N] newsletter editions from [platform]. Your typical format is [type], [length] words, published [cadence]. Best-performing subject lines use [pattern] with [X]% open rates. Your strongest sections are [sections]. Does this match? Anything to adjust?

Incorporate her corrections.

## Step 4: Configure the skill

Open `.claude/skills/newsletter/SKILL.md` and fill in:

- Newsletter structure (sections and order from analysis)
- Subject line patterns (from top performers)
- Opener/closer templates
- Voice adjustments (newsletter vs other channels)
- Platform-specific constraints and publishing workflow

## Step 5: Test generation

Generate one newsletter edition on a topic the CAO picks. Ask for feedback on structure, length, and tone. Capture edits in `content/newsletter/_insights.md`.
