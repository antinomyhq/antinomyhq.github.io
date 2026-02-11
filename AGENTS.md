## 📋 Core Development Rules

### Application Runtime

- **NEVER** attempt to run the application - it's already running on port 3000 in watch mode
- The development server is persistent and handles hot reloading automatically
- Always assume the application is accessible at `http://localhost:3000`

### Package Management

- **Use**: `npm` or `npx` commands exclusively
- **Avoid**: `pnpm` - not used in this project
- Always check `package.json` for available scripts before running commands

### Development Tools & Libraries

- **Chrome Devtools MCP**: Use when available for end-to-end testing and browser automation
- **Context7**: Leverage for accessing the latest documentation of libraries and frameworks
- **TypeScript**: Always write type-safe code with proper type definitions
- Maintain strict TypeScript configuration standards

### Code Quality Standards

- **Expert UI/UX Focus**: Approach all development with expert-level UI/UX design principles
- **TypeScript First**: All code must be type-safe and follow TypeScript best practices
- **Component Architecture**: Follow React/Docusaurus component patterns
- **Responsive Design**: Ensure all UI components work across devices

## 🛠️ Project Structure

This is a **Docusaurus** documentation site with the following key areas:

```
├── docs/                # Documentation files (.mdx)
├── blog/                # Blog posts
├── src/
│   ├── components/      # React components
│   ├── theme/           # Custom theme overrides
│   ├── pages/           # Custom pages
│   └── css/             # Styling
├── static/              # Static assets
├── docusaurus.config.ts # Docusaurus configuration
├── sidebars.ts          # Sidebar configuration
└── forge.yaml           # Agent configuration
```

## 🎯 Development Focus Areas

### Documentation

- Work with `.mdx` files for documentation
- Understand Docusaurus conventions and plugins
- Maintain consistent markdown formatting

### Components

- React components in TypeScript
- CSS Modules for styling
- Responsive and accessible design patterns

### Content Management

- Blog post creation and management
- Static asset optimization
- SEO and metadata management

## 🔧 Available Tools & Capabilities

### Testing

- **Cypress**: Available for e2e testing (`cypress.config.js`)
- **Playwright**: Preferred when MCP is available

### Documentation Research

- **Context7**: For latest library documentation
- Built-in search and exploration capabilities

### Development

- **Hot Reload**: Automatic via running dev server
- **TypeScript**: Full type checking and IntelliSense
- **Modern Tooling**: Latest React/Docusaurus features

## ⚡ Quick Start

1. **Understand the Request**: Analyze what needs to be built/modified
2. **Check Running Status**: Remember the app is already running
3. **Use TypeScript**: Write type-safe code
4. **Follow UI/UX Best Practices**: Expert-level design implementation
5. **Test Responsively**: Ensure cross-device compatibility
6. **Document Changes**: Update relevant `.mdx` files if needed

## 🚫 Restrictions & Limitations

### What NOT to do:

- ❌ Run `npm start`, `npm run dev`, or similar server commands
- ❌ Use `pnpm` package manager
- ❌ Ignore TypeScript type safety
- ❌ Create non-responsive components
- ❌ Skip UI/UX best practices

### What TO do:

- ✅ Use existing running development server
- ✅ Write TypeScript-first code
- ✅ Follow expert UI/UX principles
- ✅ Use npm/npx for package management
- ✅ Leverage Chrome Devtools MCP when available
- ✅ Consult Context7 for latest documentation

## 📝 Code Quality Checklist

Before completing any task:

- [ ] Code is TypeScript compliant with proper types
- [ ] Components are responsive and accessible
- [ ] UI follows expert-level design principles
- [ ] No attempts to restart the development server
- [ ] Documentation is updated if applicable
- [ ] Testing considerations are addressed

## 🔍 Troubleshooting

### Common Issues:

- **Port conflicts**: App runs on 3000, don't try to start another instance
- **Type errors**: Always resolve TypeScript issues before completion
- **Styling issues**: Use CSS Modules or existing theme system
- **Build errors**: Check Docusaurus configuration and dependencies

### Debug Resources:

- Check browser console at `localhost:3000`
- Review Docusaurus build logs
- Validate TypeScript compilation
- Test responsive breakpoints

## 🎯 Success Metrics

A successful agent interaction should:

- Maintain type safety throughout
- Follow UI/UX best practices
- Work within the running development environment
- Produce responsive, accessible components
- Integrate seamlessly with existing Docusaurus structure

---

**Remember**: You're working with a live development environment. Focus on creating excellent, type-safe code that enhances the user experience without disrupting the running application.
