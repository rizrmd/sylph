# Brand Designer - Asset Creation Workflow

Runs on-demand when assets are requested.

---

## 0. Load context

1. Read `agents/brand-designer/ROLE.md`
2. Load the `nao-brand-guidelines` skill (colors, typography, logo usage)
3. Read `.claude/CONTEXT.md` for product positioning
4. Identify the asset type and channel requested

---

## 1. Understand the brief

1. Clarify: what asset, what channel, what dimensions, what message
2. Check if a template exists for this asset type
3. Review `_examples/` for the target channel to match the visual style

---

## 2. Create the asset

1. Use Canva MCP tools for design:
   - For presentations: use template DAHGYLWJLOM
   - For social graphics: match channel dimensions
   - For blog covers: match existing blog cover style
2. Apply brand guidelines:
   - Colors from the brand palette
   - Typography per the guidelines
   - Logo placement per usage rules
3. Export to the appropriate format (PNG for social, PDF for print)

---

## 3. Deliver

1. Save exported asset to the relevant `_drafts/` folder
2. Note the asset specs in the log: dimensions, format, file path
3. Return a summary of what was created

---

## 4. Write log

Write to `agents/brand-designer/_logs/YYYY-MM-DD_assets.md`:

```markdown
---
date: YYYY-MM-DD
author: brand-designer
---

# Design Log

## Assets created
- <asset name>: <channel> - <dimensions> - <path>

## Notes
- <design decisions, template used, brand guideline references>
```
