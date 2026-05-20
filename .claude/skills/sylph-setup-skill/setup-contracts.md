# Setup: Contracts (create-contract & review-contract)

Guide for setting up both the contract creation and contract review skills by collecting the minimum required legal details from the CAO and configuring contract templates.

## Prerequisites

- Global setup complete (`/sylph-setup`)

## Step 1: Collect legal details from the CAO

Contract details are private and cannot be derived from the web. Ask the CAO these questions:

1. **"What's your company's full legal name?"** (e.g., "Acme Corp Inc.")
2. **"What jurisdiction is the company registered in?"** (e.g., "France", "Delaware, USA")
3. **"What's the company's registered address?"**
4. **"Who's the authorized signatory, and what's their title?"** (e.g., "Jane Doe, CEO")

That's it - four questions. These are the minimum required fields for every contract template.

## Step 2: Collect optional details

If the CAO provides the basics quickly, ask follow-up questions only if relevant:

- **"Do you have standard payment terms?"** (e.g., Net 30, Net 45, payment on signature)
- **"What's your standard contract currency?"** (EUR, USD, GBP)
- **"Do you have a company registration number to include?"** (SIREN/SIRET for France, EIN for US, Companies House number for UK)
- **"Any standard clauses you always include?"** (e.g., GDPR DPA, IP assignment, non-compete)

Do not ask about all possible legal terms. Derive what you can from jurisdiction (e.g., French companies need SIREN, US companies need EIN).

## Step 3: Configure template placeholders

Update the contract generation templates with the CAO's details.

### Update `generate-docx.js` placeholders

Find the contract generation script (typically in `.claude/skills/create-contract/` or `legal/templates/`) and fill in the company placeholders:

```javascript
// Replace these placeholders with the CAO's actual details:
COMPANY_LEGAL_NAME: "[legal name from Step 1]",
COMPANY_JURISDICTION: "[jurisdiction from Step 1]",
COMPANY_ADDRESS: "[registered address from Step 1]",
SIGNATORY_NAME: "[signatory name from Step 1]",
SIGNATORY_TITLE: "[signatory title from Step 1]",
PAYMENT_TERMS: "[from Step 2, or default 'Net 30']",
CURRENCY: "[from Step 2, or default based on jurisdiction]",
REGISTRATION_NUMBER: "[from Step 2, if provided]",
```

### Update `enterprise-service-agreement.md`

Find the enterprise service agreement template and replace all placeholder instances:

- `[Company Name]` -> actual legal name
- `[Company Address]` -> actual registered address
- `[Jurisdiction]` -> actual jurisdiction
- `[Signatory Name]` -> actual signatory
- `[Signatory Title]` -> actual title
- Any governing law clauses -> match the jurisdiction

### Update other contract templates

Check for additional templates in `legal/templates/` and update the same placeholders:

- Freelance/consulting agreements
- NDAs
- Data processing agreements (DPA)
- Partnership agreements

For each template found, replace the company-side placeholders. Client-side placeholders should remain as `[Client Name]`, `[Client Address]`, etc. - these get filled at contract creation time.

## Step 4: Write insights

Write the configuration to `legal/_insights.md`:

```markdown
# Contract Insights

## Company details
- Legal name: [full legal name]
- Jurisdiction: [jurisdiction]
- Registered address: [address]
- Signatory: [name, title]
- Registration number: [if provided]

## Standard terms
- Payment terms: [Net 30, etc.]
- Currency: [EUR, USD, etc.]
- Governing law: [derived from jurisdiction]

## Templates available
| Template | Path | Status |
|----------|------|--------|
| Enterprise service agreement | [path] | [configured / needs update] |
| Freelance agreement | [path] | [configured / needs update] |
| NDA | [path] | [configured / needs update] |
| DPA | [path] | [configured / needs update] |

## Standard clauses
- [any always-include clauses from Step 2]

## Review checklist
- [key items to check when reviewing incoming contracts]
```

## Step 5: Confirm with the CAO

Present the configuration summary:

> I've configured your contract templates with: [legal name], registered in [jurisdiction] at [address], signed by [signatory name] as [title]. Payment terms default to [terms] in [currency]. I found [N] contract templates and updated the company details in each. Does this look correct? Any standard clauses I should add to every contract?

Incorporate her corrections. Legal details must be exact - double-check spelling of the legal name and address.

## Step 6: Configure the create-contract skill

Open `.claude/skills/create-contract/SKILL.md` and fill in:

- Company legal details (from confirmed answers)
- Template inventory (list of available templates with paths)
- Default terms (payment, currency, governing law)
- Required fields per template (what the user must provide at creation time)
- Standard clauses to always include
- Output format (DOCX, PDF, or markdown)

## Step 7: Configure the review-contract skill

Open `.claude/skills/review-contract/SKILL.md` and fill in:

- Company details (for identifying which party is "us")
- Review checklist (key terms to flag: liability caps, IP assignment, termination clauses, payment terms, governing law)
- Red flags (unfavorable terms to highlight: unlimited liability, IP transfer, non-compete, auto-renewal)
- Jurisdiction-specific rules (what's standard vs unusual for the company's jurisdiction)
- Comparison rules (how incoming terms compare to the company's standard terms)

## Step 8: Test

### Test create-contract
Generate one contract (e.g., a freelance agreement for a hypothetical contractor). Verify the company details are correctly populated and the structure is sound. Ask the CAO to review.

### Test review-contract
If the CAO has a recent incoming contract, run a review on it. Otherwise, generate a sample contract with some unfavorable terms and run the review skill against it. Verify it catches the red flags.

Capture any corrections in `legal/_insights.md`.
