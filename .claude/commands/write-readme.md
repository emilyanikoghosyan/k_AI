Write or improve the README for a repository. The target repo is: $ARGUMENTS

If no repo is specified, ask: "Which repo needs a README? Options: pe.portal_engine, i_ckam, br_id_ge, _ii, vizzz.di, or paste a path to a local project."

For a GitHub repo:
1. Fetch the repo contents: https://api.github.com/repos/dob-0/[repo]/contents
2. Fetch the current README if it exists
3. Fetch key files (package.json, main entry file, etc.) to understand the project

Then write a complete README.md in this structure:

# [project name]
> [one-line description — what it is and who it's for]

## What it does
[2-4 sentences, plain language, no jargon without explanation]

## Stack
[bullet list: language/framework — what it does in this project]

## How to run
[step by step — fill in what you know, mark [TBD] for unknowns]

## Project structure
[key files/folders with one-line descriptions]

## Status
[active / experimental / archived] — [last known activity]

---
*thedi.studio*

Keep it honest — use [TBD] for anything unknown rather than making things up.
After writing, ask: "Should I commit this to the repo?"
