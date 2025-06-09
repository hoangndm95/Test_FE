import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={isOpen ? { height: '100vh', overflow: 'hidden' } : {}}>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
