/* ─── Agent data ─────────────────────────────────────────────────────────── */
const AGENT_OVERLAY_DATA = [
  {
    slug: 'research-planner',
    id: 'A.1', group: 'design', icon: 'icons/research-planner.svg',
    name: 'Research Planner',
    tagline: 'Gets the team ready before anyone talks to a user.',
    useWhen: 'Kickoff has produced the vision and objectives; stakeholder interviews or earlier findings have changed what we need to ask; or a gate asks for the plan to be revised.',
    inputs: 'Vision and objectives, stakeholder and expert interview notes, briefs and earlier work.',
    output: 'Assumptions log, research plan, interview guides and screeners.',
    humanReview: 'A person signs off the plan before fieldwork starts.',
    prompt: `@Research Planner Here's the project brief [paste or attach]. We need to understand [project objective]. Plan the research for this — include research questions, participant criteria, and a recommended method.`,
    model: 'GPT-6.1 Terra',
  },
  {
    slug: 'insights-synthesizer',
    id: 'A.2', group: 'design', icon: 'icons/insights-synthesizer.svg',
    name: 'Insights Synthesizer',
    tagline: 'Makes sense of what users told us.',
    useWhen: 'A person has conducted discovery sessions and has raw materials of requirements and findings.',
    inputs: 'Transcripts, raw notes, research plan, and images.',
    output: 'Tagged evidence, insights, personas, blueprints and test findings.',
    humanReview: 'A person checks raw transcripts for sensitive content before the agent sees them. People then review the drafts and the evidence behind them.',
    prompt: `@Insights Synthesizer I've added our session notes from last week's interviews to the workspace. Organise and synthesise the evidence. Give me personas and need statements from the synthesis.`,
    model: 'Claude Sonnet 5.5',
  },
  {
    slug: 'experience-architect',
    id: 'A.3', group: 'design', icon: 'icons/experience-architect.svg',
    name: 'Experience Architect',
    tagline: 'Turns decisions into something people can see and try.',
    useWhen: 'The user journey, screen inventory, and design system are available to create detailed designs.',
    inputs: 'Canvas briefs, screen inventory, user journey, and sample images or links.',
    output: 'The IA, design language, detailed screens and check results.',
    humanReview: 'A person approves the briefs before any design is built. Designers then review the screens and the check results.',
    prompt: `@Experience Architect This is a mobile app for users to lock FX rates for transaction. It follows conventional, modern banking app interface and interaction design. Use the insights discovered to create a representative user journey, screen inventory, and IA.`,
    model: 'Claude Sonnet 5.5',
  },
  {
    slug: 'context-builder',
    id: 'A.4', group: 'coding', icon: 'icons/context-builder.svg',
    name: 'Context Builder',
    tagline: 'Creates a unified project context for downstream agents.',
    useWhen: 'Creating project context from scratch; starting a new project or onboarding an existing codebase; or establishing business, technical and standards documentation.',
    inputs: 'Confluence link or attached documents; legacy project documentation; source code, configuration and tests; business, compliance and stakeholder information.',
    output: 'Unified project context with CTX-* trace IDs; technology-specific standards; additional user-provided standards indexed under .github/contexts/.',
    humanReview: 'Review the generated context for completeness and accuracy, confirm applicable material has been captured, and resolve gaps before downstream use.',
    prompt: `@Context Builder Analyze the available project documentation, source code, tests, configuration, architecture, business context, and engineering standards. Build a unified project context indexed with CTX identifiers. Separate confirmed facts, derived context, and missing information, and flag material inconsistencies.`,
    model: 'GPT-6.1 Terra',
  },
  {
    slug: 'brd-builder',
    id: 'A.5', group: 'coding', icon: 'icons/brd-builder.svg',
    name: 'BRD Builder',
    tagline: 'Converts business problems into a structured BRD.',
    useWhen: 'The team needs to define the business problem, establish objectives and outcomes, identify stakeholders, document current-state challenges, or establish governance before detailed design begins.',
    inputs: 'Business problem statements, transformation objectives, workshop notes, stakeholder interviews, existing process documents, policies, customer feedback, and known risks.',
    output: 'Executive summary, business context, objectives, stakeholder details, current-state challenges, in/out-of-scope items, business requirements, success measures, assumptions, dependencies, and governance information.',
    humanReview: 'Business owners, product leadership, architecture, security, governance, and delivery stakeholders review before the BRD becomes the approved input to PRD creation.',
    prompt: `Create a BRD for the SCBx AI-enabled Product Development Lifecycle initiative.

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
- Governance and approval criteria`,
    model: 'GPT-6.1 Terra',
  },
  {
    slug: 'prd-builder',
    id: 'A.6', group: 'coding', icon: 'icons/prd-builder.svg',
    name: 'PRD Builder',
    tagline: 'Translates approved business direction into product requirements.',
    useWhen: 'After an approved BRD is in place and the team needs to define product users, describe capabilities, capture functional and non-functional requirements, or establish acceptance criteria.',
    inputs: 'Approved BRD, product vision and roadmap, user personas, user research, existing process flows, architecture constraints, regulatory requirements, and source-system details.',
    output: 'Product overview, goals, target users, scope, features, functional and non-functional requirements, user journeys, data and integration requirements, security requirements, acceptance criteria, and traceability to BRD objectives.',
    humanReview: 'Product owners, business analysts, solution architects, engineering leads, security stakeholders, test leads, and operations teams review before the PRD is approved.',
    prompt: `Create a PRD for an AI-assisted backlog and requirements-management
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
- Recording source references and change history`,
    model: 'Claude Sonnet 5.5',
  },
  {
    slug: 'jira-backlog-manager',
    id: 'A.7', group: 'coding', icon: 'icons/jira-backlog-manager.svg',
    name: 'Jira Backlog Manager',
    tagline: 'Turns approved requirements into a structured delivery backlog.',
    useWhen: 'Backlog decomposition or maintenance is required.',
    inputs: 'Approved PRD, epics, story standards and backlog context.',
    output: 'Draft epics, stories and backlog updates.',
    humanReview: 'Product Owner or Business Analyst reviews priority, scope and acceptance criteria.',
    prompt: `Discover Jira issues from the attached PRD. Plan a Jira backlog for the <project> project.

Use the research findings and architecture decisions to inform the issue hierarchy and backlog structure. Plan Epics as parent-level issues and Stories as child issues associated with the relevant Epic.

Use the "Epic" issue type for epics and the "Story" issue type for user stories. Also plan priority labels (P0-must-have, P1-should-have, P2-future) and domain labels (billing-agent, technical-agent, general-agent, infrastructure, observability).

Each Jira issue must include Acceptance Criteria in Given / When / Then format. Focus on P0 items first. These will form the MVP sprint scope.

Important: Do not create any issues in Jira yet. Only produce the discovery and backlog plan so that it can be reviewed and approved first.`,
    model: 'Claude Sonnet 5.5',
  },
  {
    slug: 'spec-clarify',
    id: 'A.8', group: 'coding', icon: 'icons/spec-clarify.svg',
    name: 'Technical Specifier',
    tagline: 'Converts requirements into an implementation-ready specification.',
    useWhen: 'Before planning and implementation for a bounded increment.',
    inputs: 'Approved requirements, design, architecture, context and standards.',
    output: 'spec.md, acceptance criteria and clarification questions.',
    humanReview: 'FDE coordinates clarification; accountable business and technical roles approve resolved content.',
    prompt: `Create an implementation-ready technical specification for Jira story <#>.

Analyze the requirements, existing codebase, project standards, APIs, and available design evidence. Determine frontend and backend change scope independently and produce traceable SPEC-* requirements mapped to the source FRs/NFRs.

Reuse existing components and contracts where appropriate. Do not invent missing behavior. Capture unresolved decisions as CLAR-* items and block the handoff until they are resolved.

Generate all required specification, contract, design-evidence, traceability, and compliance artifacts, then run the specification review gate and report the final status.`,
    model: 'GPT-6.1 Sol',
  },
  {
    slug: 'task-planner',
    id: 'A.9', group: 'coding', icon: 'icons/task-planner.svg',
    name: 'Implementation Planner',
    tagline: 'Decomposes a specification into ordered implementation tasks.',
    useWhen: 'After specification and plan approval.',
    inputs: 'spec.md, plan.md, project context and engineering standards.',
    output: 'tasks.md and dependency sequence.',
    humanReview: 'FDE or engineering lead validates completeness and ordering.',
    prompt: `Create the implementation plan and task breakdown for RUN_ID=<RUN_ID>.
Use the reviewed specification, preserve requirement traceability, and define dependencies,
verification, and unit-test work for each implementation task. Do not implement the tasks.`,
    model: 'GPT-6.1 Sol',
  },
  {
    slug: 'task-implementor',
    id: 'A.10', group: 'coding', icon: 'icons/task-implementor.svg',
    name: 'Implementation Builder',
    tagline: 'Executes bounded tasks from the approved spec and plan.',
    useWhen: 'For bounded, approved implementation work.',
    inputs: 'Approved tasks, codebase, standards, context and test expectations.',
    output: 'Source code and unit tests.',
    humanReview: 'Application Engineer remains accountable for implementation and pull-request quality.',
    prompt: `Implement the approved tasks for RUN_ID=<RUN_ID> from output/<RUN_ID>/plan/tasks.md.
Follow the approved specification and project standards and record implementation and verification evidence.`,
    model: 'GPT-5.3-Codex',
  },
  {
    slug: 'api-testing',
    id: 'A.11', group: 'testing', icon: 'icons/api-testing.svg',
    name: 'API Testing',
    tagline: 'Generates and executes API tests against approved specifications.',
    useWhen: 'Where the increment exposes or changes APIs.',
    inputs: 'Approved API specification, acceptance criteria and test standards.',
    output: 'API test assets, results and evidence.',
    humanReview: 'Quality Engineer validates coverage and accepts test evidence.',
    prompt: `Read output/<RUN_ID>/specify/spec.md and determine API scope.
If API In Scope is NO, record the API testing activity as NOT_APPLICABLE.
If API In Scope is YES, test every API specified in spec.md using RUN_ID=<RUN_ID>
and API_BASE_URL=<authorized-test-url> when needed.
Generate and execute the Playwright API suite, preserve evidence, and report failures,
contract drift, coverage gaps, and blockers. Do not modify application code to make tests pass.`,
    model: 'GPT-5.3-Codex',
  },
  {
    slug: 'functional-testing',
    id: 'A.12', group: 'testing', icon: 'icons/functional-testing.svg',
    name: 'Functional Testing',
    tagline: 'Converts requirements into repeatable functional tests.',
    useWhen: 'For functional, role-based, negative and boundary testing in approved environments.',
    inputs: 'PRD, stories, acceptance criteria, designs, APIs and test standards.',
    output: 'Test strategy, test cases, data, executable scripts and execution evidence.',
    humanReview: 'Quality Engineer reviews coverage, scripts and results and retains the quality decision.',
    prompt: `Read output/<RUN_ID>/specify/spec.md and determine UI scope.
If UI In Scope is NO and DESIGN_EVIDENCE_STATUS is NOT_REQUIRED, record the
functional testing activity as NOT_APPLICABLE.
If UI In Scope is YES, test every specified UI behavior using RUN_ID=<RUN_ID>
and APP_URL=<authorized-test-url> when needed.
Generate and execute reproducible Playwright tests, preserve evidence, and report coverage,
failures, and blockers. Use the implemented behavior and approved requirements as evidence;
do not modify application behavior to make tests pass.`,
    model: 'GPT-6 Sol',
  },
  {
    slug: 'azure-deploy',
    id: 'A.13', group: 'deploy', icon: 'icons/azure-deploy.svg',
    name: 'Azure-Deploy',
    tagline: 'Prepares and executes approved Azure deployments.',
    useWhen: 'Only after release readiness and required approvals.',
    inputs: 'Approved release candidate, environment configuration and deployment controls.',
    output: 'Deployment package, deployed version and logs.',
    humanReview: 'Release and deployment approvals remain with the named human authorities.',
    prompt: `Analyze the current repository and deploy the application to Azure end-to-end. Discover all deployable components and dependencies, assess deployment readiness, design the Azure architecture, select appropriate services/SKUs/region, validate quota, estimate cost, generate secure Bicep/Terraform, provision infrastructure, deploy the application, run required database migrations, and verify application health. Preserve the existing service topology and ensure every Azure resource is provisioned through IaC only. Follow the Azure Deployment Agent's complete mandatory workflow and stop at each required scaffold and deployment approval gate before proceeding.`,
    model: 'GPT-6 Sol',
  },
  {
    slug: 'code-review',
    id: null, group: null,
    iconHtml: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#E8D5F5"/><path d="M14 20l4 4 8-8" stroke="#6B3FA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 14h-8a2 2 0 00-2 2v8" stroke="#6B3FA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    name: 'Code Review',
    tagline: 'Human review of agent-generated code before the pull request advances.',
    useWhen: 'After Implementation Builder has produced code and unit tests, and before the pull request is approved. The engineer reads the diff, verifies correctness and standards compliance, and either approves or sends it back.',
    inputs: 'Pull request diff, approved specification, project standards, and context.',
    output: 'Approved pull request, or a list of issues to resolve.',
    humanReview: 'This step is the human review. The engineer — not an agent — makes the approval decision.',
    prompt: null,
    model: null,
  },
];

/* ─── Slug index ─────────────────────────────────────────────────────────── */
const _agentBySlug = {};
AGENT_OVERLAY_DATA.forEach(a => { _agentBySlug[a.slug] = a; });

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function _escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ─── Open / close ───────────────────────────────────────────────────────── */
function openAgentOverlay(slug) {
  const agent = _agentBySlug[slug];
  if (!agent) return;

  const backdrop = document.getElementById('agent-overlay');
  const iconEl   = document.getElementById('agent-overlay-icon');
  const nameEl   = document.getElementById('agent-overlay-name');
  const tagEl    = document.getElementById('agent-overlay-tagline');
  const modelEl  = document.getElementById('agent-overlay-model');
  const bodyEl   = document.getElementById('agent-overlay-body');

  /* icon */
  iconEl.className = 'agent-ov-icon' + (agent.group ? ' ' + agent.group : '');
  if (agent.iconHtml) {
    iconEl.innerHTML = agent.iconHtml;
  } else {
    iconEl.innerHTML = `<img src="${agent.icon}" alt="${_escHtml(agent.name)} icon" width="56" height="56">`;
  }

  /* header text */
  nameEl.textContent = agent.name;
  tagEl.textContent  = agent.tagline;

  /* model badge — hide if no model */
  if (agent.model) {
    modelEl.textContent = '✦ ' + agent.model;
    modelEl.style.display = '';
  } else {
    modelEl.style.display = 'none';
  }

  /* body */
  let bodyHtml = `
    <div class="agent-ov-detail">
      <div class="agent-ov-label">Use when</div>
      <div class="agent-ov-content">${_escHtml(agent.useWhen)}</div>
    </div>
    <div class="agent-ov-detail">
      <div class="agent-ov-label">Human review</div>
      <div class="agent-ov-content">${_escHtml(agent.humanReview)}</div>
    </div>
    <div class="agent-ov-detail">
      <div class="agent-ov-label">Approved inputs</div>
      <div class="agent-ov-content">${_escHtml(agent.inputs)}</div>
    </div>
    <div class="agent-ov-detail">
      <div class="agent-ov-label">Output</div>
      <div class="agent-ov-content">${_escHtml(agent.output)}</div>
    </div>`;

  if (agent.prompt) {
    bodyHtml += `
    <div class="agent-ov-prompt-block">
      <div class="agent-ov-prompt-label"><span></span>Sample prompt</div>
      <button class="agent-ov-prompt-copy" type="button" onclick="_copyAgentPrompt(this)" aria-label="Copy sample prompt">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.5" y="5.5" width="8" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
          <path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v7A1.5 1.5 0 0 0 4 12.5h1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      </button>
      <pre class="agent-ov-prompt-text">${_escHtml(agent.prompt)}</pre>
    </div>`;
  }

  bodyEl.innerHTML = bodyHtml;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('agent-overlay-close').focus();
}

function _copyAgentPrompt(btn) {
  const text = btn.closest('.agent-ov-prompt-block').querySelector('.agent-ov-prompt-text').textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('agent-ov-prompt-copy--copied');
    btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    setTimeout(() => {
      btn.classList.remove('agent-ov-prompt-copy--copied');
      btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5.5" y="5.5" width="8" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v7A1.5 1.5 0 0 0 4 12.5h1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;
    }, 2000);
  });
}

function closeAgentOverlay() {
  const backdrop = document.getElementById('agent-overlay');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Init on DOMContentLoaded ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  /* Wire close button and backdrop click */
  const backdrop = document.getElementById('agent-overlay');
  const closeBtn = document.getElementById('agent-overlay-close');

  if (closeBtn) closeBtn.addEventListener('click', closeAgentOverlay);
  if (backdrop) backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeAgentOverlay();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAgentOverlay();
  });

  /* Intercept all agent-card link clicks */
  document.querySelectorAll('a.agent-card[href]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      const hash = card.getAttribute('href').split('#')[1];
      if (hash && _agentBySlug[hash]) {
        e.preventDefault();
        openAgentOverlay(hash);
      }
    });
  });
});
