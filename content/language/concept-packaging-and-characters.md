---
title: "Concept Packaging and the Constraints of Characters: How Chinese Writing Stabilizes Monosyllabic Morpheme Structure"
description: "Explore character constraints, concept packaging and language learning through homomorphic and arbitrary codes. Theoretical draft v0.1."
author: SL
version: "0.1.1"
created: "2026-10-30"
updated: "2026-11-08"
published: "2026-10-31"
publish: true
kind: article
status: "Theoretical draft"
lang: en
language: en
source: language/concept-packaging-and-characters.md
sourceUpdated: "2026-11-08"
---

**Theoretical draft · hypotheses to be tested**

## Abstract

**Central claim: one fundamental difference among languages concerns whether the smallest atoms used to package concepts have meaning, and whether their inventory is closed.** English atoms are semantically empty sounds; words can be newly coined, opaque labels. Chinese atoms are characters, each fixing a syllable, meaning and graphic form, with a largely closed common-character inventory.

**The character-stabilization hypothesis:** monosyllabic, approximately one-sound–one-meaning morphology is shared with many East and Southeast Asian languages, including Vietnamese and Thai. Chinese writing did not create it, but early bound morpheme sound and meaning to fixed characters and gradually closed the inventory. Interaction with the rest of language reinforced lock-in: new concepts were packaged with existing characters, semantic translation displaced transliteration, vocabulary remained transparent and attention spread across characters.

**Proposed consequences:** new Chinese words are easier to interpret but harder to name, with abstractions pulled by component meanings; new English words are harder to interpret but easier to coin, while abstract labels can be neutral and high-leverage. The article develops definitions, propositions, evidence, falsifiable predictions and teaching implications for sentence organization, writing difficulty and learner-error distributions.

**Core derivation, section 4:** entities and simple actions are comparably easy. The proposed difficulty concerns relational concepts with several participants. Transparent character packaging consumes role slots; preverbal prepositions reconnect displaced roles, leaving dependencies that occupy working memory. Speakers may topicalize, split clauses or use coarser concepts.

**Structure, sections 2–4:** starting from “expression = concepts + connections,” abstract symbol systems as a free code with meaningless atoms and independently generatable forms, versus a coupled code with fixed meaningful atoms and form–meaning binding. Systems must represent concepts, connect them and introduce labels. English uses free code for all three; Japanese uses kanji for concepts and kana for connections and labels; Chinese mainly uses coupled code throughout. Its proposed costs concentrate in connection and naming. Writing and speech coevolve: subsyllabic Old Chinese affixes were absorbed, hidden and eroded, making speech fit coupled code more closely. Vietnamese shows writing as an accelerator and lock-in factor, not the only cause.

**Definitions ground the derivation, section 2:** define encoding by its relation to concepts, not only the sounds it records. Classifying characters by construction—for example, saying they are fundamentally sound-based—can miss the proposed maintained invariant: form–meaning binding. Concept-related definitions underpin the later claims about consumed roles, dependencies, semantic stability, naming and pinyin input. “Coupled code” is renamed **homomorphic code**, and “free code” **arbitrary code**, with algebraic definitions in section 2.2.

**Stability and plasticity, sections 3.6–3.7:** homomorphic code binds form and meaning, supporting semantic stability: partial readability of old texts, shared writing across unintelligible varieties, and locally traceable drift. The proposed cost is reduced plasticity for new forms. Arbitrary code has the reverse trade-off. These are ends of a parameter, not a ranking.

**How binding begins:** see the companion [The Origins of Writing: How Language Structure Gives Rise to Writing Systems](./origins-of-writing.md). The key parameter—coincidence of morpheme and syllable boundaries—is also section 3.1’s marker-size/writing-unit parameter.

## 1. Question and starting point

**Thought is continuous; language must package it discretely.** Thought can be concrete, abstract and fluid, without inherent conceptual boundaries. Language divides that space into packages with speakable, writable and memorable forms.

The foundational comparison therefore asks:

1. What are the **smallest packaging atoms**?
2. Do they carry meaning?
3. Is their inventory open or closed?
4. Can a package be opaque, its form not revealing its content?

The article uses constraints to propose differences in concept packaging, attention and learning. Topic-prominent versus subject-prominent organization and flowing clauses versus skeletons are treated as **downstream phenotypes**, not starting premises.

## 2. Basic definitions

**First principle: expression = concepts + connections among concepts.** Every language represents and connects concepts. The definitions below are abstract rather than linguistic terminology.

### 2.1 Basic objects

- **Meaning space M:** the set of possible concepts.
- **Roles and arity:** a concept c has slots for other concepts, called roles; their number a(c) is its arity. Apple has a=0; tired a=1 (who is tired); apologize a=2 (who, to whom); embarrass a=3.
- **An idea is a graph G:** nodes are concepts; edges say “concept x fills a role of concept y.”
- **Expression maps G into a one-dimensional physical sequence:** sound in time or writing along a line.

**Two universal constraints:**

- **C1, one-dimensionality:** a sequence is produced successively; the graph must be linearized.
- **C2, limited working memory:** at most K already decided but unfinished items can be pending at once, with K approximately 3–4 (Cowan 2001).

### 2.2 Symbol systems

A system has **atoms** α, each with **form** φ(α), a sound segment or written shape, and **meaning** μ(α), possibly empty ∅. A sequence of atoms is a **package**; expressing a concept assigns it a package.

**Free code, alphabet-like:**

1. A small atom inventory, several dozen.
2. All atom meanings are empty: μ(α)=∅.
3. Concept–package assignment is an arbitrary lookup table λ; constituent atoms do not determine meaning.
4. Unbounded package length gives a practically unlimited form space.

From 2 and 3 the article derives **F1, closed packages**: internal structure is opaque externally, and all a(c) roles remain outside; and **F2, attachable markers**: meaningless atoms can carry connection information, such as role or time, without conflicting with package meaning.

**Coupled code, Chinese-character-like:**

1. A large fixed inventory, thousands of atoms, with little expansion.
2. Each atom has nonempty meaning μ(α)≠∅ and a fixed syllable.
3. Atoms are indivisible in use: no smaller meaningless units can be freely combined; adding anything requires another whole atom.
4. Composition constrains package meaning: μ(α₁α₂) is approximately determined by μ(α₁), μ(α₂) and relation r.

**In one sentence: coupled code has finite fixed meaningful atoms with atomic form–meaning binding; free code’s form space can be generated independently of meaning.**

#### Algebraic statement: homomorphic and arbitrary codes

**Terminology.** “Coupled” and “free” were provisional labels, not established terms. The proposed algebraic distinction is between approximately homomorphic form/meaning structures—**homomorphic code**—and an arbitrary lookup relation—**arbitrary code**. Both naming pairs are synonymous here; older labels remain in the text.

**Objects:**

- Meaning algebra (M,{⊗ᵣ}ᵣ∈R): concepts M and finite relations R, such as modification, action–object, coordination, subject–state and action–result. Each ⊗ᵣ:M×M→M combines concepts.
- Atom inventory A; finite strings form the free monoid A\* under concatenation “·”.
- Partial interpretation ι:A\*⇀M; not every string has meaning.

**Arbitrary code:** small |A|, such as 26 English letters; individual atoms lack interpretation, ι(a) undefined. Strings use a lookup table, with ι(x·y) unrelated to ι(x),ι(y).

**Homomorphic code:** large finite |A|, roughly 3,000 common characters; every atom has ι(a)∈M. Approximate homomorphism means ι(a₁·a₂)≈ι(a₁)⊗ᵣι(a₂) for some r∈R. The reader infers the unwritten relation; “≈” allows usage-driven drift (section 3.6).

**Two immediate proposed consequences:**

1. The same relation algebra operates inside packages (word formation) and between packages (sentences): section 4.3, step 1.
2. Arity consumption: for action–object r, a(ι(a₁·a₂))=a(ι(a₁))−1. For example, <span lang="zh-Hans">结</span> (“form/tie”) has subject and object; <span lang="zh-Hans">婚</span> (“marriage”) fills the object in <span lang="zh-Hans">结婚</span> (“marry”), leaving one external role. A spouse is added with <span lang="zh-Hans">跟</span> (“with”). This is u(c) in section 4.3. Arbitrary-code *marry* retains both external roles.

**Measures:**

- Formal information per atom log₂|A|: approximately log₂3000≈11.5 bits for homomorphic code versus log₂26≈4.7 for arbitrary code. Homomorphic atoms are “heavy”; two to four can represent a concept, but each needs learning.
- Transparency τ(x): the proportion of meaning inferable from parts. Homomorphic code has high τ; arbitrary code τ≈0.
- Consumed roles u(c), section 4.3.

**Transformations and invariants.** Let historical sound change be T on sound space. The proposed invariant for homomorphic code is form–meaning correspondence, while pronunciations change. In arbitrary code, spelling either follows sound or becomes detached; meaning persists by usage without form constraints. The two systems maintain different invariants: form–meaning versus form–sound. This grounds sections 3.6 and 7.

**Cross-domain analogues:** systematic IUPAC chemical names reveal structure but can be long; trivial names such as aspirin are short and separately learned. Database natural keys encode business meaning and need changing with it; meaningless surrogate keys are stable and freely generated. Natural-key difficulties resemble the proposed plasticity cost.

**Status:** these are definitions and conditional deductions from definitions. Whether actual Chinese writing approximates homomorphism is empirical.

### 2.3 Three tasks for symbol systems

| Task | English | Chinese | Japanese |
| --- | --- | --- | --- |
| ① Represent concepts | Free code, arbitrary labels | Coupled code, character combinations | Coupled code, kanji |
| ② Connect concepts: roles and time | Free code, endings and skeletons | Coupled code, meaningful role atoms such as <span lang="zh-Hans">对、向、跟</span> (“toward/to/with”) | Free code: <span lang="ja" data-linguistic-example>が、を、に、た</span> |
| ③ Introduce opaque labels | Free code, coinage and loans | Coupled code, phonetic characters with interference | Free code, katakana |

### 2.4 Four parameters used below

| Parameter | Meaning | English | Chinese |
| --- | --- | --- | --- |
| A: meaningful atoms | Is μ(α) empty? | Empty | Nonempty |
| B: inventory openness | Can atoms be added freely? | Open | Largely closed, about 2,500–3,500 common characters |
| C: form–sound–meaning binding | How tightly are they fixed together? | Weak | Strong |
| D: opaque-channel availability | Can new forms be unrelated to meaning? | Available | Restricted; phonetic characters still activate meanings |

## 3. The character-stabilization hypothesis

**Chinese writing did not create monosyllabic morphology, but early bound, closed and stabilized it, interacting with the rest of language to produce difficult-to-reverse lock-in.**

### 3.1 Coevolution, not an inherent starting condition

Do not claim spoken Chinese inherently needed no connecting markers. The proposal is **mutual reinforcement of writing and speech**:

1. **Starting point:** Baxter and Sagart reconstruct Old Chinese prefixes such as *s-, *m-, *N- and suffix *-s for causation, nominalization and other functions.
2. **Writing does not represent them separately:** subsyllabic consonantal affixes cannot have separate syllable-sized characters. Derivatives receive another character or a different reading. The latter survives in <span lang="zh-Hans">好</span> (*hǎo/hào*), <span lang="zh-Hans">长</span> (*cháng/zhǎng*) and <span lang="zh-Hans">传</span> (*chuán/zhuàn*).
3. **Invisible means less usable:** productive derivation requires perceiving an addition. Writing instead presents alternate readings or unrelated characters, and affixes lose productivity.
4. **Sound erosion turns residues into tones:** in Haudricourt’s account, departing tone derives from *-s and rising tone from a glottal ending. Former markers become part of character pronunciation.
5. **Speech increasingly fits coupled code:** lost affixes leave order and independent meaningful characters to connect concepts, reducing pressure for meaningless markers.

**A more precise parameter is matching between connecting-marker size and writing-unit size.** Syllable-sized markers yield a phonographic layer such as kana; smaller markers can be absorbed and hidden, accompanying isolating development.

**Counterexample:** Vietnamese and Thai also lost affixes and developed tones without exclusive long-term Chinese-character writing; Haudricourt began with Vietnamese. Characters are therefore not necessary for affix loss. They may **accelerate and lock in** a regional trend. Test whether Chinese shows earlier/more complete loss and fewer derivational remnants than Vietnamese, Thai and Hmong–Mien under that trend.

#### Writing’s own direction: from rebus borrowing to phonosemantic compounds

Early Chinese borrowed signs for homophones regardless of original meaning: <span lang="zh-Hans">来</span> originally wheat became “come”; <span lang="zh-Hans">其</span> originally a winnowing basket became a pronoun; <span lang="zh-Hans">自</span> originally nose became “self.” Continued phonetic borrowing might have yielded kana-like syllabograms.

Instead, semantic components restored meaning: basket became <span lang="zh-Hans">箕</span> by adding <span lang="zh-Hans">竹</span> (“bamboo”); nose became <span lang="zh-Hans">鼻</span>. By *Shuowen Jiezi*, phonosemantic compounds formed the large majority, commonly estimated above 80%. The proposed repaired invariant is **form–meaning**, not form–sound.

Original sounds differed greatly. Old Chinese reconstructions include presyllables, clusters and endings -p,-t,-k,-m,-s,-ʔ, without tones. Phonetic components fit the then-current pronunciation; later they often ceased to help—<span lang="zh-Hans">江—工、海—每、路—各</span>—without spelling replacement. Thus sound binding is synchronic, while form–meaning is proposed as more persistent across periods and varieties. An alphabetic assumption that writing simply records sound may miss that maintained relation.

### 3.2 Five stabilizing constraints

1. **Binding:** syllable, meaning and shape give a morpheme a stable visible identity.
2. **Hidden inflection:** characters record morphemes rather than attached changes. Related readings are visually identical, presenting successive generations with apparently uninflected one-character–one-meaning units.
3. **Closure:** as inventory stabilizes, new concepts increasingly combine existing characters instead of new ones.
4. **Restricted opacity:** phonetic loans retain character meanings that interfere with interpretation, making purely phonetic packages harder to sustain.
5. **Cross-variety unity:** unintelligible spoken varieties share writing because it records meaning as well as sound. Switching costs reinforce lock-in.

### 3.3 Positive-feedback lock-in

Stable morphemes suit characters; closed characters increase compounding; compounds increase transparency and expectations of component meaning; those expectations disadvantage transliterations and reinforce character constraints. In generative-lock-in terms, later structures build on writing, increasing change costs and deepening its linguistic influence.

> The original interactive illustration is omitted from this public edition; the feedback is described here.

The starting point is regionally shared morphology. Character use links the six feedback stages so each strengthens the next.

### 3.4 Japanese as a comparison: division of labor

Japanese combines both codes **in one system with functional division** (section 2.3).

- <span lang="ja" data-linguistic-example>私が犬を見た</span> (*I saw a dog*): kanji carry the semantic backbone; hiragana mark subject, object and past. In this code analogy, kana are described as semantically empty connecting signs.
- <span lang="ja" data-linguistic-example>食べる、食べた、食べない</span> (“eat/ate/not eat”): the kanji stays fixed while following kana change, illustrating F2.
- <span lang="ja" data-linguistic-example>コンピューター、テレビ</span> (“computer/television”): katakana supplies opaque new labels. A 2005 National Institute for Japanese Language magazine survey reportedly found loans around 25% of types.

**Connecting the same concept:** Chinese <span lang="zh-Hans">跟她结婚</span> (“marry her”) versus Japanese <span lang="ja" data-linguistic-example>彼女と結婚する</span>. Both use role marking, but Japanese attaches *to* to the participant, while Chinese chooses meaningful <span lang="zh-Hans">跟</span> according to the verb. Japanese participants uniformly precede the verb; Chinese has preverbal role phrases but ordinary postverbal objects. Japanese participant-attached roles permit freer order. Verb-final organization has its own waiting cost, but avoids preselecting a verb-specific meaningful role atom.

**Proposed conclusion:** meaningful signs suit concepts, semantically empty signs suit connection and new labels. English uses the latter throughout; Japanese divides labor; Chinese mainly uses the former for all three tasks, concentrating cost in connection and naming.

**History supports the size parameter:** whole-syllable Japanese markers received simplified kana; subsyllabic Old Chinese affixes were absorbed and hidden. Korean offers a related comparison: Sino-Korean words once used Chinese characters while grammar used Hangul, later extended throughout.

### 3.5 Tone counts and syllable inventory

Chinese as a whole does not have fewer tones than Vietnamese; Mandarin does. The comparison is Vietnamese 6, Thai 5, Cantonese 6 (traditionally 9), Middle Chinese’s four classes splitting by initial voicing, many southern varieties 7–8, and Mandarin 4.

**Proposed common source:** final consonant erosion yields three or four contours; loss of initial voicing splits each into upper/lower registers: 3–4×2=6–8.

**Why four in Mandarin:** northern devoicing, loss of entering-tone -p/-t/-k and redistribution/mergers. Migration, contact and adult learning are one candidate explanation (Lupyan and Dale 2010 associate more adult learners with simplification); disagreement remains.

**Connection to coupled code:** one atom occupies a syllable, so fewer distinguishable syllables mean more homophonous atoms. Pairing atoms restores contrast. Prediction: **fewer tones/finals in a Chinese variety imply a higher spoken disyllabic proportion.** Cantonese retains more tones/finals and monosyllabic words such as <span lang="zh-Hans">衫、眼、食</span> (“clothes/eye/eat”), consistent in direction but requiring corpus tests.

### 3.6 Three-space binding and semantic stability

An atom occupies sound S, graphic G and meaning M spaces, represented as (s,g,m).

| Code | S–G | G–M | S–M |
| --- | --- | --- | --- |
| Arbitrary, English | Strong: spelling in principle records sound | Weak, conventional use | Weak, conventional use |
| Homomorphic, characters | Synchronic, changing across time/variety | Strong: semantic components and whole signs carry meaning | Changes across time/variety |

**Meaning is also anchored:** concepts refer to worldly objects/actions/relations and shared social conventions. G–M binding anchors form to both; unchanged shared forms are proposed to support semantic retention and coordination.

**Proposed implication: drift is local and traceable in homomorphic code.** English *nice* passed from ignorant through foolish, fastidious and fine to good; *silly* from blessed to foolish; *meat* from food to flesh; *girl* from young person to female child. Old meanings largely disappear. Chinese also drifts: <span lang="zh-Hans">走</span> run→walk, <span lang="zh-Hans">去</span> leave→go to, <span lang="zh-Hans">闻</span> hear→smell, <span lang="zh-Hans">汤</span> hot water→soup, <span lang="zh-Hans">脚</span> lower leg→foot. Old senses remain in compounds: <span lang="zh-Hans">奔走、走马、去世、新闻、闻名、赴汤蹈火</span>. An unchanged form links old and new readings.

### 3.7 Stability and plasticity as ends of one parameter

**Homomorphic code trades plasticity for stability; arbitrary code trades stability for plasticity.** Tighter binding supports use across periods and varieties but makes new forms and unrestricted reassignment harder. This is parameter C, not superiority.

| Consequence | Homomorphic code | Arbitrary code | Proposed basis |
| --- | --- | --- | --- |
| 1. Old-text readability | Rough readability after two millennia | Chaucer needs annotation after six centuries | G–M survives sound change |
| 2. Cross-variety unity | Shared writing despite unintelligible speech | Spelling follows a selected pronunciation | More than sound recording |
| 3. Drift pattern | Local, old meanings frozen in compounds | Whole-word change, old meanings lost | Section 3.6 |
| 4. Homophones | Many, visually distinguished; speech compensates with disyllables | Fewer, spelling/context | Section 3.5 |
| 5. Naming | High selection cost | Low-cost arbitrary labels | Low plasticity |
| 6. Abstraction | Component meanings pull interpretation | Opaque, separately learned | Transparency τ |
| 7. Foreign labels | Transliteration yields to semantic translation | Direct borrowing | Restricted D |
| 8. Multirole relations | Consumed roles need role atoms | Closed package leaves roles external | Arity consumption |

**New prediction: pinyin input weakens G–M production binding.** Handwriting produces form from meaning, M→G. Pinyin uses M→S→recognize/select G among homophones. Production no longer practices M→G, retaining recognition. Predict more “recognized but unwritable” characters and homophone substitutions, while sufficient reading may preserve recognition binding. Tan and colleagues’ 2013 Beijing pupil study associated more electronic input with poorer reading, directionally consistent but correlational; direct tests are needed (section 10).

## 4. Core derivation: concept topology and transparent packaging

**The proposed difficulty is not concepts themselves: transparent packaging of a relation consumes slots, reconnecting participants through preverbal role phrases and creating working-memory dependencies.** The section derives this account from definitions plus four explicit parameters, without simulation.

### 4.1 Premises

- Section 2’s roles, arity, graph G, C1, C2 with K≈3–4, and code properties.
- Four **independent parameters**, not derived from characters:
  - **A1:** Chinese “role atom + participant” precedes the core action.
  - **A2:** modifiers precede heads.
  - **A3:** under time pressure, speakers tend to keep pending items within K, an effort-saving assumption.
  - **A4:** package length is roughly capped at four atoms, an empirical parameter.

### 4.2 A topological classification

| Type | Topology | Examples | Chinese | English | Comparison |
| --- | --- | --- | --- | --- | --- |
| 0 | Entity, no slots | Apple, book, place/person names | <span lang="zh-Hans">苹果、书</span> | apple, book | Similar |
| 1 | One-slot state/property | Tired, happy | <span lang="zh-Hans">他很累</span> | he is tired | Similar |
| 2 | Two slots, ordinary object | Eat, see, underestimate | <span lang="zh-Hans">低估X</span> | underestimate X | Similar |
| 3 | Two slots packaged as a Chinese verb–object compound | Apologize, marry, meet, get angry | <span lang="zh-Hans">向X道歉、跟X结婚</span> | apologize to X, marry X | Chinese harder |
| 4 | Three slots, causation/comparison | Embarrass, outnumber, afford | <span lang="zh-Hans">让X难堪、比X多</span> | embarrass X, outnumber X | Chinese harder |
| 5 | Turn a relation into an object of discussion | Responsibility, relevance | New noun required | responsibility, relevance | Chinese harder |
| 6 | Nested relations | Make A responsible for B | Two prepositions, two dependencies | make A responsible for B | Chinese hardest |

Entities, simple properties and actions, types 0–2, are comparably direct. The proposed difficulty is type 3 upward: **multiple participants and internal relational structure**.

### 4.3 Seven steps

**Step 1: internal package relations and graph connections share an algebra (derivation).** Meaningful atoms must connect by modification, action–object, subject–state, coordination or causation—the same connections available among concepts in G. Semantically empty free-code atoms do not require such relations.

> Proposed implication: representing and connecting concepts use the same relations in coupled code. Zhu Dexi and others already observed similarities between Chinese word formation and syntax; here it is treated as a derived result rather than a premise.

**Step 2: packages consume roles (derivation).** If one action atom needs another meaningful atom to specify a concept, as <span lang="zh-Hans">道 + 歉</span> (“utter + apology”), step 1 assigns an action–object-type relation occupying the object slot. Let u(c) be internally consumed roles. The package exposes a(c)−u(c), although G requires all a(c).

> When u(c)>0, u(c) participants need other connections. Closed free-code packages, F1, have u(c)=0.

**Step 3: displaced participants require role atoms (derivation).** F2 permits semantically empty attached markers. Coupled atoms are indivisible, so a complete meaningful role atom must combine with the participant: <span lang="zh-Hans">向、对、跟、让</span> (“to/toward/with/cause”). The verb determines which: <span lang="zh-Hans">向…道歉、跟…结婚、对…负责</span> (“apologize to/marry/be responsible for”).

**Step 4: dependencies require A1 (assumption).** Postverbal “apologize + to him” would not create this gap. Preverbal “to him + apologize” requires the action to be selected at the role atom but postponed through the participant. Character writing does not determine that order; A1 adds one pending item.

**Step 5: count pending items (derivation using A2).**

~~~latex
\text{pending items} = 1_{\text{subject awaiting predicate}} + d_{\text{nested role frames}} + 1_{\text{premodified participant}}
~~~

With a premodifier, d=1 gives 3, reaching the limit; d=2 gives 4, exceeding it.

**Step 6: speaker behavior (derivation using A3).** Expressions exceeding K are replaced by fronting long participants and retaining a short pronoun, splitting clauses into single-frame segments, or choosing a coarser u(c)=0 concept.

> Predicted implication: higher u(c), arity and nesting reduce frequency in immediate speech. Topic priority, short-clause chaining and coarser everyday vocabulary are proposed downstream consequences.

**Step 7: cost shifts rather than disappears (derivation).** Free code separately memorizes arbitrary packages, with learning cost roughly proportional to concept count, but u(c)=0 in speech and proposed production cost independent of concept structure. Coupled code learns thousands of atoms and few relations but incurs production cost increasing with u(c) and nesting. **The same expressive task pays in learning under free code and in speaking under coupled code.**

**Two further proposed deductions:** markers in coupled code must be independent meaningful atoms rather than attached/fused forms; tense/plural information therefore uses atoms such as <span lang="zh-Hans">了、们</span>, without becoming endings. A4 forces concepts exceeding package length into multiple packages and connections, returning to steps 2–5.

**Which parts are deductions and which assumptions?**

| Component | Status |
| --- | --- |
| C1, C2 | General physical/cognitive constraints |
| Four coupled-code properties | Abstract definitions for the character system |
| Steps 1,2,3,7 and additional deductions | Proposed direct deductions from definitions |
| A1: role phrases precede actions | Independent parameter, not derived from writing |
| A2: modifiers precede heads | Independent parameter |
| A3: effort saving | Accepted assumption |
| A4: approximately four-atom maximum | Empirical parameter |

**Characters alone are proposed to yield consumed roles and role atoms; dependencies additionally require A1.** A coupled-code language with postverbal role material could have role atoms without these gaps and at lower cost, providing a cross-language test.

### 4.4 Status of this section

Verb–object compounds resisting another ordinary object and using preverbal role phrases are known Chinese grammatical phenomena. The proposed word-formation/syntax derivation, dependency counts, production strategies and cost-shift chain remain untested. Wu, Wang and Li (2024) found no memory-theoretic verb-position burden in Chinese topicalization comprehension, suggesting a weaker memory link than expected. This account concerns production and needs production experiments and corpora.

### 4.5 Chinese also makes closed packages: six routes and four costs

Chinese is not pure coupled code: **a coupled-code core plus a small free-code sublayer**. It attempts form–meaning decoupling, with extra costs.

| Route | Examples | Decoupling | Extra cost |
| --- | --- | --- | --- |
| 1. Phonetic characters | <span lang="zh-Hans">沙发、咖啡、坦克、逻辑</span> (“sofa, coffee, tank, logic”) | Use sound, discard meaning | Meanings still interfere; class radicals restore meaning |
| 2. Sound–meaning matching | <span lang="zh-Hans">基因、黑客、俱乐部</span> (“gene, hacker, club”) | Match foreign sound and related meaning | Suitable characters are scarce |
| 3. Usage-driven drift | <span lang="zh-Hans">东西、马上、窗户</span> (“thing, immediately, window”) | Frequent use detaches meaning from parts | High frequency and long time |
| 4. Allusive compression | <span lang="zh-Hans">矛盾、推敲、杞人忧天</span> (“contradiction, deliberate, needless worry”) | Shared stories supply meaning | Prior story knowledge |
| 5. Latin-letter words | PUA, emo, CPU, WiFi | Bypass characters | Poor fit with character system; mainly conversational/online |
| 6. Affix-like atoms | <span lang="zh-Hans">-性、-化、-度、-感、可-、反-</span> | Dedicated category-changing atoms | Extra syllables; nominalization does not solve role connection |

**Four costs limiting spread:**

1. **Repeated interference:** phonetic characters activate meanings requiring suppression. <span lang="zh-Hans">德律风</span> yielded to <span lang="zh-Hans">电话</span> (“telephone”); coffee characters gained mouth radicals.
2. **Coordination:** several character sequences can record one foreign sound and several transparent combinations one concept. Yan Fu described prolonged hesitation over one term.
3. **Length:** phonetic loans often exceed A4, such as six-character <span lang="zh-Hans">英特纳雄奈尔</span> (“international”), prompting shortening or semantic translation.
4. **Slow lexicalization:** usage-based closure needs frequency many long-tail abstractions never attain; arbitrary English labels are closed when coined.

**Closure solves representation, not connection.** Even lexicalized <span lang="zh-Hans">负责</span> (“be responsible”) needs <span lang="zh-Hans">对X负责</span>. Prediction: **widely adopted abstract Chinese neologisms mostly lack external participants—nouns or one-role verbs.** Recent online terms <span lang="zh-Hans">内卷、躺平、摆烂、破防、社死</span> (“involution, lying flat, giving up, emotional defenses breaking, social death”) mostly lack objects. English includes many multirole verbs/adjectives: embarrass, outnumber, afford, deserve.

**Direction of change:** letter words, affix-like atoms and online neologisms suggest faster growth of the free sublayer. Media/contact reduce coordination cost; Latin letters open parameter D. Partial movement toward free code is a trackable prediction.

**Prior work:** sound–meaning matching is Zuckermann’s (2003) phono-semantic matching; usage-driven drift connects to Chinese lexicalization research such as Dong Xiufang. The article has not yet found a precedent for combining these routes in one cost framework explaining partial success.

## 5. Proposed propositions: where expression is easy or difficult

The propositions have “conditions → conclusion” form, using section 2’s parameters.

**Proposition 1, transparency.** Meaningful atoms and strong binding, A/C, make packages partly interpretable from components. Chinese speakers can often infer new-word gist; opaque English words require separate learning.

**Proposition 2, naming cost.** Closed inventories and restricted opacity, B/D, require character selection carrying prior meanings. Chinese novel abstractions are costly to name and component-driven; English can coin a neutral label and define it.

**Proposition 3, leverage.** Opaque package length decouples from conceptual size. Short English labels can carry large abstractions, including everyday shell nouns such as *issue* and *situation*. Chinese component constraints favor combinations and clauses.

**Proposition 4, attention.** Transparent packages distribute attention across components; opaque ones focus attention on the concept as a whole. Chinese attention is proposed as more evenly character-distributed; English as package-centered.

**Proposition 5, length.** Syllable-sized meaningful atoms plus homophony favor short stable packages, two to four characters, proposed to explain disyllabification, four-character patterns and short accepted transliterations.

**Proposition 6, writing’s floor and ceiling.** Combining 1–4 with syntax: English has a higher correctness floor due to obligatory marking, but relatively determined form after concept selection; Chinese is easier to make understandable, yet polished writing must jointly optimize character choice, order, omission and rhythm.

**Proposition 7, learner errors.** Chinese speakers’ English difficulties concentrate in obligatory marking and whole-package abstraction/nominalization. English speakers become understandable in Chinese quickly but may remain grammatical yet unidiomatic in character choice, order and rhythm.

## 6. Evidence and natural comparisons

Evidence supports difficulty sustaining opaque packages under character constraints, but is mainly cases and comparisons, not quantitative testing.

| Evidence | Content | Supports | Limitation |
| --- | --- | --- | --- |
| [Yan Fu’s translation preface (1898)](https://zh.wikisource.org/wiki/%E5%A4%A9%E6%BC%94%E8%AB%96/%E8%AD%AF%E4%BE%8B%E8%A8%80) | Prolonged hesitation over naming | Proposition 2 | Personal experience |
| Semantic translation replaces transliteration | <span lang="zh-Hans">德律风→电话、英特纳雄奈尔→国际、梵婀玲→小提琴</span> (“telephone, international, violin”); [Hanzi dictionary](https://www.zdic.net/hans/%E5%BE%B7%E5%BE%8B%E9%A2%A8), [Ding 2017](https://download.atlantis-press.com/article/25888077.pdf) | 1/2: resistance to opacity | Selected examples, no replacement-rate counts |
| Accepted transliterations are short | Ding (2017) reports nearly all are two to four characters | 5 | Same limitation |
| New chemical-element characters | <span lang="zh-Hans">氢、氧、镭</span> (“hydrogen, oxygen, radium”) include semantic class components | 1 | Limited domains |
| Japanese phonographic channel | 2005 magazine survey: loans about 25% types/12% tokens; *Asahi* loan proportion roughly quadrupled during 1952–1997 to over 10%, cited through [Struc and Wood 2015](https://bells.uib.no/index.php/bells/article/download/806/745) | D | Other language differences |
| Dungan without characters | Northwest Chinese variety written successively in Arabic, Latin and Cyrillic; about 9% Russian vocabulary, many direct political/technical loans ([Wikipedia](https://en.wikipedia.org/wiki/Dungan_language)) | D | Separation from mainland coinage also changed |

Dungan is closest to a natural experiment but changes both writing and mainland contact. It is a favorable clue, not proof.

**Written Cantonese as a test:** formal standard writing is read with Cantonese pronunciations. Written <span lang="zh-Hans">他们</span> (“they”) receives Cantonese character readings, although speech uses <span lang="zh-Hans">佢哋</span>. Form–meaning binding can be independent of spoken lexical form.

Vernacular Cantonese borrows/creates signs absent from standard writing. Sound-cued mouth-radical signs concentrate in **connections**: <span lang="zh-Hans">嘅、咗、喺、啲、哋</span> (possessive, perfective, location, “some,” plural), with <span lang="zh-Hans">佢、冇</span> (“he/she,” “not have”) also functional. Lexical creations more often carry semantic components: <span lang="zh-Hans">睇、瞓</span> (“look,” “sleep”) use eye radicals. <span lang="zh-Hans">嘢</span> (“thing”) is an exception with broad function-like meaning.

This resembles Japanese functional division: **phonographic demand concentrates in connection while concepts retain semantic binding**. The observation needs systematic counts.

## 7. Relations to previous work

Most individual observations have predecessors. The proposed addition is organizing them through parameters into connected propositions.

| Prior work | Main point | Relation here |
| --- | --- | --- |
| Hockett’s duality and Martinet’s double articulation | Meaningless units combine into meaningful ones | Parameter A; writing blurs these levels |
| Xu Tongqiang’s character-centered theory, *Theory of Language* (1997) | Character, rather than word, as Chinese basic unit | Closest starting point; proposed additions are parameters, attention and learning |
| Hannas, [The Writing on the Wall (2003)](https://www.pennpress.org/9780812237115/the-writing-on-the-wall) | Writing constrains abstraction and creativity | Both address cognitive effects, but this article does **not** claim less abstraction, only different packaging; Hannas is controversial |
| Masini (1993) and modern lexical history | Foreign concepts entering Chinese since the nineteenth century | Material for transliteration replacement; close reading pending |
| Baxter and Sagart (2014) | Reconstructed prefixes/suffixes | Premise for hidden morphological change |
| Dingemanse et al. (2015), Kirby | Arbitrariness/systematicity trade-offs and compositionality in transmission | A writing-system instance proposed here |
| Christiansen and Chater (2008,2016) | Brain constraints shape language | Adds writing constraints |
| Schmid (2000), shell nouns | *Problem, thing, fact* package propositions | Proposition 3 |
| Corson’s lexical bar (1985,1997) | Greek/Latin abstraction opaque to many native English speakers | Proposition 1 |

Work directly relevant to section 4:

- **Separable verbs and coverbs, Li and Thompson (1981) and others:** occupied object slots and preverbal role phrases are established grammar, even in [teaching descriptions](https://elon.io/grammar/chinese-mandarin/verbs/liheci-with-objects). The first two steps are therefore not new observations; the proposed novelty is the topology–memory–production chain.
- **Hawkins’s processing typology ([2007 abstract](https://www.intcul.tohoku.ac.jp/lbc21/TEMP/Forum8Abstract/abs_Hawkins.html)):** processing efficiency helps explain order; VO languages strongly prefer postverbal obliques. Chinese preverbal obliques make an inconsistent type worth comparing.
- **Wu, Wang and Li ([2024](https://www.degruyterbrill.com/document/doi/10.1515/ling-2022-0118/html)):** three self-paced-reading experiments found no predicted verb-position memory burden in object topicalization, favoring experience/frequency accounts. This cautions section 4’s third step but measures comprehension, not production.

Definitions also engage the character-classification debate:

- **Sampson (1985), *Writing Systems*:** morphographic classification, one sign per morpheme. This article agrees while proposing form–meaning as the maintained invariant.
- **DeFrancis (1984), *The Chinese Language: Fact and Fantasy*; (1989), *Visible Speech*:** rejects language-independent ideography, treats complete scripts as sound-based and Chinese as morphosyllabic with mostly phonetic components.
- **Norman (1988), *Chinese*:** varieties and shared writing.
- **Hamilton, Leskovec and Jurafsky (2016):** diachronic embeddings associate higher frequency with slower change and polysemy with faster change; applicable to section 3.6 comparisons.

**The disagreement with DeFrancis concerns the definitional method.** Construction-based classification emphasizes phonetic components. This article asks what the system preserves under use and historical transformation: ineffective phonetics do not prompt respelling, rebus signs gain semantic components, different varieties share text and vernacular phonography clusters functionally. The proposed maintained relation is form–meaning, with sound binding synchronic. Construction describes how signs were made; invariance describes persistence and grounds the proposed deductions.

Retain what DeFrancis gets right: characters record linguistic morphemes rather than disembodied ideas; phonetic components predominate; complete writing depends on language sound. The narrower claim is **form–meaning binding at the conceptual level outlasts sound binding**. Rather than “sound or meaning?”, ask which relation persists under transformation. Connecting encoding definitions to concepts is the derivation’s starting point.

## 8. Boundaries, counterexamples and falsifiable predictions

**These propositions concern distributional tendencies, not absolute laws.**

- Chinese has opaque words <span lang="zh-Hans">东西、矛盾、马上</span> (“thing, contradiction, immediately”) and loans <span lang="zh-Hans">沙发、咖啡、巧克力</span> (“sofa, coffee, chocolate”), often adding class radicals.
- English has transparent compounds such as *blackboard, toothbrush* and analyzable morphemes *bio-, -logy*.
- Idioms compress strongly but form a limited fixed set with low everyday frequency, not changing the overall distribution.
- Cantonese more readily borrows <span lang="zh-Hans">巴士、的士、士多</span> (“bus, taxi, store”), showing a soft, socially variable constraint.

**Limits on sections 3.6–3.7:** stability is relative. Chinese meanings drift, and apparent ancient-text comprehension can project modern meanings backward. The claim concerns drift’s traceability and speed, not immutability. Reading amount, handwriting and age may confound pinyin predictions. Cantonese distributions are examples, not counted results.

**Falsifiable predictions:**

1. Matched-period/domain Mandarin neologisms should show more semantic translation than Japanese loan vocabulary; similar proportions weaken writing as a key variable.
2. Comparable spoken English should use more shell nouns and nominalizations; equivalence rejects proposition 3.
3. Ratings of component-inferable meanings in high-frequency abstractions should show greater Chinese transparency; equivalence rejects proposition 1.
4. Dungan should borrow more comparable concepts phonetically than Mandarin, controlling mainland coinage contact.
5. Chinese learners’ English should have fewer abstract-noun subjects than native English; English learners’ grammatical-but-unidiomatic Chinese errors should decline slowest with proficiency.

## 9. Implications for language teaching

**For native Chinese learners of English, train another way of packaging concepts, not only grammar.**

1. **Explain different atoms:** meaningful characters versus largely label-like English abstractions. Opacity is normal for labels, not a defect.
2. **Decompression:** *response* expands to reacting to something; ask how many Chinese characters/clauses unpack an abstraction.
3. **Compression:** turn <span lang="zh-Hans">政府反应太慢</span> (“the government responds too slowly”) into *the government’s slow response*, extending the sentence-skeleton lesson.
4. **Teach morphemes as “English characters”:** *bio-* life, *-logy* study, *-tion* action-to-thing. Component-attention habits may yield **positive transfer**.
5. **Reverse priorities for English learners of Chinese:** character choice, order and rhythm address grammatical-but-unidiomatic output.

These are teaching hypotheses derived from the propositions, requiring learning-outcome tests.

## 10. Next steps

- [ ] Closely read Masini (1993) and modern coinage research; count nineteenth-/twentieth-century transliterations replaced by semantic translations.
- [ ] Compare Xu Tongqiang’s account to avoid duplication.
- [ ] Design prediction 1 with matched domains such as computing and medicine.
- [ ] Design transparency ratings for 300 frequent abstractions per language.
- [ ] Formalize the four section-2 parameters and minimal models for propositions 1–3, trading encoding length, learnability and distortion.
- [ ] Develop English lesson two and test morpheme-based positive transfer.
- [ ] Count external roles of recent Chinese neologisms against English, testing predominance of zero-/one-role abstractions.
- [ ] Test Japanese multirole packaging as kanji compounds + *suru*, kana roles and absence of the proposed Chinese gaps.
- [ ] Compare Chinese, Vietnamese, Thai and Hmong–Mien derivational remnants for accelerated isolating lock-in.
- [ ] Test fewer tones/finals against more disyllabic speech across Mandarin, Cantonese and Min.
- [ ] Seek meaningful-atom languages with postposed role material to test A1.
- Classify Cantonese signs by connection/concept layer and sound/meaning cues.
- Count modern phonetic-component effectiveness versus respelling to test the claimed invariant.
- Compare semantic drift with Hamilton et al.’s method and the proportion of old senses retained in compounds.
- Compare handwriting- and input-method-dominant adults for recognition-without-writing and homophone errors, controlling reading.

## References

- [Yan Fu’s *Tianyan Lun* translation preface, Wikisource](https://zh.wikisource.org/wiki/%E5%A4%A9%E6%BC%94%E8%AB%96/%E8%AD%AF%E4%BE%8B%E8%A8%80)
- [Hanzi dictionary: the old transliteration for telephone](https://www.zdic.net/hans/%E5%BE%B7%E5%BE%8B%E9%A2%A8)
- [Ding Shi-hua (2017), The Assimilation of English Transliterations in Chinese](https://download.atlantis-press.com/article/25888077.pdf)
- [Struc & Wood (2015), Crosslinguistic lexical transfer of English-based loanwords, BeLLS](https://bells.uib.no/index.php/bells/article/download/806/745)
- [Dungan language, Wikipedia](https://en.wikipedia.org/wiki/Dungan_language)
- [Hannas (2003), The Writing on the Wall, Penn Press](https://www.pennpress.org/9780812237115/the-writing-on-the-wall)
- [Elon: separable verbs with objects](https://elon.io/grammar/chinese-mandarin/verbs/liheci-with-objects)
- [Hawkins (2007), An Asymmetry between VO and OV Languages: The Ordering of Oblique Phrases](https://www.intcul.tohoku.ac.jp/lbc21/TEMP/Forum8Abstract/abs_Hawkins.html)
- [Wu, Wang & Li (2024), Processing Chinese object-topicalization structures, Linguistics 62(6)](https://www.degruyterbrill.com/document/doi/10.1515/ling-2022-0118/html)
- Sampson (1985), *Writing Systems: A Linguistic Introduction*, Stanford University Press
- DeFrancis (1984), *The Chinese Language: Fact and Fantasy*, University of Hawaiʻi Press; DeFrancis (1989), *Visible Speech*
- Norman (1988), *Chinese*, Cambridge University Press
- Baxter & Sagart (2014), *Old Chinese: A New Reconstruction*, Oxford University Press
- [Hamilton, Leskovec & Jurafsky (2016), Diachronic Word Embeddings Reveal Statistical Laws of Semantic Change](https://arxiv.org/abs/1605.09096)
- [Tan, Xu, Chang & Siok (2013), China’s language input system in the digital age affects children’s reading development, PNAS](https://pmc.ncbi.nlm.nih.gov/articles/PMC3549123)

Other prior work—Hockett, Xu Tongqiang, Masini, Baxter and Sagart, Dingemanse, Kirby, Christiansen and Chater, Schmid and Corson—is cited from memory and has not yet been checked individually against the originals.

---

<a id="research-notes"></a>

## Research and version notes

> **Theoretical draft v0.1** · This article contains hypotheses and proposed implications awaiting testing. Evidential limitations, counterexamples and references awaiting verification are retained.
