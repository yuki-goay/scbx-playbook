[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# 4.2–4.10 Step-by-step agent walkthroughs

This page provides the detailed step-by-step instructions for each agent in the pilot workflow, from converting raw requirements through to testing the frontend components.

---

## 4.2 Convert raw requirements into a BRD

### Invoke the BRD Builder agent

Attach the available source material to the chat. This may include:

- `raw-requirements.md`
- a Word document
- a meeting transcript
- a statement of work

Select **BRD Builder** in Copilot Chat and use the following prompt:

```text
Create a Business Requirements Document from the attached <your project> stakeholder context. Identify business objectives, reconcile contradictions between stakeholders, define scope boundaries, and produce a structured BRD.
```

### Review the BRD output

The agent creates the BRD in:

```text
docs/brds/<brd_name.md>
```

Review the draft and confirm:

- Have the relevant stakeholders been identified?
- Have contradictions in the raw requirements been reconciled?
- Are the business objectives quantified where appropriate, based on the use case?
- Are the scope boundaries clear?

### Revise the BRD

If the result does not meet expectations, provide corrections and ask the BRD Builder agent to revise the document.

---

## 4.3 Install packaged agents from a VSIX file

### Step 1: Open the VSIX installation command

Open **Extensions** in VS Code and select **Install from VSIX**.

### Step 2: Select the VSIX file

Choose and install the required VSIX file.

### Step 3: Install the packaged workspace folder

Open the command palette:

```text
Ctrl/Cmd + Shift + P
```

Search for and select:

```text
Install Packaged Workspace Folder
```

### Step 4: Confirm the `.github` folder

Confirm that the `.github` folder has been added to the workspace.

---

## 4.4 Convert the approved BRD into a structured PRD

> **Context reset:** Start a new chat session before invoking the next task agent so that the context for the new phase is clear.

### Invoke the PRD Builder agent

Attach the approved BRD to GitHub Copilot Chat. Select **PRD Builder** and use the following prompt:

```text
Transform this BRD into a Product Requirements Document for <product or increment>.
```

### Review the PRD output

Confirm that the PRD contains:

- [ ] **Product overview:** a one-paragraph description of the product or increment
- [ ] **Architecture decision:** the selected technology stack and supporting rationale
- [ ] **Priority:** each story tagged as P0, P1 or P2
- [ ] **Technical constraints:** the applicable platforms, technologies, security and compliance constraints
- [ ] **MVP boundary:** a clear P0 feature set that forms the MVP
- [ ] **Non-functional requirements:** performance, security and scalability requirements

---

## 4.5 Plan the implementation backlog

> **Context reset:** Start a new chat session before invoking the next task agent.

### Invoke the Jira Backlog Manager agent

Add the following context documents to the chat:

```text
docs/prds/<your-prd>.md
.copilot-tracking/research/<date>/<research_file_name>.md
```

Use the following prompt:

```text
Discover work items from the attached PRD. Plan an Azure DevOps backlog for the <project> project.

Use the research findings and architecture decisions to inform the work-item structure. Plan epics as parent work items and user stories as child work items.

Use the "Epic" work-item type for epics and the "User Story" work-item type for user stories. Also plan priority tags (P0-must-have, P1-should-have, P2-future) and domain tags (billing-agent, technical-agent, general-agent, infrastructure, observability).

Each work item must include acceptance criteria in Given/When/Then format.

Focus on P0 items first. These form the MVP sprint.

Important: Do not create work items in Azure DevOps yet. Only produce the discovery plan so that it can be reviewed first. Tag all MVP stories with "P0-must-have" so that they can be implemented for the initial MVP.
```

Ensure that the plan places items in dependency order:

1. Create all epics.
2. Create issues under their planned parent epics.
3. Create tasks only when explicitly included in the plan, linking each task to its planned parent issue.

---

## 4.6 Create the approved work items

> **Context reset:** Start a new chat session before invoking the next task agent.

### Invoke the Jira Backlog Manager agent

Add the four plan documents from the previous step to the chat context. Use the following prompt:

```text
The discovery plan looks good. Now create all the planned work items in Azure DevOps.

Prefer the Azure DevOps MCP server tools to create the epics and user stories with their tags. If the Azure DevOps MCP server is not available or any MCP tool call fails, fall back to the `az boards` CLI to create work items instead.

Create epics first, then create user stories as child work items linked to their parent epics. Apply the priority and domain tags to each work item.
```

After execution, verify that:

- all planned epics, user stories and work items have been created;
- the acceptance criteria are present in the user stories; and
- each user story is linked to its parent epic.

Create the iteration or sprint. Then use the ADO Backlog Manager agent with the following prompt:

```text
Assign all work items tagged "P0-must-have" to the "MVP - Sprint 1" iteration.
```

The resulting sprint backlog can then be used for sprint planning.

---

## 4.7 Create the technical specification

> **Context reset:** Start a new chat session before invoking the Technical Specifier so that the specification starts from the approved requirements and current project context.

### Invoke the Technical Specifier agent

Provide one of the supported inputs to the agent: a Jira story key, a canonical requirement Markdown file, an approved PRD, or the active requirement file. Include the applicable project context from `.github/contexts/` and identify the `RUN_ID` if the work is continuing an existing lifecycle run.

Select **Technical Specifier** in Copilot Chat and use a prompt such as:

```text
Create an implementation-ready technical specification for <Jira key or requirement file>.
Use the approved project context and preserve traceability to the source requirements.
Record unresolved questions as clarifications; do not make unsupported assumptions.
```

The agent creates its specification artefacts under:

```text
output/<RUN_ID>/specify/
```

### Review the specification

Review `spec.md` and confirm:

- Requirements and acceptance criteria are traceable to the specification IDs.
- Frontend and backend behaviour, contracts, validation, and error handling are covered where applicable.
- Design evidence and any pending manual uploads are clearly identified for frontend work.
- Clarifications are resolved or explicitly listed for follow-up; no unanswered decision is treated as an implementation assumption.
- Required specification artefacts and source references are present.

Complete the required **Compliance Reviewer** specification review and address its findings before planning. Then review the agent's `NEXT_STEP` status and start the next stage manually.

---

## 4.8 Plan the implementation

> **Context reset:** Start a new chat session before invoking the Implementation Planner. Begin planning only after the specification has been reviewed and its clarifications have been resolved.

### Invoke the Implementation Planner agent

Provide the same `RUN_ID` and the specification artefacts in `output/<RUN_ID>/specify/`. Ensure the applicable project context files in `.github/contexts/` are available to the agent.

Select **Implementation Planner** in Copilot Chat and use a prompt such as:

```text
Create the implementation plan and task breakdown for RUN_ID=<RUN_ID>.
Use the reviewed specification, preserve requirement traceability, and define dependencies,
verification, and unit-test work for each implementation task. Do not implement the tasks.
```

The agent creates planning artefacts under:

```text
output/<RUN_ID>/plan/
```

### Review the plan

Review `plan.md` and `tasks.md`, including the contracts, test scenarios, and frontend component inventory where applicable. Confirm that:

- Every in-scope specification item maps to implementation tasks and verification evidence.
- Dependencies are explicit, and frontend work does not precede required backend contract verification.
- Unit tests are planned alongside implementation, with functional test scenarios identified separately.
- Clarifications are resolved, and design-evidence gates are met before dependent tasks proceed.
- `tasks.md` includes the required pre-submit checks.

Complete the required **Compliance Reviewer** plan review and address its findings before implementation. Then review the agent's `NEXT_STEP` status and start the next stage manually.

---

## 4.9 Implement the approved plan

> **Context reset:** Start a new chat session before invoking the Implementation Builder. Use only the reviewed and approved plan and task set.

### Invoke the Implementation Builder agent

Provide the same `RUN_ID`, the approved `output/<RUN_ID>/plan/tasks.md`, and the associated specification and project context. Include `output/<RUN_ID>/plan/frontend/components.md` when the plan contains frontend work.

Select **Implementation Builder** in Copilot Chat and use a prompt such as:

```text
Implement the approved tasks for RUN_ID=<RUN_ID> from output/<RUN_ID>/plan/tasks.md.
Follow the approved specification and project standards, create unit tests with the implementation,
and record implementation and verification evidence. Do not start later-stage testing agents.
```

The agent creates implementation artefacts under:

```text
output/<RUN_ID>/implement/
```

### Review the implementation

Confirm that:

- Only approved tasks were implemented, and task-to-specification traceability is retained.
- Frontend and backend work are both complete where required, including related unit tests.
- Focused checks pass, and implementation evidence records the commands and results.
- Design fidelity, security, privacy, and other applicable controls have been addressed.
- No unresolved blocker or unapproved gap is represented as complete.

After human review, start the **API Tester** manually as the next stage, using the same `RUN_ID` and the approved API contract artefacts.

---

## 4.10 Test the backend APIs

> **Context reset:** Start a new chat session before invoking the API Tester. Start only after the implementation evidence has been reviewed and the backend is available in an authorised test environment.

### Invoke the API Tester agent

Provide the same `RUN_ID` and the approved specification:

```text
output/<RUN_ID>/specify/spec.md
```

The API Tester reads `API In Scope` and the API behaviour from `spec.md`.

When `API In Scope: NO`, the agent creates an N/A report and does not generate tests, launch a browser, or call an endpoint.

When `API In Scope: YES`, make `.github/contexts/backend-context.md`, the implementation evidence, and the API test environment available. The planned `backend-apis.json` contract is optional supplemental detail when present.

Provide `API_BASE_URL` when it cannot be derived from the project context. Keep credentials in named environment variables; do not paste secrets into chat.

Select **API Tester** in Copilot Chat and use a prompt such as:

```text
Read output/<RUN_ID>/specify/spec.md and determine API scope.
If API In Scope is NO, record the API testing activity as NOT_APPLICABLE.
If API In Scope is YES, test every API specified in spec.md using RUN_ID=<RUN_ID>
and API_BASE_URL=<authorized-test-url> when needed.
Generate and execute the Playwright API suite, preserve evidence, and report failures,
contract drift, coverage gaps, and blockers. Do not modify application code to make tests pass.
```

The agent writes tests under the backend project's `test/api/` directory and run evidence under a new attempt directory:

```text
output/<RUN_ID>/api-tests/attempt-<n>/
```

### Review the API test results

Confirm that:

- When `API In Scope: YES`, every API in `spec.md` is reported as tested, blocked, or skipped with a reason. Every entry in the optional `backend-apis.json` is also reconciled when that file is present.
- When `API In Scope: NO`, the report is `NOT_APPLICABLE`, records the specification evidence, and contains zero APIs, controllers, and cases.
- Test cases cover applicable success, validation, authorisation, error, and boundary behaviour from the contract and implementation.
- Contract drift, failures, skipped cases, and blockers are explicit, and test counts reconcile with the JUnit results.
- Testing used an authorised non-production environment and synthetic data, with secrets and sensitive data redacted from the evidence.
- The attempt artefacts are complete, and no prior attempt was overwritten.

If `spec.md` is missing, does not explicitly declare API scope, or does not provide enough information to identify in-scope APIs and expected behaviour, the API Tester must report `BLOCKED` rather than substituting endpoints.

After human review, start **Functional Automation Test** manually with the same `RUN_ID`.

---

## 4.11 Test the frontend components

> **Context reset:** Start a new chat session before invoking Functional Automation Test. Use the same `RUN_ID` after the implementation review. API test results should also be reviewed before proceeding when the increment includes backend APIs.

### Invoke the Functional Automation Test agent

Provide the same `RUN_ID` and the approved specification:

```text
output/<RUN_ID>/specify/spec.md
```

The Functional Automation Test agent reads `UI In Scope` and the expected UI behaviour from `spec.md`.

When `UI In Scope: NO` and design evidence is not required, the agent creates an N/A report and does not launch a browser or execute tests.

When `UI In Scope: YES`, make the plan, implementation evidence, relevant context, and running authorised application available. The planned `components.md` inventory is optional supplemental detail when present.

Provide `APP_URL` when it cannot be derived from the project configuration. Keep credentials in named environment variables; do not paste secrets into chat.

Select **Functional Automation Test** in Copilot Chat and use a prompt such as:

```text
Read output/<RUN_ID>/specify/spec.md and determine UI scope.
If UI In Scope is NO and DESIGN_EVIDENCE_STATUS is NOT_REQUIRED, record the
functional testing activity as NOT_APPLICABLE.
If UI In Scope is YES, test every specified UI behavior using RUN_ID=<RUN_ID>
and APP_URL=<authorized-test-url> when needed.
Generate and execute reproducible Playwright tests, preserve evidence, and report coverage,
failures, and blockers. Use the implemented behavior and approved requirements as evidence;
do not modify application behavior to make tests pass.
```

The agent writes run evidence under a new attempt directory:

```text
output/<RUN_ID>/functional-tests/attempt-<n>/
```

### Review the functional test results

Confirm that:

- When `UI In Scope: YES`, every specified UI behaviour in `spec.md` is reported as tested, blocked, or skipped with a reason. Every entry in the optional `components.md` is also reconciled when that file is present.
- When `UI In Scope: NO`, the report is `NOT_APPLICABLE`, records the specification evidence, and contains zero components and cases.
- Test cases trace to specified UI behaviour, component IDs when available, planned scenarios, and acceptance evidence.
- Results and case counts reconcile with the JUnit output, and unavailable components or test gaps are explicit.
- Tests use an authorised environment and synthetic data; sensitive information is absent from reports and captured artefacts.
- The attempt artefacts are complete, and no prior attempt was overwritten.

If `spec.md` is missing, does not explicitly declare UI scope, or does not provide enough information to identify in-scope UI behaviour, Functional Automation Test must report `BLOCKED` rather than substituting screens or features.

After human review, start **Quality Tester** manually with the same `RUN_ID`.
