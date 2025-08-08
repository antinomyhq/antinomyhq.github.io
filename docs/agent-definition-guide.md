import CustomLink from '@site/src/components/shared/CustomLink'

# Creating Custom Agents: Define AI Assistants with Markdown

Forge now supports defining custom agents using markdown files with YAML frontmatter. This powerful feature lets you create specialized AI assistants tailored to specific tasks, workflows, or domains - all using simple markdown files that live in your agents directory.

## What Are Custom Agents?

Custom agents are AI assistants with predefined configurations, specialized knowledge, and specific behaviors. Think of them as expert consultants for different aspects of your development workflow - a frontend specialist, a testing expert, or a security auditor.

Each agent is defined in a markdown file with YAML frontmatter containing configuration options and an optional markdown body for additional context or instructions.

:::info

  <p><strong>Quick Reference</strong></p>
  All agents defined in your agents directory are automatically loaded and available when creating new conversations via `/agent`.
:::

## Platform-Specific Notes

### Directory Paths

Forge uses different default locations for the agents directory depending on your operating system:

| Operating System | Agent Directory Path |
|-----------------|---------------------|
| **Unix/Linux/macOS** | `~/forge/agents/` |
| **Windows** | `%USERPROFILE%\forge\agents\` |

### Environment Variables

If you need to check your user profile location:

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

## Quick Start: Your First Custom Agent

Create a directory for your agents and add your first agent file:

### Creating the Agents Directory

**On Unix/Linux/macOS:**
```bash
mkdir -p ~/forge/agents
```

**On Windows (Command Prompt):**
```cmd
mkdir "%USERPROFILE%\forge\agents"
```

**On Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\forge\agents" -Force
```

### Creating Your First Agent

Create your first agent file in the agents directory:

**Unix/Linux/macOS:** `~/forge/agents/frontend-expert.md`
**Windows:** `%USERPROFILE%\forge\agents\frontend-expert.md`

```markdown
---
id: frontend-expert
title: Frontend Development Expert
description: Specialized in React, TypeScript, and modern frontend practices
model: claude-3-5-sonnet
custom_rules: |
  - Use TypeScript strict mode
  - Prefer functional components with hooks
  - Add comprehensive PropTypes or TypeScript interfaces
  - Include accessibility attributes
  - Write unit tests using React Testing Library
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
max_turns: 50
temperature: 0.1
---

You are Forge, a frontend development expert specializing in React and TypeScript. 
You focus on writing clean, maintainable, and accessible code that follows modern best practices.

Always consider performance implications and user experience when making recommendations.
```

Now when you use `/agent` in Forge, your custom agent will be available for selection!

## Agent Configuration Reference

### Required Fields

Based on the agent structure, only the `id` field is truly required:

```yaml
---
id: unique-agent-identifier
---
```

However, for the agent to be useful, you'll typically want to include:

```yaml
---
id: unique-agent-identifier
title: Human Readable Agent Name        # Optional but recommended
description: Brief description         # Optional but recommended for tool definitions
---
```

:::info

  <p><strong>Agent Validation</strong></p>
  While only `id` is technically required, agents without a `description` cannot be used as tools in other contexts. For maximum compatibility, include both `title` and `description`.
:::

### Core Configuration

```yaml
---
# Required field
id: backend-api-expert

# Recommended fields
title: Backend API Specialist
description: Expert in REST APIs, databases, and server architecture

# Tool support flag
tool_supported: true           # Enable/disable tool support (default: true if not specified)

# Model selection
model: claude-3-5-sonnet       # Any supported model ID

# Custom behavior rules
custom_rules: |
  - Use dependency injection for services
  - Add comprehensive error handling
  - Include request/response logging
  - Write integration tests for all endpoints
  - Follow REST API conventions

# Available tools (defaults to all tools if not specified)
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
  - forge_tool_process_shell

# Event subscriptions
subscribe:
  - file_change
  - test_result

# Conversation limits
max_turns: 100                 # Maximum conversation turns
max_walker_depth: 3            # Maximum file tree traversal depth

# Model parameters
temperature: 0.2               # Creativity level (0.0-2.0)
top_p: 0.9                    # Nucleus sampling parameter (0.0-1.0)
top_k: 40                     # Top-k sampling parameter (1-1000)
max_tokens: 4096              # Maximum response length (1-100000)

# Advanced features
compact: false                # Use compact responses (boolean or object)
reasoning:                    # Reasoning configuration
  enabled: true              # Enable reasoning mode
  effort: medium             # Effort level: low, medium, high
  max_tokens: 2048          # Max tokens for reasoning (> 1024)
  exclude: false            # Hide reasoning from output
---

You are Forge, a backend development expert specializing in APIs and server architecture.

Focus on writing production-ready, scalable code with proper error handling, logging, and comprehensive testing. Always consider security best practices and performance optimization.

**Your key responsibilities:**
- Design RESTful APIs following industry standards
- Database schema design and optimization  
- Implement proper authentication and authorization
- Provide monitoring and observability guidance
```

:::info

  <p><strong>System Prompt Placement</strong></p>
  The system prompt is NOT included in the frontmatter above. Instead, it should be written in the markdown content section after the closing `---` separator, as shown in the System and User Prompts section below.
:::

### System and User Prompts

The system prompt is written in the markdown content section (after the `---` separator), while configuration goes in the frontmatter:

```markdown
---
id: testing-specialist
title: Testing Expert
description: Specializes in comprehensive testing strategies

# User message prompt
user_prompt: |
  Please analyze the codebase and suggest appropriate testing improvements.
  Consider unit tests, integration tests, and end-to-end testing strategies.
---

You are Forge, a testing expert who ensures code quality through comprehensive testing strategies.
Focus on test coverage, edge cases, and maintainable test code.

**Your specialization includes:**
- Unit testing strategies
- Integration testing approaches  
- Test-driven development
- Mock and stub patterns
- Performance testing considerations
```

:::info

  <p><strong>Content Structure</strong></p>
  - **Frontmatter** (between `---` separators): Configuration like `id`, `title`, `user_prompt`, etc.
  - **Markdown content** (after frontmatter): The system prompt that defines the agent's behavior and personality
:::

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

## Advanced Features

### Environment-Specific Configuration

You can create environment-specific agents:

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

Always include monitoring, logging, and recovery procedures.
```

## Agent Discovery and Loading

### Automatic Loading

All markdown files in your agents directory are automatically discovered and loaded when Forge starts. The agents become available in the agent selection interface when you create a new conversation.

**Agent Directory Locations:**
- **Unix/Linux/macOS:** `~/forge/agents/`
- **Windows:** `%USERPROFILE%\forge\agents\`

### Agent Validation

Forge validates agent definitions on startup:

- **Required fields**: Only `id` is strictly required
- **Unique IDs**: Each agent must have a unique identifier  
- **Valid YAML**: Frontmatter must be valid YAML syntax
- **Supported tools**: Only recognized tools are allowed in the `tools` array
- **Parameter ranges**: 
  - `temperature`: 0.0 to 2.0
  - `top_p`: 0.0 to 1.0  
  - `top_k`: 1 to 1000
  - `max_tokens`: 1 to 100,000
  - `reasoning.max_tokens`: Must be > 1024 and < overall `max_tokens`
- **Tool definitions**: Agents without `description` cannot be used as tools in other contexts

Invalid agents are logged as warnings and skipped during loading.

### File Organization

All agent definition files must be placed directly in the agents directory. Subdirectories are not supported - the agent loader only reads `.md` files from the root agents directory.

**Correct file organization:**

**Unix/Linux/macOS:**
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

**Windows:**
```
%USERPROFILE%\forge\agents\
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

**Subdirectories Not Supported**

Do not create subdirectories within the agents directory. Files placed in subdirectories will not be discovered by the agent loader.

:::

**Naming suggestions for organization:**
- Use prefixes to group related agents: `frontend-expert.md`, `frontend-testing.md`
- Use descriptive names: `api-security-auditor.md`, `react-specialist.md`
- Keep agent IDs unique and meaningful: `devops-kubernetes`, `testing-e2e-specialist`

## Best Practices

### Naming Conventions

- **IDs**: Use kebab-case (`frontend-expert`, `testing-specialist`)
- **Titles**: Use title case (`Frontend Development Expert`)
- **Files**: Use descriptive names matching the agent purpose

### Configuration Guidelines

**Temperature Settings:**
- `0.0-0.1`: Precise, deterministic responses (security, production)
- `0.1-0.3`: Balanced creativity and consistency (general development)
- `0.3-0.5`: More creative responses (brainstorming, architecture)

**Tool Selection:**
- Include only tools the agent actually needs
- Security-focused agents might only need read access
- Development agents typically need file manipulation tools

**Custom Rules:**
- Be specific about coding standards and practices
- Include testing requirements
- Specify architectural patterns to follow

### Testing Your Agents

1. **Create and test** new agents with simple tasks first
2. **Validate responses** match your intended agent behavior
3. **Iterate on rules** based on actual usage patterns
4. **Check consistency** across multiple conversations

## Troubleshooting

### Common Issues

**Agent not appearing in selection:**
- Check YAML syntax with a validator
- Ensure the `id` field is present and unique
- Verify the file is in your agents directory:
  - **Unix/Linux/macOS:** `~/forge/agents/`
  - **Windows:** `%USERPROFILE%\forge\agents\`
- Check parameter ranges (temperature, top_p, top_k, max_tokens)
- Restart Forge after making changes

**Agent behaving unexpectedly:**
- Review custom rules for conflicts
- Check temperature settings (too high = unpredictable)
- Verify tool permissions match intended usage
- Test with simpler prompts first

**Performance issues:**
- Reduce `max_turns` for focused agents
- Lower `temperature` for more predictable responses
- Limit `tools` to only necessary ones
- Use `compact: true` for shorter responses

## Migration Guide

### From Manual Prompts to Custom Agents

If you've been manually entering specialized prompts, convert them to agents:

1. **Identify patterns** in your manual prompts
2. **Extract configuration** (model preferences, rules, tools)
3. **Create agent files** with appropriate frontmatter
4. **Test and refine** based on actual usage

### Sharing Agents Across Teams

**Team Agent Repository:**
1. Create a shared `agents` directory in version control
2. Symlink team agents to individual `~/forge/agents` folders
3. Use environment variables for team-specific customization

**Agent Templates:**

**Unix/Linux/macOS:**
```bash
# Create team template
cp ~/forge/agents/frontend-expert.md ~/team-agents/templates/

# Customize for individual use
cp ~/team-agents/templates/frontend-expert.md ~/forge/agents/my-frontend-expert.md
```

**Windows (Command Prompt):**
```cmd
rem Create team template
copy "%USERPROFILE%\forge\agents\frontend-expert.md" "%USERPROFILE%\team-agents\templates\"

rem Customize for individual use
copy "%USERPROFILE%\team-agents\templates\frontend-expert.md" "%USERPROFILE%\forge\agents\my-frontend-expert.md"
```

**Windows (PowerShell):**
```powershell
# Create team template
Copy-Item "$env:USERPROFILE\forge\agents\frontend-expert.md" "$env:USERPROFILE\team-agents\templates\"

# Customize for individual use
Copy-Item "$env:USERPROFILE\team-agents\templates\frontend-expert.md" "$env:USERPROFILE\forge\agents\my-frontend-expert.md"
```

