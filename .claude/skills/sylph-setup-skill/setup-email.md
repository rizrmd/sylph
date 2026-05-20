# Setup: Email

Guide for setting up the email writing skill by reading the CAO's actual sent emails via Gmail MCP.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Gmail MCP connected

## Step 1: Connect to Gmail

Verify the Gmail MCP is connected. If not, ask:

> **Can you connect the Gmail MCP so I can read your sent emails?**

Then ask one more question:

> **Besides English, what languages do you write emails in?** (e.g., French, Spanish, German - or "English only")

This is needed to configure greeting/closing templates per language in the email-writer skill.

## Step 2: Fetch sent emails

Pull the last 30 sent emails from the CAO's Gmail:

1. Search for sent emails (from the CAO's address, last 60 days)
2. Read the full body of each email
3. Filter out one-liners ("thanks", "got it", scheduling confirmations) - keep substantive emails only
4. Save the 5-8 best examples to `admin/email/_examples/YYYY-MM-DD_slug.md`:

```yaml
---
date: YYYY-MM-DD
channel: email
type: [intro | follow-up | thank-you | scheduling | client-response | internal]
status: published
notes: "[what works about this email - voice, structure, effectiveness]"
---
```

Also extract her email signature from the sent emails.

## Step 3: Derive patterns automatically

From the collected emails, analyze:

1. **Opener pattern**: how does she start emails? (straight to point, greeting + pleasantry, context reminder)
2. **Closer pattern**: how does she sign off? (best, cheers, thanks, warm regards, talk soon)
3. **Tone**: formal, friendly-professional, or casual?
4. **Length**: short and punchy, or detailed and thorough?
5. **Signature phrases**: recurring expressions, openers, transitions she uses
6. **Anti-patterns**: what does she clearly avoid? (corporate jargon, overly formal language)
7. **Structure**: bullet points? Short paragraphs? One long block?
8. **Email types**: categorize the emails by type (intro, follow-up, client, internal, etc.) - which types does she write most?

## Step 4: Write insights

Write the derived analysis to `admin/email/_insights.md`:

```markdown
# Email Insights

## Voice
- Tone: [formal / friendly-professional / casual]
- Opener pattern: [how emails start]
- Closer pattern: [how emails end]

## Signature
- [full email signature extracted from sent emails]

## Phrases
- Always uses: [signature phrases derived from examples]
- Never uses: [anti-patterns derived from examples]

## Structure
- [bullet points vs paragraphs, typical length]

## Email types (by frequency)
- [type 1]: [how often, typical structure]
- [type 2]: [how often, typical structure]
```

## Step 5: Confirm with the CAO

Present the derived voice analysis:

> Here's what I learned from your last 30 sent emails: [tone summary], you typically open with [opener] and close with [closer]. Your signature phrases include [phrases]. Does this capture your email voice?

Incorporate her corrections.

## Step 6: Configure the skill

Open `.claude/skills/email-writer/SKILL.md` and fill in:

- Opener/closer patterns
- Tone rules
- Signature
- Template library (one template per common email type identified)
- Phrase rules (always use / never use)
- **Language tables**: update the Greetings and Closings tables to include the CAO's languages. Replace the default "French" column with the languages she specified. If she writes in Spanish, the table should have English and Spanish columns. If she writes in three languages, include all three.

## Step 7: Test generation

Generate one email for a common scenario (e.g., intro email to a prospect). Ask for feedback. Capture edits in `admin/email/_insights.md`.
