import styled, { css } from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import AuthButtons from './AuthButtons';
import { media } from '@/styles/mixins';
import MenuButtonClose from '@/assets/icons/menu-close.svg';
import MenuButtonOpen from '@/assets/icons/menu-open.svg';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  background: #1f1f1f;
  padding: 20px 40px;

  ${media.tablet(css`
    padding: 20px 20px;
  `)}

  ${media.smallMobile(css`
    padding: 12px 20px;
  `)}
`;

const MenuButton = styled.div`
  cursor: pointer;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
  display: none;

  ${media.tablet(css`
    display: flex;
  `)}
`;

const Header = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  return (
    <HeaderContainer>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? (
          <img src={MenuButtonClose} alt='Menu Button Close' />
        ) : (
          <img src={MenuButtonOpen} alt='Menu Button Open' />
        )}
      </MenuButton>
      <Logo />
      <Navigation toggleMenu={toggleMenu} isOpen={isOpen} />
      <AuthButtons />
    </HeaderContainer>
  );
};

export default Header;
