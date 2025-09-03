# Modern React Portfolio

A stunning, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Engaging user interactions and hover effects
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **React Icons** - Popular icons as React components
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.jsx` - Name, title, and social links
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer details
- `index.html` - Page title and meta information

### Projects
Add your projects in `src/components/Projects.jsx`:
- Replace placeholder images with your project screenshots
- Update project descriptions and technologies
- Add your GitHub and live demo links

### Skills
Customize your skills in `src/components/Skills.jsx`:
- Add/remove technologies
- Update proficiency levels
- Modify skill categories

### Styling
The design system is built with Tailwind CSS:
- Colors are defined in `tailwind.config.js`
- Custom components are in `src/index.css`
- Modify the color scheme by updating the primary and dark color palettes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

## 📱 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal information and key features
3. **Skills** - Technical skills with proficiency levels
4. **Projects** - Portfolio projects with filtering
5. **Contact** - Contact form and information
6. **Footer** - Social links and additional info

## 🎯 Performance Features

- **Lazy Loading** - Images and components load as needed
- **Optimized Animations** - Smooth 60fps animations
- **Responsive Images** - Optimized for different screen sizes
- **Fast Loading** - Minimal bundle size with code splitting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ using React and Tailwind CSS**
