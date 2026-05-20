# Setup: Blog

Guide for setting up the blog content skill by pulling existing articles from the blog repo.

## Prerequisites

- Global setup complete (`/sylph-setup`)
- CONTEXT.md filled in (company website is known)

## Step 1: Find the blog source

Ask the user ONE question:

> **What's the GitHub repo for your blog?** (e.g., `your-org/your-blog` or the full URL)

If she doesn't have a blog repo (e.g., uses a CMS like WordPress, Ghost, or Medium):

> **What's your blog URL?** I'll read the articles directly from the web.

## Step 2: Pull existing articles

### If repo-based (GitHub):

1. **Clone or read the repo** - use GitHub MCP or Bash to access the repo
2. **Find all blog articles** - look for markdown files, MDX files, or HTML in common blog paths (`/blog/`, `/content/`, `/posts/`, `/src/content/`, `/articles/`)
3. **Read each article** - extract title, date, content, tags/categories, author
4. **Copy articles to `content/blog/_published/`** - use proper frontmatter format:

```yaml
---
date: YYYY-MM-DD
channel: blog
topic: [derived from title/content]
format: article
status: published
performance:
notes:
---
```

5. **Promote the 3-5 best articles to `content/blog/_examples/`** - pick based on:
   - Recency (prefer recent over old)
   - Length and depth (prefer substantive articles)
   - Variety (different topics/formats)

### If web-based (CMS):

1. **Read the blog index page** - find article URLs
2. **Read each article** - use WebFetch to pull full content from the top 10-15 most recent articles
3. **Save to `content/blog/_published/`** with proper frontmatter
4. **Promote the 3-5 best to `content/blog/_examples/`**

## Step 3: Derive insights automatically

From the collected articles, analyze and write to `content/blog/_insights.md`:

### Voice analysis
- **Sentence patterns**: average length, use of fragments, rhetorical devices
- **Vocabulary level**: technical depth, jargon frequency, reading level
- **Tone**: formal/informal spectrum, personal/institutional, humor usage
- **Person**: first person (I/we), second person (you), third person
- **Opening patterns**: how she starts articles (story, question, stat, bold claim)
- **Closing patterns**: how she ends articles (CTA, summary, question, forward-looking)

### Structure analysis
- **Article types**: tutorials, thought leadership, case studies, announcements, listicles, deep dives
- **Typical length**: word count distribution
- **Header structure**: H2 only vs nested H2/H3, numbering, question headers
- **CTA placement**: end only, mid-article, inline
- **Internal linking**: patterns, key pages referenced
- **Visual elements**: code blocks, images, diagrams, tables

### Topic analysis
- **Recurring themes**: what she writes about most
- **Positioning angle**: how she frames topics relative to the company
- **Keyword themes**: SEO-relevant terms that appear frequently

### Write the insights file

```markdown
# Blog Insights

## Voice
- [Derived voice characteristics]
- [Sentence patterns]
- [Tone and vocabulary notes]

## What works
- Article type: [best-performing formats based on what she publishes most]
- Topics: [recurring themes]
- Length: [typical word count]
- Structure: [preferred article structure]

## SEO
- Target keywords: [derived from article content and titles]
- Header strategy: [observed H2/H3 patterns]
- Internal linking: [pages she links to most]

## What doesn't work
- [If observable from the content - formats she tried once and abandoned]

## Cadence
- [Derived from publication dates]

## Distribution
- [If observable from social shares, newsletter mentions, etc.]
```

## Step 4: Configure the blog-writer skill

Open `.claude/skills/blog-writer/SKILL.md` and update with derived rules:

- **Article structure template** (from observed patterns)
- **Voice adjustments** (blog-specific tone vs other channels)
- **Opening/closing patterns** (from examples)
- **SEO checklist** (from observed practices)
- **CTA patterns** (from observed placement)

Show the user:

> Here's what I learned from your [N] blog articles. I've set up the blog skill with your voice, structure, and topic patterns. Here's a summary - what would you change?

## Step 5: Test generation

Generate one blog article outline + intro paragraph on a topic derived from her existing content themes. Ask for feedback on structure, tone, and depth. Capture edits in `content/blog/_insights.md`.
