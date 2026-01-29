# 🌱 Ganeshadhari Agriculture - Organic Farming Website

A modern, responsive web application for Ganeshadhari Agriculture, showcasing their organic farming services, farm plot booking system, and comprehensive information about sustainable agriculture practices.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages & Components](#pages--components)
- [Styling](#styling)
- [Contact Information](#contact-information)

## 🌾 Overview

Ganeshadhari Agriculture is a full-featured organic farming website based in Raipur, Chhattisgarh. The platform allows users to explore organic farming services, book farm plots, read informative blog posts, and learn about sustainable agriculture practices.

**Location:** Block A LIG Indraprashta Raipura Chowk Raipur, Chhattisgarh 492013, India

## ✨ Features

### Core Features
- 🏡 **Farm Plot Booking System** - Interactive booking modal with comprehensive form
- 🌐 **Multi-language Support** - English/Hindi language toggle
- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean design with natural greens, earth tones, and warm accents
- 🔒 **Legal Pages** - Privacy Policy, Terms & Conditions, and Sitemap

### Main Pages
1. **Home Page**
   - Hero section with organic farm background
   - Features showcase
   - Why Choose Us section
   - Customer testimonials
   - Contact form

2. **About Page**
   - Company story and mission
   - Vision and values
   - Team members
   - Organic certifications
   - Farming practices

3. **Services Page**
   - Plot Booking
   - Organic Farming
   - Farm Management
   - Harvest Delivery
   - Farm Tours
   - Agricultural Consulting

4. **Our Brand Page**
   - Ownership model explanation
   - Investment benefits
   - How it works
   - Success stories

5. **Projects Page**
   - Portfolio of completed and ongoing projects
   - Filterable by status (All, Ongoing, Completed)
   - Pagination support

6. **Blog Page**
   - Latest articles on organic farming
   - Search functionality
   - Category filters
   - Sidebar with recent posts

7. **Contact Page**
   - Contact form
   - Location map
   - Business hours
   - Direct contact information

8. **Legal Pages**
   - Privacy Policy
   - Terms & Conditions
   - Interactive Sitemap

### Key Components
- **Booking Modal** - Multi-step form with personal info, plot configuration, benefits display, and testimonials
- **Header** - Navigation with language toggle
- **Footer** - Comprehensive footer with social links and navigation
- **Responsive Navigation** - Mobile-friendly menu system

## 🛠 Technologies Used

### Frontend Framework & Libraries
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework

### UI Components & Icons
- **Lucide React** - Icon library
- **Motion/React** (Framer Motion) - Animation library
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Component variant management

### Form Handling
- **React Hook Form** - Form state management and validation

### Styling Tools
- **PostCSS** - CSS processing
- **clsx** - Conditional class names
- **tailwind-merge** - Merge Tailwind classes

## 📁 Project Structure

```
ganeshadhari-agriculture/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Main application component with routing
│   │   └── components/
│   │       ├── About.tsx              # About page
│   │       ├── Blog.tsx               # Blog listing page
│   │       ├── BookingModal.tsx       # Farm plot booking modal
│   │       ├── Contact.tsx            # Contact page with form
│   │       ├── Footer.tsx             # Site footer
│   │       ├── Header.tsx             # Site header with navigation
│   │       ├── Hero.tsx               # Hero section component
│   │       ├── MissionVision.tsx      # Mission & Vision section
│   │       ├── NewHome.tsx            # Home page
│   │       ├── OurBrand.tsx           # Brand/Ownership page
│   │       ├── PrivacyPolicy.tsx      # Privacy policy page
│   │       ├── Projects.tsx           # Projects listing page
│   │       ├── Services.tsx           # Services page
│   │       ├── Sitemap.tsx            # Interactive sitemap
│   │       ├── Team.tsx               # Team members section
│   │       ├── TermsConditions.tsx    # Terms & conditions page
│   │       ├── Values.tsx             # Company values section
│   │       ├── WhySection.tsx         # Why choose us section
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx  # Image component with fallback
│   │       └── ui/                    # Reusable UI components
│   │           ├── accordion.tsx
│   │           ├── alert-dialog.tsx
│   │           ├── alert.tsx
│   │           ├── avatar.tsx
│   │           ├── badge.tsx
│   │           ├── button.tsx
│   │           ├── calendar.tsx
│   │           ├── card.tsx
│   │           ├── checkbox.tsx
│   │           ├── dialog.tsx
│   │           ├── dropdown-menu.tsx
│   │           ├── form.tsx
│   │           ├── input.tsx
│   │           ├── label.tsx
│   │           ├── select.tsx
│   │           ├── textarea.tsx
│   │           ├── tabs.tsx
│   │           └── ... (more UI components)
│   │
│   ├── styles/
│   │   ├── fonts.css              # Font imports
│   │   ├── index.css              # Main CSS entry
│   │   ├── tailwind.css           # Tailwind directives
│   │   └── theme.css              # Theme variables and tokens
│   │
│   └── imports/                   # Imported assets (SVGs, images)
│
├── public/                        # Static assets
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Vite configuration
├── postcss.config.mjs             # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ganeshadhari-agriculture.git
   cd ganeshadhari-agriculture
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 📄 Pages & Components

### Page Routes (Client-Side Routing)
The application uses state-based routing. All pages are managed through the main `App.tsx` component:

- `/` - Home Page
- `/about` - About Us
- `/services` - Services
- `/brand` - Our Brand
- `/projects` - Projects
- `/blog` - Blog
- `/contact` - Contact
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions
- `/sitemap` - Sitemap

### Key Components

#### Header Component
- Logo and branding
- Navigation menu
- Language toggle (ENG/HINDI)
- "Book Your Farm Plot" CTA button

#### Booking Modal
- Personal information form (Name, Email, Phone, Address)
- Plot configuration (Size selection, Duration)
- Benefits display (Guaranteed Organic, Expert Guidance, Doorstep Delivery)
- Customer testimonials
- Form validation with React Hook Form

#### Footer Component
- Company information
- Quick links (Explore, Services)
- Contact details
- Social media links
- Legal links (Privacy Policy, Terms & Conditions, Sitemap)

## 🎨 Styling

### Design System
The website uses a carefully crafted design system with:

- **Primary Colors**
  - Green: `#4caf50` (Primary actions)
  - Dark Green: `#2d5f3f` (Text and accents)
  - Forest Green: `#1a3a2e` (Headers and footers)
  - Warm Yellow: `#ffd54f` (Highlights and CTAs)

- **Typography**
  - Primary Font: Poppins (Google Fonts)
  - Modern, clean, and highly readable

- **Spacing & Layout**
  - Max container width: 1280px (7xl)
  - Consistent padding: 6/16 (mobile/desktop)
  - Responsive breakpoints follow Tailwind defaults

### Tailwind CSS v4
The project uses Tailwind CSS v4 with custom theme tokens defined in `src/styles/theme.css`.

## 📞 Contact Information

**Ganeshadhari Agriculture**

**Address:**  
Block A LIG Indraprashta Raipura Chowk Raipur  
Chhattisgarh 492013, India

**Farm Location:**  
Indraprastha Phase 2, Raipura, Changurabhata, Raipur, Chhattisgarh 492013

**Phone:** +91 98765 43210  
**Email:** info@ganeshadhari.com  
**Privacy:** privacy@ganeshadhari.com  
**Legal:** legal@ganeshadhari.com

**Social Media:**
- Facebook
- Instagram
- Twitter
- LinkedIn

## 📝 License

© 2026 Ganeshadhari Agriculture. All Rights Reserved.

## 🤝 Contributing

This is a proprietary project for Ganeshadhari Agriculture. For any inquiries or suggestions, please contact us through our website.

## 🐛 Issues & Support

For technical issues or feature requests, please contact the development team or open an issue in the repository.

---

**Built with ❤️ for sustainable agriculture and organic farming**
