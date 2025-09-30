# File Tagging with @: Enhance AI Context for Faster Developer Workflow

One of the biggest challenges with AI coding assistants is providing the right context. Instead of copy-pasting code or Agent searching for where to start repeatedly, Forge's file tagging system lets you reference any project file with simple `@[filename]` syntax and tab completion. You can even tag specific line ranges within files using `@[filename:startLine:endLine]` to focus on exactly the code that matters.

This guide shows you how to use file tagging effectively - including when it works great and when it doesn't.

## How File Tagging Works

### The Basics

Reference any file in your project using `@` followed by part of the filename, then press **Tab** to activate autocomplete:

```
> Help me debug @auth [Tab]
```

<img src="/docs/autocomplete.gif" alt="Forge AI coding assistant demonstrating file tagging autocomplete, showing how users can quickly reference project files for better context" style={{"width": "100%"}} />

You'll see matching files:

```
@[src/auth/AuthService.ts]
@[src/components/AuthForm.tsx]
@[tests/auth.test.ts]
```

**Real-time filtering**: Keep typing after Tab to narrow results:

```
> Help me debug @authser [continues filtering as you type]
```

Shows only:

```
@[src/auth/AuthService.ts]
```

Select your file from the filtered results and complete the request:

```
> Help me debug @[src/auth/AuthService.ts] - the login method is throwing errors
```

### Line Range Support

You can also reference specific lines or line ranges within files using the format `@[filename:startLine:endLine]`:

```
> Review the validation logic in @[src/utils/validation.ts:42:65]
```

Or reference from a specific line to the end of the file:

```
> Explain this error starting from @[src/auth/AuthService.ts:127]
```

This is perfect for:

- **Debugging specific functions** - Reference just the problematic method with `@[file:start:end]`
- **Code review focus** - Point to exact sections that need attention
- **Performance optimization** - Highlight specific bottlenecks or read from a point to end with `@[file:start]`
- **Token efficiency** - Only send relevant lines to the LLM, reducing costs and improving response speed


:::tip Use the VS Code Extension
Skip manual typing of file references! The [Forge VS Code Extension](/docs/vscode-extension) lets you select any code and press `Ctrl+U` to instantly copy the reference in the correct format (`@[filepath:start:end]`). Perfect for quickly referencing specific functions or code sections without typing paths and line numbers manually.
:::

### Multiple Files and Edge Cases

Reference multiple files:

```
> @[src/auth/AuthService.ts] @[src/types/User.ts] have a dependency issue
```

Files with spaces work fine:

```
> Review @[src/components/User Profile.tsx]
```

:::tip VS Code Extension
Skip the manual typing! The [Forge VS Code Extension](/docs/vscode-extension) automatically generates file references in the exact format above. Just select your code and press `Ctrl+U` to copy the reference directly to your clipboard.
:::

## When File Tagging Works Best

### Perfect Use Cases

**Code Review and Debugging**

```
> Review @[src/components/UserList.tsx] for performance issues
```

Better than pasting 100 lines of code because the AI sees your actual imports, dependencies, and context.

**Targeted Line-by-Line Review**

```
> The useEffect hook in @[src/components/UserList.tsx:45:62] is causing infinite re-renders
```

Even more precise - the AI focuses only on the problematic code section, leading to faster, more accurate solutions. Plus, you're only sending 18 lines instead of the entire 200+ line component, saving tokens and getting quicker responses.

**Cross-File Problem Solving**

```
> @[src/auth/AuthService.ts] @[src/store/userStore.ts] user data isn't persisting after login
```

The AI can trace data flow between files instead of guessing from descriptions.

**Targeted Refactoring**

```
> Extract validation logic from @[src/components/ContactForm.tsx] into @[src/utils/validation.ts]
```

### When It Becomes a Pain

**Large Codebases (The Reality Check)**

In a project with 500+ files, typing `@user` might return:

```
@[src/components/UserProfile.tsx]
@[src/components/UserList.tsx]
@[src/components/UserCard.tsx]
@[src/services/UserService.ts]
@[src/types/User.ts]
@[src/hooks/useUser.ts]
@[src/utils/userHelpers.ts]
@[tests/user.test.ts]
@[tests/userService.test.ts]
@[src/pages/UserDashboard.tsx]
... and 23 more matches
```

**Solution strategies:**

- Be more specific: `@UserService` instead of `@user`
- Include directory: `@src/components/User`
- Use file extensions: `@user.test` for test files

**Performance Constraints**

File tagging hits limits with:

- **Binary files** - Automatically filtered out
- **Generated code** - Often in .gitignore anyway

**Monorepo Madness**

In monorepos, you might get:

```
> @config [Tab]
@[apps/web/config.ts]
@[apps/api/config.ts]
@[packages/shared/config.ts]
@[tools/build/config.js]
```

All different configs! You need to be more specific about which app/package you mean.

## Real-World Examples

### The Good: Precise Problem Solving

**Bug Investigation**

```
> @[src/components/LoginForm.tsx] shows "Invalid credentials" even with correct login. Check @[src/auth/AuthService.ts]
```

**Precise Bug Investigation with Line Ranges**

```
> The password validation in @[src/auth/AuthService.ts:89:102] fails but @[src/components/LoginForm.tsx:34:38] shows the input is correct
```

By referencing specific line ranges, you can pinpoint exactly where the issue occurs, making debugging significantly faster.

**Feature Implementation**

```
> Add dark mode support to @[src/components/ThemeProvider.tsx] and @[src/styles/theme.ts]
```

## Advanced Patterns

### Architecture Analysis (The Right Way)

**Instead of:** "Review my architecture"
**Do this:**

```
> Compare the data flow between @[src/services/ApiService.ts] and @[src/store/userStore.ts] - are we handling errors consistently?
```

**Why it works:** Specific files, specific question, actionable feedback.

### Migration Planning

```
> I want to migrate @[src/legacy/UserManager.js] to TypeScript. What interfaces do I need based on @[src/types/User.ts]?
```

**Efficient Migration with Line Ranges**

```
> Convert the authentication methods in @[src/legacy/UserManager.js:45:120] to TypeScript using patterns from @[src/auth/AuthService.ts:25:85]
```

Target only the relevant sections instead of processing entire files - faster analysis, lower token usage, more focused recommendations.

### Test-Driven Development

```
> @[src/auth.test.ts] is failing on line 45. Help me fix the implementation in @[src/auth/AuthService.ts]
```

**Precision Test Debugging with Line Ranges**

```
> The test @[src/auth.test.ts:45:52] expects a specific error format, but @[src/auth/AuthService.ts:127:135] returns a different structure
```

Line ranges let you reference the exact test case and the corresponding implementation, making test-driven debugging much more efficient.

### Image File Support

File tagging now supports image files for visual context:

```bash
# Tag images for UI component documentation
@button-states.png
@icon-library.svg
@user-flow-diagram.jpg

# Reference in discussions
"The button component shows different states in @[assets/button-states.png]"
"Check the user flow in @[docs/wireframes/user-journey.png] for context"
```

**Supported formats:** PNG, JPG, JPEG, GIF, SVG, WebP

**Use cases:**

- UI component design reviews
- Visual debugging of layout issues
- Referencing mockups or wireframes
- Icon and asset discussions

## Technical Deep Dive

### How the File Discovery Actually Works

**The Algorithm:**

1. **Recursive directory scan** - Walks your project tree
2. **Gitignore respect** - Skips ignored files (thank god)
3. **Binary detection** - Filters out executables, etc.
4. **Size filtering** - Skips files > 50KB to avoid context overflow
5. **Real-time filtering** - Updates as you type after Tab

## Limitations (The Honest Truth)

### When File Tagging Fails You

**1. Generated Code**
Build outputs, compiled assets, auto-generated types - these pollute results and aren't useful anyway.

**2. Binary Dependencies**
PDFs, executables, and most binary files - filtered out automatically, but you can't reference them. **Exception: Image files** (PNG, JPG, JPEG, GIF, SVG, WebP) can be tagged and referenced for UI discussions, design reviews, or visual debugging.

**3. Dynamic Imports**
If your code uses dynamic imports or runtime file loading, file tagging won't help trace those relationships.

**4. Cross-Repository Dependencies**
File tagging only sees your current project. External packages and microservices are invisible.

## Troubleshooting Real Problems

### "I Can't Find My File"

**Check these in order:**

1. File exists and isn't in .gitignore
2. Try different search terms (`Service` vs `service`)
3. Check file size (> 50KB gets filtered)

### "Line Range Syntax Issues"

**For line range references:**

- **Line range**: `@[file.ts:42:65]` - Lines 42 through 65
- **From line to end**: `@[file.ts:42]` - From line 42 to end of file
- **Common mistakes**: Using dashes (`42-65`) or spaces (`42 : 65`) instead of colons

### "Too Many Results"

**Narrow it down:**

- Add directory: `@src/auth/Service`
- Use extension: `@Service.ts`
- Be more specific: `@AuthService` not `@auth`

---

## Getting Help

1. **Export your session**:

   ```bash
   /dump html
   ```

2. **Connect with us**:
   - **Discord**: [Join our Discord](https://discord.gg/kRZBPpkgwq)
   - **Twitter/X**: [@forgecodehq](https://x.com/forgecodehq)

---

File tagging works best when you understand both its strengths and limitations. Start simple, learn your project's search patterns, and gradually tackle more complex scenarios.

## Related Guides

- [AI Model Selection Guide: Optimize Forge for Your Workflow](/docs/model-selection-guide)
- [Plan and Act Guide: Automating Complex Workflows with Forge](/docs/plan-and-act-guide)
- [Custom Rules Guide: Extending Forge's Capabilities](/docs/custom-rules-guide)

The goal isn't to reference every file in your project - it's to give the AI just enough context to provide genuinely helpful, specific advice.
