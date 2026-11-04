---
title: "Smooth Operation Does Not Guarantee Recovery: Problem Probability and Lock-In Risk"
description: "Separates the probability of a problem from conditional loss of recoverability and its consequences, and examines recovery gaps retained by routine-performance selection."
author: SL
version: "0.4"
created: "2026-11-03"
updated: "2026-11-03"
published: "2026-11-03"
publish: true
status: "Public research draft"
kind: article
lang: en
language: en
source: framework/foundations/lock-in-vs-probability.md
sourceUpdated: "2026-11-03"
tags:
  - theory-framework
  - recoverability
  - lock-in
  - resilience
---

# Smooth Operation Does Not Guarantee Recovery: Problem Probability and Lock-In Risk

**SL · Public research draft v0.4 · 2026-11-03**

> **Core question: why can plans that perform well in routine operation retain unexposed recovery gaps through repeated selection? How should the risk consequences of those gaps be assessed?**
>
> This article uses routine performance and three quantities—p, q and s—to explain the risk consequences of the selection mechanism in [Simplification and Recovery Paths](./simplicity-and-recovery.md#sf9), SF9. SF9 already examines how limited testing can select a plan with recovery gaps and how those gaps can persist. The present article does not introduce that mechanism again; it provides definitions for assessing its consequences.
>
> The discussion concerns abstract structures, not particular events or entities. LK1–LK6 are reference identifiers, not indications of equal proof status. Section 8 relates the argument to earlier work; originality still requires systematic examination.

## 1. What needs separate assessment?

Comparisons often conflate four different matters:

1. **Routine performance**: smoothness, variability and operating cost.
2. **Problem probability**: the probability of encountering a defined problem.
3. **Conditional loss of recoverability**: whether an acceptable state remains recoverable after the problem occurs.
4. **The consequences of losing recoverability.**

The first is visible in everyday operation; the other three are often much less visible. The claim is that **these matters need separate assessment. Good routine performance establishes neither a low problem probability nor recoverability after a problem.**

## 2. Three quantities and their conditions

<a id="lk1"></a>

> **LK1. For a fixed plan, initial-state range, horizon and available resources, the risk of losing recoverability can be examined through three separate quantities.**

Within one probability model and observation horizon, let A denote a defined problem event, such as encountering a disturbance above a stated intensity. Let L denote entry into the lock-in state defined in section 3. Comparisons must also hold fixed, or explicitly adjust, the initial-state distribution, disturbance distribution and exposure basis.

| Quantity | Definition |
|---|---|
| p = P(A) | Probability of problem A |
| q = P(L \| A) | Conditional probability of entering L after A occurs |
| s | Loss or consequence after entry into L; this needs a separate definition |

If entry into lock-in necessarily passes through A, then:

\[
P(L)=p q.
\]

For \(p>0\), this follows from the multiplication rule for conditional probability. No additional independence assumption is required.

If lock-in can also develop without A—for example, through gradual resource depletion during routine operation—the general decomposition is:

\[
P(L)=P(A)P(L\mid A)+P(A^c)P(L\mid A^c).
\]

Each conditional probability is used only when its conditioning event has positive probability. When a conditioning event has zero probability, its contribution is written as the corresponding joint probability, which is zero. The overall lock-in probability reduces to \(p q\) only when \(P(L\cap A^c)=0\). Lock-in risk through A must therefore be distinguished from total lock-in risk.

s may denote a loss distribution, interval or specified evaluation measure. To calculate the expected contribution of lock-in losses, one may define \(s=E[S\mid L]\) and write \(P(L)s\), provided the conditional expectation exists. This excludes other gains and losses when lock-in does not occur, and is not the only possible risk criterion.

The decomposition exposes what a comparison of p alone can miss. It also shows that **a higher q alone does not establish greater overall lock-in risk**. Consider a mathematical example with equal consequences:

- Plan A: p = 1%, q = 90%; lock-in probability = 0.9%.
- Plan B: p = 10%, q = 10%; lock-in probability = 1%.

Plan A has a much higher q but a slightly lower overall lock-in probability. Comparisons therefore need P(L) and s, rather than p or q alone.

This agrees with the starting point of [Acting in an Uncertain World](../book/acting-under-uncertainty.md): equal success probabilities can entail very different losses and recovery times. Failure modes that could terminate the entire process require separate definition and exposure assessment.

## 3. What does “lock-in” mean here?

<a id="lk2"></a>

> **LK2. Lock-in here means that the defined acceptable state cannot be recovered within the given horizon, resources and permitted actions.**

Three qualifications matter:

1. **The definition is relative.** A state unrecoverable under one horizon, resource budget and action set may become recoverable under another. Temporary recovery difficulty is not permanent irreversibility.
2. **Lock-in differs from a lack of recovery guarantee under the current policy.** The recovery region in [Simplification and Recovery Paths](./simplicity-and-recovery.md) requires one policy to recover under every declared disturbance. Being outside that region may mean only that this policy cannot guarantee recovery in some disturbances; another policy may still recover. Lock-in is stronger: **no recovery method remains under the given resources, information and permitted actions**. q is the conditional probability of entering that state after A. If \(B_\pi\) instead denotes the event that the current policy cannot guarantee recovery, define \(q_\pi=P(B_\pi\mid A)\). The bound \(q\le q_\pi\) requires the same A, probability model, horizon, resources, information and disturbance range, and the inclusion \(L\subseteq B_\pi\), with the current policy among the permitted candidate policies. Failing to find a recovery method in finite testing does not prove that none exists. A bound within a model is not automatically a credible bound for the actual system. See the [canonical vocabulary](../methods/canonical-vocabulary.md#path-objects) for distinctions between path objects.
3. **Lock-in has several mechanisms.** One familiar mechanism combines a threshold with positive feedback: within a boundary, negative feedback restores the state; beyond it, deviation reinforces itself. Resource exhaustion, channel closure and expired deadlines can also cause lock-in. No single mechanism is treated as universal.

This article does not prescribe one method for estimating proximity to lock-in or q. Possible methods include calculating recovery regions, structured scenarios and stress tests, comparing historical recovery times, and examining distances to constraints. Bifurcation and critical-transition models may also help where the system has the corresponding structure; see section 8.

## 4. Routine performance and recovery gaps

<a id="lk3"></a>

> **LK3. A plan selected for routine performance may operate closer to lock-in. Good routine performance establishes neither low p nor low q.**

Routine performance and p are different quantities. Removing redundancy can lower operating cost without reducing the occurrence probability of an external disturbance. Narrowing the operating range may make routine operation smoother while disturbances continue to occur. Such changes chiefly affect what happens after a disturbance:

- Less buffer makes a given disturbance more likely to exhaust resources.
- Operating nearer a boundary makes a given disturbance more likely to cross it.
- Optimising for common disturbances may weaken responses to uncommon ones.

In some settings, changes improving routine performance therefore increase q. This is not universal: a change can improve both routine performance and recoverability, or affect neither. The trade-off can be overlooked when routine performance dominates selection.

Holling (1973) distinguished **stability** from **resilience**: a tendency to return after disturbance differs from the disturbance a system can absorb without shifting into another regime. Local stability can persist while an attraction domain contracts and resilience declines. Carlson and Doyle's highly optimised tolerance likewise associates optimisation for expected disturbances with possible fragility to unexpected disturbances. LK3 draws on these observations in examining how plans are selected.

## 5. How can repeated selection retain a recovery gap?

<a id="lk4"></a>

> **LK4. Selection by routine performance can retain recovery gaps. A stronger claim that selection favours such plans requires additional conditions.**

SF9 in [Simplification and Recovery Paths](./simplicity-and-recovery.md#sf9) already addresses this mechanism: section 9.2 explains how limited testing can select a low-cost plan with gaps; section 9.3 examines retention through test coverage, selection criteria and update conditions. The present section restates it using p, q and s, and distinguishes possible retention from selection bias.

**Restatement in the present quantities.** Routine performance is usually easier to observe. With comparable definitions and operating conditions, sufficient operating records can estimate p. Routine records alone often identify q and s poorly. One event reveals an outcome, not a conditional probability. Formal analysis, stress testing, historical comparisons and other independent evidence can assess recovery gaps and consequences in advance, subject to model assumptions and error. Selection dominated by routine performance and lacking these additional checks can leave gaps uncorrected for long periods.

**A claim of selection bias requires more than missing feedback:**

1. **The candidate set actually contains plans with recovery gaps.**
2. **Those plans have an advantage in routine scoring**, such as lower cost or variability.
3. **Retention, elimination and updating rules are specified**, and rely chiefly on routine scoring.
4. **Rare disturbances supply little feedback, and failures do not promptly trigger revision**, corresponding to SF9 section 9.3.

The first three conditions must also hold before missing feedback can support a claim that selection systematically favours these plans. Condition 4 alone indicates only that gaps may lack corrective signals.

## 6. A candidate screening rule

<a id="lk5"></a>

> **LK5 (candidate). When lock-in consequences are unacceptable and difficult to reverse, compare plans using lock-in probability P(L), or a credible upper bound, as a constraint rather than comparing only p or routine performance. When P(L) is hard to estimate but a plan's q is clearly elevated, it can be prioritised for examination.**

Qualifications:

- This requires an additional value judgement: **some consequences are unacceptable**. The probability decomposition does not supply that judgement; it must be explicit in the particular problem.
- It is not a universal rule to reject high-q plans. The example in section 2 shows why high q need not imply greater overall lock-in probability.
- Its direction agrees with C17 in [Control Authority, Information and Time](../../applications/viability-first-control.md#c17): where no action can be certified safe, explicitly compare effects on recoverability, effective options and irreversible consequences, stating model, scenarios, horizon, constraints, costs and criteria. C17 is a candidate principle, not a safety guarantee. LK5 also needs independent validation; it prescribes no action direction and certifies no retained plan as recoverable. C17's requirements for validating exclusions, mistaken exclusions and alternatives apply here too.
- Where time is too short for on-the-spot estimation, comparisons need prior preparation and translation into concise rules retaining applicability conditions, failure signals and revision interfaces; see [SF6](./simplicity-and-recovery.md#sf6).

## 7. Illustrative forms

The structure takes different forms across domains. These are illustrations, not analyses of specific cases:

| Setting | Good routine performance with possible recovery gaps | Less favourable routine performance with potentially stronger recovery |
|---|---|---|
| Resource arrangements | Resources concentrated in current output: higher routine utilisation, but a particular disturbance may exhaust resources needed for recovery | Resources reserved for recovery: routine utilisation may be lower, while a recovery path may remain under the specified disturbance; the effect depends on resource availability and other constraints |
| Organisations and supply chains | Extreme streamlining without redundancy: lower routine cost, but one interrupted link may halt the whole process | Buffers and alternatives: higher routine cost, but operation may continue during an interruption |
| Ecosystems | Apparent calm while the attraction domain contracts and resilience declines | Greater variability alongside an ability to withstand larger disturbances |

## 8. Relationship to earlier work

| Earlier work | Relevant content | Relationship and contribution here |
|---|---|---|
| Holling (1973); Ludwig, Walker and Holling (1997) | Stability differs from resilience; local stability can persist while attraction domains shrink and resilience declines | One source for LK3; applied here to plan selection rather than system evolution alone |
| Carlson and Doyle (1999), highly optimised tolerance | Optimisation for expected disturbances can accompany fragility to unexpected ones | Supports LK3's direction; does not establish a universal inverse relationship between p and q, which is not claimed here |
| Gambler's ruin; Taleb et al. (2014) on ruin risk; Peters (2019) on ergodicity | With absorbing states or unrecoverable losses, average return alone cannot assess the long-term process; entry probabilities and consequences matter, as does the distinction between time and ensemble averages | Supports separate assessment of lock-in probability and consequences in LK1 |
| Arrow and Fisher (1974) on irreversible decisions | Irreversibility adds costs under uncertainty; preserving options can have value | Consistent with the direction of LK5 |
| Bifurcation and critical-transition research, including Scheffer et al. (2009); control-loss bifurcation analysis, including Kwatny et al. and Gill et al. (2013) | Threshold crossings can lead to other attractors | Optional mathematical representations and estimation methods for some threshold-and-feedback mechanisms in LK2; applicable only where the corresponding structure exists |

**The contribution here has two parts:**

1. Separate routine performance, problem probability, conditional lock-in probability and consequences, specifying their relationships and limits (LK1–LK3).
2. Restate SF9's screening and retention mechanism in these quantities, and identify conditions separating possible retention from selection bias (LK4). The retention mechanism itself is already discussed in SF9.

**Connections within this site:**

- [Acting in an Uncertain World](../book/acting-under-uncertainty.md): unrecoverable losses need separate definition; equal success probabilities can entail different losses and recovery times.
- [Simplification and Recovery Paths](./simplicity-and-recovery.md): SF2 separates lower operating cost from larger recovery regions; SF6 retains applicability conditions, failure signals and revision interfaces; SF9 examines gaps left by finite screening. LK3 is one possible manifestation of SF2; LK4 restates SF9 sections 9.2–9.3 and adds candidate conditions for selection bias.
- [Control Authority, Information and Time](../../applications/viability-first-control.md), C7 on resource consumption while holding a state, [C17](../../applications/viability-first-control.md#c17) on comparing recoverability and options under uncertainty, and C18 on joint constraint conflicts at the rule level. LK5 is a candidate screening rule aligned with C17.

## 9. Testable implications

<a id="lk6"></a>

> **LK6. If the LK4 mechanism operates, the following patterns are candidates for observation under its conditions. Testing requires complete operating records, not accident records alone.**

1. **Plans selected by routine performance have a higher conditional lock-in proportion under rare disturbances.** Comparisons require adoption counts, uneventful operations and comparable disturbance exposure. Examining plans found in severe accidents alone cannot test this implication.
2. **Changing selection criteria.** If checks identify recovery gaps, a feasible alternative exists and is actually adopted, and that alternative reduces q under the same A and comparable disturbance intensity, initial conditions and exposure basis, the rate of lock-in through A should decline. If replacement changes p too, compare p q. If lock-in also occurs without A, use the complete decomposition in section 2. Discriminating checks and available alternatives alone do not imply fewer lock-in events overall. Finite-sample event counts need not fall; compare rates and uncertainty. Register test conditions, alternatives and evaluation measures in advance.
3. **Revision speed.** If feedback identifies the relevant gap and an alternative genuinely reduces it and can be implemented in time, faster completed revision should reduce the proportion of gaps retained for long periods. Faster signals alone, or substitutions introducing another gap, do not support this prediction.

**Observations that would weaken the account:**

- Under comparable exposure, routine-performance-selected plans are no more susceptible to lock-in than other plans.
- With effective checks, actual adoption of an alternative whose lower q has independent support, and comparable initial conditions and disturbance exposure, the rate of lock-in through A persistently fails to show the expected decline. This weakens the adopted model, measurement or mechanism judgement and calls for investigation, rather than retrospective changes in evaluation criteria.
- All four LK4 conditions hold but no selection bias is observed.

## 10. Knowledge status and limitations

| Content | Status here |
|---|---|
| Separate routine performance, p, q and s (LK1) | Event definitions and evaluation measures are analytical conventions; the probability decomposition is a basic probability identity, not a new theorem |
| Definition of lock-in (LK2) | Analytical convention; threshold plus positive feedback is one mechanism |
| Good routine performance does not establish low p or q; improving it can raise q (LK3) | Candidate mechanism with related observations in earlier work |
| Restate SF9's retention mechanism in p, q and s, and conditions for selection bias (LK4) | Restatement of an existing mechanism with candidate conditions |
| Constrain P(L) and prioritise examination of high-q plans (LK5) | Candidate screening rule requiring validation and an additional value judgement |
| Implications in section 9 (LK6) | Require testing |

**Limitations:**

1. **q and P(L) are often difficult to estimate** and require domain knowledge, data and explicit definitions.
2. **Not every failure is lock-in**, and not every lock-in follows a threshold-and-feedback mechanism.
3. **Changing selection criteria has costs** and may raise routine cost or introduce new risks; concrete comparisons are required.
4. **The article originated in discussion of a small number of situations.** Its value as a distinct principle needs examination across more domains.

> **A smooth operating record is not sufficient evidence of recoverability. A recovery boundary may already have been crossed without visible deterioration in routine performance. Whether a recovery path remains needs separate examination.**

## References

- Holling, C. S. (1973). Resilience and stability of ecological systems. *Annual Review of Ecology and Systematics*, 4, 1–23. [IIASA version](https://pure.iiasa.ac.at/id/eprint/26/7/RP-73-003.pdf).
- Ludwig, D., Walker, B., & Holling, C. S. (1997). Sustainability, stability, and resilience. *Conservation Ecology*, 1(1), 7. [Article](https://ecologyandsociety.org/vol1/iss1/art7/).
- Carlson, J. M., & Doyle, J. (1999). Highly optimized tolerance: A mechanism for power laws in designed systems. *Physical Review E*, 60, 1412. Preprint: [Highly Optimized Tolerance: Robustness and Power Laws in Complex Systems](https://arxiv.org/abs/cond-mat/9812127).
- Arrow, K. J., & Fisher, A. C. (1974). Environmental preservation, uncertainty, and irreversibility. *Quarterly Journal of Economics*, 88(2), 312–319.
- Taleb, N. N., Read, R., Douady, R., Norman, J., & Bar-Yam, Y. (2014). The precautionary principle (with application to the genetic modification of organisms). [arXiv:1410.5787](https://arxiv.org/abs/1410.5787).
- Peters, O. (2019). The ergodicity problem in economics. *Nature Physics*, 15, 1216–1221. [Article](https://doi.org/10.1038/s41567-019-0732-0).
- Scheffer, M., et al. (2009). Early-warning signals for critical transitions. *Nature*, 461, 53–59.
- Kwatny, H. G., et al. (2009). Aircraft accident prevention: Loss-of-control analysis. [NASA report](https://ntrs.nasa.gov/api/citations/20090030517/downloads/20090030517.pdf).
- Gill, S. J., Lowenberg, M. H., Neild, S. A., Krauskopf, B., Puyou, G., & Coetzee, E. (2013). Upset dynamics of an airliner model: A nonlinear bifurcation analysis. *Journal of Aircraft*, 50(6), 1832–1842. [Publication record](https://research-information.bris.ac.uk/en/publications/upset-dynamics-of-an-airliner-model-a-nonlinear-bifurcation-analy/).

**Related articles on this site**

- [Acting in an Uncertain World](../book/acting-under-uncertainty.md)
- [Simplification and Recovery Paths](./simplicity-and-recovery.md)
- [Control Authority, Information and Time](../../applications/viability-first-control.md)
- [Canonical Vocabulary, Notation and Knowledge Status](../methods/canonical-vocabulary.md)

---

© 2026 SL. All rights reserved.
