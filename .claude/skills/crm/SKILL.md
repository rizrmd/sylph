# CRM

Reference skill for working with the Twenty CRM. Detailed setup and schema docs live in `admin/crm/README.md`.

## Quick reference

- **CRM**: Twenty (self-hosted)
- **MCP tools**: Use the Twenty MCP server - always start with `get_tool_catalog`
- **Detailed docs**: `admin/crm/README.md`

## Key patterns

1. **Always discover tools first** - call `get_tool_catalog` before any CRM operation
2. **Learn before executing** - call `learn_tools` to get input schemas for unfamiliar tools
3. **Group-by for analytics** - use group_by tools for comparative/aggregate queries
4. **Find for records** - use find tools for retrieving specific records
5. **Multiple metrics** - run multiple group_by calls and merge results

## Common operations

| Task | Approach |
|------|----------|
| Look up a company | `find` by company name |
| Check deal pipeline | `group_by` stage, sum ARR |
| Get contact details | `find` by company or email domain |
| Update a deal stage | `execute_tool` with the update tool |

## Guardrails

- **Never delete CRM records** - archive or flag instead
- **Never bulk-update** without confirmation - show the change list first
- **Always verify ambiguous matches** - if a search returns multiple results, ask
- **Log significant changes** - note CRM updates in the relevant agent's log
