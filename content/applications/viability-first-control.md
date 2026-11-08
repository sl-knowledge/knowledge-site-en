---
title: "Control Authority, Information and Time: Viability-First Principles for Control and Safety Design"
description: "Research material, not operational guidance. Examines who acts on which variables, using what information and within what time, through three failure categories, four assurance obligations and five comparative properties."
author: SL
version: "0.2.3"
created: "2026-11-02"
updated: "2026-11-08"
published: "2026-11-02"
publish: true
researchScope: safety
kind: article
lang: en
language: en
source: applications/viability-first-control.md
sourceUpdated: "2026-11-08"
aliases:
  - framework/viability-first-control
---

## Introduction: safe now does not mean a path remains

Satisfying all defined limits now does not establish continued satisfaction. Inertia, resource depletion, insufficient control or faulty information may remove continuing paths while performance still looks normal.

The [complex-systems framework](../framework/book/constraints-and-future-options.md) calls this distinction viability: the viability kernel contains states from which a constraint-satisfying path exists. Here the further question is:

> **Even if such a path exists, does some actor have enough information, authority and time to execute it?**

This moves from a state-space property to allocation of authority, information and time.

---

## 1. The core question

<a id="c1"></a>

> **C1. For every protected constraint: who may act on which variable, using which estimate, with what authority and latency, while preserving critical constraints now and next?**

Four elements:

| Element | Question |
|---|---|
| **Variable** | Which quantity or trajectory is regulated? |
| **Actor and authority** | Who may act, with what scope and upper limits? |
| **Information** | Which state estimate supports action, and how reliable is it? |
| **Time** | How long from detection/decision to effect, and how much time remains before constraint violation? |

Missing any element can make a theoretically available safe path unexecutable. Physically feasible control does not establish that the authorised actor knows the action or has time.

---

## 2. The structure of control authority

### 2.1 Five separate objects

<a id="c2"></a>

> **C2. Distinguish five objects when analysing a control loop.**

| Object | Question |
|---|---|
| **Controlled output** | Which variable/trajectory is regulated? |
| **Command source** | Plan, selected target, direct manual input or another function? |
| **Executor** | What actually drives the actuator? |
| **Modes/transitions** | When does the allocation change? |
| **State estimate** | What information underlies commands and limits? |

Four distinctions follow:

- **Selecting a target, selecting a source and engaging an executor are different.** A target setting does not prove tracking is active.
- **Displaying a target is not evidence it is controlled.** An interface value does not establish current actuator regulation.
- **Guidance is not control.** Suggesting a trajectory does not itself move the system.
- **Displayed limits need not equal current margin.** Dynamic adjustment for disturbances, performance, loads and estimation errors is design-specific. Check calculation conditions rather than inferring remaining margin from a displayed number.

Confusion arises when operator understanding differs from actual system state.

### 2.2 Physical coupling

Outputs are often physically coupled: an actuator affects several outputs, and coordinated control may affect multiple variables. Responsibility for an output is an **identifiable allocation in the model**, not physical independence or a prohibition on coordination.

### 2.3 Priority is a constrained design choice

<a id="c3"></a>

> **C3. Priority is not a universal theorem.** Command-source priority depends on phase, configuration and faults. There is no ordering for every system and phase. Viability describes satisfaction of defined constraints; the full "protect first, optimise second" ordering requires explicit goals, constraints and priorities.

<a id="c4"></a>

> **C4. Identify the current binding constraint and its responsible party.** Start by identifying the constraint currently limiting safe actions and who must satisfy it.

Several constraints may bind together. External permission, a trajectory target and a physical limit cannot be reduced to "protect the nearest boundary"; analyse interaction. See [CF Grammar](../framework/methods/cf-grammar.md).

<a id="c19"></a>

> **C19. Constraint responsibility requires corresponding information conditions.** After assigning responsibility, check whether the decision process receives required information in time, or explicitly records unresolved uncertainty. Information may be distributed across actors/interfaces; responsibility must cover integration and updating.

No single person must possess all information. Distributed cooperation can support judgement. Check formation, communication and use within the action window. Insufficient information, fusion failure or responsibility-interface gaps are candidate forms of C8's first failure, not proof that division of work means nobody is responsible.

### 2.4 Conflicting demands under limited resources

<a id="c5"></a>

> **C5. Limited resources may prevent simultaneous satisfaction of two demands.** With bounded total energy, thrust, money or attention, arbitrary requirements on two variables may be incompatible. Control must then reallocate.

Reallocation rules require design/validation, not unconditional slogans such as "always protect X first". Other constraints alter acceptable actions.

---

## 3. Safe endpoints: stopping must be reachable and maintainable

<a id="c6"></a>

> **C6. Safe endpoints.** For finite-resource tasks, the relevant question is often not indefinite constraint satisfaction, but reaching an acceptable endpoint within remaining time/resources while satisfying constraints throughout. This resembles a capture basin or finite-horizon reachability problem more than an infinite-horizon viability kernel.

<a id="c7"></a>

> **C7. A "safe stop" must hold for the entire relevant system.** A safe endpoint must be reachable and maintainable by the whole relevant system, not merely an actuator that has stopped moving.

Common mistakes:

- **Stopping is a process.** Movement requires stopping distance/time and avoidance of conflicts during the process.
- **Stopping may create danger.** Some locations introduce risk for others.
- **Shutdown is not completion.** Continued cooling or power may remain necessary.
- **Holding may consume endpoint resources.** Apparent stability can deplete resources needed to reach an endpoint. Account for remaining resources, endpoint availability, information and control before calling it safe.

---

## 4. Three failure categories

<a id="c8"></a>

> **C8. Distinguish three categories from authority, information and constraints.**

| Failure | Meaning | Question |
|---|---|---|
| **Authority allocation or understanding failure** | No responsible actor, or operator's allocation model differs from reality | Who controls each variable now, and is that understood? |
| **Action on an invalid estimate** | Authorised actor uses a failed state estimate | Under which fault assumptions is it credible? |
| **Joint-constraint mishandling** | Protecting one margin violates another | Can constraints be jointly met within available authority? |

These are analytical categories, not complete causal explanations, and can coexist. Organisational, operational and human factors exceed this simplified model.

<a id="c18"></a>

> **C18. Check joint-constraint conflicts at rule level too.** Rules for separate hazards may demand incompatible actions in one state. Without scope, conditional priorities or conflict handling, trade-offs may be deferred to time-pressured, information-poor execution.

Compare assumptions, joint applicability and joint feasibility. Different directions alone do not establish contradiction. Arbitration criteria, including C17, require values, execution conditions, new risks and domain validation; none is a universal answer.

Comparable structures appear in organisational cooperation, long-term relationships and interstate commitments: unassigned shared constraints, outdated judgements, or one side squeezing another's margin.

---

## 5. Information and uncertainty

<a id="c9"></a>

> **C9. Robust guarantees require a set of states compatible with credible error bounds, not a point estimate alone.** Inconsistent sources may require enlarging the possible-state set. State the fault assumptions under which the set actually contains truth.

<a id="c10"></a>

> **C10. Agreement between information sources does not prove correctness.** Agreement alone establishes no error bound. Wrong estimates can be internally consistent and produce no visible contradiction. Such **silent failures** need independent monitoring and explicit fault assumptions.

<a id="c11"></a>

> **C11. Heterogeneity must be demonstrated.** Independent physical principles can address some common-mode failures; fused estimates may share input/model errors. Source independence needs evidence, not assumption. See common failure in [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md).

<a id="c12"></a>

> **C12. Lower confidence does not necessarily justify weaker intervention.** Reducing protective authority as uncertainty grows has no general safety guarantee. Uncertainty may require **more conservative action**, not weaker intervention. The more appropriate requirement is safety across all states compatible with credible error bounds.

<a id="c17"></a>

> **C17. Under uncertainty, explicitly compare recoverability and future options.** When no action can be certified safe for all compatible states, effects on subsequent recoverability, effective options and irreversibility may serve as a candidate comparison criterion. Specify model, scenarios, horizon, constraints, costs and evaluation standards.

This **candidate decision principle** is introduced where C12's guarantee cannot be obtained. It is not deduced from C12 alone and supplies no safety guarantee. More paths are not automatically better: they may fail together, be unaffordable, or exist only in an estimate omitting conditions. Define the objects and comparison relation rather than counting options. All actions may be unrecoverable, unrankable or insufficiently evidenced.

For a probabilistic comparison, [Smooth Operation Does Not Guarantee Recovery, LK1, LK2 and LK5](../framework/foundations/lock-in-vs-probability.md#lk5), separates problem probability, conditional lock-in probability and consequences, and explains why high conditional lock-in probability alone does not justify exclusion. Specify events, horizon, information and resources; a recovery guarantee or upper bound within a model is not automatically a safety certification for the actual system.

**Principles need implementation and testing.** Comprehensive comparison may be impossible under time pressure. Research may translate validated judgement into recognisable triggers, training, planning or bounded authority during preparation, then test usability under information error, cognitive load and delay. Pre-excluding options needs validation of boundaries, mistaken exclusions and alternatives; the principle alone specifies no action direction and certifies no remaining option.

Recognition-primed decision research includes experience, recognition and mental simulation, not universal reflex without reasoning: see [Klein's original chapter](https://www.theisrm.org/documents/Klein%20%281989%29%20A%20Recognition-Primed%20Decision%20Model%20of%20Rapid%20Decision%20Making.pdf). This supports checking usable forms, not validating particular rules. Implementation also needs information, representation, authority and time, linking to C14.

---

## 6. A candidate protection structure: robust filtering

This structure illustrates implementation using existing control barrier functions and measurement-robust extensions (Ames et al., 2017; Cosner et al., 2021), not a new theorem.

**Conditions.** The illustration is continuous-time without input delay. Safe-set invariance requires certified initial state, models/error sets covering true evolution, admissible inputs, and a persistently feasible closed-loop solution with required regularity. One feasible optimisation is no whole-trajectory guarantee. The objective cannot replace barrier conditions, proof or implementation validation. Check each cited method's assumptions.

### 6.1 Structure

Given a safe set and credible state-error bound, at every instant:

1. Enumerate possible true states compatible with the estimate.
2. Form the acceptable command set preserving safety for all those states.
3. Choose the command nearest the original request. An already acceptable request is unchanged.

This is minimal intervention:

$$
u^{*}=\arg\min_{u\in U_\varepsilon(\hat x)}\lVert u-u_{\text{cmd}}\rVert^{2},
$$

where $U_\varepsilon(\hat x)$ satisfies safety conditions for every state within error bound $\varepsilon$. Holding estimate and bound definition fixed, enlarging the error bound cannot enlarge this set.

The minimised quantity is deviation from the request, not risk, workload or performance.

### 6.2 Meaning of infeasibility

<a id="c13"></a>

> **C13. An empty acceptable-command set establishes failed certification, not absence of safe paths.**

- Causes may be physical conflict, conservative conditions, wide error bounds or inadequate models.
- It does not identify the failed assumption.
- It proves neither inevitable accident nor superior human performance.

### 6.3 Handover prerequisites

<a id="c14"></a>

> **C14. Handover is not universally a safe state.** When automation cannot supply a safe command, transfer to another controller requires evidence of sufficient information, authority, feasible strategy or target, and response time. New authority or changed targets are not always required; an executable path after transfer is. Responsibility transfer alone does not establish improved safety.

Use [Cooperation](./cooperation-under-incomplete-trust.md) and [Canonical Vocabulary](../framework/methods/canonical-vocabulary.md#recovery-time-structure)'s timing: after detection, is there time for understanding, judgement, coordination and execution? Record latest whole-process and execution starts separately; understanding cannot begin only at latest execution time. The temporal analogy does not replace domain validation.

### 6.4 Command paths and bypasses

<a id="c15"></a>

> **C15. Guarantees cover only command paths through the protection structure.** Manual control, maintenance, remote assistance, resets and degraded modes require separate analysis.

A bypass is outside that guarantee, but does not prove unsafe commands: independent interlocks, restricted authority or physical invariants may protect it. **List every command path and the evidence covering each.**

---

## 7. Four assurance obligations

<a id="c16"></a>

> **C16. Four distinct evidence obligations support a safety claim for a phase.**

| ID | Obligation | Evidence |
|---|---|---|
| **G1** | **Joint feasibility** | Explicit safe set, available authority and controller jointly satisfying constraints |
| **G2** | **Valid information bounds** | Credible set containing true state under specified faults/models |
| **G3** | **Timely implementation** | Detection, decision, execution, sampling and delay represented |
| **G4** | **Adequately modelled interaction** | Defensible assumptions on disturbances, others and shared resources |

These are diagnostic categories, not statistically independent causes. Delay reduces feasibility; others invalidate prediction; uncertain resources change information and control bounds together.

---

## 8. Five comparative properties: which obligation is hardest?

Domains and phases differ. Five proposed properties support comparison:

| Property | Meaning | Question |
|---|---|---|
| **Time ratio Θ** | Time to boundary relative to detection, decision and correction | Can useful action finish in time? |
| **Recovery requirements F** | Time/resources/conditions to reach and maintain acceptable recovery | Does a recoverable state exist for this phase and surrounding systems? |
| **Observability O** | Inferability of safety-limiting variables, including fault modes/heterogeneous information | Are uncertainty bounds credible? |
| **Command latency τ** | Decision-to-effect delay | Where should authority sit, and how are delay effects verified? |
| **Coupling K** | Dependence on others, infrastructure and shared resources | Which external actions must the guarantee cover? |

<a id="c20"></a>

> **C20. Externally driven hazards need end-to-end timing checks.** Do not inspect only the final actor. Under common baseline scenario/time coordinates, record hazard observability, information formation/transmission, use in judgement, and response completion/effect.

Separate data age, observation/transmission delays, pre-execution delay and execution. Pre-detection formation/transmission must not be counted again inside post-detection \(\tau_{\mathrm{response}}\). Add only genuinely sequential, clearly bounded stages; use event timestamps for parallel, overlapping or pipelined end-to-end latency.

If the listed chain/plan is late, examine bottlenecks, alternative information/plans and omitted early signals. Total delay does not establish zero margin for every actor or blame one link. Compare observation/transmission/response speed, exposure/buffers, task/interface redesign and more; there are not only two possible changes.

Support delay and hazard estimates with evidence, ranges and dependencies. If earlier information changes action, feedback or deadlines, compare updated whole trajectories. See [Canonical Vocabulary](../framework/methods/canonical-vocabulary.md#recovery-time-structure) and [ST8](../framework/methods/stress-testing.md#st8). Checking information chains is not accident-cause identification.

**Research hypothesis:** the five properties help locate the hardest assurance obligation in a phase and prioritise safety investments for study.

**Qualifications:**

- Not five universal scalars: boundary time is trajectory-dependent, observability depends on dynamics/sensors, coupling needs structure. Operational definitions, uncertainty ranges and units are required.
- A useful diagnostic proposal, not a single-cause accident claim or a unique optimum from five parameters.
- Minimum margin alone does not identify the best change. Compare recoverability, fault coverage, new hazards and costs.

---

## 9. Two methodological disciplines

**First, mathematical arguments and empirical hypotheses differ.** Section 6's methods provide sufficient-condition guarantees under full explicit assumptions; their structure is outlined here without new proof. The five-property investment proposal needs empirical testing and inherits no mathematical certainty merely by sharing terminology.

**Second, retrospective fit is not prediction.** An event illustration shows possible questions, not predictive power. Evidence requires samples/scope/inclusion fixed before outcome coding; independent coders blind to proposed rankings with agreement reported; reasonable baselines; exposure (operating time, distance, encounters), not just events. This follows frozen predictions.

**Weakening evidence:** unreliable category use; rankings no better than baselines; persistent important omissions; or proposed changes failing after costs/new risks. Record whether major factors fit the three failures/four obligations and report coverage over time. Classification coverage measures accommodation, not causal explanation or prediction. Separately report coding rules, omission severity, agreement and baselines.

---

## 10. Existing research

| Research | Core | Use here |
|---|---|---|
| Aubin, Viability Theory | Constraint-satisfying paths in dynamic systems | Endpoints and foundational vocabulary |
| Ames et al. (2017), control barrier functions | Sufficient safety conditions and minimal-intervention quadratic programmes | Section 6 |
| Cosner et al. (2021), measurement-robust barriers | Bounded state-estimation error | C9, C12, Section 6 |
| Sha (2001), Simplex | Verifiable safety controller supervises complex control, switching as needed | C14; existing runtime-assurance idea |
| Degani and Heymann (2002), interaction verification | Actual machine behaviour versus user mental model | C2 understanding failure |
| Leveson (2011), Engineering a Safer World | Safety as system constraints/control structure | C1/C2; not all derived from barrier proofs |
| Defence in depth | Multiple independent barriers | Independent interlock in C15 |

**The contribution is principally not mathematical.** Existing methods supply that. The proposal joins authority, information and time under C1, using three failures, four obligations and five properties as cross-domain categories, with conditions and falsification boundaries. Incremental value needs comparison with existing hazard-analysis/engineering methods.

---

## 11. Limitations

1. **Technical/control scope:** organisational behaviour, incentives, regulation, maintenance and human adaptation mostly lie outside.
2. **Continuous-control simplification:** Section 6 excludes input delay. Hybrid/discrete software, sampling, delays and strategic participants need dedicated analysis.
3. **Domain difficulty remains:** joint feasibility, credible bounds and feasible handover remain hard domain-specific work; only their question form is supplied.
4. **Transfer needs redefinition:** social systems require new states, actions, feedback and uncertainty. Physical-control guarantees do not transfer; the analytical structure does.

---

## Closing perspective

Viability says safety now does not mean a path remains. Even with a path, ask who can execute it, on what basis and in time.

The principles separate authority/responsibility and information (C2–C5/C19), whole-system endpoints (C6/C7), failures/rule conflicts (C8/C18), uncertainty and conditional recovery comparison (C9–C12/C17), guarantee boundaries (C13–C15), and evidence/investment questions via obligations, properties and information-chain timing (C16/C20).

Related: [Framework](../framework/book/constraints-and-future-options.md), [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md), [CF Grammar](../framework/methods/cf-grammar.md), [Cooperation](./cooperation-under-incomplete-trust.md).

---

## Appendix: principle index

| ID | Principle | Section |
|---|---|---|
| C1 | Who acts, on which information, with what authority/delay, preserving which constraints | 1 |
| C2 | Outputs, sources, executors, modes/transitions, estimates | 2.1 |
| C3 | Priority is conditional design, not universal theorem | 2.3 |
| C4 | Binding constraint and responsibility | 2.3 |
| C5 | Limited resources may preclude joint demands | 2.4 |
| C6 | Finite-resource tasks require acceptable endpoints | 3 |
| C7 | Whole-system reachable/maintainable safe stop | 3 |
| C8 | Allocation/understanding, invalid estimate, joint constraints | 4 |
| C9 | Set-valued uncertainty | 5 |
| C10 | Agreement is not correctness; silent failure | 5 |
| C11 | Demonstrate heterogeneity | 5 |
| C12 | Lower confidence need not weaken intervention | 5 |
| C13 | Empty command set is failed certification | 6.2 |
| C14 | Handover is not universally safe | 6.3 |
| C15 | Guarantees cover protected paths only | 6.4 |
| C16 | G1–G4 | 7 |
| C17 | Conditional recoverability/future-option comparison | 5 |
| C18 | Rule-level joint-constraint conflicts | 4 |
| C19 | Responsibility requires information conditions | 2.3 |
| C20 | End-to-end hazard timing | 8 |
| — | Θ, F, O, τ, K (hypothesis) | 8 |

## Appendix: sources

- Aubin, J.-P. *Viability Theory*. Birkhäuser. [Publisher](https://link.springer.com/book/10.1007/978-0-8176-4910-4)
- Ames, A. D., Xu, X., Grizzle, J. W., & Tabuada, P. (2017). Control barrier function based quadratic programs for safety critical systems. *IEEE Transactions on Automatic Control*. [arXiv:1609.06408](https://arxiv.org/abs/1609.06408)
- Cosner, R. K., Singletary, A. W., Taylor, A. J., Molnar, T. G., Bouman, K. L., & Ames, A. D. (2021). Measurement-robust control barrier functions. [arXiv:2104.14030](https://arxiv.org/abs/2104.14030)
- Molnar, T. G., et al. (2021). Safety-critical control with input delay in dynamic environment. [arXiv:2112.08445](https://arxiv.org/abs/2112.08445)
- Sha, L. (2001). Using simplicity to control complexity. *IEEE Software*, 18(4), 20–28.
- Degani, A., & Heymann, M. (2002). Formal verification of human-automation interaction. *Human Factors*, 44(1). [NASA report](https://ntrs.nasa.gov/citations/20040088229)
- Leveson, N. G. (2011). *Engineering a Safer World: Systems Thinking Applied to Safety*. MIT Press. [Publisher](https://mitpress.mit.edu/9780262533690/engineering-a-safer-world/)
- IAEA (1996). *Defence in Depth in Nuclear Safety* (INSAG-10). [PDF](https://www-pub.iaea.org/MTCD/publications/PDF/Pub1013e_web.pdf)

## v0.2 revision note

Adds C17–C20, retaining C1–C16. C17 needs independent evaluation/testing rather than deduction from C12, including implementation validation for training/planning/rules. C18 checks joint rules; C19 allows distributed judgement; C20 separates end-to-end, overlapping and full-response timing. Adds conditional displayed-limit checks and coverage interpretation boundaries.

This public edition retains the newest source's direction while qualifying overstatements. It includes no concrete accident analysis, specific action advice or unvalidated operating rules. Shared terminology follows the current CN revisions; the private source remains independent.

## v0.1.1 revision note

Section 6.3 clarifies full handover response time and two latest starts. C1–C16 numbering and research scope remain.

---

<a id="research-notes"></a>

## Research and version notes

> **Public research draft v0.2 · Theoretical principles and research hypotheses, without validation or certification for a concrete system.** This article extracts independently usable theoretical material from the author's automation-authority and cross-domain safety research. It analyses no particular model, accident or system. It distinguishes established mathematics, proposed analytical principles and untested hypotheses. It is not operational guidance or a design standard for any domain.
>
> **Citation.** Principles have stable identifiers C1–C20 and section anchors, such as [#c17](#c17). Cite, for example, "Control Authority, Information and Time, C5".
