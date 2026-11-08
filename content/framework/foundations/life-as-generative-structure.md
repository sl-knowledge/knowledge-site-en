---
title: "Life as Generative Structure: Core Theory V2"
description: "From relational renewal and persistent execution to recovery: the EGBE working definition, a three-variable bridge model and proposed validation."
author: "SL"
version: "0.2.2"
created: "2026-09-28"
updated: "2026-11-08"
published: "2026-11-01"
publish: true
kind: article
aliases:
  - framework/life-as-generative-structure
lang: en
language: en
source: framework/foundations/life-as-generative-structure.md
sourceUpdated: "2026-11-08"
---

## Starting point: life concerns not only material, but how organization continues

The same material components, organized differently, can have very different capacities to persist. Which processes continually renew the relations sustaining a system? Is relational closure sufficient for persistence? Can it recover from disturbances? How does past activity change future recovery conditions?

The article brackets whether matter or information is ontologically fundamental and adopts a modelable relational perspective. It neither completely defines life nor requires every living entity to persist indefinitely, expand its environment or improve robustness. Empirical work must specify whether the object is a cell, individual, lineage, community or artificial system, and its relations to reproduction, evolution and physical resources.

**EGBE (Endogenous Generative Basin Expansion)** asks whether environmental structures left by past activity enable recovery from more specified disturbances after the current system has been standardized. This is narrower than “life changes its environment,” and a negative answer is allowed.

| Level | Question | Current status |
| --- | --- | --- |
| Relational structure | Which processes establish and renew core organizational relations? | Modeling perspective drawing on existing organization theory |
| Persistent execution | Does the abstract model admit execution repeatedly renewing every role? | Formal property under specified assumptions |
| Robust maintenance | Is there an executable continuing strategy against an explicit disturbance set? | Requires model, information and control conditions |
| EGBE | Does historically produced structure expand a specified recovery range? | Candidate property, not a defining condition of all life |
| Bridge model and experiment | Can reproducible dose, time and shock responses be obtained? | Phenomenological model and unexecuted research design |

Begin with the five counterexamples in part 1 and the EGBE definition in part 3. Parts 4–5 supply model and experimental interfaces; part 6 lists sources, candidate contributions and open problems.

## 0. The central narrowing in V2

V1’s main problem was not a mathematical error but that **structural theory, dynamics and microbial experiments had not formed a genuine logical chain**. V2 makes four corrections.

1. **Rename the term.** *Generative Entrenchment* is dropped to avoid confusion with Wimsatt’s concept and subsequent work. The candidate is now:

**Endogenous Generative Basin Expansion (EGBE)**

2. **Reduce novelty claims.** Petri nets, closure of constraints, Constructor Theory, viability/capture basins, Büchi games and option-set monotonicity are inherited foundations. “More degrees of freedom do not shrink the winning region” is not presented as new.

3. **Return the bridge model to the main argument.** An explicit mesoscopic coarse-graining connects structure and experiment. It is not uniquely derived from a Petri net; it projects core-relation renewal into a measurable generative functional state and adds beneficial environmental memory and self-generated toxicity.

4. **Test the model directly.** Primary observables become recovery-probability curves and the critical shock boundary:

$$
\boxed{q_{50}(\rho,\Delta)}
$$

Here $\rho$ is conditioned-environment dose and $\Delta$ its memory-aging time. Basin area remains only a secondary summary.

The proposed test chain is therefore:

$$
\boxed{
\text{Relational Structure}
\rightarrow
\text{Computable Bridge Model}
\rightarrow
\text{Dose–Response Prediction}
\rightarrow
\text{Falsification Experiment}
}
$$

---

## 1. Minimal structure: what kind of relational system is life provisionally taken to be?

### 1.1 Bracket matter and information ontology

No assumption is made that matter, information, fields or a particular substrate is most fundamental. Retain only:

- organization-defining relation/constraint roles;
- processes establishing, replacing and repairing those roles;
- causal dependence between relations and processes;
- whether the roles can be repeatedly realized under disturbance.

The object is therefore a typed incidence structure:

$$
\boxed{\mathfrak P=(\mathcal C,\mathcal P,\mathrm{Pre},\mathrm{Post},\mu)}
$$

Here $\mathcal C$ contains core relation roles, $\mathcal P$ renewal processes, and $\mu$ the current organizational marking. Using $\mu$ avoids confusion with environmental memory $m(t)$ below. A minimal renewal unit is not $x\to x$, but:

$$
\boxed{C_i\rightarrow p_j\rightarrow C_k'}
$$

where $C_k'$ is organizationally role-equivalent to $C_k$. Adding multiplicities produces an ordinary Petri-net/reaction-network form. This is a representational language, not an original invention here.

### 1.2 Five counterexamples determine the required strength of the definition

1. **Pendulum:** recurrence alone does not imply endogenous relational renewal.
2. **AND/OR:** pairwise graphs cannot represent all joint dependence; hyperedges or incidence are needed.
3. **Depletion:** $2A\to B,\ 2B\to A$ can exhaust despite closure, so structural closure is not sustainable renewal.
4. **Deadlock:** $2A\to2B,\ 2B\to2A$ with $\mu_0=(1,1)$ has balanced flux but cannot start; algebraic feasibility is not reachability.
5. **Good/bad disturbance:** one recovery path is not robustness; an existential path is not a winning strategy.

These separate three levels rather than treating closure as a universal explanation:

$$
\boxed{
\text{Structure}
\rightarrow
\text{Persistent Execution}
\rightarrow
\text{Robust Winning}
}
$$

### 1.3 A strict model-internal result: a finite self-covering certificate

Let $\mathrm{RenewAll}(w;\mathcal C_*)=1$ mean a finite firing word $w$ realizes every core role at least once. Define the Repeatable Generative Regime:

$$
\mathcal R_G=
\left\{
 \mu:\exists w,\ \mu\xrightarrow{w}\mu'\ge \mu,\ \mathrm{RenewAll}(w;\mathcal C_*)=1
\right\}.
$$

Define $\mathrm{Persistent}_G(\mu_0)$ as the existence of an infinite execution from $\mu_0$ renewing each core role infinitely often. There are finitely many core roles, and renewal is judged by fixed transition-event labels chosen beforehand, not reassigned after observing results.

For a standard P/T Petri abstraction with finitely many places and transitions and nonnegative integer arc weights, without inhibitor arcs, reset arcs, extra capacity bounds or other violations of monotonicity, the following model-internal criterion holds. Here $w$ is a nonempty finite word and markings are compared componentwise:

$$
\boxed{
\mathrm{Persistent}_G(\mu_0)
\iff
\exists \mu^*,w:\ \mu_0\to^*\mu^*\xrightarrow{w}\mu^+\ge \mu^*,\ \mathrm{RenewAll}(w;\mathcal C_*)=1
}
$$

This compresses a kind of infinite persistence into a finite witness using established Petri-net/VASS monotonicity and well-quasi-order ideas. It is not claimed as new mathematics. See [Esparza’s Petri-net lecture notes](https://www.cse.iitb.ac.in/~akshayss/courses/cs735/Esparza-lecture-notes.pdf).

**Argument sketch.** A self-covering renewal word can be replayed from the covering marking by monotonicity, renewing every role repeatedly. Conversely, partition an infinite execution into rounds completing all finitely many roles. Dickson’s lemma gives comparable markings at two round starts, yielding a self-covering segment containing complete renewal.

This conditional argument does not prove a real system is faithfully abstracted by the net, or that infinite execution means infinite physical time, actual resource supply or living identity. With an additional allowed set K, replaying the word may exceed K’s upper bounds. Constrained persistence then needs separate testing; the equivalence cannot simply be reused.

---

## 2. From having a viable path to retaining paths under disturbance

### 2.1 Generative capture basin

Let K be the allowed organizational states and $\mathcal R_{G,K}$ the target states from which all core roles can be continually renewed within K. Determine this target jointly with K, dynamics and actions; one self-covering check does not establish future compliance with K. Define:

$$
\boxed{\mathcal B_G=\operatorname{Capt}(K,\mathcal R_{G,K})}
$$

It asks:

> From which states does at least one allowed path reach a repeatable generative regime?

Thus $\mathcal B_G$ answers only the existential question: **does a recovery path exist?**

### 2.2 Robust generative winning region

If the environment supplies disturbance $d$ and the system selects response $u$, robust generativity uses:

$$
\boxed{\exists\pi\ \forall(d_0,d_1,d_2,\ldots)}
$$

There exists one strategy $\pi$ such that under every admissible disturbance history:

1. the system stays inside safe set $K$;
2. every core relation role is renewed infinitely often.

Given a suitable game graph, observation structure, allowed disturbances and role-acceptance events, this can be encoded as a generalized Büchi objective with safety. Strategies use only currently available information; deadlock cannot count as infinite renewal. [Research on generalized Büchi games](https://arxiv.org/abs/1607.05850) supplies formal foundations, not a computable solution for every real or infinite-state system. Define:

$$
\boxed{\mathcal W_G^{\mathrm{rob}}}
$$

as the robust generative winning region. With common dynamics, constraints, roles and compatible disturbance conditions, a robust strategy supplies at least one allowed persistent path:

$$
\boxed{\mathcal W_G^{\mathrm{rob}}\subseteq\mathcal B_G.}
$$

Büchi/game mathematics is established theory. Its role here is to replace vague resilience language with explicit quantifiers:

> **Not whether one good path exists, but whether one strategy handles a whole class of bad paths.**

---

## 3. The core candidate property: EGBE

### 3.1 Why V1’s “architecture change” is insufficient

V1 wrote:

$$
\theta_t\to\theta_{t+1},
\qquad
\mathcal B_G(\theta_t)\subsetneq\mathcal B_G(\theta_{t+1}).
$$

But any $\theta$ can enter a larger state:

$$
y=(x,\theta).
$$

“Changing the game” can then be ordinary motion in an expanded state space. EGBE cannot derive nontriviality merely from changing $\theta$.

### 3.2 Operational definition: standardize the current system, retain only historically produced external structure

Factorize explicitly:

$$
\boxed{Y=X\times\Theta}
$$

where:

- $X$ is the immediate state of current generative organization;
- $\Theta$ is persistent contextual structure formed by past activity that changes future $X$-dynamics.

The point is not that $\Theta$ lies outside state, but an interventional comparison:

$$
\boxed{do(X=x^*)}
$$

Standardize the current system at the same $x^*$ while allowing historically generated $\Theta$ to differ.

Let $\theta_H$ be a historical environment produced by generative activity, and $\theta_0$ a matched baseline. Let $\mathrm{Rec}(x^*,\theta,q)=1$ mean persistent generativity can recover after perturbation $q$ from standardized current state $x^*$. Then:

$$
\mathcal Q_G(x^*,\theta)
=
\{q\in\mathcal Q:\mathrm{Rec}(x^*,\theta,q)=1\}.
$$

If

$$
\boxed{
\mathcal Q_G(x^*,\theta_H)
\supsetneq
\mathcal Q_G(x^*,\theta_0)
}
$$

and the difference in $\theta_H$ is causally attributable to earlier activity of that generative system, call this:

**Endogenous Generative Basin Expansion (EGBE)**

Everything can still be ordinary dynamics in the larger $(X,\Theta)$ space. The candidate addition is an operational causal property: does past generative activity, through persistent context, expand recoverable perturbations after current-state standardization?

**Definition boundary.** EGBE is neither asserted as necessary for all life nor a sufficient life-detection test. It may be absent in some life-like systems and present in artificial or nonbiological ones. The object is a testable organizational property, not a solved definition of life.

Strict inclusion requires all previously recoverable disturbances to remain recoverable and at least one new one to become recoverable. A higher threshold, improved mean recovery or improvement under one shock is insufficient to prove full set expansion. Report trade-offs when some improve and others worsen. Experiments provide limited evidence only over covered disturbances.

Standardizing at $x^*$ is idealized. Actual work often matches only measured state and inoculation conditions. Record unobserved differences, randomization and batch effects; the same inoculum does not establish complete implementation of $do(X=x^*)$.

### 3.3 Robust EGBE is not tested by the proposed experiment

A stronger version requires:

$$
\mathcal W_G^{\mathrm{rob}}(\theta_H)
\supsetneq
\mathcal W_G^{\mathrm{rob}}(\theta_0).
$$

That needs adversarial/repeated disturbances and winning-strategy identification. The microbial experiment below **tests only existential/probabilistic EGBE, not robust EGBE**.

---

## 4. Bridge Model v0.2: from structural theory to measurable predictions

### 4.1 Coarse-graining: g is not biomass but joint recovery of core relations

For roles $C_1,\ldots,C_r$, let normalized renewal scores be $r_i(t)\in[0,1]$. Define a conservative coarse-grained order parameter:

$$
\boxed{g(t)=\min_i r_i(t)}
$$

Only recovery of every critical role makes g high. A smoother aggregation is possible experimentally but must be preregistered and must not average away the weakest core relation.

The bridge model is not uniquely derived from the Petri structure. It is a phenomenological projection generating quantitative predictions that can fail.

### 4.2 Three variables: beneficial memory and self-generated toxicity

Let:

- $g(t)$: current generative functional state;
- $m(t)$: beneficial environmental memory left by past activity;
- $z(t)$: inhibitory/self-toxic legacy;
- $q$: external shock intensity.

Use the minimal model:

$$
\boxed{
\dot g
=
 g\,[r_0-aq+\lambda m-\xi z^2-\kappa g]
}
$$

$$
\boxed{
\dot m=\beta g(1-m)-\eta m
}
$$

$$
\boxed{
\dot z=\gamma g-\delta z
}
$$

Both m and z are produced endogenously by earlier g, but affect future g in opposing directions. Self-inhibition permits historical activity to cause damage; the quadratic toxicity function is a modeling choice, not universal.

These empirical bridge equations are not rigorously derived from $g=\min_i r_i$. Specify units, nonnegativity and fitting ranges, with $a>0$ and $q\ge0$. Interpreting g as a normalized 0–1 score also requires positive invariance of that interval. For example, with other coefficients nonnegative, valid initial values and $\kappa\ge r_0+\lambda$, the upper-bound derivative does not point outward. Otherwise revise the model or define g as nonnegative functional intensity instead of interpreting unrestricted solutions as scores.

The first equation contains g as a factor; $g(0)=0$ cannot recover spontaneously. The model concerns recovery with residual function or an activity seed, not life originating from absolute zero function.

### 4.3 Conditioned-environment dose and aging

Mix historical conditioned environment with matched fresh environment at $\rho\in[0,1]$. After live-cell removal and aging for $\Delta$, approximate initial histories by:

$$
m(0)=\rho m_H e^{-\eta\Delta},
\qquad
z(0)=\rho z_H e^{-\delta\Delta}.
$$

Early in recovery with low g, approximate the net-growth boundary by:

$$
r_0-aq+\lambda m(0)-\xi z(0)^2=0
$$

For $s(q)=aq$, the computable critical shock is:

$$
\boxed{
q_c(\rho,\Delta)
=
\frac{
 r_0
 +\lambda\rho m_H e^{-\eta\Delta}
 -\xi\rho^2 z_H^2 e^{-2\delta\Delta}
}{a}
}
$$

This low-g, early-time net-growth threshold is not the full nonlinear system’s global recovery boundary. Long-term recovery also depends on initial g, subsequent m and z, noise, the target and observation horizon.

Experimental $q_{50}$ is the statistical 50% recovery threshold, not $q_c$. Report it only with an identifiable crossing in the observed range. Nonmonotonicity, multiple crossings or failure to cover 50% must be reported with uncertainty, not forced into an extrapolated boundary.

### 4.4 Four direct predictions

#### Prediction 1 — low-dose historical environment shifts the shock boundary

Under the model assumptions with $\lambda m_H>0$, fixed aging time and $\rho\approx0$:

$$
\left.\frac{\partial q_c}{\partial\rho}\right|_{\rho=0}
=
\frac{\lambda m_H e^{-\eta\Delta}}{a}>0.
$$

The primary prediction is a measurable shift along the shock axis, not merely higher average recovery.

#### Prediction 2 — self-toxicity permits an inverted U, not mandatory monotonic improvement

Because of $-\xi z^2$, high doses may weaken or reverse low-dose benefits. If the optimum lies at $0<\rho^*<1$:

$$
\boxed{
\rho^*
=
\frac{\lambda m_H e^{-\eta\Delta}}
{2\xi z_H^2 e^{-2\delta\Delta}}
}
$$

High-dose reversal is allowed by this parameterization. But given $\lambda m_H>0$, sufficiently low doses should have a positive slope. Flat or negative low-dose results can refute that conditional version; not every curve shape counts as success.

#### Prediction 3 — environmental memory has a timescale

At low dose with negligible toxicity:

$$
\Delta q_c(\rho,\Delta)
\approx
\frac{\lambda\rho m_H}{a}e^{-\Delta/\tau_m},
\qquad
\tau_m=\frac1\eta.
$$

Normalized by community generation/renewal time $\tau_G$, genuinely transgenerational externalized memory should systematically depend on $\Delta/\tau_G$, not occur only immediately.

#### Prediction 4 — residual memory after immediate-resource controls: a narrower test

General EGBE allows historical effects through resources, pH or other conditions if causal comparison and recovery-set requirements hold. The experiment asks a narrower question: after matching the current system and controlling major immediate physicochemical conditions, does a reproducible historical-structure effect remain?

Disappearance after matching weakens residual memory beyond matched resources and helps locate mechanisms; it does not alone reject general EGBE or a relational view of life. Matching may remove a genuine mediator. Prespecify whether the target is a total or residual effect.

---

## 5. A proposed falsifiable experiment: not yet performed

### 5.1 System proposal: a defined synthetic microbial consortium

The first experiment should not use a complex natural community with unmeasurable roles. Choose a reproducible synthetic consortium and prespecify at least three **core relation roles**, for example:

- $C_1$: substrate conversion/cross-feeding flux;
- $C_2$: complementary metabolism or detoxification;
- $C_3$: environment-conditioning/extracellular support.

These are **functional relation roles, not species names**. Member abundances can change if preregistered roles are re-realized.

Define structural recovery as every core-role score $r_i$ reaching a preregistered threshold for k serial transfers. Biomass and aggregate function are secondary endpoints. “80% biomass, 90% function” cannot replace structural recovery.

### 5.2 Preparing conditioned environment and controlling trivial explanations

Run the historical community long enough to generate $E_H$, then:

1. Remove live cells with a validated method and test alternatives such as residual biological activity.
2. Measure and match pH, osmolarity, major inorganic ions and known limiting nutrients.
3. Replenish depleted basal nutrients if needed so $E_H$ and fresh control $E_0$ match on these variables.
4. Retain extracellular, metabolite and environmental history not designated for erasure.
5. Inoculate with standardized $C_0$ for a $do(C=C_0)$-style comparison.

Add a **memory-erased control** removing or disrupting candidate historical structures while keeping immediate resources as similar as possible. Erasure may also change unmeasured properties. Use sham controls, validate specificity and, where needed, compare restoration of candidate factors. One erasure experiment does not automatically identify a unique mechanism.

### 5.3 Primary design: dose × aging × shock

Three continuous independent variables:

- dose: $\rho\in\{0,0.25,0.5,0.75,1\}$;
- aging delay: $\Delta/\tau_G\in\{0,1,2,4,8\}$, adjustable to the system;
- shock q: enough levels to cover recovery probabilities from near 1 to near 0.

These dose and aging grids are candidate designs, not power-analyzed fixed protocols. Before execution, freeze role measurements, thresholds, observation horizon, batches, independent replicate units, sample size, exclusions and minimum meaningful effect. Wells within a batch are not automatically independent biological replicates; blind measurement and analysis where possible. The primary outcome is:

$$
\boxed{P_{\mathrm{recover}}(q\mid\rho,\Delta)}
$$

Use a preregistered model to estimate:

$$
\boxed{q_{50}(\rho,\Delta)}
$$

the shock boundary at 50% recovery.

A two-dimensional grid, such as salinity × dilution, may reconstruct an approximate recoverable region as secondary analysis. Arbitrary rectangular basin area is no longer the primary endpoint.

### 5.4 Statistical tests directly corresponding to the bridge model

An initial logistic model could be:

$$
\operatorname{logit}P_{\mathrm{recover}}
=
\alpha_0
-\alpha_q q
+\alpha_1\rho e^{-\Delta/\tau_m}
-\alpha_2\rho^2 e^{-2\Delta/\tau_z}
+\text{batch effects}.
$$

Here:

- $\alpha_1>0$ corresponds to beneficial externalized memory;
- $\alpha_2>0$ to a high-dose inhibitory legacy;
- $\tau_m,\tau_z$ describe persistence times.

This is an initial statistical parameterization to test; identifiability under the design is not established. Positive and negative effects, two decay times and batch differences may confound one another. Check identifiability, intervals, alternatives and out-of-sample prediction rather than substituting the existence of an equation.

### 5.5 Preregistered failure conditions

Formal preregistration is not completed. For the prespecified claim of positive low-dose residual memory and its decay model, these outcomes would indicate failure, weakening or a need to reposition. A single negative experiment does not reject general EGBE:

1. With adequate power, $q_{50}(\rho,\Delta)$ shows no positive low-dose shift and intervals exclude the preregistered minimum effect.
2. Benefits disappear after pH, nutrient and osmotic matching: this weakens residual memory and supports studying mediation by the matched conditions.
3. After current-community standardization, historical environment does not predict core-role structural recovery.
4. A sufficiently broad and measurable aging range does not support the specified decay model. That weakens this timescale hypothesis; failure to observe decay does not establish absence of longer-lasting effects.
5. Validated, suitably specific candidate-memory erasure has no effect while resource supplementation reproduces the result, weakening the tested residual-memory mechanism.

Conversely, reproducible dose response and history aging, with erasure eliminating the boundary shift, would support:

$$
\boxed{
\text{past }G
\rightarrow
\Theta_H
\rightarrow
\Delta q_{50}
}
$$

under tested conditions. Intervention side effects must still be excluded and recovery sets checked against the definition. This does not automatically establish robust EGBE, a universal property of life or a cross-scale law.

---

## 6. What can currently be claimed—and what cannot?

### 6.1 Established foundations, not originality claims

Neighboring foundations include:

- Rosen’s relational biology/closure to efficient causation;
- Montévil–Mossio closure of constraints;
- RAF, reaction networks and Chemical Organization Theory;
- Petri-net self-covering, T-invariants, reachability and liveness;
- Constructor Theory’s self-reproducer and replicator–vehicle;
- Aubin’s viability and capture-basin theory;
- Büchi/generalized Büchi infinite-horizon games;
- niche construction, ecological inheritance and environmental memory.

Relational closure, self-reproduction, viability sets and action-set monotonicity under fixed conditions are not by themselves novel. These traditions do not share one model or assumption set; the list indicates sources and comparison targets, not an exhaustive novelty review.

### 6.2 Only two candidate additions are retained

#### Candidate A — EGBE as an interventional cross-scale causal property

The question is not simply whether a system changes its environment, but whether system-produced persistent context expands the **future recoverable perturbation set/boundary** after current generative state is standardized.

The proposed contribution is a common causal observable, not new mathematics:

$$
\boxed{
\mathcal Q_G(x^*,\theta_H)
\supsetneq
\mathcal Q_G(x^*,\theta_0)
}
$$

#### Candidate B — a generativity hierarchy as a cross-scale language

$$
\boxed{
\text{Structural Renewal}
\rightarrow
\text{Persistent Execution}
\rightarrow
\text{Robust Winning}
\rightarrow
\text{Endogenous Basin Expansion}
}
$$

The hierarchy has genuine theoretical value only if it preserves mathematical meaning across cells, organisms, lineages, ecosystems, the biosphere and artificial generative systems and produces new cross-domain predictions.

### 6.3 The main open questions

1. **Bridge derivation:** can a specified renewal network systematically yield coarse-grained g,m,z dynamics rather than an empirical specification?
2. **Extended-state nontriviality:** does EGBE retain a sufficiently stable causal interpretation across factorizations?
3. **Robust EGBE:** how can repeated/adversarial perturbations directly estimate changes in $\mathcal W_G^{\mathrm{rob}}$?
4. **Cross-scale invariance:** can the operational definition remain invariant from microbial consortia to higher-scale systems?

---

## 7. The one-sentence version

> **Life-like generativity can provisionally mean organizational relations repeatedly re-realized through internal processes; persistent generativity means a repeatable renewal regime exists; robust generativity means a winning strategy against disturbances exists; EGBE is a narrower, more testable candidate property—whether past system activity leaves context expanding future recoverable disturbances after standardization of the current state.**

If adequately discriminating controlled studies reject dose-response and timescale predictions, narrow or abandon the corresponding parameterization and conditional hypothesis rather than explaining every result as success. General EGBE, a particular mechanism and the relational perspective require separate evaluation. More general generative-structure research deserves advancement only when operational meaning remains clear across substrates and scales, credible alternatives are outperformed, and new predictions arise.

---

## Appendix A: Why rename the concept EGBE?

William C. Wimsatt used **generative entrenchment** at least from 1986 for early structures becoming harder to change because of downstream dependencies in developmental systems. It later extended to cultural and organizational systems. This article therefore no longer uses that term for its candidate.

EGBE concerns a different object:

$$
\boxed{
\text{system-produced historical context}
\rightarrow
\text{expansion of future generative recoverability}
}
$$

Operationalize it through current-state standardization and intervention.

## Appendix B: Sources and neighboring research

These sources support neighboring concepts or formal methods, not EGBE, the bridge equations or experimental results.

1. Montévil, M. & Mossio, M. (2015): [Biological organisation as closure of constraints](https://montevil.org/publications/articles/2015-mm-organisation-closure-constraints/). *Journal of Theoretical Biology*, 372, 179–191. DOI: 10.1016/j.jtbi.2015.02.029.
2. Marletto, C. (2015): [Constructor theory of life](https://arxiv.org/abs/1407.0681). *Journal of the Royal Society Interface*, 12, 20141226. DOI: 10.1098/rsif.2014.1226.
3. Aubin, J.-P., Bayen, A. M. & Saint-Pierre, P. (2011): [Viability Theory: New Directions](https://link.springer.com/book/10.1007/978-3-642-16684-6).
4. Esparza, J.: [Petri Nets: Lecture Notes](https://www.cse.iitb.ac.in/~akshayss/courses/cs735/Esparza-lecture-notes.pdf), for marking, reachability, covering and monotonicity.
5. Chatterjee, K., Dvořák, W., Henzinger, M. & Loitzenbauer, V. (2016): [Conditionally Optimal Algorithms for Generalized Büchi Games](https://arxiv.org/abs/1607.05850).
6. Wimsatt, W. C. (1986): *Developmental Constraints, Generative Entrenchment, and the Innate-Acquired Distinction*. A historical source listed in the original; see Wimsatt and Schank’s [Generative Entrenchment, Modularity and Evolvability](https://mechanism.ucsd.edu/~bill/ModelsAndPrediction/papers/wimsatt.Mod-evol-pardx-89POSTfin.pdf) for the term and later development.
7. Lee, E. D., Flack, J. C. & Krakauer, D. C.: [Outsourcing Memory Through Niche Construction](https://arxiv.org/abs/2209.00476), for comparison with environment modification and memory, not verification of EGBE.

Rosen’s relational biology, RAF and Chemical Organization Theory remain further comparison directions. Naming them does not establish assumptions, correspondences or originality differences.

## Appendix C: Material moved out of V1’s core argument

The following is retained in the archive but no longer occupies the core:

- the full methodological history of the Poincaré Lens;
- detailed Constructor Theory mapping;
- Prochlorococcus/SAR11 pressure tests of “control boundaries always expand”;
- scalar Generative Margin candidates;
- categories/operads as a compositional envelope;
- the complete self-covering proof;
- full robust Büchi fixed-point derivation;
- old v0.1 numerical simulations and basin-area results.

These remain provenance and future-retrieval material in the long research archive, not core novelty evidence for V2.

## Public-editing note and related reading

Based primarily on Core v2.0 of 2026-09-28, this page retains the seven-part argument, formulas, counterexamples and proposed experiments; the public edition was separately numbered v0.1. It adds qualifications on Petri abstractions and allowed sets, score ranges, local versus statistical thresholds, and general EGBE versus residual-memory tests.

Appendix C’s proofs, mappings and old simulations are archival pointers. This page neither supplies nor revalidates the simulations or treats them as reproduced results. The original document is retained; the web edition is maintained separately.

Related concepts: [Constraints and Future Options](../book/constraints-and-future-options.md), [Representation and Testing](../book/what-belongs-in-a-model.md), [Originality and Independent Validation](../methods/originality-and-validation.md).

---

<a id="research-notes"></a>

## Research and version notes

> **Public edition v0.1 · a relational perspective on life and research hypotheses.** Organized primarily from *Life as Generative Structure: Core Theory V2* (Core v2.0), dated 2026-09-28. No new experimental data are reported. EGBE is a candidate property, and the bridge model and experimental plan await validation. This page does not announce an established necessary-and-sufficient definition of life.
