---
slug: forge-vs-claude-vs-gemini-comparison
title: "Claude code vs Forge Code vs Gemini CLI: Real Coding Test"
authors: [forge]
tags: ["Claude Code", "Gemini CLI", "CLI"]
date: 2025-06-01
description: "We tested Claude 4, Forge Code, and Gemini CLI on real coding tasks: project builds, bug fixes, Git, and architecture planning. Here’s how these AI dev tools actually perform in your terminal."
hide_table_of_contents: false
---


AI coding tools are getting sharper, faster, and easier to use. 

We’ve seen them grow inside our editors, offering suggestions, fixing bugs, and helping out in real time. But now, some of these tools are stepping into the terminal.

The terminal is where real work often happens, running scripts, digging through logs, or debugging servers. Having a coding assistant there means less context switching, no more back-and-forth between your editor and browser, and more time staying in flow.

In this article, we’ll compare **Gemini CLI**, **Claude Code**, and **Forge Code,** three coding tools made for the terminal. We’ll test them on real tasks like reviewing confusing code, fixing bugs, and rebuilding parts of a legacy project to see which one actually makes a difference.

## Brief on Claude Code?

Claude Code is a terminal-based assistant from Anthropic, built to help you understand and work with your codebase, without ever leaving the command line. You install it once with `npm`, and start a session simply by running `claude` inside any project folder.

Once launched, Claude opens an interactive prompt where you can ask things like:

```
> what does this project do?
> where is the main entry point?
> fix the bug where users can submit empty forms

```
![Claude Code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wc8byepf3a6asmnaw8c5.png)

It reads your files as needed and provides you with answers or suggestions without asking you to manually upload or point to code; it simply examines what’s there. You can instruct it to add a feature, refactor something, or explain part of the system, and it will propose changes and seek your approval before modifying any files.

You can also use it to manage Git:

```
> what files have I changed?
> commit with message “Fix login bug”
> create branch feature/payment-flow

```

It also has built-in shortcuts like `/help`, `/clear`, and `claude -p` for quick one-off commands. If you stop mid-session, you can resume later with `claude -c`.

## Brief on Forge Code

Forge Code is a terminal-based coding assistant that runs entirely in your terminal. You launch it with a single command, and it opens in seconds, with no complicated setup or difficult learning process.

![Forge Code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6evwdx5fiv8rr38hpi2k.png)

Once inside, you’ll see a clean prompt and familiar commands like `/help`, `/new`,  `/agent`, or create your own custom commands.

![Forge Code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ej0kszmor9buucrfvhy3.png)


Forge quietly reads your codebase, Git history, dependencies, and working directory to build context. That means you don’t have to keep re-explaining your project, it remembers as you go.

It comes with two built-in agents:

- **/muse** for planning, explaining, and reviewing without touching code.
- **/forge** for actual implementation and file changes.

This setup naturally separates thinking from doing, making it safer to test ideas before applying changes. Everything runs locally, with logs, history, and snapshots stored in folders like `~/forge/logs` and `~/forge/snapshots`. You can even connect your own model key (like Claude or OpenAI) without switching tools.

Forge adapts to your workflow, not the other way around. Whether you're debugging, cleaning up legacy code, or planning your next feature, it’s built to stay out of your way and just help when needed.

## Brief on Gemini CLI?

Gemini CLI is an open-source command-line AI agent from Google that brings the power of Gemini 2.5 Pro directly into your terminal. You can install it in seconds using `npm install -g @google/gemini-cli` or via `npx`, then sign in with your Google account to access a generous free tier, up to 60 requests per minute and 1,000 per day, powered by a massive 1 million-token context window. Once you're in, you can ask it to read, edit, or summarize large codebases, run shell commands, fetch web content, or even generate images and videos with tools like Imagen and Veo.

![Gemini CLI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/clnbm108xtiesyyos2tq.png)


Under the hood, Gemini CLI uses Google's Model Context Protocol, allowing it to stay grounded with live web data and connect to local or remote tools seamlessly. It offers built-in commands for common workflow needs, such as:

- file editing: `edit`, `read-file`, `write-file`
- searching `grep`, `glob`
- shell access `!shell`, and
- web tools `/web-search`, `/web-fetch`.

As an open-source project under Apache 2.0, developers can inspect, customize, and extend its functionality, including adding custom MCP server connections or scripts.

## CLI Tools Comparison

We’ve seen what each tool is about and what they can do. Now, in this section, we’ll look at how Forge Code, Claude Code, and Gemini CLI handle the core things developers actually care about, from setup to building, fixing, and understanding code. Rather than listing features, we’ll see how they respond to real developer tasks and where each one fits best.

### Installation & First-Time Setup

Getting started with a dev tool should feel smooth, not like reading a manual. So in this part, we’re looking at how easy it is to get each of these tools up and running, from installation to first use.

**Gemini CLI**

Gemini CLI can be used instantly via `npx` or installed with this command 👇

```jsx
npm install -g @google/gemini-cli
```

The first time you run `gemini`, it’ll prompt you to sign in with your Google account, no need to create a new login. 


![Gemini CLI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/owee3itrjj8eey0h3bvt.png)



That gets you access to 1,000 model requests per day and 60 per minute. For more advanced use or specific models, you can plug in a Gemini API key from Google AI Studio. If you want to go deeper, Gemini supports environment variable configuration and integration with Model Context Protocol servers.

**Forge Code**

Forge takes less than a minute to fully set up. You [sign up](https://app.forgecode.dev/app/) using your GitHub or Google account,

![Forge Code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dpjgf2uz4t2jlwpuqkct.png)


and then create your first API key.

![Forge code API](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q2dxl5x1gjsho16cncxa.png)


and add a `.env` file to your root directory, and paste an api key there. After that, open your terminal and install Forge Code using this command 👇

```jsx
npm i -g forgecode@latest
```

Once installed, you can launch it in your project directory by typing `forge`, and it boots up instantly. 

![Forge code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wpft3ks965xa9jvlcg2b.png)


No extra onboarding steps, no forced tutorials. It works best when run from the root of your codebase, so it can understand structure and history from the start. If you want to use your own OpenAI or Anthropic key instead of the default setup, check out the full guide to [Custom Providers](https://forgecode.dev/docs/custom-providers/) to set it up in seconds.

**Claude Code**

Claude Code installs using this command👇

```jsx
npm install -g @anthropic-ai/claude-code
```

And launching it is as simple as running `claude` in your project directory. But setup isn’t always one step. You’ll need an Anthropic account with either a paid Claude Pro/Max plan or billing enabled on the console. It authenticates via OAuth, and you’ll need to confirm terminal access every time you switch machines. On Windows, it only works through WSL, which adds a few more steps if you haven’t set that up already. 

![Claude Code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vjpy5yyorrkywpkdndrj.png)

Once you're in, it recommends running a command like `summarize this project` or `/init` to generate a project guide and get started.

### Real-World Project Creation Comparison

Now that we've set up all three tools, it's time to start testing them. First, we'll begin with project creation. We'll give each tool a prompt and see how they create a complete project from scratch.

This is the prompt:

```jsx
Create a blog app with user login and Markdown-based post editor. Use React + Node JS. The UI must look coolest and creative and rest of the things keep dummy. The login dummy, there will be no database for now, so temporary 
save anywhere no matter, just the UI must looks real and best. the funtionality you could keep static. But, blog CRUD is needed with markdown support. Simple email pa
ssword added with dummy login and make it monolithic but, no database there will be.
```

**Claude Code**

I started with Claude Code, I gave it a prompt, and it first created the documentation and then started making the changes. It set up a monolithic repo and pre-installed the packages, so I just needed to run the servers. Here's what Claude did:

Check out the [result video here](https://www.canva.com/design/DAGr6-Mn8DQ/lFtXx-D8r9ybosL3C1Qxtg/watch?utm_content=DAGr6-Mn8DQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h175216084f)

Claude made a better UI with nice color combinations, but the styling was breaking in some places. The functionality wasn't great, we could sign up and sign in, but it didn't have as much functionality. Also, the published blog didn't appear in the list anywhere

**Gemini CLI**

Gemini CLI started implementing the code directly without making any plans.

![Gemini CLI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/594bf15wbege7gk5b6wp.png)

At some steps, it asks if we want to continue. If we say yes, it proceeds; if not, it stops the entire process.


![gemini vs code cli](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/usrmvqwd4zxi1ntrdih8.png)

It also pre-installed all the packages, so we just need to run the servers.

![gemini cli](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/50plboqhl2kqnes8gbuz.png)



After running the server, the results were not as expected.

Check out the [result video here](https://www.canva.com/design/DAGr69xXrmg/OdtudAb3dJBpytK0laIYpg/watch?utm_content=DAGr69xXrmg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0e59a83065)

There was no UI, no authentication, no validation, just a simple CRUD for blog creation, and even that lacked validations. Once we entered a page, we couldn't go back without refreshing. So, Gemini CLI fell short in this case.

**Forge Code:**

I gave the same prompt to Forge Code, so as this is a big change, I changed the agent to `muse` using `/muse` command to see the plan how it will approach, then I’ll use the `/forge` agent to implement those features. I used this prompt first.

 

```jsx
Create a blog app with user login and Markdown-based post editor.
```

It properly made the plan, created a new file with all the plan steps, and asked a few questions.

![Forge code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4ult5e1z4pgx04hg7rbf.png)


I replied with this:

```jsx
Yes, Use React + Node JS. The UI must look coolest and creative and rest of the things keep dummy. The login dummy, there will be no database for now, so temporary 
save anywhere no matter, just the UI must looks real and best. the funtionality you could keep static. But, blog CRUD is needed with markdown support. Simple email pa
ssword added with dummy login and make it monolithic but, no database there will be.
```

And, it started creating it. It created a monolithic repo, and once completed, it properly gave the description with demo credentials and installation setup. And, this is what Forge Code came up with.

Check out the [result video here](https://www.canva.com/design/DAGrouD_J0o/tfhQC9Tp-RVfkATAeMwCTg/watch?utm_content=DAGrouD_J0o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7dfee032bf)

The result surprised me. I wasn't expecting this much. It worked perfectly. It included all the functionalities, just the UI needs improvement. But I would say it has already completed a lot of work. We can do authentication, perform CRUD operations on the blog, and the markdown previewer is amazing. It has tags, a title, live preview, draft save, and the ability to upload blogs for others to see and read, and like. So, it's more than enough in one go.

### Debugging & Code Review Performance

Now, we saw how these tools work when creating a project from scratch. To see how each AI tool handles real-world debugging, I made a small HTML + JS signup form with intentional flaws. The form seems to work, but it has hidden issues like a race condition, poor feedback timing, missing input checks, and a bad UI(really bad!).

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tricky Signup Form</title>
</head>
<body>
  <form id="signupForm">
    <input type="text" id="name" placeholder="Name" /><br />
    <input type="email" id="email" placeholder="Email" /><br />
    <button type="submit">Submit</button>
  </form>
  <p id="status" style="color: green;"></p>

  <script>
    let submitted = false;

    document.getElementById("signupForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      // Subtle bug 1: checks only for falsy, not for whitespace
      if (!name || !email) {
        document.getElementById("status").textContent = "All fields are required.";
        return;
      }

      // Subtle bug 2: no debounce/throttle, async not awaited, user can double submit
      if (!submitted) {
        submitted = true;

        // Fake async call with a race condition
        fakeSubmit(name, email);
      }

      // Subtle bug 3: success message shown before confirmation
      document.getElementById("status").textContent = "Form submitted!";
    });

    function fakeSubmit(name, email) {
      setTimeout(() => {
        console.log("Form submitted with:", name, email);

        // Subtle bug 4: server error not handled, no retry logic
        if (Math.random() < 0.3) {
          console.error("Simulated submission failure");
        }

        submitted = false; // Reset without checking server response
      }, 1000);
    }
  </script>
</body>
</html>

```

Now, let’s see how well each tool reviews the code, identifies bugs, and improves the experience.

**Forge Code:**

When it comes to reviewing and fixing bugs, Forge Code does more than just point out what’s wrong. I entered this prompt for Forge Code:

```jsx
Review this code, find bugs if any and do the fixes accordingly in index.html
```

It walks through what’s likely to go wrong *if you don’t fix it*. In our sample signup form, Forge started by spotting the subtle issues:

- Inputs that pass validation despite being empty
- premature success messages, and
- race conditions that could trigger duplicate submissions.

These are bugs that rarely show up during testing but become frustrating in production.

Forge used a layered strategy here. First, it ran a surface-level review using the **Muse Agent**, pointing out that the form’s current validation doesn’t handle whitespace, the `submitted` flag isn’t reset properly, and the success message is shown regardless of whether the backend responded. Then, switching to the **Forge Agent**, it moved from diagnosis to implementation, refactoring the code to trim inputs, disable the button during requests, add real-time feedback states (success, error, loading), and introduce better accessibility.

![forge code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kmehtgx29bgvetpbktzy.png)


What’s clever is Forge’s approach to user trust. It doesn’t just assume a “green = good” pattern; it ensures the feedback aligns with real backend behavior. Forge made sure to implement changes and verify them in context, using both agents as needed. 

And once the fixes are complete, Forge doesn't leave you stuck. You can simply type:

```jsx
commit my changes with message "Fix race condition and improve form UX"

```

Or even:

```jsx
create a new branch called bugfix/form-validation

```

Git becomes easy to talk to, no guessing or searching for commands.

**Gemini CLI:**

We gave the same prompt to Gemini CLI, too, to review the same frontend code.

```jsx
Review this code, find bugs if any and do the fixes accordingly in index.html
```

Gemini pointed out a key concern: the form gave the illusion of success too early. Even if the simulated backend submission failed, users still saw a success message.

Gemini rewired the JavaScript flow to reflect reality. It delayed feedback until the backend (simulated by a timeout) confirmed the result. It wrapped submission in a `Promise`, disabled the button during submission, and handled both success and failure with visible, styled messages. It also cleared the form only if submission succeeded, a small detail, but one that matters.

However, Gemini didn’t touch the UI, no accessibility improvements, no styling adjustments, no enhanced input handling. 


![gemini cli](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1mrxe28t7fpdh425495.png)


It focused only on **submission logic and user state flow**, not the overall picture. Also, Gemini CLI doesn't offer git commands like Forge Code does.

**Claude Code:**

Claude Code also identified a few behavioral bugs in the form’s logic and focused on improving how the submission flow is handled. It rewrote the JavaScript to introduce cleaner feedback messaging and reduce false positives during submission.

Claude did a solid job fixing the core submission logic. It swapped out the misleading “Form submitted!” message with a proper `"Submitting..."` state, added basic error handling for simulated failures, and made sure the form resets only after successful submissions. It also introduced a `showStatus()` helper that changes the message color based on status, blue for progress, green for success, and red for errors.


![claude code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tpb0475tr1qrlwz2dnew.png)


But it didn’t touch the UI at all. There’s no layout or spacing fix, the form is still visually plain, and accessibility is ignored, with no labels, no screen reader support. It also doesn’t sanitize input (you can still submit blank spaces), and the button isn’t disabled during submission, which means accidental double-clicks can still happen.

Once changes were made, Claude made it easy to commit them too. Just ask:

```bash
commit my changes with message "Improve submission flow and add status messaging"
```

Or spin off a branch for it:

```bash

create a new branch called bugfix/form-feedback
```

Claude handles Git just like code.

### **Context Handling & Architecture Planning**

To test each tool, I put them into a live project: a visual workflow agent builder built with Reactflow. It's been used by many people over time, and like most growing projects, the codebase got messy.


![visual workflow builder](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ivwostm9of2p5dr3qb3h.png)


There are many serious bugs, like connections between nodes that seem fine but break when saved. Debugging is very hard. We created a new version with a better code structure and improved functionality. We'll give each tool the old codebase to see if it can provide the correct results.

The codebase is too large, so we will keep the prompts as small as possible. We won't tell them the file locations or other details to see if they can figure it out on their own.

So I asked each tool:

> This bot builder has a lot of edge case issues. I’m using ReactFlow and Zustand. Connections often break when saving, and the code is messy and inconsistent across node types. If I want to rebuild it from scratch, what folder structure, architecture, and patterns should I use so that it stays clean, scalable, and bug-free?
> 

Let’s look at how each AI assistant handled that context-heavy, architectural-level question.

**Gemini CLI Response:**

I started with Gemini. It took the best-practice route. It didn’t analyze files, it based its response on my prompt alone. But its advice was still thoughtful and senior-level.

**It pointed out issues like:**

- No clear folder breakdown
- Components doing too much
- Confusing and scattered state logic


![gemini cli](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/996mnhzyvi4q0oygd3p6.png)


**Then, it proposed:**

- A clean folder layout (`canvas`, `nodes`, `store`, `hooks`, `types`)
- Centralized Zustand state
- Per-node components (e.g., `MessageNode.tsx`)

![gemini cli](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1u5a175vke2wodwhmc5y.png)

It didn’t read the codebase, so it missed real-world quirks and hidden issues. Gemini felt like a solid dev sharing good advice, just not tailored to this specific code mess.

**Claude Code Response:**

Claude approached this as a complete system redesign. It didn’t just change folder names, it rewired the project structure, types, logic, and even future workflows.


![claude code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/or6l8wsomp7ct10au0z2.png)


**Key problems it picked up on:**

- Multiple overlapping stores
- Inconsistent `id` usage
- Logic is scattered across files
- Weak separation of UI and logic

**Claude’s plan included:**

- Modular folder system (`Canvas`, `Sidebar`, `Nodes`, `Dialogs`, etc.)
- Scoped Zustand stores for different concerns
- Smart hooks like `useFlowCanvas`, `useConnectionManager`
- Strict types for node data and validation
- Utilities like `flowSerializer.ts` and `ConnectionValidator.ts`
- Week-by-week roadmap for rebuild and rollout

Claude acted like a lead engineer, writing a full blueprint, not just helping fix bugs, but making the whole thing scale and last.

**Forge Code Response:**

Forge started reading the project deeply. It scanned real files like `flowStore.ts`, `createFlowProvider.tsx`, and node blocks. Only after that did it suggest a complete rebuild plan suited to the actual situation.


![forge code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jl1llcvdadgqehuzd3kt.png)


**It identified key issues like:**

- Mixed state (Zustand + local component state)
- Long monolithic components (400+ lines)
- Inconsistent data formats across node types
- Fragile connection logic that validates only after save

**Then, it offered a clean plan:**

- Modular folder structure: `core`, `nodes`, `store`, `hooks`, `utils`
- Per-node folders with dedicated types and logic
- Real-time validation before connections
- Type-safe node creation methods
- Dedicated Zustand stores: `nodeStore`, `edgeStore`, etc.
- A 6-step rollout strategy from setup to polish

Forge felt like someone who actually read the code and gave back practical fixes you could apply right away.

The best part is, Forge comes up with built-in *Context Compaction*. This means when you’re working on huge projects or multi-hour sessions, Forge keeps summarizing older chat history automatically, so it remembers everything important without getting bloated or slow. [Learn how it works](https://forgecode.dev/docs/context-compaction/).

### Pricing & Limits

We saw all the capabilities of each tool, let’s look into their pricing plans.

**Claude Code**

- **Free**: $0 – No terminal access, web-only usage.
- **Pro**: $20/month (or $17/month yearly) – Full Claude Code access in terminal.
- **Max**: Starts at $100/month – Higher limits and Opus model access for serious devs.

**Forge Code**

- **Free**: $0/month – Basic AI usage and access to default models.
- **Pro**: $20/month – 500 requests/month with access to Claude, OpenAI, Gemini, and priority support.
- **Max**: $200/month ([currently free in early access](https://forgecode.dev/pricing/)) – 10,000 requests/month, ideal for power users.

**Gemini CLI**

- **Free & open source** – 1,000 requests/day, 60 per minute.
- **Paid options**: Add a Google AI key or upgrade to **Gemini Code Assist ($19–$54/month)** for more control and usage.

## Which one should you choose?

| Feature / Task | Claude Code | Forge Code | Gemini CLI |
| --- | --- | --- | --- |
| **Setup Speed** | CLI + OAuth (WSL for Windows) | Fast + simple CLI. Takes less than a minute to setup | Instant via `npx` or install |
| **Project Creation** | Better UI, some breaks | Full UI + markdown CRUD + flow | Minimal output, no UI |
| **Bug Fixes & Debugging** | Logic fixed, UI ignored | Deep fixes + accessibility + UX | Logic-only fixes |
| **Context Awareness** | Reads partial context | Reads actual files + history | Prompt-only, no file scan |
| **Architecture Planning** | Full system redesign | Custom plan based on real code | Generic structure only |
| **Git Integration** | Conversational Git | Fully conversational | No Git support |
| **Custom Tool Integration (MCP)** | Available | Available | Available |
| **Free Tier** | Terminal access is paid | Yes | 1,000/day |
| **Best Use Case** | Code review + smaller changes | Full workflow, from review → build → commit | Power terminal users with custom pipelines |

## Conclusion

The command line is finally getting smarter. We explored all three tools, **Gemini CLI**, **Claude Code**, and **Forge Code,** to show how much AI can help with real developer work, not just suggest autocomplete in your IDE.

If you want something fast and familiar, **Claude Code** does a great job of cleaning up logic and staying readable. **Gemini CLI** brings sheer context power with that massive token window, and its open-source flexibility is hard to beat.

But if you’re looking for something that *actually feels built for developers,* not just dropped into a terminal, **Forge Code** stands out. It plans, implements, explains, commits, and adapts to your coding habits. It doesn’t just suggest fixes, it *understands the project,* works with Git, and gives you a safe loop between thinking (/muse) and doing (/forge).

In short, Forge Code isn’t just another AI CLI tool; it’s an actual *workflow upgrade*.

**Links:**

- Learn more about Forge Code [here](https://forgecode.dev/docs/).
- Check out the Supported API Providers [here](https://forgecode.dev/docs/custom-providers/).
- Learn about Agents within Forge [here](https://forgecode.dev/docs/operating-agents/).
- Explore MCP integration with Forge [here](https://forgecode.dev/docs/mcp-integration/).
- Create your own custom Forge Commands [here](https://forgecode.dev/docs/custom-commands/).
- Know more about the [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)  & [Gemini CLI](https://github.com/google-gemini/gemini-cli?tab=readme-ov-file#gemini-cli).