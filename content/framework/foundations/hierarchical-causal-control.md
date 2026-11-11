---
title: "The Hierarchical Causal–Control Hypothesis (HCC)"
description: "How can stable modules and reconfigurable interfaces create new macroscopic control capabilities? Testable hypotheses using finite-length gains, matched experiments and competing first-passage risk."
author: "SL"
version: "0.2.2"
created: "2026-08-19"
updated: "2026-11-11"
published: "2026-11-11"
publish: true
kind: "article"
lang: "en"
language: "en"
source: "framework/foundations/hierarchical-causal-control.md"
sourceUpdated: "2026-11-11"
---

## One-page guide: Why can a system be hard to change when all its parts work?

Imagine two devices that use the same set of reliable modules and have the same budget. One uses fixed connections. The other can change the order or connections of its modules through its own control rules. Both may do the old job well. When a new task arrives, the second device might find a new way to use the same modules. How many usable options does it gain? Can it keep those options over time? What does it lose if its interfaces become hard to change? These are three separate questions to test.

### What this paper brings together

| Line of research | What becomes clearer when the findings are brought together |
| --- | --- |
| Simon’s near-decomposability, Baldwin and Clark’s modular interfaces, and Gerhart and Kirschner’s facilitated variation | The organisation within modules can stay stable while combinations across modules change. |
| Barnett and Seth’s dynamical independence, and Szathmáry and Maynard Smith’s major evolutionary transitions | A higher-level unit can be identified by independent criteria before asking what capabilities it gains and whether those capabilities become established. |
| Aubin’s viability theory and Klyubin and colleagues’ measure of control | Outcomes a system can reach, outcomes it can choose, and outcomes it can reliably achieve within constraints need separate checks. |
| Carlson and Doyle’s work on robustness and fragility | A system that works well under familiar conditions can lose the ability to adjust in a new environment. HCC asks how the cost of rewriting interfaces contributes to that loss. |

### What this paper proposes

**The hypothesis is that internal module stability and reconfigurable interfaces jointly expand the set of higher-level outcomes the system can actively choose and achieve within constraints.** To test this, match modules and resources as closely as possible, vary stability and interfaces separately, and check for an interaction. Then ask separately whether the new structure persists and, when conditions change, whether the system adapts before it exits its constraint set. The paper gives methods for counting outcomes, comparing finite-length gains and measuring first-passage risk. All three claims remain hypotheses to test.

## 1. Three hypotheses to test

| Hypothesis | Expected observation | What would count against it |
| --- | --- | --- |
| **G · Generative architecture** | With matched resources and controlled crosstalk, module stability and endogenous interface reconfigurability jointly increase the number of viable macro-level outcomes and the finite-length compositional gain. The advantage remains observable in held-out environments. | The manipulations work and the test can distinguish the prespecified effect, yet the interaction repeatedly falls short of the threshold. |
| **F · Long-term fixation** | When a higher-level structure can persist or be transmitted, internal conflict is manageable, and maintenance and coordination are affordable, generative gain is associated with a higher probability of long-term fixation. | Under the same conditions, higher generativity repeatedly fails to accompany a higher probability of fixation. |
| **R · Interface hardening** | Even while module functions remain stable, less reconfigurable interfaces or higher costs of rewriting rules may reduce compositional ability, slow adaptation and raise the risk of leaving the constraint set before adapting. | Interfaces become harder to change, yet the prespecified decline in compositional ability or rise in adaptation risk fails to appear. |

These are distinct observations. Creating new options, retaining the structure that provides them, and continuing to use that structure when the environment changes each need their own measurements. Stable symbols can form new expressions through grammar, and stable instructions can form new functions through programming. These examples illustrate possible structures. Replicable comparisons supply evidence for the hypotheses.

## 2. Where the constraints are

Write the constraint architecture as $\mathcal K$. It consists of within-module constraints $K_{\mathrm{within}}$, fixed coupling between modules $K_{\mathrm{between}}$, and interface reconfigurability $Q_{\mathrm{interface}}$. Three quantities can help characterise it.

| Quantity | Meaning | Possible observations |
| --- | --- | --- |
| $S_{\mathrm{in}}$ | A module’s ability to retain its functional identity under disturbance | Output fidelity, probability of recovery, module lifetime |
| $R_{\mathrm{fixed}}$ | The extent of coupling between modules that is difficult to reconfigure | Share of fixed connections, cost of changing sequence or connectivity |
| $Q_{\mathrm{interface}}$ | The system’s ability to change which modules it uses, their sequence, connections or parameters through its own rules | Configurations and outcomes the system can reliably invoke within the same budget |

Internal stability and interface reconfigurability can vary independently. When stability is low, even a flexible interface may have trouble reusing a module. With stable modules and fixed interfaces, a system may retain its existing organisation for a long time while having few ways to rearrange it. Hypothesis G concerns the case where both qualities are high and asks how crosstalk and fixed coupling limit the gains.

A module’s interface may also form a stable abstraction boundary. A higher level can call or replace the module through its interface, with the internal details it needs depending on the task. Whether nested boundaries can be described by a common depth of generative constraints remains open.

## 3. Identify the level before measuring generativity

Let $X_t$ be the microscopic state and $Z_t=\phi(X_t)$ its macroscopic representation. One independent way to identify a level is to compare two predictions. Under the same external inputs, once the macroscopic history is known, does the microscopic history still improve prediction of $Z_{t+1}$ substantially? Approximate autonomy is assessed at a specified horizon and under specified test conditions. In selection processes, prespecified criteria may also use the transmissibility of higher-level traits and responses to selection at that level. These criteria identify the object of study before generativity is measured.

Generativity is defined relative to the study conditions.

$$
\Theta=(\phi,\mathcal U,Y,\mathcal E,h,B,\epsilon,\delta).
$$

Here $\mathcal U$ is the module partition, $Y$ the space of macroscopic outcomes, $\mathcal E$ the environment distribution, $h$ the observation horizon, $B$ the resource budget, $\epsilon$ the resolution for distinguishing outcomes and $1-\delta$ the reliability threshold. Hold these conditions fixed when comparing architectures. A different task, budget or resolution can change the assessment.

## 4. Measuring viable control and compositional gains

**Viable control capacity $C_V(K;\Theta)$.** Fix the initial conditions or initial distribution and ask which outcomes the system can select through its own policies. Each counted outcome requires a policy that reaches it within the resource budget and horizon while respecting the constraints up to and including arrival, with joint probability at least $1-\delta$. Under a prespecified distance or classification rule, take the largest number of pairwise distinguishable qualifying outcomes. Compare it with a resource-matched baseline $K_0$:

$$
\Delta C_V(K;\Theta)=C_V(K;\Theta)-C_V(K_0;\Theta).
$$

**Finite-length compositional gain.** Let $N_K(L;\Theta)$ count the reliable, distinguishable outcomes reachable through composition programs of length at most $L$. The same budget, horizon and viability conditions still apply. To allow for cases with no qualifying outcomes, define $F_K(L)=\log(1+N_K(L;\Theta))$, then compare gains at the same length.

$$
G_{\mathrm{comb}}(L;\Theta)=F_K(L)-F_{K_0}(L).
$$

It is also possible to compare average growth $\bigl(F_K(L_2)-F_K(L_1)\bigr)/(L_2-L_1)$ at prespecified $L_1<L_2$. With a fixed budget and horizon, the number of executable programs or distinguishable outcomes may quickly reach a ceiling. If $N_K(L;\Theta)$ has a finite upper bound, then $\log(1+N_K(L;\Theta))/L$ tends to zero as $L$ grows. Finite-length curves retain differences that can be tested.

Under this working definition, an architecture qualifies as generative relative to $\Theta$ when $\Delta C_V$ and the prespecified finite-length gain both exceed their thresholds and still meet the stated criteria in held-out environments. Report absolute counts, differences from baseline and uncertainty to show how the result depends on length and resolution.

## 5. Can the system call its own modules?

A researcher’s ability to intervene on a module variable $u_i$ and the system’s ability to invoke it during operation require separate tests. The latter requires a command $Q_i$ within the system’s policy space that changes the target outcome $Y$ through $u_i$. For example, if manually adjusting a module improves an outcome, check whether the system itself has the authority to call it, can determine when to do so, and can afford the call.

Selective invocation can be assessed with a matrix of causal effects. For a continuous command, let

$$
J_{ij}(q)=\frac{d}{dq}\mathbb E[Y_j\mid\operatorname{do}(Q_i=q)].
$$

For discrete commands, use mean outcome differences between prespecified intervention levels. Once outputs are placed on comparable scales, report the intended effects $|J_{ii}|$ and off-target effects $|J_{ij}|$ separately. One candidate summary of crosstalk is

$$
\chi=\frac{\sum_{i\ne j}|J_{ij}|}{\sum_i|J_{ii}|+\eta},\qquad \eta>0.
$$

A small ratio can occur when every effect is near zero, so also check that intended effects clear a minimum threshold. Statistical association and directed information can suggest where to look. A causal interpretation requires sequential randomisation, an explicit interventional distribution, or models and assumptions sufficient for identification.

## 6. Fixation, hardening and the time to adapt

Hypothesis F asks whether a new higher-level structure persists over a long-run comparison. Specify in advance whether fixation means lasting prevalence, transmission across generations or another observable outcome. The ability to reuse modules and create new compositions leaves the structure’s long-term fate open. Early transitions may first establish a persistent structure and later gain stronger endogenous addressability. Transmission and macroscopic control may also develop together. These are possibilities to compare.

Hypothesis R focuses on the cost $C_{\mathrm{rewrite}}$ of modifying an interface or rule. The time for which an environmental pattern persists, $\tau_{\mathrm{env}}$, and the time needed to adapt, $\tau_{\mathrm{adapt}}$, give a diagnostic ratio $\Lambda=\tau_{\mathrm{env}}/\tau_{\mathrm{adapt}}$. When the environment changes more slowly than the system adapts, reconfiguration may have time to pay off. If change is too fast to track, an averaging or robust strategy may be more suitable. The appropriate degree of plasticity also depends on the magnitude and predictability of change and on switching costs.

Given information $\mathcal F_t$ and an adaptation mechanism $\mathcal A$, let $T_\Omega^{\mathcal A}$ be the time from now to the first exit from constraint set $\Omega$, and let $T_{\mathrm{adapt}}^{\mathcal A}$ be the time to first meet the prespecified adaptation criterion. At a common observation horizon $H$, compare

$$
\Psi_{t,H}^{\mathcal A}
=\Pr\!\left(T_\Omega^{\mathcal A}<T_{\mathrm{adapt}}^{\mathcal A},
\,T_\Omega^{\mathcal A}\le H\mid\mathcal F_t\right).
$$

Under the same policy and horizon, record exit first, adaptation first, ties, and cases where neither occurs before observation ends. Adaptation may change the exit time, and the two times may be dependent. The ratio $\Phi$ of expected exit time to expected adaptation time can serve as a summary. The first-passage events give a direct measure of the risk. Describe distribution shift separately with $O(d)=L_{\mathrm{test}}(d)-L_{\mathrm{train\text{-}like}}$, specifying the amount of shift $d$ and the loss function in advance. Hypothesis R predicts that hardening will widen this gap under some shifts.

## 7. A first test

Start with an artificial system that can be controlled experimentally. Use a factorial design to vary module stability and interface reconfigurability separately, then vary crosstalk and rule-rewriting costs in separate conditions. Match module count, parameter count, data, training and inference budgets, the environment and the viability criteria where possible. Record mismatches and use the same task distribution and evaluation protocol for the comparison. Include both a fixed-connection architecture and a resource-matched modular architecture among the baselines.

For a prespecified outcome $Z$, estimate the interaction between stability and reconfigurability with the following contrast. Subscripts $H$ and $L$ denote high and low levels, with stability first and reconfigurability second.

$$
I_Z=Z_{HH}-Z_{HL}-Z_{LH}+Z_{LL}.
$$

Report $C_V$, $N_K(L;\Theta)$, $O(d)$, $\tau_{\mathrm{adapt}}$ and $\Psi_{t,H}^{\mathcal A}$, alongside the effects of varying each factor alone. Predictive performance can be reported as a curve $P(h,B)$ across horizons and budgets and compared with preregistered baselines. The fixation hypothesis requires additional long-term observations. First establish that the measures are stable in an artificial system. Then test them in independent replications and real systems. Historical cases can help assess whether the findings carry across domains.

## 8. Relationship to prior work

Simon’s near-decomposability concerns differences in interactions within and between subsystems. Baldwin and Clark examine how design rules let modules change separately while remaining compatible. Gerhart and Kirschner focus on how conserved core processes can be reused and recombined to produce variation on which selection can act. HCC turns these relationships into a comparison. With matched resources, does varying module stability and interface reconfigurability separately reveal an interaction in the number of viable outcomes?

Barnett and Seth provide a formal tool for identifying macroscopic dynamics independently. Aubin’s viability theory studies how a system can continue to evolve within constraints. Klyubin and colleagues’ empowerment measures an action channel’s capacity in information-theoretic terms. This paper compares counts of distinguishable outcomes under a budget, path constraints and a success threshold. Research on major evolutionary transitions provides a point of comparison for how higher-level units form and are transmitted. Carlson and Doyle examine how robustness to familiar disturbances can coexist with fragility to unexpected ones. HCC’s interface-hardening hypothesis specifies a mechanism that can be varied experimentally and compares exit from the constraint set with completion of adaptation. These connections provide baselines. Whether HCC yields additional discriminating predictions remains to be tested.

Related articles on this site include [Constraints, Feasibility and Future Options](../book/constraints-and-future-options.md) and [Stress Testing: Identifying Constraints, Feedback and Recovery Windows](../methods/stress-testing.md).

## Version note and references

Public working draft v0.2.2 is based on v0.2.1, dated 19 August 2026. It consolidates repeated material, replaces asymptotic compositional growth under a fixed budget with a finite-length comparison, and specifies how to measure intervention effects and first-passage risk.

1. Simon, H. A. (1962). [The Architecture of Complexity](https://www.jstor.org/stable/985254).
2. Barnett, L. & Seth, A. K. (2023). [Dynamical independence: Discovering emergent macroscopic processes in complex dynamical systems](https://doi.org/10.1103/PhysRevE.108.014304).
3. Gerhart, J. & Kirschner, M. (2007). [The theory of facilitated variation](https://doi.org/10.1073/pnas.0701035104).
4. Aubin, J.-P. (2009). [Viability Theory](https://link.springer.com/book/10.1007/978-0-8176-4910-4).
5. Klyubin, A. S., Polani, D. & Nehaniv, C. L. (2005). [Empowerment: A universal agent-centric measure of control](https://doi.org/10.1109/CEC.2005.1554676).
6. Szathmáry, E. & Maynard Smith, J. (1995). [The major evolutionary transitions](https://www.nature.com/articles/374227a0).
7. Baldwin, C. Y. & Clark, K. B. (2000). [Design Rules, Volume 1: The Power of Modularity](https://doi.org/10.7551/MITPRESS/2366.001.0001).
8. Carlson, J. M. & Doyle, J. (2002). [Complexity and robustness](https://doi.org/10.1073/pnas.012582499).
