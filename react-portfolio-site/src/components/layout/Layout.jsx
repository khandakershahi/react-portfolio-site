import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from '../ui/ScrollToTopButton';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-primary dark:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;