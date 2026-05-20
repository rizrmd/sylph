<!-- Readable markdown version of the Enterprise License and Services Agreement.
     The JS generator (generate-docx.js) produces the formatted .docx from the same content.
     This file is the source of truth for contract text. All placeholders marked [TO COMPLETE]
     must be filled before sending for signature. Replace [YOUR COMPANY], [YOUR PRODUCT],
     [YOUR ADDRESS], [YOUR JURISDICTION] with your actual company details. -->

# ENTERPRISE LICENSE AND SERVICES AGREEMENT

## Enterprise License and Services Agreement

This Enterprise License and Services Agreement, including its Annexes and any executed Order Form (the **Agreement**), is entered into as of the date of last signature below (the **Effective Date**) by and between:

**[YOUR COMPANY LEGAL NAME]**, a [YOUR JURISDICTION and corporate form], with its principal place of business at [YOUR ADDRESS], represented by [name, title], duly authorized for the purposes hereof (**Provider** or **Licensor**); and

**[CUSTOMER LEGAL NAME]**, a [jurisdiction and corporate form], having its principal place of business at [address], represented by [name, title], duly authorized for the purposes hereof (**Customer**).

Provider and Customer are individually a **Party** and collectively the **Parties**.

---

## Preamble

Provider develops [YOUR PRODUCT], a software platform that [one-line description of what the product does]. The platform includes [core components: CLI tooling, deployed interfaces, enterprise authentication and permission features, and related services - customize to your product].

Customer wishes to deploy [YOUR PRODUCT] for internal use and to receive implementation services to support an initial deployment. Provider agrees to provide the enterprise software license and professional services under the terms of this Agreement and the applicable Order Form.

Customer acknowledges that [if applicable: AI-assisted outputs, automated systems, or similar technology] require appropriate configuration, testing, human review, and governance. Provider does not guarantee absolute accuracy, business outcome, or replacement of Customer's internal controls.

---

## 1. Definitions

| Term | Definition |
|------|------------|
| **Affiliate** | Any entity that directly or indirectly controls, is controlled by, or is under common control with a Party. |
| **Agreement** | This Enterprise License and Services Agreement, its Annexes, and any Order Form or amendment signed by the Parties. |
| **Business Days** | Monday through Friday, excluding [YOUR JURISDICTION] public holidays. |
| **Business Hours** | 9:00 a.m. to 6:00 p.m. [YOUR TIMEZONE], Monday through Friday, excluding [YOUR JURISDICTION] public holidays. |
| **Customer Data** | Data, schemas, metadata, documentation, configurations, credentials, content, and other materials submitted to or processed through the Software by Customer or its Users. |
| **Documentation** | Provider's user, technical, deployment, security, and administrator documentation for the Software, as updated from time to time. |
| **Enterprise Software** | Provider's non-open-source enterprise features and components, including license-gated functionality as described in the applicable Order Form. |
| **Fees** | The amounts payable under the applicable Order Form. |
| **Implementation Services** | Professional services described in an Order Form, including consulting, implementation support, configuration review, evaluation support, and rollout support. |
| **Open Source Software** | The open-source components of [YOUR PRODUCT] made available under [YOUR OSS LICENSE, e.g. Apache 2.0] or other applicable open-source licenses. |
| **Order Form** | A signed order form, statement of work, or other ordering document that references this Agreement. |
| **Output** | Results, reports, analyses, recommendations, generated files, or other outputs produced through use of the Software. |
| **Provider Elements** | The Software, Enterprise Software, Documentation, know-how, methods, workflows, interfaces, APIs, models, templates, scripts, and other technology owned or controlled by Provider, excluding Customer Data. |
| **Software** | The [YOUR PRODUCT] software made available to Customer, including Open Source Software and Enterprise Software, as applicable. |
| **Users** | Customer employees, contractors, and representatives authorized by Customer to use the Software for Customer's internal business purposes. |

---

## 2. Contractual Documents and Hierarchy

The contractual documents consist of this Agreement, Annex 1 (Description of Services), Annex 2 (Financial Terms), Annex 3 (Order Form), Annex 4 (Technical Requirements), and any signed amendment.

In case of conflict, the following order of precedence applies: first, the applicable Order Form for commercial and project-specific terms; second, any signed amendment; third, the Annexes; fourth, the body of this Agreement. No Customer purchase order terms, procurement portal terms, or similar terms shall modify this Agreement unless expressly signed by both Parties.

---

## 3. Scope of Services

Provider shall make the Software and Enterprise Software available to Customer for self-hosted internal use during the term stated in the applicable Order Form. The initial scope is described in the Order Form.

The Enterprise Software includes the enterprise features expressly purchased by Customer. Unless otherwise agreed in an Order Form, Provider is not responsible for hosting Customer's production environment, operating Customer's infrastructure, procuring Customer's third-party service accounts, managing Customer's identity provider, or maintaining Customer's internal systems.

Implementation Services are advisory and enablement services. They may include initial setup, configuration review, deployment guidance, and rollout support, as further described in the Order Form.

---

## 4. License and Access Rights

Subject to payment of Fees and compliance with this Agreement, Provider grants Customer a limited, non-exclusive, non-transferable, non-sublicensable right during the applicable term to install, access, and use the Enterprise Software solely for Customer's internal business operations.

Customer may permit Users to use the Software, including unlimited internal seats where stated in the Order Form. Customer is responsible for all User activity and for ensuring Users comply with this Agreement.

Open Source Software remains governed by its applicable open-source license. This Agreement governs the Enterprise Software, Implementation Services, support, and any commercial rights not granted by the applicable open-source license.

Customer shall not, and shall not permit any third party to:

- Copy, distribute, resell, sublicense, rent, lease, or provide the Enterprise Software as a managed service to third parties;
- Reverse engineer, decompile, or attempt to derive source code from non-open-source Enterprise Software, except to the extent prohibited by law;
- Remove proprietary notices, license checks, access controls, or usage restrictions;
- Use the Software to build, train, benchmark, or improve a competing product, except as expressly permitted by applicable open-source licenses for Open Source Software;
- Use the Software in violation of applicable law, Documentation, security requirements, or third-party rights.

---

## 5. Customer Responsibilities

Customer is responsible for its infrastructure, identity provider, network configuration, secrets management, access controls, security policies, and backup processes. Customer shall provide timely access, information, technical contacts, and decisions reasonably required for Provider to perform the Implementation Services.

Customer is responsible for validating Outputs before operational use and for determining whether Outputs are appropriate for business decisions. Customer shall not rely on Outputs as the sole basis for decisions requiring legal, financial, employment, medical, regulatory, or similarly sensitive judgment.

---

## 6. Implementation Services and Acceptance

Provider shall perform Implementation Services in a professional and workmanlike manner using reasonable skill and care. Unless otherwise stated in an Order Form, Implementation Services are performed remotely.

Deliverables, if any, are deemed accepted upon the earliest of: (a) Customer's written acceptance; (b) Customer's production use (for clarity, deploying to a testing or staging environment does not constitute production use); or (c) ten (10) Business Days after delivery without written, specific, and reproducible rejection notice. Provider will reasonably correct rejected Deliverables that materially fail to conform to the applicable Order Form.

---

## 7. Support, Maintenance, and Availability

Provider will provide priority support during Business Hours, unless otherwise agreed.

Because the Software is self-hosted by Customer, Provider does not provide a hosted-service uptime SLA unless expressly stated in an Order Form. Provider is not responsible for downtime, performance degradation, or security incidents caused by Customer infrastructure, Customer configuration, third-party providers, identity providers, networks, or other systems outside Provider's control.

Provider shall use commercially reasonable efforts to meet the following support targets (these are response targets, not binding service levels unless an SLA is separately agreed in an Order Form):

| Severity | Description | Target Response |
|----------|-------------|-----------------|
| Critical | Platform unusable, no workaround | 4 Business Hours |
| High | Major feature impacted, workaround exists | 1 Business Day |
| Medium | Minor feature impacted | 2 Business Days |
| Low | General questions, feature requests | 5 Business Days |

Provider may provide updates, patches, and new enterprise features during the term. Customer is responsible for applying updates in its environment unless a separate managed service is agreed.

---

## 8. Fees, Invoicing, and Taxes

Customer shall pay the Fees set forth in the applicable Order Form. Unless otherwise stated in the Order Form, Fees are non-cancellable and non-refundable.

Unless otherwise stated in an Order Form, all Year 1 Fees (annual license and implementation services) are invoiced upon signature and payable within thirty (30) days of invoice date.

Fees are exclusive of taxes, duties, withholding, bank fees, and similar charges. Customer is responsible for all taxes other than taxes based on Provider's net income. Approved travel or out-of-pocket expenses, if any, shall be reimbursed at cost.

Late amounts may accrue interest at the lower of one and a half percent (1.5%) per month or the maximum rate permitted by law. Provider may suspend Enterprise Software license keys, support, or Implementation Services for amounts more than fifteen (15) days overdue after written notice.

All recurring Fees shall be automatically adjusted on each renewal anniversary by the greater of three percent (3%) or the percentage increase in the applicable consumer price index over the preceding twelve (12) months. Provider shall notify Customer of the adjusted amount at least sixty (60) days before the renewal date.

---

## 9. Term and Termination

This Agreement begins on the Effective Date and continues for the initial term stated in the applicable Order Form. Upon expiration of the initial term, the Agreement shall automatically renew for successive periods of twelve (12) months, unless either Party provides written notice of non-renewal at least sixty (60) days before the end of the then-current term.

Fees are non-cancellable and non-refundable. Neither Party may terminate this Agreement for convenience during the initial term or any renewal term.

### 9.1 Termination for Cause

Either Party may terminate this Agreement or an Order Form for material breach if the breach is not cured within thirty (30) days after written notice. Provider may terminate immediately if Customer materially breaches license restrictions, confidentiality, security obligations, or payment obligations after suspension notice.

### 9.2 Effects of Termination

Upon expiration or termination, Customer shall cease use of Enterprise Software and destroy or return Provider Confidential Information, except as required by law or archival policy.

Provider shall, upon request, provide transition assistance for a period not exceeding thirty (30) days, including export of the Customer's configurations and data in their original format. Transition assistance beyond two (2) hours shall be billed at Provider's then-current consulting rate.

Open Source Software remains available under its applicable open-source license. Customer retains all of its data, which remains on Customer's infrastructure.

Sections concerning fees owed, license restrictions, confidentiality, intellectual property, data protection, warranties, disclaimers, liability, indemnity, and governing law survive termination.

---

## 10. Intellectual Property

Provider owns and retains all right, title, and interest in and to the Provider Elements. No rights are granted except as expressly stated in this Agreement.

Customer owns and retains all right, title, and interest in and to Customer Data. Customer grants Provider a limited right to use Customer Data solely as necessary to provide the Software, support, and Implementation Services, comply with law, and exercise Provider's rights under this Agreement.

Unless otherwise agreed in an Order Form, Provider owns all generic learnings, methods, templates, scripts, improvements, configurations, and know-how developed in connection with the Implementation Services, excluding Customer Data and Customer Confidential Information.

To the extent Provider creates a deliverable specifically for Customer that is expressly identified as assigned in an Order Form, Provider assigns such deliverable to Customer upon full payment, excluding Provider Elements, Open Source Software, and third-party materials. Provider retains a non-exclusive right to use residual know-how and generalized techniques that do not disclose Customer Confidential Information.

Customer may provide feedback. Provider may use feedback without restriction or obligation, provided Provider does not disclose Customer Confidential Information.

---

## 11. Customer Data, Security, and Privacy

Each Party shall comply with applicable data protection laws. Because the Software is self-hosted by Customer and Customer Data remains on Customer's infrastructure, Provider does not routinely process Customer personal data. If the Parties agree that Provider will process personal data (for example, during Implementation Services), the Parties shall execute a separate data processing addendum.

Customer is responsible for determining what Customer Data may be processed through the Software and for configuring identity, permissions, access controls, and security in accordance with Customer's policies.

Provider shall maintain reasonable administrative, technical, and organizational safeguards for Provider systems used to provide support and Implementation Services. If Provider becomes aware of a confirmed security incident affecting Customer Data in Provider's possession or control, Provider shall notify Customer without undue delay and, where applicable law requires, within seventy-two (72) hours after becoming aware, where feasible.

Provider will not use identifiable Customer Data to train models or improve products for other customers without Customer's written consent. Provider may use aggregated or anonymized telemetry, statistics, and learnings that do not identify Customer, Users, or data subjects to improve products and services, unless prohibited in the applicable Order Form.

---

## 12. Artificial Intelligence and Automated Outputs

<!-- Remove this section if your product does not use AI or automated output generation. -->

The Software may generate Outputs using artificial intelligence, automated systems, or other computational methods. Outputs may be incomplete, inaccurate, stale, or inappropriate for a particular purpose.

Customer is responsible for testing, validating, approving, and monitoring Outputs and for maintaining human review and governance appropriate to the use case. Provider does not warrant that Outputs will be error-free, complete, compliant with Customer policies, or suitable for any particular business decision.

Provider does not use Customer Data to train, fine-tune, or improve AI models. The Open Source Software does not transmit Customer Data to Provider.

Customer shall not use Outputs or other artifacts generated through use of the Enterprise Software to create a training corpus, benchmark, or evaluation dataset for a competing product or model, except with Provider's prior written consent.

---

## 13. Confidentiality

**Confidential Information** means non-public information disclosed by one Party to the other that is marked confidential or should reasonably be understood as confidential given its nature and the circumstances of disclosure, including business, technical, product, security, financial, pricing, roadmap, Customer Data, Provider Elements, and Agreement terms.

The receiving Party shall use Confidential Information only to perform this Agreement, protect it using at least reasonable care, and disclose it only to personnel, Affiliates, contractors, advisors, and subprocessors with a need to know and confidentiality obligations at least as protective as this Agreement.

Confidentiality obligations do not apply to information that is public without breach, already known without restriction, independently developed without use of Confidential Information, lawfully received from a third party, or required to be disclosed by law, provided the receiving Party gives prompt notice where legally permitted.

Confidentiality obligations last for five (5) years after disclosure, except trade secrets, Customer Data, and highly sensitive technical or security information remain protected as long as they remain non-public.

---

## 14. Warranties and Disclaimers

Provider warrants that it will perform Implementation Services in a professional and workmanlike manner. Customer's exclusive remedy for breach is re-performance of the non-conforming service or, if re-performance is not commercially reasonable, refund of the affected prepaid service Fees.

Provider warrants that, to its knowledge, it has the right to grant the licenses expressly granted in this Agreement.

Except as expressly stated, the Software, Enterprise Software, Open Source Software, Outputs, support, and services are provided as-is and as-available. Provider disclaims all implied warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, uninterrupted operation, and error-free performance.

---

## 15. Indemnification

Provider shall defend Customer against third-party claims alleging that the Enterprise Software, as provided by Provider and used in accordance with this Agreement, infringes such third party's intellectual property rights, and shall pay final damages awarded or settlements approved by Provider.

Provider has no obligation for claims arising from Open Source Software, Customer Data, Customer modifications, combinations not provided by Provider, use outside the Documentation, continued use after Provider provides a non-infringing alternative, or Customer's breach of this Agreement.

If any Enterprise Software becomes, or in Provider's opinion is likely to become, the subject of an infringement claim, Provider may, at its option: (i) procure the right for Customer to continue using it, (ii) replace or modify it to be non-infringing, or (iii) terminate the affected license and refund a pro-rated portion of prepaid fees.

Customer shall defend Provider against third-party claims arising from Customer Data, Customer's use of the Software in violation of law or this Agreement, Customer infrastructure, or Customer's products or services, and shall pay final damages awarded or settlements approved by Customer.

The indemnified Party must promptly notify the indemnifying Party, reasonably cooperate, and allow the indemnifying Party to control defense and settlement, provided no settlement admits fault or imposes non-monetary obligations on the indemnified Party without consent.

---

## 16. Limitation of Liability

Neither Party shall be liable for indirect, incidental, special, consequential, punitive, exemplary damages, loss of profits, loss of revenue, loss of goodwill, loss of business opportunity, or business interruption, whether in contract, tort, or otherwise, even if advised of the possibility.

Each Party's aggregate liability arising out of or relating to this Agreement shall not exceed the Fees paid or payable by Customer under the applicable Order Form in the twelve (12) months preceding the event giving rise to liability.

The liability cap does not apply to Customer's payment obligations, breach of license restrictions, either Party's confidentiality obligations, indemnification obligations, gross negligence, willful misconduct, fraud, or liabilities that cannot be limited by law.

---

## 17. Publicity

Provider may identify Customer as a customer using Customer's name and logo in customer lists, websites, pitch decks, and investor or sales materials, with Customer's prior written consent. Press releases, case studies, or detailed public references require Customer's separate prior written approval.

---

## 18. Miscellaneous

### 18.1 Non-Solicitation

Neither Party shall solicit or hire the other Party's employees during the term of this Agreement and for twelve (12) months thereafter, unless expressly agreed by the Parties in writing.

### 18.2 Assignment

Neither Party may assign this Agreement without the other Party's prior written consent, except to an Affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of substantially all assets, provided the assignee assumes the assigning Party's obligations.

### 18.3 Force Majeure

Neither Party is liable for delay or failure caused by events beyond reasonable control, including infrastructure outages, labor disputes, acts of government, war, terrorism, natural disasters, epidemics, and third-party provider failures.

### 18.4 Independent Contractors

The Parties are independent contractors. This Agreement does not create a partnership, agency, franchise, fiduciary, employment, or joint venture relationship.

### 18.5 Notices

Notices shall be sent to the addresses in the Order Form, with a copy by email to the contacts stated there, and are effective upon receipt.

### 18.6 Entire Agreement

This Agreement is the entire agreement regarding its subject matter and supersedes prior or contemporaneous understandings. Amendments must be in writing and signed by both Parties.

### 18.7 Governing Law and Dispute Resolution

This Agreement is governed by the laws of [TO COMPLETE - jurisdiction], without regard to conflict-of-law rules.

Any dispute arising out of this Agreement shall be resolved as follows: (a) the Parties shall first attempt to resolve the dispute through good-faith negotiation between their respective executives for a period of thirty (30) days; (b) if unresolved, either Party may initiate non-binding mediation administered by a mutually agreed mediator, with costs shared equally; (c) if mediation does not resolve the dispute within sixty (60) days of the initial notice, either Party may submit the dispute to the exclusive jurisdiction of the state or federal courts located in [TO COMPLETE - venue].

### 18.8 Severability

If any provision is found invalid, the remainder of the Agreement continues in effect.

### 18.9 No Waiver

Failure to enforce any provision shall not constitute a waiver.

### 18.10 Electronic Signature

This Agreement may be signed electronically and in counterparts, each of which is deemed an original.

---

## Signatures

| | [YOUR COMPANY NAME] | [CUSTOMER NAME] |
|---|---|---|
| Name: | ___________________________ | ___________________________ |
| Title: | ___________________________ | ___________________________ |
| Date: | ___________________________ | ___________________________ |
| Signature: | ___________________________ | ___________________________ |

---

## Annex 1: Description of Services

### 1. Enterprise Software

- Self-hosted annual enterprise license deployed on Customer infrastructure.
- Unlimited internal seats during the subscription term.
- [TO COMPLETE - list enterprise features, e.g. branded UI, SSO support, advanced permissions, integrations]

### 2. Initial Implementation Services

- [TO COMPLETE] days of implementation services (on-site or remote).
- Initial setup and configuration for Customer's environment.
- [TO COMPLETE - describe implementation scope, e.g. configuration review, deployment guidance, quality review]
- [TO COMPLETE] months of follow-up sessions focused on adoption, feedback loops, and iteration.

### 3. Additional Consulting Services

Beyond the initial Implementation Services, Customer may request additional consulting, training, or advisory services. Additional services are billed at [TO COMPLETE] per hour, invoiced monthly in arrears. Each engagement requires a written request (email is sufficient) specifying the scope and estimated hours.

### 4. Out of Scope Unless Separately Agreed

- Managed hosting by Provider.
- Custom software development beyond configuration and implementation support.
- Full migration or redesign of Customer's existing infrastructure, tools, or architecture.
- Production operation of Customer infrastructure.
- Formal SLA, SOC 2 report, penetration test, or dedicated security review package.
- Support beyond the initial agreed scope, except through follow-up sessions or additional services.

---

## Annex 2: Financial Terms

<!-- Customize: define your pricing structure below. Replace placeholders with your actual pricing model. -->

| Item | Description | Fee |
|------|-------------|-----|
| Enterprise license | [TO COMPLETE - describe what's included in the annual license] | [TO COMPLETE]/year |
| Implementation services | [TO COMPLETE - describe implementation scope] | [TO COMPLETE] one-time |
| Year 1 total | Initial term. | [TO COMPLETE] |
| Renewal after Year 1 | Enterprise license renewal, excluding additional services unless separately ordered. | [TO COMPLETE]/year |
| Additional consulting | Professional services beyond the initial scope. | [TO COMPLETE]/hour |

**Payment Schedule:** [TO COMPLETE - e.g. "Full Year 1 amount invoiced upon signature and payable within thirty (30) days of invoice date."]

**Currency:** [TO COMPLETE - e.g. USD, EUR]

---

## Annex 3: Order Form

| Field | Value |
|-------|-------|
| Order Form No. | [TO COMPLETE] |
| Customer | [TO COMPLETE] |
| Provider | [YOUR COMPANY LEGAL NAME] |
| Effective Date | Date of last signature |
| Initial Term | [TO COMPLETE] months from Effective Date |
| License | [YOUR PRODUCT] Enterprise self-hosted license |
| Seats | Unlimited internal Users |
| Deployment Model | Self-hosted by Customer on Customer infrastructure |
| Included Support | Priority support during Business Hours |
| Implementation Scope | [TO COMPLETE] |
| Enterprise License Fee | [TO COMPLETE]/year |
| Implementation Fee | [TO COMPLETE] one-time |
| Year 1 Total | [TO COMPLETE] |
| Billing Contact | [TO COMPLETE] |
| Technical Contacts | [TO COMPLETE] |

---

## Annex 4: Technical Requirements

- Customer must provide appropriate self-hosting infrastructure for the Software, including compute, storage, networking, DNS, TLS, secrets management, backup, monitoring, and access controls.
- Customer must provide access to supported data sources and systems as required by the Software.
- Customer must configure permissions, access controls, identity-provider integration, and least-privilege access according to its internal policies.
- Customer must provide or configure any required third-party service access, keys, and applicable provider agreements.
- Customer must provide relevant documentation, configuration assets, and business context necessary for implementation.
- [TO COMPLETE - add product-specific technical requirements]
