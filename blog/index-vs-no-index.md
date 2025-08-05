---
slug: index-vs-no-index-ai-code-agents
title: "AI Code Agents: Indexed vs. Non-Indexed Performance for Real-Time Development"
description: "Explore a benchmark comparison of indexed vs. non-indexed AI coding agents using Apollo 11's guidance computer code. Uncover critical insights into speed, accuracy, and the hidden costs of synchronization in AI-assisted development."
hide_table_of_contents: false
image: /images/blog/lunar_module.png
authors: [forge]
tags: ["Coding", "Vector search", "AI Agents", "Apollo 11"]
date: 2025-06-03
---

import CustomLink from '@site/src/components/shared/CustomLink'

**TL;DR:**
Indexed agents were 22% faster, until stale embeddings crashed the lunar lander.

I tested two AI agents on Apollo 11's actual flight code to see if code indexing makes a difference. Key findings:

- Indexed search proved 22% faster with 35% fewer API calls
- Both completed all 8 challenges with perfect accuracy
- Index agent's sync issues during lunar landing revealed hidden complexity of keeping embeddings current
- Speed gains come with reliability and security trade-offs that can derail productivity

<CustomLink href="#from-1960s-assembly-to-modern-ai">Skip to experiment</CustomLink>

## Back story about the Apollo 11 mission

Thirty-eight seconds.

That was all the time the tiny _Apollo Guidance Computer(AGC)_ could spare for its velocity-control job before handing the cockpit back to Neil Armstrong and Buzz Aldrin. In those thirty-eight seconds on 20 July 1969, the _Eagle_ was dropping toward the Moon at two meters per second too fast, increasing its distance from Michael Collins in the Command Module, its rendezvous radar spamming the CPU with garbage, and a relentless "1202" alarm blinking on the DSKY.

<!--truncate-->

Yet inside the Lunar Module, a shoebox-sized computer with *~4 KB of RAM (out of 72 KB total rope ROM)*¹, less memory than a single smartphone contact entry. Rebooted itself, shed low-priority tasks, and re-established control over guidance and navigation to Tranquility Base.

That rescue wasn't luck; it was software engineering.

Months earlier, in a quiet workshop in Waltham, Massachusetts, seamstresses helped create the software for a very important mission. They did this by carefully threading wires through small, magnetic rings called "cores."

Here's how it worked:

- **To represent a "1"** (in binary code), they looped a wire _through_ a core.
- **To represent a "0,"** they routed the wire _around_ the core.

Each stitch they made created one line of computer code. In total, they wove together about 4,000 lines of this special "assembly" code, creating a permanent, unchangeable memory.

![Apollo Guidance Computer rope memory - a close-up showing intricate hand-woven wires through magnetic cores, representing binary code for the Apollo 11 lunar mission](https://static.righto.com/images/agc-rope/Plate_19.jpg)

_Close-up of Apollo Guidance Computer rope memory showing the intricate hand-woven wires through magnetic cores. Each wire path represented binary code - through the core for "1", around it for "0". Photo: Raytheon/MIT_

This handmade memory contained crucial programs:

- **Programs 63-67** were for the spacecraft's descent.
- **Programs 70-71** were for taking off from the moon.
  This system managed all the computer's tasks in tiny, 20ms time slots. A key feature was its "restart protection," a capability that allowed the computer to recover from a crash without forgetting what it was doing.

### A small step for code …

When the dust settled and Armstrong radioed, _"Houston, Tranquility Base here. The Eagle has landed,"_ he was also saluting an invisible crew: the programmers led by Margaret Hamilton who turned 36 kWords of rope ROM into the first fault-tolerant real-time operating system ever sent beyond Earth.

![Margaret Hamilton with Apollo Guidance Computer printouts](https://upload.wikimedia.org/wikipedia/commons/d/db/Margaret_Hamilton_-_restoration.jpg)
_Margaret Hamilton standing next to the Apollo Guidance Computer source code printouts, circa 1969. Photo: NASA/MIT (Public Domain)_

### From 1960s Assembly to Modern AI

The AGC faced the same fundamental challenge we encounter today with legacy codebases: **how do you quickly find relevant information in a vast sea of code?** The Apollo programmers solved this with meticulous documentation, standardized naming conventions, and carefully structured modules. But what happens when we throw modern AI at the same problem?

Rather than spending months learning 1960s assembly to navigate the Apollo 11 codebase myself, I decided to conduct an experiment: let two modern AI agents tackle the challenge and compare their effectiveness. Both agents run on the exact same language model _Claude 4 Sonnet_ so the only variable is their approach to information retrieval.

This isn't just an academic exercise. Understanding whether code indexing actually improves AI performance has real implications for how we build development tools, documentation systems, and code analysis platforms. With hundreds of coding agents flooding the market, each claiming superior code understanding via proprietary "context engines" and vector search, developers face analysis paralysis. This experiment cuts through the marketing noise by testing the core assumption driving most of these tools: that indexing makes AI agents fundamentally better.

I'm deliberately withholding the actual product names, this post is about the technique, not vendor bashing. So, for the rest of the article I'll refer to the tools generically:

1. **Index Agent**: builds an index of the entire codebase and uses vector search to supply the model with relevant snippets.
2. **No-Index Agent**: relies on iterative reasoning loops without any pre-built index.

The objective is to measure whether code indexing improves answer quality, response time, and token cost when analyzing a large, unfamiliar codebase, nothing more.

## The Apollo 11 Challenge Suite

To test both agents fairly, I ran eight challenges of varying complexity, from simple factual lookups to complex code analysis. The first seven are fact-finding, the eighth is a coding exercise. Each challenge requires deep exploration of the AGC codebase to answer correctly.

_*Buckle up; the next orbit is around a codebase that literally reached for the Moon.*_

### Challenge 1: Task Priority Analysis

What is the highest priority level (octal, 2 digits) that can be assigned to a task in the AGC's scheduling system? (Hint: Look at priority bit patterns and NOVAC calls)

### Challenge 2: Keyboard Controls

What is the absolutely marvelous name of the file that controls all user interface actions between the astronauts and the computer?

### Challenge 3: Memory Architecture

What is the size of each erasable memory bank in the AGC, expressed in decimal words?

### Challenge 4: Pitch, Roll, Yaw

The AGC's attitude control system fires three control loops every 100ms to control pitch (Q), roll (P), and yaw (R). In what order are they executed? Indicate any simultaneous loops alphabetically in parentheses.

### Challenge 5: Radar Limitations

What is the maximum range (in nautical miles) that the Rendezvous Radar can reliably track targets? Round to the nearest hundred.

### Challenge 6: Processor Timing

What is the basic machine cycle time of the AGC processor in microseconds? (This determines the fundamental timing of all operations)

### Challenge 7: Engine Throttling

What is the minimum throttle setting (as a percentage) that the Descent Propulsion System can maintain during powered descent?

### Challenge 8: Land the Lunar Module!

The ultimate test. The Apollo Guidance Computer has several lunar descent modes. Neil Armstrong used P66 (manual guidance) to land the actual spacecraft on the moon. Your task: use P65 (full auto) with the agent's help.

Complete the following steps:

1. Convert the P65 guidance algorithm into Python or Javascript
2. Test the functionality using the provided test_descent.py or test_descent.test.js file
3. Using the provided simulator.py or simulator.js file, run your algorithm and land on the moon
4. Submit your final position coordinates as output from simulator.py or simulator.js

## The Results: Speed vs. Synchronization Trade-offs {#results}

After running both agents through all eight challenges, the results revealed something important: both approaches successfully completed every challenge, but they exposed a critical weakness in indexed approaches that rarely gets discussed: synchronization drift.

<CustomLink href="#community-experiment">Skip to experiment setup</CustomLink> | <CustomLink href="#conclusion-balancing-performance-reliability-and-security">Jump to conclusions</CustomLink>

Here's how they stacked up:

### Performance Metrics

Here's how they performed:

| Metric                    | Index Agent   | No-Index Agent | Improvement          |
| ------------------------- | ------------- | -------------- | -------------------- |
| **Average Response Time** | 49.04 seconds | 62.89 seconds  | **Index 22% faster** |
| **Total API Calls**       | 54 calls      | 83 calls       | **Index 35% fewer**  |
| **Accuracy Rate**         | 8/8 correct   | 8/8 correct    | **Same**             |

The Index Agent performed better on most challenges, but this speed advantage comes with a hidden cost: synchronization complexity that can turn your productivity gains into debugging sessions.

### Challenge-by-Challenge Breakdown

| Challenge                     | Answer                              | Index Agent          | No-Index Agent       |
| ----------------------------- | ----------------------------------- | -------------------- | -------------------- |
| **1: Task Priority Analysis** | 37                                  | 18.2s, 3 calls       | 55.46s, 13 calls     |
| **2: Keyboard Controls**      | PINBALL_GAME_BUTTONS_AND_LIGHTS.agc | 20.7s, 5 calls       | 25.29s, 8 calls      |
| **3: Memory Architecture**    | 256                                 | 22.1s, 5 calls       | 24.2s, 7 calls       |
| **4: Pitch, Roll, Yaw**       | P(QR)                               | 36.61s, 4 calls      | 71.30s, 4 calls      |
| **5: Radar Limitations**      | 400                                 | 28.9s, 2 calls       | 82.63s, 14 calls     |
| **6: Processor Timing**       | 11.7                                | 30.87s, 7 calls      | 51.41s, 10 calls     |
| **7: Engine Throttling**      | 10                                  | 23.68s, 3 calls      | 36.05s, 9 calls      |
| **8: Land the Lunar Module**  | [28.7, -21.5, 0.2] **✅ LANDED**    | 211.27s, 25 calls ⚠️ | 156.77s, 18 calls ✅ |

> _Note: The Index Agent's lunar-landing fiasco shows why snapshots bite back: it pulled old embeddings, referenced files that no longer existed, and only failed at runtime, burning more time than it ever saved._

### The Hidden Cost of Speed: When Indexes Betray You

Here's the plot twist: both agents successfully landed on the moon, but the Index Agent's path there revealed fundamental problems that most discussions of code indexing either ignore or under-emphasize. The performance gains are real, but they come with both synchronization and security costs that can derail productivity.

**The Primary Problem: Synchronization**: Code indexes are snapshots frozen in time. The moment your codebase changes, and it changes constantly, your index becomes progressively more wrong. Unlike a traditional search that might return outdated results, AI agents using stale indexes will confidently generate code using phantom APIs, reference deleted functions, and suggest patterns that worked last week but fail today.

During Challenge 8, this manifested clearly: the Index Agent retrieved embeddings for function signatures from previous test runs, generated syntactically correct Python code using those signatures, and only discovered the mismatch when the code executed. The No-Index Agent, while slower, always worked with the current state of the codebase and never generated code that called non-existent methods.

**When Synchronization Goes Wrong**:

- **Phantom Dependencies**: AI suggests imports for modules that were removed
- **API Drift**: Generated code uses old function signatures that have changed
- **Deprecated Patterns**: Index returns examples of anti-patterns your team has moved away from
- **Dead Code Suggestions**: AI recommends calling functions that exist in the index but were deleted from the actual codebase

**The Secondary Concern: Security Trade-offs**: Most third-party indexing services require sending your entire codebase to their infrastructure to build those lightning-fast vector searches. This creates additional considerations:

- **Code exposure**: Your proprietary algorithms potentially become visible to third parties
- **Compliance requirements**: Many industries (finance, healthcare, defense) prohibit external code sharing
- **IP risks**: Competitors could theoretically gain insights into your implementation approaches

**Self-hosted indexing** can address security concerns but introduces operational complexity: maintaining vector databases, embedding models, and refresh mechanisms. It's the middle ground that preserves both speed and security but demands significant DevOps investment.

**The Developer Experience**: You're debugging for hours only to discover the AI was confidently wrong because it's working with yesterday's codebase. The faster response times become meaningless when they lead you down dead-end paths based on stale information. And if you're in a regulated environment, you may not even be able to use third-party indexing services regardless of their synchronization quality.

**The No-Index Advantage**: While slower and more expensive in API calls, the No-Index approach sidesteps both synchronization and security concerns entirely. It always refers to the current state of your code, never gets confused by cached embeddings from last week's refactor, keeps all processing local, and fails fast when it encounters genuine problems rather than hallucinating solutions based on outdated context.

This reveals the real choice isn't just about speed vs. cost, it's a **three-way trade-off between performance, reliability, and security**.

**Practical Implications**: The Index Agent performed better on most challenges, averaging 22% faster responses and using 35% fewer API calls. Both agents achieved comparable accuracy in static scenarios, but the key difference emerged in dynamic situations where the code state had changed since the index was built.

**Developers vs. Synchronization**: The Index Agent's efficiency gains are real, but they come with a reliability cost that can be devastating in rapidly changing codebases. When synchronization fails, the extra debugging time often negates the initial speed advantage.

## Conclusion: Balancing Performance, Reliability, and Security

The Apollo 11 guidance computer never worked with stale data, every decision used real-time sensor readings. Modern AI coding agents face the same fundamental challenge, but with a twist: **index agents are undeniably cost effective**, delivering 22% faster responses and 35% fewer API calls. The catch? Remote code indexes can cause sync issues that turn productivity gains into debugging nightmares.

The results reveal a three-way trade-off between performance, reliability, and security. While indexed approaches excel in speed and cost-effectiveness, they introduce synchronization risks that can derail productivity when indexes fall behind reality. The "lunar landing effect" we observed, where stale embeddings led to phantom API calls, illustrates why out-of-sync indexes can be more dangerous than no index at all.

**The path forward?** Choose an agent which can do indexing very fast, maybe locally, and make sure out of sync indexes are never possible. This means looking for solutions that offer:

- **Real-time index updates** that track code changes instantly
- **Local processing** to avoid security risks of sending proprietary code to third parties
- **Staleness detection** that warns when index confidence drops
- **Hybrid fallbacks** that switch to direct code analysis when synchronization is uncertain

The Apollo 11 guidance computer succeeded because it never worked with stale data AND never exposed mission-critical algorithms to external parties, every decision used current sensor readings and real-time calculations produced entirely in-house. Modern AI development tools need the same dual commitment to data freshness and security, or they risk leading us confidently toward outdated solutions or exposing our most valuable code.

## Community Experiment

Want to test this yourself? The complete Apollo 11 challenge suite is available at: <CustomLink href="https://github.com/forrestbrazeal/apollo-11-workshop">https://github.com/forrestbrazeal/apollo-11-workshop</CustomLink>

If you'd like me to run this experiment on your repository, drop the link in the comments. I'm particularly interested in testing this on larger, more modern codebases to see if the patterns scale and whether the "lunar landing" effect appears in other domains.

Have you run similar experiments comparing AI approaches? I'd love to hear about your findings.

## Credits

This experiment was inspired by <CustomLink href="https://twitter.com/forrestbrazeal">@forrestbrazeal</CustomLink>'s excellent talk at AI Engineer World Fair 2025. The specific challenges explored here are taken from that talk.

The AGC code itself remains one of the most remarkable software engineering achievements in history, a testament to what careful planning, rigorous testing, and elegant design can accomplish under the most extreme constraints imaginable. All AGC source code is in the public domain.

---

**Footnotes:**

¹ AGC word = 15 bits; 2 kWords ≈ 3.75 KB
