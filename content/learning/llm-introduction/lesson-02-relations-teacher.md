---
title: "Lesson 2 (Teacher’s Edition): Basic Principles of Information Relationships and the Dot Product"
description: "Compare counting equal boxes with the dot product using the same animal cards. Includes a formal model, graduated hints, and a transfer assessment."
author: SL
version: "0.1"
created: "2026-11-26"
updated: "2026-11-26"
published: "2026-11-26"
publish: true
kind: article
lang: en
language: en
source: learning/llm-introduction/lesson-02-relations-teacher.md
sourceUpdated: "2026-11-26"
---

**Introduction to Large Language Models · Teacher’s Edition v0.1**

Companion material: [Learner’s Edition v0.1](./lesson-02-relations.md) · Prerequisite: [Lesson 1, Teacher’s Edition v0.2](./lesson-01-representation-teacher.md)

Teaching references: SL’s [*The Framework-Driven Learning Cycle*](https://sl-knowledge.github.io/knowledge-site-en/learning/framework-driven-learning), [*Cognitive Disequilibrium: Where Questions Come From*](https://sl-knowledge.github.io/knowledge-site-en/learning/cognitive-disequilibrium), and [Language Learning Pilot Site](https://github.com/sl-knowledge/lesson0-site). This is a proposed teaching design and reports no observed teaching outcomes.

## 1. The lesson’s task, prerequisites, and outcome

The main concept is the **computational representation of relations**. Once learners know what they want to compare, how can they use numerical representations and a calculation rule to produce a testable compatibility score?

Prerequisites are the concepts from Lesson 1 (objects, numerical representations, encoding rules, an initial understanding of vectors, and how representations relate to tasks), plus ordinary comparison, addition, and multiplication. No knowledge of matrices, neural networks, or attention is assumed.

Expected outcome: learners can explain what they want to compare, propose their own scoring rule, and test it against known answers. They learn that the dot product is a specific mathematical operation and that similarity depends on the task. The Transformer terminology appears at the end. The lesson leaves the construction of Q, K, and V, positional encoding, weight normalisation, and information aggregation for later.

## 2. Lesson design and a check of its reasoning

| Stage | What learners already know | Why the next question arises | What learners gain |
|---|---|---|---|
| 1. Which animal is more like the white cat? | Learners know the animals and can distinguish colour and animal type | “Alike” can mean different things. The game needs a scoring target | Distinguish the objects, properties, and comparison criteria, then make a prediction before calculating |
| 2. Scoring with numbers | The two-box encoding from Lesson 1 and the rules of this game | Learners want to get the same scores using only the codes, without looking at the photographs | Design a calculation and compare its results with the predictions |
| 3. Another way to calculate | A working method that compares boxes one at a time | The teacher poses a new design challenge: use multiplication and addition to count shared features directly. The existing method already works | Understand how representation and operation fit together, and learn the dot product through an equivalent method |
| 4. Choosing what to compare | Learners can specify criteria and test a calculation | They choose a new goal for the comparison | Decide whether to change the representation or the operation, relying less on hints |
| 5. Naming the concept | Learners have calculated the sum of pairwise products | Give a name to a concept they have already encountered | Relate the representation, the relation, the operation, and the goal |
| 6. Comparison with real models | Learners understand the concrete use of the dot product | Some engineering facts about real models cannot be uniquely inferred from the game | Distinguish the mathematical operation from the meaning assigned to it in the game |
| 7. New questions | Learners have two established concepts | Learners choose what they want to explore further | Formulate and test questions independently and prepare for the next lesson |

The equality-counting method in Section 2 already meets the goal. Treat Section 3 as an optional challenge proposed by the teacher, so learners can explore a different combination of representation and calculation. Record it as teacher-initiated.

## 3. Core concepts and formalising the relation

| Concept | Technical explanation |
|---|---|
| Relation | In the general sense, a binary relation can be represented as a subset of $X\times X$. This lesson also considers numerical scores defined on pairs of objects. |
| Comparison target | The task specifies which properties matter, how they contribute, and how to evaluate the result. |
| Similarity score | A real number describing similarity under a chosen standard. Different standards can give different scores. Symmetry, normalisation, and metric properties are not required of every compatibility score. |
| Feature representation | Encode selected features as coordinates. Section 2 uses categorical codes, and Section 3 uses several binary indicators. |
| Dot product | For real vectors $u,v\in\mathbb R^d$, define $u^\top v=\sum_{i=1}^d u_i v_i$. |

Let $X$ contain the photographs of the four animals in this lesson (or the four combinations of attributes, if only colour and animal type matter). Let $c(x)\in\{0,1\}$ encode colour and $s(x)\in\{0,1\}$ encode animal type. Define the comparison target before considering an encoding algorithm.

$$
T(x,y)=\mathbf 1[c(x)=c(y)]+\mathbf 1[s(x)=s(y)].
$$

Here, $\mathbf 1[P]$ is 1 when proposition $P$ is true and 0 otherwise. The task supplies this standard for the correct score (the verifier), so it is available independently of the computed result. Giving the two properties equal weight is a convention of the game.

The encoding from Lesson 1, $f(x)=(c(x),s(x))$, already supports equality counting, $H(f(x),f(y))=T(x,y)$. Taking the dot product of those codes directly does not give the target score. For example, the dot product of the white cat’s code $(0,0)$ with itself is 0, while the target score is 2. This shows that the right operation depends on the encoding. The learners’ original working method still meets the goal.

Section 3 uses a new feature representation.

$$
\phi(x)=(1-c(x),c(x),1-s(x),s(x)).
$$

The coordinates represent white, black, cat, and dog, in that order. Exactly one coordinate in each pair is 1. This gives

$$
\phi(x)^\top\phi(y)
=(1-c_x)(1-c_y)+c_xc_y+(1-s_x)(1-s_y)+s_xs_y=T(x,y).
$$

Each product equals 1 exactly when both objects have the corresponding feature. Under the lesson’s assumption that each binary category is mutually exclusive and exhaustive, the equality holds for all 16 ordered pairs. For more colours or animal types, add indicator coordinates. Missing, unknown, or multi-label attributes require a new look at the task and encoding before applying the equality.

Use this table to check the scores. The rows and columns use the same order.

| | White cat | Black cat | White dog | Black dog |
|---|---:|---:|---:|---:|
| White cat | 2 | 1 | 1 | 0 |
| Black cat | 1 | 2 | 0 | 1 |
| White dog | 1 | 0 | 2 | 1 |
| Black dog | 0 | 1 | 1 | 2 |

This is grouped one-hot feature encoding. Each binary group contains one 1, so the full four-coordinate vector contains two 1s. The dot product equals the size of the intersection of the feature sets. With these fixed-length cards, each containing exactly two 1s, ranking by dot product agrees with ranking by the number of shared features. This does not establish semantic similarity for arbitrary real vectors.

## 4. Teacher hints and handing control to learners

| Level | Section 2: Use the original representation | Section 3: Explore multiplication and addition |
|---|---|---|
| 0 | Give learners time to think and record their own methods | Let learners look at the four-box cards and try ideas freely |
| 1 | Restate the goal: one point per match | Restate that a feature earns a point only when both animals have it |
| 2 | Ask learners to compare one box on two cards | Ask learners to calculate 1×1, 1×0, 0×1, and 0×0 |
| 3 | Suggest giving one point for each pair of equal boxes | Suggest multiplying to detect each shared feature, then ask how to find the total |
| 4 | Demonstrate one pair, then let learners test other pairs | Demonstrate with the white cat and black cat, then give learners a new pair |

Stop adding hints as soon as learners can propose and test a method. Accept direct counting, set intersection, table lookup, or any other correct solution. Introduce the formal name and calculation of the dot product at the end as disciplinary knowledge.

In Section 4, let learners decide which properties matter and whether to change the scores. They might choose a different comparison target, add a feature, or change the points. Use the reference example if a learner cannot continue, and record that as teacher support.

Introduce notation in this order: the learners’ own scoring methods → checking by hand → the reference cards’ multiplication and addition → the formal dot product → compatibility scores in Transformers. Leave Q and K until after exploration. The animal cards do not provide enough information to infer the actual architecture.

## 5. Comparison with actual Transformers

Vaswani et al. (2017) define scaled dot-product attention in §3.2.1 of the original Transformer paper (Figure 2 and Equation 1). For a query vector $q$ and a key vector $k_j$, the unscaled compatibility score is

$$
r_j=q^\top k_j.
$$

The score is then scaled by the key vector dimension, giving $r_j/\sqrt{d_k}$. Actual attention also involves which positions can be accessed (a mask, where applicable), Softmax, and a weighted aggregation of the value vectors. These operations are outside the scope of this lesson.

In common Transformers, queries and keys usually come from different learned projections of the current internal representations and may also undergo position-dependent transformations. This differs from counting hand-specified animal features or taking the dot product directly between two original token embeddings. Swapping the inputs to a dot product leaves its result unchanged. The query at position $i$ paired with the key at position $j$ can nevertheless score differently from the query at $j$ paired with the key at $i$, because the two projections can differ. Actual scores can be negative and are affected by factors such as vector length. They are not probabilities and do not guarantee agreement with human judgements of semantic similarity or the existence of a real relationship.

| Teaching model | Actual mechanism | Limits of the comparison |
|---|---|---|
| Hand-designed four-box representation | Learned internal representations and projections | Individual dimensions need not correspond to independently named concepts |
| Dot product | Dot product of the query and key | The mathematical operation is the same |
| Number of shared features | Unscaled compatibility score | The scores have different meanings. The example does not show that the model counts semantic features |

Technical reference: [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762), §3.2, §3.2.1, §3.2.2, and Figure 2. The lesson checks the calculation in the original paper and reports no measurements of the internal semantics of a trained language model.

## 6. Assessment and recording hints

Ask learners to apply the idea to unfamiliar material beyond reciting the formula. Use a red apple, a green apple, a red pear, and a green pear. Ask only, “How could you compare these fruits using the features you care about?” Let learners choose a standard, write down at least one prediction, then design and test a representation and calculation. To assess the dot product specifically, give an additional set of numbers with clear feature meanings. Learners can succeed in the open task without choosing the dot product themselves.

Observe whether learners can choose a comparison target independently, explain how they know the expected answer before calculating, recheck the operation when the representation changes, distinguish the dot product from similarity, and propose a new question and a comparison that tests it. Record the hint level and any teacher-supplied questions. Distinguish independent work, work completed after a hint, and teacher demonstrations. If possible, use different material for a follow-up test after an interval.

Record template: original comparison standard \| learner’s method \| prediction \| actual result \| reason for any revision \| highest hint level \| new question posed independently.

## 7. Concepts, limits, and preparation for the next lesson

Lesson 1 outcome: object → numerical representation (depends on the goal and encoding rule).

Lesson 2 adds: two representations + a clear comparison criterion + a tested calculation rule → a score for the relation.

The representation determines what information is available for comparison. The operation determines how that information is used. The comparison target gives us a standard to judge the result. Knowing the name *dot product* is only one part of understanding these relationships.

The next lesson can explore how different tasks call for different representations of the same object, then introduce projections with different functions in real models. This lesson has yet to establish whether Q, K, and V are necessary or unique, or how a model learns these representations.

Implementation notes: The Learner’s Edition keeps hints and reference solutions collapsible. The web edition also lets learners check their own predictions with a score chart. The philosophy and teaching theory remain in the Teacher’s Edition. No data from trial lessons with students are available yet.
