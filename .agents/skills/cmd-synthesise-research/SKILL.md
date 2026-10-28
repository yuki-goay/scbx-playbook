---
name: cmd-synthesise-research
description: Workflow command: Turn raw research inputs into a structured synthesis note under research/ Trigger on "/synthesise-research" or "synthesise-research".
---

> Generated from harnesses/discovery (or base) commands/synthesise-research.md by `scripts/harness`.
> Arguments, if any, follow the invocation in the user message.


Produce a research synthesis note in `product-context/research/`.

1. Read `product-context/INDEX.md` to orient.
2. Gather the raw inputs for the topic ($ARGUMENTS): notes, transcripts, secondary sources.
3. Synthesise into themes/findings, citing each source (file, interview, URL, date). Name
   the method used.
4. Write the note to `product-context/research/<topic>/<slug>.md` — **research/ only**.
5. Record open questions and what the Definition role would need to turn this into a
   requirement. Do **not** write requirements yourself.
6. Commit to the product-context repo (`git -C product-context ...`) with a Conventional
   Commit summarising the synthesis.

$ARGUMENTS
