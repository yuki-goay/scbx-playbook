---
name: cmd-commit
description: Workflow command: Stage and commit the current repo with a Conventional Commits message Trigger on "/commit" or "commit".
---

> Generated from harnesses/discovery (or base) commands/commit.md by `scripts/harness`.
> Arguments, if any, follow the invocation in the user message.


Create a git commit for **the current repo** following Conventional Commits.

1. Inspect what changed: `git -C . status` and `git -C . diff` (staged + unstaged).
2. Confirm you are in the intended repo. **Never** stage across repo boundaries and
   never run `git init` at the workspace root.
3. Pick the type: `feat` `fix` `docs` `chore` `refactor` `test` `build` `ci`.
4. Subject line `type(scope): summary` — imperative mood, ≤ 72 characters.
5. If a product-context spec drove this change, reference its ID (`SPEC-<area>-<n>`)
   in the commit body.
6. Stage intentionally (`git -C . add <paths>`); avoid blind `git add -A`.
7. Commit. **Never** commit `.env`, credentials, tokens, or anything under `.audit/`.

$ARGUMENTS
