---
title: "How We Know What Belongs in a Model"
description: "Twelve chapters and a running example examine minimal representations, probabilistic forecasts, error classification and minimal revision through objectives, evidence and competing explanations."
author: SL
version: "0.1.1"
created: "2026-11-01"
updated: "2026-11-03"
published: "2026-11-01"
publish: true
kind: article
lang: en
language: en
source: framework/book/what-belongs-in-a-model.md
sourceUpdated: "2026-11-03"
aliases:
  - framework/what-belongs-in-a-model
---

> **Public edition v0.1.1 · research methods and a framework awaiting validation.** Prepared from the *Representation* structural consolidation v2.0 dated 2026-10-06. The twelve-chapter argument is retained, with a standalone introduction, running example and research sources. This article proposes a way to organise inquiry and testing; it has not established that the complete procedure reliably improves forecasting or decisions.

## Introduction: choices have already been made before reasoning begins

When analysing complex problems, we often collect material first and then look for a sufficiently powerful reasoning tool. Yet before invoking statistics, causal inference or optimisation, more upstream choices have already been made: what counts as a variable, which relationships are treated as mechanisms, what remains in the environment, and what is ignored.

Together these choices constitute **representation** here: a limited compression of reality relative to a question. An argument can be rigorous within its representation while omitting factors that actually change the consequences.

This article studies two questions: how can open-world evidence support a representation sufficient for judgement, and how can we recognise and necessarily revise it when reality or the task changes?

No prior reading of the entire book is required. Below, \(T\) denotes the objective, \(H\) the horizon, \(\mathcal D\) the raw evidence, and \(Z\) the current representation. Use \(\mathcal D_t\) when evidence needs a time index. Ordinary \(D\) is reserved for the latest completion deadline in time models, not raw evidence; see the [canonical vocabulary](../methods/canonical-vocabulary.md). For constraints, reachability and viability, see the [Complex Systems Analysis Framework](./constraints-and-future-options.md).

### Running example: what does rising inventory mean?

**The factory, observations and probabilities below are fictional and illustrate the research procedure only.** Suppose a factory's reported inventory value rises 25% year on year, which management attributes to stocking for peak season. The question is whether the additional batches can ship as planned and generate collections within the next 90 days.

“Inventory increased” alone permits at least three explanations: deliberate stocking against strong orders, accumulation caused by weak demand, or early purchasing against supply interruption. Explanations can coexist; the material need not fit only one story.

This example runs through the chapters. Its purpose is not to judge an actual company but to show how the same observation enters a revisable inquiry through question definition, evidence classification, competing explanations, advance forecasts and outcome review.

## Chapter 1. From raw evidence to decision-relevant representation

Research usually begins with texts, numbers, interviews, behaviour and missing information. The material does not label which indicator is a cause, which is an effect, or which change is random variation.

A good summary may accurately reproduce much material without answering what to examine next. Representation requires further selection: the present state, environmental change, available capabilities and external channels, conditions limiting action, and the mechanism hypotheses being compared.

In the inventory example, revenue, profit and total inventory can produce a coherent report. Orders, inventory age, material use, delivery arrangements and collection conditions may produce an entirely different judgement. Variables belong insofar as they can change the answer to the current question.

Here, “enough” is **decision sufficiency**: under stated objectives, deadlines, evidence and risk conditions, the current representation provisionally supports the comparisons and judgements required. This guarantees neither completeness nor permanent correctness, and cannot be established merely because an analyst finds the story coherent.

The basic relationship is therefore:

\[
Z=Z(\mathcal D;T,H).
\]

Representation depends on the question and horizon. The same material can support several representations, each of which remains subject to subsequent evidence.

## Chapter 2. Freeze the question before distinguishing evidence

“Study this factory” is too broad. Whether additional inventory can turn into cash in 90 days requires different variables and evidence from whether the company will have competitive advantage ten years from now.

Specify the objective, deadline, outcome definition and observed object, then classify inputs. This article uses five evidence labels:

| Type | Inventory example | Qualification to retain |
| --- | --- | --- |
| Fact | Reported inventory value rose 25% year on year under a specified accounting basis | Value change is not automatically physical-quantity change |
| Reported statement | Management attributes the increase to peak-season stocking | The fact is that management made the statement; the cause still needs checking |
| Inference | The researcher infers stronger customer demand | Moving from observation to explanation requires competing evidence |
| Hypothesis | Additional batches will ship as planned and collect payment within 90 days | The outcome has not occurred; judgement criteria must be defined |
| Unknown | Whether matching orders, batch ages and customer payment arrangements are reliable | Preserve the gaps instead of filling them with fluent narrative |

Facts also need sources, dates and definitions. “Verified” means checked under those conditions, not immune to subsequent error discovery.

An easy slide is to turn “management explained it as stocking” into “genuine demand has been established”. Evidence labels reveal where reasoning exceeds direct observation.

## Chapter 3. Minimal representation and variable ablation

Too many variables create room for retrospective explanation; excessive compression can discard factors that are inconspicuous now but become important when conditions change. Candidate information can therefore occupy three layers:

- **Core:** variables already reasonably expected to materially affect the current objective, prediction or action.
- **Monitor:** variables not currently core, but with explicit conditions under which they may matter.
- **Archive:** material outside the present representation whose sources and history are retained.

In the example, order cancellability, inventory age, delivery progress and collections may be core; supplier lead times and customer financing changes may be monitored; unrelated promotional material can initially be archived. Placement should change with objectives and evidence.

One check is **variable ablation**: temporarily remove a variable and examine material changes in forecasts, feasible paths or selected actions. A clear change supports core inclusion; no current change but clear triggers can support monitoring.

Ablation is only a heuristic. No detected effect can mean the model never identified the variable or that the effect lies in tail risk. Substitution, interaction and measurement error require checking; one ablation is not sufficient proof that a variable should be deleted.

## Chapter 4. Keep competitive explanations alive

An important question should face at least one strong alternative explanation that fits the main material yet predicts something different in later observations.

| Candidate explanation | Why it currently fits | What to examine next |
| --- | --- | --- |
| Deliberate stocking driven by orders | New orders and explicit delivery arrangements | Order fulfilment, shipment progress, prices and collections |
| Accumulation from insufficient demand | Slowing sales alongside rising inventory | Age, discounting, cancelled orders and impairment |
| Purchasing driven by supply risk | Longer critical-material lead times or concentrated supply | Purchase timing, material suitability and actual supply protection |

The table does not prescribe three possible endings. It seeks points of divergence and allows mixed motives within one stock of inventory.

Alternatives need not multiply without limit. A few candidates that explain major facts and generate distinct expectations are often more useful than mechanically listing ten views. New evidence should update support and unknowns, rather than automatically vindicate the initial story.

## Chapter 5. Reference classes and base rates

Case material can make every judgement seem unique. A reference class first asks how comparable situations usually develop under similar structures, environments and horizons.

Inventory research might seek records for similar products, order patterns and delivery cycles. Their historical frequencies provide a starting point, but comparisons across industries, economic phases or accounting definitions may lack comparability.

A class that is too broad suppresses important differences; one that is too narrow invites selecting only cases that fit the story. Sampling choices, missing failures and survivorship bias belong in the research record.

Case evidence can justify departing from a historical average, but the changed mechanism or condition should be explained. A more vivid story is not automatically stronger evidence. Reference-class selection is itself part of the representation and should be open to challenge.

## Chapter 6. Mechanism hypotheses and identifiability

An explanation's ability to produce an observed result does not establish it as the cause. Deliberate stocking, passive accumulation and supply-risk purchasing can all increase inventory.

Each mechanism hypothesis should ask: is this a state or a process, what alternatives fit the data, what different result follows if a critical condition changes, and can the current material distinguish the mechanisms?

Even with order records, examine cancellability, payment status, whether orders match additional batches, and whether customers merely ordered earlier. More data advances identification only if it changes relative support for the alternatives.

Some real problems retain several compatible explanations for a long time. When corporate strategy cannot be randomised and macro conditions cannot be controlled, observational identification is limited. Write “not yet distinguishable” explicitly and then assess whether another worthwhile piece of evidence can be obtained.

This chapter constructs mechanisms and variables worth testing. Stronger causal claims require causal identification or system-identification methods suited to the question, with their assumptions checked.

## Chapter 7. Counterfactuals and discriminating observations

Counterfactuals move research beyond retelling material to comparing mechanisms: if an explanation holds, what happens after a critical condition changes? State what changes and what is provisionally held constant.

Deliberate stocking and passive accumulation can predict different paths for order fulfilment, customer pickup, inventory age and collections. If supply risk is central, reduced early purchasing after material lead times normalise may also be informative.

A **discriminating observation** is an observation, event or controlled test that generates different predictions from candidate explanations. It may be an ordinary disclosure rather than a dramatic shock. Recording expectations before outcomes reduces the scope for changing stories on demand.

Stress testing is one method among these. It discriminates only if candidates predict different responses to the specified pressure and responses can reasonably be interpreted. Jointly changing constraints, rising noise and actors' reactions may weaken identification. “Nearer the boundary” is not a law of necessarily greater information.

## Chapter 8. Probabilities, frozen forecasts and the forecast ledger

To constrain retrospective explanations, a representation needs scoreable judgements about outcomes not yet observed. Define the event, deadline and resolution rules before stating a probability.

In the fictional case, event A could be: “Within 90 days of the record date, at least 80% of the specified additional batches ship at the originally planned price and the corresponding contractual payments are collected.” Batch scope, price basis, attribution of collections and exceptional handling must be specified in advance.

Suppose the illustrative probability is 0.65. This number demonstrates the record format; it is not empirically estimated. Preserve timestamps, representation versions, competing explanations, event definitions and horizons. Later changed judgements should create new versions while retaining the original.

For a binary event, this article uses the common single-item Brier score:

\[
BS=(p-o)^2,
\]

where p is the advance probability and o is 1 if the event occurs and 0 otherwise. At p = 0.65, the score is 0.1225 if it occurs and 0.4225 if it does not. Lower loss scores are better. See the original probability-scoring research in [Brier, 1950](https://viterbi-web.usc.edu/~shaddin/teaching/cs699fa17/docs/Brier50.pdf).

One score cannot establish model quality. Accumulate comparisons across similar tasks, lead times and information conditions, examining calibration, high-confidence errors and applicable scenarios. Updated forecasts in the ledger must not be mixed with originals as independent, same-information samples without explaining the information differences.

## Chapter 9. Classify the error before responding to a mismatch

Error diagnosis can begin in four directions. This is a working classification: multiple causes can coexist and some cases remain unresolved.

| Direction of examination | Meaning | Possible inventory example |
| --- | --- | --- |
| Random outcome | A low-probability branch occurred; one result is insufficient to reject the representation | An occasional interruption listed in advance occurs |
| Parameter error | The structure still applies but speed, magnitude, probability or threshold was misestimated | The collection mechanism exists but its cycle is longer than expected |
| Strategy failure | The judgement about the world need not be wrong; the selected action cannot withstand some consequences | Orders are forecast correctly but all cash is committed, leaving no tolerance for delay |
| Representation error | Critical variables, mechanisms or scope are inadequate, or reality changed | Cancellation terms were omitted or customer payment rules changed |

Strategy failure diagnoses action and consequences; it is not directly an error in the forecasting representation. Conversely, “just bad luck” must not protect the model every time.

Examine persistent errors, performance across conditions and whether new evidence points to structural omissions. When classification remains uncertain, retain the unknown and specify observations that could help.

## Chapter 10. Why does a representation lose applicability?

This chapter distinguishes three causes using the [canonical vocabulary](../methods/canonical-vocabulary.md):

1. **Specification miss:** a critical structure existed but was absent from the model; for example, a contract always allowed cost-free cancellation.
2. **Structural drift:** a previously applicable relationship changes; for example, a new payment regime or supply structure changes working-capital mechanisms.
3. **Task mismatch:** a representation is used for another objective or horizon; for example, a ten-year competitive-advantage model is used to answer next week's price movement.

Earlier labels “initial representation omission” and “task incompatibility” map to specification miss and task mismatch. These working categories can coexist or remain unknown; a mismatched representation may still suit its original question. New evidence of an old error is not automatically structural drift. Persistent prediction error, deteriorating calibration, broken stable relationships or a newly binding variable are signals to investigate, not proof of a particular cause.

The original book called the real conditions that undermine representation sufficiency **representational fragility**. It remains a working definition and research question requiring advance triggers and later testing, not a label freely assigned after events.

At the record date, the inventory case can list changed cancellation rules, materially delayed payment and materials unusable across customers. Once signals appear, examine whether they reveal initial omissions or subsequent environmental change.

## Chapter 11. Minimal revision: locate the problem before changing the model

Adding variables whenever anomalies arise can make a report more comprehensive but a model less refutable. Minimal revision first diagnoses the problem and makes changes necessary to restore present applicability.

| Level | Object of revision |
| --- | --- |
| L0 | Parameters: probabilities, timing, magnitudes or thresholds |
| L1 | Weights of existing factors |
| L2 | Causal mechanism hypotheses |
| L3 | Adding, removing, splitting or merging variables |
| L4 | System scope, applicable states or constraints |
| L5 | Rebuilding the representation when the former structure is inadequate |

This is not a mechanically mandatory progression. Serious omissions can warrant immediate structural changes; a changed objective may only require switching representations. Explain reasons and costs, avoiding both a worldview rebuild for every error and permanent concealment of structural failure beneath parameter patches.

If new material reveals customer-specific inventory that cannot be reused elsewhere, inventory may need splitting by batch, customer and contract. Increasing a single “inventory risk coefficient” may not restore answerability of the original question.

For each revision, record the triggering evidence, changed variables or mechanisms, changed expectations, preservation of old forecasts and the next review date. Record complexity alongside improvement.

## Chapter 12. How can the method's usefulness be validated?

A compelling historical explanation alone does not demonstrate incremental predictive value. Validation should compare at least five outcomes: a simpler representation retaining critical distinctions, improved out-of-sample probabilities, earlier detection of failure, more efficient revision and improved action consequences.

Compare simpler baselines under aligned information, timing, computational budgets and evaluation criteria. Gradually remove competing explanations, forecast records or monitoring layers to identify what provides incremental benefit. Neither the fewest variables nor the most elegant explanation alone defines success.

Validation can use three task types:

- **Prospective records:** freeze future events, probabilities and disconfirmation conditions, then await outcomes.
- **Synthetic environments:** the experimenter knows actual states, mechanisms and changes; the system observes only part.
- **Genuinely hidden-answer tasks:** verify that the answer is actually unavailable to the analyst and model.

Historical reconstruction is useful for practising mechanisms and error classification. For language models, restricting a prompt to pre-year material does not ensure later outcomes were absent from training. ForecastBench uses future events unresolved at submission, offering a relevant validation approach; this does not validate the complete representation procedure here. [Research paper](https://arxiv.org/abs/2409.19839)

Transfer between domains also requires destination-domain evidence. Structural similarity can generate hypotheses but cannot replace causal and predictive tests. Two questions remain open: can a sufficiently small representation useful to the present judgement be found reliably, and can its failure be detected and necessarily revised in time?

## Appendix A. A one-page research record for the running example

| Item | What to preserve |
| --- | --- |
| Objective and horizon | Shipments and collections for additional batches within 90 days, consistently defined |
| Input material | Changed inventory value, management statements, and unverified contract and batch information |
| Competing explanations | Deliberate stocking, weak demand and supply risk, allowing mixtures |
| Current core | Cancellability, inventory age, material use, deliveries and payment conditions |
| Monitoring conditions | Changes in lead times, customer financing and contract rules |
| Discriminating observations | Which later disclosure generates different predictions across explanations |
| Frozen forecast | Original probability, deadline, representation version and resolution rules |
| Review and revision | Outcome, unknowns, error causes, revision level and next review date |

This table is fictional. Actual research needs sources and record dates for each item and explicit identification of information unavailable when the judgement was made.

## Appendix B. Related research and knowledge status

- [Lempert, Popper and Bankes, 2003: Shaping the Next One Hundred Years](https://www.rand.org/pubs/monograph_reports/MR1626.html): robust decision-making is an existing tradition organising deep uncertainty, candidate strategies and model analysis. This procedure overlaps it; formalising a question is not itself a new invention.
- [Brier, 1950: Verification of Forecasts Expressed in Terms of Probability](https://viterbi-web.usc.edu/~shaddin/teaching/cs699fa17/docs/Brier50.pdf): original research on scoring probabilistic forecasts.
- [Karger et al., 2024 / ICLR 2025: ForecastBench](https://arxiv.org/abs/2409.19839): research testing forecasts with future questions; its evaluation results are not effects of this procedure.

Competition between candidate representations, Core/Monitor/Archive, error diagnosis and revision levels are used here as an integrated method and workflow. Overall effectiveness, cross-domain transfer and measurement of revision costs still require independent research.

## Closing: choose models and recognise when to replace them

The twelve chapters retain five working habits: establish the objective and horizon; separate facts, reported statements, inference, hypotheses and unknowns; preserve strong alternatives and seek divergent evidence; freeze forecasts and classify errors; and make justified necessary revisions after representation failure.

Together they support a research objective: reason carefully within models while testing why those elements belong and whether they remain sufficient as reality changes.

Related reading: [Constraints, Feasibility and Future Options](./constraints-and-future-options.md) and [Human–AI Research System](./human-ai-research-system.md). The latter explains how objects, evidence and version changes can be retained and run over time.
