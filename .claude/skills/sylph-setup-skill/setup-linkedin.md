# Setup: LinkedIn

Guide for setting up the LinkedIn content skill by scraping the CAO's personal LinkedIn posts via browser.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Browser use available (computer use or Chrome MCP)

## Step 1: Get the CAO's LinkedIn profile

Ask the CAO ONE question:

> **What's your LinkedIn profile URL?**

If she doesn't provide it, derive from CONTEXT.md (her name) and search `"[name]" site:linkedin.com/in`.

## Step 2: Scrape posts via browser

Use browser automation (computer use or Chrome MCP) to read the CAO's personal LinkedIn posts:

1. **Navigate to her LinkedIn profile** -> Activity -> Posts
2. **Scroll and collect posts from the last 6 months**
   - If fewer than 20 posts found in 6 months, extend to 12 months
   - Goal: collect at least 20 posts for meaningful pattern analysis
3. **For each post, capture:**
   - Full text content
   - Date posted
   - Format (text-only, image, carousel, poll, video, article share)
   - Engagement: likes count, comments count, reposts count
   - First 3-5 comments (for audience signal)

### Scraping process

```
1. Open the profile URL
2. Click "Activity" tab, then "Posts"
3. Scroll down to load more posts
4. For each post:
   a. Read the full text (click "...see more" if truncated)
   b. Note the date, format, and engagement counts
   c. Save the content
5. Keep scrolling until you have 20+ posts or hit the time limit
```

### Save all posts to `content/linkedin/_published/`

For each post, save to `content/linkedin/_published/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: linkedin
topic: [derived from post content]
format: [text-only | image | carousel | poll | video | article-share]
status: published
performance:
  likes: [number]
  comments: [number]
  reposts: [number]
notes:
---

[full post text here]
```

## Step 3: Promote best examples

From the collected posts, identify the top 3-5 by engagement and copy them to `content/linkedin/_examples/`:

- Pick posts with highest engagement relative to her average
- Ensure variety: different formats, topics, and hook styles
- Also save 1 low-performing post as a counter-example

## Step 4: Derive insights automatically

Analyze all collected posts to find patterns:

### Voice analysis
- **Sentence patterns**: short/long, fragments, rhetorical questions
- **Vocabulary**: technical level, jargon, conversational vs formal
- **Person**: does she write as "I" or "we"?
- **Emoji/formatting**: does she use emojis, line breaks, bold text?

### Format analysis
- **Best format**: which format (text-only, image, carousel) gets the most engagement?
- **Length**: are shorter or longer posts performing better? What's the sweet spot?
- **Structure**: single block, spaced lines, numbered lists, storytelling arc?

### Hook analysis
- **Opening patterns**: how do her best posts start? (question, bold statement, story, statistic, contrarian take)
- **First line**: what makes someone click "see more"?

### Topic analysis
- **Recurring themes**: what subjects does she write about most?
- **Top performers**: what topics drive the most engagement?
- **Positioning**: how does she tie posts back to her company/product?

### Engagement patterns
- **CTA patterns**: how do posts end? (question for comments, link, no CTA)
- **Hashtag usage**: does she use them? How many? Which ones?
- **Cadence**: how often does she post? Any day-of-week patterns?
- **Audience**: who comments? (peers, prospects, team, community)

### Write insights

Write the analysis to `content/linkedin/_insights.md`:

```markdown
# LinkedIn Insights

## Voice
- [Derived voice characteristics specific to LinkedIn]
- [Sentence patterns, vocabulary level, formatting habits]

## What works
- Format: [best-performing formats with data]
- Topics: [themes that drive engagement]
- Hooks: [opening patterns from top posts]
- Length: [optimal length range]
- CTAs: [what ending patterns drive comments]

## What doesn't work
- [Patterns from underperforming posts]

## Cadence
- Posts per week/month: [derived from dates]
- Best days: [if pattern visible]

## Hashtags
- [Strategy derived from actual usage]

## Audience
- [Who engages, derived from comment analysis]

## Performance benchmarks
- Median post: [X] likes, [Y] comments
- Top post: [X] likes, [Y] comments
- Below average: [X] likes, [Y] comments
```

## Step 5: Confirm with the CAO

Present the derived insights summary:

> I scraped your last [N] LinkedIn posts and found: [summary of top patterns]. Your best posts tend to be [format] about [topics] with [hook style] openers. Your median engagement is [X] likes, [Y] comments. Does this match your sense of what works?

Incorporate her corrections.

## Step 6: Configure the skill

Open `.claude/skills/linkedin/SKILL.md` and update with derived rules:

- Voice rules (LinkedIn-specific tone from analysis)
- Format constraints (preferred post structure)
- Hook patterns (from top-performing examples)
- CTA patterns (how posts typically end)
- Length guidelines (from data)
- Audience description

## Step 7: Test generation

Generate one LinkedIn post on a topic the CAO picks. Ask for feedback. Capture any edits as the first learning in `content/linkedin/_insights.md`.
