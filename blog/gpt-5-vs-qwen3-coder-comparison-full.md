---
slug: gpt-5-vs-qwen-3-coder-comparison-full
title: "GPT-5 vs. Qwen 3 Coder: A Head-to-Head Coding Comparison"
authors: [shrijal]
tags:
  [
    "GPT OSS",
    "Qwen 3 Coder",
    "Model Comparison",
    "AI Coding",
    "Developer Tools",
  ]
date: 2025-08-20
description: "A detailed look at GPT-5 and Qwen3-Coder in real-world coding tasks, comparing performance, prompt adherence, speed, and cost efficiency. See which model delivers functional code faster and when each is best suited for your dev workflow."
hide_table_of_contents: false
---

Another month, another impressive AI model for developers. It’s getting hard to keep up. Just as we’re getting comfortable, OpenAI drops GPT-5<sup><a id="ref-1" href="#footnote-1">1</a></sup>, their recent flagship model with claims of SoTA (state-of-the-art) performance in everything from complex frontend generation to debugging.

On the other hand, we have Qwen3-Coder<sup><a id="ref-2" href="#footnote-2">2</a></sup> from Alibaba, an "agentic" open-source code model that is getting some really good reviews in the tech community.

Sam Altman promised us "PhD-level intelligence" with GPT-5, but does that actually translate to writing good code?

Forget the benchmarks for a second. We're putting them to the test on real-world coding challenges to see which one truly works for developers.

<!-- truncate -->

---

## TL;DR

I tested two recent AI models, GPT-5 and Qwen3-Coder, on three coding tasks. Instead of using them in a single project as I usually do, I tried them on some of my selected coding challenges to explore their different capabilities. Here’s what happened:

- **GPT-5:** It has very "decent" skills with the frontend, makes the UI pretty, and does a great job with other non-frontend tasks as well, but there are times when it performs poorly, shows poor prompt adherence, and completely ignores some of the requested tasks. Painfully slow response time (85+ seconds almost in each task) but considering this is a reasoning model, can be excused. I was very hyped to test this model as Sam Altman promised us "PhD-level intelligence," but now after this test and my use of this model so far, I'm not really impressed, and it simply does not match up to the expectations.

- **Qwen3-Coder:** This model really surprised me with the quality of the result, which to me looks much better than GPT-5. Not really when we compare the code modularization, but the overall final result. It nailed most of the features, like saving and loading game states, and even threw in some cool extras like image quality settings in the CLI task. It kinda fell short in the WebSocket implementation, but overall, it outperformed GPT-5. It followed prompts well and added some really cool touches.

If we really compare the overall intelligence of the two, GPT-5 is way ahead, but does not seem so when it comes to coding.

[Intelligence chart comparing GPT-5 and Qwen3-Coder](/blog/gpt-5-vs-qwen-3-coder-intelligence.png)

---

## Testing Methodology and Setup

I used the same prompt and test setup for both models, ran each task three times, and selected the best valid result for the final evaluation.

Although I manually checked each attempt, there may be some subjectivity in scoring. Don't consider this the final decisive factor. Use the entire test to get a general understanding of both models performance in coding.

### Testing Categories

1. **Build a Browser Chess Game:**

- Implement full chess rules including special moves (castling, en passant, pawn promotion).
- Add move history tracking with FEN and PGN support.
- Build a multiplayer mode with real-time synchronization using WebSockets.
- Implement a game timer with configurable time controls.
- Support save/load game state in local storage.

2. **Build a CLI to convert images format in Rust:**

- Support conversion between common formats (JPEG, PNG, WebP, BMP, GIF).
- Allow batch processing of multiple files and directories.
- Provide clear error messages for unsupported or corrupt files.

3. **Build a DX Ball–style game with GitHub contributions:**

- Create a browser-based DX Ball clone.
- Replace the standard brick layout with a player’s GitHub contribution graph (squares = contributions).
- Some blocks should randomly drop boosters (e.g., widen paddle, multi-ball, slow ball).

### Evaluation Criteria

- First and foremost, the code quality and no logic errors.
- How well the model follows the prompt and stays on task.
- The time taken to complete the said task.

---

## Coding Comparison

Below are the results for each task, including the prompt given to the models and a review of their implementation.

### 1. Build a Browser Chess Game

> **Prompt:** Build a browser-based chess game that implements all standard chess rules, including castling, en passant, and pawn promotion. Add move history tracking with FEN and PGN support, a multiplayer mode with real-time synchronization via WebSockets, and a game timer with configurable time controls. The game should also support saving and loading game state in local storage. Make sure the design is responsive and user-friendly.

- **GPT-5:**

Here's the output of the program:

<img src="/images/blog/chess-gpt-5.gif" alt="Chess browser game built with GPT-5 AI Model" style={{width: "100%", maxWidth: "800px"}} />

As you can see, none of it really works and it wasn't even implemented well as asked. The pieces are not inverted well when flipping the board, there's no support for multiplayer game, the load game functionality does not work as asked. The worst of all, the game does not end even when there's a checkmate.

Now, if we look into the code quality, it's good, it has separated the logic in multiple files and documented the code well, but none of it works.

You can find the code it generated here<sup><a id="ref-3" href="#footnote-3">3</a></sup>.

- **Qwen3-Coder:**

Here's the output of the program:

<img src="/images/blog/chess-qwen3-coder.gif" alt="Chess browser game built with Qwen3-Coder AI Model" style={{width: "100%", maxWidth: "800px"}} />

On the very first look, you can already see the overall feel of this question by Qwen3 Coder is already much better. The pieces move well, you can save and load game properly, it has added multiple time controls as I asked.

However, the websocket functionality does not work on this one as well. Also the fact that black pieces are colored white.

If we look into the code quality, and the way it is structured, it feels worse than GPT-5. It has put all the logic, markup and CSS all in one file which is a straight no for me.

You can find the code it generated here<sup><a id="ref-4" href="#footnote-4">4</a></sup>.

### 2. Build a CLI to convert images format in Rust

> **Prompt:** Create a Rust-based command-line application that converts images between common formats such as JPEG, PNG, WebP, BMP, and GIF. It should support batch processing of multiple files and directories, and display clear error messages for unsupported or corrupt files. The CLI should be configurable with clear flag-based options.

- **GPT-5:**

Here's the output of the program:

<img src="/images/blog/image-converter-cli-gpt-5.gif" alt="Image converter CLI built with GPT-5 AI Model" style={{width: "100%", maxWidth: "800px"}} />

GPT-5 did a stunning job with this question. It implemented everything I asked for and works flawlessly with both directories and a single image. The main thing I wanted to test is how well it manages to use external crates like `clap` and `image` for argument parsing and working with images, and it used them all correctly.

You can find the code it generated here<sup><a id="ref-5" href="#footnote-5">5</a></sup>.

- **Qwen3-Coder:**

Here's the output of the program:

<img src="/images/blog/image-converter-cli-qwen3-coder.gif" alt="Image converter CLI built with Qwen3-Coder AI Model" style={{width: "100%", maxWidth: "800px"}} />

This went much better than I expected. This question was completely answered by the model all in one shot. In this case, it followed the prompt really well, everything works, from the image conversion to even showing help messages.

Even better, it added support for setting image quality, which I didn't ask for, but it's a nice subtle addition it made on its own.

You can find the code it generated here<sup><a id="ref-6" href="#footnote-6">6</a></sup>.

### 3. Build a DX Ball–style game with GitHub contributions

> **Prompt:** Build a browser-based DX Ball–style game where the block layout represents a user’s GitHub contribution graph. The player controls a piston/paddle at the bottom to bounce the ball back upward, breaking contribution blocks. Some blocks should release special boosters (e.g., wider paddle, extra balls, slower speed) when destroyed. Use HTML5 Canvas or Three.js or anything else you feel fits best for rendering, and ensure smooth ball physics, intuitive controls, and visually engaging GitHub-themed aesthetics.

- **GPT-5:**

Here's the output of the program:

<img src="/images/blog/dx-ball-gpt-5.gif" alt="DX Ball game built with GPT-5 AI Model" style={{width: "100%", maxWidth: "800px"}} />

In this specific implementation as well, it did decently. It's not able to fetch the person's GitHub contribution graph, but the demo level it added looks and works pretty well. The game implementation overall is rock solid.

If I judge the code quality, it's not very pretty. The code is documented, but it's all jumbled up in one file.

You can find the code it generated here<sup><a id="ref-7" href="#footnote-7">7</a></sup>.

- **Qwen3-Coder:**

Here's the output of the program:

<img src="/images/blog/dx-ball-qwen3-coder.gif" alt="DX Ball game built with Qwen3-Coder AI Model" style={{width: "100%", maxWidth: "800px"}} />

This model included everything I asked for in the implementation. Most importantly, it used Next.js, which I prefer over a generic implementation in a plain HTML file. It can fetch the GitHub contribution graph, but there's a slight problem with the game implementation, as you can see above. Still, this is far better than GPT-5's implementation.

You can find the code it generated here<sup><a id="ref-8" href="#footnote-8">8</a></sup>.

---

## Performance Analysis

:::note
The entire test is conducted using our Forge CLI.
:::

Here's the performance comparison between Qwen3-Coder and GPT-5 across 3 tasks:

### Execution Metrics

| Metric                    | Qwen3-Coder | GPT-5    | Notes                                                                                                                                                                            |
| ------------------------- | ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Avg Response Time**     | ~15-30s     | ~80-100s | Qwen3-Coder was significantly faster, while GPT-5 took much longer but still produced code that was incorrect.                                                                   |
| **Single-Prompt Success** | 2/3         | 1/3      | Qwen3-Coder delivered a much better, more complete result on the first try for 2 out of the 3 tasks. GPT-5 only did the CLI task correctly and struggled heavily with the games. |
| **Prompt Adherence**      | 8/10        | 5/10     | Qwen3-Coder followed instructions well, even adding a nice extra feature. GPT-5 often ignored major requirements and produced buggy code.                                        |

**Test Sample:** 3 tasks, repeated 3 times for consistency
**Confidence Level:** High, based on manual verification

### Verdict

While GPT-5 is great at generating clean, well-structured code, it's no use if the final program is a buggy, incomplete mess. Qwen3-Coder consistently delivered a more functional and complete result, even if it dumped everything into a single file. For getting a working prototype up and running fast, Qwen3-Coder was far more reliable.

---

## Pricing Breakdown

The entire test cost me about $1-2 for both models combined, with approximately similar token usage for each.

Here's the pricing breakdown for GPT-5 and Qwen3-Coder:

| Model       | Pricing (Input / 1M tokens) | Pricing (Output / 1M tokens) |
| ----------- | --------------------------- | ---------------------------- |
| GPT-5       | $1.25                       | $10.00                       |
| Qwen3-Coder | $0.20                       | $0.80                        |

Qwen-3 Coder is about **1/6th** the input price of GPT-5 and about **1/12th** the output price of GPT-5.

The pricing for both models remains flat regardless of token usage unlike Grok 4.

---

## Overall Impressions of Each Model in our Test

Now, let's look into the overall impression of these models in our entire test and in general, along with the good and bad sides:

### GPT-5

- OpenAI markets it as the expert model in the flagship as its most advanced system for coding and reasoning. It's built to "think longer when necessary," which is a huge plus for reasoning tasks, but for coding, it's decent with a 400K context window (though not revolutionary).

- It's **slow** and seriously slow. In some of the questions that I've tested, it took over 100 seconds to come up with the solution (and still incorrect).

- Plus, users are all limited to 200 messages/week for GPT-5 thinking.

- In some follow-up prompts, I noticed some hallucinations. It kept saying the implementation is correct when it clearly is not.

- It's a lot slower and also a bit less accurate than many models released recently, sadly!

And, that seems to be the case with many other folks as well:

<a id="ref-9" href="#footnote-9">GPT-5: Overdue, overhyped and underwhelming. And that’s not the worst of it.</a>
<a id="ref-10" href="#footnote-10">GPT-5 Users Say It Seriously Sucks.</a>
<a id="ref-11" href="#footnote-11">Nearly 5,000 GPT-5 users flock to Reddit in backlash.</a>

### Qwen3-Coder

- Highly cost-effective in many endpoints, though full versions may require heavy hardware to run locally.

- It's **fast** and also much more accurate than GPT-5 for many coding logic. In many of my workflows and the test itself, it almost one-shotted the questions. Very few times I've had to do follow-ups.

- It's explicitly built as an "agentic" code model, so it's a lot more accurate in workflows requiring tool usage and multi-step code tasks.

- It's an open-weight model, so it means you can fine-tune, tinker with the model, and self-host as needed.

### Quick Stats Comparison

| Metric                   | Qwen3-Coder                                                                                         | GPT-5                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Typical cost/task**    | ~$0.1-0.2                                                                                           | ~$0.3-0.5                                                                                                               |
| **Latency (TTFT)**       | Less than 10s (very low, fast first token)                                                          | ~72s (very high, slow first token)                                                                                      |
| **Output speed**         | Greater than 100 tokens/sec (varies by provider)                                                    | ~93 tokens/sec                                                                                                          |
| **Accuracy & reasoning** | Solid for coding (Artificial Analysis<sup><a id="ref-12" href="#footnote-12">12</a></sup> index 45) | Very strong reasoning & intelligence (Artificial Analysis<sup><a id="ref-12" href="#footnote-12">12</a></sup> Index 69) |
| **Context window**       | ~260K tokens                                                                                        | ~400K tokens                                                                                                            |
| **Open model**           | Yes                                                                                                 | No                                                                                                                      |

---

## Conclusion

What's the final verdict? For me, **Qwen3-Coder** takes the crown in these coding tests.

While GPT-5 might have that "PhD-level intelligence" on paper and its code structure looks prettier, the final program was often broken and painfully slow to generate. This model feels more like GPT-4.6 with a speed nerf.

Qwen3-Coder just got the job done. It was faster, followed the prompts more accurately, and delivered a better final product in most cases. When you factor in that it's a fraction of the cost, about **1/12th** the price for output, it's a no-brainer for my day-to-day workflow.

In short, if you want a fast, mostly accurate, and cost-efficient model for coding, Qwen3-Coder is the clear choice right now over GPT-5.

---

## Related Posts

1. [Kimi K2 vs. Grok 4 Coding Comparison](https://forgecode.dev/blog/kimi-k2-vs-grok-4-comparison-full)
2. [Claude Opus 4 vs. Grok 4 Coding Comparison](https://forgecode.dev/blog/claude-4-opus-vs-grok-4-comparison-full)
3. [Claude Opus 4 vs. Gemini 2.5 Pro](https://forgecode.dev/blog/claude-sonnet-4-vs-gemini-2-5-pro-preview-coding-comparison)

---

## Footnotes

<a id="footnote-1"></a>**1**. OpenAI "GPT-5 Introduction." [https://openai.com/index/introducing-gpt-5](https://openai.com/index/introducing-gpt-5) [↩](#ref-1)

<a id="footnote-2"></a>**2**. Alibaba "Qwen3-Coder Introduction." [https://qwenlm.github.io/blog/qwen3-coder](https://qwenlm.github.io/blog/qwen3-coder) [↩](#ref-2)

<a id="footnote-3"></a>**3**. Chess Browser Game "Built with GPT-5 AI Model." [https://gist.github.com/shricodev/414a6bb92801f181395636715a82b9f7](https://gist.github.com/shricodev/414a6bb92801f181395636715a82b9f7) [↩](#ref-3)

<a id="footnote-4"></a>**4**. Chess Browser Game "Built with Qwen3-Coder AI Model." [https://gist.github.com/shricodev/ddc1d48956ef3c018d079895d305f264](https://gist.github.com/shricodev/ddc1d48956ef3c018d079895d305f264) [↩](#ref-4)

<a id="footnote-5"></a>**5**. Rust CLI filetype converter "Built with GPT-5 AI Model." [https://gist.github.com/shricodev/56fa8e3a78958ebdd5c61df0809fbbf4](https://gist.github.com/shricodev/56fa8e3a78958ebdd5c61df0809fbbf4) [↩](#ref-5)

<a id="footnote-6"></a>**6**. Rust CLI filetype converter "Built with Qwen3-Coder AI Model." [https://gist.github.com/shricodev/006f28484d6fc9858306d7891fe972f2](https://gist.github.com/shricodev/006f28484d6fc9858306d7891fe972f2) [↩](#ref-6)

<a id="footnote-7"></a>**7**. GitHub Contribution DX Ball "Built with GPT-5 AI Model." [https://gist.github.com/shricodev/479ef4135bb01a4899fc7f4ed33de7b5](https://gist.github.com/shricodev/479ef4135bb01a4899fc7f4ed33de7b5) [↩](#ref-7)

<a id="footnote-8"></a>**8**. GitHub Contribution DX Ball "Built with Qwen3-Coder AI Model." [https://gist.github.com/shricodev/75967d7cff2b6617f7970ea13d836823](https://gist.github.com/shricodev/75967d7cff2b6617f7970ea13d836823) [↩](#ref-8)

<a id="footnote-9"></a>**9**. Gary Marcus "GPT-5: Overdue, overhyped and underwhelming. And that’s not the worst of it." [https://garymarcus.substack.com/p/gpt-5-overdue-overhyped-and-underwhelming](https://garymarcus.substack.com/p/gpt-5-overdue-overhyped-and-underwhelming) [↩](#ref-9)

<a id="footnote-10"></a>**10**. Futurism "GPT-5 Users Say It Seriously Sucks." [https://futurism.com/gpt-5-sucks](https://futurism.com/gpt-5-sucks) [↩](#ref-10)

<a id="footnote-11"></a>**11**. Tom’s Guide "Nearly 5,000 GPT-5 users flock to Reddit in backlash." [https://www.tomsguide.com/ai/chatgpt/chatgpt-5-users-are-not-impressed-heres-why-it-feels-like-a-downgrade](https://www.tomsguide.com/ai/chatgpt/chatgpt-5-users-are-not-impressed-heres-why-it-feels-like-a-downgrade) [↩](#ref-11)

<a id="footnote-12"></a>**12.** Artificial Analysis. "Independent analysis of AI." [https://artificialanalysis.ai](https://artificialanalysis.ai) [↩](#ref-12)
