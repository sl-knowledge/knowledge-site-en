---
title: "Acting in an Uncertain World"
description: "Ten chapters distinguish forecasts from consequences and examine viability, robustness, reversibility, information value, commitment and adaptive strategies."
author: SL
version: "0.2.2"
created: "2026-11-01"
updated: "2026-11-03"
published: "2026-11-01"
publish: true
kind: article
lang: en
language: en
source: framework/book/acting-under-uncertainty.md
sourceUpdated: "2026-11-03"
aliases:
  - framework/acting-under-uncertainty
---

> **Public edition v0.2 · decision methods and a working framework.** Prepared from the *Decision* structural consolidation v2.0 dated 2026-10-06. It retains the ten-chapter argument and adds a standalone explanation, fictional examples and research sources. This article organises existing decision ideas into a working procedure; the incremental effectiveness of the complete procedure still requires testing.

## Introduction: why does a judgement not yet tell us how to act?

The preceding article, [How We Know What Belongs in a Model](./what-belongs-in-a-model.md), considers how to construct representations from material, compare explanations and record predictions. Even when that work is done well, action requires another layer of analysis: what consequences will an outcome have for the actor?

The same probability of success can correspond to entirely different losses, recovery times and subsequent opportunities. One failed plan permits a low-cost retry; another exhausts resources and ends the whole learning process. Choices also change capabilities, relationships and the paths available in the future.

This article therefore treats a decision as selecting an arrangement of action that can be implemented, observed and revised when necessary, under stated goals, time, resources and uncertainty. The “capacity to continue deciding” below means the practical ability and opportunity to keep acting, learning and adapting.

### Running example: should a factory expand immediately?

**The factory, monetary units, thresholds and scenarios below are fictional and serve only to illustrate the procedure.** Continuing the inventory example from the previous article, the factory is assessing whether additional orders and inventory can keep turning into cash. It has 100 illustrative units of funding, of which at least 40 must be reserved for existing deliveries and basic operations.

| Candidate action | Initial outlay in the example | Questions still to examine |
| --- | --- | --- |
| Expand fully at once | 80 | If orders, collections or supply disappoint, can the remaining resources sustain the existing business? |
| Run a pilot first | 20 | Can the pilot test the key unknowns, and what conditions would later expansion require? |
| Obtain more information first | 5 | Would the information change the action, and could waiting lose the customer window? |

These numbers are a simplified snapshot at one decision point, not a complete cash-flow model. An actual project also needs working capital, continuing expenditure, payment timing and new obligations. Nothing below establishes that any option must be optimal.

## Chapter 1. Forecasts and decisions: place probability within a structure of consequences

“There is a 70% probability that orders will keep growing” still does not specify how many resources to commit. We also need to know what each action entails if growth continues or stops, whether losses are recoverable, and what risks the actor is willing and able to bear.

A basic expected-utility expression is:

\[
EU(a)=\sum_i p_i U(o_i),
\]

where a denotes an action, p the outcome probability, and U the value of an outcome to the actor. Rigorous expected-utility models can incorporate risk preferences, irreversible losses and future opportunities. Problems often arise when applications compress complex consequences into an average monetary return or omit important scenarios.

Even if the factory regards new orders as likely to materialise, it cannot disregard the delivery and funding constraints of its existing business. Factories with different resources can reasonably choose different commitment sizes on the same forecast.

A decision record should therefore separate probability judgements from reasons for acting: what do we expect, why select this action, who bears the worst consequences, and what evidence would change the choice?

## Chapter 2. Viability, unrecoverable loss and the capacity to continue deciding

Some losses reduce the return from the current round; others undermine the conditions for continued operation and adaptation. The original draft used Ruin for the latter. Specific analysis must identify whether what is lost is funding, critical equipment, eligibility, time or another essential condition.

This article adopts a working principle: separately define and control exposure to failure modes that could terminate the entire long-term process. This promises neither zero risk nor an unconditionally optimal theorem for every objective.

In the factory snapshot, committing the full 80 leaves 20, below the illustrative reserve requirement of 40. Without reliable new collections or callable arrangements, this option threatens existing operations. Even if its average return looks high, the resource gap along the path needs to be addressed.

The task is to turn severe failure into explicit checks rather than merely saying “the risk is high”: what triggers it, is the consequence unrecoverable, can it be isolated, are there common causes, and what evidence or resource arrangements would make the path executable?

Allowing recoverable trial and error while preserving the conditions for further learning is the process this framework seeks to protect.

For a probabilistic formulation, [Smooth Operation Does Not Guarantee Recovery, LK1–LK2](../foundations/lock-in-vs-probability.md#lk1), separately defines problem probability, conditional lock-in probability and consequences. Lack of a recovery guarantee for the current policy differs from having no recovery method under the permitted conditions; high conditional lock-in probability does not by itself establish higher overall lock-in probability.

## Chapter 3. Robustness: examine which futures make a strategy fail

Under deep uncertainty there may be no agreement about probabilities, mechanisms or even the candidate futures. Optimising around a single most likely scenario can then make a strategy depend too heavily on unconfirmed assumptions.

Robustness analysis states performance standards first and then examines candidate strategies across a set of plausible scenarios. It guarantees neither success in every future nor that the scenario set exhausts real possibilities.

For the factory, combinations can include demand growth or slowdown, normal or delayed collections, and stable or interrupted supply. A staged pilot may reduce initial exposure, but if it takes too long, fails to represent full-scale production or incurs excessive additional cost, it may not be the better option.

Ask both where a strategy fails under combined conditions and what opportunities and costs are sacrificed to reduce those failures. Would changing reasonable assumptions reverse the ranking?

Two forms of fragility should be distinguished. **Policy fragility** concerns the futures in which an action arrangement fails under a given representation. **Representational fragility** concerns the real conditions whose important differences the model itself omits. The latter requires returning to the preceding article's revision procedure.

Robust decision-making has an established research tradition; this article adopts its approach to scenario comparison and strategy testing. [RAND research entry point](https://www.rand.org/pubs/monograph_reports/MR1626.html)

## Chapter 4. Reversibility, information value and the cost of waiting

Actions can be roughly distinguished as easy to reverse, costly to reverse, or practically difficult to reverse. The degree depends on contracts, technology, time and resources, not simply the project's name.

Pilots, prototypes, phased construction and modular arrangements can reduce early irreversible commitments under some conditions. They also cost resources, and small-scale results need not represent subsequent operation.

Waiting has value because new information may change action. The factory should ask whether the customer confirmation, material tests or payment information obtained for 5 units would switch the choice between actions. If expansion is planned regardless of the result, the information may have limited value for the current decision.

At the same time, examine the costs of waiting: might delivery windows, customer relationships, staff, engineering schedules or opportunities to experiment be lost? Even valuable information can arrive too late.

Information value is neither the volume nor the novelty of information. It concerns how much obtaining it can improve action consequences under the same objective, including acquisition cost and delay. See the original research in [Howard, 1966: Information Value Theory](https://doi.org/10.1109/TSSC.1966.300074).

## Chapter 5. Commitment and lock-in: when should resources be concentrated?

Preserving options can prevent premature lock-in. Indefinite non-commitment, however, can also prevent specialised capabilities, scale, learning and trust from developing. Some resources become callable capabilities only after sustained investment.

A conceptual comparison is whether, under the same objective, evaluation basis and current information, the overall value of committing now exceeds that of the best executable conditional waiting strategy. The latter already includes future information, later choices and waiting costs: “the value of waiting” and “option value” should not be added again.

Such value often cannot reliably be calculated as one precise number. Comparisons should state critical assumptions, sensitive conditions and disagreements instead of using a formula to manufacture certainty.

Voluntary commitment also differs from forced lock-in. The former concentrates resources with an understanding of feasible alternatives and their costs; the latter continues because funding, contracts or capabilities have already constrained the choice.

Both can look like “following only one path”. Assessment must examine whether unselected paths were genuinely feasible and whether commitment is generating capability and preserving correction, or continually consuming the conditions for later adjustment.

## Chapter 6. Adaptive strategies: write future updating into today's arrangement

Under change, the object selected can be a strategy rather than a single present action. At minimum it includes an initial action, observation signals, triggers, subsequent actions, and rules for exit or reconsideration.

The factory could express a phased option in this illustrative protocol:

| Item | Content recorded in advance |
| --- | --- |
| Initial action | Complete one 20-unit pilot within an affordable budget |
| Observation signals | Customer acceptance, order cancellability, shipments, collections and material suitability |
| Conditions for expansion | Meet validation criteria specified in advance, with an executable cash path for the next stage |
| Conditions for pausing | Failed validation, delayed payment or changed critical supply conditions |
| Exit or reconsideration | Reach agreed loss or time conditions, or discover a significant factor omitted from the original representation |

The 20 is a fictional budget. Actual project standards and thresholds must be calibrated to the objective and include the delay from detecting a signal to implementing an action.

“We will see later” is not yet an updating rule. A rule must be observable and executable, and guard against selecting only favourable indicators. When goals, constraints or mechanisms change, record why the rule changes and retain its earlier version instead of retrospectively calling every change flexible adaptation.

Dynamic adaptive pathways research offers related methods for connecting near-term action, long-term paths and monitoring signals. [Haasnoot et al., 2013](https://repository.tudelft.nl/record/uuid%3A786f0fb3-6ad2-4c0e-9833-889c85e4193d)

## Chapter 7. Adaptation time, preparedness and recovery capability

The existence of a solution does not mean it can be implemented in time. An alternative supplier needs certification, new equipment commissioning, staff training, and customers may have switching cycles of their own.

The original research expressed this through a working time margin:

\[
\widehat m_\tau=\widehat\tau_{\mathrm{survive}}-\widehat\tau_{\mathrm{response}}.
\]

Both estimates must start at the same time: remaining support time and the full response duration, including judgement, coordination, initiation and execution. Here \(m_\tau\) consistently means the effective margin \(m_{\mathrm{eff}}\); execution duration is separately denoted \(\tau_{\mathrm{exec}}\). The former \(\tau_{\mathrm{adapt}}\) must be mapped according to the stages it includes; the same coordination delay must not be counted twice. The two latest-start times and reproducible examples are in the [canonical vocabulary](../methods/canonical-vocabulary.md#recovery-time-structure). Estimates need intervals and assumptions, not treatment as a universal cross-domain score.

A larger margin may permit experimentation and waiting. As it narrows, examine low-delay paths using capabilities already available. A negative margin only indicates that the current model and plan may be too late; other paths, supporting conditions or adjusted objectives still need examination.

Preparedness is valuable when it increases buffers or shortens adaptation time. Backup interfaces, reusable skills, alternative channels and completed validation may work across scenarios, but construction and maintenance costs remain relevant.

Near failure, an actor may sometimes choose a higher-variance option because the previously more stable route can no longer sustain the objective. Such state dependence should be analysed through consequences and feasible paths, not inferred from action changes as a more risk-seeking personality.

## Chapter 8. Redundancy, diversification and common failure

Two suppliers, three projects or several accounts appear to increase the number of options, yet they may share the same critical node.

If the factory's suppliers depend on the same upstream component, logistics route or certification system, one shock can still disable both. What needs examination is the common cause and whether alternatives can be activated in time.

Diversification therefore means more than lengthening a list. Follow dependencies: under what conditions do the options fail together, what support must backup resources have, and does apparent independence rest on shared funding or infrastructure?

Redundancy also consumes capital, maintenance time and organisational attention. Excess reserves can impede other capability-building, while overly complex backups may be difficult to call on. The appropriate level depends on failure consequences, recovery difficulty, horizon and cost, rather than “more is always better”.

Correlations between paths to the same objective also matter. Three plans that all depend on timely payment by one customer cannot simply be counted as three independent routes to success.

## Chapter 9. External channels, delayed feedback and restructuring constraints

Finance, supply, platforms, partners and policy arrangements can enlarge the present action set. They arise from external access and need not be capabilities the system can reliably call on itself.

External dependence does not by itself make a strategy mistaken. Specify whether channels can persist, what closure entails, how long replacement takes, and the cost of maintaining access.

Favourable conditions can also delay constraint feedback. External support sometimes buys time for adaptation and sometimes postpones necessary adjustment. Examine whether the support period creates new capabilities and shortens switching time or merely prolongs existing consumption.

If all plans in the old action set are fragile, it is also possible to study changes to the conditions generating that set: redesign interfaces, change delivery arrangements, develop alternatives or change organisational decision authority. This article calls such capability **meta-control**.

It is not inherently a superior level of action. Internalising supply, changing interfaces or restructuring a business introduces new costs, specific assets and dependencies. Those consequences belong in the same robustness, reversibility and viability checks.

## Chapter 10. Combine consequences, paths and updating conditions in a decision protocol

Whether an acceptable outcome has several realisable paths depends on their costs, feasibility and common-failure factors. Modes of long-term unrecoverable loss require separate checks of severity, triggers and exposure.

The first nine chapters can be condensed into ten questions for a one-page decision protocol:

1. **Objective and deadline:** what must be decided now, and which consequences are within the evaluation scope?
2. **Critical conditions:** losing what would undermine continued operation and correction?
3. **Candidate futures:** which plausible scenarios belong in the analysis, and which unknowns remain uncovered?
4. **Policy fragility:** under which combinations of conditions does each option fail?
5. **Reversibility and information:** which actions would new information change, and what does waiting cost?
6. **Timing of commitment:** how does concentrating resources now compare with the best executable waiting strategy?
7. **Updating rules:** what is observed, when is it checked, and what triggers further commitment, a pause or exit?
8. **Common failure and external dependence:** do the options share an uncontrolled critical node?
9. **Time feasibility:** can the required capabilities develop before buffers run out?
10. **Restructuring constraints:** can changing interfaces, resources or organisational arrangements create a more executable path?

These questions organise comparison; they should not become a form mechanically completed in every conversation. Important decisions should retain the contemporary grounds and rules so that new evidence can distinguish changed forecasts, changed value trade-offs, execution problems and model omissions.

## Appendix A. Why can the same forecast support different actions?

Return to the fictional factory. Even if two factories assign the same probability to demand growth, different buffers, delivery obligations, payment conditions, validation costs or competitive windows can reasonably support different choices.

| Subsequent finding | What needs reconsideration | Possible direction of adjustment |
| --- | --- | --- |
| Orders materialise but collections are substantially delayed | Did the original funding path omit working-capital pressure? | Examine commitment pace, remaining buffers and contractual cash timing |
| The pilot performs well but does not represent full-scale production | Did validation answer the actual unknown? | Validate critical scale conditions rather than expanding solely from a small trial |
| The second supplier shares critical upstream dependencies with the first | Did nominal diversification hide common failure? | Reidentify dependencies and switching conditions |
| The customer window narrows rapidly while waiting | Do information benefits still exceed delay costs? | Recompare executable options and adjust objectives if necessary |

These are illustrative directions for examination. Actual action still depends on complete consequences, budgets, authority and current evidence. The table provides neither universal spending thresholds nor investment advice.

## Appendix B. Research sources and knowledge status

- [Lempert, Popper and Bankes, 2003: Shaping the Next One Hundred Years](https://www.rand.org/pubs/monograph_reports/MR1626.html): an entry point to robust decision-making under deep uncertainty.
- [Howard, 1966: Information Value Theory](https://doi.org/10.1109/TSSC.1966.300074): original research evaluating information through decision consequences.
- [Haasnoot, Kwakkel, Walker and ter Maat, 2013: Dynamic Adaptive Policy Pathways](https://repository.tudelft.nl/record/uuid%3A786f0fb3-6ad2-4c0e-9833-889c85e4193d): research connecting monitoring, near-term action and long-term adaptation paths.

The “capacity to continue deciding”, time margins, path comparisons and combined protocol here are a working organisation of existing ideas. Applications require domain models, value trade-offs and evidence; completeness of the procedure does not establish its overall effectiveness.

## Closing: connect continued learning with necessary commitment

Good decisions place forecasts within consequence structures, identify unrecoverable failures, compare plausible futures, account for waiting and irreversibility, and concentrate resources when commitment can create capability.

The longer-term task is to write observation, updating and exit rules into the current strategy. When real feedback arrives, it should then be possible to explain what changed, why it changed, and which conditions remain unclear.

Related reading: [Complex Systems Analysis Framework](./constraints-and-future-options.md), [How We Know What Belongs in a Model](./what-belongs-in-a-model.md), [Human–AI Research System](./human-ai-research-system.md).

## v0.2 revision note

Chapter 7 explicitly uses the full response duration, including judgement, coordination and execution, for the time margin and links to the shared definitions. The original factory-budget example and chapter numbers are retained.
