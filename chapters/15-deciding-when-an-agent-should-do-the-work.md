[← Back to design approach](../pages/design-approach.md)

---

# Deciding when an agent should do the work

Someone has asked: "Can the agent do this?" The answer is rarely obvious. Agents accelerate the right kind of work and complicate the wrong kind. This capability gives you a straightforward way to make the call — and to record it so the reasoning does not get lost.

You start with a task description, access to the task context and knowledge of which agents are available. You finish with a decision — human, agent, or a split between the two — and a log entry that shows how you got there.

---

## Key artefacts

| Activity | UX artefact | When it is worth doing |
|---|---|---|
| Classify the work: is it judgment, mixed or mechanical? | Work type classification | Before starting any task where the question "can the agent do this?" has come up |
| If the work is mixed, identify which part is mechanical and which requires judgment; then decide if splitting is worth the handoff cost | Split-work note | When the task has a clear mechanical component alongside a judgment component |
| Check whether a human gate applies to this task or its output | Gate check note | When the output will be used by others, contains attributed evidence, or involves a decision with downstream consequences |
| Assess the value of agent involvement: time saved, error risk, reversibility, and what the person does with the time freed up | Value note | When the classification is not obvious |
| Make and log the decision | Decision log entry | Always, even when the answer seems obvious |

---

## What can agents do?

**AG-01 Evidence Librarian** logs the work type decision and its rationale, the gate check outcome and the value notes.

The classification decision itself belongs to a person. No other agent is involved in this capability.

---

> 💡 **Tips**
>
> **When in doubt, start with a person.** It is faster to delegate a task you understand than to recover from an agent output that missed the point.
>
> **"The agent is faster" is not enough on its own.** Speed only matters if the output is good enough to use. Check the reversibility before you decide.
>
> **If you cannot write a clear scope, the task is not ready.** A fuzzy task produces a fuzzy output.
>
> **Mixed work is the hardest to manage.** If the agent's output contains an interpretation — a recommendation, a framing, a choice between options — it has crossed from mechanical to judgment. Catch it before it goes further.
>
> **Mechanical tasks still need a review pass.** Agents are faster but not infallible.

---

## Where to go next

- **Applies to:** the start of any task where the question of delegation arises — across discovery, definition and design phases alike.
- **Feeds:** [Handoff](../chapters/14-handoff.md), which covers how to brief an agent once you have decided to delegate. [Keeping the evidence trail](../chapters/16-keeping-the-evidence-trail.md) receives a decision log entry each time.
- **Pass on:** if a task turns out to be more judgment-heavy than expected after the agent has started, stop, retrieve the output and reclassify. Log the reclassification.
