# Setup: Outbound

Guide for setting up the outbound/cold email skill by pulling campaign history from the CAO's outbound tool.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- ICP defined in `CONTEXT.md`

## Step 1: Auto-derive ICP and targeting

1. Read `CONTEXT.md` for the ICP definition (target titles, company size, industry, verticals).
2. Read the company website (pricing page, case studies, customer logos) to enrich the ICP:
   - What company sizes are shown in case studies or logos?
   - What industries appear in testimonials?
   - What pain points does the marketing copy target?
3. If the company has a LinkedIn page, pull it to see follower demographics and recent content targeting signals.
4. Compile a targeting profile: titles, company size, industry, trigger events (funding, hiring, tech adoption).

## Step 2: Connect the outbound tool

Ask the CAO:

> **What outbound tool do you use?** (e.g., Apollo, Lemlist, Instantly, Outreach, Salesloft, La Growth Machine, HubSpot sequences, or manual via Gmail)

### If she uses an outbound platform:

1. **Ask her to connect the MCP or API** for that tool
2. **Query past campaigns** - pull the last 10-20 campaigns/sequences with:
   - Sequence name and target persona
   - Email copy for each step (subject + body)
   - Performance data: sent, opened, replied, meetings booked
   - Sequence timing (days between steps)
3. **Save all campaigns to `sales/outbound/_published/`** with frontmatter:

```yaml
---
date: YYYY-MM-DD
channel: outbound
type: [cold-email | linkedin-dm | sequence | multi-channel]
target_persona: [title/role]
status: published
performance:
  sent: [number]
  opened: [number]
  open_rate: [percentage]
  replies: [number]
  reply_rate: [percentage]
  meetings_booked: [number]
tool: [Apollo | Lemlist | Instantly | etc.]
notes:
---

## Email 1
Subject: [subject]
[body]

## Follow-up 1 (day [X])
Subject: [subject]
[body]

...
```

4. **Promote the top 3-5 campaigns** (by reply rate) to `sales/outbound/_examples/`
5. Also save 1-2 low-performing campaigns as counter-examples

### If she doesn't use a platform (manual via Gmail):

Ask:

> **Paste 1-2 outbound email sequences that got replies. For each: what persona were you targeting and what was the approximate response rate?**

Save to `sales/outbound/_examples/` with the same frontmatter format.

## Step 3: Derive insights automatically

From all collected campaigns, analyze:

### Sequence patterns
- **Number of touches**: how many emails in a typical sequence?
- **Cadence**: days between emails?
- **Escalation**: how does tone/approach shift across the sequence?
- **Channels**: email only, email + LinkedIn, multi-channel?

### Copy patterns
- **Subject line style**: short, personalized, question, direct, FOMO?
- **Personalization approach**: company research, mutual connections, recent news, specific pain point?
- **CTA patterns by step**: discovery question (early) vs calendar link (later) vs breakup (last)?
- **Email length**: optimal word count per touch
- **Tone**: how does outbound tone differ from regular email?

### Performance analysis
- **Best reply rates**: what campaigns/sequences performed best and why?
- **Subject line performance**: which styles drive opens?
- **Persona performance**: which target personas reply most?
- **Sequence length**: do shorter or longer sequences convert better?

### Write insights

Write to `sales/outbound/_insights.md`:

```markdown
# Outbound Insights

## ICP targeting
- Title: [target titles from CONTEXT.md + website analysis]
- Company size: [range]
- Industry: [verticals]
- Trigger events: [funding, hiring, tech adoption]

## Sequence structure
- Touches: [typical number, derived from campaigns]
- Cadence: [days between emails]
- Channels: [email only / email + LinkedIn / multi-channel]

## What works
- Subject lines: [patterns from top campaigns]
- Personalization: [what to research per prospect]
- CTAs: [what drives replies, by sequence step]
- Email length: [optimal word count]
- Best reply rates: [X]% on [persona/approach]

## What doesn't work
- [patterns from underperforming campaigns]

## Tools
- Platform: [tool name]
- Integration: [MCP connected / manual]

## Performance benchmarks
- Median campaign: [X]% reply rate
- Top campaign: [X]% reply rate, [Y]% meeting rate
- Below average: [X]% reply rate
```

## Step 4: Confirm with the CAO

Present the derived insights:

> I pulled [N] campaigns from [tool]. Your best sequences get [X]% reply rates targeting [persona], using [touches] emails over [days] days. Your top-performing approach is [pattern]. Does this match? Anything to adjust?

Incorporate her corrections.

## Step 5: Configure the skill

Open `.claude/skills/create-campaign/SKILL.md` and fill in:

- Sequence templates (derived from top-performing campaigns)
- Personalization checklist
- Subject line patterns
- CTA library (by sequence step)
- ICP criteria
- Tool-specific instructions (how to push sequences to the outbound platform)

## Step 6: Test generation

Generate one 3-email sequence for a specific prospect type. Ask for feedback on tone, personalization depth, and CTA. Capture edits in `sales/outbound/_insights.md`.
