# pnv — Company Context

> Loaded automatically in every Claude session when this repo is mounted.
> Keep accurate. Update when the company materially changes.

## What pnv is

pnv (from "ponovo" — Croatian for "replay/again") is a browser-as-a-service platform. Create cloud browser profiles with their own cookies, sessions, and environments. Add webs to each profile. Interact with any web — every step is recorded in a transcript. Select steps from the transcript and convert them into tasks. pnv smartly detects inputs and turns them into variables automatically. Run the same task with different values each time.

Unlike most cloud browser platforms built for AI agents, pnv is **fully deterministic** — no AI, no LLM, no hallucination risk. Replayed tasks produce the same result every time.

**One-liner:** pnv is a browser as a service.

## The problem you solve

Existing browser automation solutions force you to either write scripts (Playwright, Selenium) or prompt an AI (Browserbase, Browser Use). Both separate the doing from the automating — you figure out the flow manually, then abstract it into code or an LLM prompt.

pnv collapses that into one step. Interact normally. Select steps from the interaction transcript. Convert to a task. Replay exactly. No coding. No AI prompting.

## How it works

1. **Create a browser profile** with its own cookies, sessions, environment
2. **Add webs** to the profile — each web is a browser context using CPU and memory
3. **Interact** within any web — every step is recorded in an interaction transcript
4. **Select steps** from the transcript and convert them into a task. Inputs become variables automatically.
5. **Replay** the task on demand or scheduled — always deterministic, always predictable

## Pricing model

Pricing is based on **concurrent webs** (the resource-intensive unit — each web consumes CPU and memory). Profiles are free and unlimited (they only store config, cookies, and sessions).

| Tier | Concurrent webs | Tasks | Variables | Scheduled runs |
|------|----------------|-------|-----------|---------------|
| Free | 1 | 3 | Yes | No |
| Pro ($10/mo) | 5 | Unlimited | Yes | Yes |
| Team ($15/mo) | 20 | Unlimited | Yes | Yes |

## ICP (Ideal Customer Profile)

- **Primary:** Developers, QA engineers, and ops teams who need browser automation
- **Buyer:** Engineering leads, QA managers, DevOps leads
- **User:** Software engineers, QA engineers, automation engineers, ops engineers

## Integrations

<!-- No integrations yet — still in early stage -->

## Team

- **Rizky** — Founder & CAO (Chief Agent Officer). Building pnv from Indonesia.

## Company

- Founded: 2026
- Stage: Pre-seed / building
- Locations: Indonesia
- Website: https://pnv.one
- GitHub: https://github.com/pnv-one

## Key terminology

| Term | Definition |
|------|-----------|
| Browser profile | A dedicated cloud browser with its own cookies, sessions, and environment |
| Web | A site opened inside a profile, with its own interaction transcript |
| Interaction transcript | A complete log of every click, type, navigation, and scroll in a web |
| Task | Converted steps from a transcript that can be replayed on demand or scheduled |
| Variable | An input detected during task creation that can be changed per run |

## Standing instructions for Claude

- Default language: English (unless explicitly for a different audience)
- Tone: direct, technical, founder-led — never fluffy or generic
- Always apply brand guidelines for external-facing content
- Read `_insights.md` in the relevant folder before generating content
- pnv is always lowercase, even at the start of a sentence
- "ponovo" is the Croatian origin — use it as brand origin story, not the product name
