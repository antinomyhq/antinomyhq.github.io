---
slug: mcp-spec-updates
title: "MCP 2025-06-18 Spec Update: AI Security, Structured Output, and User Elicitation for LLMs"
authors: [anmol]
tags:
  [
    "Security",
    "MCP",
    "MCP Spec Updates",
    "Best Practices",
    "Vulnerabilities",
  ]
date: 2025-07-1
description: "Real talk about MCP Spec update (v2025-06-18), including important changes, security implications and what developers should actually care about."
hide_table_of_contents: false
---

import ElevenLabsAudioPlayer from '@site/src/components/shared/ElevenLabsAudioPlayer';

<ElevenLabsAudioPlayer 
  publicUserId="96e32731df14f1442beaf5041eec1125596de23ef9ff6ef5d151d28a1464da1b"
  projectId="oMLCQFUnhC7GqCsM0Rvv" 
/>

The Model Context Protocol has faced significant criticism in the past due to its security vulnerabilities. Anthropic recently released a new specification update (MCP v2025-06-18)<sup><a id="ref-1" href="#footnote-1">1</a></sup> and I have been reviewing it, especially around security. Here are the important changes you should know.

---

<!-- truncate -->

## TL;DR

Here's a quick summary of everything new in MCP Spec v2025-06-18:

- MCP servers are classified as OAuth 2.0 Resource Servers.

- Clients must include a `resource` parameter (RFC 8707) when requesting tokens, this explicitly binds each access token to a specific MCP server.

- Structured JSON tool output is now supported (`structuredContent`).

- Servers can now ask users for input mid-session by sending an `elicitation/create` request with a message and a JSON schema.

- “Security Considerations” have been added to prevent token theft, PKCE, redirect URIs, confused deputy issues.

- Newly added Security best practices page addresses threats like token passthrough, confused deputy, session hijacking, proxy misuse with concrete countermeasures.

- All HTTP requests must include the `MCP-Protocol-Version` header. If the header is missing and the version can’t be inferred, servers should default to `2025-03-26` for backward compatibility.

- New `resource_link` type lets tools point to URIs instead of inlining everything. The client can then subscribe to or fetch this URI as needed.

- Removed support for JSON-RPC batching (breaking change).

---

## What's MCP and Why Should I Care?

MCP (Model Context Protocol) is Anthropic's attempt at standardizing how applications provide context and tools to LLMs<sup><a id="ref-2" href="#footnote-2">2</a></sup>. Think of it like HTTP for AI models - a standardized protocol for AI models to “plug in” to data sources and tools.

Instead of writing custom integrations (GitHub, Slack, databases, file systems), MCP lets a host dynamically discover available tools (`tools/list`), invoke them (`tools/call`) and get back structured results. This mimics function-calling APIs but works across platforms and services.

At its core, MCP follows a client-server architecture where a host application can connect to multiple servers. Here are the core components:

- `MCP hosts` - apps like, [Forge](https://github.com/antinomyhq/forge), Claude Desktop, Cursor, Windsurf or AI tools that want to access data via MCP.

- `MCP Clients` - protocol clients that maintain 1:1 connections with MCP servers, acting as the communication bridge.

- `MCP Servers` - lightweight programs that each expose specific capabilities (like reading files, querying databases...) through the standardized Model Context Protocol.

- `Local Data Sources` - files, databases and services on your computer that MCP servers can securely access. For instance, a browser automation MCP server needs access to your browser to work.

- `Remote Services` - External APIs and cloud-based systems that MCP servers can connect to.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4qblsimyt39tbg619b84.png" alt="mcp server" width="100%" />

<figcaption><i>credit: ByteByteGo</i><sup><a id="ref-3" href="#footnote-3">3</a></sup></figcaption>

The spec was fairly minimal before (using JSON-RPC over stdio or HTTP). Authentication wasn’t clearly defined, which is why many implementations skipped it altogether.

Now that MCP adoption is growing, the team is addressing these gaps while the ecosystem is still early enough to make meaningful changes.

There are definitely core security vulnerabilities (tool description injection, supply chain risks) that are still not addressed but you can follow some practical mitigation strategies that might help<sup><a id="ref-4" href="#footnote-4">4</a></sup>.

---

## OAuth 2.0 Resource Server Classification

MCP servers (the systems that protect your data or services) are now officially classified as OAuth 2.0 Resource Servers. This isn't a new idea conceptually since many developers already treated MCP servers as protected resources but the spec now formalizes this with explicit OAuth 2.0 classification.

Each MCP server must now indicate the location of its authorization server using protected resource metadata (RFC9728)<sup><a id="ref-5" href="#footnote-5">5</a></sup>. By embedding an authorization endpoint URL in the MCP server’s metadata, ambiguity is removed and token requests are securely directed to the intended issuer.

Read more about Authorization Server Location<sup><a id="ref-6" href="#footnote-6">6</a></sup>. Token binding is explained in detail in the next section.

---

## Resource Indicators (RFC 8707) to prevent Token Misuse

Clients must include a Resource Indicator when requesting tokens (the `resource` parameter from RFC 8707) and authorization. This explicitly binds each access token to a specific MCP server. The Authorization Server can then issue tightly scoped tokens valid only for specific servers, preventing malicious actors from redirecting tokens to unauthorized endpoints.

Binding tokens to a single resource prevents “token mis-redemption” attacks, where a token issued for one resource could be replayed against a different server.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/znf66tk04wttzxz7stlh.png" alt="auth0 documenting implementation" width="100%" />

<figcaption><i>credit: Auth0 Blog</i><sup><a id="ref-7" href="#footnote-7">7</a></sup></figcaption>

For example, let's consider a simple scenario where the client is requesting a token specifically to access the `analytics` MCP server.

Because the `resource` parameter is included, the authorization server will issue a token that is audience-bound to `https://mcp.example.com/analytics`.

That token cannot be used to access any other endpoint or server, such as `https://mcp.example.com/payments` or `https://mcp.example.com/notifications`, even if they are part of the same MCP deployment.

```
POST /oauth/token
{
  "grant_type": "client_credentials",
  "client_id": "analytics-client",
  "client_secret": "...",
  "resource": "https://mcp.example.com/analytics"
}
```

---

## Updated Security Documentation

The spec now includes clarified Security Considerations<sup><a id="ref-8" href="#footnote-8">8</a></sup>.

### 1) Resource Indicators & Audience Binding (discussed earlier)

- Tokens are now bound to specific MCP servers using `resource` indicators
- Servers must `validate the audience` of each token before accepting it.

### 2) Preventing Token Theft

- Clients and servers must securely store tokens (no logs, cache leaks...).
- Authorization servers should issue short-lived tokens to reduce risk if leaked.
- For public clients, refresh tokens must be rotated (as per OAuth 2.1

### 3) Communication Security

- All auth endpoints must be served over HTTPS.
- Redirect URIs must be either `localhost` (for dev) or secure `https://` URLs.
- Aligns with OAuth 2.1 for end-to-end secure transport.

### 4) Authorization Code Protection (PKCE)

An attacker who has gained access to an authorization code contained in an authorization response can try to redeem the authorization code for an access token or otherwise make use of it. To mitigate this:

- PKCE is mandatory for all clients to prevent interception or injection.
- This creates a secret verifier-challenge pair, so only the original client can exchange an auth code for tokens.

### 5) Open Redirection

An attacker may craft malicious redirect URIs to direct users to phishing sites.

- Clients must pre-register exact redirect URIs with the auth server.
- Servers must strictly validate incoming redirect URIs to avoid phishing.
- Use of the `state` parameter is recommended to prevent request tampering.

Authorization servers should only automatically redirect the user agent if it trusts the redirection URI. If the URI is not trusted, the authorization server may inform the user and rely on the user to make the correct decision.

### 6) Confused Deputy Prevention

Attackers can exploit MCP servers acting as intermediaries to third-party APIs, leading to `confused deputy vulnerabilities`.

- MCP proxy servers must not forward tokens blindly to upstream APIs.
- When acting as an OAuth client, they must get a separate token from the upstream.
- Clients must obtain explicit user consent for dynamically registered clients.

### 7) Token Audience Validation

This vulnerability has two critical dimensions: Audience validation failures & Token passthrough. To prevent that:

- MCP servers must verify that access tokens are intended for them, using audience claims.
- Tokens issued for other services must be rejected.
- Token passthrough to downstream APIs is explicitly forbidden.

---

## New Security Best Practices page

They have included a new Security best practices page<sup><a id="ref-9" href="#footnote-9">9</a></sup>. These sections consolidate actionable advice (explicit consent flows, minimal data scopes, human-in-the-loop prompts, etc.) for MCP implementers. It outlines security guidance for developers and implementers working with MCP. Here are all the things covered:

- Includes threats such as confused deputy, token passthrough, and session hijacking, each followed by explicit countermeasures.
- Describes proxy misuse when static client IDs and consent cookies allow unauthorized token redemptions.
- Details the risks of forwarding invalidated tokens and mandates strict rejection of tokens not specifically issued for the MCP server.
- Also covers session-ID compromise scenarios including prompt injection and impersonation attacks.

As per official docs, this section should be read alongside the MCP Authorization specification and OAuth 2.0 security best practices<sup><a id="ref-10" href="#footnote-10">10</a></sup>.

---

## Structured Tool Output

### 1) Structured vs. Unstructured Output

Tools can now return structured JSON output in a new `structuredContent` field. With structured results, clients can parse responses programmatically (such as JSON objects). Previously, only unstructured plain text was allowed in the `content` field.

For instance, this is easier for apps to consume than parsing a plain string like `"22.5°C, partly cloudy, humidity 65%"`.

```json
{
  "structuredContent": {
    "temperature": 22.5,
    "conditions": "Partly cloudy",
    "humidity": 65
  }
}
```

### 2) Backward Compatibility

To ensure older clients can still work without changes:

- Tools should still include a human-readable `text` block that describes the same output in unstructured form.
- This dual output strategy makes structured content opt-in without breaking existing workflows.

```json
{
  "content": [
    {
      "type": "text",
      "text": "{\"temperature\": 22.5, \"conditions\": \"Partly cloudy\", \"humidity\": 65}"
    }
  ]
}
```

### 3) Output Schema Support (Optional)

Tools can optionally define an `outputSchema`, a JSON Schema that describes the structure of the `structuredContent`. If an output schema is provided:

- Servers must provide structured results that conform to this schema.
- Clients should validate structured results against this schema.

✅ Benefits of this:

- Enables strict schema validation
- Improves integration with typed languages (such as TypeScript, Go)
- Makes tool responses predictable and self-documenting
- Improves developer experience (DX)

Example tool with output schema:

```json
{
  "name": "get_price",
  "title": "Price Checker",
  "description": "Get current price of a product",
  "inputSchema": {
    "type": "object",
    "properties": {
      "productId": {"type": "string"}
    },
    "required": ["productId"]
  },
  "outputSchema": {
    "type": "object",
    "properties": {
      "price": {"type": "number"},
      "currency": {"type": "string"}
    },
    "required": ["price", "currency"]
  }
}
```

Example valid response for this tool:

```json
{
  "jsonrpc": "2.0",
  "id": 42,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "{\"price\": 199.99, \"currency\": \"USD\"}"
      }
    ],
    "structuredContent": {
      "price": 199.99,
      "currency": "USD"
    }
  }
}
```

---

## Support for Elicitation (Interactive User Input)

The new update adds elicitation support<sup><a id="ref-11" href="#footnote-11">11</a></sup>. A server can now ask the user for additional information mid-session by sending an `elicitation/create` request with a message and a JSON schema for expected data.

The protocol itself does not mandate any specific user interaction model and servers must not use elicitation to request sensitive information.

Clients that support elicitation must declare the `elicitation` capability during initialization.

```json
{
  "capabilities": {
    "elicitation": {}
  }
}
```

### 1) Creating Elicitation Requests

Servers can send an `elicitation/create` request with:

- A message to display
- A JSON schema describing the expected user input

The client shows a prompt and returns the user's response (or a cancel/reject action if declined).

Request example:

```json
{
  "method": "elicitation/create",
  "params": {
    "message": "Please enter your email",
    "requestedSchema": {
      "type": "object",
      "properties": {
        "email": {"type": "string", "format": "email"}
      },
      "required": ["email"]
    }
  }
}
```

Response Example:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "action": "accept",
    "content": {
      "email": "user@example.com"
    }
  }
}
```

### 2) Schema-Based Input Validation

- Input is guided by a simple JSON Schema (strings, numbers, enums, booleans).
- Complex nesting is not supported, schemas are intentionally flat to keep client implementation easy.
- This lets clients auto-generate input forms and validate responses before submission.

### 3) Response Types

Clients must return one of three clear actions:

- `"accept"` : User submitted valid data (included in `content`)
- `"reject"` : User explicitly declined to provide data
- `"cancel"` : User dismissed the prompt without responding

Here is the message flow.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uf0z8khnvcc0c6ee9sni.png" alt="message flow" width="100%" />

<figcaption>official docs</figcaption>

If you are interested in reading more about response actions, request schema, and more security considerations, check the official docs.

---

## Resource Links in Tool Results

Tools can now return **resource links** as part of their results. A `resource_link` contains a URI plus metadata (name, description, mimeType) pointing to additional context or data.

For example:

```json
{
  "type": "resource_link",
  "uri": "file:///project/src/main.rs",
  "name": "main.rs",
  "description": "Primary application entry point",
  "mimeType": "text/x-rust"
}
```

The client can then subscribe to or fetch this URI as needed. Like a tool telling the client: “Here’s a file you might want to explore, download, or open when needed.”

Resource links allow servers to “point” to files or resources instead of inlining them. They are not guaranteed to appear in the results of a `resources/list` request, they are more like meant for direct client retrieval when the link is provided.

---

## Protocol Version Enforcement (HTTP)

After the initial handshake, all HTTP requests to an MCP server must include the agreed-upon version in the `MCP-Protocol-Version: <protocol-version>` HTTP header on all subsequent requests to the MCP server.

This tells the server which version of the MCP spec the client is using. If the header contains an invalid or unsupported version, the server must reject the request with a `400 Bad Request`.

Why?

- Keeps the client and server in sync about protocol behavior.
- Prevents subtle bugs or mismatches when multiple protocol versions are supported.
- Acts as a form of version locking between sessions.

Example request:

```
GET /mcp-server/tools/list HTTP/1.1
Host: api.example.com
MCP-Protocol-Version: 2025-06-18
```

For backward compatibility, if the server doesn’t get the `MCP-Protocol-Version` header and can’t detect the version in any other way (by relying on the protocol version negotiated during initialization), it should assume the version is `2025-03-26`.

---

## JSON-RPC batching removed

The spec no longer supports JSON-RPC 2.0 batching<sup><a id="ref-12" href="#footnote-12">12</a></sup>. It means each JSON-RPC call must be sent as its own message (one JSON object per request) rather than an array of calls.

If your SDK or application was sending multiple JSON-RPC calls in a single batch request (an array), it will now break as MCP servers will reject it starting with version `2025-06-18`.

For example:

```
POST /mcp  [{ "jsonrpc": "2.0", "method": "foo", "id": 1 }, { "jsonrpc": "2.0", "method": "bar", "id": 2 }]
```

Update your client logic to send one request per call. This might involve disabling batching in your JSON-RPC library or restructuring your request pipeline.

I was checking the GitHub PR discussion (#416)<sup><a id="ref-13" href="#footnote-13">13</a></sup> and found “no compelling use cases” for actually removing it.

The official JSON-RPC documentation explicitly says a client “MAY send an Array” of requests and the server “SHOULD respond with an Array” of results. MCP’s new rule essentially forbids that. Several reviewers pointed out this break with the standard but the spec authors chose to make the change explicit.

Not supporting batching breaks away from JSON-RPC. Any SDK that's using a JSON-RPC library under the hood might run into problems with turning off batching.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ktaimnavo5nq2836a7ri.png" alt="removing JSON-RPC batching support" width="100%" />

I think removing JSON-RPC batching support when the protocol version is `>= 2025-06-18` would have made much more sense.

This change is also not backward compatible (breaking for older clients/servers) so any MCP client that supports `2025-03-26` might not work with an MCP server that only supports `2025-06-18`.

---

## Other Notable Changes

Several new fields were added for flexibility:

- `_meta` was added to various interface objects for implementation metadata.

- `context` was added to `CompletionRequest` to allow sending previously resolved variables along with completion requests.

- `title` fields were introduced on many objects to hold human-friendly display names (separate from the machine `name`).

They also changed `SHOULD` to `MUST` in Lifecycle Operation which says both parties must respect the negotiated protocol version<sup><a id="ref-14" href="#footnote-14">14</a></sup>.

---

## The Bottom Line

These updates are a step forward for the MCP ecosystem. These directly affect how secure, stable and forward-compatible your MCP integrations will be. Ignoring them could lead to broken client-server interactions, token misuse or rejected requests.

This made MCP integrations much more secure (using OAuth 2.0 conventions and token binding) and more capable because of structured data and user prompts.

All these changes are active as of `2025-06-18`. Any MCP server or client that doesn’t adopt the updated practices risks non-compliance with the current spec and future compatibility issues.

---

## Footnotes

<a id="footnote-1"></a>**1.** Anthropic. "Model Context Protocol June Specification Major Changes." Changelog. [https://modelcontextprotocol.io/specification/2025-06-18/changelog](https://modelcontextprotocol.io/specification/2025-06-18/changelog) [↩](#ref-1)

<a id="footnote-2"></a>**2.** Anthropic. "Model Context Protocol." GitHub Repository. [https://github.com/modelcontextprotocol/modelcontextprotocol](https://github.com/modelcontextprotocol/modelcontextprotocol) [↩](#ref-2)

<a id="footnote-3"></a>**3.** ByteByteGo. "What is MCP?" Blog. [https://blog.bytebytego.com/p/ep154-what-is-mcp](https://blog.bytebytego.com/p/ep154-what-is-mcp) [↩](#ref-3)

<a id="footnote-4"></a>**4.** Forge. "MCP Security is Broken: Here's How to Fix It". [/blog/prevent-attacks-on-mcp-part2/](/blog/prevent-attacks-on-mcp-part2/) [↩](#ref-4)

<a id="footnote-5"></a>**5.** IETF. “Protected Resource Metadata.” RFC 9728. [https://datatracker.ietf.org/doc/html/rfc9728](https://datatracker.ietf.org/doc/html/rfc9728) [↩](#ref-5)

<a id="footnote-6"></a>**6.** Anthropic. “Authorization Server Discovery.” MCP Spec: Authorization. [https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#authorization-server-discovery](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#authorization-server-discovery) [↩](#ref-6)

<a id="footnote-7"></a>**7.** Auth0. “MCP Specs Update: All About Auth.” Auth0 Blog. [https://auth0.com/blog/mcp-specs-update-all-about-auth/](https://auth0.com/blog/mcp-specs-update-all-about-auth/) [↩](#ref-7)

<a id="footnote-8"></a>**8.** Anthropic. “Security Considerations.” MCP June Spec. [https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#security-considerations](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#security-considerations) [↩](#ref-8)

<a id="footnote-9"></a>**9.** Anthropic. “Security Best Practices.” MCP Spec. [https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices](https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices) [↩](#ref-9)

<a id="footnote-10"></a>**10.** IETF. “JSON Web Token (JWT) Profile for OAuth 2.0 Access Tokens.” RFC 9700. [https://datatracker.ietf.org/doc/html/rfc9700](https://datatracker.ietf.org/doc/html/rfc9700) [↩](#ref-10)

<a id="footnote-11"></a>**11.** Anthropic. “Elicitation.” MCP Spec: Client Capabilities. [https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation](https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation) [↩](#ref-11)

<a id="footnote-12"></a>**12.** JSON-RPC. “Batching.” JSON-RPC 2.0 Specification. [https://www.jsonrpc.org/specification#batch](https://www.jsonrpc.org/specification#batch) [↩](#ref-12)

<a id="footnote-13"></a>**13.** Anthropic. “Pull Request #416: Add Protocol Version Header Enforcement.” GitHub PR. [https://github.com/modelcontextprotocol/modelcontextprotocol/pull/416](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/416) [↩](#ref-13)

<a id="footnote-14"></a>**14.** Anthropic. “Operation Lifecycle.” MCP Spec: Lifecycle. [https://modelcontextprotocol.io/specification/2025-06-18/basic/lifecycle#operation](https://modelcontextprotocol.io/specification/2025-06-18/basic/lifecycle#operation) [↩](#ref-14)
