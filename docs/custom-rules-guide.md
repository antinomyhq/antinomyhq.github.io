# Project-Specific Guidelines: Building AI-Driven Development Standards with AGENTS.md

Every development team has its own way of doing things. Code style preferences, testing patterns, error handling approaches, naming conventions - the list goes on. The problem? AI coding assistants don't know your team's specific practices unless you tell them.

Forge's custom rules feature solves this by letting you embed your team's standards directly into every AI interaction. Instead of repeating the same guidelines in every conversation, you define them once in an `AGENTS.md` file and the AI follows them automatically.

## What Are Project-Specific Guidelines?

Project-specific guidelines are persistent instructions that get injected into every AI conversation. Think of them as your team's development constitution - fundamental principles that should guide every decision the AI makes in your codebase.

When you define project guidelines, they become part of the AI's system prompt, meaning they're always active and take priority over default behaviors.

:::info Quick Reference
For technical implementation details and API reference, see the [Custom Rules feature documentation](/docs/custom-rules).
:::

## Quick Start: Your First Project Guidelines

Let's start with something simple. Create an `AGENTS.md` file in your project root:

```markdown
# Development Guidelines

## Core Standards

- Add error handling to all functions
- Include unit tests for new code
- Use meaningful variable names
```

That's it! Now every AI interaction will follow these three basic principles. Let's see how this works in practice.

### Before Project Guidelines

```
User: "Create a function to calculate user age"
AI: [Creates basic function without error handling or tests]
User: "Add error handling and tests please"
AI: [Adds basic validation]
```

### After Project Guidelines

```
User: "Create a function to calculate user age"
AI: [Creates function with error handling, input validation, and comprehensive tests]
User: "Perfect!"
```

## Setting Up Project Guidelines

Project guidelines are defined using an **`AGENTS.md` file** in your project root directory. This file uses markdown format for comprehensive, documentation-style guidelines.

### Basic Setup (Recommended for Teams)

Create an `AGENTS.md` file in your project root with your team's core standards:

```markdown
# Development Guidelines

## Core Standards

- Use TypeScript strict mode
- Add error handling to all functions
- Include unit tests for new code
- Use meaningful variable names
```

### Specialized Rules by Domain

You can organize rules by different areas of development:

```markdown
# Development Guidelines

## Frontend Development

- Use React functional components
- Add accessibility attributes
- Include PropTypes for components

## Backend Development

- Use dependency injection
- Add request logging to endpoints
- Validate all input with schemas
```

## Progressive Learning Path

### Level 1: Basic Standards (Start Here)

Perfect for teams just getting started with project guidelines:

```markdown
# Development Guidelines

## Core Standards

- Add error handling to all functions
- Include unit tests for new code
- Use meaningful variable names
- Add comments for complex logic
```

### Level 2: Language-Specific Patterns

Once comfortable with basic rules, add language-specific conventions:

```markdown
# Development Guidelines

## TypeScript Standards

- Use explicit type annotations
- Prefer interfaces over type aliases
- Use React.memo for performance optimization

## Python Standards

- Use type hints for all functions
- Follow PEP 8 naming conventions
- Use dataclasses for data objects
```

### Level 3: Team-Specific Architecture

Advanced rules for established teams with specific patterns:

```markdown
# Development Guidelines

## Architecture Patterns

- Use repository pattern for data access
- Implement command/query separation
- Apply dependency injection for services

## Testing Standards

- Use arrange-act-assert pattern
- Mock external dependencies
- Test both happy path and error conditions
```

## Real-World Examples by Tech Stack

### React/TypeScript Teams

```markdown
# React/TypeScript Development Guidelines

## Core Standards

- Use TypeScript strict mode
- Prefer functional components with hooks
- Add data-testid attributes for testing
- Use React Testing Library for tests
- Include JSDoc comments for props
```

### Python/Django Projects

```markdown
# Python/Django Development Guidelines

## Core Standards

- Use type hints for all functions
- Keep views thin, logic in services
- Use database transactions for multi-model operations
- Write tests using pytest with factory_boy
- Follow Django app structure conventions
```

### Node.js/Express APIs

```markdown
# Node.js/Express API Guidelines

## Core Standards

- Use async/await instead of callbacks
- Add input validation with Joi schemas
- Include request/response logging
- Use dependency injection for services
- Write integration tests for all endpoints
```

## How Project Guidelines Work

When you start an AI agent session, the system:

1. **Searches for `AGENTS.md` files** in multiple locations using a priority system
2. **Parses the markdown content** and extracts your guidelines from the first file found
3. **Injects guidelines into the AI's system prompt**
4. **Applies guidelines to every response throughout the session**

The guidelines become part of the AI's "personality" for that session, influencing every decision it makes about your code.

### File Location Priority

The system searches for `AGENTS.md` files in three locations in order of priority:

- **Base path** (environment.base_path) - highest priority
- **Git root directory** (if available) - medium priority
- **Current working directory** (environment.cwd) - lowest priority

The system uses the first `AGENTS.md` file it finds, starting from the base path and working down the priority list.

## Advanced Strategies

### Conditional Rules by File Type

```markdown
# Development Guidelines

## File-Specific Standards

### TypeScript Files (.ts/.tsx)

- Use explicit type annotations
- Add JSDoc comments for public APIs

### Python Files (.py)

- Use type hints following PEP 484
- Format with black and sort imports with isort

### SQL Files (.sql)

- Use uppercase for SQL keywords
- Add comments explaining complex queries
```

### Environment-Specific Rules

```markdown
# Development Guidelines

## Environment Standards

### Development Environment

- Include detailed logging and debug information
- Add comprehensive error messages

### Production Environment

- Use structured logging with correlation IDs
- Implement graceful error handling
- Add performance monitoring
```

## Troubleshooting

### Common Issues and Solutions

**Problem: Guidelines aren't being applied**

- Check your `AGENTS.md` file is in your project root directory
- Ensure the file is named exactly `AGENTS.md` (case-sensitive)
- Verify the markdown syntax is valid
- Restart your AI agent session after making changes

**Problem: Guidelines conflict with each other**

- Review your `AGENTS.md` file for contradictory statements
- Later guidelines in the same section may override earlier ones
- Be specific about when guidelines apply (file types, contexts)

**Problem: Guidelines are too vague**

```markdown
<!-- Too vague -->

# Guidelines

- Write good code
- Add tests
- Handle errors

<!-- Better -->

# Guidelines

- Add error handling with try/catch blocks
- Include unit tests with arrange-act-assert pattern
```

**Problem: Too many guidelines causing confusion**

- Start with 3-5 core guidelines
- Add new guidelines gradually as patterns emerge
- Group related guidelines under clear categories

### Debugging Your Guidelines

To verify your guidelines are active, ask the AI agent to describe what project guidelines it's currently following. The guidelines from `AGENTS.md` will be part of the AI's system prompt and influence all responses.

### Performance Tips

- Keep guidelines concise and specific
- Use bullet points for better readability
- Group related guidelines under clear headings
- Avoid duplicate or contradictory guidelines

## Best Practices

### Writing Effective Guidelines

**Do:**

- Be specific about what you want
- Use action-oriented language ("Add", "Use", "Include")
- Group related guidelines together
- Start simple and iterate

**Don't:**

- Write vague instructions ("write good code")
- Create conflicting guidelines
- Add too many guidelines at once
- Forget to test your guidelines

### Team Adoption

1. **Start with team consensus** - Get buy-in on 3-5 core guidelines
2. **Document the why** - Explain reasoning behind each guideline
3. **Review regularly** - Update guidelines as practices evolve
4. **Share examples** - Show before/after comparisons

## Getting Started Checklist

- [ ] Create an `AGENTS.md` file in your project root
- [ ] Add 3-5 basic project guidelines using markdown format
- [ ] Test with a small feature implementation
- [ ] Ask the AI to describe what guidelines it's following
- [ ] Iterate based on results
- [ ] Gradually add more specific guidelines

---

## Need Help?

### Verify Your Guidelines

Ask the AI agent: "What project guidelines are you currently following?" or "Can you summarize the development guidelines you're using?" to verify your `AGENTS.md` file is being loaded correctly.

### Get Support

- **Discord**: [Join our Discord community](https://discord.gg/kRZBPpkgwq)
- **Twitter/X**: Send us a DM [@forgecodehq](https://x.com/forgecodehq)

---

### Common Questions

**Q: Can I have different guidelines for different projects?**
A: Yes! Each project's `AGENTS.md` file can have its own specific guidelines.

**Q: How many guidelines can I add?**
A: There's no hard limit, but we recommend starting with 5-10 guidelines and growing gradually.

**Q: Do guidelines apply to all AI models?**
A: Yes, project guidelines work with all supported AI models.

**Q: Can I share guidelines between projects?**
A: You can copy guidelines between `AGENTS.md` files, or create a template for your organization.

---

Project-specific guidelines transform AI coding from a series of corrections into a smooth, standards-compliant workflow. Your AI learns your team's way of doing things once through your `AGENTS.md` file, then applies that knowledge consistently across every development session.

## Related Guides

To maximize your team's productivity with Forge, explore these complementary guides:

- **[Agent Selection Guide](/docs/agent-selection-guide)** - Choose the right AI assistant for your specific development tasks
- **[Model Selection Guide](/docs/model-selection-guide)** - Choose the right AI models for your specific development tasks
- **[File Tagging Guide](/docs/file-tagging-guide)** - Use @ mentions to provide better context for AI code generation
- **[Plan and Act Guide](/docs/plan-and-act-guide)** - Structure your development workflow with AI planning before implementation
