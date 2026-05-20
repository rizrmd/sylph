# Setup: Substack

Guide for setting up the Substack long-form skill by auto-discovering voice, structure, and audience insights from the web.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company name and CAO name available in `CONTEXT.md`

## Step 1: Find the Substack

1. Read `CONTEXT.md` for the company name, CAO name, and website URL.
2. Search for the Substack using multiple strategies:
   - Use WebSearch: `"[CAO name]" site:substack.com`.
   - Use WebSearch: `"[company name]" site:substack.com`.
   - Check the company website for Substack links (footer, blog page, about page).
3. If found, read the Substack homepage and pull the 5-8 most recent articles.
4. If not found, ask the CAO: **"What's your Substack URL?"**

## Step 2: Auto-extract examples

From the articles found in Step 1:

1. Read the full content of each article.
2. Identify the 3-4 best-performing articles based on engagement signals (likes, comments, restacks).
3. For each top article, save to `content/substack/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: substack
topic: [derived from content]
format: [essay | tutorial | opinion | interview | case-study]
status: published
performance:
  likes: [number if visible]
  comments: [number if visible]
  restacks: [number if visible]
notes: "[why it likely performed - topic, structure, angle]"
---
```

## Step 3: Auto-derive insights

Analyze all pulled articles to derive patterns. Look for:

- **Length**: typical word count per article.
- **Structure**: how does she organize articles? (narrative arc, problem-solution, step-by-step, opinion piece)
- **Voice**: how does her Substack voice differ from other channels? More personal? More opinionated? More technical?
- **Opening patterns**: how do articles start? (personal anecdote, bold claim, question, data point)
- **Closing patterns**: how do articles end? (CTA, question, summary, call for comments)
- **Topics and themes**: what subjects does she cover? Any recurring series or columns?
- **Paywall usage**: is content free or paywalled? What's the pattern?
- **Cross-posting signals**: does she reference other platforms? Adapt content from elsewhere?
- **Cadence**: how often does she publish? (weekly, biweekly, monthly)

Write the analysis to `content/substack/_insights.md`:

```markdown
# Substack Insights

## Voice
- Tone: [how Substack voice differs from other channels]
- Personal level: [how much personal story vs pure analysis]

## What works
- Topics: [what drives views and engagement]
- Format: [essay, tutorial, opinion, etc.]
- Length: [optimal word count derived from articles]
- Hooks: [opening patterns that retain readers]

## What doesn't work
- [any patterns in lower-engagement articles]

## Structure
- Typical article flow: [intro -> ... -> conclusion]
- Recurring sections: [any series or columns identified]

## Paywall strategy
- Free: [what's free]
- Paid: [what's paywalled, if applicable]

## Cross-posting
- [any cross-posting patterns observed]

## Cadence
- [publishing frequency derived from dates]

## Performance benchmarks
- Good post: [X] likes, [Y] comments (derived from data)
- Top post: [X] likes, [Y] comments (derived from best performers)
```

## Step 4: Confirm with the CAO

Present the derived insights summary to the CAO:

> "I analyzed your Substack and found: you publish [cadence], averaging [length] words. Your articles tend to follow a [structure] pattern, with a [voice description] voice. Your strongest pieces are about [topics]. Does this match? Anything to correct?"

Incorporate her corrections. Ask for any private data she'd like to add (subscriber count, open rates, growth drivers).

## Step 5: Configure the skill

Open `.claude/skills/content/substack-writer/SKILL.md` and fill in:

- Long-form structure template (from analysis)
- Voice calibration (personal level, opinion level)
- Cross-posting rules
- Paywall decision criteria
- Audience description

## Step 6: Test generation

Generate one Substack article outline + opening section on a topic the CAO picks. Ask for feedback. Capture edits in `content/substack/_insights.md`.
