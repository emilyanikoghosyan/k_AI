# Delegation

The main thread (Opus) directs: plans, decides, reviews. Hand self-contained work to the crew, and run independent pieces in parallel (several Agent calls in one message).

- `scout` (Haiku): finding files, reading logs, checking system or config state, gathering facts. Read-only.
- `builder` (Sonnet): well-specified, mechanical changes, such as edits across files, renames, boilerplate, and running tests or builds.
- Keep on the main thread: anything that needs this conversation's context, design or creative decisions, tricky math or graphics, live-show or irreversible work, and reviewing what the crew returns.

## Other sessions

Emily often runs several Claude sessions at once (e.g. one on models, one testing the PC). At the start of each task, and again before changing anything shared (system settings, installs, `~/.claude` config or memory, a repo another session may be in), run `ListAgents`. If a peer is busy, `SendMessage` it: say what you're about to touch and ask what it's touching. If the work overlaps, pause and tell Emily instead of racing the other session. Read-only work doesn't need the check.

Subagents start blank. Give each one a complete brief: the goal, the paths, the constraints, and what to report. Don't delegate a single lookup you can do directly faster.
