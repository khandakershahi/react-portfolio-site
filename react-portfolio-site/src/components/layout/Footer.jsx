import { FaCode, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import logo from '../../assets/images/favicon.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-primary text-white relative mt-12">
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
          {/* Brand and Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Khandaker Shahi
                </span>
                <span className="text-sm font-medium text-secondary">
                  Frontend Web Developer
                </span>
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Frontend Web Developer specializing in modern web technologies and user-centric design. Building fast, SEO-friendly applications with React, Next.js, and WordPress.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Subscribe to newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="flex-none rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Menu
              </h3>
              <a className="text-base text-gray-300 transition-colors hover:text-secondary hover:translate-x-1 duration-200" href="#home">
                Home
              </a>
              <a className="text-base text-gray-300 transition-colors hover:text-secondary hover:translate-x-1 duration-200" href="#about">
                About
              </a>
              <a className="text-base text-gray-300 transition-colors hover:text-secondary hover:translate-x-1 duration-200" href="#projects">
                Projects
              </a>
              <a className="text-base text-gray-300 transition-colors hover:text-secondary hover:translate-x-1 duration-200" href="#contact">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Resources
              </h3>
              <a className="text-base text-gray-300 transition-colors hover:text-secondary hover:translate-x-1 duration-200" href="#resume">
                Resume
              </a>
              <a className="text-base text-gray-300 transition-colors hover:text-secondary hover:translate-x-1 duration-200" href="#blog">
                Blog
              </a>
              <a className="text-base text-gray-300 transition-colors hover:text-secondary hover:translate-x-1 duration-200" href="#snippets">
                Snippets
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Connect
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/khandakershahi"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-secondary hover:text-primary text-gray-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/khandakershahi"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-secondary hover:text-primary text-gray-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://twitter.com/khandakershahi"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-secondary hover:text-primary text-gray-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="mailto:hello@khandakershahi.com"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-secondary hover:text-primary text-gray-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                <p>Available for freelance work.</p>
                <a className="text-secondary hover:underline underline-offset-4 decoration-secondary" href="#contact">
                  Hire me →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2024 Khandaker Shahi. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a className="text-sm text-gray-400 hover:text-secondary transition-colors" href="#privacy">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-400 hover:text-secondary transition-colors" href="#terms">
              Terms of Service
            </a>
          </div>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Designed & Built with <span className="text-secondary">♥</span> by Khandaker Shahi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;