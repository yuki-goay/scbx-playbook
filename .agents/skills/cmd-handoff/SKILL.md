---
name: cmd-handoff
description: Workflow command: File / list / resolve cross-role handoffs — durable tickets for work you find but do not own Trigger on "/handoff" or "handoff".
---

> Generated from harnesses/discovery (or base) commands/handoff.md by `scripts/harness`.
> Arguments, if any, follow the invocation in the user message.


The `handoff` mode — a durable, **any-role → any-role** queue for work a session finds but does not
own. **File it instead of switching roles mid-task**, then keep working the current thread; the
owning role sees it via `scripts/handoff list` and the `harness use` nudge when it is next composed.

## When to file (vs act inline)

- File when the fix belongs to **another role's write-scope**: a wrong/missing spec → Design; a
  missing `EXC`/`INT`/`DF`/story gap → Definition; an untested research assumption → Discovery; a
  code change → Develop. You can't write there anyway — the ticket is how the finding isn't lost.
- Don't file for work inside your own scope — just do it. Don't file vague hunches: a handoff
  carries a **concrete finding** plus the artefact `ref` it concerns.

## Verbs

- **File** — `scripts/handoff file --what "<one line>" [--ref <IDs>] [--why "<consequence>"] [--needs "<what the fix unblocks>"] [--to <role>] [--blocked-by <IDs>]`
  The owning role is **auto-routed** from `--ref` (`EXC-66` → definition, a `SPEC-…` → design, a
  `PER-…` → discovery, code/no-ref → develop); pass `--to` only to override.
- **List** — `scripts/handoff list` shows open tickets addressed to the active role, ready
  (unblocked) first. `--all` for everything, `--from <role>` for what you filed, `--count` for totals.
- **Resolve** — `scripts/handoff claim <id>` while you work it; `scripts/handoff close <id> --resolved-by <ref>`
  once the real fix (the spec edit / the code) is committed.
- **Debug routing** — `scripts/handoff route --ref <IDs>`.

## How it stores (so nothing surprises you)

Tickets are committed markdown under each content repo's `handoffs/`. A ticket lives in the repo of
whoever **filed** it — the CLI writes only the active role's own repo, tagged `to: <owner>` — and
`list` reads **both** repos, pairing `file`↔`close` events to derive status. You never write a repo
your role can't. `ADR`/`decisions/` findings route to a **human** propose-only sink, not a role.

Method SSOT: [`harnesses/base/process/01-handoff.md`](../process/01-handoff.md).

$ARGUMENTS
