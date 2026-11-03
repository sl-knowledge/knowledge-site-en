---
title: "Human–AI Research System: Sustaining Evidence, Forecasts and Revision"
description: "Ten chapters cover research state, memory selection, competing explanations, forecast ledgers, stopping rules and minimal revision, with an example of versioned updating."
author: SL
version: "0.1.1"
created: "2026-11-01"
updated: "2026-11-03"
published: "2026-11-01"
publish: true
kind: article
lang: en
language: en
source: framework/book/human-ai-research-system.md
sourceUpdated: "2026-11-03"
aliases:
  - framework/human-ai-research-system
---

> **Public edition v0.1.1 · research methods and a system-design proposal.** Retains the ten chapters of the *Human–AI Research OS* structural consolidation v2.0 dated 2026-10-06, organised alongside the *Human–AI Joint Cognition Research Charter* v1.1 dated 2026-10-09. It describes how long-term inquiry should be organised; implementation status and effectiveness require separate records.

## Introduction: give long-term inquiry a traceable state

Complex topics often last months or years. New material arrives, old explanations may fail, and objectives and horizons may change. If each exchange leaves only another summary, research can forget which claims are facts or hypotheses and why conclusions changed.

This article proposes a human–AI research system maintaining structured state around the current question, connecting evidence, alternatives, frozen forecasts, outcomes and revisions. Humans govern objectives, values and research; AI assists verification, representation construction, counterexample search and version records.

Its goals include changes in human capability: compressing complex material into a few understandable, testable rules, asking better questions in new tasks, and developing judgement with awareness of its own boundaries. Storing more information is only one component.

## Definitions before reading

| Term | Meaning here |
| --- | --- |
| Representation | Variables, relationships, mechanism hypotheses, constraints and unknowns retained for the current question, not reality itself |
| Target / horizon | What is to be explained, predicted or decided, and over which period outcomes matter |
| Decision sufficiency | Provisional adequacy for judgement under stated objectives, evidence and risk conditions; still revisable |
| Research state | A structured record of current judgements, grounds, unknowns, alternatives and predictions awaiting testing |
| Minimal revision | Necessary change sufficient to restore applicability after diagnosing failure, not unconditional model expansion |

The modules below are design proposals. “Verified”, “believed” and “hypothesis” require sources, scope and update times; they are not immutable truth levels. For the system vocabulary, see [Constraints, Feasibility and Future Options](./constraints-and-future-options.md).

## Chapter 1. Conversation history and research state

A one-off conversation has the basic structure:

~~~text
Question → Answer.
~~~

Long-term inquiry is closer to:

~~~text
Question_0 → Z_0 → Evidence_1 → Forecast_1 → Outcome_1 → Revision_1 → Z_1 → …
~~~

What should persist is not all dialogue, but:

~~~text
Research state t
~~~

A minimal research state includes:

- target/horizon;
- representation state;
- evidence state;
- hypothesis set;
- forecast state;
- fragility state;
- revision log;
- research queue.

These objects differ fundamentally from chat logs. Logs record what was said; research state records what is currently believed, why, which alternatives remain, what would show it wrong and what changed since the last version.

This addresses a fundamental issue in long-term AI collaboration. Conversation can grow continually, but research state should not expand linearly with its length. A mature system should compress hundreds of exchanges into a relatively small structured current state while preserving historical versions for audit.

Different conversation windows are therefore better understood as **views** of the same research state. The window used for a question should not determine where knowledge exists. What persists is the representation, evidence, forecasts and revisions.

---

## Chapter 2. Working context and memory selection

More long-term memory is not always better. With finite attention, larger contexts can bury relevant material beneath irrelevant history; old representations from different targets/horizons can contaminate one another.

The question is:

~~~text
Which memories should be active now?
~~~

The research system should not place the entire memory store in working context. Instead:

~~~text
Memory → Retrieval → Validity check → Selection → Working context
~~~

### Retrieval

Retrieve candidate memories relative to:

- current objective;
- horizon;
- current representation;
- current environment.

### Validity check

Before activating a memory, check:

- Is it still valid?
- Has later evidence disconfirmed it?
- Does it belong to this target/horizon?
- Is it an earlier hypothesis rather than a fact?

### Selection

Relevance alone does not justify consuming current attention. Prioritise:

- high present relevance;
- important consequences of omission;
- high reuse value;
- manageable context occupancy.

Memory value is therefore not semantic similarity. A similar-looking discussion may belong to a different horizon. A semantically different old decision, such as a target frozen two months earlier, may determine whether the present question is framed correctly.

“Memory value” is only a **working design principle** here:

~~~text
Memory value = f(current relevance, future reuse value, omission consequences, context occupancy).
~~~

It is a research-system design heuristic, not an established cognitive-science law.

---

## Chapter 3. Explicit knowledge states

If long-term inquiry preserves only a current summary, AI can reread its own earlier inferences as facts. To prevent contamination, knowledge needs explicit states.

At least:

~~~text
Verified
~~~

~~~text
Currently believed
~~~

~~~text
Hypothesis awaiting testing
~~~

~~~text
Unknown
~~~

~~~text
Disconfirmed
~~~

These complement, but differ from, input-evidence types. “Fact / reported statement / inference / hypothesis / unknown” describes epistemic input types; a knowledge state describes an object's current standing in the long-term system.

For example:

- A customer's formal purchasing announcement may be verified.
- An expectation of further purchasing growth is currently believed.
- “Growth is mainly driven by a product-performance advantage” may be a hypothesis awaiting testing.
- Entry into next-generation certification may remain unknown.
- A formerly reasonable mechanism rejected by later facts becomes disconfirmed.

Maintain at least four additional explicit states:

### Representation state

Current \(Z_t\): core/monitoring variables, constraints, capabilities, mechanism hypotheses and uncertainties.

### Evidence state

Sources, times, types, confidence, and the representation elements supported or opposed.

### Hypothesis state

Persistent competing representations that do not disappear when one discussion ends.

### Forecast state

Frozen probabilistic forecasts, disconfirmation conditions and outcome status.

This makes knowledge change a genuine:

~~~text
State transition
~~~

rather than another, longer natural-language summary.

---

## Chapter 4. Versions, differences and epistemic audit

Representations change; earlier versions should not be overwritten.

If today's \(Z_t\) differs from \(Z_{t+1}\) three months later, preserve two things.

First: why did we think that then?

Second: what later evidence actually changed it?

Important representations should therefore be versioned:

~~~text
Z^{(1)}, Z^{(2)}, Z^{(3)}, …
~~~

The research value lies less in a lengthy new summary than in:

~~~text
Diff(Z_t,Z_{t+1})
~~~

including at least:

- additions: which variables were added;
- removals: which were deleted;
- importance changes: which weights changed;
- mechanism changes: which hypothesis was replaced;
- scope changes: whether the system boundary changed;
- target/horizon changes: whether this is actually a different question.

Each revision should also record its reasons:

- new facts;
- parameter updates;
- specification miss;
- structural drift;
- task mismatch;
- new objectives;
- confidence changes.

Specification miss, structural drift and task mismatch follow the representation-failure categories in the [canonical vocabulary](../methods/canonical-vocabulary.md). New facts and parameter updates remain separate record labels. A significant condition omitted despite already existing differs from a later change in conditions; causes can coexist or remain unknown.

This produces an **epistemic audit trail**, valuable against hindsight bias. After outcomes, both humans and AI easily feel “we knew it all along”. Earlier versions distinguish genuine advance judgement from retrospective rewriting.

A mature research system should therefore answer not only:

> What do we think now?

but:

> When did we start thinking this, why did it change, and which alternatives did we still consider plausible then?

---

## Chapter 5. Humans govern research; AI assists representation and evidence work

Collaboration needs clear roles. The person responsible for goals, values and research stopping conditions is called the “research governor” here, distinct from meta-control capability that changes future action space:

~~~text
Human = Research governor
~~~

Human responsibilities chiefly include:

- defining and revising objectives;
- choosing horizons;
- specifying values and acceptable risks;
- deciding when to commit;
- deciding when research is sufficient;
- challenging AI's framing;
- retaining ultimate governance responsibility.

AI is better suited to:

~~~text
AI = Representation and evidence-work engine
~~~

including:

- retrieving evidence;
- extracting candidate variables;
- classifying evidence;
- generating competing representations;
- finding reference classes;
- comparing mechanisms;
- retrieving theory;
- constructing counterfactuals;
- designing discriminating observations;
- recording forecasts;
- checking contradictions;
- monitoring failure;
- proposing revisions.

This division is not a claim that humans will always outperform AI at particular tasks. Research objectives arise from actors' purposes. AI may help optimise a goal, but without governance it cannot automatically decide which goals deserve pursuit or which irreversible risks are acceptable.

Humans thus govern objectives, while AI assists construction, testing and revision of representations.

---

## Chapter 6. Seek contradictions and maintain alternatives

A research risk is that humans and models continue interpreting new material through the current narrative without sufficiently testing alternatives, reinforcing confirmation bias.

**Contradiction search** should therefore be an active system function, not await a user reminder.

For each important representation, ask at least:

1. Which facts are explained least well?
2. Which alternative still fits the main evidence?
3. Which omitted variable, if present, could reverse the conclusion?
4. Which future observation would most separate competing models?
5. Has the narrative conveniently downweighted evidence without adequate grounds?

Alternatives should persist beyond one round of analysis. Maintain:

\[
\boxed{
\mathcal Z_t
=
\{Z_1,Z_2,\ldots,Z_n\}
}
\]

and for each candidate:

- present supporting evidence;
- discriminating evidence not yet obtained;
- expected observations;
- conditions for leaving the candidate set;
- last update time.

A hypothesis should leave the current set when genuinely discriminating evidence warrants it.

The aim is not perpetual pluralism but preventing premature closure. Repeatedly disconfirmed hypotheses also waste attention. Persistent alternatives require **evidence-constrained competition**, not endless argument.

---

## Chapter 7. Research queues, stopping rules and resource allocation

Complex inquiry can expand indefinitely: each neighbouring theory invites more reading, each uncertainty more checking, each model further refinement. Without stopping rules, more research can become another way to avoid commitment.

An explicit **research queue** is therefore needed, prioritised by decision relevance rather than functioning as a plain task list.

A rough admission principle is:

~~~text
Expected decision value of additional information > Research cost
~~~

Research cost includes:

- time;
- attention;
- computation;
- context occupancy;
- opportunity cost of the action window.

Even academically interesting uncertainty should not block action if no answer would change the present representation or decision.

**Stopping rules** also matter. Consider ending further research and moving to action when these conditions broadly hold:

1. The current representation has reached decision sufficiency for (\(T,H\)).
2. Remaining unknowns are unlikely to change policy.
3. Expected value of more information is low.
4. The action window is narrowing.
5. Further research itself is causing opportunity loss.

Context budget is thus a real resource. Humans and AI have attention, memory, computational and time constraints. Quality research does not maximise everything known; it allocates finite cognitive resources to unresolved questions most likely to change consequences.

---

## Chapter 8. Domain interfaces and theory retrieval

A general system cannot replace domain knowledge. Investment needs accounting, capital allocation and market microstructure; life sciences need molecular, cellular, evolutionary and experimental knowledge; robotics needs control, perception and dynamics. Compressing all this into constraints/capabilities/viability discards useful information.

**Domain interfaces** are therefore required.

They should not rewrite domain ontologies into generic language, but connect:

~~~text
Domain evidence ↔ General representation objects
~~~

They identify:

- domain variables worth representing as states;
- evidence considered strong within the domain;
- mechanisms with established theories;
- thresholds and failure conditions with domain meaning.

Once a target representation is constructed, AI can conduct **theory retrieval**. The question is not merely what this resembles, but:

> Which established theory actually studies the mechanism in the present representation?

The standard chain is:

~~~text
Target representation → Theory retrieval → Relation-preservation check → Target-domain evidence
~~~

Relation-preservation checks include:

- structural preservation;
- causal preservation;
- predictive preservation;
- preservation of decision significance.

Structural mapping, causal inference, viability theory, RDM, RL, statistics and optimisation should be called as reasoning modules, not renamed into a new theory of everything.

Retain this discipline:

\[
\boxed{
AnalogyGeneratesHypotheses,\ NotEvidence
}
\]

Cross-domain structure suggests what to seek next; it does not replace target-domain verification.

---

## Chapter 9. Monitoring representation failure and minimal revision

Omitted factors, changed mechanisms or changed objectives can make a representation insufficient. Minimal revision diagnoses the issue before making necessary changes to restore applicability. The question here is **how a long-term system continually monitors and handles these changes**.

Maintain representation-fragility monitoring, asking not whether there is bad news but whether current \(Z_t\) shows loss of decision sufficiency.

Typical signals include:

- persistent unexplained structure in forecast errors;
- worsening probability calibration;
- broken previously stable relationships;
- formerly unimportant variables becoming binding;
- unexpected responses to discriminating events;
- mechanisms failing in specific environmental states;
- changed target/horizon without a switched representation.

Diagnose the failure conditions first:

~~~text
Was something omitted from the initial representation?
~~~

~~~text
Has structural drift occurred?
~~~

~~~text
Has the task changed?
~~~

Do not automatically rebuild everything.

Then invoke **minimal revision**, from smaller to larger levels:

- **L0: parameter update.** Change numbers within the existing representation.
- **L1: reweighting.** Change existing factors' importance.
- **L2: mechanism revision.** Replace or adjust causal hypotheses.
- **L3: variable revision.** Add, remove, split or merge variables.
- **L4: scope and constraint revision.** Change system scope, applicable states or constraints.
- **L5: representation reconstruction.** Rebuild when the old structure cannot sufficiently support the current question.

Record triggering evidence or events, revision level, explanatory and predictive improvements, and complexity costs. Over time, beyond world-facing research data, the system gains:

~~~text
Records of how representations fail
~~~

These support empirical tests of failure detection and revision.

---

## Chapter 10. How to validate the system

Completeness and structural elegance cannot prove effectiveness. Compare simpler baselines.

Validation should ask:

- Are decision-relevant variables found faster?
- Are fewer binding variables omitted?
- Do out-of-sample forecasts improve?
- Is representation failure detected earlier?
- Is sufficiency restored with smaller revisions?
- Is irrelevant-context interference reduced?
- Do decision outcomes actually improve?

Three forms of validation are needed.

### 10.1 Prospective research

Freeze from now onward:

- representations;
- competing representations;
- forecasts;
- probabilities;
- disconfirmation conditions;
- decision rules.

After real outcomes occur, score and revise.

This closely matches actual research because the result has not happened at the time of recording.

### 10.2 Synthetic environments

Construct environments where the experimenter knows hidden states, mechanisms, constraints and environmental mechanism changes, but the agent receives only partial observations. Test whether it can:

- find decision-relevant variables;
- ignore irrelevant details;
- discover hidden constraints;
- detect structural drift;
- recover through minimal revision.

Known states and mechanisms allow evaluation of representation discovery and revision, rather than persuasive language alone.

### 10.3 Historical and retrospective cases

Historical cases remain useful, but LLMs face training contamination:

~~~text
Hiding an outcome in the prompt ≠ The model did not already know the outcome
~~~

They therefore suit mechanism discovery, representation practice and error classification better than serving as the sole independent predictive validation.

---

### 10.4 Evaluation extends beyond prediction accuracy

Representation evaluation should jointly consider at least:

#### Representation efficiency

How much decision value is obtained per unit of currently active model complexity?

#### Forecast quality

Do probabilistic forecasts improve?

#### Failure detection

Is representation failure found earlier?

#### Revision efficiency

Does a smaller structural change restore applicability?

#### Decision utility

Do final action policies improve?

#### Memory and context efficiency

Are irrelevant retrieval and interference reduced?

The objective can be expressed as:

~~~text
MoreDecisionValue PerUnitOfRepresentationComplexity
~~~

---

### 10.5 Epistemic governance matters more than autonomy

Even an agent that searches, summarises, reasons and acts automatically may simply produce self-consistent stories faster if it lacks:

- explicit objectives;
- evidence classification;
- competing representations;
- frozen forecasts;
- an audit trail;
- stopping rules;
- revision discipline.

The central capability is therefore not autonomy alone but:

~~~text
Epistemic governance
~~~

The system must know:

- what is fact and what is assumption;
- what changed and why;
- which errors concern parameters versus representations;
- what evidence should change action policy;
- when to stop researching;
- who governs final goals and values.

---

## Appendix A. Minimal data structure

A long-term topic should maintain at least:

### 1. Target card

Current target/horizon and critical decision.

### 2. Representation state

Core/monitoring variables, constraints, capabilities, mechanism hypotheses and uncertainty.

### 3. Evidence ledger

Sources, timestamps, types, confidence and affected representation elements.

### 4. Hypothesis set

Persistent competing representations and discriminators.

### 5. Forecast ledger

Frozen forecasts, probabilities, outcomes and scores.

### 6. Fragility state

Policy fragility plus representation-vulnerability signals.

### 7. Revision log

Version differences, failure classifications and revision levels.

### 8. Research queue

Unresolved questions that do not currently block the decision.

### 9. Stopping rules

When to stop further research and act.

### 10. Context policy

What enters working context and what stays only in memory.

---

## Appendix B. Terminology index

**Research state**<br>
Structured current knowledge in long-term inquiry, not the full conversation.

**Memory store**<br>
Persistently stored historical information.

**Working context**<br>
Finite information actually active in current reasoning.

**Memory selection**<br>
Screening candidate memories for relevance, validity and consequences.

**Representation state**<br>
Current \(Z_t\), core/monitoring variables, constraints and hypotheses.

**Evidence state**<br>
Traceable evidence and its epistemic typing.

**Hypothesis set**<br>
Representations or mechanisms still competing.

**Forecast state**<br>
Frozen predictions awaiting outcomes.

**Epistemic audit trail**<br>
Version history of earlier representations, evidence, grounds and revision reasons.

**Research governor**<br>
The governance layer responsible for goals, horizons, values, risk, commitment and stopping rules.

**Representation and evidence-work engine**<br>
AI's principal role in retrieval, construction, testing and revision proposals.

**Contradiction search**<br>
Actively seeking poorly explained facts and strong alternatives.

**Research queue**<br>
Unresolved questions ordered by decision relevance.

**Stopping rule**<br>
Conditions for stopping once sufficiency is reached or further inquiry has low value.

**Domain interface**<br>
An interface connecting domain vocabulary and evidence rules to the general workflow.

**Theory retrieval**<br>
Seeking established source theories after constructing the target representation.

**Representation-fragility monitoring**<br>
Continual monitoring for loss of decision sufficiency.

**Minimal-revision procedure**<br>
A process changing representation at the lowest necessary level.

**Epistemic governance**<br>
Long-term discipline governing evidence, representation, forecasts, revision and research stopping.

---

## Closing

Six working principles remain.

First, chat history is not research state; long-term collaboration needs structured state, not unlimited accumulation of conversations.

Second, memory should not enter context wholesale. Retrieve, validate and select dynamically relative to target/horizon.

Third, evidence, representations, hypotheses, forecasts and unknowns require separate storage; earlier versions must survive.

Fourth, humans govern research while AI serves as the representation and evidence-work engine; together they maintain a long-term loop.

Fifth, actively search for contradictions, persistently maintain competitors and use failure signals for minimal revision, rather than continually patching the old story.

Sixth, a valuable system must establish through prospective, synthetic and other auditable evaluations that it finds consequential differences better than ordinary dialogue, detects errors earlier and corrects them at lower cost.

---

## Appendix C. How one observation changes research state

**This fictional workflow illustrates recordkeeping; no actual experiment is claimed.** Suppose the objective is to test whether English practice reduces omitted past-tense marking after four weeks in changed contexts.

| Research object | Initial v0.1 | New observation and candidate v0.2 revision |
| --- | --- | --- |
| Question and deadline | Observe tense omissions after four weeks on unpractised expression tasks | Keep the task definition unchanged rather than switching questions midway |
| Main explanation | Insufficient rule knowledge is the main bottleneck | The learner explains the rule but still omits it under time pressure; compare delayed access to known rules |
| Alternative explanations | Unfamiliar prompts, vocabulary or expression load may also matter | Compare rule cues, familiar prompts and new contexts rather than only adding explanation |
| Evidence state | Teacher impressions are reported statements; practice records have timestamps | Store specific records and sources, separating observations from causal inference |
| Advance forecast | Rule training should reduce omissions in new contexts | Record expectations, deadlines, comparisons and disconfirmation before new training |
| Version difference | Initial representation | If comparisons support it, revise the bottleneck hypothesis and add timed retrieval; otherwise examine alternatives |

This does not require completing a full table in every conversation. Preserve the question at the time, available evidence, forecasts made and later reasons for change. Human learning effects and system-organisation effects require separate evaluation.

## Related research and effectiveness boundaries

Retrieval, memory, reflection and feedback have research foundations; this article organises them into governance of long-term inquiry:

- [Lewis et al., 2020: Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) combines external retrieval and language models, providing background for evidence retrieval.
- [Park et al., 2023: Generative Agents](https://arxiv.org/abs/2304.03442) combines memory, reflection and retrieval in an agent architecture, relevant to persistent state.
- [Shinn et al., 2023: Reflexion](https://arxiv.org/abs/2303.11366) uses language feedback and experiential memory to adjust later attempts, relevant to feedback records and revision.

These studies do not directly establish effectiveness of the complete procedure here. Compare ordinary dialogue, retrieval alone, explicit state, and then forecasts plus revision under similar material, time and computational budgets. Also record whether independent human questioning, understanding of limits and cross-task transfer improve.

This public edition adds a standalone introduction, reading guidance, a workflow example and research entry points. Continuous source-book numbering is adjusted, and cross-part dependencies become local definitions and internal links. The original research draft is retained.
