---
title: "Stress Testing: Constraint Identification, Feedback and Recovery Windows"
description: "ST1–ST12 organise checks of constraints, feedback, recovery windows and common failure, separating scenario diagnosis, mechanism hypotheses and empirical validation."
author: SL
version: "0.2.1"
created: "2026-11-02"
updated: "2026-11-03"
status: "Public research draft · working methodological framework"
published: "2026-11-02"
publish: true
kind: article
lang: en
language: en
source: framework/methods/stress-testing.md
sourceUpdated: "2026-11-03"
aliases:
  - framework/stress-testing
---

> **Public edition v0.2 · a working methodological framework.** This draft aligns material from the original methodology v0.1–v0.4 with terminology revisions in the later book drafts and time definitions in recent applications, providing a reference for future citation. ST1–ST12 are stable cross-article references that organise research questions, not twelve independently validated theorems. This draft has not undertaken a systematic external literature review; its incremental value still requires comparison with established analytical methods.

## The core in one sentence

**Under explicit objectives, constraints and horizons, change critical conditions and compare how the system and its response paths change: what fails first, whether recovery is timely, whether responses create the next round of pressure, and which observations distinguish competing explanations.**

Stress testing serves two purposes: examining the scenarios an arrangement can withstand, and seeking responses that distinguish mechanism hypotheses. The first yields conditional diagnosis; the second still requires identification and validation.

## Three connected groups of tests

| Test | Question | Focus |
| --- | --- | --- |
| Exogenous-condition test | When external conditions change, where does the system become constrained first? | Channel closure, buffer consumption, alternatives and recovery deadlines |
| Endogenous-feedback test | How do other actors and the environment respond after the system acts? | Counteraction, imitation, competition for shared resources, cost transfers and cross-level propagation |
| Commitment-and-path test | After a path is adopted, how do future alternatives change? | Capability formation, specific investment, staff loss, exit and correction interfaces |

This working classification permits overlap. Commitment tests may include exogenous shocks and endogenous feedback; these are not mutually exclusive or exhaustive categories.

## Twelve principles for citation

<a id="st1"></a>

### ST1. Define the object, constraints and failure first

State the system boundary, objective, constraint set $K$, observation horizon $H$, permissible temporary losses and recovery criteria before each test. Current performance crossing a threshold differs from losing recovery paths. Objectives and value premises must be explicit: failure analysis cannot derive all priorities automatically.

<a id="st2"></a>

### ST2. Pressure is a structured scenario

A scenario should specify at least what changes, its intensity, duration, rate, timing and jointly changing factors. Abrupt channel interruption, gradual price increases and an industry-wide shortage are different tests. Severe scenarios can examine tolerable ranges, but severity cannot directly be interpreted as probability. The scenario range needs justification.

<a id="st3"></a>

### ST3. Select observations that distinguish explanations

First state what at least two candidate explanations predict, then select scenarios or observations to which they respond differently. Greater pressure does not guarantee more information: noise, simultaneously binding constraints, sample attrition and behavioural feedback can obstruct identification. Routine disclosures, natural events or smaller perturbations may be more discriminating.

<a id="st4"></a>

### ST4. Failure order is conditional

“What breaks first” depends on the scenario, initial state, thresholds, available controls and timescale. The first symptom need not be the root cause or establish a universal constraint ranking. To assess a candidate binding constraint, compare whether relaxing it changes the result and examine joint constraints, reverse causality and alternative explanations.

<a id="st5"></a>

### ST5. Examine alternatives after external support is withdrawn

A resource or service being available now does not imply functionality can be maintained after it changes. For critical channels, record who controls them, how they can close, how long buffers last, what can replace them and what switching costs. Effective external collaboration can be robust; internal production can also concentrate risk. Ownership or provenance is no substitute for testing.

<a id="st6"></a>

### ST6. Responses must also be tested

More inventory may tie up cash, price increases may change customer behaviour, and switching supply may provoke another party's response. Tests should include “initial shock → own action → other actors' and environmental feedback → new constraints”, checking whether a local improvement transfers cost to another unit, other parties or a later stage. These are paths to examine, not inevitable outcomes.

<a id="st7"></a>

### ST7. Recheck fallback paths throughout commitment

Test recovery capability at stages such as pilot, expansion and deep integration. Higher normal efficiency may coexist with specialised modifications, lost knowledge or closed interfaces that lengthen recovery. Examine whether the parties understand and have chosen those costs. Fewer options alone do not establish forced lock-in; voluntary commitment can create new capabilities.

<a id="st8"></a>

### ST8. Examine whether an effective response can finish before the window closes

A plan's existence, executability, effectiveness, affordability and timely completion require separate checks. Record consistently: detection time \(t_D\), completion deadline \(D\), pre-execution delay \(\ell\), and execution duration \(\tau_{\mathrm{exec}}\). Full response duration is \(\tau_{\mathrm{response}}=\ell+\tau_{\mathrm{exec}}\), including judgement, coordination, initiation and execution after detection. Do not count pre-detection delay again.

Under a simplified setting with fixed deadlines and durations, sequential judgement/coordination and execution, no relief before completion, and effectiveness upon completion:

\[
t_L=D-\tau_{\mathrm{exec}},\qquad
t_R=D-\tau_{\mathrm{response}},\qquad
m_{\mathrm{eff}}=t_R-t_D=D-t_D-\ell-\tau_{\mathrm{exec}}.
\]

\(t_L\) is the latest start of actual execution; \(t_R\) is the latest start of the entire response process. The detection-to-latest-execution window \(t_L-t_D\) must also accommodate \(\ell\), and is not directly the effective margin. Earlier ST8 called the full response duration adaptation time and denoted the latest start of the whole process by \(t_L\). This version uses \(t_R\) for that process to distinguish it from actual execution.

\(m_{\mathrm{eff}}<0\) means the specified plan is too late. Zero means only exact completion under ideal conditions, with no tolerance margin. A positive margin still depends on estimation error, effectiveness and execution conditions. Subtract any additional waiting; if stages take partial effect, overlap or change the deadline, compare complete trajectories. First feeling pressure or first observing performance loss is not automatically \(D\). Shared definitions and timing examples are in the [canonical vocabulary](./canonical-vocabulary.md#recovery-time-structure).

<a id="st9"></a>

### ST9. Test common failure and the entire path

Two backups may share upstream supply, funding, interfaces or information sources. A solution for each separate scenario does not imply an executable common policy before information reveals which scenario applies. Reachability of the same endpoint does not mean constraints hold throughout the path. Allow actions to adapt to available information without assuming foreknowledge of the future.

<a id="st10"></a>

### ST10. Turn detection lead time into actionable time

Useful monitoring also needs defined information recipients, authority, execution capability and effective timing. Merely observing earlier differs from changing a trajectory through intervention. Warning Gap is the interval between entry into a danger region and observable failure; it cannot simply be replaced by “delay in discovering a breach”.

<a id="st11"></a>

### ST11. Distinguish deduction, observation and causal identification

Hypothetical examples illustrate logic; simulations depend on models; a historical event consistent with a theory provides only limited evidence. Natural shocks, randomised experiments and retrospective tests have different identification conditions. Passing listed scenarios does not guarantee responses to unlisted ones, and a single failure does not establish a unique mechanism. Report uncertainty, sensitivity, attrition and model omissions.

Probability assessment also separates scenario coverage from event rates. [Smooth Operation Does Not Guarantee Recovery, LK1, LK2 and LK6](../foundations/lock-in-vs-probability.md#lk6), explains probability decomposition, policy guarantees versus unrecoverable states, and exposure denominators for comparison. A test failure proportion cannot serve as an actual conditional lock-in probability or credible upper bound without a probability model and an account of sampling.

<a id="st12"></a>

### ST12. Record in advance and expose the theory to counterexamples

Record scenarios, initial states, candidate mechanisms, predicted responses, leading indicators, observation windows, comparison baselines and decision rules in advance. Retain the original record and write revisions separately. Insufficient material means “cannot determine”; statistical non-significance does not automatically mean no effect. The method's value lies in checkable new questions, discrimination or out-of-sample improvement, not explanatory fluency.

## A minimal example: similar routine performance, different recovery windows

**Hypothetical setting:** two operating arrangements produce the same normal output. A specified service is abruptly interrupted; both detect this immediately and can maintain necessary capacity until week 2. Arrangement A needs 1 week to restore necessary capacity and B needs 6. Assume no additional judgement or coordination delay, so \(\ell=0\) and full response duration equals execution duration. There is no partial effect before execution finishes; cost and resource conditions have been specified.

| Arrangement | Completion deadline $D$ | Detection $t_D$ | Full response duration | Effective margin $m_{\mathrm{eff}}$ |
| --- | --- | --- | --- | --- |
| A | 2 weeks | 0 | 1 week | +1 week |
| B | 2 weeks | 0 | 6 weeks | −4 weeks |

This calculation only describes timing under these assumptions. Further checks concern common failure among alternatives (ST9), actual recovery effectiveness (ST8), changed conditions imposed by the other party (ST6), and whether A's preparedness costs are worth bearing. Other scenarios and long-term commitments may reverse the ranking.

## A minimal citation and record template for applications

Example citation:

> Following [ST5](#st5), [ST8](#st8) and [ST9](#st9) of *Stress Testing: Constraint Identification, Feedback and Recovery Windows* v0.2, this article examines alternatives after service interruption, recovery windows and common failure. Conclusions are limited to the listed scenarios.

Every application should retain at least one auditable record:

| Object / horizon / constraints | Scenario and grounds | Existing responses and shared dependencies | Deadline, detection and recovery time | Feedback and the next constraint | Discriminating signals, counterexamples and current evidence level |
| --- | --- | --- | --- | --- | --- |
| To complete | To complete | To complete | To complete, including error ranges | To complete | To complete |

Distinguish three outputs: **scenario-conditional feasibility judgements, mechanism hypotheses, and empirical predictions about the future**. Simulations alone do not establish event probabilities, and ranking scenarios does not automatically rank actual actions. Experiments and actions must separately meet domain requirements for validation, authority and responsibility.

## Sources and related reading

This article retains exogenous shocks, endogenous feedback, preparedness and commitment testing from the author's earlier methodology v0.1–v0.4, aligned with later book terminology. The topical article's versions are recorded separately from the earlier research series.

- [Complex Systems Analysis Framework](../book/constraints-and-future-options.md): reachability, viability, distinct boundaries, recoverability and Warning Gap.
- [How We Know What Belongs in a Model](../book/what-belongs-in-a-model.md): mechanism hypotheses, identifiability, discriminating observations and advance prediction records.
- [Canonical Vocabulary, Symbols and Knowledge Levels](./canonical-vocabulary.md): stress testing as one form of discriminating perturbation and limits on technical terminology.
- [CF Grammar](./cf-grammar.md): organising constraints, support, buffers and substitution relations to propose testable candidate explanations.
- [Cooperation under Incomplete Trust](../../applications/cooperation-under-incomplete-trust.md): detection, completion deadlines and latest initiation times.
- [Control Authority, Information and Time](../../applications/viability-first-control.md): information, authority, executable paths and handover conditions.
- [Physical AI interview application](../../applications/physical-ai-interview.md): examining the separation between routine efficiency and recovery after service interruption.

These applications illustrate questions and models; they do not establish that this method is validated. This article provides a research and discussion framework only. Actual action requires separate domain evidence and review; see the complete [research-use disclaimer](../../disclaimer.md).

## v0.2 revision note

ST8 aligns time stages and the effective margin, mapping the earlier latest-start notation for the process to t_R. The original minimal example explicitly assumes zero pre-execution delay and retains +1 and −4 weeks. ST1–ST12 numbers and stable citation anchors are preserved.
