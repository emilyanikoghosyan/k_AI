# di.iiii — Project Working Guide
> For onboarding AI and for Emily's own reference. Keep updated.
> Repo: https://github.com/dob-0/di.iiii | Live: https://di-studio.xyz

---

## What This Project Is

**di.iiii** is a browser-native XR authoring platform — a tool for building and publishing 3D / AR / VR scenes directly in the browser, without needing proprietary software or vendor lock-in.

**In plain terms:** Think of it as a web-based 3D editor (like a simplified Blender or Unity) where scenes are built using a node graph, and the output can be experienced in AR/VR on the web.

**Core values baked into the code:**
- Creator ownership — your published work belongs to you, no platform dependency
- Data longevity — a scene published today should still open in 30 years
- Decentralization — files are addressed by their content (SHA-256 hash), not a server URL

---

## Tech Stack — Plain Language

| Piece | What it is | Role in this project |
|-------|-----------|----------------------|
| **React 18** | UI framework | All the interface — editors, panels, menus |
| **Three.js + React Three Fiber** | 3D engine | The 3D viewport where scenes are viewed/built |
| **WebXR** | Browser AR/VR API | Makes scenes viewable in VR headsets / AR on phone |
| **Vite** | Build tool | Bundles all JS/CSS into files the browser can load |
| **Node.js + Express** | Backend server | Handles saving, auth, API |
| **SQLite** | Database | Stores projects, users, spaces — a single `.db` file |
| **Socket.IO** | Real-time comms | Live cursor sharing + collaboration between users |
| **MUI (Material-UI)** | UI component library | Buttons, panels, layout components |

**Languages used:**
- JavaScript (87%) — everything, frontend and backend
- CSS (11%) — styling
- Shell (1%) — deploy scripts

---

## How the Project is Organized

```
di.iiii/
├── src/                    ← React frontend (what you see in the browser)
│   ├── studio/             ← The stable editor (production-ready)
│   ├── beta/               ← The experimental node-first editor
│   ├── components/         ← Reusable UI parts
│   ├── hooks/              ← Custom React logic (reusable functions)
│   ├── services/           ← API calls, business logic
│   ├── xr/                 ← WebXR / VR functionality
│   └── landing/            ← The homepage
│
├── serverXR/               ← Node.js backend (the server)
│   └── src/
│       ├── index.js        ← Server starts here
│       ├── db.js           ← Database setup
│       ├── routes/         ← API endpoints (URLs the frontend calls)
│       └── socketHandlers.js ← Real-time collaboration logic
│
├── shared/                 ← Data structure definitions used by both sides
│   ├── projectSchema.cjs   ← What a "project" looks like
│   ├── runtimeSchema.cjs   ← Runtime parameters
│   └── sceneSchema.cjs     ← What a "scene" looks like
│
├── docs/                   ← Architecture & deployment guides
├── MANIFESTO.md            ← Project philosophy
├── CURRENT.md              ← What's working right now
├── PROGRESS.md             ← Full feature changelog
│
├── AGENTS.md               ← AI agent role definitions (see below)
├── AI_WORKFLOW.md          ← AI collaboration procedures
├── CLAUDE.md               ← Claude-specific AI guide
└── GEMINI.md               ← Gemini-specific AI guide
```

---

## Key Concepts to Know

### Spaces → Projects → Nodes
The data model works like folders inside folders:
- **Space** = a public unit (like a channel or gallery)
- **Project** = an editable document inside a space (the actual scene you're building)
- **Nodes + Edges** = the scene's content, structured as a graph (like a flowchart of 3D objects and their behaviors)

### Two Editors
- **Studio editor** (`src/studio/`) — stable, production-ready, 3D viewport-first
- **Beta editor** (`src/beta/`) — experimental, node-graph-first (build by connecting nodes rather than dragging objects)

### Content-Addressed Assets
When you upload a file (image, 3D model), it's stored using a SHA-256 hash as its name.
**Why:** The file name is based on the file's actual content — so the same file always has the same address, forever. No broken links.

### Operation Logs (CRDT-ready)
Projects aren't saved as one big file. Changes are stored as a sequence of operations.
**Why:** This makes merging changes from multiple people possible without conflicts (like Git, but for 3D scenes).

---

## Running It Locally

```bash
cp .env.example .env          # set up environment variables
docker compose up --build -d  # starts everything
# Frontend: http://localhost:8080
# Backend:  http://localhost:4000
```

**Or without Docker:**
```bash
npm run dev           # full stack (client + server)
npm run dev:client    # frontend only
npm run dev:server    # backend only
```

**Tests:**
```bash
npm run test
```

---

## The Existing AI Workflow in This Repo

The repo already has an AI collaboration system built in. Read these files before asking AI to touch the code:

| File | What it does |
|------|-------------|
| `AGENTS.md` (root) | Defines 8 AI agent roles — each owns specific files and has forbidden zones |
| `AI_WORKFLOW.md` | Three-tier AI strategy: Ollama (fast/local) → Haiku (small edits) → Sonnet/Opus (complex) |
| `CLAUDE.md` | Claude-specific instructions for working in this codebase |
| `serverXR/src/AGENTS.md` | Backend-specific agent roles |
| `CURRENT.md` | Current status — read this first to know what's actively being worked on |

**The 8 agent roles (from AGENTS.md):**
1. UI/UX — interface components
2. Node System — the graph/node editor
3. Viewport 3D — Three.js / 3D rendering
4. Backend API — server, database, routes
5. Schema Protocol — shared data structures
6. Infrastructure — Docker, deployment, CI/CD
7. QA — testing
8. Security — auth, access control

When asking AI to work on this codebase, tell it which role is relevant.

---

## Common Tasks & How to Approach Them with AI

### Adding a UI component
> "I'm in the UI/UX agent role. In `src/components/`, I want to add [X]. The component should [behavior]. Show me a simple example first, then explain the pattern."

### Debugging the backend
> "I'm in the Backend API role. Here's the error: [paste error]. The relevant file is `serverXR/src/[file].js`. What's causing this and why?"

### Understanding a piece of the node system
> "Explain how the node graph works in `src/beta/` like I've never worked with graph editors before. Use an analogy, then show me where in the code the nodes are defined."

### Changing a schema
> "I'm in the Schema Protocol role. I want to add [field] to `shared/projectSchema.cjs`. What are the downstream effects and which other files would I need to update?"

### Understanding Three.js / 3D code
> "Explain what [code snippet] does in plain language. I know JavaScript but I'm not deep in Three.js yet. What's the concept and why is it done this way?"

---

## Quick Context Block for AI Sessions on This Project
> Paste this when starting a new AI session about di.iiii.

```
I'm Emily, founder of thedi.studio. I'm working on di.iiii — a browser-native
XR authoring platform for building 3D/AR/VR scenes in the browser.

Repo: https://github.com/dob-0/di.iiii
Stack: React 18, Three.js, React Three Fiber, WebXR, Node.js, Express, SQLite, Socket.IO, Vite

Structure: src/ = React frontend, serverXR/ = Node backend, shared/ = schemas.
Two editors: src/studio/ (stable) and src/beta/ (node-graph, experimental).

The repo has AGENTS.md defining 8 AI agent roles — I'll tell you which role applies.
Read CURRENT.md first to know what's actively being worked on.
Read CLAUDE.md for project-specific AI instructions.

My preferences:
- Explain the WHY, not just the what
- Plain language — I may not know all the terms, help me learn them
- Short responses, bullets, no filler
- If the task is clear, act; if ambiguous, ask one short question first

[Add the specific task or question below this line.]
```

---

*Last updated: 2026-06-18*
