# CRM Ops Reference

## Stack

| Tool | Purpose | Access |
|------|---------|--------|
| [CRM name] | Primary CRM | [URL or access method] |
| [Integration 1] | [Purpose] | [Access method] |
| [Integration 2] | [Purpose] | [Access method] |

## Data model

| Object | Key fields | Relationships |
|--------|-----------|---------------|
| Company | name, domain, stage, owner | has many Contacts, Deals |
| Contact | name, email, role, company | belongs to Company |
| Deal | name, amount, stage, close_date | belongs to Company, Contact |
| Activity | type, date, notes | belongs to Contact, Deal |

## Scripts

Place automation scripts here. Common operations:

- **Sync contacts**: [Description of how contact sync works]
- **Update deal stages**: [Description of stage progression logic]
- **Export reports**: [Description of reporting automation]

## Known gotchas

- [Gotcha 1 - e.g., API rate limits, field mapping quirks]
- [Gotcha 2 - e.g., duplicate detection rules]
- [Gotcha 3 - e.g., timezone handling in activity logs]
