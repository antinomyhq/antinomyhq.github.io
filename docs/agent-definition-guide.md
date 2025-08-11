import CustomLink from '@site/src/components/shared/CustomLink'

# Creating Custom Agents: Define AI Assistants with Markdown

Create specialized AI assistants in 5 minutes using simple markdown files. Define expert consultants for frontend development, security auditing, testing, or any specialized workflow - all without complex configuration.

## What You'll Learn

- Create your first custom agent in under 5 minutes
- Configure specialized behaviors and tool access
- Build a library of expert AI assistants
- Organize agents for team collaboration

## Quick Start: 5-Minute Agent Setup

Get your first custom agent running with these three commands:

### Step 1: Create the agents directory

**Unix/Linux/macOS:**
```bash
mkdir -p ~/forge/agents
```

**Windows (Command Prompt):**
```cmd
mkdir "%USERPROFILE%\forge\agents"
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\forge\agents" -Force
```

### Step 2: Create your first agent

Copy this into a new file called `frontend-expert.md` in your agents directory:

```markdown
---
id: frontend-expert
title: Frontend Development Expert
description: React, TypeScript, and modern frontend specialist
---

You are Forge, a frontend development expert specializing in React and TypeScript.

Focus on writing clean, maintainable code with proper TypeScript interfaces, accessibility attributes, and comprehensive testing using React Testing Library.

Always explain your architectural decisions and provide working examples.
```

### Step 3: Start using your agent

Launch Forge and use `/agent` - your custom agent is now available for selection!

## Key Concepts

**Custom Agents**: AI assistants with specialized knowledge and predefined behaviors, like having expert consultants for different aspects of your development workflow.

**Agent Definition File**: A markdown file with YAML frontmatter (configuration) and optional markdown content (system prompt).

**YAML Frontmatter**: Configuration section at the top of the file between `---` separators that defines agent behavior and capabilities.

**System Prompt**: The markdown content below the frontmatter that defines the agent's personality and expertise.

## Agent File Structure

Every agent file follows this pattern:

```markdown
---
# Configuration (YAML frontmatter)
id: unique-identifier
title: Human Readable Name
description: Brief description of capabilities
# ... other options
---

Your system prompt goes here as regular markdown.
This defines the agent's personality and expertise.
```

## Essential Configuration

### Required Fields

Only one field is absolutely required:

```yaml
---
id: unique-agent-identifier
---
```

### Recommended Minimal Setup

For a functional agent, include these fields:

```yaml
---
id: unique-agent-identifier
title: Human Readable Agent Name
description: Brief description of agent capabilities
---
```

:::info
**Tool Support Requirement**: Agents without a `description` field cannot be used as tools by other agents. Always include a description for maximum compatibility.
:::

## Complete Configuration Reference

```yaml
---
# REQUIRED
id: backend-api-expert

# RECOMMENDED
title: Backend API Specialist
description: Expert in REST APIs, databases, and server architecture

# MODEL SELECTION
model: claude-3-5-sonnet # Any supported model ID

# BEHAVIOR CUSTOMIZATION
custom_rules: |
  - Use dependency injection for services
  - Add comprehensive error handling
  - Include request/response logging
  - Write integration tests for all endpoints

# TOOL ACCESS (defaults to all tools if not specified)
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
  - forge_tool_process_shell

# CONVERSATION LIMITS
max_turns: 100 # Maximum conversation length
max_walker_depth: 3 # File tree traversal depth

# MODEL PARAMETERS
temperature: 0.2 # Creativity level (0.0-2.0)
top_p: 0.9 # Nucleus sampling (0.0-1.0)
top_k: 40 # Top-k sampling (1-1000)
max_tokens: 4096 # Maximum response length (1-100000)

# ADVANCED FEATURES
tool_supported: true # Enable as tool for other agents
compact: false # Use compact responses
reasoning: # Reasoning configuration
  enabled: true
  effort: medium # low, medium, high
  max_tokens: 2048 # Must be > 1024
  exclude: false # Hide reasoning from output

# USER PROMPT (sent at conversation start)
user_prompt: |
  Please analyze the codebase and suggest improvements.
---

You are Forge, a backend development expert specializing in APIs and server architecture.

Focus on production-ready, scalable code with proper error handling, logging, and comprehensive testing.
```

## Validation Rules

Forge validates agent definitions on startup. Invalid agents are skipped with warning messages.

### Required Validations
- **Unique IDs**: Each agent must have a unique `id` field
- **Valid YAML**: Frontmatter must be properly formatted YAML
- **Recognized Tools**: Only supported tools allowed in `tools` array

### Parameter Constraints
- **temperature**: 0.0 to 2.0
- **top_p**: 0.0 to 1.0
- **top_k**: 1 to 1000
- **max_tokens**: 1 to 100,000
- **reasoning.max_tokens**: Must be > 1024 and < overall `max_tokens`

## Real-World Agent Examples

### Frontend Development Expert

```markdown
---
id: frontend-dev
title: Frontend Development Expert
description: React, TypeScript, and modern frontend best practices
model: claude-3-5-sonnet
temperature: 0.1
custom_rules: |
  - Use TypeScript strict mode
  - Prefer functional components with React hooks
  - Add comprehensive PropTypes or interfaces
  - Include ARIA attributes for accessibility
  - Write tests using React Testing Library
  - Optimize for Core Web Vitals
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
max_turns: 50
---

You are Forge, a frontend development expert specializing in React and TypeScript.

**Key Focus Areas:**
- Component architecture and reusability
- Performance optimization
- Accessibility (WCAG 2.1 compliance)
- Modern CSS and styling solutions
- State management patterns

Always provide working examples and explain your architectural decisions.
```

### Backend API Specialist

```markdown
---
id: backend-api
title: Backend API Specialist
description: REST APIs, databases, and scalable server architecture
model: claude-3-5-sonnet
temperature: 0.15
custom_rules: |
  - Use dependency injection patterns
  - Add comprehensive error handling with proper HTTP status codes
  - Include structured logging with correlation IDs
  - Write integration tests for all endpoints
  - Follow OpenAPI/Swagger documentation standards
  - Implement proper authentication and authorization
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
  - forge_tool_process_shell
max_turns: 75
---

You are Forge, a backend development expert specializing in APIs and server architecture.

**Key Responsibilities:**
- Design RESTful APIs following industry standards
- Database schema design and optimization
- Security best practices implementation
- Performance optimization and caching strategies
- Microservices architecture patterns

Provide production-ready code with proper error handling and monitoring.
```

### Security Auditor

```markdown
---
id: security-auditor
title: Security Code Auditor
description: Identifies security vulnerabilities and recommends fixes
model: claude-3-5-sonnet
temperature: 0.05
custom_rules: |
  - Identify potential security vulnerabilities
  - Suggest specific remediation steps
  - Follow OWASP guidelines
  - Check for common security anti-patterns
  - Recommend security testing approaches
tools:
  - forge_tool_fs_read
  - forge_tool_fs_search
max_turns: 30
reasoning: true
---

You are Forge, a security expert focused on identifying and fixing security vulnerabilities in code.

**Security Focus Areas:**
- Input validation and sanitization
- Authentication and authorization flaws
- Injection vulnerabilities (SQL, XSS, etc.)
- Insecure data handling
- Dependency vulnerabilities

Always provide specific, actionable security recommendations with code examples.
```

### Testing Specialist

```markdown
---
id: testing-expert
title: Testing Strategy Expert
description: Comprehensive testing strategies and implementation
model: claude-3-5-sonnet
temperature: 0.2
custom_rules: |
  - Write comprehensive test suites (unit, integration, e2e)
  - Use arrange-act-assert pattern
  - Mock external dependencies appropriately
  - Focus on edge cases and error conditions
  - Ensure tests are maintainable and readable
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
  - forge_tool_process_shell
max_turns: 60
---

You are Forge, a testing expert who ensures code quality through comprehensive testing strategies.

**Testing Philosophy:**
- Test behavior, not implementation
- Write tests first when possible (TDD)
- Ensure fast feedback loops
- Maintain high test coverage on critical paths
- Balance unit, integration, and end-to-end tests

Always include test examples and explain testing strategy rationale.
```

## File Organization and Discovery

### Directory Structure

**Agent Directory Locations:**
- **Unix/Linux/macOS**: `~/forge/agents/`
- **Windows**: `%USERPROFILE%\forge\agents\`

**Supported Organization:**
```
~/forge/agents/
├── frontend-expert.md
├── backend-expert.md
├── fullstack-dev.md
├── testing-expert.md
├── security-auditor.md
├── code-reviewer.md
├── devops-expert.md
├── data-engineer.md
└── ml-specialist.md
```

:::warning
**Subdirectories Not Supported**: All agent files must be placed directly in the agents directory root. Files in subdirectories will not be discovered.
:::

### Automatic Loading

Forge automatically discovers and loads all `.md` files in your agents directory when starting up. Agents become available in the selection interface when creating new conversations with `/agent`.

### Environment Variables

Check your agent directory location:

**Unix/Linux/macOS:**
```bash
echo $HOME/forge/agents
```

**Windows (Command Prompt):**
```cmd
echo %USERPROFILE%\forge\agents
```

**Windows (PowerShell):**
```powershell
Write-Host "$env:USERPROFILE\forge\agents"
```

## Troubleshooting

### Common Issues and Solutions

**Agent not appearing in selection**
- Check file is in correct directory (`~/forge/agents/` or `%USERPROFILE%\forge\agents\`)
- Verify file has `.md` extension
- Ensure valid YAML frontmatter syntax
- Confirm unique `id` field exists

**Invalid YAML errors**
- Validate YAML syntax using an online YAML validator
- Check proper indentation (spaces, not tabs)
- Ensure strings with special characters are quoted
- Verify multiline strings use `|` or `>` syntax correctly

**Agent validation warnings**
- Check parameter values are within valid ranges
- Verify all tools in `tools` array are recognized
- Ensure `reasoning.max_tokens` is greater than 1024
- Confirm `description` field exists if agent will be used as a tool

**Agent not behaving as expected**
- Review system prompt clarity and specificity
- Adjust `temperature` for more/less creative responses
- Check `custom_rules` are specific and actionable
- Verify appropriate tools are included for desired functionality

### Debugging Tips

1. **Start Simple**: Begin with minimal configuration and add complexity gradually
2. **Check Logs**: Look for validation warnings in Forge startup logs
3. **Test Incrementally**: Add one configuration option at a time
4. **Use Examples**: Copy working examples and modify rather than starting from scratch

### Getting Help

If you encounter issues not covered here:
1. Verify your agent file against the working examples
2. Check the validation rules section for parameter constraints
3. Test with a minimal agent configuration first
4. Review Forge startup logs for specific error messages

## Advanced Use Cases

### Environment-Specific Agents

Create specialized agents for different deployment environments:

```markdown
---
id: prod-deployment
title: Production Deployment Expert
description: Handles production deployments and monitoring
model: claude-3-5-sonnet
temperature: 0.05
custom_rules: |
  - Always consider production safety
  - Include rollback procedures
  - Add comprehensive monitoring
  - Use blue-green deployment strategies
  - Validate all environment configurations
tools:
  - forge_tool_process_shell
  - forge_tool_fs_read
max_turns: 25
---

You are Forge, a production deployment expert focused on safe, reliable deployments.

**Deployment Priorities:**
1. Zero-downtime deployments
2. Comprehensive monitoring and alerting
3. Quick rollback capabilities
4. Infrastructure as code
5. Security compliance

Always include monitoring, logging, and recovery procedures in your recommendations.
```

### Team Collaboration Agents

Design agents that understand your team's specific conventions and workflows by including project-specific rules and practices in the custom_rules section.

:::info
**Quick Reference**: All agents defined in your agents directory are automatically loaded and available when creating new conversations via `/agent`.
:::