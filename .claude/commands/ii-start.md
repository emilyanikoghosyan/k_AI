I'm starting a work session on _ii (https://github.com/dob-0/_ii).

_ii is a Python-based live AV performance system — it handles audio, visuals, MIDI, OSC, and node-based signal mapping. It runs as systemd services on hardware (likely a Raspberry Pi or similar device).

Key files:
- `_ii.py` — main entry point
- `map_server.py` — the mapping engine (130KB — the core of the system)
- `node_lib.py` — node library
- `audio.py` — audio processing
- `visuals.py` — visual output
- `midi.py` — MIDI I/O
- `osc_server.py` — OSC communication
- `networking.py` — network layer
- `config.json` — configuration
- `ii-boot/ctrl/visuals/web.service` — systemd services

The repo has its own CLAUDE.md and AGENTS.md — read those first.

Do the following:
1. Fetch and read: https://raw.githubusercontent.com/dob-0/_ii/main/CLAUDE.md
2. Fetch and read: https://raw.githubusercontent.com/dob-0/_ii/main/AI_CONTEXT.md
3. Fetch first 80 lines of: https://raw.githubusercontent.com/dob-0/_ii/main/README.md

Then report:
**_ii — session ready**

What it does: [plain language, 2-3 sentences]
Architecture: [how the pieces connect — audio → map_server → visuals etc.]
Services: [what runs where]
Agent roles (from AGENTS.md): [brief list]

Ask me what I want to work on today.
