@AGENTS.md
@CONTEXT.md

## Claude Code

- Skills live in `.claude/skills/<skill-name>/SKILL.md` - auto-discovered as slash commands
- Memory & learnings: `.claude/MEMORY.md` (update after non-obvious decisions)
- Codex discovers skills via `.agents/skills/` symlink. Cursor discovers `SKILL.md` files automatically.
