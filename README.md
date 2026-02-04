# 💼 Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing projects, skills, and professional experience with a clean and elegant design.

🌐 **Live Demo:** [https://thanapol-portfolio-website.vercel.app](https://thanapol-portfolio-website.vercel.app)

## ✨ Features

### 🎨 Modern Design
- **Clean Interface:** Minimalist and professional design
- **Responsive Layout:** Seamlessly adapts to all screen sizes (mobile, tablet, desktop)
- **Smooth Animations:** Engaging user experience with subtle transitions
- **Optimized Performance:** Fast loading times and optimized assets

### 🚀 Built with Next.js
- **App Router:** Latest Next.js architecture for optimal performance
- **Server-Side Rendering (SSR):** Improved SEO and initial page load
- **Static Site Generation (SSG):** Lightning-fast page delivery
- **Image Optimization:** Automatic image optimization with next/image

### 📱 Responsive & Accessible
- **Mobile-First Approach:** Designed for mobile devices first
- **Cross-Browser Compatible:** Works on all modern browsers
- **SEO Optimized:** Proper meta tags and semantic HTML
- **Performance Focused:** Lighthouse score optimized

### 🎯 Key Sections
- **Hero/Landing:** Eye-catching introduction
- **About:** Professional background and introduction
- **Projects:** Showcase of work and achievements
- **Skills:** Technical expertise and capabilities
- **Contact:** Easy ways to get in touch

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bI3ear/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio in action!

## 📁 Project Structure

```
portfolio-website/
├── app/                      # Next.js App Router
│   ├── layout.js            # Root layout component
│   ├── page.js              # Home page
│   ├── globals.css          # Global styles
│   └── components/          # Reusable React components
├── public/                   # Static assets
│   ├── images/              # Images and icons
│   ├── favicon.ico          # Site favicon
│   └── assets/              # Other static files
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JavaScript configuration
├── next.config.mjs          # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3 / Tailwind CSS (if applicable)
- **Font:** [Geist Font](https://vercel.com/font) - Optimized with next/font
- **Code Quality:** ESLint for linting
- **Deployment:** Vercel

## 🎨 Customization Guide

### Updating Personal Information

Edit the content in `app/page.js` to update:
- Your name and title
- Professional summary
- Project descriptions
- Skills and technologies
- Contact information

### Changing Colors and Styles

1. **Global Styles:** Edit `app/globals.css` for site-wide styling
2. **Component Styles:** Modify individual component styles
3. **Theme Colors:** Update CSS custom properties (variables)

Example:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --background: #your-color;
  --text-color: #your-color;
}
```

### Adding New Sections

Create new components in `app/components/`:

```javascript
// app/components/NewSection.js
export default function NewSection() {
  return (
    <section className="new-section">
      {/* Your content here */}
    </section>
  );
}
```

Import and use in `app/page.js`:
```javascript
import NewSection from './components/NewSection';

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <NewSection />
    </>
  );
}
```

### Adding Projects

Update the projects array in your components:

```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project",
    demo: "https://project-demo.vercel.app"
  },
  // Add more projects...
];
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically

# Type Checking (if using TypeScript)
npm run type-check   # Check types
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

This portfolio is optimized for [Vercel](https://vercel.com) deployment:

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import to Vercel**
- Go to [Vercel](https://vercel.com/new)
- Import your GitHub repository
- Vercel will auto-detect Next.js and configure everything
- Click "Deploy"

3. **Done!** Your portfolio is live 🎉

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### GitHub Pages
Use the `next export` command (for static export):
```bash
npm run build
npm run export
```

#### Custom Server
```bash
npm run build
npm run start
# Set up with PM2, Docker, or your preferred method
```

## 🎯 Performance Optimization

### Image Optimization
- Use Next.js `<Image>` component for automatic optimization
- Compress images before adding to `/public`
- Use modern formats (WebP, AVIF)

### Code Splitting
- Leverage Next.js automatic code splitting
- Use dynamic imports for heavy components
```javascript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

### Caching Strategy
- Configure `next.config.mjs` for optimal caching
- Use ISR (Incremental Static Regeneration) where appropriate

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (if using)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Other configurations
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### SEO Configuration

Update metadata in `app/layout.js`:

```javascript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your professional description',
  keywords: ['your', 'keywords', 'here'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Your professional description',
    url: 'https://yourdomain.com',
    siteName: 'Your Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

## 📱 Social Media Integration

### Adding Social Links

```javascript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github-icon'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin-icon'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourhandle',
    icon: 'twitter-icon'
  },
  // Add more social links...
];
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
PORT=3001 npm run dev
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Image Loading Issues
- Ensure images are in the `public/` folder
- Use correct paths (relative to `public/`)
- Check image file extensions

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

### Ideas for Enhancement
- Add dark mode toggle
- Implement blog section
- Add contact form with backend
- Include testimonials section
- Add project filtering/search
- Implement i18n (internationalization)
- Add animations with Framer Motion
- Include resume download feature

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/Enhancement`)
3. Commit your changes (`git commit -m 'Add some Enhancement'`)
4. Push to the branch (`git push origin feature/Enhancement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework for production
- [Vercel](https://vercel.com/) - Hosting and deployment platform
- [Geist Font](https://vercel.com/font) - Beautiful font family
- All open-source contributors

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js Tutorial](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Source code and community

### Web Development Resources
- [React Documentation](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/) - Performance and best practices

## 👤 Author

**bI3ear**

- GitHub: [@bI3ear](https://github.com/bI3ear)
- Portfolio: [Live Site](https://portfolio-website-plum-five-71.vercel.app)

## 📊 Project Stats

![JavaScript](https://img.shields.io/badge/JavaScript-97.2%25-yellow)
![CSS](https://img.shields.io/badge/CSS-2.8%25-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![License](https://img.shields.io/badge/License-MIT-green)

## ⭐ Show Your Support

If you find this portfolio template helpful, please consider giving it a ⭐ on GitHub!

---

Built with ❤️ using [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com)
