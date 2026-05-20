# Setup: HR / Screening

Guide for setting up the HR screening skill by deriving hiring criteria and company culture from the careers page and job postings, then confirming hard filters with the CAO.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company website URL available in `CONTEXT.md`

## Step 1: Find the careers page and job postings

1. Read `CONTEXT.md` for the company name and website URL.
2. Search for the careers page and active job postings:
   - Check the company website for `/careers`, `/jobs`, `/hiring`, or a careers link in the nav/footer.
   - Use WebSearch: `"[company name]" careers OR jobs OR hiring site:[company-domain]`.
   - Use WebSearch: `"[company name]" site:welcometothejungle.com OR site:lever.co OR site:greenhouse.io OR site:ashbyhq.com`.
   - Check LinkedIn for job postings: `"[company name]" jobs site:linkedin.com`.
3. Pull all active job descriptions and the careers page copy.

## Step 2: Auto-extract examples

From the job postings and careers page found in Step 1:

1. Save each job description as a reference.
2. For each posting, save to `hr/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
type: [job-description | screening-rubric]
role: [role title]
status: published
notes: "[what works about this posting - structure, requirements, culture signals]"
---
```

## Step 3: Auto-derive insights

Analyze all pulled job postings and the careers page to derive patterns. Look for:

- **Role types**: what kinds of roles does the company hire for? (engineering, data, sales, ops, marketing)
- **Must-have patterns**: what requirements repeat across postings? (specific tech stack, years of experience, location, language requirements)
- **Nice-to-have patterns**: what's consistently listed as optional?
- **Culture signals**: what values does the careers page emphasize? (remote-first, fast-paced, collaborative, founder-led)
- **Interview process**: is it described on the careers page? How many stages?
- **Location requirements**: remote, hybrid, specific cities?
- **Posting channels**: where are jobs posted? (LinkedIn, Welcome to the Jungle, AngelList, HN)
- **Red flag signals**: any consistent disqualifiers across postings? (e.g., must be in a specific timezone, must speak a specific language)
- **Compensation signals**: are salary ranges listed?

Write the analysis to `hr/_insights.md`:

```markdown
# HR / Screening Insights

## Role types
- [engineering, data, sales, etc. - derived from postings]

## Interview process
| Stage | What happens | Decision maker |
|-------|-------------|----------------|
| [stage 1] | [description if available] | [who decides] |

## Universal criteria (derived from postings)
- Must-haves: [requirements that repeat across all roles]
- Nice-to-haves: [optional requirements that repeat]
- Red flags: [instant disqualifiers derived from requirements]

## Culture signals
- [values and culture markers from careers page]

## Location & logistics
- [remote/hybrid/onsite, timezone requirements, language requirements]

## Job posting channels
- [where jobs are posted - derived from where postings were found]

## Communication templates
- Rejection: [to be configured]
- Offer: [to be configured]
- Scheduling: [to be configured]
```

## Step 4: Confirm with the CAO and ask for hard filters

Present the derived screening criteria:

> "From your careers page and job postings, I derived these screening criteria: [must-haves], [culture signals], [location requirements]. Roles tend to be [role types]."

Then ask the one question that can't be derived from the web:

**"Any hard filters for screening that aren't visible in your postings? (e.g., instant disqualifiers, internal-only criteria, specific deal-breakers)"**

Incorporate her answer into the red flags and must-haves.

## Step 5: Configure the skill

Open `.claude/skills/hr/hr-screening/SKILL.md` and fill in:

- Screening rubric template (per role type, from analysis)
- Must-have vs nice-to-have criteria
- Interview stage definitions
- Email templates (rejection, scheduling, offer)
- Evaluation scoring system
- Hard filters from the CAO

## Step 6: Test

Run a screening on a sample resume (or a role description). Ask for feedback on the evaluation quality. Capture edits in `hr/_insights.md`.
