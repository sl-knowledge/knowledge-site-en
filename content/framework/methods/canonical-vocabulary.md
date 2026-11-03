---
title: "Canonical Vocabulary, Symbols and Knowledge Levels"
description: "Places the definitions of state, constraint, reachability, representation failure and research governance in one reference specification."
author: "SL"
version: "0.4.1"
created: "2026-11-01"
updated: "2026-11-03"
published: "2026-11-01"
publish: true
kind: article
lang: en
source: framework/methods/canonical-vocabulary.md
sourceUpdated: "2026-11-03"
aliases:
  - framework/canonical-vocabulary
---

> **Public edition v0.4.1 · the internal terminology specification of this body of work.** Organised from _Canonical Vocabulary & Notation v1.0_ (2026-10-06). "Canonical" here applies to this book and its public editions; it does not mean that every research field uses the same terms, and it does not mean that a working definition has become a standard in the literature.

## 1. Distinguish knowledge levels from evidence types first

| Knowledge level    | How it is used                                                                                      |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| Established        | States the inherited concepts, their original sources and the conditions of application             |
| Synthesis          | States how this book organises different methods, without claiming its components as new inventions |
| Working Diagnostic | Gives operational definitions, models, scenarios, thresholds and limitations                        |
| Research Question  | States what is still unresolved, and how competing accounts would be compared and tested            |

These labels describe the standing of a claim; they are not a credibility score. Borrowing the name of a mature theory does not automatically make a particular application valid.

Evidence records are classified separately: verified records (FACT), other people's reports (REPORTED), inferences (INFERENCE), hypotheses (HYPOTHESIS) and the unknown (UNKNOWN). A FACT still has to state its source, scope and the way it was verified; the classification itself does not remove measurement or interpretation error.

## 2. A minimal symbol table

| Object                      | Preferred notation here                      | Meaning and limitation                                                                        |
| --------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Current state               | \(x_t\)                                      | The state of the system that bears on the question                                            |
| Environmental state         | \(e_t\)                                      | Conditions currently treated as external                                                      |
| Action or control           | \(a_t\), and \(u_t\) in cybernetic citations | Kept consistent within one derivation                                                         |
| Disturbance                 | \(d_t\)                                      | External input varying within a defined range                                                 |
| Dynamics                    | \(F\)                                        | The state-transition relation; no longer doubles as freedom or a set of futures               |
| Target and horizon          | \(T,H\)                                      | What is being answered, and over what period it is evaluated                                  |
| Raw evidence | \(\mathcal D\), or \(\mathcal D_t\) when time-indexed | Observations and records; distinct from environmental \(e_t\) and the ordinary \(D\) denoting the latest completion deadline |
| Representation and version  | \(Z_t,Z_t^{(v)}\)                            | The organisation of current variables, relations and hypotheses                               |
| Candidate model set         | \(\mathcal M\)                               | One or more candidate models and their mechanism hypotheses                                   |
| Scenario or uncertainty set | \(\Sigma\)                                   | The future or disturbance conditions currently held in view                                   |
| Admissible state set        | \(K\)                                        | Defined by the specific constraints                                                           |
| Reachable set               | \(\mathcal R_H(x)\)                          | The states reachable given the model, the action conditions and the horizon                   |
| Viability kernel            | \(\operatorname{Viab}_H(K)\)                 | The set of initial states that can keep satisfying the constraints under the given conditions |
| Policy                      | \(\pi\)                                      | A rule or conditional policy mapping available information to actions                         |

When citing another field, keep the source's symbols and state the mapping explicitly; external research is not required to obey this table. A concrete application may use natural-language fields, and does not have to force every object into a single letter tuple.

## 3. System, capability, access and mechanism

| Term                   | Working meaning                                                                                           | Where it is easily confused                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| System and environment | The analysis scope chosen for the current task, and the external conditions                               | The boundary is a modelling choice, not something nature hands you         |
| State                  | The conditions relevant to current and subsequent evolution                                               | Observed outputs need not reveal the state fully                           |
| Constraint             | A condition that limits the admissible states, actions or transitions                                     | Not any factor that "makes things harder"                                  |
| Binding constraint     | A constraint that actually limits feasible action or outcome in the current problem                       | Several constraints can work at the same time                              |
| Capability             | A resource, skill or transformation the system can fairly reliably call on                                | Reliability still requires evidence and conditions                         |
| Access                 | An external resource or interface that is currently callable but not fully under the system's own control | The obligations and risks that come with access also have to be recorded   |
| Mechanism hypothesis   | A candidate explanation of how variables produce a change                                                 | Correlation or narrative cannot be promoted straight to a causal mechanism |

Older drafts used Generator, split by context into capability, mechanism, dynamics or production process. When the word is kept, the specific meaning has to be stated; it is no longer a technical atom that explains everything.

## 4. Reachability, viability and four boundaries

**Terminology convention.** This corpus uses one preferred Chinese rendering each for viability, viability kernel and viability boundary. Older Chinese renderings are retained as aliases for the same objects, without introducing new mathematical definitions. Viability asks whether a policy can continue satisfying the constraints under stated conditions and a stated horizon; current compliance alone does not guarantee continued feasibility, permanent safety or zero risk.

Reachability asks where you can get to; viability asks whether you can continue inside the constraints. Reaching a state does not mean you can hold it afterwards. Tasks with limited resources also have to state the safe endpoint and the deadline for reaching it.

Ordinary viability asks whether a control satisfying the constraints exists under a given dynamics. Robust viability additionally specifies the permitted disturbances and the non-anticipating policy, that is, it may not rely on future information that has not yet been obtained. In an open world one usually can only give an estimate under the current model and scenario; it cannot be written as if the true viability kernel were known.

| Boundary              | Meaning                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| System Scope          | What is taken into the system, and what is provisionally treated as environment                    |
| Constraint Boundary   | Crossing it violates the admissible conditions as currently defined                                |
| Viability Boundary    | The boundary beyond which a continuing path is lost under the specified model, control and horizon |
| Reachability Frontier | The boundary of the reachable set under current conditions                                         |

When discussing something "close to the boundary", say which boundary is meant.

"Freedom" is kept as a natural-language upper term; concrete studies split it into reachable options, options that remain sustainable after arrival, and the ability to reconstruct a path after the environment changes. A count of states cannot give a single general freedom score for a person, a company or a state.

<a id="path-objects"></a>

### Three objects of path analysis

When analysing an agent's choice, record three objects separately:

| Object | Question | Common error or limit |
| --- | --- | --- |
| Model-estimated actually feasible paths | Under the stated constraints, scenario and horizon, which paths can hold conditionally? | Actual feasibility is the object being studied; the analyst still has an estimate that may omit conditions |
| Paths the agent knows or believes feasible | What information does the agent have, and how does it understand consequences? | A real exit may be missed, or an infeasible plan may be believed feasible |
| Paths the agent considers acceptable | Which goals, values and risk criteria guide comparison? | An executable path may be rejected; acceptability judgements may also rely on false beliefs |

These objects need not coincide. Neither believed-feasible nor acceptable paths can be assumed to be subsets of actually feasible paths. Observing that an agent remains in an arrangement does not by itself show either that it has no exit or that it endorses the arrangement. Compare paths **inside** and **outside** the arrangement, including what each can sustain. Path counts alone cannot measure the capacity to choose: several paths may share a resource and fail together.

This separates analytical objects; it is not a complete behavioural model of choice. Source and application: [Cooperation Under Incomplete Trust](https://sl-knowledge.github.io/knowledge-site-en/applications/cooperation-under-incomplete-trust), Sections 1.1 and 6.1.

## 5. Representation, variable hierarchy and sufficiency

A representation is a compression relative to a target, a horizon and the available evidence. Competing representations are candidate models that remain compatible with the same observations but give different accounts of the future or of the mechanism.

| Level   | Reason for inclusion                                                        | Subsequent handling                                           |
| ------- | --------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Core    | Evidence currently shows a substantial influence on the task judgement      | Enters the working representation and the tests               |
| Monitor | Not core for now, but may become important as conditions change             | Specify the monitoring conditions and the escalation triggers |
| Archive | Not used directly in the reasoning now, but still valuable for traceability | Keep the source and the clues for re-retrieval                |

"Decision sufficiency" has to state the task, the evaluation criterion, the permitted error and the resource conditions. It is not completeness of the world, and it cannot be inferred from the absence of observed error.

A discriminating observation is an observation, event or intervention that makes competing explanations produce different testable expectations. It does not require finding the globally most informative observation each time. Stress testing is only one method, and increasing stress may also amplify noise, introduce selection bias or damage the system.

## 6. Failure signals, failure causes and representational fragility

Failure signals include persistent residuals, anomalous responses, degraded calibration and newly appearing important differences. For why a representation loses applicability, this corpus uses the following shared categories:

| Preferred category | Meaning | Distinction |
| --- | --- | --- |
| Specification miss | Important variables, mechanisms or scope were relevant from the start but were left out of the initial representation | New evidence may reveal an old error rather than a new change in reality |
| Structural drift | Relations, rules or constraints that may once have been modelled adequately subsequently change | Distinguish when reality changed from when the analyst noticed |
| Task mismatch | A representation is used for a different target, horizon or evaluation problem | It may still suit its original task; misuse alone does not establish that the representation itself is invalid |

These are working categories of representation-failure causes, not an exhaustive or mutually exclusive classification. Several causes may coexist, or the cause may remain unknown. Alternative Chinese names in earlier drafts are retained as aliases, not new categories. Discovering a pre-existing condition does not mean the structure of reality has just changed; attribution needs evidence that distinguishes these situations.

Policy fragility studies which scenarios make an action policy lose its intended performance; representational fragility is this book's working definition and studies which world conditions or task changes make the representation lose sufficiency. The two should be recorded separately.

The original drafts expressed these objects in set language. The public edition prefers to require that the trigger conditions, observation indicators, competing explanations and handling rules actually be written out, rather than treating unmeasured sets as known entities.

## 7. Minimal revision and its levels

| Level | Candidate operation                                                                |
| ----- | ---------------------------------------------------------------------------------- |
| L0    | Update parameters                                                                  |
| L1    | Adjust variable weights or strength of effect                                      |
| L2    | Revise the mechanistic relations                                                   |
| L3    | Add, remove, split or merge variables                                              |
| L4    | Change the analysis scope, the institutional scenario or the constraint conditions |
| L5    | Rebuild the representation                                                         |

This is a table of operations for comparing changes, not an algorithm to be tried level by level. If a structural error is known, rebuilding directly may be more appropriate. A revision should be compared across complexity, cost, recovery effect and independent testing.

## 8. Three diagnostic quantities that need conditional statements

### Adaptation time margin

This edition standardises the comparison as an **effective margin**: time left after allowing for the full response from a common reference time. The full response includes post-detection assessment, coordination, start-up and execution. The delay before detection is not included again.

\[
\widehat m_\tau=\widehat m_{\mathrm{eff}}
=\widehat\tau_{\mathrm{survive}}-\widehat\tau_{\mathrm{response}}.
\]

Both durations must be measured from the same reference time. This edition keeps \(m_\tau\) as a compatible notation for the effective margin. The stages covered by the older \(\tau_{\mathrm{adapt}}\) must be specified before mapping it to this edition; it is not the new shared duration name. A positive margin does not guarantee success. Estimates need intervals, dependency conditions and an effective response.

<a id="recovery-time-structure"></a>

### The time structure of a recovery window

**A working diagnostic and its assumptions.** Fix the scenario, constraints, horizon and set of known executable responses. This simplified model assumes a fixed deadline and fixed stage durations, no mitigation before completion, and an effective response that maintains the required constraints after completion. Durations are non-negative. Real studies use estimates; unaccented symbols below describe idealised accounting.

The timeline is: adverse change begins \(t_0\) → detection \(t_D\) → actual execution starts \(t_A\) → completion and effect \(t_C\). For a specified response:

| Symbol | Shared name | Meaning |
| --- | --- | --- |
| \(D\) | Latest completion deadline | The last time essential constraints can be maintained without a completed effective response; completing it by this time avoids a breach in the model |
| \(\ell\) | Pre-execution delay | Assessment, coordination and start-up from starting the response process to actual execution; the formula assumes the process begins immediately after detection, without additional optional waiting |
| \(\tau_{\mathrm{exec}}\) | Execution duration | Time from actual execution to completion and effect |
| \(\tau_{\mathrm{response}}=\ell+\tau_{\mathrm{exec}}\) | Full response duration | All required post-detection assessment, coordination, start-up and execution |
| \(t_L=D-\tau_{\mathrm{exec}}\) | Latest start of execution | Subtracts execution only; it is not a time at which discussion or coordination may still begin |
| \(t_R=D-\tau_{\mathrm{response}}\) | Latest start of the whole response process | Leaves time for both the pre-execution delay and execution |

\[
t_C=t_D+\ell+\tau_{\mathrm{exec}},\qquad
m_{\mathrm{eff}}=D-t_D-\tau_{\mathrm{response}}
=t_R-t_D=t_L-t_D-\ell.
\]

Thus \(t_L-t_D\) is the **window from detection to the latest start of execution**, which must still accommodate \(\ell\). It equals the effective margin only when \(\ell=0\). If the process starts after an additional wait \(w\), add \(w\) to completion time and subtract it from the realised margin. Do not count the same interval in both full response duration and an extra delay.

From detection, \(\tau_{\mathrm{survive}}=D-t_D\), so the two effective-margin formulas correspond. If the reference time differs, or a response is already in progress, use remaining support time and remaining response stages from the same time.

**Just in time differs from too late.** \(m_{\mathrm{eff}}=0\) means completion exactly at \(D\), with no tolerance for error in this deterministic model. The specified response is too late if its whole process has not begun after \(t_R\), or its execution has not begun after \(t_L\). This does not rule out unknown or newly available responses.

For multiple responses, record \(\ell(o)\) and \(\tau_{\mathrm{exec}}(o)\) separately. With a common deadline \(D\), let \(\tau_{\mathrm{response}}^*=\min_o[\ell(o)+\tau_{\mathrm{exec}}(o)]\), giving \(t_R^*=D-\tau_{\mathrm{response}}^*\). The response with the fastest execution need not have the fastest full response. If there is no effective executable response, an empty set cannot be turned into a meaningful positive margin.

### A timing example with coordination delay

Hypothetical assumptions: \(D=12\) weeks, \(t_D=3\), \(\ell=1\), and \(\tau_{\mathrm{exec}}=4\) weeks. The full response takes five weeks; its latest process start is week 7 and latest execution start is week 8. Starting the process at week 3 gives execution at week 4 and completion at week 8, leaving four weeks of effective margin. The five-week detection-to-latest-execution window includes one week of coordination, so it is not five weeks of additional slack.

### Relationship to the warning gap and older notation

For a fixed baseline process that has not started, set \(t_V=t_R^*-\delta\) using the fastest full response, where \(\delta\ge0\) is an ex ante time safety threshold and \(t_F\) is when observable performance crosses its failure threshold. Then \(m_{\mathrm{eff}}^*\ge\delta\) is equivalent to \(t_D\le t_V\). The older \(t_V=t_L-\delta\) agrees when \(\ell=0\) for the corresponding response; otherwise pre-execution delay cannot be ignored. There is no universal ordering of \(t_F\) and the latest start times.

Detection delay \(t_D-t_0\), warning gap \(G_W=t_F-t_V\), and effective margin \(m_{\mathrm{eff}}\) are recorded separately. With baseline trajectory, process durations and thresholds unchanged, earlier information changes \(t_D\) without changing that baseline \(G_W\). If monitoring changes actions or reactions, re-estimate the trajectory.

Staged effects, start-time-dependent durations, overlapping assessment and execution, or response-specific deadlines require complete trajectory comparisons rather than this sequential sum. General recoverability still requires the full dynamics and feasible policies.

Source and older case: [Cooperation Under Incomplete Trust](https://sl-knowledge.github.io/knowledge-site-en/applications/cooperation-under-incomplete-trust), Section 2. For checks see [Stress Testing, ST8](https://sl-knowledge.github.io/knowledge-site-en/framework/methods/stress-testing#st8).

### Borrowed viability

Compares which states or paths are sustainable when external access is allowed with the ones that survive on defined internal capability alone. The model conditions have to stay comparable, and it has to be recorded whether the external access adds debt, dependency or risk; it cannot be assumed that the two feasible sets are necessarily nested.

### Warning gap

\[
\widehat G_W=\widehat t_F-\widehat t_V.
\]

These are respectively the estimated point at which the surface behaviour crosses the failure threshold, and the estimated point at which recovery capability enters the preset danger zone. The result depends on the model, scenario and thresholds. Whether action can finish in time must be calculated separately from detection, the full response duration and the completion deadline; detection delay cannot simply be subtracted from the warning gap.

## 9. Vocabulary for decision policy

| Term                        | Use in this book                                                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Robustness                  | Facing a stated set of credible scenarios, avoiding performance that depends excessively on narrow assumptions; not success in any world      |
| No-Ruin                     | Treating separately the failure modes that could destroy continuing learning, fulfilment of obligations and capacity to act; not a guarantee of zero loss |
| Optionality                 | The value of keeping conditional action available while uncertainty is unresolved; having more options can also raise cost                    |
| Reversibility               | Distinguished as withdrawable, costly to withdraw and in fact irreversible, with the resources and time stated                                |
| Commitment                  | Comparing a commitment now against the best feasible waiting policy under jointly evaluated conditions                                        |
| Forced lock-in              | The absence of a sustainable alternative path; different from a deliberate concentration of resources                                         |
| Gradual lock-in | Alternative paths progressively narrow through local adjustments; no single step has to explicitly abandon an exit. Check each stage; see [ST7](https://sl-knowledge.github.io/knowledge-site-en/framework/methods/stress-testing#st7). |
| Deadline | A time condition after which resources, obligations or action conditions change. Effects pass through concrete consequences and dependencies, rather than merely whether an agent values the deadline. |
| Adaptive policy             | Initial action, ex ante observation conditions, conditional actions, and exit or revision rules                                               |
| Signpost                    | An ex ante specified observable condition that can trigger a policy update                                                                    |
| Delayed constraint feedback | The performance of a constraint is buffered or delayed; this does not mean the constraint has disappeared for good                            |
| Meta-control                | The ability, in a concrete decision context, to change later constraints, interfaces or the space of action                                   |

If the value of waiting already includes future information and conditional choice, the same option cannot be added a second time. Comparing actions also requires a common basis for cost, risk, discounting and feasibility.

High-variance action near failure does not by itself prove that a person's psychological risk preference has changed. Describe the objective, the available actions and the structure of consequences first, and only then discuss whether a psychological explanation is needed.

Outcome path diversity looks at probability, payoff and dependency; fatal mode exposure looks at severity, common causes, irreversibility and probability. Writing more related stories does not produce genuinely independent outcome paths.

<a id="working-mechanism-hypotheses"></a>

### Working diagnostics and mechanism hypotheses

Distinguish a concept's name from empirical claims attached to it. Inclusion in this vocabulary makes an item easier to look up; it does not validate a mechanism.

| Item | Working meaning | Knowledge status and testing requirement |
| --- | --- | --- |
| Non-equivalence of capability and access | Providing the same function today does not imply continuity after external access is withdrawn | A conditional comparative diagnostic: check control, continuity, switching time, obligations and common-cause failure separately; internal capability is not necessarily superior |
| Path shifts under insufficient margin | An agent that cannot accept losing an essential condition and believes a risky path might preserve it may shift to a high-variance path | An untested mechanism hypothesis: measure beliefs, consequences and evaluation rules and compare rival explanations; pressure or negative margin alone does not determine behaviour |
| Default bearer | A participant on whom an arrangement's unallocated or uncompensated shortfall actually falls | A working label: evidence must identify who bears which shortfall. A greater tendency of these participants to disrupt an arrangement is a separate hypothesis, not a consequence of the label |

Source: [Cooperation Under Incomplete Trust](https://sl-knowledge.github.io/knowledge-site-en/applications/cooperation-under-incomplete-trust), Sections 6.1, 8, 10.2 and 11. Domain mappings, causal interpretations and predictions still require independent evidence.

## 10. Vocabulary for a human-AI research system

| Object                             | Meaning                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Research Governor                  | The human is responsible for goals, values, risk, commitments, and decisions to stop and to revise          |
| Representation and evidence engine | The AI assists retrieval, organisation, competing explanations, counter-evidence and proposals for revision |
| Research state                     | Goals, representation, evidence, hypotheses, predictions, fragility, the revision log and the open items    |
| Knowledge state                    | Known, believed, assumed, unknown and disconfirmed; each has to be connected to an evidence record          |
| Long-term storage                  | Materials and versions kept in a traceable way                                                              |
| Candidate context                  | Information retrieved against the current goal and still awaiting verification                              |
| Working context                    | The limited information that has been verified and screened and actually enters the current reasoning       |

"Disconfirmed" should record which version and which conditions it refers to; "believed" cannot be rewritten by the system into "known" automatically. The value of memory involves current relevance, later reuse, the cost of omission and the cost of occupancy; it is not semantic similarity.

Theory transfer checks in turn whether the relational structure, the causal conditions, the predictions and the decisions are preserved. An analogy only generates candidate inferences; it cannot generate facts in the target domain.

## 11. Vocabulary for investment applications

Company-system research studies operating transformation, capital productivity and value per share; market-system research studies expectations, positions, orders and liquidity; investor-system research studies capital, scale, obligations and the conditions for sustainable execution. The three interact, but they cannot be compressed into a single quality score.

The financial statements' "output log" is a research prompt: the mechanisms that produced the result still have to be traced. It does not deny the estimates, future obligations and accounting judgements contained in the statements. Company growth, total profit growth, earnings per share growth and intrinsic value growth have to be analysed separately.

A differential approximation of the return on new capital has to take capital formation, accounting conventions and time lags into account. Marginal purchasing power, narrative stage and market life cycle are representations still to be operationalised; they are not multiplicative laws for price prediction. Portfolio viability, on the other hand, concerns whether obligations can continue to be fulfilled and adjustments made under capital and liquidity shocks, and is not the same as low volatility.

For the concrete treatment and the sources of the financial concepts, see [the three systems of investment](https://sl-knowledge.github.io/knowledge-site-en/framework/book/investment-three-systems).

## 12. Migration of older expressions and the versioning rule

| Older expression                       | How the public edition handles it                                    |
| -------------------------------------- | -------------------------------------------------------------------- |
| Freedom equals a count of states       | Split into reachability, continuing options and adaptability         |
| Boundary without a qualifier           | Name one of the four boundaries                                      |
| Generator                              | Split by context into capability, mechanism or dynamics              |
| Stress reveals truth                   | Changed to a discriminating observation under specified conditions   |
| Keep / Drop                            | Changed to core / monitor / archive                                  |
| Human = MetaController                 | Use research governor in a human-AI context                          |
| True Viability Margin                  | Changed to an estimate under model and scenario conditions           |
| Treating completion deadline as the end of the recovery window | Distinguish completion deadline \(D\), latest start time \(t_L\) and detection time \(t_D\), with the simplified model assumptions stated |
| Counting only current options | Separate model estimates, agent beliefs and acceptability, and compare paths inside and outside the arrangement |
| Explaining everything with the outcome | Keep ex ante judgements, competing explanations and revision records |

Plain language comes first; English terms are used to keep the correspondence between concepts; formulas appear only when they remove ambiguity, support a derivation or operationalise something. This public edition is numbered separately from the original terminology file; a substantive change to a definition or a symbol should raise the version and record the reason, while examples and wording are maintained under the public version rules.

Companion reading: [the overall architecture](./research-architecture.md), [consistency audit and revision notes](./consistency-and-revision.md), [reading guide to the five drafts](https://sl-knowledge.github.io/knowledge-site-en/framework/book/book-reading-guide).

## Revision note for v0.3

Adds path objects, recovery-window structure and decision vocabulary while retaining existing section numbers and diagnostic formulas. The time structure is a conditional simplified model; mechanism hypotheses still need testing. The public version label at the start now reads v0.3; the original research file keeps its separate version.

## Revision note for v0.4

Standardises execution duration, full response duration and effective margin; distinguishes the latest process start from the latest execution start. Adds a non-zero coordination-delay example, response-by-response comparison and mappings from older notation. The evidence status of general recoverability and mechanism hypotheses is unchanged.
