# Quick Start Guide

Get the Ganeshadhari Agriculture website up and running in minutes!

## Prerequisites

Before you begin, ensure you have:
- **Node.js** version 16.x or higher ([Download here](https://nodejs.org/))
- **pnpm** package manager (recommended) or npm
- **Git** for version control
- A code editor (VS Code recommended)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ganeshadhari-agriculture.git
cd ganeshadhari-agriculture
```

### 2. Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

### 3. Start Development Server

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

### 4. Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

You should see the Ganeshadhari Agriculture homepage! 🎉

## Project Structure at a Glance

```
ganeshadhari-agriculture/
├── src/                      # Source code
│   ├── app/
│   │   ├── App.tsx          # Main app component
│   │   └── components/      # All React components
│   ├── styles/              # CSS and styling
│   └── imports/             # Images and assets
├── public/                  # Static files
├── README.md               # Main documentation
├── DEPLOYMENT.md           # Deployment guide
├── DOCUMENTATION.md        # Technical docs
└── package.json            # Dependencies
```

## Available Commands

### Development
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Code Quality
```bash
pnpm lint         # Run linting (if configured)
```

## Making Your First Change

### 1. Update Homepage Text

Open `src/app/components/NewHome.tsx` and find the hero section:

```tsx
<h1 className="text-4xl md:text-6xl mb-6">
  Organic Farming & <br />
  <span className="text-[#ffd54f]">Agriculture</span>
</h1>
```

Change the text and save. The page will hot-reload automatically!

### 2. Change Colors

Colors are defined in the components. To change the primary green color:

Find instances of:
- `bg-[#4caf50]` (background)
- `text-[#4caf50]` (text)
- `border-[#4caf50]` (borders)

Replace with your preferred color code.

### 3. Add a New Section

Create a new component in `src/app/components/`:

```tsx
// MySection.tsx
export default function MySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl text-[#2d5f3f] mb-6">My New Section</h2>
        <p className="text-gray-700">Content goes here...</p>
      </div>
    </section>
  );
}
```

Import and use it in `NewHome.tsx` or another page component.

## Common Tasks

### Update Contact Information

Edit `src/app/components/Footer.tsx` and `src/app/components/Contact.tsx`:

```tsx
// Update phone
<span className="text-gray-300">+91 YOUR-PHONE-NUMBER</span>

// Update email
<span className="text-gray-300">your-email@domain.com</span>

// Update address
<span className="text-gray-300">Your Address Here</span>
```

### Update Social Media Links

In `src/app/components/Footer.tsx`, update the href attributes:

```tsx
<a href="https://facebook.com/yourpage" className="...">
  <Facebook className="w-5 h-5" />
</a>
```

### Change Logo

Replace the logo asset and update the import in:
- `src/app/components/Header.tsx`
- `src/app/components/Footer.tsx`

## Customization Guide

### Fonts

Fonts are loaded in `src/styles/fonts.css`. To change the font:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your font
3. Add import to `fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```
4. Update font-family in `theme.css`

### Theme Colors

Main colors are defined throughout components using Tailwind classes:

**Primary Actions:**
- `bg-[#4caf50]` → Change to your primary color
- `hover:bg-[#45a049]` → Change to hover state

**Text/Headings:**
- `text-[#2d5f3f]` → Change to your text color

**Backgrounds:**
- `bg-[#1a3a2e]` → Change to your dark background

**Accents:**
- `text-[#ffd54f]` → Change to your accent color

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
pnpm dev -- --port 3000
```

### Dependencies Issues

Clear node_modules and reinstall:
```bash
rm -rf node_modules
pnpm install
```

### Build Errors

Check TypeScript errors:
```bash
pnpm build
```

Fix any type errors in the output.

### Images Not Loading

Ensure images are:
- In the correct import directory
- Properly imported at the top of components
- Using the correct asset scheme

## Next Steps

### 1. Read the Documentation
- **README.md** - Project overview
- **DOCUMENTATION.md** - Technical details
- **CONTRIBUTING.md** - Contribution guidelines
- **DEPLOYMENT.md** - Deploy to production

### 2. Explore Components
Navigate through `src/app/components/` to understand the structure:
- `Header.tsx` - Navigation
- `Footer.tsx` - Footer
- `NewHome.tsx` - Homepage
- `BookingModal.tsx` - Booking form
- And more...

### 3. Test the Features
- Navigate through all pages
- Fill out the booking form
- Test on mobile devices
- Try the language toggle

### 4. Customize to Your Needs
- Update all text content
- Replace placeholder images
- Modify colors and fonts
- Add new sections

### 5. Deploy
Follow the [DEPLOYMENT.md](./DEPLOYMENT.md) guide to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Your own server

## Getting Help

### Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

### Support
- Email: info@ganeshadhari.com
- GitHub Issues: [Open an issue](https://github.com/yourusername/ganeshadhari-agriculture/issues)
- Documentation: Check DOCUMENTATION.md

## Tips for Success

1. **Start Small** - Make small changes and test frequently
2. **Use Git** - Commit your changes regularly
3. **Test Responsively** - Always check mobile and tablet views
4. **Keep It Simple** - Don't over-complicate the design
5. **Performance Matters** - Keep an eye on bundle size
6. **Accessibility** - Ensure your site is accessible to all users

## Quick Reference

### Key Files
- `src/app/App.tsx` - Main routing logic
- `src/app/components/Header.tsx` - Navigation bar
- `src/app/components/Footer.tsx` - Site footer
- `src/app/components/NewHome.tsx` - Homepage
- `src/styles/theme.css` - Theme variables
- `package.json` - Dependencies

### Useful Tailwind Classes
```css
Container:     max-w-7xl mx-auto px-6 md:px-16
Section:       py-16 or py-20
Text:          text-[#2d5f3f]
Background:    bg-[#4caf50]
Buttons:       px-6 py-2 rounded-full
Hover:         hover:bg-[#45a049]
Responsive:    md:text-lg (medium screens and up)
```

---

**Happy Coding! 🌱**

If you run into any issues, don't hesitate to reach out or check the documentation files.
