---
title: "Lesson 1: How Can We Use Numbers to Represent Information?"
description: "Design and test a representation using animal photographs and numerical cards, then meet token IDs, vectors, and embeddings."
author: SL
version: "0.2"
created: "2026-11-26"
updated: "2026-11-26"
published: "2026-11-26"
publish: true
kind: article
lang: en
language: en
source: learning/llm-introduction/lesson-01-representation.md
sourceUpdated: "2026-11-26"
---

**Introduction to Large Language Models · Learner’s Edition v0.2**

You only need to recognise numbers and tell whether two numbers are the same. You don’t need to know anything about AI.

Get a piece of paper and a pen. There are a few short questions below. Try your own way first, then open the example. Your way can be different from the one shown.

## 1. What can numbers tell us?

Have you ever seen numbers on athletes’ shirts?

Imagine three athletes wearing the numbers 7, 8, and 9.

- Can the numbers help you tell the three people apart?
- If all you know is their numbers, can you tell who is tallest?

Now let’s try a different game. There are three photographs on the table: a white cat, a black cat, and a white dog.

Give each photograph a number so a friend can tell which one you mean. Enter your numbers beneath the photographs or write them down on paper.

<form class="course-exercise" data-course-exercise="numbering" data-success="All three numbers are different. A friend who knows your table can tell the photographs apart." data-retry="Some photographs have the same number. If your friend hears only that number, can they tell which photograph you mean?">
<div class="course-photo-gallery">
<figure>
  <img src="./assets/white-cat.jpg" alt="White cat" width="1024" height="1024">
  <figcaption>White cat
    <label data-course-control hidden>ID<input type="text" name="white-cat" inputmode="numeric" pattern="[0-9]+" required aria-label="White cat · ID"></label>
  </figcaption>
</figure>
<figure>
  <img src="./assets/black-cat.jpg" alt="Black cat" width="1535" height="1535">
  <figcaption>Black cat
    <label data-course-control hidden>ID<input type="text" name="black-cat" inputmode="numeric" pattern="[0-9]+" required aria-label="Black cat · ID"></label>
  </figcaption>
</figure>
<figure>
  <img src="./assets/white-dog.jpg" alt="White dog" width="896" height="896">
  <figcaption>White dog
    <label data-course-control hidden>ID<input type="text" name="white-dog" inputmode="numeric" pattern="[0-9]+" required aria-label="White dog · ID"></label>
  </figcaption>
</figure>
</div>
<div class="course-check" data-course-control hidden>
  <button type="submit">Check my numbers</button>
  <output aria-live="polite"></output>
</div>
</form>

<details>
<summary>See one way to do it</summary>

| Photograph | ID |
|---|---:|
| White cat | 1 |
| Black cat | 2 |
| White dog | 3 |

If you and your friend both know this table, saying a number is enough to point to the right photograph. You can use other numbers too.

</details>

## 2. Send a friend a card with numbers

Now let’s change the rules.

Your friend is in another room and can’t see the photographs. For each photograph, your friend wants to know what colour the animal is and whether it is a cat or a dog.

You can agree in advance on what the numbers mean. Once the game starts, you can send only numbers. Your friend cannot receive words or photographs or look up the table that gives each photo its ID.

**How would you set this up so your friend can read the colour and the kind of animal from the numbers you send?**

First, draw your own card on paper. Write down what each number means, then make a card for the white cat, the black cat, and the white dog.

If you already have a way to do it, go straight to the test below. If you’re stuck, open the hint.

<details>
<summary>Hint (open it if you need it)</summary>

Your friend wants to know two things. First think about how to use a number to say what colour the animal is. Then think about how to say whether it is a cat or a dog.

</details>

### Test your design

Use your rule to answer these questions.

1. If your friend gets the cards for the white cat and the white dog, can they tell that the two animals are the same colour?
2. If your friend gets the cards for the white cat and the black cat, can they tell that both animals are cats?
3. If a new photograph of a black dog appears on the table, can you make a card for it? Can your friend read it?

If you have a partner, ask them to work out the answers using only the numbers and the rule you agreed on. If you’re working on your own, follow your rule and read the numbers back yourself.

<details>
<summary>After the test, see one possible design</summary>

We can agree to use two boxes.

- Left box: 0 means white, and 1 means black.
- Right box: 0 means cat, and 1 means dog.

| Photograph | Left box | Right box |
|---|:---:|:---:|
| White cat | 0 | 0 |
| Black cat | 1 | 0 |
| White dog | 0 | 1 |
| Black dog | 1 | 1 |

When the left boxes match, the animals are the same colour. When the right boxes match, they are the same kind of animal.

You can use the same rules to make a card for the black dog. It needs no rule of its own.

If your design passed the test too, it works. You can keep it as it is.

</details>

<form class="course-exercise" data-course-exercise="two-box" data-course-control hidden data-success="That matches your rules for colour and animal type." data-retry="Check your rules again. The left box uses your digit for black, and the right box uses your digit for dog." data-collision="Some labels in the same group have the same digit. Give white and black different digits, and do the same for cat and dog.">
<strong>Try the two-box design</strong>
<p>Choose one digit for each label. Then use your own rule to write the two-box code for a black dog.</p>
<div class="course-code-fields">
<fieldset>
<legend>Left box · Colour</legend>
<label>White<input type="text" name="white" inputmode="numeric" pattern="[0-9]" maxlength="1" required></label>
<label>Black<input type="text" name="black" inputmode="numeric" pattern="[0-9]" maxlength="1" required></label>
</fieldset>
<fieldset>
<legend>Right box · Animal type</legend>
<label>Cat<input type="text" name="cat" inputmode="numeric" pattern="[0-9]" maxlength="1" required></label>
<label>Dog<input type="text" name="dog" inputmode="numeric" pattern="[0-9]" maxlength="1" required></label>
</fieldset>
<fieldset>
<legend>Black dog’s code</legend>
<label>Left box<input type="text" name="answer-colour" inputmode="numeric" pattern="[0-9]" maxlength="1" required></label>
<label>Right box<input type="text" name="answer-animal" inputmode="numeric" pattern="[0-9]" maxlength="1" required></label>
</fieldset>
</div>
<div class="course-check" data-course-control hidden>
  <button type="submit">Check my black dog code</button>
  <output aria-live="polite"></output>
</div>
</form>

## 3. What else do you want to know?

Another photograph of a white cat appears on the table. This is a different cat from the first one.

Now pick something you want to find out. Try to answer your question using your cards.

You can start with these three sentences.

- I want to know: ________.
- My cards can tell me: ________.
- My cards cannot yet tell me: ________.

If your original design is good enough, keep using it. If it falls short, how would you change it?

<details>
<summary>After trying your own question, see one example</summary>

Suppose I want to know whether two white-cat photographs are the same photograph. Colour and animal type alone can’t tell me that. I could give each photograph its own ID as well.

If I only want to know which colours are present, I can already answer that without adding photo IDs.

</details>

## 4. Looking back: What did we just do?

We used numbers to tell our friend the things we cared about, without sending the whole photograph.

A photograph’s ID tells us which photograph it is. A card that records colour and animal type answers other questions.

When we use one form to stand for something or record its properties or relationships, we call that a **representation**.

Write the numbers in the two boxes in order, for example `(0, 1)`, and you get an ordered list of numbers. In mathematics, such a list can form a **vector**.

A representation can leave things out. What we want to do determines which information we need to keep.

## 5. How do real large language models do it?

Now let’s look at a real model. We use text to talk to a large language model. Inside, the model mainly works with numbers.

In common large language models, the text is first split into small units. Each unit has its own ID. The model uses that ID to find a group of numbers in a table that is already in place.

The process has four steps.

<ol class="course-flow">
<li><strong>Text</strong><span>Start with a piece of text</span></li>
<li><strong>Token</strong><span>Split the text into small units</span></li>
<li><strong>ID</strong><span>Find the ID for each token</span></li>
<li><strong>Vector</strong><span>Use the ID to look up a group of numbers</span></li>
</ol>

This is a little like the game we just played. Both turn what they need to work with into numbers. A real model’s table is largely learned during training. In our game, we decided in advance which box held the colour and which held the animal type. We’ll explore how the model uses its numbers to work with text in later lessons.

### Terms from this lesson

| Term | Meaning |
|---|---|
| Representation | A way to use one form to express or record something and information about it. |
| Vector | In the numerical space used in this lesson, a vector is represented by an ordered list of numbers. |
| Token | A small unit a model uses to process text. It may be a character, a word, or part of a word. |
| Token ID | The number that identifies a token in the model’s vocabulary. |
| Embedding | Here, a way of representing a token by mapping it to a vector. |

**Today’s main idea is representation.** The other terms show how that idea is used in real large language models.

## 6. Bring your own question to the next lesson

Look at the cards you made. Now that you have a new way to represent the photographs, what else would you like to do with it? Is there a question you could try to answer?

Write down your question and how you plan to test it.

In the next lesson, we’ll look at how numerical representations can help us compare different pieces of information. You can also keep exploring the question you came up with yourself.

Next lesson: [Lesson 2: How Can We Use Numbers to Compare Information?](./lesson-02-relations.md)
