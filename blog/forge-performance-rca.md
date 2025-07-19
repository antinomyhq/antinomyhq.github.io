---
slug: forge-incident-12-july-2025-rca-2
title: "Root Cause Analysis: Forge Quality Degradation on July 12"
authors: [tushar]
date: 2025-07-18
description: "A detailed analysis of the Forge quality issues that occurred on July 12, 2025, including root cause, impact, and steps taken to prevent future incidents."
tags: ["incident", "forge", "RCA"]
---

## What Happened

On July 12, 2025, we released v0.99.0, which included [PR #1068](https://github.com/antinomyhq/forge/pull/1068) introducing aggressive conversation compaction to reduce LLM costs. While successful at cutting costs by 40-50%, it significantly degraded response quality by removing crucial conversation context.

Users reported quality issues within 2 days. After internal testing confirmed the problem, we immediately released v0.100.0 on July 14 with the compaction feature reverted.

<!-- truncate -->

## Root Cause

**Our evaluation system only tested single prompts, missing multi-turn conversation quality.**

The compaction feature triggered after every user message (`on_turn_end: true`), stripping context that our models needed for quality responses. In multi-turn scenarios (where users provide additional feedback after the agent completes work), the conversation context was getting compacted away, leading to poor quality responses.

Our evals never caught this because they focused on single prompts and judged the results of the agent loop, not ongoing conversations where users
give feedback in the same conversation and context accumulation is critical.

## Why We Did This

Higher than expected early access signups created cost pressure. Rather than implementing waitlists, we chose aggressive optimization to keep the service open to all users. The feature worked perfectly for its intended purpose, just at the cost of quality we didn't anticipate.

## What We've Done

- **Immediate**: Reverted the feature in v0.100.0 (2 days after user reports)
- **Long-term**: Building multi-turn evaluation system to catch these issues before deployment

## What We're Changing

1. **Multi-turn evals** - Testing conversation quality across 3-5 message exchanges, not just single responses
2. **Quality gates** - Conversation quality scores must pass thresholds before any context affecting feature ships
3. **Gradual rollouts** - Canary releases for any feature touching core conversation logic

## Known Issues

- Bash terminal still has issues on windows, but we are working on it.

## Our Ask

We messed up by prioritizing cost optimization over quality validation. The latest Forge version (v0.100.5) has the issue fixed plus significant stability improvements.

**Please give Forge another shot.** We've learned our lesson about shipping features that affect conversation quality without proper testing coverage.

---

_Questions? Reach out through our community channels. We're committed to transparency about what went wrong and how we're fixing it._
