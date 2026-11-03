---
title: "Constraints, Feasibility and Future Options: A Framework for Complex Systems Analysis"
description: "Based on the October 6 book draft v2.0, this framework connects constraints, reachability, viability, external access and internal capabilities, with stress-testing procedures and a research card."
author: SL
version: "0.3"
created: "2026-10-06"
updated: "2026-11-02"
published: "2026-10-31"
publish: true
kind: article
lang: en
language: en
source: framework/book/constraints-and-future-options.md
sourceUpdated: "2026-11-02"
aliases:
  - framework/constraints-and-future-options
---

> **Public edition v0.3 · a working framework.** Based primarily on *Reality: The World Is Not a Flat Table of Variables*, structural consolidation v2.0 dated 2026-10-06, using the terminology discipline of the architecture from the same date. Stress testing and analytical steps are adapted from methodology v0.4 dated 2026-09-24. Public-edition versions are recorded separately from source-research versions.

## Version selection and reading route

An older index designated methodology v0.4 as the principal version on September 24. The October 6 book reconstruction subsequently revised definitions. Thus v0.4 remains a complete historical main draft, but should no longer be called the latest expression of the whole research programme.

This public edition adopts newer distinctions: state is not mechanism, external availability is not internal capability, and reachability is not viability. “Freedom” is no longer a universal cross-domain scalar. Stress testing is one way to compare candidate explanations, not a general law that proximity to a boundary reveals more truth.

Chapters 1–8 retain the fuller conceptual argument. The subsequent stress-testing procedure and research card support analysis. Borrowed Viability, Warning Gap and related terms remain working diagnostics, not validated universal quantities.

## Introduction: represent the world before reasoning about it

Complex problems tempt us to analyse too soon: list dozens of variables, gather data, compare indicators and decide what matters. This hides an assumption—that reality has already classified itself, and that “revenue”, “technology”, “policy”, “cash flow”, “competition” and “management” naturally occupy the same level and merely need different weights.

A real complex system is not a flat variable table. Some changes make outcomes slightly better or worse; others, on failure, change which states the system can reach next. Factors nearly invisible in ordinary conditions can suddenly become decisive constraints after environmental change. Analysis should therefore begin not with the largest indicator but with the system, its environment, reachable states, reachable-but-unsustainable states, and the distinction between internal capabilities and what can only temporarily be accessed externally.

The task here is limited. It does not reinvent systems theory, control theory or viability theory, or propose new mathematics explaining everything. It establishes a minimal shared worldview and terminology for subsequent chapters. Reachability and viability already have mature theoretical traditions. The task is to connect them to a more upstream question: before reality has been formalised, how should systems be understood so that representation, forecasting and decision analysis do not begin in the wrong direction?

---

## Chapter 1. From variable tables to dynamic systems

Many analyses begin with lists. Company research lists revenue, profit, margins, cash flow, inventory and market share; national research lists GDP, budgets, population, industrial capacity and military spending; personal decisions list income, health, time, family and risk. This is not wrong, but can suggest that variables have equal standing and differ only in weight.

Actual systems often contain relations of dominance. A one-percentage-point margin decline usually worsens profitability; exhausted cash with closed financing may prevent a company from waiting for profitability to recover at all. Fewer flowers change a plant's performance; prolonged root oxygen deprivation may make the entire living process unsustainable. An equipment shortfall can reduce military efficiency; supply-chain failure can make subsequent states unsustainable. Weights alone cannot fully express such distinctions.

The better question is therefore:

> Which differences change the states the system can still enter next?

This moves analysis from static importance to dynamic consequences. A simplified system can be written:

\[
x_{t+1}=F(x_t,e_t,a_t,d_t),
\]

where \(x_t\) is the present state, \(e_t\) the environment, \(a_t\) available action or control, \(d_t\) disturbances, and \(F\) the transition relation. This expression is not new; it reminds us that many real variables matter because they change transitions, not because their values are large in a table.

This also explains the limits of a single-period cross-section. Similar profits, cash and inventory today do not imply similar futures. One system may have alternative supply, financing redundancy, mature engineering and rapid adjustment; another may not. Present outputs can resemble one another while future state spaces differ completely.

From the outset, then, complexity does not simply mean many coexisting variables: **present state, environment, action capability and transition mechanisms jointly determine future possibilities.** Constraints, freedom, viability, risk, investment and Human–AI research all ultimately depend on this shift.

---

## Chapter 2. System, environment and target/horizon

A system is not a box whose boundary is naturally drawn in reality. Different objectives and timescales can justify different boundaries for the same object.

For a listed company, “can intrinsic value per share keep growing over ten years?” may require internal capabilities, capital structure, customers, technology, supply chains and capital allocation. “Will the share price rise in five days?” often puts more weight on marginal buyers, positions, liquidity, event timing and market institutions. The object is unchanged; the analytical system changes with target and horizon.

This article therefore adopts:

\[
\text{Representation}=Z(\mathcal D;T,H),
\]

meaning that representation is constructed relative to raw evidence \(\mathcal D\), target \(T\) and horizon \(H\). This does not make reality subjective; it acknowledges trade-offs in any finite model. A limited question need not model the universe, but a variable's irrelevance at one timescale cannot establish irrelevance to every question.

Nor is the system merely an actor moving against a static background. Complex systems are often coupled in both directions:

\[
x_{t+1}=F(x_t,e_t,a_t),
\]

while

\[
e_{t+1}=G(e_t,a_t,a_t^{\text{others}},\ldots).
\]

Corporate price cuts change competitors' behaviour, national policies change other countries' industrial arrangements, simultaneous investor de-risking changes liquidity, and organisms alter local environments that affect later adaptation. A successful strategy may change its own environment and ultimately weaken the conditions making it effective.

At least two rounds of analysis are needed. First: what follows from an action in the current environment? Second: if the action occurs, how do the environment and other participants respond? Many supposed best strategies fail because the second round was never modelled, not because the first was illogical.

System Boundary here therefore means **the scope of the current analysis**. Keep it distinct from Constraint Boundary, Viability Boundary and Reachability Frontier. Scope partitions the analytical object; the other three describe different state-space structures within a model. Conflating them produces claims that sound profound but are difficult to test.

---

## Chapter 3. State, action, constraint, capability, access and mechanism

The danger in complex-systems language is not too few words but one word performing too many roles. Earlier uses of “constraint”, “freedom” and “Generator” sometimes mixed state, capability, causal mechanism, resources and future possibilities. Formal analysis must separate them.

**State** describes where the system is now. Cash balance, inventory composition, certification stage, equipment yield, soil moisture and military deployment can be state variables. State says what is present, not automatically why or what happens next.

**Action / Control** describes available interventions. Companies change capacity, price and allocation; investors buy, reduce holdings or wait; governments change policy; organisms move, regulate metabolism or change structure. State descriptions without available actions cannot answer decision questions.

**Constraint** limits admissible states, actions or transitions. Not every inconvenience is a constraint. A condition is structurally relevant to the current question when it actually limits the reachable, viable or decision set; it is a **binding constraint** when it is actively limiting at the present state.

**Capability** comprises resources, skills, controls and transformations the system can reliably call on internally. **Access** comes from the environment: open financing markets, available import channels, platform admission or allied assistance. Availability today is not internal possession tomorrow.

\[
\text{Access}\neq \text{Capability}.
\]

Favourable environments obscure this distinction. Persistently low interest rates may make cheap capital look like internal capability, and stable global supply chains may make critical domestic manufacturing seem unnecessary. Changed conditions can rapidly contract the feasible space dependent on external access.

**Mechanism** answers why state moves from \(x_t\) to \(x_{t+1}\). It differs from state and capability. Advanced equipment is a state or asset condition; reliably converting it into high-yield production is a capability; why yields improve with experience or certifications expand orders concerns mechanisms.

Accordingly, Generator is no longer a universal technical atom. Earlier uses are separated into mechanism, capability, transition dynamics, production process or state-generating process. Without sufficient evidence, use **Mechanism Hypothesis**. This is epistemic discipline, not wording alone: a plausible causal story is not an identified mechanism.

---

## Chapter 4. Reachability and viability

> **Knowledge status: established theoretical objects.** The sets and policies below depend on specified models, constraints, controls and horizons.

Where a system can go from its present state differs from where it can continue.

Given state \(x\) and horizon \(H\), write the reachable set as

\[
\mathcal R_H(x),
\]

answering which states can be reached within \(H\) under admissible actions and dynamics.

A reachable state need not have a sustainable path to it or retain critical constraints after arrival. Viability addresses this. For admissible set \(K\), an ordinary finite-horizon viability kernel can be written

\[
\operatorname{Viab}_H(K),
\]

the initial states for which at least one feasible control keeps \(x_t\in K\) throughout the horizon.

This simple distinction changes practical judgements. Rapid factory expansion may be technically possible, yet consuming cash faster than the new business becomes self-funding can make the scale target reachable without a viable path. A technically achievable national strategy can likewise lack sustained supply, fiscal resources, political tolerance or time.

Ordinary and robust viability also differ. With adverse disturbances, the question is not whether every future has its own best action selected with hindsight. It is whether a non-anticipating feedback strategy \(\gamma\) can preserve constraints against all permitted disturbances \(d(\cdot)\), broadly:

\[
\exists \gamma\ \forall d(\cdot).
\]

Reality is harder because dynamics and disturbance sets themselves are usually uncertain. In corporate, political or investment research, what is available is generally not the true viability kernel but an estimate relative to the current model and scenarios:

\[
\widehat{\operatorname{Viab}}_H(K\mid \mathcal M,\Sigma).
\]

This qualification is crucial. Subsequent recoverability, viability-margin and warning-gap judgements are **diagnostics conditional on models and scenarios**, not direct measurements of reality's true values.

Separating reachability and viability also reveals:

\[
x\in K\setminus \operatorname{Viab}_H(K).
\]

The system has not yet violated constraints and looks normal, but no path from the current state can maintain them for the given horizon. **Observable failure has not occurred, yet recoverability may already be lost.** Early-warning and timing questions begin here.

---

## Chapter 5. Freedom: reachability, viable optionality and adaptive optionality

“Freedom” was central to early drafts and especially prone to overgeneralisation. Defining it merely as option count or reachable-state count suppresses crucial distinctions. Formal analysis therefore retains freedom as an umbrella natural-language term, not a single mathematical atom.

The first layer is **reachability freedom**: where can I go? This is chiefly described by \(\mathcal R_H(x)\). More feasible actions, stronger capabilities and a longer window generally support a larger reachable set.

The second is **viable optionality**: which reachable futures preserve viability after arrival? If most options rapidly undermine critical constraints, numerous apparent choices do not establish long-term choice capacity. The concern is not raw state count but the intersection of reachability and subsequent viability.

The third is **adaptive optionality**: after environmental change, can paths be adjusted, substituted or restructured? Control capability, alternatives, learning speed, modularity, redundancy and the ability to change rules matter. Systems with the same present option counts can consequently fare very differently under shocks.

The most stable natural-language expression is no longer

\[
\text{Freedom}=|\Omega|,
\]

but:

> Freedom is closer to the capacity to preserve and reconstruct effective options under uncertain futures.

This remains philosophical compression. Analysis should unpack reachable sets, viability, available controls, adaptation time, robustness and reversibility. This retains the intuition of future optionality without covering distinct established structures with one broad word.

Voluntary commitment need not reduce meaningful freedom. A system with several viable paths may close some and concentrate resources on long-term capability; this differs from lock-in because no alternative remains. Commitment still requires separate analysis of costs, reversibility and correction interfaces. The foundation here is that **observed present option count does not directly represent future optionality**.

Those layers describe model-estimated paths and restructuring capability. Analysing an actor's choices additionally requires distinguishing paths **known or believed feasible** from paths **considered acceptable**. Actual paths may go unseen, believed paths may fail, and visible paths may be rejected on objectives, values or risk standards. Analysts also estimate feasibility under models and evidence, not infallibly.

Staying, leaving or committing alone therefore cannot reveal actual fallback options, knowledge or endorsement. This distinguishes analytical objects rather than providing a complete behavioural equation. See the [three objects of path analysis](../methods/canonical-vocabulary.md#path-objects) and sections 1.1 and 6.1 of [Cooperation under Incomplete Trust](../../applications/cooperation-under-incomplete-trust.md).

---

## Chapter 6. Four different boundaries

“Close to the boundary” is appealing and dangerous. Without specifying the boundary it can sound plausible everywhere while resisting precise testing. From this chapter onward, unqualified Boundary is avoided.

First, **System Scope / System Boundary** is not a state-space failure line but a representation choice: what enters the system and what is treated as environment. It changes with target/horizon.

Second, **Constraint Boundary** is

\[
\partial K.
\]

Crossing it directly violates admissibility: cash falls below required short-term payments, temperature exceeds an equipment limit, or a legal condition is breached. It is the most intuitive failure boundary.

Third, **Viability Boundary** is

\[
\partial\operatorname{Viab}_H(K).
\]

A system beyond it may remain within \(K\) for now, without visible failure, yet have no path sustaining constraints under the current model, controls and horizon. This concerns lost recoverability rather than immediate failure.

Fourth, **Reachability Frontier** is

\[
\partial\mathcal R_H(x).
\]

It is the opportunity frontier under current capabilities, time and dynamics, not a safety boundary. A system can be far from failure yet reach a technological or capability frontier, or have a large reachable set and poor viability.

These distinctions sharpen earlier intuitions. Pressure sometimes exposes buffers, substitutes and binding constraints, but proximity to any boundary does not necessarily increase information. Noise may rise, constraints may bind jointly, reflexivity may change mechanisms, and irreversible failure may occur.

Boundary-Based Prediction is therefore not retained as a universal principle. The broader evidential principle is to seek **Discriminating Observations** generating different responses across competing representations. Stress tests can be effective perturbations under some conditions, not an epistemic law that truth must appear at boundaries.

---

## Chapter 7. Recoverability, Borrowed Viability and Warning Gap

These related objects have different knowledge status. Recoverability extends viability thinking directly. Borrowed Viability and Warning Gap remain **[Working Diagnostic]** terms, potentially useful in analysis but not universal quantities from mature theory.

### 7.1 Recoverability: what is lost first may not be current normality

A system can operate normally today while return to long-term sustainability becomes harder. The practical issue is often not whether failure has occurred but whether adjustment started now can finish in time.

A timing expression helps. From the same reference time, \(\widehat\tau_{\mathrm{survive}}\) estimates remaining time sustaining critical constraints and \(\widehat\tau_{\mathrm{response}}\) estimates the full response, including required judgement, coordination, initiation and execution:

\[
\widehat m_\tau=\widehat m_{\mathrm{eff}}
=\widehat\tau_{\mathrm{survive}}-\widehat\tau_{\mathrm{response}}.
\]

The time margin consistently means effective margin. Map the old \(\tau_{\mathrm{adapt}}\) according to its included stages. Zero means exact completion under ideal conditions; a negative value only indicates that the described plan may be too late under current assumptions. A narrowing margin first means less waiting or error tolerance for that plan, not a necessary rapid decline in all option counts. This depends on model, scenario, plan and estimates; it is not a universal viability score. Section 7.4 separates timing stages.

### 7.2 Borrowed Viability: internal continuation or continuation permitted by the environment?

Modern systems rely heavily on external access: businesses on finance, customers and supply chains; states on trade, energy and alliances; individuals on institutions and social networks. Dependence itself is not fragility. The concern is mistaking environmental access for internal capability.

Under the same modelling assumptions, compare an estimated viable region using only internal capabilities, \(\widehat V_H^{\mathrm{internal}}\), with one permitting external financing, supply and policy support, \(\widehat V_H^{\mathrm{access}}\). Their difference is a working expression of Borrowed Viability:

\[
\widehat V_H^{\mathrm{access}}
\setminus
\widehat V_H^{\mathrm{internal}}.
\]

Do not interpret the difference mechanically. Access can bring obligations, dependencies and risks as well as opportunities, so this is no inherent set-expansion theorem. Ask how continuation depends on incompletely controlled external conditions, how long adjustment takes if they disappear, and whether alternatives exist.

### 7.3 Warning Gap: how much actionable time precedes visible failure?

If recoverability deteriorates before observable failure, the valuable question is not merely whether the viability boundary precedes the failure boundary. It is **how large the lead is and whether it is observable in advance**.

Let \(\widehat t_V\) estimate entry of recoverability into a danger region under current models and thresholds; let \(\widehat t_F\) mark observed performance crossing its failure threshold. Define the working diagnostic:

\[
\widehat G_W
=
\widehat t_F-\widehat t_V.
\]

A large \(\widehat G_W\) can mean a long phase of apparent normality while future recovery becomes harder. Decision-relevant research then asks which observables indicate \(\widehat t_V\), which environmental changes compress the gap, and which actions can enlarge adaptation time.

Corporate examples include cash runway, refinancing, customer switching, inventory quality and project maturation; technological paths include engineering validation and capital consumption; national systems include fiscal, industrial-substitution and institutional-adjustment speeds. Each domain needs fresh operationalisation, not a directly comparable universal number.

<a id="recovery-time-structure"></a>

### 7.4 Three timing objects: completion deadline, latest initiation and detection

For specific scenarios, distinguish detection \(t_D\), actual execution start \(t_A\), completion \(t_C\), and completion deadline \(D\) under a specified no-response baseline. Let pre-execution judgement, coordination and initiation delay be \(\ell\), execution duration \(\tau_{\mathrm{exec}}\), and full response duration \(\tau_{\mathrm{response}}=\ell+\tau_{\mathrm{exec}}\). With fixed sequential stages and no relief before completion:

\[
t_L=D-\tau_{\mathrm{exec}},\qquad t_R=D-\tau_{\mathrm{response}},
\qquad m_{\mathrm{eff}}=t_R-t_D=t_L-t_D-\ell.
\]

**The entire response must begin by \(t_R\); actual execution must begin by \(t_L\).** The detection-to-\(t_L\) window must accommodate pre-execution delay and equals effective margin only if \(\ell=0\). Beginning exactly at the corresponding latest time can still meet this deterministic deadline, but leaves no tolerance. For an already-started response, calculate remaining stages from the same reference time without deducting completed judgement or coordination again.

In the [fictional example in cooperation article section 2.7](../../applications/cooperation-under-incomplete-trust.md), eight weeks of inventory plus four tolerable weeks of stopped production give \(D=12\) weeks. The original five cases explicitly set \(\ell=0\), retaining their numbers. For a separate variant with four weeks' execution, detection at week 3 and one week's coordination, full response takes five weeks, \(t_R=7\), \(t_L=8\). Begin the process at week 3, execute at week 4 and finish at week 8: effective margin is four weeks. The five-week detection-to-latest-execution window includes one week of coordination, not five weeks of additional flexibility.

Buffers may change \(D\), preparedness may shorten execution or coordination, and better observation may advance \(t_D\); these are different quantities. Compare full response durations across plans, not execution speeds alone. Effects and costs depend on parameters and give no universal action priority.

For a fixed baseline process not yet begun, define \(t_V=t_R^*-\delta\) using the fastest complete-response option, with advance threshold \(\delta\ge0\). The old \(t_V=t_L-\delta\) agrees when the corresponding plan has \(\ell=0\). Visible-failure time \(t_F\) and latest initiation have no universal ordering. All these times depend on models. Overlapping stages, partial effects or changed deadlines require trajectory comparisons. See the [canonical vocabulary](../methods/canonical-vocabulary.md#recovery-time-structure) and [ST8](../methods/stress-testing.md#st8).

Recoverability, externally supported viability and Warning Gap point to a central practical insight: **failure is not the only event worth observing; loss of recovery capacity often occurs earlier.**

---

## Chapter 8. From world to model

We now have a language more precise than a variable list: state differs from mechanism, capability from access, reachability from viability, scope from state-space boundaries, and apparent normality from recoverability.

A harder problem follows: these objects do not arrive in reality already labelled.

Control theory typically starts with states, controls and dynamics; viability theory with constraints and dynamics; MDPs with states, actions, rewards or transitions. Inquiry instead starts with mixed evidence:

- news and documents;
- financial statements and prices;
- behaviour and interviews;
- images and sensors;
- expert judgements;
- conflicting accounts;
- extensive missing information;
- details of uncertain relevance.

Formal theory often begins:

\[
\text{Given a representation}
\]

whereas open-world research must first ask:

\[
\text{What should the representation be?}
\]

This moves from system description to selecting and revising representation.

Given evidence \(\mathcal D\), target \(T\) and horizon \(H\), construct representation \(Z\). It need not be a complete world model: it should be simple and testable enough for the question, preserving differences that actually change reachability, viability, forecasts or decisions.

Two harder questions immediately arise.

First:

> How do we know we retained the right differences rather than merely built a persuasive explanatory story?

Second:

> Even if the representation is sufficient today, how do we recognise that it is no longer sufficient after reality changes?

These are central to subsequent representation research:

\[
R1:\quad
\text{How do we discover a minimal decision-relevant representation from open-world evidence?}
\]

and

\[
R2:\quad
\text{How do we detect loss of decision sufficiency and repair the representation with minimal structural change?}
\]

The foundation ends with an epistemic question, not a world formula. Powerful reasoning cannot rescue the wrong representation. Analysis must continue asking **what belongs in the model**.

---

## Terminology index

**System Scope / System Boundary**<br>
What the analysis includes as system or treats as environment, relative to target/horizon.

**State \(x_t\)**<br>
The system's present condition.

**Environment \(e_t\)**<br>
Environmental state affecting transitions and potentially changed by system behaviour.

**Action / Control \(a_t\)**<br>
Actions or controls available to the system.

**Constraint**<br>
A condition limiting admissible states, actions or transitions.

**Admissible Set \(K\)**<br>
States satisfying critical constraints.

**Capability**<br>
Resources, skills and transformations reliably callable internally.

**Access**<br>
An externally provided channel currently callable but not fully controlled.

**Mechanism Hypothesis**<br>
A candidate explanation of transition mechanisms.

**Reachable Set \(\mathcal R_H(x)\)**<br>
States reachable from the present state within the given horizon.

**Viability Kernel \(\operatorname{Viab}_H(K)\)**<br>
Initial states permitting a policy that maintains constraints over the horizon under given dynamics and controls.

**Scenario-Conditioned Viability Estimate \(\widehat{\operatorname{Viab}}_H(K\mid\mathcal M,\Sigma)\)**<br>
An open-world estimate relative to the current model and scenarios.

**Constraint Boundary \(\partial K\)**<br>
The boundary of direct admissibility violation.

**Viability Boundary \(\partial\operatorname{Viab}_H(K)\)**<br>
The boundary beyond which sustainable paths are lost under the model and horizon.

**Reachability Frontier \(\partial\mathcal R_H(x)\)**<br>
The reachable frontier under present capabilities and horizon.

**Reachability Freedom**<br>
A natural-language expression of where one can go.

**Viable Optionality**<br>
Reachable future options that preserve viability after arrival.

**Adaptive Optionality**<br>
The ability to adjust, substitute or reconstruct paths after environmental change.

**Borrowed Viability [Working Diagnostic]**<br>
The portion of viability dependent on external access.

**Warning Gap [Working Diagnostic]**<br>
The estimated interval between recoverability entering a danger region and observable failure.

---

## Summary of the foundations

Four insights remain.

First, reality is not a table of equal-standing variables; the issue is which differences change future possibilities.

Second, separate reachability from viability. Getting there does not mean surviving the path or retaining choices after arrival.

Third, absence of visible failure does not imply recoverability remains. Decisions must examine response time, dependence on external access and warning windows.

Fourth, all formal objects presuppose that we know what belongs in the model. The open world does not perform that step for us.

The next question follows:

> **How do we know what belongs in a model?**

---

## Practical use: three types of stress test

The following procedure inherits methodology v0.4 but uses newer terminology. Stress tests compare mechanisms, test strategies and expose assumptions; one pressured performance does not prove the whole theory.

### 1. Exogenous environmental change

Change financing, supply, demand, policy, temperature or other relevant scenario conditions and observe:

- which critical constraint binds first and whether common risk sources exist;
- which external access closes and whether internal capability can substitute;
- remaining buffer-supported time and switching/adaptation time;
- which paths remain reachable while sustaining constraints under the specified model and scenarios.

### 2. Endogenous feedback

Let the system take a candidate action, then ask how the environment and other actors respond:

- counteraction, imitation, runs or coordination failures;
- short-term gains purchased by consuming long-term buffers;
- propagation of local problems across levels;
- present success changing the conditions that made the strategy effective.

### 3. Commitment and exit

For expansion, transformation, long-term cooperation or personal choices, also examine:

- whether alternative paths are genuinely feasible;
- understanding of major costs and irreversible parts;
- preserved exit, correction and reallocation interfaces;
- whether commitment forms capability or damages future recovery.

## Practical use: eight steps from question to revision

1. **Freeze the question.** Specify object, objective and horizon. The same object may need different representations across horizons.
2. **Define failure.** State core functions, thresholds, admissible actions and irreversible damage rather than merely “good” or “bad”.
3. **Construct a minimal representation.** Separate states, capabilities, access and mechanism hypotheses. Add internal levels when distinctions change judgement.
4. **Examine future paths.** Separate reachability, maintaining constraints along the path and sustainability after arrival. State model and scenario conditions.
5. **Examine recovery time.** Compare remaining buffer time with adaptation, substitution, organisation and capability-building time, retaining estimate intervals.
6. **Run three types of test.** Examine external shocks, endogenous feedback and commitment, seeking common risks, veto nodes and cross-level propagation.
7. **Retain alternatives.** State at least one competing mechanism and seek observations generating different predictions. Safe, controlled stress testing is only one method.
8. **Freeze and update judgements.** Record dates, probabilities or confidence, expected signals, disconfirmation and actual outcomes. Separate randomness, parameter error, strategy error and representation omission before necessary minimal revision.

## A one-page research card

~~~text
Object / date:
Objective / horizon:
Core function / failure threshold:
Facts / reported statements / inference / hypotheses / unknowns:
Present state and executable actions:
Critical capabilities and external access:
Candidate paths / constraints along the way / sustainability after arrival:
Estimated ranges for buffer and adaptation time:
Exogenous shock / endogenous feedback / commitment and exit:
Main explanation / competing explanation:
Most discriminating next observation:
Advance judgement / disconfirmation conditions / review date:
Actual result / error type / minimal revision:
~~~

## Editorial scope and research boundaries

This public article presents the general framework, not full national, corporate or personal cases from the source library. Internal “part one”, “part two” navigation is recast for standalone articles; earlier stress-test terminology is aligned with the October 6 distinctions.

Cross-domain similarity is not treated as causal proof, and no universal cross-domain score is established. Mature mathematical objects need specific models for calculation; working diagnostics require operationalisation, controls and out-of-sample testing. A framework that retrospectively explains every opposing result but cannot identify prospective failure conditions has not yet demonstrated predictive ability.

## v0.2 revision note

Chapter 5 distinguishes path objects. Section 7.4 adds cooperation research's timing structure to the foundations, including simplified assumptions, zero margin and estimation limits. Original chapter numbers and formulas remain, with additional formulas and cross-references but no new empirical results.

## v0.3 revision note

Sections 7.1 and 7.4 align full response duration and effective margin, distinguish two latest-start times and add a coordination-delay variant. Earlier case values remain under zero additional delay; general recoverability still requires a specific model.
