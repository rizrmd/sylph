# Setup: CRM

Guide for setting up the CRM skill with the CAO's pipeline, fields, and workflow.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- CRM access (HubSpot, Salesforce, Pipedrive, or similar)

## Step 1: Identify the CRM

CRM configuration is internal and can't be derived from the web. Ask the CAO two questions:

1. **"What CRM do you use?"** (HubSpot, Salesforce, Pipedrive, Close, Attio, Twenty, or other)
2. **"What are your pipeline stages?"** (e.g., Lead -> Qualified -> Demo -> Proposal -> Closed Won/Lost. For each stage: what does it mean, and what triggers a move to the next?)

That's it. Everything else gets derived from her answers and the CRM connection.

## Step 2: Check for MCP connection

1. Check `.mcp.json` for an existing CRM MCP server.
2. If connected, use the MCP to pull:
   - Pipeline stages and their definitions
   - Key deal fields
   - Key contact fields
   - Recent activity types
3. If not connected, work from the CAO's answers and note that manual setup is needed.

## Step 3: Write insights

From the CAO's answers and any MCP data, write to `sales/crm/_insights.md`:

```markdown
# CRM Insights

## Platform
- CRM: [platform name]
- MCP connection: [connected / not connected / manual]

## Pipeline stages
| Stage | Definition | Exit criteria |
|-------|-----------|---------------|
| [stage] | [what it means] | [what moves deal forward] |

## Key fields
- Deal: [important deal fields]
- Contact: [important contact fields]
- Company: [important company fields]

## Activity logging
- [what gets logged and how]

## Reports
- [regular reports and their purpose]

## Hygiene rules
- [stale deal alerts, required fields, etc.]
```

Save CRM reference to `sales/crm/_examples/pipeline-overview.md`:

```yaml
---
date: YYYY-MM-DD
type: crm-reference
crm: [platform]
notes: "Pipeline and field reference"
---
```

## Step 4: Confirm with the CAO

Present the pipeline summary:

> "Here's what I have: [CRM platform], [number] pipeline stages from [first] to [last]. Key deal fields are [fields]. Does this look right? Any hygiene rules or regular reports I should know about?"

Incorporate her corrections.

## Step 5: Configure the skill

Open `.claude/skills/sales/crm/SKILL.md` and fill in:

- CRM platform and connection method
- Pipeline stage definitions
- Field mapping (what to read, what to update)
- Activity logging rules
- Report templates

## Step 6: Test

Run a CRM query (e.g., "show me deals closing this month") to verify the connection works. Capture any configuration notes in `sales/crm/_insights.md`.
