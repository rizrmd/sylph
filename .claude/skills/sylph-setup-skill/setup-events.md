# Setup: Events

Guide for setting up the event management skill by auto-discovering past events and promotion patterns from the web.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company name available in `CONTEXT.md`

## Step 1: Find past events

1. Read `CONTEXT.md` for the company name, CAO name, and website URL.
2. Search for past events using multiple strategies:
   - Use WebSearch: `"[company name]" site:lu.ma`.
   - Use WebSearch: `"[company name]" site:eventbrite.com`.
   - Use WebSearch: `"[company name]" site:meetup.com`.
   - Use WebSearch: `"[company name]" event OR meetup OR hackathon OR workshop OR webinar`.
   - Check the company website for an events page (`/events`, `/community`).
   - Search LinkedIn for company events: `"[company name]" event site:linkedin.com`.
3. If events are found, pull event pages and descriptions for analysis.
4. If no events are found, ask the CAO: **"Do you host events? If so, what platform do you use and what types of events do you run?"**

## Step 2: Auto-extract examples

From the events found in Step 1:

1. Pull event descriptions, registration pages, and any recap posts.
2. For each event, save to `events/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
type: [hackathon | meetup | webinar | conference | workshop]
platform: [lu.ma | eventbrite | meetup | linkedin | custom]
status: published
performance:
  registrations: [number if visible]
  attendees: [number if visible]
notes: "[what worked about this event - description, format, audience]"
---
```

## Step 3: Auto-derive insights

Analyze all found events to derive patterns. Look for:

- **Event types**: what kinds of events does the company run? (hackathons, meetups, webinars, workshops, conference talks)
- **Cadence**: how often? Monthly, quarterly, ad hoc?
- **Platform**: which registration tool? (Lu.ma, Eventbrite, Meetup, custom)
- **Event size**: typical attendance numbers.
- **Description patterns**: how are events described? Formal or casual? What information is included?
- **Promotion patterns**: check LinkedIn and X posts that promote events - what copy works?
- **Follow-up signals**: are there recap posts, recordings, or follow-up content after events?
- **Co-hosting**: does the company co-host with other organizations?

Write the analysis to `events/_insights.md`:

```markdown
# Events Insights

## Event types
| Type | Cadence | Platform | Typical size |
|------|---------|----------|-------------|
| [type] | [frequency] | [platform] | [attendees] |

## Promotion workflow
- [channels used to promote events, derived from social posts]
- [timing patterns: how far in advance events are announced]

## Registration
- Platform: [tool derived from event pages]
- Page style: [what information is included in event descriptions]

## Follow-up
- [post-event content patterns observed: recaps, recordings, thank-you posts]

## Content capture
- [recording, notes, recap post patterns]

## What works
- [promotion tactics and event formats that seem to drive attendance]

## Co-hosting
- [partner organizations if any]
```

## Step 4: Confirm with the CAO

Present the derived insights:

> "I found [number] past events: [types]. You typically use [platform] and run events [cadence]. Your promotion tends to go through [channels]. Does this match? Any event types you want to do more of? What does your post-event follow-up process look like?"

Incorporate her corrections.

## Step 5: Configure the skill

Open `.claude/skills/events/event-manager/SKILL.md` and fill in:

- Event type templates (from analysis)
- Promotion timeline
- Registration page copy template
- Follow-up sequence templates
- Content capture checklist

## Step 6: Test generation

Generate an event page + promotion plan for an upcoming event. Ask for feedback. Capture edits in `events/_insights.md`.
