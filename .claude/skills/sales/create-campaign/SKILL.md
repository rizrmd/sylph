# Create Outbound Campaign

Build targeted outbound campaigns from ICP definition through personalized sequences.

## Process

1. **Define ICP** - who are we targeting?
   - Industry, company size, role, tech stack
   - Pain point we're solving for this segment
   - Why now? (trigger event, market shift, etc.)

2. **Build list** - identify target accounts and contacts
   - Use LinkedIn search for prospecting
   - Cross-reference with Twenty CRM to avoid existing customers
   - Target: 20-50 contacts per campaign batch

3. **Choose channel** - where do we reach them?
   - Cold email: best for VP/C-level, longer messages OK
   - LinkedIn DM: best for peers, keep it short
   - Multi-touch: email + LinkedIn for high-value targets

4. **Write the sequence** - draft 3-4 touch messages
   - Touch 1: Hook + relevance + soft CTA
   - Touch 2: Value add (share content, insight, or data point)
   - Touch 3: Social proof + direct CTA
   - Touch 4: Break-up (last chance, no pressure)
   - Space touches 3-5 business days apart

5. **Personalize** - customize per contact
   - Reference their company, role, or recent activity
   - Use their tech stack or public data as hooks
   - No generic "I noticed your company" - be specific

6. **Save** - `sales/outbound/campaigns/YYYY-MM-DD_campaign-slug.md`
   - Include: ICP definition, contact list, full sequence, personalization notes

## Sequence rules

- **Subject lines**: under 10 words, no caps lock, no spam triggers
- **Email body**: under 150 words per touch
- **LinkedIn DM**: under 100 words
- **Always include opt-out** in emails
- **Use Claire's voice** - load `email-writer` skill
- **Open with** "Hope you're doing well!" for warm leads

## Guardrails

- **Drafts only** - never send any outbound message directly
- **No pricing** in outbound messages - CTA is always a call or demo
- **No purchased lists** - build lists from research only
- **CRM check** - verify targets are not existing customers before adding
- **No spam** - respect unsubscribe requests and do not contact list
- **Save all campaigns** to `sales/outbound/campaigns/` with proper naming
- **Claire approves** before any campaign is sent
