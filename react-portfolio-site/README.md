# React Portfolio Site

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, Vite, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with DaisyUI components
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Smooth Animations**: CSS animations and hover effects
- **Contact Form**: Interactive contact form (backend integration pending)
- **Project Showcase**: Featured projects with detailed information
- **Skills Display**: Categorized technical skills with icons
- **Professional Timeline**: Work experience and education sections

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Icons**: React Icons
- **Routing**: React Router DOM (ready for implementation)
- **Testing**: Vitest, React Testing Library, Fast-check (for property-based testing)
- **Email**: Nodemailer (backend setup pending)

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5174`

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:ui
```

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout components
│   ├── sections/        # Hero, About, Skills, Projects, Contact
│   ├── ui/             # Reusable UI components
│   └── forms/          # Form components
├── contexts/           # React Context (Theme)
├── hooks/             # Custom hooks
├── utils/             # Utility functions
├── assets/            # Images, resume files
└── test/              # Test setup and utilities
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: `#29332C` (Dark green)
- Secondary: `#BDB284` (Gold)
- Background Light: `#f7f7f7`
- Background Dark: `#181a19`

### Content
Update the content in the respective section components:
- Personal info: `src/components/sections/Hero.jsx`
- About content: `src/components/sections/About.jsx`
- Skills: `src/components/sections/Skills.jsx`
- Projects: `src/components/sections/Projects.jsx`

## 🚧 Next Steps

1. **Backend Integration**: Set up Express server with Nodemailer for contact form
2. **Routing**: Implement React Router for detailed project pages
3. **Content Management**: Add dynamic content loading
4. **Performance**: Implement lazy loading and code splitting
5. **SEO**: Add meta tags and structured data
6. **Analytics**: Integrate analytics tracking

## 📝 License

This project is open source and available under the [MIT License](LICENSE).