# Setup: Website

Guide for setting up the website copy skill by auto-discovering voice, structure, and CTA patterns from the live site.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company website URL available in `CONTEXT.md`

## Step 1: Read the website

1. Read `CONTEXT.md` for the company website URL.
2. Use WebFetch to pull the following pages:
   - Homepage
   - About page
   - Pricing page (if it exists)
   - Product/features page
   - Blog index (if it exists)
   - Changelog (if it exists)
   - Any landing pages linked from the main nav
3. For each page, extract the full copy text.

## Step 2: Auto-extract examples

Save the strongest page copy as reference examples. Identify pages where the copy feels most polished and on-brand.

For each strong page, save to `content/website/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: website
page_type: [homepage | pricing | about | product | changelog | docs]
status: published
notes: "[what works about this copy - voice, structure, CTAs]"
---
```

## Step 3: Auto-derive insights

Analyze all pulled pages to derive patterns. Look for:

- **Voice**: what's the copy tone? (technical, playful, enterprise, founder-led, benefit-driven)
- **Page structure**: how are pages organized? (hero -> features -> social proof -> CTA)
- **CTA patterns**: what CTAs are used? (aggressive "Start free trial", soft "Learn more", playful) Where are they placed?
- **Headline style**: short and punchy? Benefit-led? Question-based?
- **Social proof**: how is trust built? (logos, testimonials, case studies, metrics)
- **SEO metadata**: check title tags, meta descriptions, OG tags for patterns.
- **Tech stack signals**: look for framework indicators in the HTML (Next.js, Webflow, WordPress, etc.).
- **Competitor comparison**: if `CONTEXT.md` mentions competitors, optionally pull one competitor's homepage to note copy differences.

Write the analysis to `content/website/_insights.md`:

```markdown
# Website Insights

## Tech stack
- [framework/CMS derived from page source]

## Page types
- [list of pages that exist on the site]

## Voice
- Tone: [how web copy reads - derived from analysis]
- Headline style: [short/benefit-led/question-based]
- CTA style: [aggressive/soft/playful - with examples]

## Structure patterns
- Homepage: [hero -> features -> social proof -> CTA or similar]
- Product page: [structure observed]
- Pricing page: [structure observed]

## SEO
- Title tag pattern: [format derived from actual tags]
- Meta description pattern: [format derived from actual tags]
- OG tags: [approach observed]

## Social proof
- [how trust is built: logos, testimonials, metrics]

## What works
- [copy patterns that feel strongest]

## What could improve
- [gaps or inconsistencies noticed]
```

## Step 4: Confirm with the CAO

Present the derived insights summary to the CAO:

> "I analyzed your website and found: [voice description], [CTA style], [structure patterns]. The copy is strongest on [page]. I noticed [any gaps or inconsistencies]. Does this match your intent? Any pages I should focus on or ignore?"

Incorporate her corrections. Ask about the update workflow: "How do changes get from draft to live? (edit in CMS, commit to repo, PR review)"

## Step 5: Configure the skill

Open `.claude/skills/content/website/SKILL.md` and fill in:

- Page templates (structure per page type from analysis)
- Copy voice rules (concise, benefit-led, etc.)
- SEO metadata templates
- CTA library
- Update workflow steps

## Step 6: Test generation

Generate a rewrite of one website page section (e.g., homepage hero). Ask for feedback. Capture edits in `content/website/_insights.md`.
