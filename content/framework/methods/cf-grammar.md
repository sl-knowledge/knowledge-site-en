---
title: "CF Grammar: From Constraint Diagnosis to a Testable Research Representation"
description: "Organises diagnosis around system, target, environment and horizon, separates enables, constrains, buffers and substitutes, and returns mechanism hypotheses to the evidence-and-revision loop."
author: SL
version: "0.1.1"
created: "2026-11-01"
updated: "2026-11-08"
published: "2026-11-01"
publish: true
kind: article
lang: en
source: framework/methods/cf-grammar.md
sourceUpdated: "2026-11-08"
---

## 1. What is CF Grammar trying to help us do?

Studying a company, a factory or one person's plan usually yields a long list of factors: technology, capital, resources, authority, organisation, time and external change. The difficulty is not only that the material is insufficient. It is also not knowing which factors actually change the answer to the current question.

CF Grammar provides a set of diagnostic questions: whose action are we analysing? What outcome do we want to reach? By when? What provides support, what limits action, what temporarily absorbs a shock, and what can substitute? When these relations change, which paths appear and which disappear?

Its use is to organise scattered facts into a candidate representation that can be inspected, helping to choose the next professional model, observation or experiment. Labelling a factor as a "constraint" does not complete causal identification; a diagram of relations cannot substitute for engineering calculation, financial analysis, institutional study or behavioural evidence.

The original v0.3 positioned itself as a diagnostic overlay on top of domain semantics. The later [overall architecture](./research-architecture.md) positions it more precisely as a **Diagnostic Scaffold, that is, the diagnostic scaffold for discovering candidate representations**. It helps to raise and organise hypotheses, which are then tested by applicable domain knowledge, mature methods and feedback from reality.

## 2. Every judgement needs a system, a target, an environment and a horizon

The sentence "money is the constraint" is not yet complete. For whom? How much, and by when? Is the goal uninterrupted supply, higher output, or lower cost? Has the funding already been committed, can it be disbursed, and will it arrive in time?

An analysis should state at least four conditions:

| Condition      | What it has to answer                                                            | Teaching example                                                                               |
| -------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| System         | Whose action and state are under analysis?                                       | A factory                                                                                      |
| Target Profile | What must be satisfied, and what is only hoped for or an optimisation direction? | Keep the specified production task running for the next 30 days; control costs subject to that |
| Environment    | Which supplies, rules, resources and other systems are relevant?                 | The original supplier stops delivery; an alternative supplier still needs certification        |
| Horizon        | When does the judgement apply, and how long does the action need to take effect? | Existing inventory and the time certification takes                                            |

A target does not have to be forced into a single total score. Safety conditions, delivery thresholds and cost optimisation can play different roles; some targets may be temporarily incomparable, and that is itself a result worth recording.

The same factor can play a different role under a different horizon or environment. An alternative supplier may be available in a six-month plan and still be too late for next week's inventory gap. More time does not automatically mean more options either, because resources may run down, competition may change, or the conditions may be withdrawn while you wait.

## 3. Four kinds of relation, and what they do not prove

v0.3 keeps the set of relation families small. The sentence patterns below are diagnostic entry points; in use they still have to be completed with target, dimension, situation and evidence.

| Relation        | Working meaning                                                                           | What has to be checked further                                                         |
| --------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| enables         | A condition makes an outcome-relevant capability or result more likely to be realised     | To what degree, and are there other necessary conditions?                              |
| constrains      | A condition limits the states, actions or transitions that are permitted                  | Is it hard infeasibility, an unmet threshold, or a poor cost performance?              |
| buffers         | Temporarily absorbs, delays or weakens a disturbance, helping to keep the target feasible | How much buffer is left, how fast is it consumed, and in which scenarios does it fail? |
| substitutes_for | Provides an adequate substitute on a specified function and dimension                     | Is it available in time, and at what cost, dependency and side effects?                |

Inventory can buffer a supply stoppage, but inventory does not restore supply. An alternative route may substitute for the original route and still fail the same requirements on speed or cost. "Buffer" and "substitute" therefore cannot be used interchangeably just because the result has not visibly deteriorated.

A relation also has to be distinguished from a state. "Supply limits production" is a relational judgement; "it is the current binding constraint" goes further, claiming that this limit is materially constraining the reachable or sustainable paths that matter for the target. Not all unfavourable factors carry the same standing.

A useful counterfactual question is this: holding the other conditions explicitly fixed, and allowing which accompanying changes, would relieving this factor change the feasible paths or the decision? If several constraints work together, relaxing one of them alone may show no improvement, and it cannot be concluded from that that it is irrelevant.

A "dominant constraint" should be a conditional diagnostic conclusion. When different constraints bear on different targets, parallel, joint or incomparable judgements can be kept; there is no need to invent a unified strength score in order to obtain a ranking.

## 4. Does having capability mean you can use it now?

Existence of a resource, the ability to obtain it, having control or authorisation over it, and being able to put it into use in time are four different conditions. CF uses **Operational Actionability** to remind the researcher to check each difference in turn.

An alternative production line may be technically feasible and still be limited by equipment, certification, personnel, authority and construction lead time. Its presence on a list of options does not mean it can address the risk inside the deadline in front of you.

In the later [canonical vocabulary](./canonical-vocabulary.md), Capability emphasises the capability a system can fairly reliably call on itself; Access emphasises resources or channels that come from outside, are currently callable, and are not fully under the system's own control. External support may stay stable for a long time and internal capability may decay; what matters is to state actual control, dependency and withdrawal conditions clearly.

This is also why "freedom" has to be unpacked in a technical analysis:

- **Reachability:** under the specified conditions and horizon, which states can be reached?
- **Survivable options:** after reaching them, is there still a continuing path that satisfies the constraints?
- **Adaptability:** after the environment changes, can the system adjust, substitute or reconstruct in time?

There can be many options on the surface and still miss the deadline; it is possible to reach a state and not be able to continue there. This article keeps "freedom" as a natural-language upper term, and a concrete study should state which kind of question is being discussed, along with the model, the scenario and the unknown conditions.

## 5. How should a diagnostic claim be written so that it can be questioned?

The important design in v0.3 is to organise judgements as contextualised claims, rather than as a single arrow between two nouns. Below is a human-readable example for use in research records. It is not a published software field standard, and it is not real company data.

```yaml
claimId: factory-supply-01
system: teaching-factory-A
target:
  mustSatisfy: maintain the specified production task for the next 30 days
  optimisationDirection: control cost subject to that
environment: the original supplier stops delivery; an alternative supplier still needs certification
horizon: 30 days
relation: constrains
sourceFactor: the conditions for continued supply of a critical material
affectedObject: the capability to maintain the production task
diagnosticStatus: candidate binding constraint
mechanismHypothesis: current inventory cannot cover the stoppage period, and no timely substitute is available
evidenceToCheck:
  - inventory, consumption rate and required material specifications
  - time to restore supply and its uncertainty
  - alternative certification, capacity, transport and authorisation conditions
revisionTriggers:
  - sufficient and timely substitute material is obtained
  - another factor is found to limit the production task first
recordNature: teaching example, unvalidated
```

This record separates "what we are claiming" from "what evidence we hold". A complete set of fields can still support a wrong mechanism; and a high confidence label does not turn a relation into a causal relation automatically.

If new information merely lowers the inventory estimate, update the evidence and the parameters. If the material turns out not to be short at all and the stoppage actually comes from an equipment failure, the mechanism and the representation have to be revised. The value of the record is that modification leaves a trace, not that a judgement looks official.

## 6. From diagnosis towards prediction: what happens first

The prediction-layer notes take the question further: the current constraint may be answered by buffering, relief, substitution or reconstruction; which mechanisms are actually available, when do they take effect, and can the target be maintained in the meantime? If it works, what should change first, and where might the next constraint appear?

Take the teaching factory. Suppose that at the current consumption rate the inventory covers about ten days, while certification and delivery of the alternative material are estimated to take seven days. This gives a candidate path worth checking, but it does not establish that "the stoppage can be safely weathered". Certification failure risk, supply quantity, specifications, transport, continued supply afterwards, and the error in the inventory estimate still have to be checked.

If the time a mechanism needs exceeds the time the buffer remains, the current path has an obvious time gap. In the other direction, making it in time does not guarantee that the force and the durability are sufficient. "Adaptation time is shorter than the buffer horizon" is therefore a checking lead, not a universal law of success.

A more checkable forward-looking record states the conditions and the deadlines in advance: certification first, then a valid order and delivery of qualified material, then observation of whether supply is enough to maintain production. If certification completes and there is no stable delivery, "the process moved forward" cannot be treated as the goal being achieved.

After supply is restored, machine capacity may become the new limit, but that is a candidate path of constraint migration and still has to be separated with evidence about orders, working hours, downtime and output. The original prediction notes explicitly list the ordering of mechanism choice and the predictive advantage of constraint migration as questions awaiting validation, and this article keeps that research status.

## 7. How does CF return to the full research loop?

CF only carries part of the work. The full process also needs to build competing representations from evidence, select applicable methods, form conditional expectations, and then revise in response to feedback.

```text
clarify the real problem, the target and the horizon
  → obtain and cross-check domain evidence
  → use CF questions to organise candidate relations and mechanisms
  → keep the core differences that could change the judgement, while monitoring important unknowns
  → compare competing explanations and call on applicable domain models
  → record the conditions, the prediction, the leading observations and the failure criteria
  → observe reality, locate the deviation, revise the representation
```

Sometimes a prediction fails because a variable was missed or a mechanism was judged wrongly; sometimes because the environment and the structure changed; and sometimes the model did not change at all, but was used to answer a question with a different target or horizon. The later drafts group these questions under representation discovery and representation failure, which cannot be answered by continually adding new labels to the original diagram.

Variable management also needs a hierarchy. What is known to affect the target judgement enters the core; what may matter but lacks evidence continues to be monitored; the rest can be archived. Not being in the model today does not mean it will never matter.

For the concrete methods, continue with [how do we know what belongs in a model](https://sl-knowledge.github.io/knowledge-site-en/framework/book/what-belongs-in-a-model) and [acting in an uncertain world](https://sl-knowledge.github.io/knowledge-site-en/framework/book/acting-under-uncertainty).

## 8. A one-page checklist and the boundary of validation

In real research, you can start by answering seven questions and then expand as needed:

1. Whose action is under analysis, in what environment, and which conditions have to be met by when?
2. Which items are states, outputs, internal capabilities, external channels and mechanism hypotheses?
3. Which conditions support, constrain, buffer or substitute the capabilities that matter for the target?
4. Do the candidate actions have the resources, authority, dependencies and conditions for taking effect in time?
5. Which limit is changing the reachable or sustainable paths, and what is the counterfactual basis?
6. If the response works, what should be seen first; what evidence would make us revise the explanation?
7. Which unknowns stay under monitoring, and which next observation best separates the competing explanations?

This is a synthesised working checklist. Whether it reduces omissions, improves prediction or saves research cost has to be compared with an ordinary summary, with traditional checklists and with applicable mature methods. Being able to account for many retrospective cases is not enough to demonstrate prospective value; and reusing terminology across fields is not enough to show that a mechanism transfers directly.

What should be published is a research tool that is understandable, reviewable and able to accept failure. This article does not treat small teaching examples as empirical results, and it does not promote the prediction layer to a validated law. The testing arrangements are described in [originality self-check and independent validation plan](./originality-and-validation.md).

## Version and sources

The public version of this article is **v0.1**. It synthesises the following research materials without merging their different version numbers into an invented CF Grammar v1.0:

- **Constraint–Freedom Grammar v0.3:** an independent grammar experiment draft, preserving the design of contextualised claims, four relation families, operational actionability and dynamic modes.
- **Prediction Layer Notes v0.1:** prediction research notes, still keeping an independent validation threshold.
- **Theory Architecture v1.0, Canonical Vocabulary & Notation v1.0 (2026-10-06):** align the responsibilities of CF and revise the terminology. The public counterparts are the [overall architecture](./research-architecture.md) and the [canonical vocabulary](./canonical-vocabulary.md).
- **Human-AI Joint Cognitive Research Charter v1.1 (2026-10-09):** takes high-fidelity cognitive compression, knowledge leverage and calibratable intuition as the project purpose; CF is one tool within it that can be tested and replaced.

This edition tightened the statements about freedom, constraint and predictive advantage, and added joint constraints, time conditions and one teaching-factory example. The original draft is kept; this article is a method guide that can be read on its own, not a verbatim translation of the original English grammar draft nor a complete machine specification.

Related reading: [research methods and standards](./index.md), [reading guide to the five drafts](https://sl-knowledge.github.io/knowledge-site-en/framework/book/book-reading-guide), [systems, life and values](https://sl-knowledge.github.io/knowledge-site-en/framework/foundations/).

---

<a id="research-notes"></a>

## Research and version notes

> **Public edition v0.1 · a method guide and working diagnostic framework.** It draws on Constraint–Freedom Grammar v0.3, the prediction-layer notes v0.1, and the later overall architecture, canonical vocabulary and research charter. Here CF stands for Constraint–Freedom. This article aligns with the later conceptual revisions; its public version number is recorded separately from the original grammar draft. It does not announce a new stable grammar standard, and it does not mean that the predictive extension has been validated.
