[← Back to design approach](../pages/design-approach.md)

---

# Define and maintain the design language

The next step to concretising your design solutions is creating a common visual and content language: the shared foundation that every screen, every component and every label is built from.

Your design system will contain visual foundations, a component library with every state covered, content standards, and accessibility requirements set as minimums. If there is an existing design system, update it with any new components or visual styles.

---

## Key artefacts

| Activity | UX artefact | When it is worth doing |
|---|---|---|
| Agree and document the visual foundations: colour palette, typography scale, spacing system, grid, iconography style and motion rules | Visual foundations | You are designing more than a handful of screens, or more than one person will be designing |
| Build or adapt the component library: design each component with all its states, write usage guidance and do/don't examples | Component library | You have reusable interface elements that will appear across multiple screens |
| Set content standards: voice, tone, writing rules, plain language targets and labelling rules | Content standards | You have more than one person writing interface copy, or content inconsistency has caused confusion in testing |
| Set accessibility standards: minimum contrast ratios, touch target sizes, keyboard navigation requirements and screen reader expectations | Accessibility standards | Always, before any screen is designed |
| Publish the design language as the single source of truth and confirm every designer is working from it | Published design language | Always, before detailed screen design begins |
| Maintain the design language: log each change, note the reason and communicate updates to everyone using it | Design language change log | Whenever a component, standard or rule is revised |

---

## What can agents do?

**AG-04 Design Organiser** assembles component variants and states from the approved visual foundations, maintains the design language document and the change log, and checks the document for completeness and missing states.

**AG-02 Research Synthesis** checks components against the accessibility standards and flags discrepancies, and checks the design language against the experience principles.

Neither agent changes the visual foundations without approval, originates a design decision, or resolves a discrepancy on its own.

---

> 💡 **Tips**
>
> **Define before you design.** A design language built after screens are drawn describes what happened — it does not guide what to do. When AI is involved in creating rapid prototypes, this is more important than before. A well-defined design language guides AI to build it right while being mindful of token usage.
>

---

**Where to go next** [Design the detailed screens](design-the-detailed-screens.md). Every screen is built from this design language.
