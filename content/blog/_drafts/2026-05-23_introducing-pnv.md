---
title: "Introducing pnv: a browser as a service"
description: "Create cloud browser profiles. Interact normally. Select steps from the transcript. Convert to a task. Replay exactly. No coding, no AI."
date: 2026-05-23
author: "Rizky"
author_role: "Founder"
category: "Product Updates"
tags: ["browser automation", "cloud browser", "replayable tasks", "dev tools"]
image: "/images/blog/2026-05-23-introducing-pnv/cover.png"
image_alt: "pnv — a browser as a service"
draft: true
featured: true
reading_time: "4 min read"
---

# Introducing pnv: a browser as a service

Browser automation today has two paths. Neither is great.

**Path one: write code.** You learn Playwright or Selenium or Puppeteer. You write scripts. You debug selectors that change with every deploy. You maintain test suites that break more than they pass. The promise of "write once, run anywhere" becomes "write once, fix everywhere."

**Path two: ask an AI.** You describe what you want. The LLM guesses what to click and type. It works on the happy path. It fails on the edge case. You debug a black box. When it breaks, you don't know why.

Both paths share a deeper problem: they separate the doing from the automating.

You browse manually first to figure out the flow. Then you abstract it into code or a prompt. Two separate efforts. Two places for things to go wrong.

pnv collapses that into one step.

## How it works

**Create a browser profile.** Each profile is a dedicated cloud browser with its own cookies, sessions, and environment. You can have as many as you need — one for work, one for testing, one for each client.

**Add webs to the profile.** Inside each profile, open the sites you work with. Each web has its own interaction transcript — a complete log of every click, type, navigation, and scroll.

**Convert transcript steps into tasks.** Scroll through the interaction transcript. Select the steps you want to automate. Convert them into a task with one action.

pnv will smartly detect inputs in your selected steps — form fields, search boxes, login credentials — and turn them into variables automatically. No manual mapping. No configuration. When you replay the task, just fill in the variables for that run.

**Replay the task.** Run it on demand or schedule it. Every replay produces the same result — the exact steps you selected, replayed precisely. No code to maintain. No AI to prompt.

That's it. Interact once. Convert to a task. Replay forever.

## What makes it different

**No coding required.** You don't write Playwright scripts. You don't learn a new DSL. You interact normally, select steps from the transcript, and convert them to tasks. Inputs become variables automatically — no manual mapping.

**Reusable tasks with variables.** When you create a task from transcript steps, pnv detects inputs and turns them into variables. Run the same task with different data each time. Log in with different credentials. Search different terms. Fill different forms. One task, many values.

**No AI guessing.** Most cloud browser platforms are built for LLM agents. They describe intent, the model guesses the action. That works when the page is simple. It fails on anything complex or dynamic. pnv replays exact interactions. Not approximations. Exact.

**Full browser, fully visible.** You're not sending commands to a headless process. You're controlling a real browser instance you can watch. When something goes wrong, you see what happened — no log spelunking.

## Who it's for

- **Developers** who want to automate browser workflows without writing and maintaining scripts
- **QA engineers** who want to record test flows instead of coding them from scratch
- **Ops teams** who need browser-based tasks to run reliably — same result every time

## How we compare

- **Browserbase, Kernel, Browser Use:** built for AI agents. Deterministic by design. Non-deterministic in practice. Powerful when the LLM guesses right. Frustrating when it doesn't.
- **BrowserStack, LambdaTest:** run your test scripts at scale. No live browser. No replay. Debugging means reading logs.
- **pnv:** interact normally, select steps from the transcript, convert to a task, replay exactly. No scripts. No prompts. No guessing.

pnv is a browser as a service. Nothing more. Nothing less. A tool that works, is reliable, and can be trusted upon.

Try it at [pnv.one](https://pnv.one).
