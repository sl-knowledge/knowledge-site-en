---
title: "Simplification and Recovery Paths: Recoverability in Constrained Systems"
description: "Separates the cost of representation, rules and execution from recoverability, and examines sufficiency, rule retention under limited testing and conditional comparisons."
author: SL
version: "0.2.1"
created: "2026-11-03"
updated: "2026-11-03"
published: "2026-11-03"
publish: true
status: "Public research draft"
kind: article
lang: en
language: en
source: framework/foundations/simplicity-and-recovery.md
sourceUpdated: "2026-11-03"
tags:
  - theory-framework
  - representation
  - recoverability
  - stress-testing
---

# Simplification and Recovery Paths: Recoverability in Constrained Systems

**SL · Public research draft v0.2 · 2026-11-03**

> **Core question: how can operating burdens be reduced while retaining the required capacity to recover?**
>
> This article develops abstract structures, conditional arguments and mechanisms to be tested. It does not discuss particular events or entities, or provide operating rules for a particular system. SF1–SF9 provide stable references; the original identifiers are retained, with the new SF9 in section 9. Numbering does not give all statements the same evidential status. Section 10 offers reading prompts; section 13 compares external research. These formulations are not presented as original laws whose novelty has been established.

## 1. What has been simplified, and what has been retained?

A decision process operating with limited information, resources and time must select which distinctions enter its representation, which branches enter its rules, and which steps enter execution. Retaining every distinction may exceed the available budget; omitting too many may remove the conditions needed for judgement and adjustment.

Simplification can reduce the costs of computation, storage, communication, coordination or execution. Yet a rule that is easier to run does not guarantee that the subsequent states it produces will be easier to recover from.

Two questions therefore need separate evaluation:

> **What burden does the simplification reduce? Which subsequent feasible paths does it change?**

“Recovery paths” serves here as an accessible umbrella expression. A concrete study should distinguish the capacity to continue satisfying constraints, the capacity to reach a specified state, and the capacity to restore a specified function after a disturbance. These are related but not interchangeable.

This article adopts representation and decision sufficiency from [How Do We Know What Belongs in a Model v0.1.1](../book/what-belongs-in-a-model.md), and viability, irrecoverable loss and adjustment costs from [Acting in an Uncertain World v0.2](../book/acting-under-uncertainty.md). It asks which links allow simplification to change these conditions.

## 2. Three kinds of simplification, with different effects

<a id="sf1"></a>

> **SF1 — Specify what is being simplified before discussing its effects.** Simplifying representation, rules and execution can have interacting effects. A reduction in the cost of one component does not by itself establish an improvement in the whole process.

| Object of simplification | What is omitted or merged | Effects to examine |
| --- | --- | --- |
| Representation | State distinctions, variables, relationships, scenarios | Whether conditions that change constraint judgements or recovery paths are omitted |
| Rules | Branches, comparison steps, trigger conditions | Whether different constraint states are incorrectly mapped to the same action |
| Execution | Operating steps, interfaces, handovers, coordination | Whether delay and error are reduced, or necessary adjustment channels are also closed |

A smaller representation does not guarantee easier execution: omitted conditions may leave execution with additional correction work. A shorter rule does not guarantee a coarser representation either: more adequate advance analysis may produce a more concise execution rule. More execution steps can increase burdens, but can also provide necessary checks and isolation.

“Simple” therefore cannot be treated directly as a single quantity. Before comparing, specify the cost dimension, measurement method and operating conditions. If different costs are to be weighted, the weights are an additional evaluative assumption.

## 3. Define operating cost and recoverability separately

### 3.1 What must be fixed before comparison?

Declare a set of comparison conditions \(\Theta\), including at least:

- the dynamic model, range of initial states and set \(\Omega\) of permitted complete disturbance scenarios;
- the constraint set \(K\), observation horizon \(H\) and recovery target \(G\);
- available information, information delays, callable actions and authority;
- resource budgets, computational and coordination conditions, execution duration and recovery criteria.

Here \(G\) denotes the recovery target set. Not every task must return to its original state. After structural change, the recovery target may need to be redefined; such a change must be explicit rather than made retrospectively to obtain a better result.

A rule must be implementable under the declared information and timing conditions. Evaluation cannot grant the operating process information it has not yet obtained, or assume that an action callable in a model is callable in practice.

### 3.2 A finite-horizon formalisation

Let \(\pi\) denote a complete policy, including its representation, rules and execution arrangements. The policy may use only information already available at the relevant time. Identical available-information histories yield identical deterministic decisions. The following discussion is restricted to deterministic policies and does not introduce a success criterion for randomisation.

Write the selected operating cost as \(c(\pi;\Theta)\). It may be the worst computation time over a specified test domain, or another explicitly defined single metric. Costs defined differently cannot be mixed directly.

Over a common range \(X_0\) of candidate initial states, define:

\[
\mathcal R_\pi(\Theta)=
\left\{
x\in X_0:
\begin{array}{l}
\text{for every declared permitted disturbance,}\\
\text{the entire trajectory generated by policy }\pi\text{ remains in }K,\\
\text{and at }H\text{ satisfies }x_H\in G\text{ within the fixed budget}
\end{array}
\right\}.
\]

The definition includes both constraint satisfaction along the path and attainment of the recovery target within the deadline; it does not check only the endpoint. If the task requires the target to be maintained after arrival, add a maintenance condition or extend the evaluation horizon.

\(\mathcal R_\pi\) is the conditional recovery region of a given policy under a given model. It is neither an infinite-horizon viability kernel nor a recovery region already identified completely in reality. Model estimates, the judgements retained by the operating process, and actual feasibility must still be distinguished; see [Canonical Vocabulary: Three objects of path analysis](../methods/canonical-vocabulary.md#path-objects).

The same policy must handle all declared disturbances. One cannot first learn the disturbance outcome, then choose a different policy for each outcome and call the separately feasible results one common guarantee.

<a id="sf2"></a>

> **SF2 — Lower operating cost does not by itself guarantee a larger recovery region.** Without additional structural conditions, an ordering of \(c\) does not imply an inclusion relation between the corresponding \(\mathcal R\) sets.

A formal counterexample suffices. Let the only candidate initial state be \(x_0\), the recovery target be \(g\), the failure state be \(f\), the admissible set be \(K=\{x_0,g\}\), and the horizon be one step. Under deterministic transitions, the lower-cost policy sends \(x_0\) to \(f\), while the higher-cost policy sends it to \(g\); let both costs be within budget. The former costs less but has an empty recovery region; the latter has a recovery region containing \(x_0\).

This construction refutes only the implication that reducing cost necessarily enlarges the recovery region. It does not show that lower-cost policies are usually worse. With a different transition structure, a lower-cost policy may preserve or enlarge the recovery region. The effect depends on specific relationships and cannot be inferred from the cost ordering alone.

## 4. When can simplification cease to be sufficient?

<a id="sf3"></a>

> **SF3 — If simplification merges states requiring different actions, examine whether a common feasible action remains.**

Suppose \(x_1\) and \(x_2\) have the same available-information history before the first action. For the first choice that must now be made, no additional signal capable of distinguishing them is available in time. Feasible waiting or probing, if available, must itself enter the candidate actions together with its timing, resource and constraint consequences.

To remove ambiguity in “could lead to recovery”, first define an optimistic set. Let \(\mathcal P^+\) be the set of continuation policies allowed to use complete current and past state information. These policies still cannot foresee future disturbances. Additional information is an analytical relaxation with no acquisition or processing cost; physical dynamics, action authority, the remaining horizon and resource constraints remain unchanged. A policy may ignore the additional information and reproduce an original restricted policy.

Let \(Q_\Theta(x,a,\pi^+,\omega)\) be an eligibility test: it equals 1 when, starting from \(x\), first taking \(a\) and then following continuation policy \(\pi^+\) in scenario \(\omega\), the whole trajectory satisfies the constraints, recovery target, deadline and budget in section 3; otherwise it equals 0. Define:

\[
\overline A_\Theta(x)=
\left\{
a:\exists\pi^+\in\mathcal P^+,\ 
\forall\omega\in\Omega,\ 
Q_\Theta(x,a,\pi^+,\omega)=1
\right\}.
\]

“There exists a policy” precedes “for all disturbances”. One cannot first identify a future scenario and then select a different, foresighted continuation for it. This is an optimistic range of feasible first actions, not a certified set of actions available in practice.

Let \(A_\Theta^{\mathrm{adm}}(x)\) be the corresponding set when continuation policies may use only actually available information and must meet actual implementation conditions. Because \(\mathcal P^+\) contains these restricted policies, \(A_\Theta^{\mathrm{adm}}(x)\subseteq\overline A_\Theta(x)\).

If

\[
\overline A_\Theta(x_1)\cap\overline A_\Theta(x_2)=\varnothing,
\]

then no deterministic policy based on the current common information history can guarantee eligible recovery from both states.

**Argument.** A common information history requires the same first action. If an actual policy could recover eligibly from both states, its first action would belong to both actual feasible-action sets and therefore to both optimistic sets, contradicting their empty intersection. If no common eligible first action exists even after relaxing subsequent information, the actual information restriction cannot remove the obstruction.

This is a sufficient test of impossibility, not a necessary condition for every failure. Even if the optimistic sets intersect, recovery may remain impossible because actual information is insufficient or no common continuation policy exists. Complete state information is not future information: initial information gaps, later information gaps and uncertainty about future disturbances must be recorded separately.

Nor is merging states necessarily harmful. If merged states share an executable eligible policy, compression may preserve sufficiency. The two-state argument also extends: if the optimistic first-action sets of all states in one information-equivalence class have empty common intersection, there is no common eligible first action for every state in that class. Pairwise disjointness is not required.

This gives a concrete direction for examining decision sufficiency:

> **Do the omitted distinctions change the required action, the constraint judgement, the recovery deadline or the callable paths?**

More information is not automatically better. New information may arrive too late, share errors, or push processing time beyond the available window. Sufficiency must be judged under conditions in which information can be obtained, processed and used in time.

## 5. Simplification can also preserve or create recovery paths

<a id="sf4"></a>

> **SF4 — Simplification can affect recoverability through at least two opposing routes: saving operating resources, and losing necessary distinctions or adjustment capacity. The net effect must be examined under common conditions.**

One possible route is:

fewer unnecessary steps → a shorter full response duration → completing a transition before the deadline that previously could not finish in time.

Another possible route is:

omission of a critical distinction or branch → an action inappropriate to the current constraints → resource consumption or closure of subsequent channels.

These are candidate mechanisms, not a description of every simplification. They may also occur together or be offset by other feedback.

Timing comparisons follow the [canonical recovery-time structure](../methods/canonical-vocabulary.md#recovery-time-structure) and [Stress Testing ST8](../methods/stress-testing.md#st8): distinguish pre-execution delay, execution duration and full response duration. Fewer steps do not automatically mean lower end-to-end duration; parallel work, waiting, rework and information updates may change the result.

## 6. Compare without turning recovery paths into a single score

<a id="sf5"></a>

> **SF5 — Inclusion between recovery regions has a direct interpretation only when the objects and conditions of comparison agree. When they cannot be ordered, retain the differences instead of forcing a ranking.**

Under a common \(\Theta\), cost definition and target, if

\[
c(\pi_1;\Theta)\leq c(\pi_2;\Theta),
\qquad
\mathcal R_{\pi_1}(\Theta)\supseteq\mathcal R_{\pi_2}(\Theta),
\]

then \(\pi_1\) can be described as no worse than \(\pi_2\) on these two fixed metrics. If at least one is strictly improved, it dominates the other on these two metrics. This is a definition of local comparison, not an optimality conclusion for every objective.

When recovery regions overlap without containment, the two policies may preserve recovery from different states or under different scenarios. Losses, deadlines, targets and evaluative weights must then be specified; counting set elements is not enough. Multiple paths may also fail together through dependence on the same channel.

If no recovery policy can be certified under the declared conditions, this article cannot supply a safe action on that basis. Recoverability can only serve as a comparison dimension whose conditions need further specification. Unknown, unrankable, and no eligible candidate must all be permitted research outcomes.

This boundary follows [C17 in Control, Information and Time v0.2](../../applications/viability-first-control.md#c17): a candidate comparison principle is not a safety guarantee. Placing preservation of a required recovery capacity ahead of cost optimisation is itself a design priority that must be declared, not a value conclusion that follows automatically from the set definitions.

## 7. From adequate analysis to concise rules

<a id="sf6"></a>

> **SF6 — Complexity at the analysis stage can differ from rule length at the execution stage. A concise rule still needs applicability conditions, failure signals and an entry point for revision.**

More adequate advance analysis can identify distinctions that must be retained, scenarios sharing an action, and unknowns that the current rule cannot cover. If these relationships are validated, execution may require fewer branches.

“Analysed in advance” is not sufficient proof. The model used in analysis, the translation into rules, the available inputs and actual execution conditions must still agree; preparation costs must also enter the declared total budget. Omitting preparation cost cannot make a rule appear costless.

A rule awaiting validation should carry at least four interfaces:

1. the states, information quality and horizon under which it applies;
2. the distinctions that change the action or recovery judgement;
3. the observations signalling that the current representation or rule is no longer sufficient;
4. the update procedure implementable within the current window and authority.

This connects to [minimal representation, the Monitor tier and minimal revision](../book/what-belongs-in-a-model.md): conditions excluded from the current active representation may retain monitoring and escalation mechanisms rather than being permanently deleted.

## 8. Subject these relationships to testing

<a id="sf7"></a>

> **SF7 — Evaluation of simplification should record cost changes, recovery performance and newly introduced failure modes together. The final outcome cannot be used to define retrospectively which distinctions were “critical all along”.**

Freeze the common model, constraints, recovery target, scenario domain and evaluation definitions first. Then vary representation, rules or execution structure separately. When several change together, distinguish identifiable joint effects from individual mechanisms that remain unidentified.

| Check | Question |
| --- | --- |
| Cost | Which cost falls? Is it transferred to preparation, maintenance or later correction? |
| Information distinctions | Which states are merged? Do they still have a common feasible action? |
| Recovery | From which initial states and under which disturbances are whole-path constraints and the target satisfied? |
| Time and feedback | Can execution finish in time? Does the action change resources, deadlines or environmental responses? |
| Robustness | Does the conclusion reverse under reasonable alternative error bounds, horizons or scenarios? |
| Counterexamples | Which observations would refute the current judgement about sufficiency, savings or recovery? |

The corresponding testing route is to use [Stress Testing ST3](../methods/stress-testing.md#st3) for observations that discriminate between explanations, [ST6](../methods/stress-testing.md#st6) for new constraints introduced by a response, [ST9](../methods/stress-testing.md#st9) for common-mode failure and the whole path, and [ST11](../methods/stress-testing.md#st11) to distinguish formal constructions, simulation and actual observation.

Recording only failed processes cannot establish the failure frequency of a class of rules across all operation; a corresponding exposure base and comparable conditions are needed. A pass rate across test scenarios cannot be read as a real-world success probability without further justification.

## 9. Limited testing and rule retention

<a id="sf9"></a>

> **SF9 — Passing a limited set of scenarios is not the same as passing the full declared set. A low-cost rule selected through limited testing may retain recovery gaps under conditions not yet covered.**

This section distinguishes a set relationship from a rule-selection mechanism. The former follows from the definition; the latter needs additional assumptions about screening and updating.

### 9.1 Scenario coverage and the pass region

Write the conditions in section 3 as \(\Theta=(\Theta_0,\Omega)\), where \(\Theta_0\) contains the common model, initial-state range, constraints, horizon, information structure, budget and recovery criteria, excluding only the disturbance-scenario domain. For the same fixed complete policy \(\pi\), if

\[
\varnothing\ne\Omega_{\mathrm{test}}\subseteq\Omega,
\]

then

\[
\mathcal R_\pi(\Theta_0,\Omega)
\subseteq
\mathcal R_\pi(\Theta_0,\Omega_{\mathrm{test}}).
\]

**Argument.** An initial state from which the policy is eligible under every declared scenario is necessarily eligible under the tested subset. The reverse inclusion is not guaranteed by the definition, because an untested scenario may exclude some states.

The comparison concerns conditional pass regions calculated by definition within one model and over the same initial-state range. It does not establish that an “observed recovery region is always at least as large as the true recovery region”. Measurement error, untested initial states, different validation procedures and model omissions can make actual estimates diverge from this relationship; declared scenarios do not automatically cover actual change.

Testing need not be restricted to scenarios that have occurred: it can also use structured tests or formal verification. With a fixed model and requirements, accurate testing, and a progressively expanded scenario set, adding requirements cannot enlarge the pass region of the same policy. This monotonicity does not apply when policy, target, budget or model changes at the same time, nor does it guarantee that finite testing eventually covers all change.

### 9.2 How can a gap survive screening?

Let \(\Pi\) be a finite set of candidate policies, and let \(X_{\mathrm{req}}\subseteq X_0\) be the set of initial states that must be supported. The candidates retained by testing are:

\[
\Pi_{\mathrm{test}}=
\left\{
\pi\in\Pi:
X_{\mathrm{req}}
\subseteq
\mathcal R_\pi(\Theta_0,\Omega_{\mathrm{test}})
\right\}.
\]

If screening compares operating cost only within this set and does not separately examine omitted scenarios, a policy eligible on the tested domain but ineligible in an omitted scenario can still be selected. If it is the uniquely lowest-cost test-eligible candidate, this rule selects it.

Costs must use a common reference definition frozen in advance, such as \(c(\pi;\Theta_{\mathrm{ref}})\). One cannot narrow the tested scenarios, recalculate worst-case cost over that narrower domain, and interpret the difference as an improvement in the policy itself. This describes a particular screening procedure; it does not assert that all processes optimise cost alone.

### 9.3 What conditions permit continued retention?

If existing tests do not distinguish two candidates, the cost ordering does not change, and updating starts only when those tests fail, a recovery gap not yet triggered may be unable to displace the current rule. Retention results from the combination of test coverage, selection criteria and update conditions; it is not an inevitable consequence of low cost.

New counterexamples, independent validation, model analysis or actively expanded testing may trigger revision and interrupt this mechanism. “An uncovered distinction lacks a correction signal” is therefore a conditional retention mechanism. Its frequency, duration and principal causal link require independent testing.

Repeating similar scenarios adds evidence about performance under those conditions but does not automatically expand coverage. Conversely, a few tests capable of distinguishing candidates may expose a critical gap. This connects to ST3's discriminating observations and SF7's ex ante testing.

The risk consequences of this retention mechanism are examined separately in [Smooth Operation Does Not Guarantee Recovery, LK1–LK4](./lock-in-vs-probability.md#lk1): routine performance, problem probability, conditional lock-in probability and consequences require separate assessment. That article supplements SF9's risk analysis; it is not evidence that the mechanism has already been empirically validated.

## 10. Reading prompts: six relationships easily confused

These prompts help distinguish evaluative dimensions. The structural relationships depend on the previously declared conditions. They do not establish how frequently a bias occurs or prove that a particular rule has failed.

### 1. Past success and sufficiency outside the tested conditions (SF7, SF9)

Success in existing scenarios does not by itself establish sufficiency in uncovered scenarios. Successful records can support effectiveness under similar conditions, but extrapolation across scenarios, deadlines or information conditions requires additional grounds.

Check whether new operating records add repetitions or add coverage of critical distinctions.

### 2. Merged expressions and a common eligible action (SF3)

A shorter representation or rule may merge several states. Merging can be effective if those states share an eligible policy. If their optimistic first-action sets have no common intersection, the merged representation cannot guarantee a common eligible first choice.

The distinctions to retain are those changing constraints, actions or recovery conditions, not every distinction. Brevity cannot substitute for this check.

### 3. Operating cost versus constraint and recovery performance (SF1, SF2, SF4)

Fewer steps, less delay or a smaller coordination burden indicate a reduction in a particular operating cost. Constraint satisfaction and retained recoverability still require separate checks. Savings can support recovery, but the link between cost changes and state trajectories must be established.

“Easier to operate” is neither a synonym nor an antonym for “easier to recover”.

### 4. The current representation and the complete constraint relationships (SF3, SF4)

Constraints prominent in the current representation are not necessarily all the constraints determining later feasibility. An action that reduces a recorded burden may also change another resource, deadline or access condition.

This prompt calls for checking representation and action feedback. It does not assert that prominent information necessarily takes priority or establish the frequency of a selection tendency.

### 5. Passing one evaluation and certification on other dimensions (SF5)

Passing an evaluation supports a conclusion only within the standards and conditions the procedure actually covers. Acceptance at an interface, compliance with a rule or passage of a test cannot automatically replace examination of the recovery region.

If the evaluation does cover the required recovery conditions, its validity can supply relevant evidence. The issue is to check coverage, not to dismiss every confirmation.

### 6. An action rule and its applicability interfaces (SF6)

Retaining a rule does not establish that its applicability conditions, failure signals and revision entry points have also been retained. When copying, compressing or updating a rule, check separately that its action content still corresponds to those interfaces.

This is a consistency check, not a claim that interfaces necessarily disappear with use. Whether they are lost, why, and with what consequences are mechanisms needing separate investigation.

**Three self-check questions:**

> **Which cost does this simplification reduce?**
>
> **Under which changed conditions might it cease to be sufficient?**
>
> **Which recovery paths would then remain executable, timely and affordable?**

## 11. Knowledge status and scope

<a id="sf8"></a>

> **SF8 — Distinguish structural relationships, mechanism hypotheses and design priorities. Connections between concepts do not automatically transfer evidence from one level to another.**

| Content | Status in this article | What is still needed |
| --- | --- | --- |
| Separate definitions of cost and recovery region | Analytical convention | The definitions used in each study |
| Lower cost does not by itself imply a larger recovery region | Non-implication supported by a formal counterexample | Additional structural conditions for a particular model |
| Disjoint optimistic action sets for indistinguishable states | A first-decision obstruction under stated conditions | Correct modelling of information, budgets and action sets |
| Simplification changes recovery through savings or lost distinctions | Candidate mechanisms | Mechanism identification, feedback and scope validation |
| Narrowing scenario requirements cannot shrink a fixed policy's conditional pass region | Set inclusion following from universal requirements | A common model, initial range, criterion and accurate testing |
| Limited testing and cost screening retain a policy that fails in an omitted scenario | Conditional mechanism under a specified screening procedure | Identification of selection criteria, coverage and revision triggers in operation |
| Prioritising a required recovery capacity before cost optimisation | Conditional design priority | Declared objectives, costs and acceptable losses |
| Adequate analysis can yield concise, effective rules | Design proposal to be validated | Validity of translation into rules, maintenance and operating validation |

This article does not argue that more complex rules are better or that a larger recovery region deserves unconditional priority. Enlarging it may have unaffordable costs; some tasks may explicitly accept irreversible change. Comparisons must retain those conditions.

Recovery within a finite horizon does not guarantee long-term sustainability. Passing every declared scenario in a model does not guarantee coverage of undeclared change. Adding conditions does not eliminate model omissions.

## 12. Connections to the existing framework

The article can be cited along this sequence:

**Limited representation → implementable rules → state and resource changes → subsequent recoverability → feedback and revision.**

| Existing article | Concepts used here | Connection added here |
| --- | --- | --- |
| [How Do We Know What Belongs in a Model v0.1.1](../book/what-belongs-in-a-model.md) | Limited compression, decision sufficiency, minimal revision | Checking omitted distinctions through action discrimination and recovery conditions |
| [Acting in an Uncertain World v0.2](../book/acting-under-uncertainty.md) | Irrecoverable loss, reversibility, waiting costs | Comparing operating cost and recoverability separately |
| [Canonical Vocabulary, Symbols and Knowledge Levels v0.4.1](../methods/canonical-vocabulary.md) | Viability, path objects, timing stages, knowledge levels | Preventing confusion between estimated paths, path counts and recovery guarantees |
| [Control, Information and Time v0.2](../../applications/viability-first-control.md#c17) | C17's candidate comparison principle and implementation conditions | Checking that simplification preserves the conditions needed for comparison and execution |
| [Stress Testing v0.2](../methods/stress-testing.md) | Structured scenarios, response feedback, timing windows, common-mode failure | Testing both the savings from simplification and its recovery costs |

These references identify conceptual and methodological sources; they do not circularly prove the new mechanisms. Further work should supply recovery-sufficiency conditions, more counterexamples and sensitivity analysis in explicit models, then distinguish which relationships survive across models. SF9 adds test coverage, screening objectives and update triggers to this sequence, without proving any universal selection tendency.

> **A useful simplification should reduce burdens and explain which critical distinctions remain and which recovery capacities still have support.**

## 13. External research and the position of the arguments

### 13.1 Requisite variety and task-relevant distinctions

[Ashby, W. R. (1956). An Introduction to Cybernetics, chapter 11, especially 11/5–11/9](https://ashby.info/Ashby-Introduction-to-Cybernetics.pdf) examines constraints relating regulatory responses, disturbances and the range of outcomes. Its quantitative relationships depend on explicit transition structures. SF3 can be compared with this research direction: merging distinctions can obstruct joint satisfaction when the target requires different responses.

This article does not call SF3 an equivalent formulation of the law of requisite variety or a new discovery, nor interpret the law as “every disturbance requires its own separate action”. Several disturbances sharing an eligible response may be handled by the same rule. SF3 supplies a first-action obstruction directly checkable under this article's finite horizon, recovery target and information conditions.

### 13.2 Information structure and the inputs available to a policy

[Witsenhausen, H. S. (1971). On Information Structures, Feedback and Causality. SIAM Journal on Control, 9(2), 149–160](https://doi.org/10.1137/0309013) constrains decision functions by available information structures and discusses a causal interpretation of feedback structures. The reference here is to the structural restriction explicitly stated in its abstract: a decision function is restricted by available information. It is not cited as proof of SF3's recovery sets or SF9's retention mechanism.

The full text was not obtained for this review, and no theorem-by-theorem correspondence has been completed. A fuller comparison with partially observable policies, sufficient information states and other information-structure research remains future literature work.

### 13.3 References do not replace validation of the new relationships

These sources locate the article alongside existing control and information-structure research. SF2's counterexample, SF3's conditional argument and SF9's set relationship are supplied within this article. They do not establish universal frequencies in actual operation, or replace validation of a screening procedure, model or execution rule.

This draft does not adopt behavioural-mechanism references whose originals have not been individually checked. Structural theory and relevant behavioural hypotheses may be connected later, but their evidence must be recorded separately.

## Revision notes for v0.2

- Tightened SF3: an optimistic feasible-first-action set replaces the ambiguous “could lead to recovery”. Complete subsequent state information excludes future information. The quantifiers require one policy before all scenarios, and the inclusion relationship with the actual information-restricted set is explicit.
- Added SF9: the set relationship for a limited-scenario pass region is distinguished from the conditional mechanism of cost screening and rule retention. It is not stated as “the observed region must exceed the true region”.
- Added six relationships easily confused and three self-check questions, keeping the abstract treatment and avoiding presentation of frequency claims or evolutionary hypotheses as structural deductions.
- Added external research sources, the extent of checking and remaining work; retained SF1–SF8 and added SF9 and its knowledge status.
- v0.1 is retained separately. This version is published as a public research draft; formal arguments, mechanism hypotheses and design priorities remain labelled separately.

---

© 2026 SL. All rights reserved.
