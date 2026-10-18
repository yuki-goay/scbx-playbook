[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# The AI PDLC Lifecycle

The AI PDLC lifecycle connects the agents used from business requirements through deployment to Azure. Each step produces or develops an artefact that becomes an input to subsequent activities, with human approval of generated artefacts across the PDLC lifecycle.

| Step | Agent / capability | Activity / output |
|----|----|----|
| 1. Context Builder | `context-builder` | Use `context-builder` to capture context from Confluence to contextualise agents. |
| 2. Business Requirements | `brd-builder` | Use `brd-builder` for business requirements creation. |
| 3. Product Requirements | `prd-builder` | Use `prd-builder` to create the PRD from discoveries. |
| 4. Architecture | `adr-creation` and `arch-diagram-builder` | Use `adr-creation` for key decisions and `arch-diagram-builder` for diagrams. |
| 5. Backlog Manager | `backlog-manager` | Use `backlog-manager` to create the user stories backlog. |
| 6. Spec, Clarify | Spec and clarification | The specification becomes the source for implementation and is built using the project or domain knowledge in Context/Constitution. Clarify ambiguities and unknowns in the story with the BA. |
| 7. Plan and Task | `task-planner` | Plan and create implementation tasks using Context/Constitution. |
| 8. Implementation and Unit Test | `task-implementor` | Use `task-implementor` to execute plans with validation. |
| 9. Deploy | Azure deployment pipeline | Use the `azure-prepare` → `azure-validate` → `azure-deploy` pipeline. |

## Lifecycle flow

`Context Builder → BRD Builder` → `PRD Builder` → `ADR Creation` → `Backlog Manager` → `Spec, Clarify Agent` → `Task Planner` → `Task Implementor & Unit Test` → `Azure Deploy`

The lifecycle progressively moves from **context builder**, to **product requirements and architecture decisions**, through **backlog creation, specification, implementation planning, implementation, review and validation**, and finally **deployment to Azure**.

Human-in-the-loop approval remains part of the lifecycle. Generated artefacts are reviewed and approved at defined points before work progresses to subsequent stages. This allows agents to support and execute work across the lifecycle while people retain approval over key outputs and progression.
