---
title: "Cooperation under Incomplete Trust: Warning Margin and Recoverability"
description: "Distinguishes commitment credibility, cooperation recoverability and arrangement acceptability, and examines future options, dependency and recovery windows. An abstract mechanism framework and hypotheses, not execution guidance for actual arrangements."
author: SL
version: "0.11.1"
created: "2026-11-02"
updated: "2026-11-08"
published: "2026-11-02"
publish: true
kind: article
lang: en
language: en
source: applications/cooperation-under-incomplete-trust.md
sourceUpdated: "2026-11-08"
aliases:
  - applications/credible-commitment
  - framework/credible-commitment
  - framework/cooperation-under-incomplete-trust
---

## Introduction: Why can cooperation remain impossible even with understanding?

Many conflicts between two actors arise because each cannot see the other clearly. One acts for self-protection; the other reads this as a threat and reacts, producing an escalating spiral. Better understanding of each other's constraints can reduce this kind of conflict.

Another difficulty remains even with complete mutual understanding:

> One side sincerely intends no harm today, but cannot guarantee that it will refrain after its circumstances change. Seeing this clearly, the other side cannot place its safety in that promise.

Existing research treats such difficulties as **commitment problems**. Increasing commitment credibility is important. This article additionally asks:

> **Can cooperation still be acceptable when commitments are not fully credible?**

### Three separate questions

| Question | Object of study | Treatment here |
|---|---|---|
| Will A honour its commitment? | **Commitment credibility** | Primarily existing theory (Section 5) |
| If A breaches, can B withstand the consequences and adjust? | **Cooperation recoverability** | This article's principal contribution (Sections 2–4) |
| Considering benefits, costs and risks, does B want to cooperate? | **Arrangement acceptability** | Only locates warning margin within this question; no complete answer (Section 6) |

These questions are often conflated. In a supply arrangement, B might hold sufficient inventory and be able to connect an alternative source in time. This means B need not lose viability even if A breaches; it **does not mean A is more likely to comply**. A may remain unreliable while B can withstand that unreliability.

The central idea can therefore be stated at the outset:

> **Cooperation can reduce its dependence on trust.**

---

## 1. Commitment as a prediction of one's own future choices

A promises B: "I will not do X in the future."

From the perspective of the [complex-systems framework](../framework/book/constraints-and-future-options.md), this commitment has two properties.

**First, in this analytical perspective, it contains a prediction of the actor's own future choice.** The predicted object is A's own future action. The promise is fixed when made, while A's circumstances, goals and even decision-makers may change. In [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md), commitment can concentrate resources and form capabilities; its risk also lies in expressing a changing future as a fixed prediction.

**Second, B's response preparation must examine the consequences A can cause.** Intentions and their changes still affect breach probability; recoverability analysis also examines actual paths after a breach. B is concerned with continuing to satisfy critical constraints over a period: its viability. In this framework, this is necessarily an estimate conditional on a model and scenarios:

$$
\widehat{\operatorname{Viab}}_H(K_B \mid \mathcal M_B, \Sigma).
$$

Here $K_B$ is the set of constraints B must keep satisfying, $\mathcal M_B$ its model of A and the environment, and $\Sigma$ the scenarios it considers. B's viability depends on which states A **can** reach and whether B has a continuing path afterwards.

Intentions, capabilities, costs and response conditions may change at different speeds. Their rates must be estimated separately relative to the target and horizon, without assuming intentions always change fastest or capabilities remain stable. This gives two lines of analysis:

| Line | Objective | Acts on |
|---|---|---|
| **Line 1: make breach less likely** | Reduce the possibility of breach | A's reachable set (capability limits) and incentives (costs and benefits) |
| **Line 2: prevent breach from causing unrecoverable consequences** | B retains a path after breach | B's observation, buffers, dependency and response capability |

The main contribution here lies in Line 2. Line 1 has an extensive literature; Section 5 outlines it and the intersections.

### 1.1 Cooperation and future options

Cooperation changes current benefits and what both sides can do later. This article follows Chapters 4–5 of the public v0.3 of [Constraints, Feasibility and Future Options](../framework/book/constraints-and-future-options.md): reachability, viability and adaptability after environmental change. "Future options" summarises these questions rather than defining a single score.

- **Can it be reached?** Is a path executable with current resources, authority, knowledge and time?
- **Can it be maintained?** Are the specified critical constraints satisfied along the path and after arrival?
- **Can it be adjusted?** After conditions change, can a path be recovered, substituted or reorganised in time?

Listing an option does not establish these conditions. Multiple paths may depend on the same funding, interface or external support and fail together; counting paths does not measure choice capability. See Chapter 8 of [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md) and [Stress Testing ST9](../framework/methods/stress-testing.md#st9).

When examining how an actor chooses, distinguish three objects:

| Object | Question | Possible error |
|---|---|---|
| Actually feasible paths | Under the specified model and scenarios, which paths hold conditionally? | Researchers may omit conditions: this remains an estimate, not direct access to reality's truth |
| Paths the actor knows or believes feasible | What information does the actor have, and how does it understand consequences? | Missing a genuine fallback or overestimating an infeasible plan |
| Paths the actor finds acceptable | By which goals, values and risk criteria are paths compared? | An objectively executable path may still be rejected |

These objects need not coincide. Continued cooperation alone proves neither the absence of alternatives nor genuine endorsement of the arrangement. Section 7 of [Why Is an Objective Function Reasonable?](../framework/foundations/why-objectives-are-reasonable.md) further asks who chooses, by what criteria, who bears the consequences and whether feedback is genuine.

This article thus studies changes in dependency, response windows and alternative paths. Inferring choices from them also requires explicit cognitive and evaluation rules. Sections 2, 5 and 7 of [Freedom and Unconstrained Wandering](../framework/foundations/freedom-and-future-options.md) offer a philosophical interpretation; the theoretical sources cited above govern the precise concepts.

---

## 2. The core of Line 2: temporal structure and warning margin

### 2.1 Preconditions for estimation

The following times are not objective system constants. They are **conditional estimates**. Every estimate must specify:

- **Breach scenario** $s$: how A breaches—total or partial, sudden or gradual—and B's evolution if it **does not respond** during that period;
- **Constraint set** $K_B$: conditions B must keep satisfying;
- **Available plan set** $\mathcal O_B$: known, executable response plans, with each plan's full response duration $\tau_{\mathrm{response}}(o)$ including judgement, coordination, initiation and execution.

Changing scenarios, constraints or plans changes the times.

### 2.2 Several time points

Suppose A begins breaching at \(t_0\). For a known, effective and executable plan, record on one time axis:

| Object | Definition |
|---|---|
| \(t_D\) | When B detects breach; not when execution begins |
| \(D\) | Latest completion deadline: the deadline for maintaining critical constraints without a completed effective response; this model assumes completion by this time still avoids violation |
| \(\ell\) | Judgement, coordination and initiation delay between starting the response process and starting execution |
| \(\tau_{\mathrm{exec}}\) | Duration from execution start to completion and effectiveness |
| \(\tau_{\mathrm{response}}=\ell+\tau_{\mathrm{exec}}\) | Full response duration; pre-detection delay is not counted again |
| \(t_L=D-\tau_{\mathrm{exec}}\) | Latest execution start |
| \(t_R=D-\tau_{\mathrm{response}}\) | Latest start of the entire response process |
| \(t_F\) | When consequences cross a failure threshold in B's observable performance |

**Applicable assumptions.** Deadline, pre-execution delay and execution duration are fixed; judgement/coordination and execution are sequential; the plan cannot mitigate losses before completion and maintains the specified constraints afterwards. If the response process starts immediately upon detection, \(t_A=t_D+\ell\) and \(t_C=t_D+\ell+\tau_{\mathrm{exec}}\). Any further waiting must be counted rather than hidden in unspecified "timely action".

**The two latest starts must not be conflated.** Starting the entire process exactly at \(t_R\), or execution exactly at \(t_L\), can still meet the deterministic deadline but leaves no error margin. The specified plan is too late only if the corresponding start is missed. The earlier draft's "time from detection to latest execution" did not automatically deduct coordination; this version separates it from effective margin.

For multiple plans, record \(\ell(o)\) and \(\tau_{\mathrm{exec}}(o)\) separately. Under a common deadline, let \(\tau_{\mathrm{response}}^*=\min_{o\in\mathcal O_B}[\ell(o)+\tau_{\mathrm{exec}}(o)]\), and \(t_R^*=D-\tau_{\mathrm{response}}^*\). Fastest execution need not mean fastest full response. Without an effective executable plan, a positive-margin formula cannot create a path.

For a fixed baseline process not yet started, define \(t_V=t_R^*-\delta\), with \(\delta\ge0\) a time-safety threshold chosen in advance. The old \(t_V=t_L-\delta\) agrees when the relevant plan has \(\ell=0\). There is no universal ordering of \(t_F\) and these latest-start times; a positive Warning Gap requires the defined danger threshold to precede visible failure.

Detection delay \(L_D=t_D-t_0\) and warning interval \(G_W=t_F-t_V\) respectively describe information delay and the gap between two thresholds. With baseline trajectory, durations and thresholds fixed, purely earlier information changes \(t_D\), not baseline \(G_W\). If earlier detection changes action or reaction, re-estimate the trajectory. Staged effectiveness, overlapping stages, start-dependent duration or different deadlines likewise require plan-specific trajectory comparisons.

### 2.3 Warning margin

Warning margin here is **effective margin**: time remaining after detection, net of the time needed for the whole response. The notation \(m_\tau^B\) and later shorthand \(m\) are retained; both refer to their corresponding \(m_{\mathrm{eff}}\):

\[
\widehat m_\tau^B(s,K_B,\mathcal O_B)
=\widehat m_{\mathrm{eff}}^{B,*}
=\widehat D-\widehat t_D-\widehat\tau_{\mathrm{response}}^*
=\widehat t_R^*-\widehat t_D.
\]

For a specified plan, \(m_{\mathrm{eff}}=t_L-t_D-\ell\). The detection-to-latest-execution window \(t_L-t_D\) must still accommodate \(\ell\); it equals effective margin only when \(\ell=0\). At the same reference time, \(\tau_{\mathrm{survive}}=D-t_D\), consistent with the shared temporal-margin formula. Retain estimation ranges and conditions.

In the fixed baseline model, \(m_{\mathrm{eff}}^*\ge\delta\) is equivalent to \(t_D\le t_V\). Positive effective margin guarantees neither plan effectiveness, resource availability nor cooperation acceptability. Once the response has started, update the remaining stages at the same time coordinate rather than deducting completed judgement and coordination again.

Part of \(D-t_0\) may come from the time adverse change takes to propagate to critical constraints, and part from B's buffers. How they combine is scenario-specific, not a universal additive theorem.

### 2.4 Central proposition

> **Proposition 1. Where an effective, executable and affordable response path exists, a persistently positive warning margin \(\widehat m^{B}_\tau>0\) may allow B to accept some cooperative arrangements without fully trusting A.**

All three prerequisites are essential:

1. **An effective response path exists.** $\widehat m_\tau$ measures whether a *known plan* is timely. Without a viability-restoring plan, positive margin is meaningless.
2. **The path is executable.** B has the capability, authority and resources.
3. **Costs are affordable.** These include ongoing vigilance and post-breach adjustment. If maintaining them consumes B's margin, the condition fails.

Proposition 1 says "may accept", not "should" or "will". It turns some **unrecoverable losses** into **recoverable losses**. Whether B wants to bear those recoverable losses is the third question (Section 6).

### 2.5 Mutual conditions

Cooperation is usually reciprocal: A also depends on B's commitments. Thus:

> **Principle 1. Mutual warning-margin condition: where executable response paths exist for both sides, make and keep both warning margins positive.**
>
> $$\widehat m^{A}_\tau>0\quad\text{and}\quad\widehat m^{B}_\tau>0$$

### 2.6 An important qualification

$\widehat m_\tau$ is not a universal cross-domain score. It depends on scenarios, constraints and available plans; each domain must redefine and estimate the time points. This is a **form of condition**, not a universal number.

The three illustrations below show how that form can mean different things. They demonstrate a **shared analytical structure**, not a proven common behavioural mechanism. See also [Stress Testing ST8](../framework/methods/stress-testing.md#st8): effectiveness, executability, affordability and timeliness must be checked separately, not collapsed into positive margin.

| Domain | A's illustrative commitment | Factors determining completion deadline $D$ | Factors determining full response duration $\tau^*_{\mathrm{response}}$ |
|---|---|---|---|
| Two interdependent actors | Not unilaterally change critical cooperation terms | Propagation time from change to critical constraint failure and own buffers | Understanding detected change, judgement/coordination, switching or rebuilding cooperation; pre-detection delay separate |
| Long-term organisational supply | Not exploit dependency by worsening terms or stopping supply | How long inventory and funding sustain operations after interruption | Finding, qualifying and connecting alternatives |
| A person and an automated system | Not change control modes without notification or cross agreed boundaries | Latest completion deadline for preserving critical constraints after unexpected behaviour | Understanding what happened and taking over control |

Their surfaces differ, but the question has the same form: **If the other side breaches, can I respond in time?**

The third row needs separate treatment. An automated system has no intention to honour or breach a promise. The counterpart is therefore **specification failure**: behaviour outside specifications, under uncovered conditions or due to design/implementation errors. The distinction is:

- **Line 1 differs.** For actors, capability limits and incentives can reduce breach. For automation, there are capability limits and verification—such as authority limits and validation across more conditions—but no "incentives" in that sense.
- **Line 2 is shared.** Whether the cause is breach or specification failure, timely detection and takeover depend on the same temporal structure. Takeover itself requires sufficiently reliable information, suitable authority, a feasible response strategy and enough time; not every handover requires increased authority ([Control Authority, Information and Time](viability-first-control.md), C14).

Precisely: **inter-actor commitments and human reliance on automation share some recoverability conditions**, not necessarily the same generative mechanism.

### 2.7 A minimal model: fictional supply

> The following case and every number are **fictional**, illustrating how the formula explains a relationship.

**Setup.** Manufacturer B buys a critical component from supplier A, which promises continuous supply. Consider the worst breach scenario $s$: A suddenly stops all deliveries at week 0.

- **Constraint $K_B$:** B can finance at most four weeks without production before becoming insolvent.
- **Inventory:** enough components for eight weeks of production.
- Without replacement supply, production stops in week 8 and insolvency occurs in week 12: **completion deadline $D=12$ weeks**.
- Alternative supply cannot mitigate loss before connection is complete (Section 2.2). The original five conditions additionally assume pre-execution delay \(\ell=0\); full response duration therefore equals connection execution time. Detection delay remains separate.

**Two adjustable parameters.**

- **Detection delay $L_D$:** if B detects breach only when a delivery fails to arrive, the order cycle gives $L_D=3$ weeks. Visibility of A's production/shipment plan gives $L_D=0.5$ weeks.
- **Alternative connection duration $\tau^*_{\mathrm{response}}$:** without a prequalified second supplier, finding, qualifying and connecting takes 12 weeks; with one, four weeks.

**Calculation** (\(t_0=0\), hence \(t_D=L_D\)): here \(\ell=0\), so \(t_R=t_L=D-\tau^*_{\mathrm{response}}\), and \(m=m_{\mathrm{eff}}=t_R-t_D\).

| Condition | Inventory | $D$ | $\tau^*_{\mathrm{response}}$ | Latest execution start $t_L$ | Detection $t_D$ | $m$ | Result |
|---|---|---|---|---|---|---|---|
| ① Baseline | 8 weeks | 12 | 12 | 0 | 3 | −3 | Too late |
| ② Monitoring only | 8 weeks | 12 | 12 | 0 | 0.5 | −0.5 | Still too late |
| ③ Prequalified second source only | 8 weeks | 12 | 4 | 8 | 3 | +5 | In time |
| ④ Both | 8 weeks | 12 | 4 | 8 | 0.5 | +7.5 | In time, greater margin |
| ⑤ More inventory only | 12 weeks | 16 | 12 | 4 | 3 | +1 | Barely in time |

**Separate timing variant: coordination is not instantaneous.** Retain condition ③'s \(D=12\), \(t_D=3\) and four-week execution, but add one week of judgement/coordination. Full response takes five weeks; \(t_R=7\), \(t_L=8\). Starting the process in week 3, execution in week 4 and completing in week 8 leaves four weeks of effective margin. The original five weeks was the detection-to-latest-execution window, containing one coordination week. This new fictional variant does not change the table or Appendix II's five zero-delay conditions.

**What the minimal model shows.**

1. **The action window can reach its boundary exactly when breach occurs.** In ①②, $t_L=0$: the moment A stops supply is B's latest start. Under this deterministic model, detecting and starting immediately in week 0 completes exactly in week 12, with $m=0$ and no error tolerance. **Any positive detection or pre-execution delay misses the deadline.** Yet inventory lasts eight more weeks, visible performance is normal, and completion deadline lies 12 weeks away. **Visible failure has not occurred, but the action window has already reached or crossed its boundary.** Distinguish theoretical just-in-time completion ($m=0$) from positive safety margin ($m\ge\delta>0$). Actual detection and initiation involve delay; only the latter offers genuine timing room.
2. **The effective lever depends on parameters.** Here monitoring alone cannot turn lateness into timeliness: connection time, not detection, binds. This is why Section 3 gives no universal priority order.
3. **"In time" does not mean "worthwhile".** Condition ③ requires annual second-source qualification and maintenance costs; ⑤ ties up four extra inventory weeks of capital. Acceptability also requires comparison of costs, cooperation benefits, recoverable post-breach losses and non-cooperation alternatives (Section 6).
4. **Margin can be calculated before trust is assessed.** In ③④, B can establish within the model that A's breach avoids unrecoverable consequences without judging A's long-term intentions.

**Where the model fails.**

- **Common failure.** If A breaches during market-wide shortage, the second source may also be constrained, making $\tau^*_{\mathrm{response}}$ far longer than four weeks. Prequalification works here only for isolated A breach. See [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md).
- **Partial/gradual breach.** Gradual quantity cuts, delays or declining quality obscure $t_0$ and $t_D$; detection delay may exceed the order cycle.
- **Reflexivity.** A may interpret second-source qualification as mistrust and change behaviour.
- **Unclear $D$.** Where losses accumulate rather than suddenly become unrecoverable, a threshold approximates the deadline and conclusions can be threshold-sensitive.
- **Staged effectiveness.** If the second source supplies partially before connection is complete, mitigation starts earlier; simple deadline-minus-duration accounting must be replaced by stage-specific effects.

---

## 3. Candidate design directions for Line 2

Warning-margin components suggest several ways to make breach recoverable. These are **candidate directions**; effectiveness and cost require domain assessment, with no universal priority. Section 2.7 shows why the same direction can work under one parameter set and fail under another.

| Direction | Acts on | General form |
|---|---|---|
| **Postpone completion deadline** | Increase $D-t_0$, postponing latest process start $t_R$ | Add steps before dangerous capability is reached; increase own reserves and margin |
| **Detect earlier** | Reduce $L_D$ | Verification, transparency, agreed disclosures, independent monitoring not dependent on visible failure |
| **Respond faster** | Reduce $\tau^*_{\mathrm{response}}$, postponing $t_R$; record execution and coordination separately | Direct communication, agreed response procedures, prepared alternatives |
| **Reduce dependency** | Reduce breach impact so some breaches no longer cause unrecoverable states | Diversify sources, retain alternative paths, reduce single-source exposure |

These correspond to several safety-design properties: time ratio, observability, command latency and coupling ([Control Authority, Information and Time](viability-first-control.md), Section 8). Cooperation recoverability can be viewed as a safety-design problem between actors.

### 3.1 The cost of transparency

Earlier detection has a tension: letting the other side see you may also reveal vulnerabilities, reducing your own warning margin.

Transparency design must distinguish **what becomes visible**. Showing "how far I am from dangerous capability" may support stability; revealing "where I am most vulnerable" can be exploited.

---

## 4. Coupling: my buffer may be your threat

Postponing the completion deadline has a trap.

In [CF Grammar](../framework/methods/cf-grammar.md), the same measure may **buffer** one side while **enabling** it against the other. It extends own margin but also increases harmful capability, shortening the other's margin.

> **Proposition 2. When expanding one side's warning margin compresses the other's, the two may enter a spiral of increasing vigilance.**

This is an interdependence feedback risk: local protection can amplify perceived threat elsewhere. Its relationship to a domain-specific "security dilemma" needs domain modelling. It corresponds to **joint-constraint mishandling**: protecting one side's margin squeezes the other's ([Control Authority, Information and Time](viability-first-control.md), C8).

> **Principle 2. Prefer measures that buffer one's own side without enabling harm to the other.** Assess stability by examining effects on both margins.

### 4.1 When buffering and enabling cannot be separated

In many domains the same capability serves protection and potential harm. The set of "buffers without enabling harm" may then be empty.

One candidate is visibility into the capability's **use path**: invocation conditions, current authority and resources, and steps/time required to turn it into harmful action. When capability itself cannot be distinguished, its use path sometimes can.

<a id="42-preemption"></a>

### 4.2 A special case: acting before losing response capability

If critical resources are so vulnerable that an initial shock removes response capability, margin approaches zero or becomes negative. Even without a desire for conflict, this may motivate pre-emptive action.

In this simplified mechanism, resources remaining available after shock for timely response may reduce the motive to act first out of fear of losing the action window. Resource survival alone does not ensure positive bilateral margins: detection, authority, effectiveness and cost must also satisfy conditions. This is a candidate link between recoverability and interaction stability.

---

## 5. Line 1: make breach less likely

This line addresses whether A will honour commitments. The extensive existing literature is only outlined here, including its relationship with Line 2.

### 5.1 Two mechanisms

**Capability limits: breach is impossible or difficult.** Constrain A's reachable set so dangerous states lie outside it, or require much time and many steps.

**Incentives and restraints: breach remains possible but unattractive.** Examples include:

- Deposits, collateral and loss-bearing;
- Specific assets and transaction arrangements: Williamson's (1983) credible commitments create safeguards that change opportunism incentives;
- Continuing cooperation benefits: future compliance gains exceed one-off breach gains;
- Reputation and audience costs of public commitments (Fearon, 1994).

In this framework, when compliance incentives, breach costs and execution conditions remain relatively stable over the horizon, changed willingness need not immediately change action. Whether these are actually slower variables and still effective for the current actor needs separate checking.

These mechanisms reduce breach likelihood without excluding it. Costs may be misjudged or no longer matter, for example in a survival crisis. Excessive costs may also compress the committing side's own margin, force lock-in under shocks and increase instability.

### 5.2 Intersections

The two lines are not independent:

- **Capability limits affect both.** A longer breakthrough time makes breach harder (Line 1) and gives B more response time (Line 2).
- **Recoverability changes breach incentives.** If B detects and responds effectively, A gains less from breaching. Deterrence theory calls this "deterrence by denial", distinct from punishment (Snyder, 1961). Line 2 may therefore **indirectly** increase credibility. This is an inference, not a demonstrated result here.

The mechanisms complement each other. Incentives alone leave no fallback when calculations change; recoverability alone may require expensive ongoing vigilance. Robust arrangements typically combine them.

### 5.3 Internal change and continuity of commitment

Goals, decision rules, authority or internal membership may change during cooperation. Continuity requires checking which compliance mechanisms persist and still constrain subsequent choices.

> **Proposition 8. Under a specified internal-change scenario, commitments may be more robust if their supporting constraints, incentives and execution capabilities remain effective.** This conditional mechanism hypothesis does not guarantee reliability across every change.

Possible objects include continuing resource obligations, verifiable work procedures, clear authority/responsibility, long-term benefits and review/revision conditions. The continued existence of rules or promise text does not establish unchanged compliance conditions.

Continuity arrangements may raise adjustment costs. Observe both continuity and revision capability; concrete institutional forms belong to domain applications.

---

## 6. The third question: acceptability

B's willingness depends on understood benefits, costs, risks and alternatives. Record actual feasibility, beliefs and acceptability separately as in 1.1. This article only locates warning margin, not a full choice model.

Acceptability also concerns who sets goals and bears consequences; see Sections 7–8 of [Why Is an Objective Function Reasonable?](../framework/foundations/why-objectives-are-reasonable.md). Viability alone cannot decide whether an arrangement is worth accepting.

**Positive warning margin is not sufficient for acceptance.** B must also compare cooperation gains, margin-maintenance costs (second-source upkeep and extra inventory in 2.7), recoverable post-breach losses and non-cooperation alternatives.

**Nor is it necessarily required.** If non-cooperation exposes B to greater unrecoverable risks, B may accept an arrangement with insufficient margin. Thus:

> **For actors prioritising particular survival constraints, positive warning margin may be an important acceptance condition; whether necessary depends on alternatives.**

Distinguish:

- **The framework's decision principle.** "Viability first" treats recoverable and unrecoverable losses as different kinds of cost rather than simply adding them. Under this principle, arrangements exposing the actor to unrecoverable loss when intentions cannot be assessed should first be checked for executable responses. This is a **normative recommendation**.
- **Empirical behavioural prediction.** Whether actual actors decide this way is separate. They may underestimate irreversible risks or accept because alternatives are worse. T3 (Section 14) tests that level.

Line 2 **turns part of "Can I trust the other side?" into "Can I withstand its unreliability?"—a question more amenable to design and checking.**

### 6.1 Choosing between paths when margin is insufficient

Negative margin under a specified breach scenario and known plan set only says the corresponding plan may be too late, not that every path is lost under every scenario. Compare what remains after acceptance, waiting, exit or another plan.

> **Proposition 9. If losing a critical condition is unacceptable to an actor, and it believes a riskier alternative retains some chance of preserving it, insufficient margin on the ordinary path may increase its inclination toward that alternative.** This direction remains conditional on beliefs, consequences, probabilities, costs and evaluation rules, and needs independent testing.

Chapters 1 and 7 of [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md) discuss consequence structure and state-dependent choice. This does not establish universal laws that "greater pressure increases acceptance" or "negative margin necessarily causes risk-taking".

**Asymmetry in choice conditions needs separate comparisons.** Resource endurance, executable alternatives, affordable exit losses and external control all affect posture. More options do not necessarily permit longer waiting; fewer reliable, timely paths may be more valuable.

> **Principle 8. Compare cooperative and alternative arrangements by recording both executable alternatives and the criteria by which the actor finds them acceptable.** Durability requires examining each side's subsequent paths and burdens, not just present consent.

### 6.2 Deadlines and the value of waiting

> **Proposition 10. How a deadline constrains an actor depends on the resources, obligations or action conditions changed by missing it, and who bears consequences.** An external supporter's deadline changes other actors' choice conditions only through concrete dependencies and transmission. Physical consequences do not disappear because an actor disregards them.

> **Proposition 11. Waiting may increase the value of retaining choice if expected improvements and information gains exceed waiting costs, lost opportunities and additional risks, and waiting is executable.** Expected future advantage alone does not establish unwillingness to accept now.

Following Chapters 4–5 of [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md), compare present commitment with an executable conditional waiting policy, include delay costs and avoid double-counting information and option value. Distinguish expected from realised improvements.

---

## 7. Trust dynamics: hard to build, easy to destroy

Warning margin supports cooperation without full trust. Reliability judgements may change during continued cooperation; growing trust is not necessary for every durable arrangement. Three hypotheses follow from observations and reasoning across domains; **there is currently no explicit updating equation, and they remain untested**.

**Hypothesis 1: trust falls faster than it rises.** One critical breach can offset many ordinary instances of compliance.

**Hypothesis 2: trust grows through negotiation–fulfilment cycles.** Declarations add less than a commitment made and fulfilled, especially under pressure.

**Hypothesis 3: responses after surprises may discriminate strongly when competing explanations predict different responses.** Whether more informative than routine observations depends on alternatives, noise and observability. Chapter 7 of [What Belongs in a Model](../framework/book/what-belongs-in-a-model.md) and [ST3](../framework/methods/stress-testing.md#st3) explain that pressure is only one source of discriminating observation: trouble does not necessarily reveal mechanisms better.

Two candidate principles follow:

> **Principle 3. Divide large commitments into verifiable small steps.** If Hypothesis 1 holds, each step's risk should be small enough that breach losses remain affordable for both sides.

> **Principle 4. Agree beforehand how surprises will be handled.** If Hypothesis 3 holds, agreed responses make behaviour observable and comparable, providing a basis for trust updates.

Line 2 makes small-step losses bearable, giving trust a chance to grow through fulfilment. **Recoverability creates room for trial and error in credibility accumulation.**

### 7.1 A process hypothesis: from recoverability to credibility

The preceding points suggest a transition from mistrust to trust:

1. **Control each step's risk.** Choose a step such that B retains positive warning margin and recoverable losses even if it is breached.
2. **Cooperation begins.** Bearable worst-case consequences allow cooperation without initial trust.
3. **Performance supplies information.** Fulfilled or breached steps provide observations of A; responses to surprises provide especially discriminating observations (Hypothesis 3).
4. **Trust updates.** B updates its judgement. If Hypothesis 1 holds, compliance increases trust slowly, breach reduces it quickly.
5. **Step size adjusts.** Rising trust permits larger steps and dependency, while each expansion still requires checking positive margin. Breach shrinks steps to bearable size.

**Line 2 permits a start; subsequent cooperation lets B update its judgement of A's reliability.**

Distinguish:

- **Judged reliability.** Performance first changes B's judgement, not necessarily A's actual reliability. A may be unchanged while B learns more.
- **Actual reliability.** Cooperation may change A: future gains raise breach costs, specific investment changes incentives, repeated compliance forms habits/routines. This separate Line 1 mechanism may **actually increase** credibility, but needs independent testing, not inference from records alone.

**The process hypothesis predicts** gradually expanding dependency with performance history rather than maximum dependency from the start, and rapid contraction after breach. **Changes in B's judgement alone can generate this pattern**, without A becoming more reliable; observing it does not establish improved actual reliability.

The hypothesis assumes each breach can be observed. Undetected breach builds trust on erroneous information, returning to detection delay.

---

## 8. Shared constraints: assign responsibility for each

Actors often share space, resources and risks. Three failure forms, originally proposed for control systems ([Control Authority, Information and Time](viability-first-control.md), C8: control-authority allocation/understanding failure, invalid-estimate action, joint-constraint mishandling), appear as:

| Failure | Meaning |
|---|---|
| **Unclear responsibility** | No agreement on yielding/risk reduction; each expects the other to handle it |
| **Action on an invalid estimate** | A failed model $\mathcal M$ is still used, e.g. interpreting operational self-maintenance as preparing to end cooperation |
| **Joint-constraint mishandling** | Protecting one margin squeezes the other (Section 4) |

> **Principle 5. Assign responsibility and yielding rules for every shared constraint.** Unassigned constraints may fall to a "default bearer" under pressure or remain unhandled. This is C4's "identify the current binding constraint and its responsible party" between actors.

---

## 9. Feasible region: required constraints and optimisation goals

CF Grammar distinguishes conditions that must persist under the current target/horizon from optimisation directions open to trade-offs. State the basis: public positions or observed actions cannot reveal all actual constraints directly.

"Intersection" here means candidate arrangements satisfying both sides' specified conditions. Constraint sets in distinct state spaces cannot simply be intersected without correspondence.

> **Proposition 3. While both sides' specified conditions continue to apply, an arrangement requires a jointly feasible implementation path to keep satisfying them.** Joint feasibility does not ensure acceptance or self-maintenance; incentives, information, execution and evaluation still need checking.

> **Principle 6. Record stated constraints, research estimates and unconfirmed conditions separately, then check joint feasibility.** With no intersection, study whether resources, technology, time, connections or interpretations expand candidates; "no currently acceptable arrangement" must remain an allowed result.

Required goals can combine factual conditions and value commitments. Sections 2 and 7 of [Why Is an Objective Function Reasonable?](../framework/foundations/why-objectives-are-reasonable.md) distinguish survival from worthwhile objectives. Rejected paths are not all misclassifications, and declared "unchangeability" does not establish permanence.

### 9.1 Self-imposed constraints

Actors may deliberately reduce future choice to concentrate resources or strengthen compliance expectations, through long-term resource commitments or hard-to-reverse rules. This relates to Schelling's self-binding; concrete institutions require domain study.

> **Proposition 12. When deliberately established constraints have substantial withdrawal costs, later adjustment may require compensation, renegotiation or explicit procedures for revision/removal.** Redefinition is one possible path, not the only one; renaming or verbal reinterpretation does not remove actual constraints.

Record why the constraint arose, who can revise it, actual withdrawal costs and affected parties. Chapter 5 of [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md) examines concentration versus adjustment; Section 7 of [Freedom and Unconstrained Wandering](../framework/foundations/freedom-and-future-options.md) connects voluntary commitment and necessary correction.

---

## 10. Sources of durability

### 10.1 Voluntary commitment, forced lock-in and future incentives

Two states can look alike yet differ:

- **Voluntary commitment:** closing some paths deliberately after understanding feasible alternatives/costs, to concentrate resources;
- **Forced lock-in:** continuing because conditions have already restricted choice.

> **Proposition 4. Where all sides can express and execute choices, arrangements may be more self-maintaining if continued cooperation retains acceptable benefits and risks relative to executable alternatives.** Where exit restrictions principally sustain participation, examine their changing costs. Both judgements depend on explicit cognitive and evaluation conditions.

The key is **every stage**. **Mutual benefit at signing does not establish continued willingness at later stages.** Changed circumstances may improve alternatives and reduce the relative benefit of compliance. Durability depends on continuously sustaining incentives as environments change, not just initial voluntariness.

See Chapter 5 of [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md) and Section 7 of [Freedom and Unconstrained Wandering](../framework/foundations/freedom-and-future-options.md): concentration can create capability, while fewer immediate options can consume later adjustment conditions. Compare costs and correction opportunities; selecting one path alone establishes neither commitment nor lock-in.

**Forced lock-in often is not a single decision.** Locally reasonable efficiency improvements can accumulate until alternatives disappear, without any step explicitly choosing to abandon them. Track alternatives over time, not only at signing. [ST7](../framework/methods/stress-testing.md#st7) repeatedly checks fallback paths through pilots, dependency expansion and integration; [ST8](../framework/methods/stress-testing.md#st8) checks recovery timeliness.

<a id="102-capability-and-access"></a>

### 10.2 Capability, access and external support

Following Chapters 3 and 7 of [Constraints, Feasibility and Future Options](../framework/book/constraints-and-future-options.md), **Capability** means actual ability to perform a class of tasks under specified conditions; **Access** means connections and conditions for obtaining resources/services. Receiving a service does not imply independently retaining its function after withdrawal.

"Borrowed Viability" is a working diagnostic. Under explicit model, target, horizon and comparability conditions, inspect continuing paths dependent on external support, using the original notation:

$$
\widehat V_H^{\text{access}}\setminus\widehat V_H^{\text{internal}}.
$$

This difference is not a risk score. Support may introduce obligations, common failure or new action limits; inspect the full cooperative path.

> **Proposition 5. Where an arrangement depends on external support, durability also depends on how long the supporter's capability, willingness and terms persist.** Support may raise breach costs or extend recovery windows; external origin alone does not establish unreliability.

> **Proposition 13. Autonomous Capability and external Access cannot be assumed equivalent solely because they currently provide the same function.** Trading capability for support requires comparing control, continuity, switching time, cost and common failure. External arrangements may be more robust or more fragile, depending on those conditions.

See [ST5](../framework/methods/stress-testing.md#st5), [ST8](../framework/methods/stress-testing.md#st8), [ST9](../framework/methods/stress-testing.md#st9) for withdrawal substitution, timing and common failure.

> **Proposition 14. If a supporter's behaviour leads the dependent actor to believe previously expected support can be unexpectedly withdrawn, that actor may downgrade continuity judgements and alter commitments and capability allocation.** This untested feedback mechanism must distinguish enforcement of explicit existing conditions from unexpected changes.

Record support behaviour, belief updates and actual resource changes separately. Expressed dissatisfaction does not prove Access failed, and enforcement of agreed terms does not automatically reduce support credibility.

---

## 11. Expectations and reality: internal breakdown

Actors usually enter expecting a larger future feasible space than without the arrangement. This remains an expectation at decision time; subsequent states partly arise from the gap between expectation and reality.

Benefits and costs need not be evenly distributed. Uncovered gaps often concentrate on some participants, making them "default bearers".

> **Proposition 6. Disruptors of an arrangement may disproportionately come from participants bearing uncompensated gaps.**
>
> **Principle 7. Make benefits visible early and keep monitoring who bears costs.**

---

## 12. When cooperation is least able to withstand commitment failure

> **Proposition 7. When commitment failure rapidly becomes critical loss, changes are hard to detect promptly, and effective responses and breach costs are hard to establish, credibility and recoverability conditions may weaken together.** Persistence also depends on dependency, other stabilising mechanisms and alternatives; this gives no universal domain ranking of difficulty.

Both lines are weak: Line 1 lacks slow variables constraining breach, while Line 2's margin may be negative and unestimable. Neither side knows its remaining time, increasing incentives for pre-emption.

Rapid technological change often approaches this pattern: capabilities may jump while outsiders struggle to assess distance from dangerous capability.

Candidate directions include observable breakthrough processes, more reserves and alternatives, less single-party dependence and long-term breach-cost arrangements. **Effectiveness and cost are domain-specific; no universal priority is given.**

---

## 13. A research and testing procedure

This procedure turns propositions into checkable questions, following competing explanations, discriminating observation and frozen predictions in Chapters 4, 7 and 8 of [What Belongs in a Model](../framework/book/what-belongs-in-a-model.md). Superior accuracy over other methods has not been demonstrated.

1. **Bound the question.** Specify actors, target, horizon, critical conditions and information cutoff; separate facts, reports, inference and unknowns.
2. **Build candidate representations.** Compare actual, known and acceptable paths. Material may suggest constraints, but public positions or single acts cannot establish them.
3. **Check joint feasibility and recovery windows.** For explicit scenarios, record known plans, execution, costs and timing uncertainty; distinguish own capability from support.
4. **Compare post-commitment paths.** Record consequences and cognitive assumptions for continued cooperation, adjustment, waiting or exit. Margin and option count do not determine action.
5. **Check change and feedback.** Internal change, resources/support, deadlines and waiting costs can alter paths, as can judgements of them.
6. **Seek discriminating evidence.** Prioritise evidence changing explanations, compliance probabilities, feasible paths or action evaluation. Apparently irrelevant information may enter Monitor; do not keep only events explained by existing variables.
7. **Freeze and settle predictions.** Prestate event, probability, observation deadline, source, counterexamples and revision triggers. Retain original records when outcomes arrive and compare information, parameter, policy and representation errors.

Behavioural predictions of concession, exit or high-risk choice require additional decision rules and competing mechanisms; warning-margin formulas do not identify them alone.

---

<a id="testable-implications-and-counterexamples"></a>

## 14. Testable implications and priority counterexample candidates

<a id="131-testable-implications"></a>

### 14.1 Testable implications

| ID | Implication |
|---|---|
| T1 | Arrangements extending breakthrough time, independently monitoring or providing effective response procedures last longer than declaration-only arrangements |
| T2 | Arrangements with both Line 1 and Line 2 mechanisms last longer than those with only one |
| T3 | Under comparable benefits, costs, alternatives and breach consequences, improved recovery windows may increase acceptance; mechanisms independent of changed trust judgements need separate identification (**highest testing priority**) |
| T4 | Trust between vigilant parties changes more with responses to surprises than formal statements |
| T5 | Imposed arrangements change more readily when sustaining external power declines |
| T6 | Third-party-guaranteed arrangements fail more readily as guarantor capability/willingness declines |
| T7 | Disruptors disproportionately come from uncompensated gap-bearers |

Operationalise each implication separately by domain.

**Why prioritise T3?** T1/T2 concern durability, affected by many mechanisms. T3 is closer to how recovery conditions affect acceptance. Separate total arrangement effects from mechanisms independent of trust change.

Keep the following comparable where possible; otherwise report them as treatment components or competing explanations:

- **Benefits:** larger-margin arrangements may also offer higher benefits.
- **Margin-maintenance costs:** rejection because of excessive maintenance cost is not a refutation of T3 but a failure to hold cost constant.
- **Recoverable post-breach losses.**
- **Alternatives:** what remains available without cooperation.

Appendix II's fictional supply scenario is a possible start for total effects. Its five groups change monitoring, inventory or second sourcing together; they are not pure changes in one margin parameter. Zero-threshold testing needs fixed measure type, densely varied values of one time parameter and prespecified model comparisons.

**Trust judgements may themselves be treatment effects.** Monitoring/second-source information can change perceived A compliance. Measure and report this, but post-treatment trust adjustment in regression does not automatically identify a direct non-trust effect. Mechanism identification needs additional design/assumptions; retain random assignment's total effect as the main comparison. See B6.

<a id="132-counterexample-candidates"></a>

### 14.2 Counterexample candidates deserving close inspection

There is no explicit trust-updating equation or control for all other stabilisers, so outcomes cannot yet be declared "excluded". Important challenges would include:

1. Clearly positive injured-party margin, executable responses and substantial breach costs, yet pre-emption still driven by mistrust with no other driver found.
2. A measure clearly compresses the other's warning margin, yet relations become durably stable without another stabilising mechanism.
3. Trust continuously rises without any negotiation–fulfilment cycle.
4. Required constraints truly have no joint intersection and remain unchanged, yet a stable arrangement forms.

---

<a id="relationship-to-existing-theory"></a>

## 15. Relationship to existing theory

### 15.1 Other articles in this corpus

| Article/version | Role here | Location |
|---|---|---|
| [Constraints, Feasibility and Future Options](../framework/book/constraints-and-future-options.md), public v0.3, Chapters 3–5, 7 | Shared constraint, Capability, Access, Reachability, Viability, future-option and recovery definitions | 1.1, 2, 10.2 |
| [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md), public v0.2, Chapters 1, 4–8 | Consequences, waiting costs, voluntary commitment, adaptation time, common failure | 6, 9.1, 10.1 |
| [Freedom and Unconstrained Wandering](../framework/foundations/freedom-and-future-options.md), public v0.1, Sections 2, 5, 7 | Philosophical interpretation of voluntary commitment/future paths; not formal definition or empirical evidence | 1.1, 9.1, 10.1 |
| [Stress Testing](../framework/methods/stress-testing.md), public v0.2, ST3, ST5, ST7–ST9 | Discrimination, withdrawal, commitment evolution, recovery windows | 1.1, 2, 7, 10 |
| [Why Is an Objective Function Reasonable?](../framework/foundations/why-objectives-are-reasonable.md), public v0.1, Sections 2, 7, 8 | Survival conditions, value premises, authority over acceptability | 1.1, 6, 9 |
| [What Belongs in a Model](../framework/book/what-belongs-in-a-model.md), public v0.1, Chapters 4, 7, 8 | Competing explanations, discriminating observation, frozen predictions | 7, 13, 14 |
| [Control Authority, Information and Time](viability-first-control.md), public v0.1.1, C4, C8, C14 | Information, authority, time, shared constraints; control-domain conditions retained | 2.6, 3, 4, 8 |

These references identify conceptual/methodological origins. New cooperation mechanisms require their own arguments and tests; cross-reference does not prove them.

### 15.2 External research

The table maps research themes, including domain-specific studies. It is not a comprehensive review or a promotion of domain results to general laws.

| Existing theory | Related theme | Correspondence and boundary |
|---|---|---|
| Schelling (1960), strategy of conflict | Credible commitment and self-binding in bargaining | Separates credibility from recoverability; the latter can support cooperation without complete credibility |
| Snyder (1961), deterrence/defence | Punishment versus denial | Denial corresponds to Line 2; proposes indirect credibility effects |
| Elster (1979), Ulysses and the Sirens | Precommitting one's future self | Voluntary commitment versus forced lock-in; commitment as frozen prediction |
| Williamson (1983), credible commitments/hostages | Transactions and specific assets safeguard against opportunism | Line 1: binding fast intentions to slower costs; excessive costs can compress own margin |
| Fearon (1994), audience costs | Public commitments make retreat costly | Line 1 |
| Jervis (1978), security dilemma | Defence interpreted as threat | Joint-constraint failure; "buffer without enabling harm" criterion |
| Osgood (1962), graduated reciprocation | Unilateral small steps reduce tension | Step size and asymmetric updating; recoverability enables small-step trials |
| Axelrod (1984), evolution of cooperation | The shadow of the future | Also asks whether the injured party can respond in time after each breach |
| Fearon (1995), rationalist explanations for war | Private information and commitment problems | Adds a non-credibility-dependent route: improved injured-party recoverability |
| Frank (1988), passions within reason | Emotion/reputation support credibility | Line 2 need not depend on character or emotion |
| Kydd (2005), trust/mistrust | Costly signals distinguish actor types | Complementarity: recoverability may work before type is known |
| Rusbult, investment model | More investment makes exit harder | Investment increases commitment and lock-in; distinguish voluntary from forced |
| Fortna (2003), ceasefire durability | Agreement content affects peace duration | Some results align with Line 2; unsupported arms-control results need explanation |
| Downs and Rocke (1994), gambling for resurrection | Disadvantaged decision-makers take risks to reverse fortunes | Proposition 9 examines post-concession options in concession/risk choice |
| Kahneman and Tversky (1979); Levy (1992), prospect theory | Reference points, loss framing, risk | Proposition 9 is a candidate consequence/path account, to compare with preference mechanisms; path count does not predict behaviour alone |
| Zartman (1989), ripeness | Mutually hurting stalemate and visible exits in conflict | Compare alternatives, joint feasibility and waiting; not universal necessary/sufficient conditions |
| Walter (2002), commitment and peace | Commitments/third-party guarantees in peace arrangements | Propositions 5, 13, 14; domain work does not prove all general support hypotheses |
| Schelling (1960), self-binding | Reduced future choice changes expectations | Proposition 12: withdrawal/revision costs; assess incentives and adaptation |

**The contribution is principally threefold, not any isolated mechanism:**

1. **Distinctions:** credibility, recoverability, acceptability and their intersections.
2. **A checking condition:** warning margin as an operationalisable conditional form for examining bilateral stability.
3. **Cross-domain research questions:** whether the distinctions help, which timing conditions survive translation, and which domain conditions need rebuilding. Human–automation correspondence is limited to certain post-specification-failure recovery conditions, not a presumed common behavioural mechanism.

---

### 15.3 Evidential limits of domain material

The retained domain study illustrates partial agreement, competing explanations and discrepant findings. It changes neither the abstract scope nor implies judgement of a concrete arrangement.

**Relationship to statistical research.** Fortna (2003) studies interstate ceasefires with both an aggregate agreement-strength index and individual provisions. Stronger agreements predict longer peace. Full demilitarised zones, explicit third-party guarantees, joint dispute commissions and specific agreements are significantly associated with durability; observers have a weaker positive effect. However, **arms-control and troop-withdrawal provisions receive no clear significant support**. Partial demilitarised zones reach only marginal significance ($p\le0.10$), hence weaker evidence. Continuing third-party mediation after ceasefire is associated with quicker breakdown. Provisions are highly correlated, making individual estimates less certain than aggregate results.

Demilitarised zones, commissions and guarantees align directionally with Line 2 and Proposition 5. Unsupported arms-control findings must also be faced. Perhaps provisions fail to extend breakthrough time or lack observability; these are only testable candidate explanations. **The study does not directly test warning margin**: the relationship is partial consistency and unresolved results.

---

<a id="limitations"></a>

## 16. Limitations

1. **Each side is one actor.** Internal decision-makers, goals, authority and organisation can independently affect cooperation. Section 5.3 lists changes but does not model internal decision processes.
2. **Only two sides.** Three or more create linked margins; coalitions/multilateral arrangements need separate models.
3. **Uncertain timing.** Breakthrough, detection and adaptation times are hard to estimate and may be deliberately concealed. Only a conditional form is supplied.
4. **Reflexive estimates.** Knowing how the other estimates breakthrough time may change behaviour.
5. **Transparency costs.** Observability may reveal vulnerabilities.
6. **No trust-dynamics equation.** Three hypotheses and associated implications remain candidates.
7. **No complete acceptability/choice model.** Feasible, believed and acceptable paths are distinguished without independently calibrated value, belief and choice equations; margin or option count cannot determine behaviour.
8. **Untested cross-domain correspondence.** Shared words/formulas do not prove comparability, preserved assumptions or identical mechanisms.
9. **Fictional minimal model.** Section 2.7 illustrates accounting, not empirical evidence.
10. **No account of value/legitimacy.** Model stability does not establish fairness or legitimacy.

---

## Closing perspective

A commitment predicts one's future choices. Intentions change, so credibility is not assured.

Existing theory asks how to make commitments credible through capability limits and incentives. This article adds **preventing breach from causing unrecoverable consequences**. Given effective, executable and affordable responses, persistently positive warning margin may support some cooperation without full trust.

The lines complement each other. Recoverability reduces dependence on trust and leaves room for trust to grow through fulfilled small commitments.

Cooperation also changes future options. Keep checking actual, recognised and acceptable paths. Pressure, deadlines, self-binding and support may change them; choice direction still requires consequences, cognition and values.

Related reading: [Complex-systems framework](../framework/book/constraints-and-future-options.md), [Control Authority, Information and Time](viability-first-control.md), [Acting under Uncertainty](../framework/book/acting-under-uncertainty.md), [Freedom and Unconstrained Wandering](../framework/foundations/freedom-and-future-options.md), [CF Grammar](../framework/methods/cf-grammar.md), [Canonical Vocabulary](../framework/methods/canonical-vocabulary.md).


---

## Appendix I: sources

- Axelrod, R. (1984). *The Evolution of Cooperation*. Basic Books.
- Downs, G. W., & Rocke, D. M. (1994). Conflict, agency, and gambling for resurrection: The principal-agent problem goes to war. *American Journal of Political Science*, 38(2), 362–380.
- Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2), 263–291.
- Levy, J. S. (1992). An introduction to prospect theory. *Political Psychology*, 13(2), 171–186.
- Walter, B. F. (2002). *Committing to Peace: The Successful Settlement of Civil Wars*. Princeton University Press.
- Zartman, I. W. (1989). *Ripe for Resolution: Conflict and Intervention in Africa* (updated ed.). Oxford University Press.
- Elster, J. (1979). *Ulysses and the Sirens: Studies in Rationality and Irrationality*. Cambridge University Press.
- Fearon, J. D. (1994). Domestic political audiences and the escalation of international disputes. *American Political Science Review*, 88(3), 577–592.
- Fearon, J. D. (1995). Rationalist explanations for war. *International Organization*, 49(3), 379–414.
- Fortna, V. P. (2003). Scraps of paper? Agreements and the durability of peace. *International Organization*, 57(2), 337–372.
- Frank, R. H. (1988). *Passions Within Reason: The Strategic Role of the Emotions*. W. W. Norton.
- Jervis, R. (1978). Cooperation under the security dilemma. *World Politics*, 30(2), 167–214.
- Kydd, A. H. (2005). *Trust and Mistrust in International Relations*. Princeton University Press.
- Osgood, C. E. (1962). *An Alternative to War or Surrender*. University of Illinois Press.
- Rusbult, C. E. (1980). Commitment and satisfaction in romantic associations: A test of the investment model. *Journal of Experimental Social Psychology*, 16(2), 172–186.
- Schelling, T. C. (1960). *The Strategy of Conflict*. Harvard University Press.
- Snyder, G. H. (1961). *Deterrence and Defense: Toward a Theory of National Security*. Princeton University Press.
- Williamson, O. E. (1983). Credible commitments: Using hostages to support exchange. *American Economic Review*, 73(4), 519–540.

Warning margin, Borrowed Viability and Warning Gap follow working diagnostics in the [framework](../framework/book/constraints-and-future-options.md). Three failures, binding-constraint responsibility, handover prerequisites and five comparative safety properties come from [Control Authority, Information and Time](viability-first-control.md). The three-question distinction, two intersecting lines, mutual-margin condition, buffering-without-enabling criterion and three trust hypotheses are this article's working propositions requiring testing.

---

## Appendix II: an experimental proposal for T3

> This is a research-design draft for discussion and piloting, not an executed or validated protocol. Five conditions compare arrangement bundles; a pure margin effect and its mechanism require further identification. Formal research must prespecify the main comparison, smallest meaningful effect, sample size and interpretation rules.

### B1 What is being tested?

**T3:** With comparable benefits, costs, alternatives and breach consequences, better recovery windows may increase cooperation acceptance; any mechanism independent of changed trust requires separate identification.

Test the directional prediction first, then treat mechanism and threshold shape as additional design questions:

- **Weak version (direction):** under otherwise comparable critical conditions, positive-margin arrangements may be accepted more than negative-margin ones. The original five groups first estimate total bundle effects; mechanisms unexplained by trust judgement require further identification.
- **Threshold version (additional exploratory hypothesis):** holding measure type and other key conditions fixed while densely varying one time parameter, acceptance may change around zero margin. Compare discontinuity, smooth nonlinearities and other mechanisms, including loss specification.

The stronger version is not implied by "viability first". This scenario specifies insolvency after the deadline; expected-loss models can also create nonlinearities or jumps near zero. A jump alone cannot distinguish viability-first from expected utility; specify competing predictions in advance.

### B2 Design

**Randomised between-subject design, five conditions**, corresponding to Section 2.7. Each participant sees one. Because conditions jointly change monitoring, inventory or second sourcing, the first estimand is a bundle effect, not the pure effect of one margin number.

| Condition | Inventory | Detection ($t_D$) | Second source ($\tau^*_{\mathrm{response}}$) | $D$ | $t_L$ | $m$ |
|---|---|---|---|---|---|---|
| C1 Baseline | 8 weeks | Missing delivery (3 weeks) | Not prequalified (12 weeks) | 12 | 0 | −3 |
| C2 Monitoring only | 8 weeks | Shipment-plan visibility (0.5 weeks) | Not prequalified (12 weeks) | 12 | 0 | −0.5 |
| C3 Inventory only | 12 weeks | Missing delivery (3 weeks) | Not prequalified (12 weeks) | 16 | 4 | +1 |
| C4 Prequalified second source only | 8 weeks | Missing delivery (3 weeks) | Prequalified (4 weeks) | 12 | 8 | +5 |
| C5 Both | 8 weeks | Shipment-plan visibility (0.5 weeks) | Prequalified (4 weeks) | 12 | 8 | +7.5 |

All five specify \(\ell=0\). Connection time covers all assumed execution, so \(t_R=t_L\) and \(m=m_{\mathrm{eff}}\). The added one-week coordination variant is not among these conditions.

**Held constant:**

- Benefits from A (e.g. a price 15% below other suppliers);
- Non-cooperation alternatives (e.g. market-price purchases elsewhere without interruption risk);
- Margin-maintenance costs: inventory, monitoring and second sourcing are **existing company conditions**, with no extra payment for this decision;
- Breach: sudden total supply interruption;
- Information about A: identical neutral description, no history or reputation.

### B3 Scenario template

> You manage procurement for a manufacturer requiring a critical component. Supplier A offers a long-term contract at 15% below other suppliers' prices. Without signing, your company can continue buying at market prices elsewhere without interruption risk.
>
> You know little about A. It promises continuous supply, but if it suddenly stops:
>
> - Existing inventory supports **[8 / 12]** weeks of production;
> - More than four weeks without production makes the company insolvent;
> - The company **[detects interruption only when delivery fails, after about three weeks / sees A's production and shipment plans in real time and detects it within about half a week]**;
> - Switching supplier **[requires finding, qualifying and connecting a new source, about 12 weeks / uses an already prequalified alternative, about four weeks]**;
> - No partial deliveries occur before connection completes. There is no additional post-detection decision, coordination or initiation delay; the connection duration is the full response duration.
>
> These are existing conditions, with no extra cost for this decision.

**Presentation variant (possible second experiment):** add a timeline marking completion deadline, detection and both latest-start times. Comparing parameters alone with an explicit timeline tests whether the effect depends on participants calculating margin themselves.

### B4 Measures

Present in this order:

1. **Primary outcomes:** sign with A (yes/no); willingness to sign (1–7).
2. **Perceived compliance probability:** probability A suddenly stops within the contract term (0–100%).
3. **Trust in A:** three 1–7 items, e.g. "A will keep its promise", "A will report supply conditions truthfully", "A is reliable". Pilot and validate items. Do not mix willingness to depend on A into trust, because it also captures risk tolerance and willingness to cooperate.
4. **Comprehension/manipulation check:** can an alternative connect before insolvency after sudden interruption? Yes/no/uncertain. Correct: C1/C2 no; C3/C4/C5 yes.
5. **Perceived insolvency risk:** probability signing causes insolvency (0–100%).
6. **Attention checks**, age, industry experience and procurement/supply-chain background.

Measuring trust after primary outcomes avoids priming the decision with trust questions, but the decision may itself change trust responses. A pilot can compare ordering.

### B5 Sample

- **Size:** for a roughly 20-percentage-point adjacent acceptance difference (e.g. 40% versus 60%), α=0.05 and power 0.8 suggest about 100 per condition. The stronger difference-between-differences version needs more; 150–200 per condition, roughly 750–1000 total, is suggested. These are rough plans under particular assumptions, not assured power for multiplicity or threshold tests. Formal size must follow the chosen primary contrast, smallest meaningful effect, baseline rate, multiplicity and simulated power. Pilots primarily check comprehension/feasibility; do not mechanically adopt small-pilot effect estimates.
- **Population:** general adults first, then replication with procurement/supply-chain experience.
- **Exclusions:** prespecify before collection, e.g. attention failure. Treat comprehension as an analysis variable, not an exclusion (B6).

### B6 Draft analysis plan

**Primary: total random-assignment effect.** Prespecify a principal comparison/planned contrast with signing as primary outcome; report rates, risk differences and confidence intervals. Logistic regression can estimate effects; willingness is secondary. Prespecify hierarchy or adjustment for multiple tests.

**Trust and mechanisms.** Post-scenario compliance probability and trust may be affected by treatment and signing. Regression adjustment does not automatically identify a direct non-trust effect; persistence or disappearance after adjustment proves no mediation mechanism. Retain total randomised effects as primary. Post-treatment trust models are explicitly exploratory associations/sensitivity analyses. Mechanism identification requires additional manipulation, causal assumptions and sensitivity analysis, not statistical control alone. [Montgomery, Nyhan and Torres (2018)](https://doi.org/10.1111/ajps.12357)

**Threshold limits.** Original adjacent margin changes are C1→C2: −3→−0.5; C2→C3: −0.5→+1; C3→C4: +1→+5. Unequal steps and different measures prevent identification of a zero jump. A threshold study should fix measure type, continuously vary one time parameter, densely sample both sides of zero and prespecify smooth versus jump models. Compare a zero effect with expected-loss changes induced by the scenario; it does not by itself establish a decision principle.

**Exploratory C2 versus C4.** Given parameters, C2 is late and C4 timely, predicting greater C4 acceptance. But measure, margin and losses differ; equal results would not establish response only to "a measure being present".

**Comprehension.** Retain randomised participants in the main analysis except preregistered, treatment-independent quality exclusions. Post-treatment comprehension subgroups are exploratory descriptions, not substitutes for causal comparisons or evidence of comprehension's causal effect.

### B7 Prespecified interpretation

| Result | Support and limits |
|---|---|
| Higher acceptance after assignment to positive-margin conditions | Consistent with weak directional version; first a bundle total effect, not exclusion of trust, measure type or loss structure |
| Perceived compliance meets prespecified substantive equivalence while acceptance differs | Strengthens evidence not entirely explained by measured trust differences; not direct causal-path identification |
| Coefficient changes/disappears after post-treatment compliance adjustment | Proves neither complete trust mediation nor rejection of weak version |
| Larger original-five-group changes near zero | Leads for a threshold experiment, not identified discontinuity or decision principle |
| Dense prespecified experiment/model comparison supports a jump | Supports threshold under that design; still examine discontinuity in consequence specification |
| Nonsignificant acceptance differences | May be inconclusive; report intervals/power, not "no effect" |
| With valid manipulation/comprehension and adequate precision, interval excludes preregistered minimum meaningful positive effect | Challenges the prediction for this setting/scale, not T3 in all domains |

Before data collection, register contrasts, scales, smallest meaningful effects, size, exclusions and alternatives. Substantive similarity or absence of meaningful effects needs prespecified equivalence bounds and appropriate tests, not nonsignificance-as-equality. [Lakens (2017)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5502906/)

### B8 Ethics and limitations

- Adult participants, minimal risk, explicitly fictional scenarios and no deception; obtain informed consent and institutional ethics review as required.
- Scenario experiments test **judgement**, not actual corporate contracting. Supporting T3 only shows margin influences fictional acceptance; actual decisions need different designs, such as observed contract provisions.
- Before design, review insolvency/ruin decision research to establish relationship with existing findings and avoid repeating known results.

---

## Appendix III: revision history

(The v0.4 record uses old $t_U$ notation; v0.5 introduced $D$ and $t_L$.)

### v0.11

- Separately account for execution and full response duration; effective margin deducts judgement, coordination, initiation and execution. Distinguish $t_R$/$t_L$ and old notation's zero-extra-delay condition.
- Explicitly set pre-execution delay to zero in the original supply table and five appendix groups, retaining numbers. Add a one-week-coordination variant with four-week effective margin.
- Align warning danger thresholds, plan-specific comparison and cited versions. Numbering retained; no new empirical result. Historical notation describes past versions only.

### v0.10

- Clarify abstract-mechanism scope; generalise internal change, deadlines, self-binding, Capability and support. Add 1.1 distinguishing actual, believed and acceptable future paths.
- Retain Propositions 1–14 and Principles 1–8; qualify necessity/certainty and avoid inferring choices directly from margin, pressure or path count.
- Add book, stress-testing, freedom and value references where used; map roles in 15.1 and repair relative links.
- Recast Section 13 as research/testing; collect domain material in 15.2–15.3 with evidential limits.
- Integrate post-treatment, threshold, nonsignificance, measurement and sample corrections into public appendix, and qualify T3. Formula/numbers preserved; no experimental result.

### v0.9

- Add Propositions 8–14 and Principle 8 on continuity, path choice, deadlines/waiting, self-binding, Capability/Access and support feedback; 10.1 adds gradual lock-in. Domain wording and strong claims adjusted in v0.10.
- Add Section 13, "An analysis and prediction procedure"; former 13–15 move forward.
- Comparison table adds Downs/Rocke, prospect theory, Zartman, Walter and Schelling's tying hands.

### v0.8

- Add control-article references: 2.6 (C14 handover), Section 3 (five properties), 4/8 (C8 failures), Principle 5 (C4), related reading and provenance.

### v0.7

- Add Appendix II's T3 proposal: materials, conditions, measures, size, analysis and supporting/challenging criteria.

### v0.6

- Correct zero-margin boundary: in ①②, the window reaches its boundary at breach; immediate detection/start can meet the deadline ($m=0$), but any positive delay misses it. Distinguish just-in-time from positive safety margin.
- Separate 7.1's dependency-expansion/contraction prediction as part of the whole-process hypothesis. B's changing judgement alone can produce it without improved actual A reliability.
- Move history to the end and correct outdated section numbers.

### v0.5

- Unify completion deadline $D$, latest start $t_L=D-\tau^*_{\text{adapt}}$, detection $t_D$. v0.4 called completion deadline the start of unrecoverability, inconsistent with the case: recovery was already lost at $t_L$, before $D$. Set $m=t_L-t_D$, $t_V=t_L-\delta$; fixed duration and no pre-completion mitigation required.
- Retain all supply numbers, add $D$/$t_L$/$t_D$ and note the baseline window closes at breach.
- Distinguish judged versus actual reliability in 7.1. Records update judgement; cooperation changing incentives/capabilities/habits is independently testable.
- Require perceived compliance measurement in T3 to distinguish margin from trust effects.

### v0.4

- Redefine $t_U$ by completion deadline and $t_V$ by safety threshold. $t_V\le t_U$ holds by definition; $t_U$/$t_F$ ordering is system-dependent. Specify no-response scenario, constraints/plans; monitoring leaves Warning Gap unchanged only with fixed trajectory/thresholds.
- Add fictional minimal supply model in 2.7 varying detection, connection and inventory; show timeliness and failure conditions.
- Stop calling margin necessary; instead an important possible acceptance condition for survival-prioritising actors, conditional on alternatives. Separate adopted principle from empirical prediction.
- Add 7.1's recoverability-to-credibility process.
- Prioritise T3 and state comparison controls.
- Downgrade cross-domain conclusion to hypothesis: shared structure, not demonstrated behavioural mechanism; separately define automation specification failure.
- Correct Fortna's partial demilitarisation to marginal significance/weaker evidence.

### v0.3

- Separate credibility, recoverability and acceptability. Main contribution is recoverability, a condition for acceptability; credibility mainly follows existing work. Retitle accordingly.
- Reorganise around making breach less likely and making its consequences recoverable; explain intersections separately.
- Separate detection timing; monitoring is no longer said to compress Warning Gap.
- Make central proposition conditional.
- Replace "model-excluded outcomes" with counterexample candidates: no explicit trust equation or control of stabilisers.
- Add future incentives to voluntary commitment; remove universal ranking of difficult settings.
- Correct Fortna discussion: separately examined measures do not all support the article.
- Add dependency reduction and Snyder's deterrence by denial.

---

<a id="research-notes"></a>

## Research and version notes

> **Public research draft v0.11 · An abstract mechanism framework and hypotheses awaiting testing.** This article asks under what conditions two interdependent actors may accept cooperation without fully trusting each other. Actors A and B are abstract agents; each domain must separately define their goals, authority, resources and timescales. All scenarios are illustrative. The propositions are **mechanism hypotheses**, requiring domain-specific operationalisation and testing.
>
> **Scope and use.** The article studies relationships between credibility, recoverability and acceptability in cooperation, offering concepts, conditions and testable propositions. Behavioural judgements in any concrete domain need a domain model and independent evidence. This article is not execution guidance or professional advice for actual arrangements.

**Version note (v0.11):** Full response duration and effective margin now use a common accounting convention, distinguishing the latest start of the whole response process from that of execution. The original five conditions explicitly assume zero additional delay and retain their numbers; a separate variant adds one week of coordination delay. With nonzero delay, the detection-to-latest-execution window cannot be treated directly as effective margin. Proposition, principle and section numbering are retained; Appendix III records earlier structural and statistical corrections.
