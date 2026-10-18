[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# 3.2 Greenfield development

| **SECTION SUMMARY** | *Greenfield lifecycle* |
|---------------------|------------------------|

Use the greenfield path when the target product, service, journey or application is being created as a new solution. The visual shows the fullest lifecycle because both the product and technical solution must be shaped. Work begins by bounding the increment and clarifying the opportunity and intended outcome. The squad then assembles context, defines business and product requirements, designs the experience and architecture, creates the backlog and specification, plans and builds the change, validates it and releases it through approved gates. Production learning feeds the next cycle.

| **Lifecycle step** | **What the squad does** |
|----|----|
| 0\. Mobilise and assess | Bound the increment, name owners, confirm access, controls and baseline. |
| 1\. Discover and frame | Clarify the opportunity, user need, desired outcome and constraints. |
| 2\. Contextualise | Assemble approved domain, product, design, policy and technical context. |
| 3\. Define requirements | Create and approve business and product requirements. |
| 4\. Design experience and architecture | Define user experience, target solution, boundaries and architectural decisions. |
| 5\. Create backlog and specification | Create epics and stories and convert approved context into an executable specification. |
| 6\. Plan and decompose | Define the solution plan, tasks and dependencies. |
| 7\. Build | Implement code and unit tests against approved tasks. |
| 8\. Validate | Complete code review, functional and non-functional testing and control checks. |
| 9\. Release | Prepare the release, pass readiness gates and deploy with approval. |
| 10\. Operate and improve | Monitor production, learn and feed improvements into context and backlog. |

## Tailoring to Lifecycle Phase

| Lifecycle phase | Greenfield |
|----|----|
| **Mobilise and Assess** | Select an appropriate project and bounded delivery increment before activating agents. |
| **Discover and Frame** | **Mandatory for net-new products and journeys.** Define the customer or employee problem, personas, desired outcomes, journey, value hypothesis, business constraints and policy or regulatory requirements. |
| **Contextualise** | Establish the approved enterprise, domain, project and engineering context required by the agents. |
| **Define Requirements** | Use approved discovery outputs to develop the BRD and PRD, followed by business, product and architecture approval. |
| **Design Experience and Architecture** | Emphasise journey and interaction design, design-system compliance, target architecture, API and event contracts, data design, security and observability by design. |
| **Create Backlog and Specification** | Transform approved requirements and designs into implementable and traceable work. |
| **Plan and Decompose** | Create a dependency-aware implementation plan for the approved specification. |
| **Build** | Implement the bounded increment against the approved plan and specification. |
| **Validate** | Demonstrate that the increment meets approved business, technical, security and operational requirements. |
| **Release** | Prepare and authorise a controlled release. |
| **Operate and Improve** | Monitor operational outcomes and continuously improve the product, context packages and agent chain. |

---

## Agents for Greenfield Delivery

The agent chain supports the lifecycle from establishing context and requirements through planning, implementation, testing and deployment. Greenfield typically begins by establishing context and developing business and product requirements before progressing into backlog, specification, planning, implementation, testing and deployment.

| Lifecycle group | Agent | Purpose | Type |
|----|----|----|----|
| Requirements and discovery | Context Builder | Ingest reference material to form context. | Custom |
| Requirements and discovery | BRD-Builder | Drafts the BRD from discovery notes and Excel requirements. | Core |
| Requirements and discovery | PRD-Builder | Converts the approved BRD into a product requirements document. | Core |
| Design, backlog and spec | Jira Backlog Manager | Splits epics into Jira user stories and maintains the backlog. | Core |
| Design, backlog and spec | Spec-Clarify | Builds the specification from context and resolves gaps with the BA. | Core |
| Plan and build | Task-Planner | Breaks the specification into tasks using project context. | Core |
| Plan and build | Task-Implementor | Writes code and unit tests against the plan, with validation. | Core |
| Quality and release | Code Review | Reviews generated code and pull requests before merge. | Core |
| Quality and release | API Testing | Generates and runs API tests from approved specifications. | Custom |
| Quality and release | Functional Testing | Turns requirements into Playwright scripts and test evidence. | Custom |
| Quality and release | Azure-Deploy | Prepares, validates and deploys releases to Azure. | Core |

---

## Execution rules

The same governed Agentic PDLC applies across project types. The greenfield path should be read as a specific entry point and emphasis within the one lifecycle, not a separate delivery method. Every increment still needs approved context, a clear specification, controlled execution, testing, human decisions and release evidence. For greenfield delivery, both the product and technical solution must be shaped from the beginning, making discovery, requirements definition and design experience all mandatory lifecycle phases.
