---
title: "Lesson 1 (Teacher’s Edition): Basic Principles of Information Representation"
description: "The teacher’s edition of Lesson 1, with an activity sequence, graduated hints, a criterion for representations, and a transfer assessment."
author: SL
version: "0.2"
created: "2026-11-26"
updated: "2026-11-26"
published: "2026-11-26"
publish: true
kind: article
lang: en
language: en
source: learning/llm-introduction/lesson-01-representation-teacher.md
sourceUpdated: "2026-11-26"
---

**Introduction to Large Language Models · Teacher’s Edition v0.2**

Companion material: [Learner’s Edition v0.2](./lesson-01-representation.md)

Teaching design references: [SL Language Learning Pilot Site](https://github.com/sl-knowledge/lesson0-site), [*The Framework-Driven Learning Cycle*](https://sl-knowledge.github.io/knowledge-site-en/learning/framework-driven-learning), and [*Cognitive Disequilibrium: Where Questions Come From*](https://sl-knowledge.github.io/knowledge-site-en/learning/cognitive-disequilibrium). This lesson is a working teaching design and reports no results from teaching experiments.

## 1. The lesson’s task and scope

The main task is to help learners with no background in AI develop the concept of **representation** and understand the relationship between an object, the rule used to represent it, and the target task.

Learners are expected to be familiar with everyday numbering, photographs, colours, kinds of animal, and how to tell whether two numbers are equal. No prior knowledge of vectors, matrices, tokenisation, machine learning, or Transformers is assumed.

Expected outcome: learners can design a numerical representation of their own, explain what it preserves, interpret it using shared conventions, and decide whether it needs to change when the task changes. The concepts are connected to the formal terms *vector*, *token ID*, and *embedding* at the end of the lesson. Dot products, attention, training, and contextual computation fall outside this lesson’s scope.

## 2. Lesson design: From familiar experience to independent design

| Learning stage | What learners already know | The task and why it arises | Purpose of the activity |
|---|---|---|---|
| 1. Numbering athletes and photographs | Numbers can distinguish objects | Use a number to pick out a photograph | Draw on everyday experience and distinguish identifying an object from knowing its properties |
| 2. Sending information about photographs remotely | A number can refer to an object, but an arbitrary ID alone does not reveal its colour | A friend cannot see the photographs and can interpret the numbers only by following an agreed rule. The new goal is to communicate colour and animal type | Give learners a concrete design constraint and let them choose a representation without assuming it must have two fields |
| 2. Testing the design | Learners have proposed a design | Decode colour and animal type, then encode a black dog that has not yet appeared | Check whether the information can be recovered and whether the rule can be reused. A change in the numbers alone tells us little |
| 3. Independent exploration | Learners have a usable numerical representation and experience testing it | Introduce another white cat and let learners choose what to ask | Gradually hand over control of question generation. Learners may keep their original design if it still works |
| 4. Consolidating the concept | Learners have experienced what different representations can do | Summarise the work completed so far | Build the concept first, then introduce formal terms such as *representation* and *vector* |
| 5. Comparison with actual models | Learners can distinguish identifiers from numbers that encode content | Learn how actual models map tokens to vectors | Supply engineering facts that cannot be uniquely inferred from the game, without working backwards to make the activity appear to derive them |
| 6. Preparing for the next lesson | Learners have a representation and a way to test it | Formulate a question worth exploring next | Observe learners’ ability to ask their own questions. The teacher introduces the next lesson’s topic only after that |

The core causal sequence is **the task changes → retest what the existing representation can do → revise the representation if there is a gap → test it on new material**. A successful prediction can also be a starting point for further learning. An identifier with a shared lookup table, a code that uses the tens and ones digits, and a card with two numerical fields can all be reasonable designs. Any design that satisfies the game’s constraints is acceptable.

## 3. How teachers can help: Graduated hints

The Learner’s Edition is designed for independent reading, with one optional light hint and a collapsible reference solution. In face-to-face teaching, the teacher can offer support at the levels below, moving up only when the learner cannot proceed at the current level.

| Level | Example |
|---|---|
| 0: Observe | Give the learner time to think and record their initial design and reasoning. Leave the number of fields open. |
| 1: Clarify the goal | “What two things should your friend be able to tell after receiving the numbers?” |
| 2: Give a minimal clue | “Can you start by using a number to tell your friend the colour?” |
| 3: Narrow the search | “If you already know how to write a colour, can you use another number to record the kind of animal?” |
| 4: Demonstrate | Show one way to encode the white cat and let the learner handle the remaining photographs. If the learner is still stuck, demonstrate how to read the code. |

**When to stop giving hints.** Stop escalating as soon as the learner can propose a reasoned design or devise the next test independently. If the design differs from the teacher’s, test it on its own terms first. An identifier paired with a shared table of colours and animal types works if the recipient can use the agreed rules without seeing the photographs. Judge the design against the constraints of the task.

The handover proceeds from the learner’s own symbols or numbers to testing what they can do, then to comparison with the reference encoding, and finally to the formal terminology. The reference encoding gives the class a shared convention for discussion. Actual embeddings need not have the same structure.

In Section 3 of the Learner’s Edition, leave the new question open. Record whether the learner identified a new information need on their own or chose a task their existing representation can still handle. Questions modelled by the teacher are recorded separately from questions the learner generated independently.

## 4. Core concepts and formal relationships

| Concept | Technical explanation |
|---|---|
| Object / Domain | The objects being represented and the domain they belong to. This lesson can take individual photographs as its objects, keeping photographs, individual animals, and words distinct. |
| Property | A distinguishable property on the domain, such as the colour of the animal shown in a photograph. |
| Target | The task the representation is intended to support, such as deciding whether two colours are the same. |
| Representation | A correspondence, established by convention, between objects, properties, or relationships and another form. This lesson uses a deterministic mapping as a minimal working model, which does not fully define representation in general. |
| Vector | In this lesson, an element of the real vector space $\mathbb R^d$, expressed as an ordered list of numerical coordinates. |
| Embedding | In the context of language models, a parameterised mapping from discrete tokens to a continuous vector space. The term is used here in the language-model sense rather than the topological sense. |

Let $X$ be the set of photographs, $R$ the space of codes, and $f:X\to R$ the encoding rule. Let $g:X\to Y$ assign each photograph the correct result for the target task. Can that result be recovered from the code alone?

In this finite, deterministic teaching model, a decoding rule $h:R\to Y$ satisfying

$$
 g=h\circ f
$$

exists if and only if, for all $x,x'\in X$, whenever $f(x)=f(x')$, we also have $g(x)=g(x')$ (assuming $Y$ is nonempty). For necessity, equal inputs to the decoder give equal outputs. For sufficiency, define $h(f(x))=g(x)$ on $f(X)$. The condition makes this definition unambiguous, and $h$ can be extended arbitrarily to the remaining points of $R$.

This criterion tells us whether a given representation preserves the information needed for the task. The ease and cost of decoding, and whether a learning system can find the decoding rule, are separate questions. Even with arbitrary unique identifiers, a decoder may exist if a complete lookup table is available. The limitation discussed in the first section is that **without the lookup table or other information, the numerical value of an identifier does not itself tell us the colour**.

In the reference card $f(x)=(c(x),s(x))$, the two coordinates give the colour and animal type, respectively. Different photographs may have the same representation if they match in colour and animal type. The representation is therefore sufficient for queries about those properties, while it may be insufficient for identifying each individual photograph.

This lesson establishes the relationship between representation and task. Whether vector addition, distance, or dot products capture a meaningful relation is still an open question here. The next lesson should establish what is to be compared and how to test the comparison before introducing operations.

## 5. Comparison with actual language models and the limits of the analogy

A typical decoder-only Transformer, such as Llama, uses discrete token IDs and a trainable embedding table. Let $N$ be the vocabulary size, $d$ the model’s hidden dimension, and $E\in\mathbb R^{N\times d}$ the embedding matrix. The initial embedding for the token with ID $i$ is

$$
x_i=E[i,:].
$$

The model looks up a row in the table. The digits used to write the ID in decimal do not serve as semantic features. How text is split depends on the tokenizer, so a Chinese character does not necessarily correspond to one token. The same token ID gives the same initial lookup result. Position handling and contextual computation are discussed separately. Training typically updates the embedding parameters. This lesson leaves the training process for elsewhere and makes no claim that each coordinate has an independently readable meaning.

| Card game | Typical language model | Limits of the comparison |
|---|---|---|
| Photograph ID | Token ID | Both identify something, but the objects they identify differ. |
| Numerical card defined by a convention | Token embedding | Both are numerical representations. The card uses explicit, hand-designed features, while embeddings are typically learned, distributed representations. |
| Reading the card according to the agreed rule | Using vectors in subsequent computation | Both illustrate that a representation must be used in a further step. The card does not determine how an actual network computes. |

This comparison connects the concepts. It does not reconstruct the historical development of the Transformer or report an experiment using real model parameters. Learners are given engineering facts about tokenizers and embedding tables directly.

Technical references: [Hugging Face Transformers — Llama model documentation](https://huggingface.co/docs/transformers/model_doc/llama), including `input_ids`, `inputs_embeds`, and the internal embedding lookup. See also Vaswani et al. (2017), [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762), §3.4, “Embeddings and Softmax.”

## 6. Assessment: Have learners gained an understanding they can reuse?

After the lesson, give learners a different scenario. Present three fruits and ask them to use only numbers to communicate each fruit’s colour and whether it has seeds. Let learners choose the number of fields and the encoding rule. Ask them to design an encoding, write the code for a new fruit, and explain how the recipient would read it. Then change the goal. For example, ask learners to distinguish two fruits that match in colour and both have seeds or both lack them. Observe whether they can identify the limits of their current representation.

| Assessment dimension | Observable evidence |
|---|---|
| Independent design | Establishes an encoding and a shared interpretation rule. The design need not copy the two-field card. |
| Testability | Encodes and decodes new material and explains why the design succeeds or fails. |
| Sensitivity to the goal | Decides what to preserve based on the task and adds fields only where the task requires them. |
| Independent questioning | Poses a new question and proposes a test that can be carried out. Track teacher-supplied questions separately. |
| Reliance on hints | Record the highest hint level used and which steps the learner completed independently. Credit only the work the learner performed. |

Record template: learner’s initial design \| independently generated question \| prediction and actual result \| any revision and the reason for it \| hint level \| performance on the new task. Where feasible, retest after an interval using new material. These are proposed ways to observe learning, with no assumed teaching outcomes.

## 7. Checking the lesson’s logic and preparing for the next lesson

- **Do the task and constraints come before the representation design?** Yes. Learners are asked to create an encoding after the task of communicating colour and animal type remotely has been made clear.
- **Is failure forced to lead into an existing AI mechanism?** Learners can keep an effective ID-and-lookup scheme and can make successful predictions with it.
- **Does the activity assume any hidden knowledge?** Both parties agree beforehand on the meanings of the numbers. People supply the properties of the photographs. Automated property recognition from images is outside the lesson’s scope.
- **Does the test address the target?** Yes. It checks whether the decoded results match the properties of the photographs. Changes in the numbers alone are insufficient evidence.
- **Is the technical answer given too early?** The main text begins with exploration, reference solutions are collapsible, and formal terms are introduced at the end.
- **Do learners take control of the questions?** In Section 3 of the Learner’s Edition, learners choose the question. Section 6 asks them to record their own questions before giving the topic of the next lesson. It remains unverified whether independent readers actually carry out the activity on their own.
- **Are the limits of the comparison clear?** The cards and actual embeddings are compared at the level of structure. The hand-designed encoding does not describe actual model parameters or the training mechanism.

**Inputs for the next lesson.** Objects, a representation rule, a task, and a testable condition for determining whether the representation preserves a property. **Open question.** Given a numerical representation, how can we design a comparison that reflects the relationships the task cares about? Numerical distance alone cannot be assumed to measure semantic similarity.

## 8. Implementation notes

The Learner’s Edition uses `<details>` in Markdown to keep hints and reference solutions separate. If needed, the activities, hints, and feedback can use the site’s existing step-by-step components. No data from trial lessons with students are available yet.
