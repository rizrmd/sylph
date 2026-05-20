# Setup: Zero Inbox

Guide for setting up the zero-inbox triage skill by scanning the CAO's actual email and Slack behavior to derive triage rules, routing logic, and proxy senders.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Gmail MCP connected
- Slack MCP connected

## Step 1: Connect Gmail and Slack

Verify both MCPs are connected in `.mcp.json`. If not, ask:

> **Can you connect the Gmail and Slack MCPs so I can learn your triage patterns?**

That's it. Everything else gets derived automatically from her actual behavior.

## Step 2: Scan sent emails for triage patterns

Pull the last 60-90 days of email activity to understand how the CAO handles her inbox:

### Response speed analysis
1. **Pull the last 100 received emails** (inbound threads where the CAO is a recipient).
2. **For each thread, check:**
   - Did the CAO reply? If so, how quickly? (minutes, hours, days)
   - Did someone else reply on her behalf? (same domain sender replying to a thread she's CC'd on)
   - Was it left unanswered?
3. **Categorize by response behavior:**
   - **Fast replies** (< 2 hours): what types of emails get immediate attention?
   - **Same-day replies** (2-24 hours): what gets handled but not urgently?
   - **Delayed replies** (1-7 days): what gets deferred?
   - **No reply**: what gets ignored entirely?
   - **Delegated**: what gets forwarded or answered by someone else?

### Sender analysis
1. **Identify VIP senders** - who always gets a fast reply? (investors, key customers, board members, co-founders)
2. **Identify delegated senders** - who does someone else reply to on her behalf?
3. **Identify ignored categories** - newsletters, automated notifications, marketing emails that never get opened.

### Proxy sender detection
1. **Search for other team members replying to threads** where the CAO is a recipient but didn't reply herself.
2. **Identify proxy patterns:**
   - Co-founder replying to customer emails on her behalf
   - EA or ops person handling scheduling
   - Team members handling support or operational emails
3. **For each proxy, note:**
   - Who they are (name, email)
   - What types of emails they handle
   - Whether the CAO is CC'd on their replies

## Step 3: Scan Slack for triage patterns

Pull the last 30 days of Slack DMs and mentions:

### DM analysis
1. **Pull recent DMs** sent to the CAO.
2. **For each DM, check:**
   - Did she reply? How quickly?
   - What was the topic? (question, request, FYI, social)
3. **Categorize by response behavior** (same as email: fast, same-day, delayed, ignored).

### Mention analysis
1. **Search for @mentions** of the CAO in public channels.
2. **Check which mentions she responds to** and which she ignores.
3. **Note patterns**: does she respond more in certain channels? To certain people?

### Proxy detection in Slack
1. **Search for team members who reply to questions** directed at the CAO.
2. **Identify who handles what** - does the co-founder answer technical questions? Does the EA handle scheduling requests?

## Step 4: Derive triage rules

From all the data collected, build a triage ruleset:

### Priority tiers
- **P0 - Respond immediately**: [sender types + topic types that always get fast replies]
- **P1 - Respond today**: [sender types + topic types that get same-day replies]
- **P2 - Respond this week**: [sender types + topic types that get delayed replies]
- **P3 - Delegate**: [sender types + topic types that get handled by proxies]
- **P4 - Archive/ignore**: [sender types + topic types that never get replies]

### Routing rules
- **To CAO directly**: [what she must handle personally]
- **To co-founder**: [what gets delegated to the co-founder, with examples]
- **To EA/ops**: [what gets delegated to EA or ops, with examples]
- **Auto-archive**: [newsletters, notifications, marketing - what gets skipped]

### Response templates
From the CAO's actual sent replies, extract common response patterns:
- Quick acknowledgment ("Got it, will look at this today")
- Delegation ("Adding [name] who handles this")
- Scheduling ("Let me find a time - [calendar link]")
- Meeting follow-up patterns

## Step 5: Write insights

Write the derived analysis to `admin/zero-inbox/_insights.md`:

```markdown
# Zero Inbox Insights

## Triage patterns (derived from last 90 days)

### Email behavior
- Emails received per day: [average]
- Reply rate: [percentage of emails that get a reply]
- Average response time: [hours]
- Delegation rate: [percentage handled by proxies]

### Slack behavior
- DMs received per day: [average]
- Reply rate: [percentage]
- Average response time: [hours]

## Priority tiers
| Tier | Criteria | Action | Example |
|------|----------|--------|---------|
| P0 | [criteria] | Reply immediately | [example sender/topic] |
| P1 | [criteria] | Reply today | [example sender/topic] |
| P2 | [criteria] | Reply this week | [example sender/topic] |
| P3 | [criteria] | Delegate to [person] | [example sender/topic] |
| P4 | [criteria] | Archive | [example sender/topic] |

## VIP senders
- [name/email]: [why VIP - investor, key customer, board, etc.]

## Proxy senders
| Person | Email | Handles | Example |
|--------|-------|---------|---------|
| [name] | [email] | [what they handle on CAO's behalf] | [example] |

## Auto-archive rules
- [newsletter domains, notification senders, marketing tools]

## Response templates (derived from sent emails)
- Quick ack: [derived pattern]
- Delegation: [derived pattern]
- Scheduling: [derived pattern]

## Anti-patterns
- [types of replies the CAO would never send - derived from what she avoids]
```

## Step 6: Confirm with the CAO

Present the derived triage rules:

> I analyzed your last 90 days of email and Slack activity. You reply fastest to [VIP types], delegate [types] to [proxy names], and ignore [categories]. Your reply rate is [X]% on email and [Y]% on Slack. I identified [N] proxy senders: [names and what they handle]. Does this capture your triage logic? Any rules I got wrong?

Incorporate her corrections.

## Step 7: Configure the skill

Open `.claude/skills/zero-inbox/SKILL.md` and fill in:

- Priority tier definitions (from confirmed triage rules)
- VIP sender list
- Proxy sender list and their domains
- Routing rules (who gets what)
- Auto-archive rules (senders and patterns to skip)
- Response templates (from derived patterns)
- Triage cadence (when to run: daily, twice daily, etc.)
- Anti-patterns (what to never do in a reply)

## Step 8: Test

Run a triage on the CAO's current unread messages (last 3 days). Present the prioritized list with draft replies for the top items. Ask for feedback on priority assignments and reply quality. Capture edits in `admin/zero-inbox/_insights.md`.
