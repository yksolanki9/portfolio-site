# Portfolio Website - Yash Solanki

A modern, responsive portfolio website built with Gatsby, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Glass morphism effects, 3D animations, and neon glows
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Lazy loading, optimized animations, and efficient scroll handling
- **TypeScript**: Fully typed for better development experience
- **Modular Architecture**: Well-organized code structure for maintainability

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── icons/           # SVG icon components
│   ├── ui/              # Reusable UI components
│   ├── About.tsx        # About section component
│   ├── Contact.tsx      # Contact section component
│   ├── Experience.tsx   # Experience timeline component
│   ├── Home.tsx         # Hero section component
│   ├── NavBar.tsx       # Navigation component
│   ├── Projects.tsx     # Projects showcase component
│   └── index.ts         # Component exports
├── constants/           # Application constants
│   ├── navigation.ts    # Navigation menu items
│   └── index.ts         # Constants exports
├── data/               # Static data files
│   ├── data.ts         # Combined application data
│   └── index.ts        # Data exports
├── hooks/              # Custom React hooks
│   ├── useMousePosition.ts # Mouse position tracking
│   ├── useScrollProgress.ts # Scroll progress tracking
│   └── index.ts        # Hook exports
├── pages/              # Gatsby pages
│   ├── index.tsx       # Main page
│   └── 404.tsx         # 404 error page
├── styles/             # CSS files
│   ├── animations.css  # Animation styles
│   ├── base.css        # Base styles
│   ├── components.css  # Component styles
│   ├── global.css      # Global styles
│   └── index.css       # Main CSS entry point
├── types/              # TypeScript type definitions
│   └── index.ts        # Type exports
└── utils/             # Utility functions
    ├── animations.ts   # Animation utilities
    ├── badge-url-mapping.ts # Badge URL mappings
    └── index.ts        # Utility exports
```

## 🛠️ Tech Stack

- **Framework**: Gatsby 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: CSS animations + React transitions
- **Icons**: Custom SVG components + FontAwesome
- **Development**: Modern ES2022+ features

## 🏗️ Architecture Highlights

### Component Organization

- **Modular Components**: Each component has a single responsibility
- **Icon Components**: All SVG icons extracted to reusable components
- **UI Components**: Shared UI elements like ScrollProgressBar, BackToTopButton
- **Type Safety**: Full TypeScript coverage with organized type definitions

### Performance Optimizations

- **Optimized Scroll Handlers**: RequestAnimationFrame-based scroll handling
- **Lazy Loading**: Components load when needed
- **Efficient Animations**: CSS-based animations with fallbacks
- **Bundle Optimization**: Tree shaking and code splitting

### State Management

- **Custom Hooks**: Reusable logic extracted to custom hooks
- **Local State**: Component-level state management
- **Optimized Updates**: Memoized callbacks and optimized re-renders

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build
```

### Development Commands

```bash
npm run develop     # Start development server
npm run build      # Build for production
npm run serve      # Serve production build
npm run clean      # Clean Gatsby cache
npm run typecheck  # Run TypeScript check
npm run deploy     # Deploy to GitHub Pages
```

## 🎨 Customization

### Adding New Components

1. Create component in `src/components/`
2. Add types to `src/types/index.ts`
3. Export from `src/components/index.ts`

### Adding New Data

1. Create data file in `src/data/`
2. Define types in `src/types/index.ts`
3. Export from `src/data/index.ts`

### Adding New Styles

1. Add component-specific styles to `src/styles/components.css`
2. Add animations to `src/styles/animations.css`
3. Import in `src/styles/index.css`

### Adding New Icons

1. Create icon component in `src/components/icons/`
2. Export from `src/components/icons/index.ts`
3. Use throughout the application

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+
- Large Desktop: 1440px+

## ⚡ Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Image Optimization**: Gatsby's built-in image optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the established patterns
4. Ensure TypeScript compliance
5. Test across different devices
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by Yash Solanki
