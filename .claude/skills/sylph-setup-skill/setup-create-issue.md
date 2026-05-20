# Setup: Create Issue

Guide for setting up the GitHub issue creation skill by pulling existing issues, analyzing conventions, and configuring formatting rules.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- GitHub CLI (`gh`) authenticated

## Step 1: Get the repo

Ask the CAO one question:

> **What's your GitHub repo? (org/repo)**

If CONTEXT.md already contains a GitHub repo URL, use it and skip the question.

## Step 2: Pull recent issues

Use the GitHub CLI to pull existing issues and analyze conventions:

1. **Pull the last 50 issues** (open and recently closed):
   ```
   gh issue list --repo [org/repo] --limit 50 --state all --json number,title,body,labels,author,createdAt,state
   ```
2. **For each issue, capture:**
   - Title
   - Body (full markdown)
   - Labels applied
   - Author (CAO vs team member vs external contributor)
   - State (open/closed)
   - Creation date

3. **Pull issue templates** if they exist:
   ```
   gh api repos/[org/repo]/contents/.github/ISSUE_TEMPLATE
   ```
   Also check for `.github/ISSUE_TEMPLATE.md` (single template) and `.github/ISSUE_TEMPLATE/` (multiple templates).

4. **Pull the label list**:
   ```
   gh label list --repo [org/repo] --json name,description,color
   ```

## Step 3: Analyze conventions

### Title patterns
- **Format**: sentence case, lowercase, imperative, or descriptive? (e.g., "Add dark mode" vs "add dark mode" vs "Dark mode support")
- **Prefix conventions**: does the repo use prefixes? (e.g., `[bug]`, `feat:`, `fix:`)
- **Length**: how long are titles typically?
- **CAO's style vs others**: does the CAO write titles differently from contributors?

### Body patterns
- **Template usage**: do issues follow a template? Which one?
- **Sections**: what sections appear in well-written issues? (Problem, Expected behavior, Steps to reproduce, Screenshots)
- **CAO's style**: how does the CAO structure her issues specifically?
- **Detail level**: terse or thorough? Code snippets included?
- **Anti-patterns**: sections that are skipped, unnecessary boilerplate

### Label conventions
- **Categories**: are labels organized by type? (bug, feature, enhancement, chore)
- **Priority labels**: are there priority labels? (P0, P1, critical, nice-to-have)
- **Area labels**: are there area/component labels? (frontend, backend, docs, infra)
- **Status labels**: any workflow labels? (needs-triage, in-progress, blocked)
- **Most used labels**: which labels appear most frequently?

### Save examples

Save the 3-5 best issues (authored by the CAO, well-structured, representative) to `product/_examples/`:

```yaml
---
date: YYYY-MM-DD
type: github-issue
repo: [org/repo]
issue_number: [number]
labels: [label1, label2]
author: [username]
status: [open/closed]
notes: "[why this is a good example - structure, clarity, labeling]"
---

## [issue title]

[issue body]
```

Also save 1 issue from an external contributor as a comparison example.

## Step 4: Write insights

Write the derived analysis to `product/_insights.md`:

```markdown
# GitHub Issue Insights

## Repository
- Repo: [org/repo]
- Issue templates: [yes/no - list template names if present]

## Title conventions
- Style: [sentence case / lowercase / imperative]
- Prefix: [none / type prefix / emoji prefix]
- Example good title: "[example from top issue]"

## Body conventions
- Sections used: [Problem, Expected behavior, Steps to reproduce, etc.]
- Detail level: [terse / thorough]
- CAO's pattern: [how she specifically structures issues]
- Anti-patterns: [sections to avoid, unnecessary boilerplate]

## Labels
| Category | Labels | Usage |
|----------|--------|-------|
| Type | [bug, feature, enhancement] | [how they're applied] |
| Priority | [P0, P1, etc.] | [how priority is determined] |
| Area | [frontend, backend, etc.] | [how areas are labeled] |

## Label frequency (top 10)
- [label]: [count] issues
- [label]: [count] issues

## Filing patterns
- Who files issues: [CAO / team / community - proportions]
- Issue volume: [issues per week/month]
- Resolution time: [average days to close, if derivable]
```

## Step 5: Confirm with the CAO

Present the derived conventions:

> I pulled [N] issues from [org/repo]. Your issues typically use [title style] titles, [sections] in the body, and labels like [top labels]. You have [N] issue templates. Your personal style tends toward [description]. Does this capture your conventions? Any label rules or formatting preferences I should add?

Incorporate her corrections.

## Step 6: Configure the skill

Open `.claude/skills/create-issue/SKILL.md` and fill in:

- Repository (org/repo)
- Title format rules (from conventions)
- Body template (from CAO's pattern, not generic templates)
- Label taxonomy (full label list with when to apply each)
- Duplicate detection rules (what to search before creating)
- Anti-patterns (what to avoid in issue bodies)

## Step 7: Test

Create one issue for a real task or bug. Ask the CAO to review before submitting. Capture any style corrections in `product/_insights.md`.
