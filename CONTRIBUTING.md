# Contributing to Ganeshadhari Agriculture Website

Thank you for your interest in contributing to the Ganeshadhari Agriculture website! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and professional environment for all contributors.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/ganeshadhari-agriculture.git
   cd ganeshadhari-agriculture
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. **Start the development server**:
   ```bash
   pnpm dev
   ```

2. **Make your changes** following the coding standards

3. **Test your changes** thoroughly:
   - Test on different screen sizes (mobile, tablet, desktop)
   - Verify all interactive elements work correctly
   - Check for console errors
   - Ensure accessibility standards are met

4. **Build the project** to ensure it compiles:
   ```bash
   pnpm build
   ```

## Coding Standards

### TypeScript
- Use TypeScript for all new components and files
- Define proper interfaces for component props
- Avoid using `any` type unless absolutely necessary
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use proper prop types and interfaces

**Example:**
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-2 rounded-full ${variant === "primary" ? "bg-[#4caf50]" : "bg-gray-200"}`}
    >
      {label}
    </button>
  );
}
```

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the existing color scheme:
  - Primary Green: `#4caf50`
  - Dark Green: `#2d5f3f`
  - Forest Green: `#1a3a2e`
  - Warm Yellow: `#ffd54f`
- Ensure responsive design with Tailwind breakpoints
- Keep custom CSS to a minimum

### File Organization
- Place components in `/src/app/components/`
- Place reusable UI components in `/src/app/components/ui/`
- Use clear, descriptive file names (PascalCase for components)
- Keep related components together

### Import Order
Organize imports in the following order:
1. React and external libraries
2. Internal components
3. Utils and helpers
4. Assets (images, icons)
5. Types and interfaces

**Example:**
```tsx
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import logo from "figma:asset/...";

interface MyComponentProps {
  // ...
}
```

## Component Guidelines

### Component Structure
```tsx
// 1. Imports
import { useState } from "react";
import { Icon } from "lucide-react";

// 2. Type/Interface definitions
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

// 3. Component function
export default function MyComponent({ title, onAction }: MyComponentProps) {
  // 4. Hooks
  const [isActive, setIsActive] = useState(false);

  // 5. Event handlers
  const handleClick = () => {
    setIsActive(!isActive);
    onAction();
  };

  // 6. JSX return
  return (
    <div className="container">
      <h2>{title}</h2>
      <button onClick={handleClick}>
        {isActive ? "Active" : "Inactive"}
      </button>
    </div>
  );
}
```

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels where needed
- Ensure keyboard navigation works
- Provide alt text for images
- Maintain sufficient color contrast

### Performance
- Lazy load images when appropriate
- Minimize bundle size
- Avoid unnecessary re-renders
- Use React.memo() for expensive components

## Commit Messages

Follow the conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(booking): add form validation to booking modal
fix(header): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(footer): improve responsive layout
refactor(home): extract testimonials into separate component
```

## Pull Request Process

1. **Update your branch** with the latest main branch:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Screenshots for UI changes
   - Reference to any related issues

4. **PR Template:**
   ```markdown
   ## Description
   Brief description of the changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Screenshots (if applicable)
   Add screenshots here

   ## Checklist
   - [ ] Code follows project style guidelines
   - [ ] Self-review completed
   - [ ] Tested on multiple screen sizes
   - [ ] No console errors
   - [ ] Documentation updated (if needed)
   ```

5. **Code Review**: Wait for review and address any feedback

6. **Merge**: Once approved, your PR will be merged

## Questions?

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team at info@ganeshadhari.com

Thank you for contributing! 🌱
