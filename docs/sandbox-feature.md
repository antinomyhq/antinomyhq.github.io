# Sandbox - Isolated Agent Workspaces

The Sandbox feature in Forge creates isolated development environments using Git worktrees. This allows agents to work on different tasks, experiments, or features in parallel without interfering with each other or your main codebase.

## Requirements

- **Git Repository**: Must be inside a Git repository
- **Parent Directory Access**: Sandboxes are created in the parent directory of the repo root
- **Unique Names**: Each sandbox name must be unique

:::info Learn More About Git Worktrees

Forge sandboxes are built on [Git worktrees](https://git-scm.com/docs/git-worktree). For advanced worktree management, error handling, and low-level details, refer to the official Git documentation.

:::

## Why Sandboxes Matter for Agent Work

Sandboxes help agents avoid file conflicts and enable true parallel execution by giving each agent task its own isolated environment without interfering with ongoing work.

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

With sandboxes, each agent task gets its own isolated directory, no conflicts, no waiting, no interference between parallel operations.

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

Each sandbox is a **Git worktree** - a separate working directory that shares the same `.git` repository but allows independent changes and branches.

## Basic Usage

### Creating a New Sandbox for Agent Work

```bash
# Create a sandbox for authentication work
forge --sandbox feature-auth "implement JWT authentication"
```

This command:

1. Checks if you're in a Git repository (required)
2. Creates a new worktree in `../feature-auth/`
3. Creates or reuses a branch named `feature-auth`
4. Starts the Forge agent in the isolated sandbox directory
5. The agent works exclusively in this environment

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

The agent resumes work in the existing sandbox.

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

Let agents try different approaches without conflicts:

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
# Main work continues in your main repository
forge "continue implementing user profiles"

# Bug fix happens in separate sandbox
forge --sandbox hotfix-login "fix OAuth redirect loop"

# Main work remains untouched, bug fix can be merged independently
```

## Managing Agent Sandboxes

### Viewing Active Sandboxes

```bash
# List all active worktrees/sandboxes
git worktree list
```

Shows all sandboxes where agents have been working.

### Cleanup After Agent Work

Sandboxes persist after the agent completes work. Clean up regularly to keep your workspace organized:

:::tip Best Practice

Clean up sandboxes after merging changes to keep your workspace organized. The branch remains in your repository even after removing the worktree.

:::

:::warning Uncommitted Changes

If you have uncommitted changes in a sandbox, `git worktree remove` will fail by default. Either commit your changes first or use `git worktree remove --force` to discard them.

:::

```bash
# Remove completed sandbox (run from main repository)
git worktree remove ../feature-auth

# Or delete directory and prune
rm -rf ../feature-auth
git worktree prune

# List remaining sandboxes
git worktree list
```
