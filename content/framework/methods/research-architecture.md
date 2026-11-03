---
title: "The Overall Architecture of Open-World Research: Representation, Reasoning, Action and Revision"
description: "Starts from two core research questions and explains the full loop of representation discovery, existing methods, feedback diagnosis and human-AI execution."
author: "SL"
version: "0.1.1"
created: "2026-11-01"
updated: "2026-11-03"
published: "2026-11-01"
publish: true
kind: article
lang: en
source: framework/methods/research-architecture.md
sourceUpdated: "2026-11-03"
aliases:
  - framework/research-architecture
---

> **Public edition v0.1.1 · a synthesised research architecture.** Organised from _Theory Architecture v1.0_ (2026-10-06), and adopting the corrections in the canonical vocabulary and the consistency audit of the same day. This article describes the research process that is intended to be used and the questions that remain to be tested; it does not report that its effects have been empirically confirmed.

## 1. From "one unified explanation of the world" to two concrete questions

The research at this stage narrows to two questions. First, faced with the messy evidence of an open world, how do you find a representation good enough to support the current prediction and decision? Second, once feedback from reality has arrived, how do you judge that the representation is no longer good enough, and restore its applicability with the structural changes that are necessary?

"Representation" here means the variables, relations, mechanism hypotheses, constraints and uncertainties chosen for the question. It is not reality itself, and it should not be treated as complete only once all information has been collected. A model suited to judging ten years of business change is not thereby suited to judging five days of price.

The original drafts record the two research questions as R1 and R2:

| Question                                               | Research object                                                                    | The result that has to be left behind                                                             |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| R1: discover a representation relevant to the decision | Under a target and a horizon, filter the important differences out of raw evidence | Candidate variables, competing explanations, the basis of the trade-offs and testable predictions |
| R2: identify failure and revise the representation     | Find omissions, structural change or the misuse of a task                          | Failure signals, a judgement of the cause, a revision record and the subsequent tests             |

R1 and R2 are this book's research labels. They are not proven theorems, and they are not claims of originality in these broad fields. Related prior work, the boundaries of the methods and the validation requirements should be discussed separately.

## 2. The overall loop: the representation itself is subject to test

The whole process is: evidence from reality → build a representation → reason with appropriate methods → form predictions and an action policy → observe feedback → diagnose the error → revise the representation.

Every step has to leave something that can be looked back at. Evidence has to be traceable, predictions have to be settleable, the action policy has to state its conditions, and a revision has to record the difference before and after. Otherwise a loop that looks complete may only be a rewriting of the explanation after the result has happened.

A wrong prediction does not automatically mean a wrong representation. Random outcomes, parameter estimates, execution conditions, policy design and the structure of the representation can all contribute error; these causes can interact with one another, and they cannot simply be added up into an undefined error identity.

## 3. The reality layer: the formal problem is not given

Research input is usually language, records, financial statements, behaviour, news, expert judgement, and information that conflicts or is missing. The system boundary, the state variables and the available actions often have to be chosen by the analyst first.

For problems that are partially observable, non-stationary and involve feedback, the researcher should state which conditions can be modelled and which can only be kept as scenarios or unknowns. Not every task needs a complex dynamical model; whether a layer is added should be decided by what the problem needs.

The first part of this book provides the [vocabulary of systems, constraints and feasibility](https://sl-knowledge.github.io/knowledge-site-en/framework/book/constraints-and-future-options). These words help raise the question, but they cannot replace data, domain knowledge or an executable measurement definition.

## 4. The representation-discovery layer: from a questioning scaffold to candidate models

First fix the target, the horizon and the context, then examine separately the current state, the environment, the constraints, internal capabilities, external access, actions, mechanism hypotheses and the unknowns. The CF language of the original drafts is positioned here as a questioning scaffold, not as a new formal theory.

The purpose of the questions is to prevent treating an output as a mechanism, treating a temporarily callable external resource as a permanent internal capability, or treating an attractive story as the only explanation. A candidate representation still has to be compared with compatible alternative explanations.

Variables are managed in three tiers. The core tier holds the objects for which there is currently reason to believe they change the prediction, the feasibility or the decision. The monitor tier keeps the objects that may become important after the environment changes. The archive tier retains information that does not enter the reasoning now but is needed for traceability. An ablation comparison that removes a variable is one piece of evidence, not proof that the variable is useless in every future.

"Sufficient to support a decision" also has to be operationalised: which task it supports, how much error is allowed, at what cost and information budget, and against which baseline. It cannot rest on the analyst's own feeling that the model is now good enough.

## 5. The reasoning layer: call on existing methods, and keep their conditions of application

| Method tradition                            | The question it may help answer                                            | The conditions that cannot be omitted                                             |
| ------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| State abstraction                           | Which reward, transition or decision properties survive the compression?   | The formal environment, the abstract relations and the corresponding guarantees   |
| Causal inference and causal representation  | Which variables and mechanisms support an interpretation of interventions? | Identification assumptions, data conditions and competing structures              |
| System identification and experiment design | Which inputs or observations can distinguish candidate mechanisms?         | Intervenability, noise, excitation and model identifiability                      |
| Reachability and viability                  | Which states can be reached or maintained under the given constraints?     | Dynamics, control capability, the horizon and the disturbance assumptions         |
| Structural mapping                          | Which cross-domain relations may correspond?                               | The preservation conditions in the target domain and independent evidence         |
| Robust decision-making                      | Which credible scenarios would invalidate the policy?                      | The range of scenarios, the evaluation criterion, the policy and the update rules |

[Li, Walsh and Littman's work on state abstraction](https://thomasjwalsh.net/pub/aima06Towards.pdf), [Schölkopf and colleagues on causal representation](https://arxiv.org/abs/2102.11107), [research on structural mapping](https://qrg.northwestern.edu/ideas/smeidea.htm) and [RAND's approach to robust long-term decisions](https://www.rand.org/pubs/monograph_reports/MR1626.html) provide the relevant foundations respectively. Putting methods into one process does not mean that their guarantees can be added together or transferred automatically across tasks.

For markets, political questions or historical problems where active experiments are impossible, one can look for ex ante defined observation windows and natural events; confounding, selection bias and data limitations must be preserved. An analogy can generate a hypothesis; evidence in the target domain is what tests it.

## 6. The prediction and decision layer: make judgements settleable and actions adjustable

A prediction should state the event, the deadline, the settlement source, the probability and the update time. Reference classes and base rates can constrain an individual story, and scoring helps to check long-run performance. [How do we know what belongs in a model](https://sl-knowledge.github.io/knowledge-site-en/framework/book/what-belongs-in-a-model) develops this discipline of evidence and prediction.

Probability alone is not enough to decide an action. Consequences, who bears the risk, resource obligations, reversibility and recovery time are also needed. Depending on the task, expected utility, robustness or constraint-satisfying policies can be compared; no criterion can be declared universally suitable in advance.

The output of an action should include the initial action, the observation conditions, the follow-up actions and the exit or revision rules. [Acting in an uncertain world](https://sl-knowledge.github.io/knowledge-site-en/framework/book/acting-under-uncertainty) discusses this layer of policy design.

## 7. The feedback and failure layer: separate the signal from the cause

Persistent residuals, anomalous responses, degraded calibration or a newly appearing variable are signals that need investigation. They are not the structural causes of representation failure.

The later canonical specification divides representation failure into three kinds:

| Category           | Meaning                                                                                                | What to keep asking                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Specification miss | An important variable, mechanism or scope was left out from the start                                  | Why was it not noticed then, and what evidence would reveal it?               |
| Structural drift   | Relations, institutions or constraints changed, so something that may once have applied no longer does | When did the change happen, and which predictions and actions does it affect? |
| Task mismatch      | The representation is used for a different target or horizon                                           | Should the question change, or should another representation be built?        |

The five concrete manifestations of the original architecture can be placed inside these three upper-level categories; there is no need for a second competing taxonomy. Several causes may also hold at once, and the uncertain judgement should be preserved.

## 8. Representational fragility and policy fragility

Policy fragility asks: which scenarios would make the current action policy fail to meet the evaluation criterion? Representational fragility asks: under which world conditions or task changes does the current representation lose enough judgement capacity?

The former can occur even when the model is correct, for instance when a known resource-tightening scenario defeats an expansion strategy; the latter can already exist while short-term results still look fine, for instance when the model misses the conditions that determine later cash obligations.

"Representational fragility" is a working definition and a research question here. The world conditions that invalidate a model and the evidence that reveals the invalidation have to be recorded separately.

## 9. Minimal revision: locate first, then compare the changes

The available operations include updating parameters, reallocating variable weights, replacing mechanisms, adding or removing variables, splitting or merging objects, changing the analysis scope, adjusting the horizon, and modifying the constraint or uncertainty sets.

"Minimal" means minimal relative to cost, complexity and task performance; it is not a matter of counting how many variables were added. Restoring in-sample explanatory power is not enough either: a revision should face new observations or a held-out test set.

Starting from small changes is a research discipline, and it must not become an excuse to refuse a structural rebuild. If domain knowledge or a counterexample already shows that the original structure does not apply, the revision should be upgraded in time. Each revision keeps the old version, the triggering evidence, the expected improvement and the test result.

## 10. Where the three working diagnostics sit

The adaptation time margin compares how long resources can still support the task with how long the adjustment takes; the borrowed viability diagnosis compares the continuing paths under different access conditions; the warning gap compares the estimated danger point with the point at which the surface behaviour crosses the failure threshold.

All three objects depend on the model, the scenario and the threshold. They help to arrange an investigation; they are not directly observable general truths. External resources may also bring new obligations, and it cannot be assumed that they only widen the feasible space. For definitions and symbols, see the [canonical vocabulary](./canonical-vocabulary.md).

## 11. The human-AI execution architecture and domain application

The human is responsible for goals, values, acceptable risk, commitments, stopping rules and revision decisions; the AI assists retrieval, evidence organisation, candidate representations, competing hypotheses, counter-evidence search and revision proposals. The later specification calls the first role the "research governor", to avoid mixing it with the meta-control of the decision layer that "changes the space of action".

The [human-AI research system](https://sl-knowledge.github.io/knowledge-site-en/framework/book/human-ai-research-system) is what keeps versions, evidence and predictions running across time. Investment is one of its application domains, and [the three systems of company, market and investor](https://sl-knowledge.github.io/knowledge-site-en/framework/book/investment-three-systems) each need their own goals, horizon and evidence. A successful explanation in one domain does not directly prove that a general architecture works.

## 12. What counts as progress in research?

The dimensions to compare are: representation efficiency under equal resources, predictive performance on independent samples, the timeliness and false-positive rate of failure detection, the recovery effect after a revision, and replication across domains. Every improvement has to be reported together with its cost, its failure category and its uncertainty.

What is retained at present is a synthesised architecture and two questions for research. The next work should prioritise reproducible comparisons rather than adding more terminology. For the concrete plan, see the [originality and independent validation plan](./originality-and-validation.md); for the body of the five drafts, see the [reading guide](https://sl-knowledge.github.io/knowledge-site-en/framework/book/book-reading-guide).
