import CustomLink from '@site/src/components/shared/CustomLink'

# Agent Definition Guide: Creating Custom AI Assistants

Create specialized AI assistants using simple markdown files. Define expert consultants for frontend development, security auditing, testing, or any specialized workflow without complex configuration.

## Prerequisites

Before creating custom agents, ensure you have:

- Forge installed and running
- Access to create directories in your home folder
- Basic familiarity with YAML syntax

## Key Concepts

**Agent**: A specialized AI assistant with predefined knowledge, behavior, and tool access - like having expert consultants for different development tasks.

**Agent Definition File**: A markdown file containing YAML configuration (frontmatter) and an optional system prompt that defines the agent's expertise.

**System Prompt**: The markdown content below the YAML frontmatter that defines the agent's personality, expertise, and behavior.

**Tools**: Specific capabilities an agent can use, such as reading files, running shell commands, or searching code.

## Quick Start: Create Your First Agent

Follow these steps to create and use a custom agent in under 5 minutes:

### Step 1: Create the agents directory

**macOS/Linux:**

```bash
mkdir -p ~/forge/agents
ls -la ~/forge/agents # Verify directory was created
```

**Windows Command Prompt:**

```cmd
mkdir "%USERPROFILE%\forge\agents"
dir "%USERPROFILE%\forge\agents"
```

**Windows PowerShell:**

```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\forge\agents" -Force
Get-ChildItem "$env:USERPROFILE\forge\agents"
```

### Step 2: Create your agent definition file

Create a file named `frontend-expert.md` in your agents directory with this content:

```markdown
---
id: frontend-expert
title: Frontend Development Expert
description: React, TypeScript, and modern frontend specialist
---

You are a frontend development expert specializing in React and TypeScript.

Focus on writing clean, maintainable code with proper TypeScript interfaces, accessibility attributes, and comprehensive testing using React Testing Library.

Always explain your architectural decisions and provide working examples.
```

### Step 3: Restart Forge and select your agent

1. Restart Forge to load the new agent
2. Use the `/agent` command to start a new conversation
3. Select "Frontend Development Expert" from the agent list
4. Your custom agent is now active and ready to use

## Agent File Structure

Every agent definition file follows this structure:

```markdown
---
# YAML Configuration (frontmatter)
id: unique-identifier
title: Human Readable Name
description: Brief description of capabilities
# Additional configuration options...
---

Your system prompt content goes here as regular markdown.
This section defines the agent's personality, expertise, and specific instructions.
```

## Configuration Reference

### Required Configuration

Only one field is mandatory:

```yaml
---
id: unique-agent-identifier
---
```

### Recommended Minimum Configuration

For a functional agent that can be used as a tool by other agents:

```yaml
---
id: unique-agent-identifier
title: Human Readable Agent Name
description: Brief description of agent capabilities
---
```

:::info
**Tool Compatibility**: Agents without a `description` field cannot be used as tools by other agents. Always include a description for maximum compatibility.
:::

### Complete Configuration Options

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

# TOOL ACCESS (defaults to all available tools if not specified)
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
  - forge_tool_process_shell

# CONVERSATION LIMITS
max_turns: 100           # Maximum conversation length (default: 100)
max_walker_depth: 3      # File tree traversal depth (default: 3)

# MODEL PARAMETERS
temperature: 0.2         # Creativity level: 0.0 (deterministic) to 2.0 (very creative)
top_p: 0.9              # Nucleus sampling: 0.0 to 1.0
top_k: 40               # Top-k sampling: 1 to 1000
max_tokens: 4096        # Maximum response length: 1 to 100,000 tokens

# ADVANCED FEATURES
tool_supported: true     # Enable this agent as a tool for other agents (default: true)
compact: false          # Use compact response format (default: false)
reasoning: true              # Reasoning configuration (optional)
  max_tokens: 2048       # Must be > 1024 and < overall max_tokens
  exclude: false         # Hide reasoning from output (default: false)

# USER PROMPT (sent at conversation start)
user_prompt: |
  Please analyze the codebase and suggest improvements.
---

You are a backend development expert specializing in APIs and server architecture.

Focus on production-ready, scalable code with proper error handling, logging, and comprehensive testing.
```

## Validation Rules and Constraints

Forge validates all agent definitions during startup. Invalid agents are skipped with warning messages in the logs.

### Validation Requirements

- **Unique IDs**: Each agent must have a unique `id` field across all agent files
- **Valid YAML**: Frontmatter must be properly formatted YAML syntax
- **Recognized Tools**: Only supported tools are allowed in the `tools` array
- **Parameter Ranges**: All numeric parameters must be within valid ranges

### Parameter Constraints

| Parameter              | Valid Range | Default | Notes                             |
| ---------------------- | ----------- | ------- | --------------------------------- |
| `temperature`          | 0.0 - 2.0   | 0.7     | Higher values increase creativity |
| `top_p`                | 0.0 - 1.0   | 0.9     | Nucleus sampling threshold        |
| `top_k`                | 1 - 1000    | 40      | Top-k sampling limit              |
| `max_tokens`           | 1 - 100,000 | 4096    | Maximum response length           |
| `max_turns`            | 1 - 1000    | 100     | Conversation length limit         |
| `reasoning.max_tokens` | 1024+       | 2048    | Must be less than `max_tokens`    |

## Available Tools

The following tools can be included in the `tools` array:

- `forge_tool_fs_read` - Read file contents
- `forge_tool_fs_create` - Create new files
- `forge_tool_fs_patch` - Modify existing files
- `forge_tool_fs_search` - Search files and directories
- `forge_tool_process_shell` - Execute shell commands
- `forge_tool_net_fetch` - Fetch web content
- Additional tools may be available depending on your Forge installation

## Agent Examples

### Frontend Development Specialist

```markdown
---
id: frontend-dev
title: Frontend Development Expert
description: React, TypeScript, and modern frontend best practices
model: claude-3-5-sonnet-20241022
temperature: 0.1
custom_rules: |
  - Use TypeScript strict mode
  - Prefer functional components with React hooks
  - Add comprehensive PropTypes or TypeScript interfaces
  - Include ARIA attributes for accessibility
  - Write tests using React Testing Library
  - Optimize for Core Web Vitals
tools:
  - forge_tool_fs_read
  - forge_tool_fs_create
  - forge_tool_fs_patch
max_turns: 50
---

You are a frontend development expert specializing in React and TypeScript.

## Key Focus Areas

- Component architecture and reusability
- Performance optimization techniques
- Accessibility (WCAG 2.1 compliance)
- Modern CSS and styling solutions
- State management patterns

Always provide working code examples and explain your architectural decisions.
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

You are a backend development expert specializing in APIs and server architecture.

## Key Responsibilities

- Design RESTful APIs following industry standards
- Database schema design and optimization
- Security best practices implementation
- Performance optimization and caching strategies
- Microservices architecture patterns

Provide production-ready code with proper error handling and monitoring.
```

### Security Code Auditor

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

You are a security expert focused on identifying and fixing security vulnerabilities in code.

## Security Focus Areas

- Input validation and sanitization
- Authentication and authorization flaws
- Injection vulnerabilities (SQL, XSS, CSRF)
- Insecure data handling
- Dependency vulnerabilities

Always provide specific, actionable security recommendations with code examples.
```

### Testing Strategy Expert

```markdown
---
id: testing-expert
title: Testing Strategy Expert
description: Comprehensive testing strategies and implementation
model: claude-3-5-sonnet-20241022
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

You are a testing expert who ensures code quality through comprehensive testing strategies.

## Testing Philosophy

- Test behavior, not implementation details
- Write tests first when possible (TDD approach)
- Ensure fast feedback loops
- Maintain high test coverage on critical paths
- Balance unit, integration, and end-to-end tests

Always include test examples and explain your testing strategy rationale.
```

## File Organization

### Directory Structure

Agents must be placed in the following directory:

- **macOS/Linux**: `~/forge/agents/`
- **Windows**: `%USERPROFILE%\forge\agents\`

Example organization:

```
~/forge/agents/
├── frontend-expert.md
├── backend-expert.md
├── testing-expert.md
├── security-auditor.md
├── code-reviewer.md
├── devops-expert.md
└── data-engineer.md
```

:::warning
**Important**: Subdirectories are not supported. All agent definition files must be placed directly in the `agents` directory root. Files in subdirectories will not be discovered by Forge.
:::

### Automatic Discovery

Forge automatically discovers and loads all `.md` files in your agents directory when starting up. Loaded agents become available in the agent selection interface when using the `/agent` command.

## Troubleshooting

### Common Issues

**Problem**: Agent not appearing in selection list

**Solutions**:

1. Verify the file is in the correct directory (`~/forge/agents/` or `%USERPROFILE%\forge\agents\`)
2. Ensure the file has a `.md` extension
3. Check that the YAML frontmatter is valid
4. Confirm the `id` field exists and is unique
5. Restart Forge to reload agents

**Problem**: "Invalid YAML" error messages

**Solutions**:

1. Validate YAML syntax using an online YAML validator
2. Check proper indentation (use spaces, not tabs)
3. Quote strings containing special characters
4. Use `|` for multiline strings with preserved line breaks
5. Use `>` for multiline strings with folded line breaks

**Problem**: Agent validation warnings

**Solutions**:

1. Check parameter values are within valid ranges (see constraints table)
2. Verify all tools in the `tools` array are recognized
3. Ensure `reasoning.max_tokens` is greater than 1024 and less than `max_tokens`
4. Add a `description` field if the agent will be used as a tool

**Problem**: Agent not behaving as expected

**Solutions**:

1. Review system prompt for clarity and specificity
2. Adjust `temperature` value (lower for more consistent responses)
3. Make `custom_rules` more specific and actionable
4. Verify appropriate tools are included for desired functionality
5. Check that the model supports the requested features

### Debugging Steps

1. **Start Simple**: Begin with minimal configuration and add complexity gradually
2. **Check Startup Logs**: Look for validation warnings when Forge starts
3. **Test Incrementally**: Add one configuration option at a time
4. **Validate YAML**: Use online YAML validators to check syntax
5. **Use Working Examples**: Copy working examples and modify rather than starting from scratch

### Error Message Examples

Common validation errors and their meanings:

- `"Agent with id 'example' already exists"` - Duplicate agent ID found
- `"Invalid temperature value: 3.0"` - Temperature outside valid range (0.0-2.0)
- `"Unknown tool: invalid_tool"` - Tool name not recognized
- `"reasoning.max_tokens must be greater than 1024"` - Reasoning tokens too low

## Best Practices

### Writing Effective System Prompts

1. **Be Specific**: Define clear responsibilities and focus areas
2. **Include Examples**: Show the type of output you expect
3. **Set Boundaries**: Specify what the agent should and shouldn't do
4. **Use Structure**: Organize instructions with headers and lists
5. **Test Iteratively**: Refine prompts based on agent behavior

### Configuration Tips

1. **Start Conservative**: Use lower temperature values for consistent behavior
2. **Limit Tools**: Only include tools the agent actually needs
3. **Set Appropriate Limits**: Configure `max_turns` based on expected conversation length
4. **Use Custom Rules**: Add specific guidelines for your project or team
5. **Enable Reasoning**: Use reasoning mode for complex problem-solving agents

### Team Collaboration

1. **Consistent Naming**: Use descriptive, consistent agent IDs and titles
2. **Document Purpose**: Write clear descriptions explaining each agent's role
3. **Share Configurations**: Version control agent definitions with your project
4. **Establish Conventions**: Create team standards for agent organization
5. **Regular Review**: Update agents as project requirements evolve

## Advanced Configuration

### Environment-Specific Agents

Create specialized agents for different deployment environments:

```markdown
---
id: prod-deployment
title: Production Deployment Expert
description: Handles production deployments with safety and monitoring focus
model: claude-3-5-sonnet-20241022
temperature: 0.05
custom_rules: |
  - Always consider production safety first
  - Include rollback procedures in all deployments
  - Add comprehensive monitoring and alerting
  - Use blue-green deployment strategies
  - Validate all environment configurations before deployment
tools:
  - forge_tool_process_shell
  - forge_tool_fs_read
max_turns: 25
reasoning:
  enabled: true
  effort: high
---

You are a production deployment expert focused on safe, reliable deployments.

## Deployment Priorities

1. Zero-downtime deployments
2. Comprehensive monitoring and alerting
3. Quick rollback capabilities
4. Infrastructure as code
5. Security compliance

Always include monitoring, logging, and recovery procedures in your recommendations.
```

### Model-Specific Optimization

Different models may work better with different configurations:

```yaml
# For creative tasks (Claude)
model: claude-3-5-sonnet-20241022
temperature: 0.7
top_p: 0.9

# For precise technical tasks
model: claude-3-5-sonnet-20241022
temperature: 0.1
top_p: 0.8

# For reasoning-heavy tasks
model: claude-3-5-sonnet-20241022
temperature: 0.2
reasoning: true
```

## Getting Help

If you encounter issues not covered in this guide:

1. Check the Forge documentation for updated tool lists and configuration options
2. Verify your agent definition against the working examples provided
3. Review Forge startup logs for specific error messages and warnings
4. Test with a minimal agent configuration first to isolate issues
5. Consult the Forge community or support channels for additional assistance

Remember: Custom agents are powerful tools for streamlining your development workflow. Start simple and gradually add complexity as you become more familiar with the configuration options.
