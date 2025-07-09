# Plan First, Then Act: Your Guide to Smarter AI Development with Forge

One of the biggest mistakes developers make with AI coding tools is jumping straight into implementation. After analyzing thousands of successful AI-assisted development sessions, we've learned that the most productive workflow follows a simple pattern: **Plan first, then act**.

Forge makes this workflow smooth with two specialized agents designed to work together.

## Meet Your AI Development Team

### Muse Agent: Your Strategic Planner

Muse operates in **read-only mode**, making it perfect for analysis and planning without touching your code:

- Analyzes your codebase and identifies potential issues
- Creates detailed implementation plans
- Explores different solution approaches
- Reviews code for security, performance, and architecture concerns

**When to use Muse:**

- Before making significant changes to critical systems
- When you need to understand the scope and impact of a task
- For architecture planning.
- When working in unfamiliar codebases

### Forge Agent: Your Implementation Partner

Forge has **full read-write access** and handles the actual implementation:

- Modifies files and creates new code
- Executes commands and runs tests
- Implements the solutions from your plan
- Provides real-time feedback as changes are made

**When to use Forge:**

- After reviewing and approving a plan from Muse
- For routine tasks you're confident about
- When you want hands-off implementation
- For quick fixes with proper version control

## The Plan-and-Act Workflow

Here's how successful developers use both agents together:

### 1. Start with Muse for Planning

```bash
/muse
```

Ask Muse to create a detailed plan:

```
Write a plan for adding rate limiting to our API. Include:
- Which endpoints need protection
- Storage mechanism for rate data
- Error responses and status codes
- Integration points with existing middleware

Now critique this plan. What did you miss?
```

### 2. Review and Refine the Plan

Muse will provide a structured plan and then critique it for gaps. Review this carefully - a good plan eliminates most of implementation confusion later.

### 3. Switch to Forge for Implementation

```bash
/forge
```

Reference the plan and start implementation:

```
Following the `@rate-limiting-plan.md` we discussed, implement the Redis-based rate limiter for the /api/auth endpoints first in `@src/auth`.
```

### 4. Iterate as Needed

Switch back to Muse if you encounter complex decisions, then return to Forge for continued implementation.

## Why This Works

**Planning prevents confusion:** When AI understands the full scope upfront, it makes better implementation decisions and avoids getting lost halfway through.

**Separation of concerns:** Muse focuses purely on analysis without the pressure to implement, leading to better strategic thinking.

**Safety first:** Critical systems get proper review before any changes are made.

**Faster iteration:** Once you have a solid plan, Forge can implement quickly without constant back-and-forth.

## Quick Tips for Success

- **Be specific in your planning requests** - include edge cases, error handling, and integration points
- **Commit frequently** - clean git state makes it easier to track AI changes
- **Review everything** - treat AI output like a junior developer's code

## Switching Between Agents

You can easily switch during any session:

```bash
/muse  # Switch to planning mode
/forge # Switch to implementation mode
/agent # Open agent selector dropdown
```

## Real Example: Adding Authentication

**With Muse (Planning):**

```
Analyze our current user system and create a plan for adding JWT authentication. Consider:
- Token generation and validation
- Middleware integration
- Error handling for expired/invalid tokens
- Database schema changes needed
```

**With Forge (Implementation):**

```
Following our JWT authentication plan in `@plan-jwt.md`, start by implementing the token generation service in @src/auth/jwt.rs
```

This workflow has proven to increase development velocity while reducing bugs and rework. Try it on your next feature - plan with Muse, implement with Forge, and experience the difference structured AI development makes.

Remember: You're the architect, Muse is your strategic advisor, and Forge is your implementation partner. Use each for what they do best.

## Troubleshooting

When things go wrong or you encounter unexpected behavior, here's how to get help:

### Getting Context for Support

1. **Export your session context** by running in your forge session:

   ```bash
   /dump html
   ```

   This command generates a readable HTML file containing all the context being sent to the AI, which helps our team understand exactly what happened.

2. **Share with our team** - Send the exported context file to us via:
   - **Discord**: [Join our Discord community](https://discord.gg/kRZBPpkgwq)
   - **Twitter/X**: Send us a DM [@forgecodehq](https://x.com/forgecodehq)

Our team will be happy to help diagnose the issue and provide a fix. The context export helps us reproduce the problem and understand the full conversation flow.

We're committed to making your AI development experience smooth and productive!
