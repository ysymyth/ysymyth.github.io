---
layout: post
title: Ungrounded Meaning
---

Thoughts on paper [Provable Limitations of Acquiring Meaning from Ungrounded Form: What will Future Language Models Understand?](https://arxiv.org/abs/2104.10809) and beyond.

## The Question

Can language **meaning** be learned from **form** alone? 

This is arguably the philosophial question most relevant to today's NLP, asking if its data-driven paradigm is fundamentally sound. It sure feels politically correct to [say no](https://www.aclweb.org/anthology/2020.acl-main.463.pdf), but the detailed arguments and counter-arguments have produced a [great debate](https://blog.julianmichael.org/2020/07/23/to-dissect-an-octopus.html). 

My personal take:

- Representations from learning on corpus (word2vec, BERT contextual embeddings) are obviously **meaningful**. I still remember the shock many years ago seeing ``king - man + woman = queen``. 

  *Formally, you can learn a model `f` for strings `x`, just on a bunch of strings (corpus), so that `f(x)`  has interesting properties.*

  $x ---pretrain---> f(x)$ 

  $\sum_{i=1}^{n} i$

- But whether such models have learned **meaning** require **probing tasks** that specify how a model shall behave if it learns language meaning. *Formally, the task is a new mapping `x -> g(x)` from strings to whatever output domain. Given pre-trained model `f`*, you want to learn a probe model `p` so that `p(f(x))` On many tasks (dialogue, storytelling) current NLP models perform poorly, and even huger corpus doesn't seem a path to solving these. 

- The tricky thing about probing tasks is that, your model will always get grounded when fine-tuned - you gain inductive bias about **task intent** through new data or new optimization or new parameters. In a sense, a toehold of grounding (or inductive bias) bootstraps the learning of meaning (and pre-training might make learning much faster and easier). But no matter how much power you gain from pre-training on form, you just can't jump without a toehold of ground to jump from! 
  - The empirical question is **how large the toehold should be**, so that empirical numbers make most sense.
  - The theoretical question is: **how small the toehold could be**, so that learning meaning can be bootstrapped?

[Provable Limitations of Acquiring Meaning from Ungrounded Form: What will Future Language Models Understand?](https://arxiv.org/abs/2104.10809) is an interesting step toward the theoretical question. It argues meaning cannot be learned even with a *seemingly huge toehold*: the ability to query oracle if two texts have the same (contextual) meaning.

## The Setup

This paper has a natural programming language motivation (not a natural language motivation though). You can't learn a Python compiler from just seeing Python code, since you don't get to obserse any input/output execution results. But what if code is equipped with assertions? 

```Python
a = 3 + 5
assert a == 8
```

You may learn some meaning from it!

To be even more generuous, assume assertions are on your side. You get to choose two strings `x` and `y` to query, and assertion `assert x == y` tell you if they evaluate to the same value within their respective context. 

**The task is, assign each string `x` a representation `f(x)` , so that for any two strings, `f(x)=f(y)` iff `assert x==y` holds for all (valid) contexts.**

For example, let `x` be

```Python
a += 5
```

and let `y` be

```Python
a += 2; if a < a + 1: a += 3
```



A projection back to the meaning-probing-grounding framework:

* Added data? **Unlimited**, as long as you can process in computable time. Or equivalently, your **original corpus is designed best for you** and **you have zero new data**. 
* Added probe? **Unlimited power**,


## The Proof



## The Trick



## Back to Assumptions



## Thoughts