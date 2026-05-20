# Create Presentation

Process for creating slide decks using the brand template.

## Tools

| Tool | Role |
|------|------|
| Canva (primary) | Create from brand template, export PDF/PPTX |
| Claude Design (fallback) | Generate slides if Canva MCP is not connected |

## Process

1. **Load brand guidelines** - read `brand/brand-guidelines.md`
2. **Outline first** - draft slide titles and key points before designing
3. **Create the deck:**
   - **If Canva MCP is connected**: use the brand template `[your-canva-template-id]`
   - **If Canva is not available**: use Claude Design to generate slide layouts following brand colors, fonts, and structure
4. **One idea per slide** - no walls of text; use visuals and short phrases
5. **Apply brand** - company colors, brand font, logo on title and closing slides only
6. **Export** - PDF for sharing, PPTX if editable version needed
7. **Save** - to `content/presentations/_drafts/YYYY-MM-DD_slug.pdf`

## Slide structure

- **Title slide**: presentation title, subtitle, date, company logo
- **Agenda**: 3-5 items max
- **Content slides**: one point per slide, supporting visual or data
- **Closing slide**: CTA or next steps, contact info, company logo

## Guardrails

- **Always use the brand template** - never build from a blank deck
- **Max 15 slides** for external presentations; max 10 for internal
- **No clip art** - use screenshots, data charts, or simple icons
- **Keep text tight** - short sentences, no filler, one idea per bullet
