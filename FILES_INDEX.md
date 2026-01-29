# 📑 Complete Project Files Index

This document lists all files in the Ganeshadhari Agriculture website project with their purposes.

## 📚 Documentation Files (Root Directory)

| File | Purpose |
|------|---------|
| **README.md** | Main project documentation with overview, features, and setup instructions |
| **QUICKSTART.md** | Quick start guide to get running in 5 minutes |
| **DEPLOYMENT.md** | Detailed deployment guide for various platforms |
| **DOCUMENTATION.md** | Technical architecture and development documentation |
| **CONTRIBUTING.md** | Guidelines for contributing to the project |
| **CHANGELOG.md** | Version history and release notes |
| **PROJECT_SUMMARY.md** | Executive summary of the completed project |
| **GITHUB_CHECKLIST.md** | Pre-deployment and GitHub preparation checklist |
| **ATTRIBUTIONS.md** | Third-party attributions and licenses |
| **.gitignore** | Git ignore rules for version control |

## ⚙️ Configuration Files (Root Directory)

| File | Purpose |
|------|---------|
| **package.json** | Dependencies, scripts, and project metadata |
| **vite.config.ts** | Vite build tool configuration |
| **tsconfig.json** | TypeScript compiler configuration |
| **postcss.config.mjs** | PostCSS configuration for CSS processing |

## 📱 Application Files

### Main Application
| File | Purpose |
|------|---------|
| **src/app/App.tsx** | Main application component with routing logic |

### Page Components (src/app/components/)
| File | Purpose | Routes |
|------|---------|---------|
| **NewHome.tsx** | Homepage with hero, features, testimonials | / |
| **About.tsx** | About page with company info, team, mission | /about |
| **Services.tsx** | Services page with all offerings | /services |
| **OurBrand.tsx** | Brand/ownership model page | /brand |
| **Projects.tsx** | Projects portfolio with filtering | /projects |
| **Blog.tsx** | Blog listing with search and categories | /blog |
| **Contact.tsx** | Contact page with form and map | /contact |
| **PrivacyPolicy.tsx** | Privacy policy and data protection | /privacy |
| **TermsConditions.tsx** | Terms and conditions | /terms |
| **Sitemap.tsx** | Interactive sitemap | /sitemap |

### Layout Components (src/app/components/)
| File | Purpose |
|------|---------|
| **Header.tsx** | Global header with navigation and language toggle |
| **Footer.tsx** | Global footer with links and contact info |

### Feature Components (src/app/components/)
| File | Purpose |
|------|---------|
| **BookingModal.tsx** | Farm plot booking modal with form validation |
| **Hero.tsx** | Reusable hero section component |
| **MissionVision.tsx** | Mission and vision display component |
| **Team.tsx** | Team members showcase component |
| **Values.tsx** | Company values section component |
| **WhySection.tsx** | Why choose us section component |

### Utility Components (src/app/components/figma/)
| File | Purpose |
|------|---------|
| **ImageWithFallback.tsx** | Image component with fallback support |

## 🎨 UI Component Library (src/app/components/ui/)

### Form Components
| File | Purpose |
|------|---------|
| **button.tsx** | Button component with variants |
| **input.tsx** | Text input component |
| **textarea.tsx** | Multi-line text input |
| **checkbox.tsx** | Checkbox input |
| **radio-group.tsx** | Radio button group |
| **select.tsx** | Dropdown select component |
| **switch.tsx** | Toggle switch component |
| **slider.tsx** | Range slider component |
| **label.tsx** | Form label component |
| **form.tsx** | Form wrapper with validation |
| **input-otp.tsx** | OTP/PIN input component |

### Layout Components
| File | Purpose |
|------|---------|
| **card.tsx** | Card container component |
| **dialog.tsx** | Modal dialog component |
| **drawer.tsx** | Slide-out drawer component |
| **sheet.tsx** | Bottom sheet component |
| **tabs.tsx** | Tabbed interface component |
| **accordion.tsx** | Collapsible accordion component |
| **collapsible.tsx** | Collapsible content component |
| **separator.tsx** | Visual separator line |
| **scroll-area.tsx** | Custom scrollable area |
| **resizable.tsx** | Resizable panels component |
| **sidebar.tsx** | Sidebar navigation component |
| **aspect-ratio.tsx** | Aspect ratio container |

### Navigation Components
| File | Purpose |
|------|---------|
| **navigation-menu.tsx** | Navigation menu with dropdowns |
| **dropdown-menu.tsx** | Dropdown menu component |
| **context-menu.tsx** | Right-click context menu |
| **menubar.tsx** | Application menu bar |
| **breadcrumb.tsx** | Breadcrumb navigation |
| **pagination.tsx** | Pagination controls |
| **command.tsx** | Command palette component |

### Feedback Components
| File | Purpose |
|------|---------|
| **alert.tsx** | Alert/notification banner |
| **alert-dialog.tsx** | Alert confirmation dialog |
| **toast/sonner.tsx** | Toast notification component |
| **progress.tsx** | Progress bar component |
| **skeleton.tsx** | Loading skeleton component |

### Display Components
| File | Purpose |
|------|---------|
| **avatar.tsx** | User avatar component |
| **badge.tsx** | Badge/tag component |
| **tooltip.tsx** | Hover tooltip component |
| **popover.tsx** | Popover overlay component |
| **hover-card.tsx** | Hover card component |
| **carousel.tsx** | Image/content carousel |
| **chart.tsx** | Chart component wrapper |
| **table.tsx** | Data table component |
| **calendar.tsx** | Date picker calendar |

### Utility Components
| File | Purpose |
|------|---------|
| **toggle.tsx** | Toggle button component |
| **toggle-group.tsx** | Toggle button group |
| **utils.ts** | Utility functions (cn, etc.) |
| **use-mobile.ts** | Mobile detection hook |

## 🎨 Styling Files (src/styles/)

| File | Purpose |
|------|---------|
| **index.css** | Main CSS entry point |
| **tailwind.css** | Tailwind CSS directives (@tailwind base, etc.) |
| **theme.css** | Custom theme variables and tokens |
| **fonts.css** | Google Fonts imports (Poppins) |

## 📊 Project Statistics

### File Count Summary
```
Documentation Files:      10
Configuration Files:       4
Application Files:        13 pages
Component Files:          10 feature components
UI Components:            47 reusable components
Style Files:               4
Total Files:              88+
```

### Lines of Code (Approximate)
```
TypeScript/TSX:       ~15,000 lines
CSS:                  ~1,000 lines
Documentation:        ~3,500 lines
Configuration:        ~200 lines
Total:                ~19,700 lines
```

### Component Breakdown
```
Page Components:      10
Layout Components:     2
Feature Components:    8
UI Components:        47
Utility Components:    2
Total Components:     69
```

## 🎯 Quick File Access

### Most Frequently Modified Files
1. **src/app/App.tsx** - Main routing logic
2. **src/app/components/Header.tsx** - Global navigation
3. **src/app/components/Footer.tsx** - Global footer
4. **src/app/components/NewHome.tsx** - Homepage
5. **src/app/components/BookingModal.tsx** - Booking form
6. **package.json** - Dependencies

### Configuration Files
1. **vite.config.ts** - Build configuration
2. **tsconfig.json** - TypeScript settings
3. **postcss.config.mjs** - CSS processing
4. **package.json** - Project settings

### Documentation to Read First
1. **README.md** - Start here
2. **QUICKSTART.md** - Get started quickly
3. **DOCUMENTATION.md** - Technical details
4. **DEPLOYMENT.md** - When ready to deploy

## 📦 File Size Estimates

### Large Files (> 500 lines)
- NewHome.tsx (~800 lines)
- About.tsx (~600 lines)
- Services.tsx (~550 lines)
- BookingModal.tsx (~700 lines)

### Medium Files (200-500 lines)
- Projects.tsx (~400 lines)
- Blog.tsx (~350 lines)
- OurBrand.tsx (~450 lines)
- PrivacyPolicy.tsx (~300 lines)
- TermsConditions.tsx (~400 lines)

### Small Files (< 200 lines)
- Most UI components (~50-150 lines each)
- Header.tsx (~120 lines)
- Footer.tsx (~100 lines)

## 🔍 File Search Quick Reference

### Find Components
```bash
# All page components
src/app/components/*.tsx

# UI components
src/app/components/ui/*.tsx

# Utility components
src/app/components/figma/*.tsx
```

### Find Documentation
```bash
# All documentation
*.md

# Specific docs
README.md, DEPLOYMENT.md, DOCUMENTATION.md
```

### Find Styles
```bash
# All style files
src/styles/*.css
```

### Find Config
```bash
# All config files
*.config.* *.json
```

## 📝 File Naming Conventions

### Components
- **PascalCase** for component files: `NewHome.tsx`, `BookingModal.tsx`
- **Descriptive names**: `PrivacyPolicy.tsx`, not `Page3.tsx`
- **Suffix with .tsx**: All React components use TypeScript

### Styles
- **lowercase** with hyphens: `fonts.css`, `theme.css`
- **Descriptive names**: `tailwind.css`, `index.css`

### Documentation
- **UPPERCASE** for important docs: `README.md`, `CHANGELOG.md`
- **PascalCase** for guides: `QuickStart.md` (shown as QUICKSTART.md)

### Configuration
- **lowercase** with dots: `vite.config.ts`, `package.json`
- **Standard names**: Following framework conventions

## 🚀 Getting Started with Files

### For Developers
1. Read `README.md` first
2. Check `QUICKSTART.md` for setup
3. Review `src/app/App.tsx` for structure
4. Explore `src/app/components/` for pages
5. Check `src/app/components/ui/` for reusable components

### For Designers
1. Review `src/styles/theme.css` for colors
2. Check page components for layouts
3. See `src/app/components/ui/` for UI elements

### For DevOps
1. Read `DEPLOYMENT.md`
2. Check `vite.config.ts` for build config
3. Review `package.json` for scripts
4. See `.gitignore` for excluded files

## 📞 Support

For questions about specific files or their purposes:
- **Email:** info@ganeshadhari.com
- **Documentation:** See relevant .md files
- **GitHub:** Open an issue

---

**Last Updated:** January 29, 2026  
**Project Version:** 1.0.0  
**Total Files:** 88+
