import { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import logo from '../../assets/images/favicon.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-primary dark:text-white">
                Khandaker Shahi
              </h2>
              <p className="text-xs font-medium leading-tight text-secondary">
                Frontend Web Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium leading-normal text-primary/70 hover:text-primary dark:text-gray-300 dark:hover:text-secondary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary dark:text-white p-2"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-primary/70 hover:text-primary dark:text-gray-300 dark:hover:text-secondary transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button className="bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors w-fit mt-2">
                Hire Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;