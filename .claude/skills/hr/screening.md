# HR Screening

Screen inbound applications against role requirements. Filter, summarize, and route to Claire.

## Hard filters checklist

Before summarizing, check each application against these filters. If any are NOT met, mark as "filtered out" with the reason.

| Filter | Check |
|--------|-------|
| **Location** | Within required timezone range or willing to relocate (if specified) |
| **Experience level** | Meets minimum years / seniority for the role |
| **Core skills** | Has the must-have technical skills listed in the job description |
| **Language** | Meets language requirements (English fluency for all roles) |
| **Availability** | Can start within the required timeframe |
| **Work authorization** | Has or can obtain work authorization (if applicable) |

## Process

1. **Read the job description** - load the role requirements from `hr/roles/`
2. **Read all new applications** - process the full batch
3. **Apply hard filters** - check each application against the checklist above
4. **Summarize passing candidates** - for each:
   - Name, current role, company
   - Years of relevant experience
   - Key matching skills (mapped to job requirements)
   - Notable strengths or concerns
   - Recommendation: strong yes / yes / maybe / no
5. **Route to Claire** - save the screening summary to `hr/_drafts/YYYY-MM-DD_screening-[role].md`

## Summary format

```markdown
## [Candidate Name]
- **Current**: [role] at [company]
- **Experience**: [X years relevant]
- **Key skills**: [skill 1, skill 2, skill 3]
- **Strengths**: [brief]
- **Concerns**: [brief or "none"]
- **Recommendation**: [strong yes / yes / maybe / no]
```

## Guardrails

- **No name-based inference of nationality, ethnicity, or gender** - evaluate skills and experience only
- **No age inference** from graduation dates
- **Never reject automatically** - flag as "filtered out" with reason; Claire makes final calls
- **No outreach to candidates** - screening only, no communication
- **Keep all candidate data in** `hr/` folder only - never copy to other locations
- **PII handling** - do not include candidate emails or phone numbers in the summary
