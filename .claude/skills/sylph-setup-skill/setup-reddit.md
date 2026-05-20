# Setup: Reddit

Guide for setting up the Reddit content skill by auto-discovering subreddit targeting, tone, and community patterns from the web.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company name and ICP available in `CONTEXT.md`

## Step 1: Find Reddit presence

1. Read `CONTEXT.md` for the company name, product name, ICP, and industry.
2. Search for existing Reddit presence using multiple strategies:
   - Use WebSearch: `"[company name]" site:reddit.com`.
   - Use WebSearch: `"[product name]" site:reddit.com`.
   - Search for the CAO's Reddit username: `"[CAO name]" site:reddit.com`.
   - Search for industry-relevant subreddits: `"[industry keywords]" subreddit reddit`.
3. From results, identify:
   - Subreddits where the company or product has been mentioned.
   - Subreddits where the CAO has posted or commented.
   - Subreddits where the target audience is active (based on ICP).
4. If no presence is found, ask the CAO: **"Which subreddits does your audience hang out in? Do you have a Reddit account?"**

## Step 2: Auto-extract examples

From the Reddit activity found in Step 1:

1. Pull the CAO's posts and comments if she has an active account.
2. Also pull highly-upvoted posts from target subreddits that match the company's domain - these serve as tone and format references.
3. For each relevant post, save to `content/reddit/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: reddit
subreddit: [r/subreddit]
topic: [derived from content]
format: [text-post | link-post | comment | ama]
status: published
performance:
  upvotes: [number if visible]
  comments: [number if visible]
notes: "[why it worked / what to learn about this subreddit's expectations]"
---
```

## Step 3: Auto-derive insights

For each target subreddit identified, analyze:

- **Community tone**: technical, casual, meme-friendly? What language do top posts use?
- **Post types that work**: genuine questions, sharing learnings, show-and-tell, resource lists?
- **What gets destroyed**: self-promo, clickbait, corporate speak, low-effort posts?
- **Flair requirements**: does the subreddit require specific flair?
- **Posting rules**: read sidebar rules for each subreddit.
- **Engagement patterns**: do top posts have the author actively replying in comments?
- **Mention patterns**: how do people in the subreddit talk about products? (organically, not promotionally)

Write the analysis to `content/reddit/_insights.md`:

```markdown
# Reddit Insights

## Target subreddits
| Subreddit | Subscribers | Tone | Key rules | Post types that work |
|-----------|------------|------|-----------|---------------------|
| r/[sub1] | [count] | [tone] | [key rules] | [types] |
| r/[sub2] | [count] | [tone] | [key rules] | [types] |

## What works
- Post types: [what gets upvoted in these communities]
- Tone: [authentic, helpful, non-promotional]
- Topics: [what the community cares about]

## What kills a post
- Self-promotion (Reddit hates it)
- Corporate language
- [other community-specific landmines derived from analysis]

## Engagement rules
- [how top posters participate in comments]
- [when to mention a product (almost never)]

## Performance benchmarks
- Good post: [X] upvotes (derived from subreddit norms)
- Front page of subreddit: [X] upvotes
```

## Step 4: Confirm with the CAO

Present the derived insights summary to the CAO:

> "I found these subreddits relevant to your audience: [list]. The community tone is [description]. Top posts tend to be [format/type]. Self-promotion is [tolerated/hated]. Does this match? Any subreddits to add or remove? Any past posts that got removed or downvoted I should know about?"

Incorporate her corrections. Note any bans or restrictions she mentions.

## Step 5: Configure the skill

Open `.claude/skills/content/reddit/SKILL.md` and fill in:

- Subreddit-specific voice rules (from analysis)
- Anti-promotion safeguards
- Post templates per subreddit
- Comment engagement guidelines
- Flair requirements

## Step 6: Test generation

Generate one Reddit post for a target subreddit. Ask the CAO to review for community fit. Capture feedback in `content/reddit/_insights.md`.
