---
layout: post
title: Ungrounded Meaning
---

Thoughts on paper [Provable Limitations of Acquiring Meaning from Ungrounded Form: What will Future Language Models Understand?](https://arxiv.org/abs/2104.10809).

## The Question

Can language **meaning** be learned from **form** alone? 

This is arguably the philosophial question most relevant to today's NLP. It sure feels political correct to [say no](https://www.aclweb.org/anthology/2020.acl-main.463.pdf), but the detailed arguments and counter-arguments have produced a [great debate](https://blog.julianmichael.org/2020/07/23/to-dissect-an-octopus.html#thesis), from which I concur with this viewpoint: learning meaning from form is a bit like learning hidden variables in Hidden Markov Models - it is not possible if you have never seen hidden variables and have no priors over transition/observation, but you can still learn something about hidden variables. Likewise, you may learn good representations from form, so that just a toehold of grounding (or inductive bias) will bootstrap the learning of meaning - and to justify today NLP's methodology, maybe a larger corpus will make the bootstraping easier. 

The question thus becomes: **what's the minimal grounding (or inductive bias) you need to bootstrap learning meaning from form**? 

[Provable Limitations of Acquiring Meaning from Ungrounded Form: What will Future Language Models Understand?](https://arxiv.org/abs/2104.10809) is an interesting step toward this question, with an interesting toehold additional to just text corpus: the ability to tell if two texts have the same meaning under their contexts.

## The Setup

This paper has a natural motivation. You can't learn a Python compiler from just seeing Python code, since you don't get to obserse any execution results. But what if code is equipped with assertions? They have a special form that reveals meaning, and assume you know it. Can this be the minimal grounding (or inductive bias) you need to understand Python?




## The Proof


## The Trick

The tricky part about the proof: the language $L_P$ is too simple. 



## Back to Assumptions

## Thoughts