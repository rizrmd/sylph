# Setup: Customer Success

Guide for setting up the customer success skill by connecting the CRM, discovering the CS workflow, and configuring follow-up cadence and templates.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- CRM MCP connected (or to be connected in Step 1)

## Step 1: Connect the CRM and ask about cadence

Ask the CAO two questions:

1. **"Can you connect the CRM MCP so I can pull your customer list?"** (skip if already connected in `.mcp.json`)
2. **"What's your follow-up cadence? How often do you check in with active customers?"** (e.g., weekly, biweekly, monthly, only around renewals)

That's it. Everything else gets derived from the CRM and connected data sources.

## Step 2: Pull the customer list

From the CRM, pull the full active customer list:

1. **Query for all customers with active deals** (closed-won, active subscription, or equivalent stage).
2. **For each customer, pull:**
   - Company name and domain
   - Primary contact name, title, email
   - Deal value (MRR/ARR if available)
   - Contract start date and renewal date (if tracked)
   - Last activity date
   - Tags, labels, or segments
   - Health score (if the CRM tracks one)
3. **Sort by priority signals:**
   - Upcoming renewals (next 90 days)
   - Recent meetings or calls (last 14 days - may need follow-up)
   - Inactive accounts (no activity in 30+ days)
   - High-value accounts (top 20% by deal value)

## Step 3: Identify the CS workflow from existing data

Analyze the CRM activity log and connected sources to understand how the CAO currently handles CS:

### From the CRM
- **Activity types**: what gets logged? (calls, emails, meetings, notes, tasks)
- **Follow-up patterns**: how often does the CAO or team log activity per customer?
- **Renewal tracking**: are renewal dates in the CRM? Is there a renewal pipeline?
- **Health signals**: any fields that indicate account health?

### From Gmail (if connected)
- Search sent emails for common CS phrases: "checking in", "following up", "how's it going", "renewal", "feedback"
- Identify email templates or recurring structures in customer follow-ups
- Note cadence: how often does the CAO email customers?

### From Slack (if connected)
- Search for dedicated customer channels (e.g., `#customer-[name]`, `#[company]-support`)
- Note which customers have dedicated channels vs which are email-only
- Check for recent customer questions or escalations

### From Granola (if connected)
- Pull recent customer meeting transcripts
- Note meeting cadence per customer
- Extract action items and follow-up commitments from transcripts

## Step 4: Build the CS backlog

From all gathered data, generate a prioritized CS backlog:

```markdown
## Follow-up needed (immediate)
| Customer | Reason | Last contact | Action |
|----------|--------|-------------|--------|
| [company] | Meeting 3 days ago, no follow-up sent | [date] | Send meeting recap |
| [company] | Renewal in 30 days | [date] | Schedule renewal call |

## Check-in due (per cadence)
| Customer | Last check-in | Due date | Notes |
|----------|--------------|----------|-------|
| [company] | [date] | [date based on cadence] | [context] |

## At-risk (inactive)
| Customer | Last activity | Deal value | Risk signal |
|----------|-------------|-----------|-------------|
| [company] | [date] | [value] | No activity in [X] days |
```

## Step 5: Write insights

Write the derived analysis to `customer-success/_insights.md`:

```markdown
# Customer Success Insights

## CRM
- Platform: [CRM name]
- MCP connection: [connected / not connected]

## Customer portfolio
- Total active customers: [count]
- Average deal value: [amount]
- Renewal tracking: [yes/no - is renewal date in CRM?]

## Follow-up cadence
- Stated cadence: [from CAO's answer]
- Actual cadence: [derived from activity log - may differ from stated]
- Gap: [difference between stated and actual, if any]

## CS workflow
- Primary channel: [email / Slack / calls - derived from activity types]
- Follow-up triggers: [what prompts a check-in - meetings, renewals, inactivity]
- Escalation path: [how issues get escalated, if visible]

## Data sources
| Source | Connected | CS data available |
|--------|-----------|------------------|
| CRM | [yes/no] | [customer list, activity log, renewal dates] |
| Gmail | [yes/no] | [follow-up emails, templates] |
| Slack | [yes/no] | [customer channels, support threads] |
| Granola | [yes/no] | [meeting transcripts, action items] |

## Follow-up templates (derived from sent emails)
- Check-in: [pattern derived from CAO's actual check-in emails]
- Post-meeting recap: [pattern derived from follow-up emails]
- Renewal: [pattern if found]

## At-risk indicators
- [signals that predict churn, derived from inactive accounts and CRM data]
```

## Step 6: Confirm with the CAO

Present the CS backlog and workflow summary:

> I found [N] active customers in your CRM. Based on your [stated cadence] cadence, [X] customers are due for a check-in and [Y] have upcoming renewals in the next 90 days. I also found [Z] inactive accounts with no activity in 30+ days. Your typical follow-up is via [channel] with [style]. Does this capture your CS workflow? Any customers I should prioritize differently?

Incorporate her corrections.

## Step 7: Configure the skill

Open `.claude/skills/customer-success/SKILL.md` and fill in:

- Follow-up cadence rules (from confirmed cadence)
- Priority scoring logic (renewals, inactivity, deal value)
- Follow-up templates (from derived email patterns)
- Escalation triggers (what signals need immediate attention)
- Data source mapping (where to pull each type of information)
- Backlog generation rules (how to build and sort the weekly backlog)

## Step 8: Test

Generate one follow-up draft for the highest-priority customer in the backlog. Ask for feedback on tone, content, and level of detail. Capture edits in `customer-success/_insights.md`.
