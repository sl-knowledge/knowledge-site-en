---
title: "From Research Cards to Drafts: Consistency Audit and Revision Notes"
description: "Records eight key conceptual corrections, the division of definitions across the five drafts, and the editing principles from cards to drafts."
author: "SL"
version: "0.2.1"
created: "2026-11-01"
updated: "2026-11-03"
published: "2026-11-01"
publish: true
kind: article
lang: en
source: framework/methods/consistency-and-revision.md
sourceUpdated: "2026-11-03"
aliases:
  - framework/consistency-and-revision
---

> **Public edition v0.2.1 · a historical editing audit and revision notes.** Organised from _Whole-Book Consistency Audit v1.0_ (2026-10-06). The original audit addressed the then-current working draft of the five-part restructuring; this article explains its problems and editing decisions. It is not a third-party consistency certification of all the public articles, and it does not prove that the theory holds.

## 1. What has to change between a research card and a draft?

The judgement of the original drafts was: the five drafts already have a common through-line, but the chapters are too fine-grained, concepts are defined several times, and symbols are mixed with knowledge levels. What has to be protected is the question and the chain of argument, not every research card or every new term.

The original audit counted 148 chapter-like units in the early material and recommended compressing them to about 50 to 55 chapters. The unified table of contents that followed used 52 chapters across five parts, and the structural merge kept the distribution of 8, 12, 10, 12 and 10 chapters. This is a change in editorial structure; it cannot be used to prove that the method works better by citing the reduced number of chapters.

The public edition keeps the same principles: delete repeated slogans, merge explanations of the same kind, put definitions back where they belong, add conditions and sources, and rewrite the notes into prose that can be read continuously.

## 2. What is each of the five parts responsible for?

| Part                                    | Main responsibility                                                                    | Interface with the other parts                                                    |
| --------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Part one: reality and dynamic systems   | Systems, states, constraints, capabilities, access, reachability and viability         | Provides the basic objects for the representations that follow                    |
| Part two: representation and testing    | Evidence, competing explanations, variable selection, prediction, failure and revision | Provides judgements and uncertainties that can enter a decision                   |
| Part three: action                      | Consequences, robustness, value of information, commitment and adaptive policy         | Turns judgements into conditional arrangements that can be executed               |
| Part four: investment applications      | The three systems of company, market and investor                                      | Applies the preceding methods and adds domain mechanisms and execution conditions |
| Part five: the human-AI research system | State, memory, versions, audits, resource allocation and governance                    | Keeps the research process running across time                                    |

Each part may give an independent reader the necessary recap, but it should not rebuild a set of mutually conflicting definitions under slightly different names.

## 3. Eight important conceptual corrections

### 1. No longer using one "boundary" for four different objects

The analysis scope, the constraint boundary, the viability boundary and the reachability frontier are not the same object. They concern a modelling choice, admissible conditions, continuing paths and the reachable set respectively. Before discussing what a boundary provides or restricts, state the object and the model.

### 2. Separating viability guarantees from open-world estimates

The existence of a control under given dynamics, the existence of a non-anticipating policy within an explicitly stated range of disturbances, and a model-conditional estimate in real research have different meanings. "There is still a way out" in a natural-language case cannot inherit the guarantee of a mathematical model.

The adaptation margin, borrowed viability and the warning gap all have to state their model, scenario and threshold. For tasks with limited resources, the endpoint of the task and the remaining horizon have to be stated as well.

### 3. Turning "keep / drop" into three-tier variable management

A variable that looks irrelevant in the current sample may become critical under a different institution, in tail risk or in a different environment. An ablation comparison supports the current trade-off; it does not prove permanent irrelevance.

The three tiers of core, monitor and archive are therefore adopted, with the escalation conditions and the traceability clues retained. This is a contraction of an over-strong necessary-and-sufficient claim, not the addition of a new universal law.

### 4. Separating representation failure from the evidence that reveals it

Specification miss, later structural drift and task mismatch answer "why does the representation not apply"; anomalous responses and prediction deviations answer "why suspect it". When new evidence reveals an old error, the time the evidence appeared must not be mistaken for the time the structure changed.

### 5. Avoiding double counting when comparing commitment with waiting

If the value of a waiting policy already includes information obtained later and conditional choice, the value of the same option cannot be added again. Committing now and the best feasible waiting policy should be compared under unified cost, horizon and risk conditions.

The marginal prompting of the old drafts can only help raise questions; it cannot replace a consistent valuation model and a feasibility judgement.

### 6. An action structure is not a psychological risk preference

When resources are close to exhaustion, some high-variance actions may become more attractive under a specific objective. That does not automatically say that a person's psychological preference has changed, and it certainly does not guarantee that such an action is optimal. Describe the state, the objective, the available actions and the losses first, and only then discuss behavioural explanations.

### 7. Replacing the "soft constraint" of a specific context with delayed feedback

What the original drafts actually discuss is the consequences of a constraint being buffered or temporarily not showing up, so the terms "delayed constraint feedback" or "buffered constraint feedback" are adopted. This does not deny the formal use of soft constraints in other fields, and it does not treat the relief of a constraint as the disappearance of the constraint.

### 8. Distinguishing meta-control from research governance

Meta-control at the decision layer involves changing later constraints, interfaces or the space of action. In a human-AI system, where the human is responsible for goals, risk and stopping rules, the role is called the research governor. The two can be connected, but they should not be merged into one mechanism by using one word for both.

## 4. How are the five groups of duplicated content handled?

| Duplicated theme                             | Where the definition lives                                                 | How the other parts use it                                                                 |
| -------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Viability, adaptation margin and warning gap | Part one                                                                   | Part two discusses how to estimate them, part three how to act on them                     |
| Robust decision-making                       | Part three                                                                 | Part two supplies the models, scenarios and evaluation objects it needs                    |
| Prediction ledger and minimal revision       | Part two                                                                   | Part five discusses storage, versions and the running implementation                       |
| Human-AI roles and memory governance         | Part five                                                                  | The other parts keep the necessary execution interfaces                                    |
| Theory retrieval and cross-domain transfer   | Part two states the conditions of knowing, part five the operating process | Mapping hypotheses, target-domain evidence and implementation mechanisms are kept distinct |

This is an editorial division of labour. Independent web pages may still contain a short recap for readability; the point is to link back to the definitions and to say whether there is a version difference.

## 5. Working diagnostics must not masquerade as mathematical truth

Borrowed viability has to be analysed under comparable model conditions. External financing may widen the space of action and also add repayment obligations; so the containment claim that "external access always widens the viability set" does not hold unconditionally.

The danger point of a warning gap usually cannot be observed directly, and it depends on the model and the threshold. What is genuinely useful also includes detection latency and execution time, not only the difference between two ex post points.

Several outcome paths have to be checked for common causes, probability and payoff; fatal failure modes have to be checked for severity and irreversibility. Stacking paths by number is not the same as forming diversification and robustness.

## 6. Unifying symbols and the standing of knowledge

State, environment, evidence, transition relations, value and the survival set should as far as possible avoid reusing the same letter. When citing another theory, state the symbol mapping; the meaning of the source must not be changed for the sake of internal tidiness.

Important claims distinguish established research, synthesised architecture, working diagnostics and research questions. The unified specification is in the [vocabulary and symbol table](./canonical-vocabulary.md). The definitions of adjacent research and this book's applied interpretation have to be separated by citation and by conditions.

## 7. Editing rules from card to argument

A chapter should let the reader see the real problem, a continuous line of reasoning, the core concepts, a counterexample or the conditions of applicability, and the effect on later questions. Short sentences and formulas can help compress, but they cannot replace the argument.

The original audit estimated that a large amount of repeated slogans could be deleted. That was an editorial expectation, not a quantified deletion statistic already completed for this public edition. A formula is kept only when it removes ambiguity, supports a derivation or enables a test.

## 8. The order of revision and the current public state

The suggested order is: unify the vocabulary → merge the structure → correct the concepts → place the definitions → add the sources → rewrite the prose. In practice the maintenance can alternate, but each round should record the reason for the change.

The site now has public editions of the body of the five drafts, and this round added the overall architecture, the canonical vocabulary, the validation plan and the reading guide. The public editions absorb the editing decisions above, but it cannot be claimed on that basis that every text has completed a line-by-line, independent consistency audit.

The priorities for continued checking are: whether each core definition can be traced to a source and its conditions of application, whether the working diagnostics can be operationalised, whether every claim of effect corresponds to public evidence, and whether a reader can tell the historical revisions from the current position.

## 9. What does this round of intellectual development leave behind?

A move from broad constraint-and-freedom language towards task-relevant representation discovery, failure diagnosis and revision; from a large number of new terms towards the combination of existing methods and their conditions of application; from explaining the past towards a research plan that is willing to be frozen, compared and overturned.

These are changes in research positioning and in writing discipline. Their actual effect is judged by the comparisons proposed in the [independent validation plan](./originality-and-validation.md).

Companion reading: [the overall architecture](./research-architecture.md), [the canonical vocabulary](./canonical-vocabulary.md), [reading guide to the five drafts and fifty-two chapters](https://sl-knowledge.github.io/knowledge-site/framework/book/book-reading-guide).
