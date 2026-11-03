---
title: "Every System Is a Subsystem of the Universe"
description: "System boundaries, observational scales, variables and noise, and when environmental changes require model revision."
author: "SL"
version: "0.1"
created: "2026-11-01"
updated: "2026-11-01"
published: "2026-11-01"
publish: true
kind: article
aliases:
  - framework/systems-within-the-universe
lang: en
language: en
source: framework/foundations/systems-within-the-universe.md
sourceUpdated: "2026-11-01"
---

> **Public edition v0.1 · wholes, parts and modeling scales.** Organized from the research note of the same title, retaining environmental embeddedness, the influence of observational scale on representation, and checks on model applicability. This is a methodological and philosophical discussion. It does not propose “scale slices” as a new physical law or explain every particular system through a universal equation.

## 1. What does “subsystem” mean in the title?

Cells, plants, households, firms and markets all exist within wider real-world relations. Studying an object separately does not remove those relations.

“Every system is a subsystem of the universe” first expresses a research stance: a model of a part should not make us assume that its real-world object is wholly independent of external conditions. “System” mainly means such empirical objects here; it does not claim that abstract mathematical systems have the same physical embeddedness as plants or firms.

Nor must research on every plant begin with the whole universe. Practical inquiry identifies connections that can be approximated for the present question and those that must be retained. A whole-system perspective supports more defensible choices.

## 2. System boundaries are analytical choices constrained by real relations

For a potted plant, one might study leaf water status alone or include roots, soil, light and watering. One scope may suffice for short-term dehydration; ignoring roots and soil may prevent diagnosis of long-term decline.

The question guides the scope, but boundaries are not arbitrary. Cell membranes, container walls, property arrangements and organizational interfaces can make real differences. A model should explain their physical or institutional basis and how matter, energy, information and influence cross them.

“The researcher chooses the boundary” does not mean reality is imaginary. It means taking responsibility for exclusions and testing whether omitted connections change the judgment.

The original note used a hierarchy from the universe to an individual stock. That recalls a wider background, but ecological, social and economic relations are not all strictly nested sets. Supply networks, organizations and markets overlap; an object can belong to several analytical networks.

[Simon’s “The Architecture of Complexity”](https://homes.cs.washington.edu/~ztatlock/599z-17sp/papers/complexity-simon-62.pdf) discusses hierarchy and near-decomposability. Whether a particular system meets adequate decomposition conditions still needs checking.

## 3. What do local equations omit?

In a selected classical continuous-time model, write schematically:

\[
\dot x=f(x,e,u),\qquad \dot e=g(x,e,u).
\]

Here x is the local state, e the environmental state included in the description, and u the relevant input or action. The second equation recalls that the local system may change its environment. This is not the universe’s complete dynamics, but an illustration of modeling choices.

Over an observation window, if environmental changes have sufficiently small effects on the target, an approximation may be used:

\[
\dot x\approx f(x,e_0,u).
\]

The issue is not merely whether e changes slowly, but whether replacing it with e₀ leaves an acceptable error in the target judgment. Near a sensitive region, a small background change may matter greatly; a conspicuous external change may conversely matter little to the current task.

Non-negligible feedback, history dependence or omitted variables may require a larger state, dynamic parameters, memory terms or an uncertain representation. Omission cannot always be replaced by a fixed constant.

## 4. Fast and slow are relative, but not arbitrary labels

Speed is relative to another process, an observation horizon and a target quantity. Relaxation times, reaction rates and propagation delays can nevertheless have measurable physical bases. Renaming quantities does not establish timescale separation.

If local recovery takes \(\tau_x\) and an environmental change has characteristic time \(\tau_e\), then

\[
\varepsilon=\frac{\tau_x}{\tau_e}
\]

helps describe relative speed. A small ratio is a reason to investigate approximation, not automatic permission to use it. Coupling strength, stability, observation horizon and error requirements also matter.

The same variable can play different roles in different tasks. A larger spatial scope does not make all its processes slower, nor are local variables necessarily fast relative to “the universe as a whole.”

Averaging fast processes and describing effective behavior under specific assumptions are established multiscale problems. [Pavliotis and Stuart’s *Multiscale Methods*](https://link.springer.com/book/10.1007/978-0-387-73829-1) covers averaging and homogenization. Their conditions cannot be reduced to “average everything fast; hold everything slow constant.”

## 5. Variables, parameters and noise: three treatments

The original note summarized: variables are retained objects, parameters temporarily ignored slow variables, and noise unmodeled fast variables. This is suggestive, but the last two are not general definitions.

| Object | Model role | Distinction to retain |
| --- | --- | --- |
| State variable | Describes current state and enters selected dynamics or judgments | Adequacy must be tested against task and observation |
| Parameter | Specifies coefficients, relations and conditions of a model or model family | May be a fixed property, calibration quantity or effective coefficient, not necessarily a slow variable |
| Noise or stochastic term | Represents some unresolved effects or uncertainties probabilistically | Need not originate in fast variables or be independent, memoryless or white |
| Unmodeled structure | Relations or effects not adequately represented above | Omission does not automatically make it averageable random error |

A fixed parameter may become a state variable in an expanded model. Explain its measurability, dynamics and benefit; adding a variable alone does not make a model more realistic.

Fast processes may affect long-term outcomes through accumulation, correlation or thresholds. Treating them as independent zero-mean noise may discard task-relevant information.

## 6. Background changes can move equilibria or change structure

**Both equations below are teaching examples, not actual plant, market or equipment parameters.**

First consider a simplified temperature-response model:

\[
\dot x=-a\,[x-e(t)]+b\,u(t),\qquad a>0.
\]

Here x is internal temperature, e external temperature, u an input, and a and b chosen coefficients. With fixed external temperature e₀ and input u₀, equilibrium is:

\[
x^*=e_0+\frac{b u_0}{a}.
\]

Deviation decays at model rate a. Different fixed external temperatures change equilibrium position but do not alone change stability in this model. Environmental change does not instantly invalidate an equation; sometimes an included input simply needs updating.

Now consider a local scalar model:

\[
\dot x=\theta-x^2.
\]

For fixed positive θ there are two equilibria: the positive root is locally stable and the negative root unstable. They meet at zero θ; for negative θ no real equilibrium remains. Parameter changes can therefore change equilibrium structure: this is a basic saddle-node bifurcation.

If θ changes with time, whether trajectories follow those fixed-parameter equilibria depends on rate of change, initial state and response time, not just the static bifurcation diagram.

These examples distinguish changing operating conditions from qualitative structural change. Real abrupt transitions may involve bifurcations, disturbances, feedback, institutional change or measurement issues. Not every model error is a phase transition. Physical phase transitions, dynamical bifurcations and social changes need distinct definitions; visual resemblance does not prove equivalence.

## 7. A model’s limited scope does not make local knowledge worthless

The original note’s strongest warning is against unlimited extrapolation of a local model. But validity does not rest only on a temporarily stationary background. Conservation, symmetry, control, averaging conditions and disturbance-insensitive structures can support wider applicability.

Nor does a changing background automatically invalidate a model: it may already be an input, or performance may hold across a range. Conversely, an apparently stable background does not rescue a model with the wrong mechanism, biased data or unidentified relations.

State what the model predicts, its operating conditions and error bounds, and when revision is required. Local regularities and broader theories can connect rather than negate each other.

[Goldenfeld and Kadanoff’s “Simple Lessons from Complexity”](https://guava.physics.ucsd.edu/~nigel/REPRINTS/1999/Goldenfeld%20Simple%20Lessons%20from%20Complexity%20Science%201999%20%28PDF%29.pdf) emphasizes choosing a descriptive level suited to the question. That supports careful selection, not the validity of every low-dimensional model or the claim that detailed research inherently lacks perspective.

## 8. Turn the whole-system perspective into a checkable local-model statement

Research need not expand indefinitely to everything related. Start with the following record and use evidence to decide whether scope must change.

| Question | Record |
| --- | --- |
| What is the task? | What to explain, predict or decide; horizon and acceptable error |
| How is the system bounded? | Included states, processes and feedback; grounds for the boundary |
| How are external conditions handled? | Inputs, parameters, scenarios and provisional omissions |
| What supports the scale choice? | Compared processes, measurements and approximation conditions |
| What remains unresolved? | Stochastic assumptions, possible correlations and memory, unknown structure |
| What triggers revision? | Prespecified deviations, environmental changes, counterexamples and alternatives |

A simple model may help predict short-term internal temperature. If the task becomes long-term energy use, plant growth or equipment aging, omitted humidity, illumination, control policy or parameter changes may need reassessment.

Before adding a variable, ask whether it changes the target prediction, action or error. Retain a monitoring layer so an effect not currently observed is not declared forever irrelevant. This connects with the selection discipline in [constructing and testing representations](../book/what-belongs-in-a-model.md) and [canonical vocabulary](../methods/canonical-vocabulary.md).

The whole-system stance ultimately asks something concrete: **when studying a part, state its environmental connections, the grounds for current approximations and the evidence that would change the partition.**

## Sources and public-editing note

- Simon, H. A. (1962): [The Architecture of Complexity](https://homes.cs.washington.edu/~ztatlock/599z-17sp/papers/complexity-simon-62.pdf), *Proceedings of the American Philosophical Society*, 106(6), 467–482. Relevant themes: hierarchy and near-decomposability.
- Pavliotis, G. A. & Stuart, A. M. (2008): [Multiscale Methods: Averaging and Homogenization](https://link.springer.com/book/10.1007/978-0-387-73829-1). Relevant theme: conditional multiscale reduction.
- Goldenfeld, N. & Kadanoff, L. P. (1999): [Simple Lessons from Complexity](https://guava.physics.ucsd.edu/~nigel/REPRINTS/1999/Goldenfeld%20Simple%20Lessons%20from%20Complexity%20Science%201999%20%28PDF%29.pdf), *Science*, 284, 87–89. Relevant themes: descriptive levels and complex-system modeling.

These sources provide neighboring methodological foundations, not proof of every philosophical statement here. The public edition removes praise and unsupported generalizations about research communities, qualifies absolute claims about parameters, noise, stability and phase transitions, and adds two teaching models. It reports no new experiments, predictive performance or universal mathematical result.

Related reading: [Constraints, Feasibility and Future Options](../book/constraints-and-future-options.md), [Research Architecture for an Open World](../methods/research-architecture.md), [Life as Generative Structure](./life-as-generative-structure.md), [Why Is an Objective Function Justified?](./why-objectives-are-reasonable.md).
