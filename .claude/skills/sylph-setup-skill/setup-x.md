# Setup: X (Twitter)

Guide for setting up the X/Twitter content skill by auto-discovering voice, format, and engagement patterns from the web.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company name and CAO name available in `CONTEXT.md`

## Step 1: Find the X account

1. Read `CONTEXT.md` for the company name, CAO name, and website URL.
2. Search for the X handle using multiple strategies:
   - Check the company website for X/Twitter links (header, footer, social icons).
   - Use WebSearch: `"[company name]" site:x.com OR site:twitter.com`.
   - Use WebSearch: `"[CAO name]" site:x.com OR site:twitter.com`.
3. If found, pull the profile and recent tweets/threads via web search or scraping the public profile.
4. If not found, ask the CAO: **"What's your X/Twitter handle?"**

## Step 2: Auto-extract examples

From the tweets and threads found in Step 1:

1. Identify the 3-5 best-performing tweets (highest engagement: likes, retweets, replies).
2. Separately identify 1-2 strong threads if she uses them.
3. For each top tweet/thread, save to `content/x/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: x
topic: [derived from content]
format: [tweet | thread | quote-tweet]
status: published
performance:
  likes: [number if visible]
  retweets: [number if visible]
  replies: [number if visible]
notes: "[why it likely performed - the take, timing, format]"
---
```

## Step 3: Auto-derive insights

Analyze all pulled tweets and threads to derive patterns. Look for:

- **Voice**: how does her X voice differ from LinkedIn? (more casual, more spicy, more technical?)
- **Tweet style**: one-liner takes, mini-stories, questions, data points, hot takes?
- **Thread usage**: does she do threads? What structure? (numbered, narrative, listicle)
- **Hashtag strategy**: none, 1-2 relevant, trending tags?
- **Quote-tweet style**: does she quote-tweet? What's her approach?
- **Topic patterns**: what topics drive engagement on X vs other channels?
- **Engagement style**: does she reply to others, join conversations, or mainly post?
- **Posting cadence**: how often does she tweet?

Write the analysis to `content/x/_insights.md`:

```markdown
# X (Twitter) Insights

## Voice
- Tone: [how X voice differs from other channels]
- Tweet style: [one-liners, stories, takes, questions]

## What works
- Topics: [what resonates on X]
- Formats: [tweet vs thread vs quote-tweet]
- Hooks: [opening patterns that stop the scroll]

## What doesn't work
- [patterns in low-engagement tweets]

## Threads
- Structure: [how threads are formatted]
- Length: [typical thread length]
- Hook tweet: [how the first tweet grabs attention]

## Hashtags
- [strategy derived from actual usage]

## Engagement
- [reply strategy, quote-tweet patterns observed]

## Cadence
- [posting frequency derived from tweet dates]

## Performance benchmarks
- Good tweet: [X] likes (derived from median)
- Viral tweet: [X] likes (derived from top performers)
```

## Step 4: Confirm with the CAO

Present the derived insights summary to the CAO:

> "I analyzed your X presence and found: you tweet [cadence], mostly [tweet style]. Your voice on X is [description]. Your best-performing tweets are about [topics]. Does this match? Anything to adjust?"

Incorporate her corrections.

## Step 5: Configure the skill

Open `.claude/skills/content/x/SKILL.md` and fill in:

- Tweet voice rules (from analysis)
- Thread structure template
- Character count constraints
- Engagement rules (when to reply, when to quote-tweet)
- Topics to lean into vs avoid

## Step 6: Test generation

Generate one tweet + one thread opener on topics the CAO picks. Ask for feedback. Capture edits in `content/x/_insights.md`.
