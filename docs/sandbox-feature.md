# Sandbox - Isolated Agent Workspaces

Sandbox in Forge creates isolated development environments using Git worktrees. This allows agents to work on different tasks, experiments, or features in parallel without interfering with each other or your main codebase.

## Why Sandboxes Matter for Agent Work

**TL;DR**: Agents work better when they have isolated workspaces. Sandboxes give each agent task its own environment, preventing conflicts and enabling true parallel execution.

Traditional single-workspace approach:

```bash
# Agent 1 is refactoring authentication
forge "refactor the auth module"

# Agent 2 needs to fix a bug, but has to wait
# Or worse, both agents modify the same files simultaneously
```

Sandbox workflow with agents:

```bash
# Agent 1 works on auth refactoring in isolated sandbox
forge --sandbox refactor-auth "refactor the auth module"

# Agent 2 fixes bug in separate sandbox (simultaneously)
forge --sandbox bugfix-payment "fix payment validation bug"

# Both agents work independently, no conflicts
```

With sandboxes, each agent task gets its own isolated directory. No conflicts, no waiting, no interference between parallel operations.

## How It Works

```
your-project/           # Your main repository
├── src/
├── package.json
└── README.md

../refactor-auth/       # Agent 1's isolated workspace
├── src/               # Same files, independent changes
├── package.json
└── README.md

../bugfix-payment/      # Agent 2's isolated workspace
├── src/               # Same files, different changes
├── package.json
└── README.md
```

Each sandbox creates a **Git worktree** - a separate working directory that shares the same `.git` repository but allows independent changes, branches, and agent operations.

## Basic Usage

### Creating a New Sandbox for Agent Work

```bash
# Create a sandbox for authentication work
forge --sandbox feature-auth "implement JWT authentication"
```

This command:

1. Checks if you're in a Git repository (required)
2. Creates a new worktree in `../feature-auth/`
3. Creates a new branch named `feature-auth` (if it doesn't exist)
4. Starts Forge agent in the isolated sandbox directory
5. Agent works exclusively in this environment

### Reusing an Existing Sandbox

If a sandbox already exists, Forge will detect it and let the agent continue work there:

```bash
# Agent continues work in existing sandbox
forge --sandbox feature-auth "add refresh token support"
```

The system will show:

```
Worktree [Reused]
../feature-auth/
```

## Agent-Specific Use Cases

### Parallel Feature Development

Run multiple agents simultaneously on different features:

```bash
# Terminal 1: Agent working on authentication
forge --sandbox feature-auth "implement OAuth2 flow"

# Terminal 2: Agent working on payments
forge --sandbox feature-payments "integrate Stripe API"

# Terminal 3: Agent working on UI
forge --sandbox feature-dashboard "redesign user dashboard"
```

Each agent operates independently without interfering with others.

### Safe Experimentation

Let agents try different approaches without risk:

```bash
# Agent tries architectural approach A
forge --sandbox experiment-redux "refactor state management with Redux"

# Agent tries architectural approach B
forge --sandbox experiment-zustand "refactor state management with Zustand"

# Compare results, keep the better implementation
```

### Incremental Refactoring

Break large refactoring tasks into isolated sandbox sessions:

```bash
# Session 1: Agent refactors data layer
forge --sandbox refactor-data-layer "migrate database queries to Prisma"

# Session 2: Agent refactors API layer
forge --sandbox refactor-api-layer "convert REST endpoints to GraphQL"

# Session 3: Agent refactors frontend
forge --sandbox refactor-frontend "update components to use new API"
```

### Bug Investigation and Fixes

Isolate bug fixes from ongoing feature work:

```bash
# Main work continues in default workspace
forge "continue implementing user profiles"

# Bug fix happens in separate sandbox
forge --sandbox hotfix-login "fix OAuth redirect loop"

# Main work remains untouched, bug fix can be merged independently
```

## Requirements and Best Practices

### Requirements

- **Git Repository**: Must be inside a Git repository
- **Parent Directory Access**: Sandboxes are created in parent directory of repo root
- **Unique Names**: Each sandbox name must be unique

## Managing Agent Sandboxes

### Viewing Active Sandboxes

```bash
# List all active worktrees/sandboxes
git worktree list
```

Shows all sandboxes where agents have been working.

### Cleanup After Agent Work

Sandboxes persist after agent completes work. Clean up regularly:

```bash
# Remove completed sandbox (run from main repository)
git worktree remove ../feature-auth

# Or delete directory and prune
rm -rf ../feature-auth
git worktree prune

# List remaining sandboxes
git worktree list
```

:::tip

Clean up sandboxes after merging changes to keep your workspace organized.

:::

## When to Use Sandboxes (Decision Tree)

**Use a sandbox when:**

- Running multiple agents on different tasks simultaneously
- Agent is experimenting with different approaches
- You want to preserve current state while agent works on something else
- Agent work might take multiple sessions to complete
- Testing potentially breaking changes in isolation

**Skip sandboxes when:**

- Single agent performing quick, isolated task
- Making small, low-risk changes
- Agent work will complete in one session
- No parallel work needed

## Benefits Summary

Sandboxes enable:

- **True Parallel Execution**: Multiple agents work simultaneously
- **Risk Isolation**: Experiments and changes are contained
- **State Preservation**: Each task maintains its own state
- **Clean Organization**: Separate workspaces for separate concerns
- **Flexible Workflows**: Sequential or parallel agent operations

Sandbox transforms agent-driven development by providing true isolation and enabling sophisticated multi-agent workflows, making complex projects more manageable and development more efficient.
