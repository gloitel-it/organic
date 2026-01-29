# Project Documentation

## Ganeshadhari Agriculture Website - Technical Documentation

### Project Overview

**Project Name:** Ganeshadhari Agriculture Website  
**Version:** 1.0.0  
**Last Updated:** January 29, 2026  
**Status:** Production Ready

### Business Context

Ganeshadhari Agriculture is an organic farming company based in Raipur, Chhattisgarh, India. This website serves as their digital presence, allowing customers to:
- Learn about organic farming practices
- Book farm plots for ownership or leasing
- Access agricultural consulting services
- Read educational content about sustainable farming
- Contact the company for inquiries

---

## Architecture

### Technology Stack

#### Frontend
- **Framework:** React 18.3.1
- **Language:** TypeScript
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.12
- **Animation:** Motion/React 12.23.24 (Framer Motion)
- **Icons:** Lucide React 0.487.0
- **Form Handling:** React Hook Form 7.55.0

#### UI Components
- **Component Library:** Radix UI (various packages)
- **Utility Libraries:** 
  - clsx (conditional classes)
  - tailwind-merge (merge Tailwind classes)
  - class-variance-authority (variant management)

#### Additional Libraries
- Material UI (@mui/material, @emotion/react, @emotion/styled)
- React DnD (drag and drop)
- Recharts (charts and graphs)
- React Slick (carousels)
- Sonner (toast notifications)

### Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main application with routing logic
│   └── components/
│       ├── Header.tsx             # Global header with navigation
│       ├── Footer.tsx             # Global footer with links
│       ├── NewHome.tsx            # Homepage component
│       ├── About.tsx              # About page
│       ├── Services.tsx           # Services page
│       ├── OurBrand.tsx           # Brand/Ownership page
│       ├── Projects.tsx           # Projects portfolio
│       ├── Blog.tsx               # Blog listing
│       ├── Contact.tsx            # Contact page
│       ├── BookingModal.tsx       # Booking form modal
│       ├── PrivacyPolicy.tsx      # Privacy policy page
│       ├── TermsConditions.tsx    # Terms page
│       ├── Sitemap.tsx            # Interactive sitemap
│       ├── Hero.tsx               # Hero section component
│       ├── MissionVision.tsx      # Mission/Vision section
│       ├── Team.tsx               # Team section
│       ├── Values.tsx             # Values section
│       ├── WhySection.tsx         # Why choose us section
│       ├── figma/
│       │   └── ImageWithFallback.tsx  # Image component
│       └── ui/                    # Reusable UI components
│           ├── button.tsx
│           ├── input.tsx
│           ├── dialog.tsx
│           ├── card.tsx
│           └── ... (30+ components)
│
├── styles/
│   ├── index.css              # Main CSS entry
│   ├── tailwind.css           # Tailwind directives
│   ├── theme.css              # Custom theme tokens
│   └── fonts.css              # Font imports
│
└── imports/                   # Static assets (images, SVGs)
```

---

## Component Documentation

### Core Components

#### App.tsx
**Purpose:** Main application component with routing logic

**State Management:**
- `isBookingModalOpen` - Controls booking modal visibility
- `currentPage` - Manages current page/route
- `shouldScrollToContact` - Handles scroll behavior

**Page Types:**
```typescript
type PageType = 
  | "home" 
  | "brand" 
  | "projects" 
  | "blog" 
  | "about" 
  | "services" 
  | "contact"
  | "privacy"
  | "terms"
  | "sitemap";
```

#### Header.tsx
**Purpose:** Global navigation header

**Props:**
```typescript
interface HeaderProps {
  onBookingClick: () => void;
  onNavigateBrand: () => void;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateBlog: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
  currentPage: PageType;
}
```

**Features:**
- Logo with home navigation
- Navigation menu with active state
- Language toggle (ENG/HINDI)
- "Book Your Farm Plot" CTA button

#### Footer.tsx
**Purpose:** Global footer with links and information

**Props:**
```typescript
interface FooterProps {
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
  onNavigateSitemap?: () => void;
}
```

**Sections:**
- Company information and description
- Explore links (pages)
- Services links
- Contact information
- Social media links
- Legal links

#### BookingModal.tsx
**Purpose:** Farm plot booking form modal

**Props:**
```typescript
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Form Fields:**
- Personal Information: Name, Email, Phone, Address
- Plot Configuration: Size (Small/Medium/Large), Duration
- Benefits display
- Customer testimonials

**Validation:** React Hook Form with custom validation rules

---

## Routing System

The application uses **client-side routing** implemented with React state management. Navigation is handled through callback functions passed as props.

### Route Flow

```
User clicks navigation → 
Handler function updates currentPage state → 
App.tsx renders corresponding component →
Header updates active state
```

### Adding a New Page

1. Create component in `/src/app/components/`
2. Import in `App.tsx`
3. Add page type to `PageType` union
4. Add conditional rendering in `App.tsx`
5. Add navigation handler if needed
6. Update Header navigation if applicable

---

## Styling System

### Color Palette

```css
/* Primary Colors */
--primary-green: #4caf50;      /* Main CTA buttons */
--dark-green: #2d5f3f;         /* Text, headings */
--forest-green: #1a3a2e;       /* Backgrounds, footer */
--warm-yellow: #ffd54f;        /* Highlights, accents */

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-600: #4b5563;
--gray-700: #374151;
```

### Typography

**Font Family:** Poppins (Google Fonts)
- Loaded in `/src/styles/fonts.css`
- Applied globally via theme.css

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Responsive Breakpoints

Following Tailwind defaults:
```
sm: 640px    // Small devices
md: 768px    // Medium devices  
lg: 1024px   // Large devices
xl: 1280px   // Extra large devices
2xl: 1536px  // 2X large devices
```

### Layout Utilities

**Container:**
- Max width: `max-w-7xl` (1280px)
- Padding: `px-6 md:px-16`

**Sections:**
- Vertical padding: `py-16` or `py-20`
- Background colors use the defined color palette

---

## State Management

### Current Implementation

The application uses **React useState** for state management. No external state management library is used.

### State Location

**App.tsx (Global State):**
- `isBookingModalOpen` - Modal visibility
- `currentPage` - Current route/page
- `shouldScrollToContact` - Scroll trigger

**Component Level State:**
- Form inputs (controlled components)
- UI toggles (dropdowns, accordions)
- Local loading states

### Future Considerations

For scaling, consider:
- **React Context** for shared state
- **Zustand** or **Redux Toolkit** for complex state
- **React Query** for server state management

---

## Form Handling

### Booking Form

**Library:** React Hook Form 7.55.0

**Validation Rules:**
```typescript
{
  name: { required: "Name is required" },
  email: { 
    required: "Email is required",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  },
  phone: { 
    required: "Phone is required",
    pattern: /^[0-9]{10}$/
  },
  plotSize: { required: "Please select a plot size" },
  duration: { required: "Please select duration" }
}
```

**Submission Flow:**
1. User fills form
2. Validation on blur and submit
3. Display errors inline
4. On success: Show success message
5. Reset form and close modal

---

## Performance Optimization

### Current Optimizations

1. **Code Splitting**
   - Automatic with Vite
   - Dynamic imports for large components

2. **Image Optimization**
   - Using ImageWithFallback component
   - Lazy loading for images

3. **Bundle Size**
   - Tree-shaking enabled
   - Production build minification

### Recommendations

1. **Lazy Load Routes**
```typescript
const About = lazy(() => import('@/app/components/About'));
```

2. **Image Formats**
   - Use WebP with PNG/JPG fallback
   - Implement responsive images

3. **Caching**
   - Configure service worker
   - Set proper cache headers

---

## Accessibility (a11y)

### Current Implementation

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance

### Checklist

- [x] Semantic HTML
- [x] Keyboard navigation
- [x] Screen reader support
- [x] Focus indicators
- [x] ARIA attributes
- [ ] Skip to content link (future)
- [ ] High contrast mode (future)

---

## SEO Optimization

### Meta Tags

Update in `index.html`:
```html
<title>Ganeshadhari Agriculture - Organic Farming</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

### Structured Data

Consider adding JSON-LD for:
- Organization
- LocalBusiness
- BreadcrumbList

---

## Testing Strategy

### Recommended Testing

1. **Unit Tests**
   - Component logic
   - Utility functions
   - Form validation

2. **Integration Tests**
   - User flows
   - Navigation
   - Form submissions

3. **E2E Tests**
   - Critical user paths
   - Booking flow
   - Contact form

### Tools Recommendation

- **Vitest** for unit tests
- **React Testing Library** for component tests
- **Playwright** or **Cypress** for E2E tests

---

## Future Enhancements

### Phase 2 Features

1. **Backend Integration**
   - API for form submissions
   - Database for bookings
   - Admin dashboard

2. **User Authentication**
   - User accounts
   - Booking history
   - Profile management

3. **Payment Integration**
   - Online payment gateway
   - Booking deposits
   - Invoice generation

4. **Content Management**
   - Blog CMS integration
   - Dynamic content updates
   - Image gallery management

5. **Language Implementation**
   - Complete Hindi translation
   - Language persistence
   - RTL support if needed

6. **Analytics & Monitoring**
   - Google Analytics
   - User behavior tracking
   - Error monitoring (Sentry)

7. **Progressive Web App**
   - Service worker
   - Offline support
   - Install prompt

---

## Support & Maintenance

### Regular Updates

**Monthly:**
- Update dependencies
- Security patches
- Performance monitoring

**Quarterly:**
- Feature additions
- Content updates
- Design improvements

### Monitoring

- **Uptime:** 99.9% target
- **Load Time:** < 3 seconds
- **Core Web Vitals:** Green scores

---

## Contact & Resources

**Technical Support:** info@ganeshadhari.com  
**Repository:** GitHub (update with actual URL)  
**Documentation:** This file  
**Deployment Guide:** See DEPLOYMENT.md  
**Contributing:** See CONTRIBUTING.md  

---

**Last Updated:** January 29, 2026  
**Document Version:** 1.0.0
