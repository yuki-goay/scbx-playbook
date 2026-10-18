[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# Best practices for Agentic PDLC

| **SECTION SUMMARY** | *Use focused context, bounded work, appropriate models, controlled tools and objective validation to improve the quality, efficiency and safety of agent-enabled delivery.* |
|----|----|

Reliable Agentic PDLC depends on more than writing a good prompt. The squad must give the agent an appropriate task, approved context, clear boundaries, sufficient tools and an explicit definition of success. The output must then be validated through tests, evaluations and human review before it is accepted.

The aim is not to provide the agent with the largest possible prompt or the most capable model. The aim is to provide the **minimum sufficient context and capability required to complete a bounded task reliably**.

## Core do's and don'ts

| **Area** | **Do** | **Don't** |
|----|----|----|
| **Problem definition** | Define the problem, intended outcome and bounded unit of work before invoking an agent. | Ask an agent to solve an unclear problem or determine the product outcome without accountable human direction. |
| **Context** | Provide current, approved and relevant requirements, architecture, standards, decisions and source files. | Load every available document into the session or assume that more context always improves quality. |
| **Source of truth** | Identify which requirements, specifications, designs, code and standards are authoritative. | Provide multiple conflicting versions without stating which source takes precedence. |
| **Task scope** | Give the agent one clear objective with a defined completion or stopping condition. | Combine discovery, design, implementation, testing and approval into one open-ended request. |
| **Prompt design** | State the objective, inputs, constraints, expected output and acceptance criteria explicitly. | Use vague requests such as "build this", "fix this" or "make this better". |
| **Clarification** | Require the agent to record missing information, conflicts and unresolved decisions. | Allow the agent to silently fill material gaps with unsupported assumptions. |
| **Examples** | Provide relevant examples, established patterns, schemas or tests where they clarify the desired result. | Add examples that are obsolete, contradictory or unrelated to the task. |
| **Task decomposition** | Separate complex work into focused lifecycle stages such as specify, plan, implement and validate. | Ask one session to perform a large change end to end without intermediate review points. |
| **Model selection** | Match model capability and reasoning depth to the complexity of the task. | Default to the most capable or expensive model for every activity. |
| **Token efficiency** | Remove duplicated, obsolete and irrelevant context while retaining the information needed for safe execution. | Minimise prompt length at the expense of grounding, constraints or quality. |
| **Conversation history** | Start a clean session when moving to a materially different lifecycle activity where the workflow requires a context reset. | Allow outdated instructions, failed approaches and unrelated conversation history to accumulate indefinitely. |
| **Tool access** | Give the agent only the approved tools and permissions required for the task. | Provide broad tool, write or production access because it may be useful later. |
| **Implementation** | Require work to follow the approved specification, architecture, standards and task scope. | Permit the agent to expand scope, change architecture or introduce dependencies without approval. |
| **Validation** | Apply tests, linters, security scans, build checks, evaluations and human review. | Accept an output because it appears plausible, complete or confidently written. |
| **Approval** | Keep material product, architecture, security, quality and release decisions with accountable people. | Allow the agent that generated an output to be its sole reviewer or approver. |
| **Feedback** | Capture recurring failures and improve shared context, instructions, evaluations or workflows. | Correct the same issue manually in every session without addressing the underlying cause. |

---

## B.1 Start with a bounded task

Agents perform better when the work has a clear scope, relevant inputs and an observable end state. Before invoking an agent, define:

- The problem or activity to be completed
- The bounded increment or task
- The approved inputs
- The artefact or change to be produced
- The constraints the agent must respect
- The checks that determine whether the work is acceptable
- The point at which the agent must stop or return control to a person

Complex work should be divided into focused stages. For example:

`research or clarify → specify → plan → implement → validate`

This separation reduces scope drift and creates review points before issues propagate into later stages.

### Do

```text
Review the approved specification and create an implementation plan.

Include:
- In-scope components
- Dependencies
- Implementation tasks
- Unit-test work
- Verification steps
- Known blockers

Do not implement the plan or change the approved architecture.
Record unresolved questions separately.
```

### Don't

```text
Review everything and build the solution.
```

The second prompt leaves the scope, inputs, output, constraints and stopping condition open to interpretation.

---

## B.2 Use a consistent prompt structure

A high-quality prompt should make six elements explicit:

| **Prompt element** | **What to include** |
|----|----|
| **Objective** | The specific outcome the agent must achieve |
| **Approved inputs** | The files, requirements, context or evidence the agent must use |
| **Scope** | What is included and excluded |
| **Constraints** | Standards, architecture, security rules and prohibited actions |
| **Expected output** | The required artefact, format, location and level of detail |
| **Acceptance and stop conditions** | How completion will be evaluated and when the agent must stop or report `BLOCKED` |

A reusable prompt pattern is:

```text
Objective:
<Describe the single bounded task.>

Approved inputs:
- <Approved specification or requirement>
- <Applicable project context>
- <Relevant source files>

Scope:
- Include: <In-scope work>
- Exclude: <Out-of-scope work>

Constraints:
- Follow <applicable standards and architecture>.
- Do not introduce unapproved dependencies.
- Do not change scope or architecture.
- Do not make unsupported assumptions.
- Record missing or conflicting information as clarifications.

Expected output:
- <Required artefact or implementation>
- <Required evidence and traceability>
- <Required output format or location>

Acceptance criteria:
- <Objective checks>
- <Required tests or evaluations>
- <Required review evidence>

Stop conditions:
Report BLOCKED and stop if:
- Required inputs are missing.
- Authoritative sources conflict.
- A material decision has no accountable owner.
- The task requires access or permissions that have not been approved.
```

---

## B.3 Ground the agent in authoritative context

The agent should know:

- Which source is authoritative
- Which version applies
- Which material is supporting information only
- What to do when sources conflict
- What information may not be used
- Which requirements and decisions require traceability

For source-grounded work, instruct the agent to:

1. Base the output on approved sources.
2. Preserve traceability to the source requirement, decision or evidence.
3. Distinguish supported information from assumptions.
4. Report missing or conflicting information.
5. Avoid filling project-specific gaps from general model knowledge.

A grounding instruction can be added to prompts:

```text
Use only the approved sources listed below for project-specific information.
Preserve traceability to the applicable requirement or source reference.

If the sources do not support a conclusion, record the item as unresolved.
When sources conflict, report the conflict and do not select a value without human direction.
```

---

## B.4 Provide the right context, not all available context

More context does not automatically produce a better result. Irrelevant documents, duplicated requirements, long chat histories and unnecessary tool descriptions can make important information harder for the agent to apply.

For each lifecycle activity:

- Include only the requirements and context relevant to the current task.
- Prefer approved and current sources.
- Remove obsolete drafts and duplicated copies.
- Separate reference material from binding instructions.
- Keep important constraints and acceptance criteria explicit.
- Use task-specific or path-specific context where different parts of the project follow different rules.
- Start a new session when accumulated history no longer supports the current task.

### Context hierarchy

Where appropriate, organise context in layers:

1. **Enterprise context** — Security, privacy, Responsible AI, architecture and engineering policies
2. **Domain context** — Business glossary, domain rules, products, services and regulatory obligations
3. **Project context** — Requirements, decisions, architecture, journeys, interfaces, dependencies and approved designs
4. **Task context** — The specific story, specification, source files, constraints and acceptance criteria required for the activity

The objective is **high-signal context**, not maximum context.

---

## B.5 Keep persistent instructions concise and specific

Persistent instructions should contain stable requirements that apply repeatedly, such as:

- Repository structure
- Build and test commands
- Coding standards
- Required security checks
- Approved frameworks
- Naming and documentation conventions
- Prohibited files or actions
- Pull-request expectations

Avoid using persistent instructions for:

- Temporary task information
- One-off requirements
- Long background narratives
- Material already held in an authoritative project artefact
- Instructions that apply only to a single task

Review persistent instructions periodically and remove material that is obsolete, duplicated or no longer relevant.

---

## B.6 Match the model to the task

Model selection should be based on task fit rather than automatically using the most capable model available.

| **Work type** | **Model approach** |
|----|----|
| Architecture, system design, complex debugging or unfamiliar problems | Use an approved model suited to deeper reasoning. |
| Implementation from an approved specification and plan | Use a capable execution-oriented model. |
| Routine refactoring, formatting, documentation or other well-bounded work | Use a lighter approved model where it meets the required quality. |
| Image, diagram or multimodal analysis | Use a model designed for the required input type. |
| Large-source synthesis | Confirm that the model supports the required context and consider retrieval or staged processing where appropriate. |
| Uncertain model choice | Use approved automatic model selection where available, then evaluate the result against task-specific criteria. |

### Model-selection do's

- Evaluate models against representative project tasks.
- Compare models using the same inputs and acceptance criteria.
- Consider the reasoning, context and modality required by the task.
- Consider applicable security, data and deployment requirements.
- Record material model changes within governed workflows.
- Re-evaluate the workflow where a model change could materially affect output quality.

### Model-selection don'ts

- Do not assume that a newer or larger model is automatically better.
- Do not use deeper reasoning for routine work where it provides no material benefit.
- Do not compare models using materially different context or instructions.
- Do not allow personal model preference to replace task-specific evaluation.

---

## B.7 Optimise token usage without weakening the task

Token efficiency should result from good workflow and context design rather than simply making prompts shorter.

### Reduce avoidable token use by:

- Removing duplicated requirements and repeated background explanations
- Referencing governed context instead of repeatedly pasting the same material
- Removing obsolete or irrelevant material
- Using structured inputs instead of long narrative descriptions where appropriate
- Starting new sessions at appropriate lifecycle boundaries
- Requesting the output required for the task instead of lengthy explanations by default
- Restricting tool lists to the tools required for the activity
- Reusing stable prompt templates for recurring activities
- Making targeted corrections instead of regenerating an entire artefact unnecessarily
- Preserving approved artefacts between stages rather than asking the agent to reconstruct them

### Do not reduce tokens by:

- Omitting security, architecture or acceptance constraints
- Removing examples that materially define expected behaviour
- Replacing authoritative source material with an unverified summary
- Asking the agent to infer context that should be explicit
- Suppressing evidence required for review, traceability or audit

> **Reduce noise and repeated work, not essential context or control evidence.**

---

## B.8 Use examples and structured outputs selectively

Examples can help when the expected format, pattern or behaviour might otherwise be ambiguous.

Useful examples may include:

- An approved user story
- A compliant API contract
- An existing architecture decision record
- A representative unit test
- A valid output schema
- A coding pattern already used in the repository
- A completed traceability entry

Examples should be:

- Current
- Relevant to the task
- Consistent with approved standards
- Clearly labelled as examples rather than requirements
- Free of inappropriate or sensitive data

Where downstream activities depend on a structured output, define the format explicitly:

```text
Return the result using the following headings:

1. Summary
2. Source requirements
3. Proposed change
4. Files affected
5. Tests required
6. Risks and constraints
7. Clarifications
8. Status: READY | BLOCKED
```

---

## B.9 Restrict tools and permissions

Give agents only the tools and permissions required for the approved task.

| **Agent activity** | **Example boundary** |
|----|----|
| Requirements analysis | Read approved requirements and context; no repository write access |
| Planning | Read specifications and repository structure; write planning artefacts only |
| Implementation | Read the approved plan and repository; make changes within the approved task scope |
| Review | Read code and evidence; no authority to approve or merge its own output |
| Testing | Access authorised non-production environments and approved test data |
| Deployment preparation | Prepare and validate release artefacts; retain required human approval for production promotion |

Apply the following principles:

- Use least privilege.
- Separate read, write, merge and deploy authority.
- Keep credentials and secrets out of prompts and chat history.
- Use approved credential mechanisms.
- Require human approval for consequential or irreversible actions.
- Retain evidence of material actions where required.
- Stop when required access is unavailable rather than seeking an unauthorised workaround.

---

## B.10 Define stop and escalation conditions

Agents should not continue indefinitely when success is unlikely or when accountable human judgement is required.

Require the agent to stop and report `BLOCKED` when:

- A required source or artefact is missing.
- Authoritative sources conflict and no priority has been defined.
- The task would exceed the approved scope.
- A material architecture, product, security or data decision is unresolved.
- Required access or tools are unavailable.
- An unapproved dependency would need to be introduced.
- Tests or evaluations repeatedly fail.
- The output cannot meet the defined acceptance criteria.
- Sensitive information cannot be handled within the approved controls.
- A consequential action requires human approval.

A clear stopping condition prevents the agent from continuing to explore, make assumptions or expand its scope in an attempt to complete an otherwise blocked task.

---

## B.11 Validate outputs with deterministic controls

Agent output should not be treated as evidence of correctness. Wherever an objective check is available, use it.

| **Output type** | **Examples of validation** |
|----|----|
| Requirements | Required sections, stable IDs, traceability, identified assumptions and human approval |
| Specification | Requirement coverage, contract completeness, unresolved clarifications and architecture review |
| Code | Compilation, unit tests, linting, static analysis, dependency checks and secret scans |
| API implementation | Contract tests, authentication and authorisation tests, error handling and boundary tests |
| User interface | Functional tests, accessibility checks and design review |
| Infrastructure | Syntax validation, plan or preview output, policy checks and drift checks |
| Release | Build integrity, quality gates, environment validation and rollback readiness |
| Agent output | Groundedness, relevance, completeness, consistency and task-specific evaluations |

Deterministic checks complement rather than replace human judgement.

The agent that generated a material output should not be its sole approver.

---

## B.12 Evaluate the workflow, not only the final answer

A correct-looking result can still come from an unreliable execution path. Evaluation should therefore cover both the result and how the agent reached it.

### Outcome quality

- Was the required task completed?
- Does the output satisfy the acceptance criteria?
- Is the output grounded in approved sources?
- Is the result complete and internally consistent?

### Execution quality

- Did the agent use the correct inputs?
- Did the agent remain within the approved scope?
- Were the appropriate tools used?
- Were prohibited actions avoided?
- Were required approvals and checkpoints respected?
- Were assumptions and uncertainty surfaced?
- Was traceability retained?
- Did the agent stop appropriately when blocked?

### Operational quality

- How many attempts were required?
- Where did human intervention occur?
- What context or instruction gaps caused rework?
- Which checks identified issues?
- Was unnecessary context or tool use observed?
- Did model or workflow changes affect the result?

Use representative evaluation cases rather than relying only on demonstrations where the expected output is already known to work.

---

## B.13 Keep source content separate from agent instructions

Documents, websites, tickets, code comments and other retrieved content should be treated as information provided to the agent, not as instructions governing the workflow.

Where appropriate, separate:

1. **Agent instructions**
2. **Approved context**
3. **The task**
4. **Expected output and acceptance criteria**

The agent should:

- Follow the approved workflow instructions.
- Treat retrieved source material as context.
- Avoid exposing credentials or sensitive information.
- Avoid bypassing security, policy or approval controls.
- Use approved sources for project-specific information.
- Surface conflicting or suspicious instructions for human review.

---

## B.14 Build a continuous feedback loop

When intervention or rework is required, identify the cause rather than correcting only the immediate output.

| **Observed issue** | **Potential improvement** |
|----|----|
| Repeated missing project information | Improve the project context package or source-of-truth definition |
| Agent repeatedly violates repository patterns | Improve repository or path-specific instructions |
| Plans omit a recurring dependency | Update the planning template or evaluation checklist |
| Generated code repeatedly fails the same check | Add the check earlier or strengthen the implementation instruction |
| Reviews repeatedly detect the same issue | Convert the expectation into a deterministic check where practical |
| Excessive exploration or token use | Reduce scope, context or available tools |
| Different users receive inconsistent results | Create a reusable prompt, agent or governed workflow |
| A model performs poorly on a particular activity | Reassess model-task fit using representative evaluation cases |

Where the issue is repeatable, improve the relevant reusable asset:

- Project or domain context
- Repository instructions
- Agent contract
- Reusable prompt
- Agent workflow
- Test or evaluation case
- Standard or review checklist

The goal is for each delivery cycle to improve the system used by the next cycle.

---

## B.15 Pre-flight checklist

Before starting an agent-enabled activity, confirm the following.

### Task

- [ ] The activity and bounded objective are clear.
- [ ] The expected output is defined.
- [ ] In-scope and out-of-scope work are explicit.
- [ ] Acceptance and stop conditions are defined.

### Context

- [ ] Approved and current sources are identified.
- [ ] The source of truth and applicable version are known.
- [ ] Material conflicts are resolved or recorded.
- [ ] Only relevant context is included.
- [ ] Sensitive information is handled appropriately.

### Agent and model

- [ ] The correct approved agent or workflow is selected.
- [ ] The model is appropriate for the task.
- [ ] The required tools are available.
- [ ] Tool permissions follow least privilege.
- [ ] A clean session is used where the workflow requires a context reset.

### Controls

- [ ] Required tests and evaluations are defined.
- [ ] The accountable human reviewer is known.
- [ ] Escalation and hand-back routes are clear.
- [ ] Evidence and traceability requirements are understood.
- [ ] The agent cannot self-approve a material output.

---

## B.16 Simple operating rule

> **Provide the right context, assign a bounded task, define the expected result and stopping conditions, and validate the output before accepting it. When the same failure occurs repeatedly, improve the shared context or workflow rather than relying on users to work around it.**
