---
title: "Originality Self-Check and Independent Validation Plan"
description: "Compares six candidate ideas and proposes a validation scheme covering baselines, ablation, prospective prediction and representation revision."
author: "SL"
version: "0.1.1"
created: "2026-11-01"
updated: "2026-11-08"
published: "2026-11-01"
publish: true
kind: article
lang: en
source: framework/methods/originality-and-validation.md
sourceUpdated: "2026-11-08"
aliases:
  - framework/originality-and-validation
---

## 1. Turning "it sounds reasonable" into a comparable question

A research framework may organise explanations very well and still fail to improve prediction or action on independent samples. It may also produce no new mathematical theorem and yet help a user identify important omissions faster when the resources are the same.

Three questions therefore have to be evaluated separately: what is inherited from existing work, what exactly is different about the combination, and whether those differences bring a repeatable incremental effect. Conceptual novelty, predictive value and practical usefulness cannot substitute for one another.

This plan limits the current position to the following: a synthesised research architecture already exists, and it retains several candidate claims that can be compared. Whether there is an independent contribution requires a fuller literature comparison, a frozen method, independent testing and replication.

## 2. Six candidate ideas: what is kept, what is narrowed

### 1. Build a representation that is relevant to the task

The candidate claim is that fixing the target and the horizon first, comparing which variables and mechanisms change later judgements, and only then predicting, may be better than a general summary that does not distinguish tasks.

The importance of representation is not itself a new finding. [Work on state abstraction](https://thomasjwalsh.net/pub/aima06Towards.pdf) discusses the properties that survive compression, and [work on causal representation](https://arxiv.org/abs/2102.11107) discusses discovering high-level causal variables from observations. What this article needs to test is the incremental value of a particular open-world workflow, not a new name for an existing idea.

### 2. Study capability, mechanism and constraint together

The older drafts called this idea Constraint–Generator Duality. The later specification has already split Generator into capability, mechanism hypothesis and dynamics. The testable question is: under the same information, does recording capability and constraint together identify certain state transitions more reliably than looking at static indicators alone?

The original set-intersection formulation did not give a complete way to generate the reachable set, so it is not retained as a general mathematical identity. An actual comparison has to define the transitions, the horizon and the observation outcomes first.

### 3. Look for discriminating disturbances or observations

Stress may expose buffers, substitution capability and constraints; it may equally just add noise, cause truncation, or make the system fail outright. The candidate hypothesis is that for some tasks there are more discriminating observation conditions, and that being closer to danger does not necessarily mean being closer to the truth.

A change in prediction around a natural event can still come from new information, from the passage of time, and from sample selection. To isolate the effect of stress itself, corresponding comparison conditions are needed. Engineering or synthetic experiments can control the disturbance; social and market observation has to keep its confounding limits.

### 4. Organise compression around consequences

Different surface factors may have similar consequences for the current target, and can therefore be merged at a level of decision. But abstracting by behaviour, reward or consequence is already a research tradition.

The comparable version here is: in a natural-language task, is keeping the information relevant to a specified target at lower cost better than a semantic summary of the same length, a structural mapping, or a domain checklist? A shorter compression is not automatically better; omissions, errors and the cost of later recovery also have to be measured.

### 5. Retrieve theory from facts in the target domain

The process is: compile the facts and relations of the target domain independently → retrieve possibly relevant sources → check the mapping conditions → raise and test predictions in the target domain. [Structural mapping](https://qrg.northwestern.edu/ideas/smeidea.htm) already studies relational correspondence, and this plan does not treat the transfer of analogy itself as an invention.

The candidate difference lies in the concrete record of target facts, the retrieval protocol and the retained tests. It has to be compared with an equally well-resourced relational-mapping baseline; a detailed process must not be allowed to win merely against a deliberately thin prompt.

### 6. Maintain a human-AI research state over the long run

Long-term memory, retrieval and agent workflows already have a large adjacent literature. What is retained as a candidate is the combination of human governance, explicit evidence and representation state, a prediction ledger, counter-evidence search, and revision records.

The benefit and the cost of long-term use have to be evaluated, including version mismatch, stale memory, error propagation, human checking and research time. The length of a continuing conversation cannot serve as an indicator of research quality.

## 3. The two main research questions and the candidate priorities

The later overall architecture gathers these candidates into R1, "how to discover a representation relevant to the decision", and R2, "how to detect failure and revise appropriately". The other candidates in the original plan can become experimental modules without each being promoted into a theory of its own.

The order of priority should be decided by what is actionable: first find a clear task, a settleable outcome and a credible baseline, and only then freeze the minimal comparison. The "medium, high, low" originality ratings in the original notes are the author's own assessment and are not retained as conclusions backed by an objective scale.

## 4. The first family of experiments: prediction comparison under equal information

The original plan proposed building at least 120 historical events covering policy, technology, company announcements, earnings, cycles and liquidity, about 20 of each type. This can serve as the starting point of an exploratory sample design; it is not a power calculation showing that the sample size is sufficient.

### Four comparison groups

| Group                             | Workflow                                                                      | What the comparison is for                                      |
| --------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------- |
| A: domain-analysis baseline       | Ordinary high-quality domain analysis                                         | Provides the realistic-use reference point                      |
| B: prediction-discipline baseline | Reference classes, base rates, decomposition, explicit probability and update | Tests the contribution of a mature prediction process by itself |
| C: representation process         | Target, horizon, capability, constraint, mechanism and competing explanations | Tests the performance of the representation module on its own   |
| D: integrated process             | The representation module used together with the prediction discipline        | Tests the incremental value relative to B                       |

All four groups should use the same information cut-off, the same tool permissions, and the same or explicitly reported time and compute budgets. Every group must output a scorable probability; group A may use a unified results table without group B's reasoning steps being forced on it. Otherwise the Brier scores cannot be compared fairly.

Record the model version, the prompts, the retrieval results, the human participation and the rules for repeated runs. If group D simply used more time or better sources, that difference has to be studied separately from the effect of the representation method.

## 5. Unified questions, cut-offs and settlement

Taking investment as the example, one can choose in advance return events over 5 or 20 trading days, return events relative to a benchmark, or explicitly defined drawdown events. These are research design examples; they do not report the effect of any trading strategy.

Every question has to state the starting point, the trading calendar, the adjustment convention, the benchmark, the data source, and the treatment of suspensions and missing data. A drawdown has to say whether it is the maximum peak-to-trough decline within an interval or the maximum fall relative to an initial price; and an "expansion state" needs a definition that can be judged independently, rather than one that is backfilled by a later rise in price.

Events at different horizons for the same company are usually related. Overlapping windows cannot be treated as fully independent samples, and the analysis should group the comparison by company, event cluster or time.

### The limits of historical masking

Showing historical material in time slices can restrict what is visible in the current round, but it cannot prove that the analyst or the model never encountered later outcomes. A training cut-off date, a "pretend you don't know" instruction in the prompt, and the author's own recollection are all insufficient to prove the absence of leakage.

Historical research suits developing protocols and discovering failure modes. A stronger test includes prospective questions that have not settled at the time of submission, with prediction snapshots that cannot be edited back. [ForecastBench](https://arxiv.org/abs/2409.19839) offers a relevant example of this kind of dynamic-future-question evaluation; it does not follow that this plan already enjoys the same leakage-free conditions.

## 6. Scoring: probability, discrimination, decision and cost kept apart

For N binary events, the mean squared probability error can be recorded:

\[
\operatorname{BS}=\frac1N\sum_{i=1}^{N}(p_i-o_i)^2,\qquad o_i\in\{0,1\}.
\]

A lower value means better performance under that score. The Brier score involves both probability reliability and discrimination, so the total should not simply be called "calibration". The original scoring work is [Brier (1950)](<https://doi.org/10.1175/1520-0493(1950)078%3C0001:VOFEIT%3E2.0.CO;2>).

Also report the reliability diagram, the sample size in each probability band, performance relative to the base-rate baseline, and the uncertainty both within groups and overall. The realised frequency of a small number of 70% predictions is not enough to demonstrate calibration precisely.

"High-confidence error" needs an ex ante definition of the probability threshold, the outcome and the loss condition, with wrong predictions and action losses recorded separately. Decision utility should use a frozen action mapping, costs and constraints; an improvement in the score does not directly imply an improvement in net benefit.

Also record the time spent checking material, the cost of the calls, the size of the representation, the number of revisions and the human burden. Practical value may appear as a lower cost at equal effectiveness, or it may disappear because of the extra complexity.

## 7. Ablation and interaction: where does the added value come from?

Starting from group D, remove in turn the discriminating observations, the reference classes, the mechanism hypotheses, or replace the structured representation with a semantic summary of equal length. Keep the other conditions as constant as possible and check how performance changes.

Modules can interact: a module that is useless alone may help when combined with others. An ablation difference should not be treated as a contribution that can be added independently. When several exploratory comparisons are made, they have to be reported; reporting only the best-performing version is not acceptable.

## 8. The second family of experiments: do observation conditions help identify mechanisms?

In synthetic systems, the true structure, the range of disturbances and the available observations can be specified in advance, and the identification of hidden mechanisms and the subsequent prediction compared across conditions. The design has to cover counterexamples where there is no "high-information stress region".

For real events, freeze the judgement before the shock, after the shock and before the target outcome settles, then compare the update gain, adding a control with similar time and information conditions. The additional effect of stress or a discriminating event can be discussed only if the controlled comparison is sufficiently well specified.

The cases that led to system failure, that interrupted the material and that are hard to classify also have to be preserved. Analysing only the surviving events with clear mechanisms exaggerates the effect of the method.

## 9. The third family of experiments: goal-driven knowledge transfer

The original plan proposed 30 to 50 cross-domain problems, which can serve as a pilot size. The novelty of a task has to be defined for the specific participants; it is not enough to claim that "AI is unfamiliar with it".

Plain semantic retrieval, explicit structural mapping and the goal-fact-driven protocol are compared. Each group should get a fair opportunity at retrieval and refinement, and evaluators who are as independent as possible and blind to the group should assess, by frozen rules, the relevance of the sources, the structure and causal conditions, the testable predictions and the subsequent support.

"Novel" and "correct" are scored separately. Raising a hypothesis that nobody has raised before but that is wrong does not constitute a successful transfer. The ability to reject an inappropriate analogy also has to be evaluated.

## 10. The R2 special study: when should a revision happen, and is the change appropriate?

As a supplement connecting to the later overall architecture, synthetic tasks with known change points and prospective material-update tasks can be added. A fixed representation, a representation open to arbitrary extension, and a process with revision records are compared.

The measures include detection latency, false positives, revision cost, post-recovery performance on independent samples, and the identification of task mismatch. Adding a variable to every anomaly may improve the in-sample fit while supporting nothing about the value of "minimal revision".

This special study is a research design interface added when preparing the public edition; it does not mean that the original plan has been implemented or has produced results.

## 11. What is still missing before a formal freeze?

At a minimum: the primary endpoint, the minimal meaningful difference, the sample size or stopping rule, grouping and randomisation, the exclusion rules, missing outcomes, repeated runs, the statistical comparison, clustering dependence, multiple comparisons, and the handling of protocol deviations.

The development set and the test set are kept apart. Thresholds, prompts and definitions may only be adjusted during development; a change made after test results appear has to be marked as a new version and a new validation round. A formal pre-registration also needs a verifiable timestamp and a fixed protocol, and the publication of this article does not mean that procedure has been completed.

## 12. How to interpret success, failure and being unable to judge yet

| Observation                                                                   | What it can support                                                                         | What cannot be concluded directly                              |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| D is stably better than B, with no clear deterioration in cost or calibration | Under that task and conditions, the integrated process has preliminary incremental evidence | That a general new theory has been proved                      |
| The improvement appears only on some tasks                                    | The method may have task boundaries, and the heterogeneity should be reported               | Keeping only the successful tasks as general evidence          |
| The difference is unclear and the interval is wide                            | The evidence is insufficient; the design and the precision need checking                    | That the two methods have been proved equivalent               |
| There is no meaningful difference under a pre-set equivalence standard        | The new process may not deliver enough gain                                                 | That the components are worthless on every task                |
| D is significantly worse or much more burdensome                              | Overfitting, narrative lock-in or process cost should be investigated                       | Continuing to substitute explanatory power for a failed result |

"Not significant" and "equivalent" must be kept apart. What is really worth protecting is not a particular term but a process that allows the results to change the research position.

Companion reading: [the overall architecture](./research-architecture.md), [the canonical vocabulary](./canonical-vocabulary.md), [the human-AI research system](https://sl-knowledge.github.io/knowledge-site-en/framework/book/human-ai-research-system), [reading guide to the five drafts](https://sl-knowledge.github.io/knowledge-site-en/framework/book/book-reading-guide).

---

<a id="research-notes"></a>

## Research and version notes

> **Public edition v0.1 · originality self-check and research design.** Organised from _Originality Audit and Independent Validation Plan v0.1_ (2026-10-05), and adopting the corrections in the later overall architecture and canonical vocabulary. What follows is a comparison scheme that is intended to be run; it is not an experiment that has already been executed, a public pre-registration, or a third-party assessment of originality.
