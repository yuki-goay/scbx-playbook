[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# 3.4 Modernisation and upgrade

| **SECTION SUMMARY** | *Modernisation path and lifecycle tailoring* |
|---------------------|----------------------------------------------|

Modernisation begins with the existing estate but aims to change its technical shape. The visual therefore combines brownfield understanding with a new target-state design. The squad documents current behaviour and dependencies, defines the target architecture and migration approach, divides the change into bounded increments and validates both functional equivalence and the intended technical improvement. Compatibility, rollback and operational readiness are central because the change affects the platform or architecture on which existing behaviour depends.

## Lifecycle tailoring — Modernisation

| Lifecycle phase | Modernisation |
|----|----|
| **Mobilise and Assess** | Select the bounded modernisation increment and assess the existing application and environment. |
| **Discover and Frame** | Apply where the underlying problem or desired outcome requires reframing before modernisation proceeds. |
| **Contextualise** | Establish the approved current-state context needed to understand the application, architecture, dependencies and engineering environment. |
| **Define Requirements** | Analyse the source, obtain SME verification, then develop the BRD and PRD and obtain architecture approval. |
| **Design Experience and Architecture** | Emphasise current-to-target mapping, coexistence strategy, data migration, strangler or phased replacement patterns, decommissioning, rollback and feature-control strategy. |
| **Create Backlog and Specification** | Create the backlog and specification required to deliver the approved modernisation approach. |
| **Plan and Decompose** | Plan implementation or migration waves, dependencies, testing, environments, review checkpoints and rollback steps. |
| **Build** | Implement the approved modernisation or migration increment within the defined scope. |
| **Validate** | Validate the modernised solution against the approved requirements and target state. |
| **Release** | Prepare and authorise the modernised increment for controlled release, including the required rollback approach. |
| **Operate and Improve** | Monitor the modernised environment and use operational learning to improve the product, context and subsequent modernisation increments. |

---

## Agents — Modernisation

Modernisation uses the same agent capability set as Brownfield, but the starting point depends on the approved artefacts and context already available. BRD-Builder, PRD-Builder and Jira Backlog Manager are optional because existing approved requirements or backlog artefacts may already be available and suitable for reuse.

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

The same governed Agentic PDLC applies across project types. The modernisation path should be read as a specific entry point and emphasis within the one lifecycle, not a separate delivery method. Every increment still needs approved context, a clear specification, controlled execution, testing, human decisions and release evidence. For modernisation delivery, a particular emphasis is placed on current-state understanding, target-state architecture definition, phased migration planning and validated rollback capability.
