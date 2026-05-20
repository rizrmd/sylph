# Security

Sylph is a collection of markdown files and one document-generation script. It contains **no backend, no server, no database, no tracking, and no telemetry.**

## What this repo does NOT do

- **No network calls.** No code in this repo makes any HTTP request, sends any data externally, or phones home to any server. Zero analytics, zero tracking pixels, zero telemetry.
- **No code execution at runtime.** Skills are markdown instructions that AI agents read. They don't execute code - they guide agent behavior through plain text.
- **No dependencies.** The repo has no `package.json`, no `requirements.txt`, no lock files. The only optional dependency is the `docx` npm package (for generating Word contracts via `legal/templates/generate-docx.js`), which you install yourself if needed.
- **No credentials stored.** No API keys, tokens, passwords, or secrets are committed. The `.gitignore` excludes `.env`, `.mcp.json`, and `credentials/`.
- **No hidden instructions.** Every skill file is plain markdown. There are no obfuscated payloads, no base64-encoded strings, no eval() calls, no encoded instructions.

## What this repo DOES do

- **Reads local files.** Skills read markdown files from the repo (context, insights, examples) to guide AI agent behavior.
- **Writes local files.** Skills save drafts to `_drafts/` folders within the repo. Nothing is sent anywhere.
- **One shell hook.** `.claude/hooks/session-start.sh` runs `git pull --ff-only` to keep the repo up to date. That's it.
- **One JS script.** `legal/templates/generate-docx.js` generates a Word document from a contract template. It reads one PNG and writes one `.docx` - no network calls.

## The "drafts only" principle

Every skill and agent in this repo follows one rule: **never send, publish, or take irreversible actions.** All outputs go to `_drafts/` or `_logs/` for human review. The CAO (Chief Agent Officer - you) approves everything before it leaves the repo.

## MCP connectors

Skills reference external tools (Gmail, Slack, CRM, etc.) via MCP connectors. These are **not bundled** - you configure them yourself in `.mcp.json` (which is gitignored). Sylph never ships with pre-configured external connections.

## Reporting a vulnerability

If you find a security issue, please email **claire@getnao.io** or open a GitHub issue. We take this seriously.

## Verification

You can verify everything above yourself:

```bash
# Check for network calls
grep -r "fetch\|curl\|wget\|http\|https" --include="*.js" --include="*.sh" --include="*.py" .

# Check for obfuscated code
grep -r "eval\|exec\|base64\|atob\|btoa" --include="*.js" --include="*.sh" --include="*.py" .

# Check for environment variable access
grep -r "process.env\|os.environ" --include="*.js" --include="*.py" .

# Check for credentials
find . -name "*.env" -o -name "*.pem" -o -name "*.key" -o -name "credentials*" | grep -v .gitignore

# Check all dependencies
find . -name "package.json" -o -name "requirements.txt" -o -name "Pipfile"
```

Every one of these should return either nothing or only the expected results documented above.
