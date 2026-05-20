# .agents/ - Cross-tool agent configuration

This directory makes the repo work across Claude Code, Codex CLI, and Cursor.
It uses symlinks so there's one source of truth with zero duplication.

## How it works

```
.agents/
  skills -> ../.claude/skills     # symlink - Codex auto-discovers skills here

.claude/
  skills/                         # source of truth for all skill files
    agents/                       # agent-type skills (chief-of-staff, cmo, etc.)
    content/                      # content channel skills (linkedin, blog, etc.)
    brand/                        # brand guidelines and asset creation
    sales/                        # CRM, campaigns, customer reports
    writing/                      # email-writer
    ops/                          # zero-inbox
    product/                      # create-issue
    legal/                        # contracts
    finance/                      # investor updates
    hr/                           # screening
    events/                       # event management

```

Skills follow the [Agent Skills](https://agentskills.io) open standard (`SKILL.md` with
`name`/`description` frontmatter). The same files work in all three tools:

| Tool | Instructions | Skills |
|------|-------------|--------|
| Claude Code | `CLAUDE.md` (imports `AGENTS.md`) | `.claude/skills/` (auto-discovered) |
| Codex CLI | `AGENTS.md` (native) | `.agents/skills/` (symlink) |
| Cursor | `AGENTS.md` (native) | auto-discovers `SKILL.md` files |

## Creating a new skill

1. Create `.claude/skills/<domain>/<skill-name>/SKILL.md` with this format:

```yaml
---
name: my-skill
description: One line explaining what the skill does and when to use it.
---

# Skill Title

Instructions here...
```

2. Add the skill to the index table in `AGENTS.md` (section 8).

That's it. All three tools auto-discover `SKILL.md` files:
- Claude Code finds it in `.claude/skills/`
- Codex finds it via `.agents/skills/` (symlink to `.claude/skills/`)
- Cursor finds it via Agent Skills auto-discovery

## Repo structure overview

```
AGENTS.md           - canonical instructions for all AI agents
CONTEXT.md          - company/product facts
CLAUDE.md           - Claude Code loader (imports AGENTS.md + CONTEXT.md)

.agents/            - cross-tool config (this directory)
.claude/            - Claude Code config (skills, memory, settings)

agents/             - AI employees with scheduled tasks (see agents/README.md)
brand/              - brand assets and guidelines
content/            - content by channel (blog, linkedin, substack, x, etc.)
sales/              - outbound campaigns and proposals
customer-success/   - follow-ups and user research
product/            - roadmap and issues
finance/            - investor updates
legal/              - contracts and templates
events/             - hackathons, meetups, remote events
```
