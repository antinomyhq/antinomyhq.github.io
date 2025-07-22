---
slug: simple-is-not-easy
title: "Simple Over Easy: Architectural Constraints for Maintainable AI-Generated Code"
description: "Discover how applying Rich Hickey's 'Simple Made Easy' principles can solve the 'AI 90/10 problem', leading to more maintainable and reviewable AI-generated code by constraining architectural choices."
hide_table_of_contents: false
---

> **TL;DR**: AI agents can generate code that passes tests and looks familiar, but the last 10% of understanding, review, and maintenance becomes impossible. By applying Rich Hickey's principles from his talk "Simple Made Easy", Our team constrained our architecture to leave only one way to solve each problem, making AI-generated code easy to review and maintain.

Two months ago, YouTube's recommendation algorithm served me Rich Hickey's 2011 QCon talk ["Simple Made Easy"](https://www.youtube.com/watch?v=SxdOUGdseq4).

:::tip
If you haven't seen it, I highly recommend watching it. It's a 13-year-old talk that feels more relevant today than ever.
["Simple Made Easy"](https://www.youtube.com/watch?v=SxdOUGdseq4)
:::

We've all experienced this with AI coding agents, what I now call **the AI 90/10 problem**: Agents can generate syntactically correct, test passing code that gets us 90% of the way there incredibly fast, but that last 10%, the part where humans have to understand, review, and maintain the code, becomes impossible.

<!-- truncate -->

As Hickey mentioned: "We can only hope to make reliable those things we understand." And there's usually a tradeoff: when evolving a system to make it more extensible and dynamic, it may become harder to understand and decide if it's correct.

## The AI 90/10 Problem: Why Speed Becomes Paralysis

**AI agents are optimization machines that tend to choose the path of least resistance during generation, not the path of least resistance during review.**

When AI Agents generate code, it's optimizing for:

- ✅ Syntactic correctness
- ✅ Test passage
- ✅ Familiar patterns
- ✅ Minimal prompting required

But you have to live with code that's optimized for:

- ❌ Human comprehension
- ❌ Change velocity
- ❌ Debugability
- ❌ Long term maintenance

This creates a real problem: the faster the AI agents generate code, the slower the team becomes at reviewing it.

**The root cause**: We don't constrain our AI with architecture. We give it infinite ways to solve every problem, then wonder why it chose the most complex path.

## Simple vs Easy: The Foundation of AI Friendly Architecture

Hickey's core distinction changed how I think about Agent generated code:

**Simple**: "One fold, one braid, one twist." Things that are not interleaved or braided together. Simple is objective, you can count the braids. As Hickey explains, the roots of "simple" are "sim" and "plex", meaning "one twist" - the opposite of complex, which means "multiple twists" or "braided together."

**Easy**: "Near at hand, nearby." Things that are familiar, already in your toolkit, close to your current skill set. Easy is relative, what's easy for you might be hard for me. The Latin origin of "easy" relates to "adjacent", meaning "to lie near" and "to be nearby."

AI tends to choose easy over simple because it optimizes for generation speed, not maintenance clarity.

My Agent was generating familiar patterns (easy) that created intertwined, braided complexity (not simple). The solution isn't to make the Agent smarter, it is to make our architecture more constraining.

**Maintainable code has one defining characteristic: it's very easy to review.**

When there's only one way to solve a problem, review becomes pattern matching instead of archaeology.

## The Five Principles: Hickey's Blueprint

From the talk, I have extracted five core principles that became architectural constraints for my software:

### Principle 1: Avoid Complecting

> **"Complect means to interleave, to entwine, to braid. Complex means braided together, folded together. Simple means one fold, one braid, one twist."**

Complecting is when you take simple components and interweave them into complex knots. Every time you complect two concepts, you lose the ability to reason about them independently. As Hickey notes: "Complect results in bad software."

### Principle 2: Separate State from Value

> **"State complects value and time."**

When you mix what something is (value) with when it changed (time), you create artifacts that are impossible to reason about in isolation.

### Principle 3: Data as Data, Not Objects

> **"Information is simple. The only thing you can possibly do with information is ruin it."**

Objects complect state, identity, and value. They hide information behind methods and encapsulation, making it impossible to operate on data generically.

### Principle 4: Functions Over Methods

> **"Methods complect function and state, namespaces."**

Methods hide their dependencies in the object they're attached to. Pure functions make all dependencies explicit. As Hickey explains, methods intertwine function logic with object state and namespace concerns.

### Principle 5: Composition Over Inheritance

> **"Inheritance complects types. It says these two types are complected, that's what it means."**

When you inherit, you're saying these types are braided together. Composition lets you combine capabilities without complecting them.

## Making Architecture More Constraining: One Way to Win

The solution isn't to make AI smarter, it's to make the architecture more constraining. Instead of giving AI Agent a thousand ways to implement a feature, Our team designed systems that left exactly one obvious way.

This approach transforms the AI generation problem: when there's only one valid pattern to follow, AI naturally generates maintainable code because it has no other choice.

Here's how our team transformed each principle into architectural constraints:

### Constraint 1: Immutable Data, Zero Exceptions

Separate state from value. All domain entities are immutable. When there's only one way to change state (return a new value), AI can't generate hidden mutations that complicate review.

### Constraint 2: Data Separated from Behavior

Data as data, not objects. Data structures contain only data. Behavior lives in stateless services.

### Constraint 3: Explicit Error Context, No Exceptions

Avoid complecting. Every error must tell the complete story of what went wrong and where. When errors are explicit and contextual, agents can't swallow failures or create generic error handling that hides problems.

### Constraint 4: Pure Functions Over Methods

Functions over methods. Business logic must be pure functions with explicit dependencies. When all dependencies are explicit, AI can't hide complexity in object state or method chains.

### Constraint 5: Composition Over Inheritance

Composition over inheritance. Capabilities compose through focused traits, never inherit. When types compose instead of inherit, AI can't create hierarchies that complect unrelated concerns.

Hickey's advice was clear: "Stick a queue in there. Queues are the way to just get rid of this problem." He emphasizes that queues help decouple components by separating the "when" from the "where" - avoiding the complexity that comes from direct connections between objects.

Coordination between services happens only through event queues. When services can't call each other directly, AI can't create temporal coupling that makes systems impossible to reason about.

## How Constraints Teach AI Better Patterns

What's interesting is that our architectural constraints don't just make code review faster, they actively teach our Agent to generate better code. Every time agent sees our patterns, it learns and add them in memory. In [Forge](https://github.com/antinomyhq/forge) we call it [custom rules](/docs/custom-rules/). Other agents call them memory, rules etc.

- **Separation of concerns** prevents feature entanglement
- **Explicit dependencies** make testing trivial
- **Immutable data** eliminates entire classes of bugs
- **Pure functions** compose predictably
- **Data as data** enables generic operations

The AI has internalized our constraints with custom rules/memory.

If you're experiencing the AI 90/10 problem, here's what we learned:

### 1. **Constrain Generation, Don't Guide Review**

Don't try to teach your AI to generate better code. Design architecture that makes bad code impossible to express.

### 2. **One Way to Win**

For every problem your AI might encounter, there should be exactly one obvious way to solve it. Multiple valid approaches create review complexity.

### 3. **Good Code = Reviewable Code**

The only metric that matters for AI-generated code is: "How quickly can a human verify this is correct?"

### 4. **Teach Through Structure**

Your AI learns from your code structure more than your system prompt. Make sure your architecture embodies the constraints you want replicated.

## Results: Constraints Create Freedom

The architectural constraints we implemented had an upfront cost, but the returns have been extraordinary:

- **Review velocity increased**: What used to take hours of now takes minutes of pattern matching
- **Onboarding accelerated**: New team members could contribute immediately because there was only one way to solve each problem
- **AI learning improved**: Our agents began generating better code because our architecture taught them good patterns

## Conclusion: Solving the 90/10 Problem

The AI 90/10 problem isn't a limitation of current AI Agents, it's a failure of architectural design.

When your architecture constrains AI behavior through design, AI becomes your partner in building maintainable software rather than your adversary in creating technical debt.

**In the AI era, the teams that win won't be those with the most sophisticated AI agents, they'll be those with the most constraining architectures.**

Good code has one defining characteristic: it's very easy to review. When you design constraints that leave only one way to solve each problem, review becomes pattern matching instead of archaeology.

<details>
<summary>For teams ready to solve their own AI 90/10 problem, here's how we implemented each principle in our [Forge](https://github.com/antinomyhq/forge) architecture:</summary>

### Domain Layer: Pure Information (Principles 1, 2, 3)

```rust
// Always represent information as data - no complecting
// This struct demonstrates immutability (Principle 2) and data as data (Principle 3)
// Notice: no methods, no hidden state, just pure information
#[derive(Debug, Setters, Serialize, Deserialize, Clone)]
pub struct Conversation {
    pub id: ConversationId,
    pub archived: bool,
    pub context: Option<Context>,
    pub variables: HashMap<String, Value>,
    pub agents: Vec<Agent>,
    pub events: Vec<Event>,
    pub tasks: TaskList,
}
```

### Service Layer: Focused Abstractions (Principles 4, 5)

```rust
// Small, focused interfaces - one responsibility only (Principle 4)
// This trait has a single, pure function with explicit dependencies
#[async_trait::async_trait]
pub trait FsReadService: Send + Sync {
    async fn read(
        &self,
        path: String,
        start_line: Option<u64>,
        end_line: Option<u64>,
    ) -> anyhow::Result<ReadOutput>;
}

// Compose capabilities, don't inherit complexity (Principle 5)
// Notice: we compose three separate traits instead of inheriting from a base class
impl<F: FileInfoInfra + EnvironmentInfra + InfraFsReadService> FsReadService for ForgeFsRead<F> {
    async fn read(
        &self,
        path: String,
        start_line: Option<u64>,
        end_line: Option<u64>,
    ) -> anyhow::Result<ReadOutput> {
        let path = Path::new(&path);
        assert_absolute_path(path)?;
        let env = self.0.get_environment();

        // Validate file size before reading content
        assert_file_size(&*self.0, path, env.max_file_size).await?;

        let (start_line, end_line) = resolve_range(start_line, end_line, env.max_read_size);

        let (content, file_info) = self
            .0
            .range_read_utf8(path, start_line, end_line)
            .await
            .with_context(|| format!("Failed to read file content from {}", path.display()))?;

        Ok(ReadOutput {
            content: Content::File(content),
            start_line: file_info.start_line,
            end_line: file_info.end_line,
            total_lines: file_info.total_lines,
        })
    }
}
```

### Infrastructure Layer: Simple Capabilities (Principle 5)

```rust
// Infrastructure traits define what, not how (avoiding complecting)
// Each trait has a single, focused responsibility
pub trait FileInfoInfra: Send + Sync {
    async fn is_file(&self, path: &Path) -> anyhow::Result<bool>;
    async fn exists(&self, path: &Path) -> anyhow::Result<bool>;
    async fn file_size(&self, path: &Path) -> anyhow::Result<u64>;
}

pub trait EnvironmentInfra: Send + Sync {
    fn get_environment(&self) -> Environment;
}

pub trait FileReaderInfra: Send + Sync {
    async fn range_read_utf8(
        &self,
        path: &Path,
        start_line: u64,
        end_line: u64,
    ) -> anyhow::Result<(String, forge_fs::FileInfo)>;
}
```

### Error Handling: Explicit Context (Principle 1)

```rust
// Every error tells a complete story - no generic errors allowed
// This demonstrates avoiding complecting by making each error case explicit
#[derive(Debug, Error)]
pub enum Error {
    #[error("Missing tool name")]
    ToolCallMissingName,

    #[error("Invalid tool call arguments: {0}")]
    ToolCallArgument(serde_json::Error),

    #[error("Agent not found in the arena: {0}")]
    AgentUndefined(AgentId),

    #[error("Agent '{0}' has reached max turns of {1}")]
    MaxTurnsReached(AgentId, u64),

    #[error("Conversation not found: {0}")]
    ConversationNotFound(ConversationId),

    #[error("No model defined for agent: {0}")]
    NoModelDefined(AgentId),
}
```

### Testing: Properties Over Implementation (All Principles)

```rust
#[cfg(test)]
mod tests {
    use pretty_assertions::assert_eq;

    // Testing pattern: fixture -> actual -> expected -> assert
    #[test]
    fn test_conversation_new_with_workflow_variables() {
        // Arrange
        let id = ConversationId::generate();
        let mut variables = HashMap::new();
        variables.insert("key1".to_string(), json!("value1"));
        variables.insert("key2".to_string(), json!(42));

        let mut workflow = Workflow::new();
        workflow.variables = variables.clone();

        // Act
        let conversation = Conversation::new_inner(id.clone(), workflow, vec![]);

        // Assert
        assert_eq!(conversation.id, id);
        assert_eq!(conversation.variables, variables);
    }
}
```

When [Forge](https://github.com/antinomyhq/forge) generates new code, it naturally follows these structures because there's no other way to express solutions in our architecture. AI generated code that's easier to review than human written code, because our constraints make complexity impossible to express.

</details>
