# Setup: Slack Community

Guide for setting up the Slack community skill by pulling existing messages, deriving tone and response patterns, and configuring community engagement rules.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Slack MCP connected

## Step 1: Connect to Slack

Ask the CAO two questions:

1. **"What's your community Slack workspace? (URL or name)"**
2. **"Can you connect the Slack MCP so I can read recent messages?"**

If the Slack MCP is already connected in `.mcp.json`, skip the second question.

## Step 2: Discover channels and pull messages

Once the Slack MCP is connected, auto-discover everything:

1. **List all public channels** - pull the full channel list and sort by member count.
2. **Identify the main community channels** - filter out internal/team channels. Look for channels with names like `#general`, `#introductions`, `#help`, `#showcase`, `#feedback`, `#announcements`, or channel names matching the product domain.
3. **For each of the top 5-8 most active channels**, pull the last 50 messages (or 30 days, whichever is smaller).
4. **For each message, capture:**
   - Author (is it the CAO, a team member, or a community member?)
   - Full text
   - Thread replies (first 5 replies)
   - Reactions (emoji names and counts)
   - Timestamp

### Save the CAO's messages to `content/slack/_published/`

For each message authored by the CAO or her team, save to `content/slack/_published/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: slack
slack_channel: [#channel-name]
type: [announcement | response | welcome | discussion | support]
status: published
performance:
  reactions: [total reaction count]
  thread_replies: [number of replies]
notes:
---

[full message text here]
```

## Step 3: Promote best examples

From the collected messages, identify the top 5-8 by engagement (reactions + thread replies) and copy them to `content/slack/_examples/`:

- Pick messages with highest engagement relative to channel average
- Ensure variety: announcements, help responses, welcome messages, discussion starters
- Include at least 1 community member message that got strong engagement (to understand what the community values)

## Step 4: Derive insights automatically

Analyze all collected messages to find patterns:

### Community tone analysis
- **CAO's voice in Slack**: how does she write in Slack vs other channels? More casual? Emoji-heavy? Short or detailed?
- **Community tone**: is the overall vibe technical, casual, supportive, meme-heavy?
- **Formality gradient**: how does tone shift from #announcements to #general to #help?

### Response pattern analysis
- **Response time**: how quickly does the CAO or team reply to community questions?
- **Response style**: detailed walkthroughs, short pointers, links to docs, or a mix?
- **Who responds**: does the CAO respond personally, or does the team handle most questions?
- **Unanswered questions**: are there common questions that go unanswered?

### Channel analysis
- **Most active channels**: which channels have the most traffic?
- **Channel purposes**: what is each channel actually used for (vs its stated purpose)?
- **Cross-posting**: do announcements get echoed across channels?

### Topic analysis
- **Common questions**: what do community members ask about most?
- **Recurring themes**: what topics drive the most discussion?
- **Support patterns**: are questions about setup, bugs, feature requests, or use cases?

### Engagement patterns
- **What gets reactions**: which types of messages get the most emoji reactions?
- **What sparks threads**: which messages generate the longest discussions?
- **Community champions**: are there power users who answer questions or engage frequently?

### Write insights

Write the analysis to `content/slack/_insights.md`:

```markdown
# Slack Community Insights

## Workspace
- Name: [workspace name]
- Main channels: [list of key community channels with member counts]

## Voice (in Slack)
- Tone: [casual / friendly-technical / supportive - derived from messages]
- Emoji usage: [heavy / moderate / minimal]
- Message length: [short punchy / detailed / varies by channel]
- Formatting: [uses threads, code blocks, bullet points, etc.]

## Response patterns
- Typical response time: [derived from timestamps]
- Who responds: [CAO personally / team / community members]
- Response style: [detailed walkthrough / short pointer / link to docs]

## Active channels
| Channel | Purpose | Activity level | Typical content |
|---------|---------|---------------|-----------------|
| [#channel] | [actual purpose] | [high/medium/low] | [what gets posted] |

## What works
- Announcements: [what format/tone drives reactions]
- Help responses: [what response style gets thread engagement]
- Community engagement: [what sparks discussion]

## Common questions
- [top recurring question/topic 1]
- [top recurring question/topic 2]
- [top recurring question/topic 3]

## Community champions
- [power users who contribute frequently]

## Cadence
- Announcements: [how often]
- Community engagement: [how often the CAO posts non-announcements]
```

## Step 5: Confirm with the CAO

Present the derived insights summary:

> I read the last [N] messages across [X] channels in your Slack community. The most active channels are [channels]. Your community tone is [tone], and you typically respond to questions with [style]. Common topics are [topics]. Does this match your sense of the community? Any channels or patterns I missed?

Incorporate her corrections.

## Step 6: Configure the skill

Open `.claude/skills/slack-community/SKILL.md` and update with derived rules:

- Community voice rules (Slack-specific tone from analysis)
- Channel-specific guidelines (what to post where)
- Response templates for common question types
- Announcement format and cadence
- Engagement patterns (what sparks good discussion)
- Community champions to recognize or involve

## Step 7: Test generation

Generate one community message (e.g., a product update announcement or a response to a common question). Ask for feedback. Capture edits in `content/slack/_insights.md`.
