import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { media } from '@/styles/mixins';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 32px;

  ${media.tablet(css`
    display: none;
  `)}
`;

const NavTablet = styled.nav`
  display: none;
  margin: 0;
  position: absolute;
  flex-direction: column;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  background: #1f2023;
  z-index: 100;
  gap: 16px;
  padding: 20px;

  &.open {
    ${media.tablet(css`
      display: flex;
    `)}
  }
`;

const NavLink = styled(Link)`
  color: #d2d2d2;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.2s ease;
  padding: 8px 18px;
  border-radius: 100px;
  font-family: 'Neue Haas Display Pro', sans-serif;
  
  &:hover {
    color: #ffc700;
  }

  &.active {
    color: #ffc700;
    background: #383a42;
  }

  ${media.tablet(css`
    height: 48px;
    border-radius: 100px;
    padding: 8px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    text-transform: uppercase;
  `)}
`;

const Navigation = ({ toggleMenu, isOpen }: { toggleMenu: () => void; isOpen: boolean }) => {
  const { pathname } = useLocation();

  const menuItems = [
    { id: 1, label: 'HOME', path: '/' },
    { id: 2, label: 'ITEMS1', path: '/ITEMS1' },
    { id: 3, label: 'ITEMS2', path: '/ITEMS2' },
    { id: 4, label: 'ITEMS3', path: '/ITEMS3' },
    { id: 5, label: 'ITEMS4', path: '/ITEMS4' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <Nav>
        {menuItems.map((item) => (
          <NavLink key={item.id} to={item.path} className={isActive(item.path) ? 'active' : ''}>
            {item.label}
          </NavLink>
        ))}
      </Nav>

      <NavTablet className={isOpen ? 'open' : ''}>
        {menuItems.map((item) => (
          <NavLink
            onClick={toggleMenu}
            key={item.id}
            to={item.path}
            className={isActive(item.path) ? 'active' : ''}
          >
            {item.label}
          </NavLink>
        ))}
      </NavTablet>
    </>
  );
};

export default Navigation;
