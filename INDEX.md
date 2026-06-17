# k_AI — Master Index
> thedi.studio AI workflow lab. All documents, tools, and project connections live here.

---

## What This Folder Is

`k_AI` is Emily's AI workflow lab for **thedi.studio**. Not a shipping product — a living system for:
- Refining how to work with AI across all projects
- Storing onboarding docs that make every AI session faster
- Building skills and automations that reduce repetition
- Version-controlling the workflow itself (this folder is a git repo)

---

## Document Map

| File | Purpose | Use it when... |
|------|---------|----------------|
| [`CLAUDE.md`](CLAUDE.md) | Auto-loaded by Claude Code every session | Automatic — no action needed |
| [`AI_WORKING_GUIDE.md`](AI_WORKING_GUIDE.md) | Personal AI collaboration guide | Starting a session in any AI tool (paste the Quick Context Block) |
| [`di_iiii_PROJECT_GUIDE.md`](di_iiii_PROJECT_GUIDE.md) | Deep dive on di.iiii codebase | Before any di.iiii dev session — or run `/di-start` |
| [`INDEX.md`](INDEX.md) | This file — master map + changelog | Finding something, or checking what's changed |

## Claude Skills (Slash Commands)

Run these in any Claude Code session inside this folder:

| Command | What it does |
|---------|-------------|
| `/sync` | Commit + push all k_AI changes to GitHub |
| `/session-summary` | Summarize this session and log it to the changelog below |
| `/di-start` | Load di.iiii context fast — reads CURRENT.md, AGENTS.md live from the repo |
| `/pe-start` | Load pe.portal_engine context — fetches live repo structure |
| `/ickam-start` | Load i_ckam context — ESP32-CAM + FastAPI face detection system |
| `/ii-start` | Load _ii context — reads CLAUDE.md + AI_CONTEXT.md live from the repo |
| `/status-update` | Generate a short status snapshot across all active projects |
| `/repo-analyze` | Analyze any of your GitHub repos and suggest skills or improvements |
| `/new-project` | Scaffold a new project — README, CLAUDE.md, .gitignore, git init |
| `/write-readme` | Write or improve the README for any repo |

## Connected Repos

| Repo | Stack | What it is |
|------|-------|-----------|
| [di.iiii](https://github.com/dob-0/di.iiii) | JS / React / Three.js / Node | Browser-native XR authoring platform |
| [pe.portal_engine](https://github.com/dob-0/pe.portal_engine) | HTML | Portal engine — di ecosystem |
| [i_ckam](https://github.com/dob-0/i_ckam) | Arduino / Python / Web | ESP32-CAM + FastAPI face-detection event portal |
| [br_id_ge](https://github.com/dob-0/br_id_ge) | HTML | Earlier di.i XR platform iteration |
| [_ii](https://github.com/dob-0/_ii) | Python | Live AV performance system — audio, visuals, MIDI, OSC, node mapping, runs as systemd services |
| [vizzz.di](https://github.com/dob-0/vizzz.di) | C | Not yet analyzed — run `/repo-analyze vizzz.di` |

---

## Changelog

> One entry per session. Format: `YYYY-MM-DD — what changed`

- 2026-06-18 — Initial setup: created AI_WORKING_GUIDE.md, di_iiii_PROJECT_GUIDE.md, CLAUDE.md, INDEX.md. Set up Claude skills, hooks, and git repo.
- 2026-06-18 — Added 5 repo skills: `/pe-start`, `/ickam-start`, `/ii-start`, `/new-project`, `/write-readme`. Connected repo to GitHub (emilyanikoghosyan/k_AI) with autopush.
- 2026-06-18 — Revision pass: fixed broken H1 in AI_WORKING_GUIDE.md, set global git identity (fixes `/new-project` first-commit error), filled in `_ii`/`i_ckam`/`br_id_ge`/`vizzz.di` repo descriptions.
