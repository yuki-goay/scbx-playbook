[← Back to playbook](../playbook%20md/SCBx_Agentic_PDLC_Playbook.md)

---

# Agent Catalogue

## How to use the catalogue

The agent catalogue translates the lifecycle into usable delivery components. Each entry explains the activity an agent supports, the context it requires, the output it creates and the human role that reviews or accepts that output. The catalogue should be used after the squad has classified the increment and tailored the lifecycle, so the selected agents correspond to actual delivery needs rather than being added because they are available.

Catalogue entries should be read as operating contracts. Purpose and use conditions explain when the agent is relevant. Approved inputs define the information it may rely on. Outputs describe what the agent produces, not what is automatically accepted. Human review identifies the accountable role and the decision that remains with people. Limitations and stop conditions explain when the output must be clarified, escalated or rejected.

- **Purpose:** the problem the agent helps solve.
- **Use when:** the lifecycle activity and project conditions for which the agent is relevant.
- **Approved inputs:** the artefacts and context the agent may use.
- **Outputs:** the artefacts or evidence the agent produces.
- **Human review:** the role that checks the output and the decision that remains human.
- **Limitations and stop conditions:** when the output must not be used without further clarification or specialist review.

### Agent overview

| **Agent**              | **Description**                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Context Builder]      | Creates a unified project context from business, technical, compliance, standards, documentation and codebase sources to support downstream agent-enabled delivery.       |
| [BRD Builder]          | Converts business problems, objectives and discovery inputs into a structured and traceable Business Requirements Document for stakeholder review and approval.           |
| [PRD Builder]          | Translates approved business direction into detailed, measurable and testable product requirements for downstream design, engineering and validation.                     |
| [Jira Backlog Manager] | Transforms approved product requirements or epics into a structured delivery backlog of epics, user stories and acceptance criteria.                                      |
| [Spec-Clarify]         | Converts approved requirements, architecture, design and standards into an implementation-ready specification while identifying gaps, conflicts and unresolved questions. |
| [Task-Planner]         | Decomposes the approved specification and solution approach into ordered implementation tasks with explicit dependencies and expected outcomes.                           |
| [Task-Implementor]     | Executes bounded implementation tasks against the approved specification and plan, producing source-code changes and associated unit tests.                               |
| [API Testing]          | Generates and executes API tests against approved interface specifications and acceptance criteria, producing test results and evidence for review.                       |
| [Functional Testing]   | Converts approved requirements, designs and acceptance criteria into repeatable functional tests, executable scripts and test evidence.                                   |
| [Azure-Deploy]         | Prepares deployment artefacts, validates configuration and executes approved Azure deployments after required quality, security and readiness checks.                     |

---

## A.1 Context Builder

The Context Builder creates the project context needed to support downstream agent-enabled delivery. It brings together available reference material, project documentation, source code, configuration and tests, and supplements these with business, stakeholder, compliance and technical context. For greenfield projects, it also prompts for the business overview and technology stack where existing project material is not yet available.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Creating comprehensive project context from scratch; starting a new project or onboarding an existing codebase; or establishing business, technical and standards documentation. | Confluence link where provided; otherwise attached Word or PDF documents; available legacy project documentation; source code, configuration and tests; business, client-domain, stakeholder and compliance information; and, for greenfield projects, technology stack and business overview. | Unified project context with `CTX-*` trace IDs; technology-specific standards based on best practices; and additional user-provided standards preserved and indexed under `.github/contexts/`. | Review the generated context for completeness and accuracy, confirm that the applicable project and standards material has been captured, and resolve material gaps before the context is used by downstream agents. |

---

## A.2 BRD Builder Agent

This section describes how the HVE Core **BRD Builder Agent** can be used within an AI-enabled Product Development Lifecycle to create structured, traceable, and reviewable requirements documents.

### Purpose

The **Business Requirements Document (BRD) Builder Agent** supports the discovery, definition, and governance of business requirements. It helps teams convert an initial business idea, problem statement, or transformation objective into a structured BRD that can be reviewed and approved by business and technology stakeholders.

The BRD Builder should be used to establish **why an initiative is required, what business outcomes it must achieve, who is affected, and what business constraints or dependencies must be considered**.

#### When to Use the BRD Builder

Use the BRD Builder when the team needs to:

- Define the business problem or opportunity.
- Establish business objectives and expected outcomes.
- Identify stakeholders, decision owners, and impacted user groups.
- Document the current-state challenges and target-state aspirations.
- Define business scope and exclusions.
- Capture high-level business requirements.
- Record assumptions, dependencies, constraints, and risks.
- Define measurable business success indicators.
- Establish governance and approval expectations before detailed product design begins.

#### BRD Lifecycle

The BRD Builder follows three main phases:

**Discover**

The agent establishes the business context and problem framing by gathering information about:

- Business drivers and strategic goals
- Current-state challenges
- Stakeholders and decision owners
- Target users or business groups
- Initial scope and exclusions
- Expected business outcomes

**Define**

The agent converts the discovered information into structured and traceable business requirements. This phase typically covers:

- Business requirements
- Business rules and policies
- Success measures
- Assumptions and constraints
- Dependencies
- Business and delivery risks
- Requirement priorities
- Supporting evidence or source references

**Govern**

The agent prepares the BRD for formal review and controlled handoff. This includes:

- Reviewing document completeness
- Identifying unresolved questions
- Confirming requirement ownership
- Recording approval and governance expectations
- Establishing the approved BRD as the baseline for PRD development

#### Typical Inputs

The BRD Builder can use inputs such as:

- Business problem statements
- Transformation objectives
- Workshop notes
- Stakeholder interviews
- Existing process documents
- Policies and standards
- Customer or employee feedback
- Business metrics and key performance indicators
- Existing architecture or programme documentation
- Known assumptions, risks, and dependencies

####  Expected Outputs

A completed BRD should provide:

- Executive summary
- Business context and problem statement
- Business objectives and expected outcomes
- Stakeholder and user-group details
- Current-state challenges
- In-scope and out-of-scope items
- Business requirements
- Business rules
- Success measures
- Assumptions and constraints
- Dependencies and risks
- Governance and approval information
- Traceability to supporting sources where applicable

####  Example SCBx Usage

For the SCBx AI-enabled Product Development Lifecycle, the BRD Builder can be used to define the business need for introducing reusable AI agents across requirements, design, development, testing, security, and release activities.

A suitable prompt is:

```text
Create a BRD for the SCBx AI-enabled Product Development Lifecycle initiative.

Business context:
- Product squads currently use different engineering practices and tools.
- The initiative should introduce reusable AI agents across requirements,
  design, development, testing, security, and release activities.
- Expected outcomes include improved delivery consistency, stronger
  traceability, reduced manual effort, and better governance.

Capture:
- Business problem and drivers
- Current-state challenges
- Stakeholders and decision roles
- In-scope and out-of-scope areas
- Target business outcomes
- Measurable success indicators
- Business requirements
- Assumptions, dependencies, constraints, and risks
- Governance and approval criteria
```

#### Review Guidance

The BRD should be reviewed by relevant business owners, product leadership, architecture, security, governance, and delivery stakeholders before it becomes the approved input to PRD creation.

The BRD should not contain detailed technical implementation decisions unless those decisions represent confirmed business constraints. Its primary focus should remain on the business need, required outcomes, stakeholder expectations, and business boundaries.

---

## A.3 PRD Builder Agent

#### Purpose

The **Product Requirements Document (PRD) Builder Agent** converts an approved business direction into detailed, measurable, and actionable product requirements. It helps product and engineering teams define **what the product or capability must do, how it should behave, which quality attributes it must satisfy, and how completion will be verified**.

The PRD Builder should normally be used after the relevant business objectives, scope, and stakeholder outcomes have been established through an approved BRD or equivalent business baseline.

#### When to Use the PRD Builder

Use the PRD Builder when the team needs to:

- Define product users and personas.
- Describe product capabilities and features.
- Capture functional requirements.
- Define non-functional requirements.
- Establish measurable acceptance criteria.
- Document user journeys and product behaviours.
- Identify data and integration requirements.
- Define security, privacy, compliance, and audit requirements.
- Capture performance, scalability, availability, and resilience expectations.
- Define observability and operational requirements.
- Maintain traceability from business objectives to product requirements.

#### PRD Lifecycle

The PRD Builder follows a structured lifecycle:

**Assess** — The agent reviews the available context and determines whether sufficient information exists to start the PRD.

**Discover** — The agent establishes the product problem, intended users, expected capabilities, scope, and boundaries.

**Create** — The agent creates the initial PRD structure and establishes the working document and session state.

**Build** — The agent progressively gathers and documents:

- Functional requirements
- Non-functional requirements
- User journeys and interactions
- Business rules affecting product behaviour
- Acceptance criteria
- Error and exception scenarios
- Requirement priorities

**Integrate** — The agent incorporates information from approved documents, reference material, existing systems, architecture context, and other relevant sources. Conflicts and unsupported assumptions should be highlighted for human resolution.

**Validate** — The agent reviews the PRD for completeness, clarity, consistency, traceability, and testability. Ambiguous or non-measurable requirements should be refined before finalization.

**Finalize** — The agent prepares the completed PRD for review and handoff to architecture, backlog management, development, testing, security, release, and operational teams.

#### Typical Inputs

The PRD Builder can use inputs such as:

- Approved BRD
- Product vision and roadmap
- User personas
- User research
- Existing process flows
- Architecture constraints
- Regulatory and security requirements
- Source-system and integration details
- Existing backlog items
- Service-level objectives
- Operational and support requirements
- Reference applications or existing codebase context

#### Expected Outputs

A completed PRD should provide:

- Product overview and problem statement
- Product goals and non-goals
- Target users and personas
- Product scope
- Features and capabilities
- Functional requirements
- Non-functional requirements
- User journeys or workflows
- Data and integration requirements
- Roles and access requirements
- Security, privacy, compliance, and audit requirements
- Performance, scalability, availability, and resilience requirements
- Observability and operational requirements
- Error and exception handling
- Measurable acceptance criteria
- Dependencies, assumptions, constraints, and risks
- Traceability to BRD objectives and source evidence

#### Example SCBx Usage

For the SCBx AI-enabled Product Development Lifecycle, the PRD Builder can be used to define an AI-assisted backlog and requirements-management capability.

A suitable prompt is:

```text
Create a PRD for an AI-assisted backlog and requirements-management
capability for the SCBx AI-enabled Product Development Lifecycle.

Target users:
- Product owners
- Business analysts
- Solution architects
- Developers
- Test engineers

Define requirements for:
- Importing an approved BRD
- Generating and refining epics, features, and user stories
- Maintaining traceability from business requirements to backlog items
- Generating measurable acceptance criteria
- Identifying ambiguity, conflicts, and missing information
- Requiring human review before backlog changes are published
- Integrating with the approved engineering toolchain
- Recording source references and change history

Include:
- Functional and non-functional requirements
- Roles and access boundaries
- Data and integration requirements
- Security, privacy, audit, and observability requirements
- Error and exception handling
- Acceptance criteria and validation evidence
```

#### Review Guidance

The PRD should be reviewed by product owners, business analysts, solution architects, engineering leads, security stakeholders, test leads, operations teams, and other relevant decision owners.

Each requirement should be:

- Clear and unambiguous
- Traceable to a business objective or approved need
- Testable through defined acceptance criteria
- Measurable where applicable
- Prioritized
- Supported by an identified owner or source
- Free from unsupported assumptions

The approved PRD becomes a key input to solution architecture, backlog creation, detailed design, development, testing, security validation, deployment, and product operations.

---

### BRD-to-PRD Handoff

The BRD establishes the **business baseline**, while the PRD translates that baseline into **product behaviour and measurable product requirements**.

Before PRD development begins, the BRD should provide clear information about:

- Business problem and opportunity
- Business objectives and outcomes
- Stakeholders and decision owners
- Scope and exclusions
- Business requirements
- Success measures
- Assumptions and constraints
- Dependencies and risks
- Governance and approval status

The PRD should then translate this information into:

- Product users and personas
- Product capabilities and features
- Functional requirements
- Non-functional requirements
- Data and integration requirements
- Security and compliance requirements
- Operational requirements
- Acceptance criteria and validation evidence

### Reference

- [BRD & PRD Builders | HVE Core](https://microsoft.github.io/hve-core/docs/agents/project-planning/brd-prd-builders)

---

## A.4 Jira Backlog Manager

The Jira Backlog Manager turns approved product requirements or epics into a structured delivery backlog. It drafts epics, user stories and acceptance criteria and can help maintain relationships and consistency across backlog items. The Product Owner or Business Analyst retains responsibility for priority, scope, sequencing and acceptance intent.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Use when backlog decomposition or maintenance is required. | Approved PRD, epics, story standards and backlog context. | Draft epics, stories and backlog updates. | Product Owner or Business Analyst reviews priority, scope and acceptance criteria. |

---

## A.5 Spec-Clarify

Spec-Clarify converts approved requirements, architecture, design and standards into an implementation-ready specification. It identifies missing information, conflicting assumptions and unresolved questions before planning or coding begins. The specification becomes the main implementation reference only after the relevant business and technical owners resolve and approve the open points.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Use before planning and implementation for a bounded increment. | Approved requirements, design, architecture, context and standards. | spec.md, acceptance criteria and clarification questions. | FDE coordinates clarification; accountable business and technical roles approve resolved content. |

---
## A.6 Task-Planner

Task-Planner decomposes the approved specification and solution approach into ordered implementation tasks. It makes dependencies, sequencing and expected outcomes explicit so work can be executed in controlled increments. The FDE or engineering lead checks that the plan covers the approved scope and does not introduce unsupported design decisions.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Use after specification and plan approval. | spec.md, plan.md, project context and engineering standards. | tasks.md and dependency sequence. | FDE or engineering lead validates completeness and ordering. |

---

## A.7 Task-Implementor

Task-Implementor executes bounded tasks from the approved specification and plan. It produces source-code changes and unit tests within the supplied repository context, standards and guardrails. The Application Engineer remains accountable for understanding the change, resolving failures and confirming that the pull request is suitable for review.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Use for bounded, approved implementation work. | Approved tasks, codebase, standards, context and test expectations. | Source code and unit tests. | Application Engineer remains accountable for implementation and pull-request quality. |

---

## A.8 API Testing

The API Testing agent creates and executes tests for APIs introduced or changed by the increment. It uses approved interface specifications, acceptance criteria and test standards to produce test assets, results and evidence. The Quality Engineer confirms that coverage is sufficient and decides whether the evidence can be accepted.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Use where the increment exposes or changes APIs. | Approved API specification, acceptance criteria and test standards. | API test assets, results and evidence. | Quality Engineer validates coverage and accepts test evidence. |

---

## A.9 Functional Testing

The Functional Testing agent converts approved product requirements, stories, designs and acceptance criteria into repeatable functional tests. It can prepare test scenarios, cases, data, executable scripts and execution evidence for functional, role-based, negative and boundary conditions. The Quality Engineer reviews coverage and results and retains the quality decision.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Use for functional, role-based, negative and boundary testing in approved environments. | PRD, stories, acceptance criteria, designs, APIs and test standards. | Test strategy, test cases, data, executable scripts and execution evidence. | Quality Engineer reviews coverage, scripts and results and retains the quality decision. |

---

## A.10 Azure-Deploy

Azure-Deploy supports the final delivery sequence by preparing deployment artefacts, validating configuration and executing an approved deployment to Azure. It should be used only after the release candidate has passed the required quality, security and readiness checks. Release approval and production deployment authority remain with the named human roles.

| **Use when** | **Approved inputs** | **Output** | **Human review** |
|----|----|----|----|
| Use only after release readiness and required approvals. | Approved release candidate, environment configuration and deployment controls. | Deployment package, deployed version and logs. | Release and deployment approvals remain with the named human authorities. |

---

*How to make it work? Check out the best practices guide:*
→  [Best practices of Agentic PDLC](../pages/appendix-b-best-practices.md)

