---
slug: seat-based-pricing-ai-agents
title: "Why Token Pricing for Dev Tools is Broken (And What We're Doing About It)"
authors: [tushar]
tags:
  ["AI pricing", "developer tools", "Forge", "SaaS models"]
date: 2025-07-20
description: "Why per-seat pricing is the closest we can get to fair, outcome-based pricing for developer tools."
hide_table_of_contents: false
---

I've been watching the AI tools space for two years now, and I keep seeing the same pattern: companies launch with simple pricing, then gradually make it more complex and user-hostile. Token-based pricing is the worst offender.

Here's why it's broken, and what we're trying instead with Forge.

## <!-- truncate -->

## The Pattern is Getting Predictable

Every few months, another AI company "optimizes" their pricing:

| Company            | What They Did                                | How Users Reacted                                                                                                                    |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Cursor**         | Replace simple Pro plan with "compute packs" | [Community revolt, CEO apology](https://cursor.com/blog/june-2025-pricing)                                                           |
| **Claude Code**    | Cut token limits mid-billing cycle           | [Mass exodus, HN firestorm](https://techcruch.com/2025/07/17/anthropic-tightens-usage-limits-for-claude-code-without-telling-users/) |
| **GitHub Copilot** | Flat $19/user, soft quota nobody hits        | Users actually happy to pay                                                                                                          |

Notice the pattern? Developers will pay for value, but they hate metered anxiety.

## Token Pricing Breaks the Creative Process

When I'm debugging a gnarly issue, I don't care if the solution takes 1,000 tokens or 10,000. I care that the bug gets fixed. But with token pricing, every question becomes a budget calculation.

"Should I ask for a detailed explanation, or just the quick fix?"

"Is this worth burning through my monthly quota?"

"Maybe I should try solving this myself first..."

This is backwards. The tool should encourage exploration, not ration it.

Token pricing also creates weird incentives. The vendor profits when you use more tokens, so they have no reason to be concise or efficient. Meanwhile, you're trying to minimize usage to control costs. Your goals are misaligned from day one.

## What We Actually Want: Outcome-Based Pricing

Ideally, you'd pay based on results. Bugs fixed, features shipped, code quality improvements. That would align everyone's incentives perfectly.

But how do you measure "success" in software development?

Is a 10-line elegant solution better than a 100-line verbose one? What if the verbose version is easier for your team to maintain? What if the AI taught you something valuable even though the code didn't work?

Every developer, every project, every context is different. We'd spend more time arguing about what constitutes "success" than actually building useful tools.

## Per-Seat Pricing: The Practical Compromise

Since outcome-based pricing is nearly impossible to implement fairly, per-seat pricing is the next best thing.

With per-seat pricing, we succeed when you find the tool valuable enough to keep paying. We can't just pass through token costs - we have to get smarter about model selection, caching, and context engineering. The pressure is on us to be efficient, not on you to be conservative.

You pay a predictable amount and use the tool however makes you most productive. No mental math before asking a question. No rationing creativity. Your finance team sees a clean line item instead of surprise bills from heavy usage days.

## We're Testing This Philosophy Right Now

Forge is completely free while we work out the details of our per-seat model. No token counting, no billing, no limits. We're absorbing real costs to prove this approach works.

This isn't a marketing stunt. We need to understand actual usage patterns before we can set fair prices. Early data suggests most developers use AI tools pretty consistently - the "heavy usage" days and "light usage" days average out over time.

## What We're Still Figuring Out

**Price points.** We're analyzing usage patterns, infrastructure costs, and value delivered to find pricing that works for both light and heavy users.

**Fair usage policies.** We don't want to meter normal usage, but we need protection against abuse. We're working on policies that catch edge cases without affecting typical developers.

**Individual vs team features.** Some features make sense at the individual level, others at the team level. We're mapping out tiers that actually reflect how people work.

## The Risks We're Taking

If our usage projections are wrong, we might end up subsidizing power users who cost more than everyone else pays. But early data suggests usage is more consistent than we expected.

Unlike token pricing, we can't just pass costs through to users. We [absorb the pressure to optimize infrastructure](https://forgecode.dev/blog/forge-incident-12-july-2025-rca-2/). This forces us to be better engineers, but it's a real business risk if costs spike unexpectedly.

Some developers might prefer pay-as-you-go models where they only pay for what they use. We're betting that most prefer predictability over precision, but we could be wrong.

## Help Us Get This Right

We're building this pricing model in the open because it only works if it works for real developers.

What we need to know:

- How do you actually use AI coding tools day-to-day?
- What would make you choose predictable pricing over metered pricing?
- What constitutes "fair usage" in your mind?

Join the conversation on [Discord](https://discord.gg/kRZBPpkgwq) or reach out on [X](https://x.com/forgecodehq).

The developer tools industry has trained us to expect billing anxiety. I think that's wrong, and we're betting our company on proving there's a better way.
