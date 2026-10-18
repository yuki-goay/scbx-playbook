[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# 3.3 Brownfield enhancement

| **SECTION SUMMARY** | *Brownfield lifecycle* |
|---------------------|------------------------|

Use the brownfield path when the application is retained and the increment changes existing behaviour. The visual starts from the existing estate rather than from a blank page. The first priority is to understand the current code, architecture, interfaces, rules, dependencies, incidents and technical debt that are relevant to the change. Existing requirements, designs or backlog artefacts can be reused when they are current and approved, but the squad must still clarify the change, assess impact, implement safely, test affected behaviour and retain release evidence.

Discovery and requirements definition may be optional when the change is already clearly described and approved. Contextualisation is not optional in practice: the squad must understand the relevant code, architecture, interfaces, rules, dependencies, incidents and technical debt. Any reused artefact must be versioned and linked to the increment.

## Tailoring to Lifecycle Phases

| Lifecycle phase | Brownfield |
|----|----|
| **Mobilise and Assess** | Select the bounded change and assess the existing project, artefacts, environment and readiness. |
| **Discover and Frame** | Use when the enhancement is poorly defined, existing requirements conflict, the user problem is not validated, or a rebuild decision requires reframing. |
| **Contextualise** | Establish the approved context package, including relevant existing requirements, architecture, APIs, dependencies, code and decisions. |
| **Define Requirements** | Start from the existing approved requirement or change request. Clarify requirements and update acceptance criteria. **BRD or PRD regeneration should not occur unless existing artefacts are incomplete or materially outdated.** |
| **Design Experience and Architecture** | Emphasise impact analysis, compatibility, existing architecture constraints, reuse of established components, and interface and regression risk. |
| **Create Backlog and Specification** | Reuse existing approved backlog and specifications where sufficient; clarify or regenerate where the existing material cannot support implementation. |
| **Plan and Decompose** | Create a dependency-aware implementation plan for the approved change. |
| **Build** | Implement the approved change within the defined scope and architecture. |
| **Validate** | Demonstrate that the change meets approved requirements, including relevant integration and regression requirements. |
| **Release** | Prepare and authorise the change for controlled release. |
| **Operate and Improve** | Monitor the changed application, feed production learning back into requirements and tests, and update relevant context. |

---

## Agents for Brownfield Delivery

Brownfield delivery uses the same agent capability set as Modernisation, but the starting point depends on the approved artefacts and context already available. BRD-Builder, PRD-Builder and Jira Backlog Manager are optional because existing approved requirements or backlog artefacts may already be available and suitable for reuse.

| Lifecycle group | Agent | Purpose | Applicability | Type |
|----|----|----|----|----|
| Requirements and discovery | Context Builder | Ingest reference material to form context. | Applicable | Custom |
| Requirements and discovery | BRD-Builder | Drafts the BRD from discovery notes and Excel requirements. | Optional | Core |
| Requirements and discovery | PRD-Builder | Converts the approved BRD into a product requirements document. | Optional | Core |
| Design, backlog and spec | Jira Backlog Manager | Splits epics into Jira user stories and maintains the backlog. | Optional | Core |
| Design, backlog and spec | Spec-Clarify | Builds the specification from context and resolves gaps with the BA. | Applicable | Core |
| Plan and build | Task-Planner | Breaks the specification into tasks using project context. | Applicable | Core |
| Plan and build | Task-Implementor | Writes code and unit tests against the plan, with validation. | Applicable | Core |
| Quality and release | Code Review | Reviews generated code and pull requests before merge. | Applicable | Core |
| Quality and release | API Testing | Generates and runs API tests from approved specifications. | Applicable | Custom |
| Quality and release | Functional Testing | Turns requirements into Playwright scripts and test evidence. | Applicable | Custom |
| Quality and release | Azure-Deploy | Prepares, validates and deploys releases to Azure. | Applicable | Core |

---

## Execution rules

The same governed Agentic PDLC applies across project types. The brownfield path should be read as a specific entry point and emphasis within the one lifecycle, not a separate delivery method. Every increment still needs approved context, a clear specification, controlled execution, testing, human decisions and release evidence. What changes is the amount of discovery and shaping required, the existing artefacts that can be reused and the risks that must be protected against.
