# Visual System

<!-- Customize: replace all placeholder colors, fonts, and descriptions with your brand's actual design system -->

## Color Palette

### Primary Family

<!-- Your signature brand color. Used for the logomark, buttons, CTAs, gradients, interactive accents, and emphasis. -->

| Swatch | Hex | Usage |
|--------|-----|-------|
| Light | #[XXXXXX] | Highlights, hover states, light accents |
| Mid | #[XXXXXX] | Secondary accents, gradient transitions |
| Bright | #[XXXXXX] | Links, interactive elements |
| **Core brand color** | **#[XXXXXX]** | **Primary brand color - logo, CTAs, key accents** |
| Deep | #[XXXXXX] | Dark gradients, emphasis |
| Darkest | #[XXXXXX] | Deepest variant, dark gradient ends |

### Dark Family (Product & UI)

<!-- Used for the product interface, dark mode contexts, and professional/editorial backgrounds. -->

| Swatch | Hex | Usage |
|--------|-----|-------|
| Near-black | #[XXXXXX] | Deepest background, product canvas |
| Dark charcoal | #[XXXXXX] | Secondary dark backgrounds |
| Dark gray | #[XXXXXX] | Borders, dividers on dark backgrounds |
| Mid gray | #[XXXXXX] | Muted text on dark, subtle UI elements |

### Light/Neutral Family (Backgrounds)

<!-- Used for light mode backgrounds, cards, and sections. -->

| Swatch | Hex | Usage |
|--------|-----|-------|
| Off-white | #[XXXXXX] | Primary light background |
| Light gray | #[XXXXXX] | Card backgrounds, sections |
| Cool gray | #[XXXXXX] | Borders, dividers on light backgrounds |

### Usage Rules

- **Never mix warm grays.** All neutrals should have a consistent undertone matching your brand.
- **Primary color is an accent, not a flood.** Use it for emphasis - a CTA, a logomark, a gradient - not as a background color for large text blocks.
- **Dark backgrounds use the Dark family, not pure black (#000000).**
- **Gradients:** define your signature gradient direction and style (linear, radial, mesh, etc.)

## Typography

### Heading Font

<!-- Replace with your heading typeface -->

[Font Name] is used for all headings and brand statements. [Brief description of why this font fits the brand.]

**Usage:**
- Headings (H1-H3)
- Taglines and brand statements
- Hero text on landing pages
- Presentation slide titles

**Available weights:** [List weights]

**Recommended pairings:**
- H1: [Font] Bold
- H2: [Font] SemiBold
- H3: [Font] Medium
- Tagline / display: [Font] Bold

### Body Font

<!-- Replace with your body typeface -->

[Font Name] is the foundation for all digital experiences. [Brief description.]

**Usage:**
- Body text
- UI labels, buttons, form elements
- Navigation
- Captions and metadata
- Technical documentation

**Available weights:** [List weights]

**Monospace variant:** [Font Name Mono] - used for code blocks, terminal output, and any monospaced context.

### Typography Rules

- **Never use system fonts** (Arial, Helvetica, etc.) in branded materials unless they are your chosen brand fonts.
- **Headings always use the heading font.** Body always uses the body font.
- **Minimum body size:** 14px for web, 10pt for print.
- **Line height:** 1.4-1.6 for body text. Tighter (1.1-1.2) for headings.
- **Letter spacing:** [Specify defaults]

## Logo

### Components

The logo has two parts:
1. **Logomark** - [Describe the icon/symbol and what it represents]
2. **Wordmark** - [Describe the text treatment]

They are used together as the primary logo, or the logomark can be used standalone as an icon.

### Variants

| Variant | Logomark | Wordmark | Background |
|---------|----------|----------|------------|
| **Colored** | [Brand color] | Black | Light backgrounds |
| **Black** | Black | Black | Light backgrounds (monochrome contexts) |
| **White** | White | White | Dark backgrounds, photos, gradients |

### Logo Files

Available in the brand assets folder:

- `logo/colored/` - logo-colored.svg, .png, @2x.png, @3x.png
- `logo/black/` - logo-black.svg, .png, @2x.png, @3x.png
- `logo/white/` - logo-white.svg, .png, @2x.png, @3x.png

Always use SVG for digital. Use @2x/@3x PNGs only when raster is required.

### Clearspace

Minimum clearspace = X, where X = logo height / 2.

Apply this on all four sides.

### Logo Don'ts

- Do not rotate, skew, or distort
- Do not change the proportions between logomark and wordmark
- Do not place the colored logo on a dark background (use white variant)
- Do not add drop shadows or effects
- Do not recreate the logo in a different typeface

## Art Direction

### Visual Themes

<!-- Define 3-4 recurring visual elements that define your brand's look -->

1. **[Theme 1]** - [Description of visual approach and what it represents]
2. **[Theme 2]** - [Description]
3. **[Theme 3]** - [Description]
4. **[Theme 4]** - [Description]

### Photography Style

- [Describe the style, mood, and treatment for photography]
- [Product-in-context guidelines]
- [Team/workspace imagery guidelines]

### Composition Patterns

**Branded cards (social, marketing):**
- Logo (white variant) top-left
- Tagline bottom-left, white text
- Background: either gradient or photography + gradient overlay

**Product showcasing:**
- Dark background reflecting the actual product aesthetic
- Product screens shown in perspective
- [Product-specific visual elements]

**Website hero:**
- Centered tagline in heading font
- Description text in body font, centered
- CTA button in brand color with white text
- Product screenshot below

### Background Treatments

| Context | Background |
|---------|-----------|
| Website hero | [Describe] |
| Product sections | [Describe] |
| Marketing cards | [Describe] |
| Documentation | White or off-white |
| Social posts | [Describe] |

### Gradient Specification

<!-- Define your signature gradient if applicable -->

[Describe gradient type, key colors, direction, and characteristics.]
