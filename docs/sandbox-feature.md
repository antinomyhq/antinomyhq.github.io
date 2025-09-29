# Sandbox - Isolated Development Environments

The Sandbox feature in Forge creates isolated development environments using Git worktrees. This allows you to work on different features, experiments, or bug fixes without affecting your main codebase.

## Why Not Just Use Branches?

**TL;DR**: Branches require context switching. Sandboxes let you work on multiple features simultaneously without losing your place.

Traditional branch workflow:
```bash
git stash                    # Save current work
git checkout feature-branch  # Switch context
# Work on feature
git checkout main           # Switch back
git stash pop              # Restore previous work
```

Sandbox workflow:
```bash
forge --sandbox feature-auth     # Work on auth feature
# In another terminal:
forge --sandbox feature-payments # Work on payments simultaneously
# Original terminal still has auth work intact
```

With sandboxes, each feature gets its own directory and terminal session. No stashing, no context loss, no "where was I?" moments.

## How It Works

```
your-project/           # Your main repository
├── src/
├── package.json
└── README.md

../your-sandbox/        # Created by --sandbox your-sandbox
├── src/               # Same files, different worktree
├── package.json
└── README.md
```

The sandbox creates a **Git worktree** - a separate working directory that shares the same `.git` repository but allows different branches and working states.

## Basic Usage

### Creating a New Sandbox

```bash
# Create a sandbox named 'feature-auth'
forge --sandbox feature-auth
```

This command:
1. Checks if you're in a Git repository (required)
2. Creates a new worktree in `../feature-auth/`
3. Creates a new branch named `feature-auth` (if it doesn't exist)
4. Starts Forge in the new sandbox directory

### Using an Existing Sandbox

If a sandbox already exists, Forge will detect it and reuse it:

```bash
# Reuses existing sandbox if it exists
forge --sandbox feature-auth
```

The system will show:
```
Worktree [Reused]
../feature-auth/
```

## Advanced Usage

### Combining with Directory Changes

You can combine the sandbox feature with the `--directory` option to start in a specific subdirectory of your sandbox:

```bash
# Create sandbox and change to src/ directory
forge --sandbox feature-auth --directory src/
```

This creates the `feature-auth` worktree and then navigates to the `src/` directory within it.

### Working with Existing Branches

If you already have a branch with the same name as your sandbox, Forge will:
1. Create a worktree using the existing branch
2. Switch to that branch in the new worktree
3. Preserve any existing work on that branch

```bash
# Uses existing 'hotfix-login' branch if it exists
forge --sandbox hotfix-login
```

## Requirements and Edge Cases

### Requirements
- **Git Repository**: You must be inside a Git repository to use sandboxes
- **Parent Directory Access**: The sandbox is created in the parent directory of your Git repository root
- **Unique Names**: Each sandbox name must be unique (directory names cannot conflict)

### Common Repository Locations
- **Home directory repo** (`~/my-project/`): Sandbox created at `~/my-sandbox/`
- **Nested repo** (`~/workspace/my-project/`): Sandbox created at `~/workspace/my-sandbox/`
- **Monorepo** (`~/company-repo/service-a/`): Sandbox created at `~/company-repo-sandbox/` (based on repo root)

### Limitations
- Sandboxes are created as sibling directories to your main repository
- You cannot create a sandbox if your repository is at the filesystem root
- Directory conflicts: If a non-Git directory with the same name exists, the command will fail

## Managing Sandboxes

### Creating and Reusing
```bash
# Create new sandbox
forge --sandbox feature-auth

# Reuse existing sandbox (shows "Worktree [Reused]")
forge --sandbox feature-auth
```

### Cleanup (Important!)
Sandboxes persist after you're done with them. Clean up regularly:

```bash
# Remove the worktree (run from main repository)
git worktree remove ../feature-auth

# Or delete the directory and prune
rm -rf ../feature-auth
git worktree prune

# List all worktrees to see what you have
git worktree list
```

**Pro tip**: Set a reminder to clean up old sandboxes weekly. They accumulate quickly.

## Error Handling

The sandbox feature provides clear error messages for common issues:

### Not in a Git Repository
```
Error: Current directory is not inside a git repository. 
Worktree creation requires a git repository.
```

### Directory Conflicts
```
Error: Directory '../feature-auth' already exists but is not a git worktree. 
Please remove it or choose a different name.
```

### Repository at Root
```
Error: Git repository is at filesystem root - cannot create worktree in parent directory.
```

## Use Cases

### Feature Development
```bash
# Work on user authentication
forge --sandbox feature-auth

# Work on payment integration  
forge --sandbox feature-payments

# Fix critical bug
forge --sandbox hotfix-security
```

### Experimentation
```bash
# Try different architectural approaches
forge --sandbox experiment-microservices
forge --sandbox experiment-monolith

# Test performance optimizations
forge --sandbox perf-optimization
```

### Code Reviews
```bash
# Review a colleague's feature branch
forge --sandbox review-pr-123
```

### Learning and Tutorials
```bash
# Follow a tutorial without affecting main code
forge --sandbox learn-graphql

# Practice refactoring
forge --sandbox practice-cleanup
```

## Best Practices

### Naming Conventions
- Use descriptive names: `feature-user-auth` instead of `test1`
- Include context: `bugfix-login-redirect` or `experiment-react-18`
- Use hyphens for readability: `feature-dark-mode`

### Workflow Integration
1. **Start with a sandbox** for any new work
2. **Use meaningful names** that describe the work
3. **Clean up** unused sandboxes regularly
4. **Push branches** from sandboxes to share with team

## Troubleshooting

### Permission Issues
Ensure you have write access to the parent directory of your Git repository.

### Stale Worktrees
If you manually delete sandbox directories, clean up with:
```bash
git worktree prune
```

### Branch Conflicts
If you have local changes that conflict with the target branch:
1. Commit or stash changes in your main worktree
2. Create the sandbox
3. Resolve any conflicts in the sandbox environment

## Real-World Examples

### Daily Development Workflow
```bash
# Monday: Start new feature
forge --sandbox feature-user-profile

# Tuesday: Bug report comes in, need to investigate
forge --sandbox bugfix-header-layout  # Your feature work is preserved

# Wednesday: Back to feature work
forge --sandbox feature-user-profile  # Exactly where you left off

# Thursday: Feature is done, clean up
git push origin feature-user-profile
git worktree remove ../feature-user-profile
```

### Rapid Prototyping
```bash
# Try approach A
forge --sandbox experiment-redux

# Try approach B (in parallel)
forge --sandbox experiment-zustand

# Compare results, keep the better one, delete the other
git worktree remove ../experiment-redux
```

## When to Use Sandboxes (Decision Tree)

**Use a sandbox when:**
- Working on multiple features simultaneously
- Experimenting with different approaches
- Following tutorials or learning new tech
- Need to quickly switch between unfinished work
- Reviewing someone else's branch while keeping your work intact

**Just use branches when:**
- Working on one feature at a time
- Making small, quick changes
- Hotfixes that need immediate attention
- You're comfortable with git stash workflows

## Team Collaboration Patterns

### Working on Teammate's Branch
```bash
# Fetch the latest changes
git fetch origin feature-api-redesign

# Create sandbox for their branch (preserves your current work)
forge --sandbox feature-api-redesign

# Make changes and push updates
git push origin feature-api-redesign
```

### Code Review Workflow
```bash
# Create sandbox for PR review (your main work stays untouched)
forge --sandbox review-pr-123

# Test the changes, leave feedback
# Delete sandbox when done
git worktree remove ../review-pr-123
```

### Parallel Feature Development
```bash
# Team lead working on architecture
forge --sandbox feature-user-auth

# Junior dev working on UI (different terminal/session)
forge --sandbox feature-auth-ui

# Both can push their branches independently
# Both can pull each other's changes without conflicts
```

The Sandbox feature transforms how you work with Forge by providing true isolation and parallel development capabilities, making it easier to manage complex projects and experiment with confidence.