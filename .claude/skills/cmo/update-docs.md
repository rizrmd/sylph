# Update Docs

Check recently merged PRs for user-facing changes and update documentation accordingly.

## Process

1. **Fetch merged PRs** - list PRs merged in the last 7 days on the main repo
2. **Classify each PR** - does it change user-facing behavior, API, CLI, or configuration?
3. **Skip internal-only PRs** - refactors, CI changes, dependency bumps need no docs update
4. **Identify affected docs** - map each user-facing PR to the relevant doc page(s)
5. **Draft updates** - write the doc changes in a new branch
6. **Create a PR** - open a docs PR linking back to the source PRs

## What to update

- Feature docs for new or changed features
- API reference for endpoint or parameter changes
- Configuration reference for new env vars or settings
- Changelog / release notes
- Getting started guide if onboarding flow changed

## PR format

```
docs: update [section] for [feature/change]

Reflects changes from #PR1, #PR2.
```

## Guardrails

- **Never modify source code** - docs changes only
- **Link to source PRs** in the docs PR description
- **One docs PR per batch** - group related changes together
- **Flag ambiguity** - if a PR's user impact is unclear, ask before documenting
