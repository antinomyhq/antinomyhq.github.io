---
slug: seat-based-pricing-ai-agents
title: "Token Pricing Is a Tax on Creativity. I'm Repealing It."
authors: [tushar]
tags:
  ["AI pricing", "developer tools", "Forge", "SaaS models"]
date: 2025-07-20
description: "Why Forge is leaning toward per-seat, fair-use pricing instead of token billing and I want your feedback."
hide_table_of_contents: false
---

### TL;DR

Metered pricing for AI tools is a broken model. It’s a tax on creativity and a recipe for developer distrust. We’re done with it. Forge is moving to a flat, per-seat subscription with a generous fair-use policy. No token counting, no budget anxiety. Just code. We think this is the only sane path forward, and we want to know if you agree.

Until We finalize this pricing model, Forge is free for everyone, unlimited.

## <!-- truncate -->

## 1. The Industry is Getting This Wrong, and Developers are Paying the Price

Another week, another AI tool that started with a legion of fans and ended with a self-inflicted PR crisis. We've all seen the pattern: a great tool, a growing community, and then a pricing change that feels like a slap in the face. It’s a textbook case of a vendor passing their infrastructure bill directly to the user, and it needs to stop.

| Tool                 | The "Big Idea"                                                                         | The Inevitable Backlash                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cursor**           | Let's swap our simple Pro plan for a confusing system of "compute packs."              | A full-blown community meltdown, complete with a [public apology from the CEO](https://cursor.com/blog/june-2025-pricing).                                                                     |
| **Claude Code**      | Let's slash token limits on our most expensive plan, in the middle of a billing cycle. | A mass exodus of users and a [firestorm on Hacker News and GitHub](https://techcrunch.com/2025/07/17/anthropic-tightens-usage-limits-for-claude-code-without-telling-users/).                  |
| **Copilot Business** | How about a flat $19 per user with a soft quota nobody ever hits?                      | ...silence. Because it [just works](https://docs.github.com/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot). Developers are happy to pay a predictable price. |

The message from the developer community is loud and clear: stop making us do math. Stop making us worry about how many questions we ask. Stop making us feel like we're on a meter.

---

## 2. Pay-Per-Token is a Fundamentally Broken Model for Creative Tools

Let's be blunt: charging per token for a developer tool is a lazy, vendor-first pricing model. It’s a holdover from the early days of API-first AI, and it has no place in a tool that’s supposed to be a seamless part of your workflow.

- **You're Buying a Car, Not Paying for Gas by the Mile**
  When you buy a tool, you're buying a solution to a problem. You're not buying a bucket of API calls. We, the vendor, are responsible for the "engine" - the models, the prompts, the caching. Charging you for every token is like a car company charging you for every piston fire. It’s absurd. For example, imagine debugging a complex issue: with tokens, a long session could cost you $5 in unexpected fees. With seats, it's included.

- **It Creates a Toxic Relationship**
  Pay-per-token pricing pits our interests against yours. You want to use the tool as much as possible to get the most value. We, on the other hand, are incentivized to make you use more tokens. That’s a recipe for distrust. We'd rather be incentivized to give you the best answer in the fastest, most efficient way possible.

- **It Kills Creativity and Experimentation**
  The best ideas often come from playing around, from trying things out, from asking "what if." Token-based pricing puts a tax on that creativity. It makes you second-guess every command, every question. It turns a tool that should be a creative partner into a budget line item to be minimized. Case in point: a developer experimenting with 10 different implementations might rack up $10 in tokens, killing the flow.

---

## 3. The Forge Pledge: Predictable Pricing, No Surprises

We’re drawing a line in the sand. Here’s our commitment to you, and how we’re building our pricing to reflect it:

| Our Pledge To You             | How We're Making It Happen                                                                                                                                                                                                                                                                                |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No More Token Counting**    | A flat $20/month per-seat fee. Use Forge all day, every day. Compare that to token models where a heavy day could cost $15 alone.                                                                                                                                                                         |
| **Value, Not Volume**         | We'll offer tiers based on features you actually care about, like deeper repository context and advanced team features.                                                                                                                                                                                   |
| **It's Our Job to Optimize**  | We'll use a mix of models behind the scenes (like Llama 3 for 'Fast' tasks and GPT-4 level for 'Best') to give you optimal performance at the lowest cost to us. You just choose "Fast" or "Best," and we handle the routing intelligently.                                                               |
| **Fairness, Not Frustration** | A high, transparent "fair use" ceiling (e.g., equivalent to 1M tokens/day). We added this because token pricing exists to prevent abuse - we get that. If you hit it (rare for 99.9% of users), we'll review for abuse like infinite loops; otherwise, we'll work with you to upgrade. No sudden cutoffs. |
| **Radical Transparency**      | We'll still show you your usage data. Not because it affects your bill, but so you can understand your own workflow. See which models you're using most, and find opportunities to optimize your own work. It's your data, you should have it.                                                            |

![Pricing Comparison Chart](https://example.com/pricing-chart.png)  
_(Figure 1: Token vs Seat Pricing - A heavy user saves 40% with seats over time)_

---

## 4. This Puts the Pressure on Us, Not You

Let's be clear: this model is better for us because it forces us to be better engineers. When we can't just pass on every token cost, we have to innovate.

- **You** get to code without fear, using Forge to its full potential.
- **We** are relentlessly focused on optimizing our stack, from model routing to caching to context engineering to deliver the best performance at the lowest cost. The burden is on us to be efficient, not on you to be a psychic budget forecaster.
- **Your finance team** sees a single, predictable line item. No drama, no surprises.

We know seat pricing isn't perfect - it could subsidize heavy users at the expense of light ones. But data shows most devs are consistent, and it beats the alternative of constant metering anxiety.

---

## 5. What Do You Think? Be Brutal.

I’m laying my cards on the table. I believe that the future of AI developer tools is in simple, predictable, per-seat pricing. But I’m not naive enough to think I have all the answers.

What am I missing? What are the edge cases I haven't considered? What's the worst-case scenario you can imagine with this model?

I'm not looking for pats on the back. I'm looking for a debate. Join me on [Discord](https://discord.gg/kRZBPpkgwq), or yell at me on X @forgecodehq. Your feedback will be instrumental in shaping the future of Forge.
