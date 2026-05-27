# Master Plumbing Review — Project Instructions

## Git & GitHub Workflow

After every meaningful unit of work, commit and push to GitHub. Never let significant progress sit uncommitted.

**What counts as a commit-worthy unit:**
- Adding or updating a test file
- Any change to `Review Portal.html` (new test unlocked, UI fix, feature addition)
- Adding `CLAUDE.md` or other project config

**Commit message format:**
```
Short imperative summary (50 chars or less)

Optional body explaining what changed and why, if not obvious.
```

**Commands to run after changes:**
```bash
git add <specific files>
git commit -m "..."
git push
```

Always add files by name — never `git add .` or `git add -A`, to avoid accidentally staging unrelated files.

## Project Structure

- `Review Portal.html` — hub navigation page; links to all individual tests
- `Mastery Test N - <Topic>.html` — Mastery Test files (target: 7 total)
- `Weekly Test N - <Topic>.html` — Weekly Test files (target: 9 total)
- `Refresher Test N - <Topic>.html` — Refresher Test files (target: 4 total, none yet)
- `Pre-Board Test N - <Topic>.html` — Pre-Board Test files (target: 4 total, none yet)

## Adding a New Test

When a new test file is uploaded to this folder:
1. Update the `DATA` object in `Review Portal.html` — change `file: null` to the actual filename and update the topic from `'TBA'`
2. Commit both the new test file and the updated portal in a single commit
3. Push immediately
