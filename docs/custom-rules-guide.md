# Working with Custom Rules

Every development team has its own way of doing things. Code style preferences, testing patterns, error handling approaches, naming conventions - the list goes on. The problem? AI coding assistants don't know your team's specific practices unless you tell them.

Forge's custom rules feature solves this by letting you embed your team's standards directly into every AI interaction. Instead of repeating the same guidelines in every conversation, you define them once and Forge ensures every agent follows them automatically.

:::info Quick Reference
For technical implementation details and API reference, see the [Custom Rules feature documentation](/custom-rules).
:::

## What Are Custom Rules?

Custom rules are persistent instructions that get injected into every AI conversation. Think of them as your team's coding constitution - fundamental principles that should guide every decision the AI makes in your codebase.

When you define custom rules, they become part of the AI's system prompt, meaning they're always active and take priority over default behaviors. Global rules take priority over agent-specific rules when both are defined.

## Setting Up Custom Rules

### Global Rules (Recommended)

Add rules to your `forge.yaml` file to apply them across all agents:

```yaml
# forge.yaml
custom_rules: |
  Error Handling:
  - Use `anyhow::Result` for error handling in services
  - Create domain errors using `thiserror`
  - Never implement `From` for converting domain errors

  Testing Standards:
  - All tests must use `pretty_assertions::assert_eq`
  - Write tests in three steps: fixture, actual, expected
  - Keep tests in the same file as source code
  - Use `insta` for snapshot testing

  Code Style:
  - Use camelCase for variables, PascalCase for classes
  - Add comprehensive error handling to all functions
  - Include unit tests for all new functions
```

### Agent-Specific Rules

You can also define rules for individual agents:

```yaml
# forge.yaml
agents:
  - id: frontend-specialist
    custom_rules: |
      - Use TypeScript strict mode
      - Prefer functional components with hooks
      - Include accessibility attributes (aria-label, role)
      - Use CSS modules for styling
      - Add PropTypes for all component props

  - id: backend-specialist
    custom_rules: |
      - Use dependency injection for services
      - Add request/response logging to all endpoints
      - Validate all input with Joi schemas
      - Use database transactions for multi-step operations
```

## Why Custom Rules Transform Your Workflow

### Before Custom Rules: Constant Repetition

```
User: "Add a new API endpoint for user registration"
AI: [Creates endpoint without validation, error handling, or tests]
User: "Add input validation, proper error responses, and unit tests"
AI: [Adds basic validation]
User: "Use our standard error format and add integration tests too"
AI: [Finally matches team standards after 3 rounds]
```

### After Custom Rules: Consistent Quality

```
User: "Add a new API endpoint for user registration"
AI: [Creates endpoint with validation, standardized error handling,
     comprehensive tests, and logging - all following team standards]
User: "Perfect, ship it!"
```

## Real-World Custom Rules Examples

### For React/TypeScript Teams

```yaml
custom_rules: |
  Component Standards:
  - Use TypeScript strict mode with explicit return types
  - Prefer functional components with React hooks
  - Include JSDoc comments for all props interfaces
  - Use React.memo for performance optimization when appropriate
  - Add data-testid attributes for testing

  State Management:
  - Use Zustand for global state, useState for local state
  - Keep state as close to usage as possible
  - Use custom hooks for complex state logic

  Testing Requirements:
  - Write tests using React Testing Library
  - Test user interactions, not implementation details
  - Mock external dependencies consistently
  - Achieve 80%+ test coverage for new components
```

### For Python/Django Projects

```yaml
custom_rules: |
  Code Organization:
  - Follow Django's app structure conventions
  - Use type hints for all function parameters and returns
  - Keep views thin, put business logic in services
  - Use dataclasses for data transfer objects

  Database Practices:
  - Always use database transactions for multi-model operations
  - Add database indexes for frequently queried fields
  - Use select_related and prefetch_related to avoid N+1 queries
  - Write database migrations that are reversible

  Testing Standards:
  - Use pytest with factory_boy for test data
  - Mock external API calls with responses library
  - Test both happy path and error conditions
  - Use parametrized tests for multiple input scenarios
```

### For DevOps/Infrastructure Teams

```yaml
custom_rules: |
  Infrastructure as Code:
  - Use Terraform for all infrastructure provisioning
  - Include resource tags for cost tracking and environment identification
  - Store sensitive values in HashiCorp Vault or AWS Secrets Manager
  - Version all infrastructure changes through Git

  Security Requirements:
  - Enable encryption at rest and in transit for all data stores
  - Use least-privilege access principles for all IAM policies
  - Implement network segmentation with security groups
  - Add monitoring and alerting for all critical resources

  Deployment Standards:
  - Use blue-green deployments for zero-downtime updates
  - Include health checks for all services
  - Implement automatic rollback on deployment failures
  - Document runbook procedures for incident response
```

## How Custom Rules Work Under the Hood

When you start a Forge session, the system:

1. **Loads your `forge.yaml` configuration**
2. **Merges global and agent-specific rules (global rules override agent-specific rules)**
3. **Injects rules into the AI's system prompt**
4. **Applies rules to every response throughout the session**

The rules become part of the AI's "personality" for that session, influencing every decision it makes about your code.

## Advanced Rule Strategies

### Conditional Rules Based on File Types

```yaml
custom_rules: |
  For TypeScript files (.ts, .tsx):
  - Use explicit type annotations for function parameters
  - Prefer interfaces over type aliases for object shapes
  - Add JSDoc comments for public APIs

  For Python files (.py):
  - Use type hints following PEP 484
  - Format with black and sort imports with isort
  - Follow PEP 8 naming conventions

  For SQL files (.sql):
  - Use uppercase for SQL keywords
  - Include meaningful table and column aliases
  - Add comments explaining complex queries
```

### Progressive Rule Complexity

Start simple and add complexity as your team's practices evolve:

```yaml
# Week 1: Basic standards
custom_rules: |
  - Add error handling to all functions
  - Include unit tests for new code
  - Use meaningful variable names

# Month 1: More specific patterns
custom_rules: |
  Error Handling:
  - Use Result<T, E> pattern for fallible operations
  - Log errors with structured context
  - Provide user-friendly error messages

  Testing:
  - Write tests before implementation (TDD)
  - Use arrange-act-assert pattern
  - Mock external dependencies
  - Test edge cases and error conditions

# Month 3: Team-specific conventions
custom_rules: |
  [Previous rules plus:]

  Architecture Patterns:
  - Use repository pattern for data access
  - Implement command/query separation
  - Apply dependency injection for services
  - Use event-driven architecture for cross-service communication
```

## Viewing Your Active Rules

Want to see what rules are currently active? Use the context export feature:

```bash
/dump html
```

This generates an HTML file showing exactly what context (including your custom rules) is being sent to the AI. Perfect for debugging or sharing with team members.

## Getting Started

1. **Start simple** - Add 3-5 basic rules your team always follows
2. **Test with a small feature** - See how the AI applies your rules
3. **Iterate and refine** - Add more specific rules as you identify patterns
4. **Share with your team** - Get everyone using the same standards

Custom rules transform AI coding from a series of corrections into a smooth, standards-compliant workflow. Your AI learns your team's way of doing things once, then applies that knowledge consistently across every project.

---

### Need Help?

If you're experiencing issues with Forge:

1. **Export your session context:**

   ```bash
   /dump html
   ```

2. **Share with our team:**
   - **Discord**: [Join our Discord community](https://discord.gg/kRZBPpkgwq)
   - **Twitter/X**: Send us a DM [@forgecodehq](https://x.com/forgecodehq)

---
