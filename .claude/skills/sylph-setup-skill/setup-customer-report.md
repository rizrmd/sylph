# Setup: Customer Report

Guide for setting up the customer report skill by connecting the CRM, discovering available data sources, and configuring the 360 report template.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- CRM MCP connected (or to be connected in Step 1)

## Step 1: Connect the CRM

Ask the CAO one question:

> **What CRM do you use?** (HubSpot, Salesforce, Pipedrive, Close, Attio, Twenty, or other)

If the CRM MCP is already connected in `.mcp.json`, skip the question and auto-detect the platform from the MCP configuration.

Then ask:

> **Can you connect the CRM MCP so I can pull customer records?**

Skip if already connected.

## Step 2: Discover available data sources

Check `.mcp.json` for all connected MCPs. For each, note what customer data it can provide:

| Source | MCP name | Data available |
|--------|----------|---------------|
| CRM | [detected] | Contacts, companies, deals, pipeline stages, activity log |
| Gmail | Gmail MCP | Email threads with customers |
| Slack | Slack MCP | Customer channels, support threads |
| Granola | Granola MCP | Meeting transcripts and notes |
| Notion | Notion MCP | Account pages, project docs |
| LinkedIn | LinkedIn MCP | Company profiles, contact profiles |

Mark each as **connected** or **not connected**. Do not ask the CAO to connect all of them - just note what's available and what's missing.

## Step 3: Pull sample customer records

From the CRM, pull 3-5 recent customer records to understand the data structure:

1. **Query the CRM** for the 5 most recently active customers (by last activity date or last deal update).
2. **For each customer, pull:**
   - Company name and domain
   - Primary contact name, title, email
   - Deal stage, value, close date
   - All custom fields (to understand what the CAO tracks)
   - Recent activity log entries (last 10)
   - Tags or labels
3. **Map the field structure:**
   - Which fields are populated vs empty?
   - What custom fields exist and what do they mean?
   - What pipeline stages are defined?
   - What activity types are logged?

### Cross-reference with other sources

For the same 3-5 customers, check each connected data source:

- **Gmail**: search for email threads with the customer's domain. Note thread count and recency.
- **Slack**: search for the customer name or domain in Slack channels. Note if dedicated customer channels exist.
- **Granola**: search for meeting transcripts mentioning the customer. Note frequency.
- **Notion**: search for pages mentioning the customer. Note if account pages exist.
- **LinkedIn**: look up the company profile. Note employee count, recent posts, growth signals.

## Step 4: Generate a test report

Using the richest customer from Step 3 (the one with the most data across sources), generate a full 360 customer report:

```markdown
# Customer Report: [Company Name]

## Overview
- Company: [name]
- Domain: [domain]
- Primary contact: [name, title]
- Deal stage: [stage] | Deal value: [value]
- Customer since: [date]
- Last activity: [date]

## Relationship health
- [assessment based on activity frequency, email recency, meeting cadence]

## Recent activity
- [last 5-10 activities from CRM, emails, meetings, Slack]

## Communication summary
- Email threads: [count, last exchange date, key topics]
- Meetings: [count, last meeting date, key takeaways from transcripts]
- Slack: [channel activity, key threads]

## Account context
- [relevant Notion docs, project pages, or internal notes]

## LinkedIn signals
- [company growth, recent hires, product launches, funding]

## Risks & opportunities
- Risks: [derived from activity gaps, deal stage stalls, sentiment]
- Opportunities: [upsell signals, expansion contacts, upcoming renewals]
```

## Step 5: Write insights

Write the derived analysis to `customer-success/reports/_insights.md`:

```markdown
# Customer Report Insights

## CRM
- Platform: [CRM name]
- MCP connection: [connected / not connected]

## Data sources
| Source | Connected | Data quality | Notes |
|--------|-----------|-------------|-------|
| CRM | [yes/no] | [rich/sparse/empty] | [what fields are populated] |
| Gmail | [yes/no] | [rich/sparse/n/a] | [typical thread count per customer] |
| Slack | [yes/no] | [rich/sparse/n/a] | [dedicated channels exist?] |
| Granola | [yes/no] | [rich/sparse/n/a] | [meeting transcript coverage] |
| Notion | [yes/no] | [rich/sparse/n/a] | [account pages exist?] |
| LinkedIn | [yes/no] | [rich/sparse/n/a] | [profile data available] |

## CRM field structure
- Key deal fields: [list populated deal fields]
- Key contact fields: [list populated contact fields]
- Custom fields: [list and explain custom fields]
- Pipeline stages: [list all stages]

## Report template
- Sections that work with current data: [list]
- Sections that need more data sources: [list]
- Recommended data source connections: [list missing MCPs that would enrich reports]

## Cadence
- [how often reports should be generated - pre-meeting, quarterly, on-demand]
```

## Step 6: Confirm with the CAO

Present the test report and data source summary:

> I pulled data on [company name] from [X] sources. Here's a sample 360 report. Your CRM tracks [fields], and I found [email/meeting/Slack] data for cross-referencing. The richest signal comes from [source]. Missing data sources that would help: [list]. Does this report structure work for you? Any sections to add or remove?

Incorporate her corrections.

## Step 7: Configure the skill

Open `.claude/skills/customer-report/SKILL.md` and fill in:

- Report template (section by section, from confirmed structure)
- Data source mapping (which MCP to query for each section)
- CRM field mapping (which fields to pull and how to interpret them)
- Health scoring logic (what signals indicate healthy vs at-risk accounts)
- Missing data handling (what to do when a source is unavailable)

## Step 8: Test

Generate a second customer report for a different customer. Ask for feedback on completeness and accuracy. Capture edits in `customer-success/reports/_insights.md`.
