# global/ — machine-wide Claude Code setup

Copies of the files that live in `~/.claude/` on Emily's laptop. They apply to every session in every folder, not just this repo. They're kept here as the backup and history.

| File here | Lives at | What it does |
|---|---|---|
| `CLAUDE.md` | `~/.claude/CLAUDE.md` | Global rules: Opus directs and delegates to the crew; check other running sessions before any shared change |
| `agents/scout.md` | `~/.claude/agents/scout.md` | Crew: Haiku, read-only fact-finding (files, logs, system state) |
| `agents/builder.md` | `~/.claude/agents/builder.md` | Crew: Sonnet (medium effort), carries out already-decided edits, runs tests, never commits or installs |
| `settings.models.json` | part of `~/.claude/settings.json` | Model + per-model effort: Opus/Fable high, Sonnet medium, fall back to Sonnet if Opus is overloaded |

`settings.models.json` is an excerpt. Merge its keys into `~/.claude/settings.json` rather than replacing that file.

## Restore on a new machine
```bash
mkdir -p ~/.claude/agents
cp global/CLAUDE.md ~/.claude/CLAUDE.md
cp global/agents/*.md ~/.claude/agents/
# then merge settings.models.json keys into ~/.claude/settings.json
```
New agents load when a Claude session starts, so restart Claude after copying.

## Keeping it in sync
This folder is a copy, not a link. After changing the live files in `~/.claude/`, copy them back here and commit.
