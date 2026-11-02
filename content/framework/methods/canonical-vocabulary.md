---
title: "Canonical Vocabulary, Symbols and Knowledge Levels"
description: "Places the definitions of state, constraint, reachability, representation failure and research governance in one reference specification."
author: "SL"
version: "0.2"
created: "2026-11-01"
updated: "2026-11-02"
published: "2026-11-01"
publish: true
kind: article
lang: en
source: framework/methods/canonical-vocabulary.md
sourceUpdated: "2026-11-01"
aliases:
  - framework/canonical-vocabulary
---

> **Public edition v0.1 · the internal terminology specification of this body of work.** Organised from _Canonical Vocabulary & Notation v1.0_ (2026-10-06). "Canonical" here applies to this book and its public editions; it does not mean that every research field uses the same terms, and it does not mean that a working definition has become a standard in the literature.

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
| Raw evidence                | \(\mathcal D_t\)                             | Observations and records; not mixed with environmental notation                               |
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

Failure signals include persistent residuals, anomalous responses, degraded calibration and newly appearing important differences. Failure causes fall into specification miss, structural drift and task mismatch. New evidence may reveal an error that was already there; it is not the evidence itself that changed the structure of reality.

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

\[
\widehat m_\tau=\widehat\tau_{\mathrm{survive}}-\widehat\tau_{\mathrm{adapt}}.
\]

It compares the estimated support time with the adaptation time under a given policy, model and scenario. A positive value does not guarantee success; a negative value indicates that the described path may not arrive in time. The time estimates themselves need intervals and dependency conditions.

### Borrowed viability

Compares which states or paths are sustainable when external access is allowed with the ones that survive on defined internal capability alone. The model conditions have to stay comparable, and it has to be recorded whether the external access adds debt, dependency or risk; it cannot be assumed that the two feasible sets are necessarily nested.

### Warning gap

\[
\widehat G_W=\widehat t_F-\widehat t_V.
\]

These are respectively the estimated point at which the surface behaviour crosses the failure threshold, and the estimated point at which recovery capability enters the preset danger zone. The result depends on the model, the scenario and the threshold; the time needed for detection, decision and execution also has to be deducted before any real action window can be discussed.

## 9. Vocabulary for decision policy

| Term                        | Use in this book                                                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Robustness                  | Facing a stated set of credible scenarios, avoiding performance that depends excessively on narrow assumptions; not success in any world      |
| No-Ruin                     | Treating separately the failure modes that could destroy continuing learning, performance and action capability; not a guarantee of zero loss |
| Optionality                 | The value of keeping conditional action available while uncertainty is unresolved; having more options can also raise cost                    |
| Reversibility               | Distinguished as withdrawable, costly to withdraw and in fact irreversible, with the resources and time stated                                |
| Commitment                  | Comparing a commitment now against the best feasible waiting policy under jointly evaluated conditions                                        |
| Forced lock-in              | The absence of a sustainable alternative path; different from a deliberate concentration of resources                                         |
| Adaptive policy             | Initial action, ex ante observation conditions, conditional actions, and exit or revision rules                                               |
| Signpost                    | An ex ante specified observable condition that can trigger a policy update                                                                    |
| Delayed constraint feedback | The performance of a constraint is buffered or delayed; this does not mean the constraint has disappeared for good                            |
| Meta-control                | The ability, in a concrete decision context, to change later constraints, interfaces or the space of action                                   |

If the value of waiting already includes future information and conditional choice, the same option cannot be added a second time. Comparing actions also requires a common basis for cost, risk, discounting and feasibility.

High-variance action near failure does not by itself prove that a person's psychological risk preference has changed. Describe the objective, the available actions and the structure of consequences first, and only then discuss whether a psychological explanation is needed.

Outcome path diversity looks at probability, payoff and dependency; fatal mode exposure looks at severity, common causes, irreversibility and probability. Writing more related stories does not produce genuinely independent outcome paths.

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

A differential approximation of the return on new capital has to take capital formation, accounting conventions and time lags into account. Marginal purchasing power, narrative stage and market life cycle are representations still to be operationalised; they are not multiplicative laws for price prediction. Portfolio viability, on the other hand, concerns whether performance can continue and be adjusted under capital and liquidity shocks, and is not the same as low volatility.

For the concrete treatment and the sources of the financial concepts, see [the three systems of investment](https://sl-knowledge.github.io/knowledge-site/framework/book/investment-three-systems).

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
| Explaining everything with the outcome | Keep ex ante judgements, competing explanations and revision records |

Plain language comes first; English terms are used to keep the correspondence between concepts; formulas appear only when they remove ambiguity, support a derivation or operationalise something. This public edition is numbered separately from the original terminology file; a substantive change to a definition or a symbol should raise the version and record the reason, while examples and wording are maintained under the public version rules.

Companion reading: [the overall architecture](./research-architecture.md), [consistency audit and revision notes](./consistency-and-revision.md), [reading guide to the five drafts](https://sl-knowledge.github.io/knowledge-site/framework/book/book-reading-guide).
