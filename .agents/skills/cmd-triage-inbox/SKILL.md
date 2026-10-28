---
name: cmd-triage-inbox
description: Workflow command: File raw human captures from inbox/ into structured research notes Trigger on "/triage-inbox" or "triage-inbox".
---

> Generated from harnesses/discovery (or base) commands/triage-inbox.md by `scripts/harness`.
> Arguments, if any, follow the invocation in the user message.


Triage the human quick-capture intake in `product-context/inbox/` into the product context.

For each item in `product-context/inbox/`:
1. Read it. Understand what was captured and any context.
2. Turn it into a properly-formed research note under `product-context/research/`, with
   **provenance**: note that it originated from an inbox capture, and the capture date if
   present.
3. Remove the triaged item from the inbox (`git -C product-context rm inbox/<file>`).
4. Commit to the product-context repo with a Conventional Commit.

Boundaries:
- Triage output goes to **`research/` only**. Discovery does not write `requirements/`,
  `specs/`, or `design/`. Promotion beyond research follows the normal lifecycle
  (Definition → Design → Develop), preserving write-scope and traceability.
- Never fabricate detail the capture doesn't contain; if a note is too thin to place,
  leave it in the inbox and flag it.
