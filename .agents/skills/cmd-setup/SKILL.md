---
name: cmd-setup
description: Workflow command: Guided onboarding — connect your content repos and credentials, then compose your starting role Trigger on "/setup" or "setup".
---

> Generated from harnesses/discovery (or base) commands/setup.md by `scripts/harness`.
> Arguments, if any, follow the invocation in the user message.


Onboard this workspace end-to-end: environment check → decisions → content repos →
credentials → role composition → green `scripts/doctor`. Narrative background lives in
`docs/playbook/04-onboarding.md`; this command automates its Path A/B by driving the
existing deterministic scripts.

**Operating principles (non-negotiable):**

- **You decide, scripts build.** Never free-hand the git topology: repos are created
  remotely (`gh`/`glab`) and **cloned in by `scripts/bootstrap`** — never `git init` a
  content repo, never `git clone` one by hand into the workspace.
- **Check-then-act, every step.** `/setup` must be safely re-runnable: skip what is
  already done, resume what is half-done. Detect state before acting.
- **Confirm every side-effect** (repo creation, push, file overwrite) individually,
  with the exact names/visibility/owner shown, before doing it.
- **Never touch token values.** The user pastes tokens into `.env` themselves; you
  verify only presence via `scripts/env-check`. Never read, echo, or ask for a token.

## Phase 0 — preflight (read-only)

1. Run `scripts/doctor` — note (don't fix) anything it reports.
2. Detect the environment; render one checklist with a ✓/✗/– per row:
   - `git` — **required**; blocking if absent.
   - `gh` + `gh auth status` / `glab` + `glab auth status` — needed only for the
     guided repo-creation path; degrade to manual URLs if absent.
   - `docker` — the GitHub MCP server runs in it; note if absent.
   - `node`, `python3` — used by MCP wrappers / graph-compile; note if absent.
   - `ffmpeg` — optional (audio-cue device routing); mention `/audio`, don't push it.
3. Read `.harness` and check for `product-context/` / `product-codebase/` +
   `workspace.manifest.local.yaml` — if the workspace is already fully set up, say so
   and offer only the remaining/changed steps.

## Phase 1 — decisions (AskUserQuestion; honour `$ARGUMENTS` as the path preselect)

Ask only what the detected state leaves open:

1. **Path** — `greenfield` (create two new content repos) · `link` (connect existing
   repos) · `look` (skip content; compose a role and explore — playbook Path A).
2. **Host** (greenfield/link): GitHub · GitLab · "I'll paste URLs" (manual).
3. **Names & home** (greenfield): repo names (suggest `<project>-context`,
   `<project>-codebase`), owner/org, visibility (recommend **private**).
4. **Starting role**: discovery (new product — recommend for greenfield) · definition ·
   design · develop (implementing an existing spec/codebase); agent claude/codex.
5. **Credentials**: which they'll use — `GITHUB_TOKEN` (GitHub MCP, all roles),
   `FIGMA_TOKEN` (design/develop, optional).

## Phase 2 — build (check-then-act; confirm each side-effect)

1. **`.env`** — if absent: `cp .env.example .env`. Then ask the user to open `.env` in
   their editor and paste their token(s) in themselves; verify with
   `scripts/env-check` (prints SET/unset, never values). Don't block on optional
   tokens.
2. **Manifest** — write `workspace.manifest.local.yaml` (copy of
   `workspace.manifest.yaml` with the real URLs, keeping `path`/`url`/`ref` order).
   If it already exists with different URLs, show the diff and ask before replacing.
3. **Greenfield repos** — for each of the two repos: check first
   (`gh repo view OWNER/NAME` / `glab repo view`), create only if missing
   (`gh repo create OWNER/NAME --private` or the chosen visibility) — one explicit
   confirmation per repo. If unauthenticated, hand the user the `gh auth login` /
   `glab auth login` command and wait — the OAuth is theirs to complete.
4. **Clone** — `scripts/bootstrap` (clones whatever is missing; no-op on present
   repos; refuses placeholder URLs — that means step 2 was skipped).
5. **Skeleton** — `scripts/scaffold-context` (idempotent: lays the folder taxonomy and
   seeds the starter `INDEX.md` / `CLAUDE.md` **only where absent** — safe on linked
   repos with content).
6. **First push (greenfield only)** — commit and push each content repo separately
   (`git -C product-context …`, then `git -C product-codebase …`), Conventional
   Commits (`chore: scaffold content plane`), one confirmation per push.
7. **Link path checks** — after bootstrap, verify `product-context/INDEX.md` and
   `product-codebase/CLAUDE.md` exist. If missing, flag it and offer
   `scripts/scaffold-context` (it never overwrites) — the root `CLAUDE.md` imports
   both, so gaps here degrade every session.

## Phase 3 — compose & gate

1. `scripts/harness use <role>` (add `--agent codex` if chosen).
2. `scripts/doctor` — must exit 0. If it fails, fix per its messages (they name the
   command) and re-run; do not declare success on a red doctor.
3. Close with a short summary: what was created/linked, active role/agent, plus:
   - **restart note** — if `.env` or `.mcp.json` changed, MCP servers pick it up on
     the next agent launch; tell the user to restart the agent session.
   - **first move for the role** — discovery: drop raw inputs in
     `product-context/inbox/` and say "triage the inbox"; definition: "draft a
     requirement"; design: "start a canvas brief"; develop: "implement SPEC-…".

If anything fails midway: report exactly what completed and what didn't, then stop —
re-running `/setup` resumes from the detected state.

$ARGUMENTS
