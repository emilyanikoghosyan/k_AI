Scaffold a new project. The project name/description is: $ARGUMENTS

If no name is given, ask: "What's the project name and what is it for? (one sentence)"

Once you have the name and description, create these files in the current directory or a new subfolder if appropriate:

**README.md** — fill in with:
- What it is (1-2 sentences)
- Stack (leave as [TBD] if unknown)
- How to run (leave as [TBD])
- Status: early stage

**CLAUDE.md** — fill in with Emily's standard preferences:
- Who she is (Emily / thedi.studio)
- Stack context from the project description
- Communication rules: explain the WHY, plain language, short responses, bullets
- Link to k_AI/AI_WORKING_GUIDE.md for full context

**.gitignore** — include:
- .env and all secret patterns
- node_modules/ (if JS project)
- __pycache__/ and *.pyc (if Python project)
- .DS_Store, Thumbs.db

After creating the files, run `git init` and make the initial commit.

Then say: "Project scaffolded. Next: push to GitHub when ready with /sync, or run /repo-analyze [name] to get setup recommendations."
