import CustomLink from '@site/src/components/shared/CustomLink'
import Card from '@site/src/components/shared/Card'

# Working with Custom Rules: AI-Driven Code Standards for Development Teams

Every development team has its own way of doing things. Code style preferences, testing patterns, error handling approaches, naming conventions - the list goes on. The problem? AI coding assistants don't know your team's specific practices unless you tell them.

Forge's custom rules feature solves this by letting you embed your team's standards directly into every AI interaction. Instead of repeating the same guidelines in every conversation, you define them once and Forge ensures every agent follows them automatically.

## What Are Custom Rules?

Custom rules are persistent instructions that get injected into every AI conversation. Think of them as your team's coding constitution - fundamental principles that should guide every decision the AI makes in your codebase.

When you define custom rules, they become part of the AI's system prompt, meaning they're always active and take priority over default behaviors.

<Card variant="information">
  <p><strong>Quick Reference</strong></p>
  <span>For technical implementation details and API reference, see the <CustomLink href="/docs/custom-rules">Custom Rules feature documentation</CustomLink>.</span>
</Card>

## Quick Start: Your First Custom Rule

Let's start with something simple. Add this to your `forge.yaml` file:

```yaml
# forge.yaml
custom_rules: |
  - Add error handling to all functions
  - Include unit tests for new code
  - Use meaningful variable names
```

That's it! Now every AI interaction will follow these three basic principles. Let's see how this works in practice.

### Before Custom Rules

```
User: "Create a function to calculate user age"
AI: [Creates basic function without error handling or tests]
User: "Add error handling and tests please"
AI: [Adds basic validation]
```

### After Custom Rules

```
User: "Create a function to calculate user age"
AI: [Creates function with error handling, input validation, and comprehensive tests]
User: "Perfect!"
```

## Setting Up Custom Rules

### Global Rules (Recommended for Teams)

Add rules to your `forge.yaml` file to apply them across all agents:

```yaml
# forge.yaml
custom_rules: |
  - Use TypeScript strict mode
  - Add error handling to all functions
  - Include unit tests for new code
  - Use meaningful variable names
```

### Agent-Specific Rules

You can also define rules for individual agents when you need specialized behavior:

```yaml
# forge.yaml
agents:
  - id: frontend-dev
    custom_rules: |
      - Use React functional components
      - Add accessibility attributes
      - Include PropTypes for components

  - id: backend-dev
    custom_rules: |
      - Use dependency injection
      - Add request logging to endpoints
      - Validate all input with schemas
```

<Card variant="information">
  <p><strong>Rule Priority</strong></p>
  <span>Global rules override agent-specific rules when both are defined. This means your team-wide standards always take precedence over individual agent configurations.</span>
</Card>

## Progressive Learning Path

### Level 1: Basic Standards (Start Here)

Perfect for teams just getting started with custom rules:

```yaml
custom_rules: |
  - Add error handling to all functions
  - Include unit tests for new code
  - Use meaningful variable names
  - Add comments for complex logic
```

### Level 2: Language-Specific Patterns

Once comfortable with basic rules, add language-specific conventions:

```yaml
custom_rules: |
  TypeScript:
  - Use explicit type annotations
  - Prefer interfaces over type aliases
  - Use React.memo for performance optimization

  Python:
  - Use type hints for all functions
  - Follow PEP 8 naming conventions
  - Use dataclasses for data objects
```

### Level 3: Team-Specific Architecture

Advanced rules for established teams with specific patterns:

```yaml
custom_rules: |
  Architecture:
  - Use repository pattern for data access
  - Implement command/query separation
  - Apply dependency injection for services

  Testing:
  - Use arrange-act-assert pattern
  - Mock external dependencies
  - Test both happy path and error conditions
```

## Real-World Examples by Tech Stack

### React/TypeScript Teams

```yaml
custom_rules: |
  - Use TypeScript strict mode
  - Prefer functional components with hooks
  - Add data-testid attributes for testing
  - Use React Testing Library for tests
  - Include JSDoc comments for props
```

### Python/Django Projects

```yaml
custom_rules: |
  - Use type hints for all functions
  - Keep views thin, logic in services
  - Use database transactions for multi-model operations
  - Write tests using pytest with factory_boy
  - Follow Django app structure conventions
```

### Node.js/Express APIs

```yaml
custom_rules: |
  - Use async/await instead of callbacks
  - Add input validation with Joi schemas
  - Include request/response logging
  - Use dependency injection for services
  - Write integration tests for all endpoints
```

## How Custom Rules Work

When you start a Forge session, the system:

1. **Loads your `forge.yaml` configuration**
2. **Merges global and agent-specific rules**
3. **Injects rules into the AI's system prompt**
4. **Applies rules to every response throughout the session**

The rules become part of the AI's "personality" for that session, influencing every decision it makes about your code.

## Advanced Strategies

### Conditional Rules by File Type

```yaml
custom_rules: |
  For .ts/.tsx files:
  - Use explicit type annotations
  - Add JSDoc comments for public APIs

  For .py files:
  - Use type hints following PEP 484
  - Format with black and sort imports with isort

  For .sql files:
  - Use uppercase for SQL keywords
  - Add comments explaining complex queries
```

### Environment-Specific Rules

```yaml
custom_rules: |
  Development:
  - Include detailed logging and debug information
  - Add comprehensive error messages

  Production:
  - Use structured logging with correlation IDs
  - Implement graceful error handling
  - Add performance monitoring
```

## Troubleshooting

### Common Issues and Solutions

**Problem: Rules aren't being applied**

- Check your `forge.yaml` syntax with a YAML validator
- Ensure the file is in your project root
- Restart your Forge session after making changes

**Problem: Rules conflict with each other**

- Global rules override agent-specific rules
- Later rules in the same section override earlier ones
- Be specific about when rules apply (file types, contexts)

**Problem: Rules are too vague**

```yaml
# Too vague
custom_rules: |
  - Write good code
  - Add tests

# Better
custom_rules: |
  - Add error handling with try/catch blocks
  - Include unit tests with arrange-act-assert pattern
```

**Problem: Too many rules causing confusion**

- Start with 3-5 core rules
- Add new rules gradually as patterns emerge
- Group related rules under clear categories

### Debugging Your Rules

View what rules are currently active:

```bash
/dump html
```

This generates an HTML file showing exactly what context (including your custom rules) is being sent to the AI.

### Performance Tips

- Keep rules concise and specific
- Use bullet points for better readability
- Group related rules under clear headings
- Avoid duplicate or contradictory rules

## Best Practices

### Writing Effective Rules

**Do:**

- Be specific about what you want
- Use action-oriented language ("Add", "Use", "Include")
- Group related rules together
- Start simple and iterate

**Don't:**

- Write vague guidelines ("write good code")
- Create conflicting rules
- Add too many rules at once
- Forget to test your rules

### Team Adoption

1. **Start with team consensus** - Get buy-in on 3-5 core rules
2. **Document the why** - Explain reasoning behind each rule
3. **Review regularly** - Update rules as practices evolve
4. **Share examples** - Show before/after comparisons

## Getting Started Checklist

- [ ] Create a `forge.yaml` file in your project root
- [ ] Add 3-5 basic custom rules
- [ ] Test with a small feature implementation
- [ ] Check the HTML context dump
- [ ] Iterate based on results
- [ ] Gradually add more specific rules

## Need Help?

### Export Your Session Context

```bash
/dump html
```

### Get Support

- **Discord**: <CustomLink href="https://discord.gg/kRZBPpkgwq">Join our Discord community</CustomLink>
- **Twitter/X**: Send us a DM <CustomLink href="https://x.com/forgecodehq">@forgecodehq</CustomLink>

---

### Common Questions

**Q: Can I have different rules for different projects?**
A: Yes! Each project's `forge.yaml` file can have its own custom rules.

**Q: How many rules can I add?**
A: There's no hard limit, but we recommend starting with 5-10 rules and growing gradually.

**Q: Do rules apply to all AI models?**
A: Yes, custom rules work with all supported AI models in Forge.

**Q: Can I share rules between projects?**
A: You can copy rules between `forge.yaml` files, or create a template for your organization.

---

Custom rules transform AI coding from a series of corrections into a smooth, standards-compliant workflow. Your AI learns your team's way of doing things once, then applies that knowledge consistently across every project.

## Related Guides

To maximize your team's productivity with Forge, explore these complementary guides:

- **<CustomLink href="/docs/model-selection-guide">Model Selection Guide</CustomLink>** - Choose the right AI models for your specific development tasks
- **<CustomLink href="/docs/file-tagging-guide">File Tagging Guide</CustomLink>** - Use @ mentions to provide better context for AI code generation
- **<CustomLink href="/docs/plan-and-act-guide">Plan and Act Guide</CustomLink>** - Structure your development workflow with AI planning before implementation
