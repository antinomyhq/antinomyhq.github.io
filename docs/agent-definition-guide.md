# Agent Definition Guide: Creating Custom Agents

Need an agent that specializes in React development? Or one focused on security auditing? You can create custom agents tailored to your specific needs using simple markdown files.

## What Are Agents?

Think of agents like different specialists for your development team:

- **Agent**: A specialized AI assistant with specific expertise, tools, and behavior patterns - like having expert consultants for different development tasks
- **Agent Definition File**: A markdown file containing YAML configuration and system instructions that define the agent's capabilities and behavior
- **System Prompt**: The markdown content that defines the agent's personality, expertise, and specific instructions
- **Tools**: Specific capabilities an agent can use, such as reading files, running commands, or searching code

## What You'll Need

- Forge installed and running
- Access to create directories in your home folder
- Basic familiarity with YAML syntax

## Quick Start: Create Your First Agent

Follow these steps to create and use a custom agent in under 5 minutes:

### Step 1: Choose Your Agent Storage Location

You have two options for storing custom agents:

**Global Agents** (Recommended for most cases)

- Location: `~/forge/agents/` (Unix/macOS) or `%USERPROFILE%\forge\agents\` (Windows)
- Available across all projects and Forge sessions
- Use for general-purpose agents you'll reuse

**Project-Specific Agents**

- Location: `.forge/agents/` (in your project root - note the dot prefix)
- Override global agents with the same ID
- Use for project-specific customizations

### Step 2: Create the Agent Directory

**For Global Agents:**

```bash
# macOS/Linux
mkdir -p ~/forge/agents
ls -la ~/forge/agents

# Windows Command Prompt
mkdir "%USERPROFILE%\forge\agents"
dir "%USERPROFILE%\forge\agents"

# Windows PowerShell
New-Item -ItemType Directory -Path "$env:USERPROFILE\forge\agents" -Force
Get-ChildItem "$env:USERPROFILE\forge\agents"
```

**For Project-Specific Agents:**
**macOS/Linux:**

```bash
# macOS/Linux
mkdir -p .forge/agents
ls -la .forge/agents
```

**Windows Command Prompt:**

```cmd
mkdir ".forge\agents"
dir ".forge\agents"
```

**Windows PowerShell:**

```powershell
New-Item -ItemType Directory -Path ".forge\agents" -Force
Get-ChildItem ".forge\agents"
```

### Step 3: Create Your Agent Definition File

Create `frontend-expert.md` in your chosen directory:

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

**Important**: The filename can be anything ending in `.md`, but the `id` field in the YAML must be unique across all your agents.

### Step 4: Load Your Agent

1. Restart Forge to discover new agents
2. Use the `/agent` command to view available agents
3. Select "FRONTEND_EXPERT" from the list
4. Your custom agent is now active

## Agent Definition File Structure

Every agent definition file follows this structure:

```markdown
---
# YAML Configuration (frontmatter) - defines capabilities and behavior
id: unique-identifier
title: Human Readable Name
description: Brief description of capabilities
# Additional options...
---

Your system prompt content goes here as regular markdown.
This section defines the agent's expertise and specific instructions.
```

## Configuration Requirements and Validation

Forge validates all agent definitions during startup. Understanding these rules prevents common errors:

### Validation Rules

- **Unique IDs**: Each `id` must be unique across all agent definition files
- **Valid YAML**: Frontmatter must use proper YAML syntax (spaces, not tabs)
- **Recognized Tools**: Only supported tools allowed in the `tools` array
- **Parameter Ranges**: All numeric values must be within valid ranges (see table below)

### Parameter Constraints

| Parameter                   | Valid Range | Default  | Purpose                                     |
| --------------------------- | ----------- | -------- | ------------------------------------------- |
| `id`                        | Required    | -        | Must be unique across all agents            |
| `max_turns`                 | 0+          | 100      | Maximum conversation turns                  |
| `max_walker_depth`          | 0+          | 1        | File tree traversal depth                   |
| `max_tool_failure_per_turn` | 0+          | 3        | Max tool failures before completion         |
| `max_requests_per_turn`     | 0+          | 100      | Max requests in single turn                 |
| `temperature`               | 0.0 - 2.0   | Provider | Response creativity (0=precise, 2=creative) |
| `top_p`                     | 0.0 - 1.0   | 0.8      | Nucleus sampling threshold                  |
| `top_k`                     | 1 - 1000    | 30       | Top-k sampling limit                        |
| `max_tokens`                | 1 - 100,000 | 20480    | Maximum response length                     |

## Configuration Options

### Required Configuration

Only one field is mandatory:

```yaml
---
id: unique-agent-identifier
---
```

### Recommended Minimum Configuration

For agents that can be used as tools by other agents:

```yaml
---
id: unique-agent-identifier
title: Human Readable Agent Name
description: Brief description of agent capabilities
---
```

**Note**: Agents without a `description` field cannot be used as tools by other agents.

### Complete Configuration Reference

```yaml
---
# REQUIRED
id: backend-api-expert

# RECOMMENDED
title: Backend API Specialist
description: Expert in REST APIs, databases, and server architecture

# MODEL SELECTION
model: claude-sonnet-4 # Any supported model ID

# USER PROMPT (Template with Handlebars syntax)
user_prompt: |-
  {{#if (eq event.name 'backend-api-expert/user_task_update')}}
  <feedback>{{event.value}}</feedback>
  {{else}}
  <task>{{event.value}}</task>
  {{/if}}
  <system_time>{{current_time}}</system_time>

# BEHAVIOR CUSTOMIZATION
custom_rules: |
  - Use dependency injection for services
  - Add comprehensive error handling
  - Include request/response logging
  - Write integration tests for all endpoints

# TOOL ACCESS (specify which tools this agent can use)
tools:
  - read
  - write
  - patch
  - shell
  - search

# CONVERSATION LIMITS
max_turns: 100 # Maximum conversation length (default: 100)
max_walker_depth: 3 # File tree traversal depth (default: 1)
max_tool_failure_per_turn: 3 # Max tool failures before forcing completion (default: 3)
max_requests_per_turn: 10 # Max requests in a single turn (default: 100)

# MODEL PARAMETERS (All optional with validation)
temperature: 0.2 # Creativity level: 0.0 to 2.0 (default: provider default)
top_p: 0.9 # Nucleus sampling: 0.0 to 1.0 (default: 0.8)
top_k: 40 # Top-k sampling: 1 to 1000 (default: 30)
max_tokens: 4096 # Maximum response length: 1 to 100,000 tokens (default: 20480)

# CONTEXT COMPACTION (Optional - automatic context management)
compact:
  max_tokens: 2000 # Maximum tokens after compaction
  token_threshold: 100000 # Trigger compaction when context exceeds this
  retention_window: 6 # Number of recent messages to preserve
  message_threshold: 200 # Trigger compaction after this many messages (default: 200)
  turn_threshold: 50 # Trigger compaction after this many turns (optional)
  eviction_window: 0.2 # Percentage of context that can be summarized (0.0-1.0)
  model: claude-sonnet-4 # Model to use for compaction (optional)
  on_turn_end: false # Whether to compact at turn end (default: false)
  prompt: | # Custom compaction prompt (optional)
    Summarize the following conversation context while preserving key technical details.

# REASONING CONFIGURATION (Optional - for models that support reasoning)
reasoning:
  enabled: true # Enable reasoning mode (default: false)
  effort: medium # Reasoning effort: low, medium, high (optional)
  max_tokens: 2048 # Max tokens for reasoning (must be > 1024, < max_tokens)
  exclude: false # Hide reasoning from output (default: false)

# ADVANCED FEATURES
tool_supported: true # Enable this agent as a tool for other agents (default: true)
---
You are a backend development expert specializing in APIs and server architecture.

Focus on production ready, scalable code with proper error handling, logging, and comprehensive testing.
```

## Available Tools and When to Use Them

You can customize which tools each agent has access to. Here's when to use each tool:

### Built-in Tools

- **`read`** - Read files and directories
  - _Use for_: Code analysis, documentation review, configuration inspection
- **`write`** - Create and modify files
  - _Use for_: Generating new code, creating documentation, updating configurations
- **`patch`** - Apply targeted changes to files
  - _Use for_: Bug fixes, small modifications, refactoring
- **`remove`** - Delete files
  - _Use for_: Cleanup tasks, removing deprecated code
- **`shell`** - Execute shell commands
  - _Use for_: Running tests, building projects, system operations
- **`fetch`** - Retrieve external resources
  - _Use for_: API calls, downloading dependencies, checking external services
- **`search`** - Search within files
  - _Use for_: Finding code patterns, locating specific functions, analyzing codebases
- **`undo`** - Reverse previous changes
  - _Use for_: Error recovery, experimentation
- **`plan`** - Create implementation plans
  - _Use for_: Breaking down complex tasks, project planning
- **`followup`** - Ask clarifying questions
  - _Use for_: Gathering requirements, clarifying ambiguous requests
- **`attempt_completion`** - Present final results
  - _Use for_: Completing tasks, summarizing work done

### MCP Tools (External Integrations)

MCP (Model Context Protocol) tools connect your agents to external services. Once configured, they're automatically available to all agents without additional setup.

**Popular integrations:**

- Weather data for real-time information
- Database connections (PostgreSQL, MySQL)
- Email services for notifications
- Browser automation for testing

**Example**: After setting up a weather MCP server:

```yaml
tools:
  - read
  - write
  - search
  # get_weather is automatically available!
```

Use `/tools` in Forge to see all available tools (MCP tools are listed separately).

Learn more: [MCP Integration Guide](/docs/mcp-integration)

## Agent Examples

### Frontend Development Specialist

```markdown
---
id: frontend-dev
title: Frontend Development Expert
description: React, TypeScript, and modern frontend best practices
model: claude-sonnet-4
temperature: 0.1
custom_rules: |
  - Use TypeScript strict mode
  - Prefer functional components with React hooks
  - Add comprehensive PropTypes or TypeScript interfaces
  - Include ARIA attributes for accessibility
  - Write tests using React Testing Library
  - Optimize for Core Web Vitals
tools:
  - read
  - write
  - patch
max_turns: 50
---

You are a frontend development expert specializing in React and TypeScript.

## Key Focus Areas:

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
model: claude-sonnet-4
temperature: 0.15
custom_rules: |
  - Use dependency injection patterns
  - Add comprehensive error handling with proper HTTP status codes
  - Include structured logging with correlation IDs
  - Write integration tests for all endpoints
  - Follow OpenAPI/Swagger documentation standards
  - Implement proper authentication and authorization
tools:
  - read
  - write
  - patch
  - shell
max_turns: 75
---

You are a backend development expert specializing in APIs and server architecture.

## Key Responsibilities:

- Design RESTful APIs following industry standards
- Database schema design and optimization
- Security best practices implementation
- Performance optimization and caching strategies
- Microservices architecture patterns

Provide production ready code with proper error handling and monitoring.
```

### Security Code Auditor

```markdown
---
id: security-auditor
title: Security Code Auditor
description: Identifies security vulnerabilities and recommends fixes
model: claude-sonnet-4
temperature: 0.05
custom_rules: |
  - Identify potential security vulnerabilities
  - Suggest specific remediation steps
  - Follow OWASP guidelines
  - Check for common security anti-patterns
  - Recommend security testing approaches
tools:
  - read
  - search
max_turns: 30
reasoning:
  enabled: true
---

You are a security expert focused on identifying and fixing security vulnerabilities in code.

## Security Focus Areas:

- Input validation and sanitization
- Authentication and authorization flaws
- Injection vulnerabilities (SQL, XSS, CSRF)
- Insecure data handling
- Dependency vulnerabilities

Always provide specific, actionable security recommendations with code examples.
```

## Customizing Built-in Agents

Instead of creating agents from scratch, you can customize Forge's built-in agents (Forge, Muse, Sage, Parker, Prime) to match your project needs.

### How Customization Works

Forge loads agents in this priority order:

1. **Project-specific** (`.forge/agents/` - highest priority)
2. **Global** (`~/forge/agents/`)
3. **Built-in** (embedded in Forge - lowest priority)

The filename doesn't matter - only the `id` field in the YAML frontmatter must match the built-in agent you want to override.

### Setting Up Agent Customization

Create a markdown file in your agents directory with the appropriate `id`:

- `id: "forge"` - customize the Forge agent
- `id: "muse"` - customize the Muse agent
- `id: "sage"` - customize the Sage agent
- `id: "parker"` - customize the Parker agent
- `id: "prime"` - customize the Prime agent

### Customization Example

Here's how to customize the Forge agent for frontend development. Create `my-custom-forge.md` in `.forge/agents/`:

```markdown
---
id: "forge"
title: "Frontend-Focused Forge"
description: "Forge agent specialized for frontend development with React and TypeScript"
reasoning:
  enabled: true
tools:
  - read
  - write
  - patch
  - shell
---

You are a specialized development agent for our React TypeScript project.

## Your Frontend Focus:

- **React & TypeScript**: Build modern, type-safe components
- **UI/UX**: Create responsive, accessible interfaces
- **Performance**: Optimize for Core Web Vitals and user experience
- **Testing**: Write comprehensive tests for components and user interactions
- **Best Practices**: Follow modern frontend patterns and conventions

## Your Approach:

- Always explain your architectural decisions
- Provide working code examples with proper TypeScript types
- Include accessibility considerations (ARIA attributes, semantic HTML)
- Suggest performance optimizations when relevant
- Write tests alongside implementation

You maintain all of Forge's capabilities but with deep frontend expertise.
```

## Troubleshooting

### Common Issues and Solutions

**Agent not appearing in selection list**

1. Verify file location:
   - Global: `~/forge/agents/` or `%USERPROFILE%\forge\agents\`
   - Project: `.forge/agents/` (note the dot prefix)
2. Ensure `.md` file extension
3. Check YAML frontmatter is valid
4. Confirm `id` field exists and is unique
5. Restart Forge to reload agents

**"Invalid YAML" errors**

1. Use an online YAML validator to check syntax
2. Use spaces for indentation, not tabs
3. Quote strings containing special characters
4. Use `|` for multiline strings with preserved line breaks
5. Use `>` for multiline strings with folded line breaks

**Agent validation warnings**

1. Check parameter values are within valid ranges (see constraints table)
2. Verify all tools in `tools` array are recognized
3. Ensure `reasoning.max_tokens` > 1024 and < `max_tokens`
4. Add `description` field if agent will be used as a tool

**Agent not behaving as expected**

1. Review system prompt for clarity and specificity
2. Adjust `temperature` (lower = more consistent responses)
3. Make `custom_rules` more specific and actionable
4. Verify appropriate tools are included
5. Check model supports requested features

### Error Message Reference

- `"Agent with id 'example' already exists"` → Duplicate agent ID found
- `"Invalid temperature value: 3.0"` → Temperature outside 0.0-2.0 range
- `"Unknown tool: invalid_tool"` → Tool name not recognized
- `"reasoning.max_tokens must be greater than 1024"` → Reasoning tokens too low

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
3. **Share Configurations**: Version control agent definition files with your project
4. **Establish Conventions**: Create team standards for agent organization
5. **Regular Review**: Update agents as project requirements evolve

## Advanced Configuration

### Dynamic Prompt Templates

Agent prompts support Handlebars template variables for context-aware behavior:

**System Prompt Variables:**

- `{{current_time}}` - Current timestamp
- `{{env.cwd}}` - Current working directory path
- `{{env.os}}` - Operating system (macOS, Linux, Windows)
- `{{env.shell}}` - Shell type (bash, zsh, PowerShell)

**User Prompt Variables:**

- `{{current_time}}` - Current timestamp
- `{{event.name}}` - Event identifier (e.g., "agent-id/user_task_init")
- `{{event.value}}` - Event payload (user's message, feedback, or task data)

### Environment-Specific Agents

Create specialized agents for different deployment contexts:

```markdown
---
id: prod-deployment
title: Production Deployment Expert
description: Handles production deployments with safety and monitoring focus
model: claude-sonnet-4
temperature: 0.05
custom_rules: |
  - Always consider production safety first
  - Include rollback procedures in all deployments
  - Add comprehensive monitoring and alerting
  - Use blue-green deployment strategies
  - Validate all environment configurations before deployment
tools:
  - read
  - write
  - shell
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

Different models work better with different configurations:

```yaml
# For creative tasks
model: claude-sonnet-4
temperature: 0.7
top_p: 0.9

# For precise technical tasks
model: claude-sonnet-4
temperature: 0.1
top_p: 0.8

# For reasoning-heavy tasks
model: claude-sonnet-4
temperature: 0.2
reasoning: true
```

## Getting Help

If you encounter issues not covered in this guide:

1. Check Forge startup logs for specific error messages and warnings
2. Test with a minimal agent configuration first to isolate issues
3. Verify your agent definition against the working examples provided
4. Check the Forge documentation for updated tool lists and configuration options
5. Consult the Forge community or support channels for additional assistance

Remember: Custom agents are powerful tools for streamlining your development workflow. Start with simple configurations and gradually add complexity as you become familiar with the options.
