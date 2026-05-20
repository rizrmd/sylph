# Setup: Brand

Guide for setting up brand identity, voice guidelines, and visual asset templates by deriving everything from the live website and social presence.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- Company website URL available in `CONTEXT.md`

## Step 1: Derive visual identity from the website

1. Read `CONTEXT.md` for the company website URL.
2. Use WebFetch to pull the homepage and 2-3 key pages (about, product, pricing).
3. From the page source and rendered content, extract:
   - **Colors**: pull hex codes from CSS (primary, secondary, accent, background, text colors). Look at headers, CTAs, links, backgrounds.
   - **Typography**: identify font families from CSS (headings, body, code/monospace if applicable).
   - **Logo**: find the logo URL from the header/nav. Note if there are light/dark variants.
   - **Visual style**: minimal, bold, playful, corporate, technical? What's the overall feel?
   - **Imagery patterns**: does the site use illustrations, photos, screenshots, gradients, geometric shapes?

## Step 2: Derive voice from content

1. From the website copy pulled in Step 1, analyze the brand voice:
   - **Tone**: how does the copy read? (technical, playful, enterprise, founder-led, benefit-driven)
   - **Sentence style**: short and punchy? Complex and detailed? Mixed?
   - **Jargon level**: does it use industry jargon or plain language?
   - **Person**: first person (we), second person (you), or third person?
2. Pull the company's LinkedIn and X profiles (if set up in previous steps) to compare voice across channels.
3. Look for patterns:
   - Signature phrases or expressions that repeat across channels.
   - Words or patterns that are conspicuously absent.
   - How voice shifts between channels (website more polished, social more casual).

## Step 3: Derive social visual patterns

1. If the company has LinkedIn posts with images, note the visual patterns:
   - Do images follow a template? (consistent colors, fonts, layout)
   - Are there branded graphics or just photos?
   - What design tool signals are visible? (Canva templates, Figma exports, code-generated)
2. Check if there's a Canva brand kit, Figma file, or design system referenced anywhere.

## Step 4: Write brand guidelines

Write voice guide to `brand/guidelines/voice.md`:

```markdown
# Brand Voice Guide

## Voice in 3 words
[adjective 1], [adjective 2], [adjective 3] - derived from content analysis

## Tone spectrum
| Context | Tone |
|---------|------|
| Website | [derived from website copy] |
| LinkedIn | [derived from LinkedIn posts] |
| X | [derived from X posts] |
| Email | [derived from email examples if available] |

## Signature phrases
- [phrases that repeat across channels]

## Banned phrases
- [words or patterns conspicuously avoided]

## Writing rules
- [specific rules derived from patterns: capitalization, punctuation, brand name styling, etc.]
```

Write visual guide to `brand/guidelines/visual.md`:

```markdown
# Brand Visual Guide

## Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | [hex from CSS] | [headings, CTAs] |
| Secondary | [hex from CSS] | [accents, links] |
| Background | [hex from CSS] | [page backgrounds] |
| Text | [hex from CSS] | [body text] |
| [additional colors] | [hex] | [usage] |

## Typography
- Headings: [font from CSS]
- Body: [font from CSS]
- Code: [font from CSS, if applicable]

## Logo
- Location: [URL or file path]
- Variants: [light/dark if found]

## Visual style
- [minimal / bold / playful / etc.]
- Imagery: [illustrations / photos / screenshots / geometric shapes]
- Social graphics: [template patterns observed]

## Asset creation
- Tool: [Canva / Figma / code - if identifiable]
- Template: [template ID if found]
```

## Step 5: Confirm with the CAO

Present the derived brand guidelines:

> "I derived your brand identity from your website and social presence. Colors: [hex codes]. Fonts: [fonts]. Voice: [3 adjectives]. Visual style: [description]. Does this look right? Any corrections, additions, or brand rules I'm missing?"

Incorporate her corrections. This is the only step where she needs to provide input - and only if the auto-derived guidelines need adjustment.

## Step 6: Configure the skill

Open `.claude/skills/brand/brand-guidelines/SKILL.md` and fill in:

- Color palette with hex codes
- Typography rules
- Voice and tone per channel
- Logo usage rules
- Asset creation workflow

## Step 7: Test

Generate a short piece of branded content (e.g., a LinkedIn post) and verify it matches the brand voice and visual guidelines. Capture feedback in `brand/guidelines/voice.md`.
