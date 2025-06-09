import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '/src/assets/icons/logo.svg';
import { media } from '@/styles/mixins';

const LogoLink = styled(Link)`
  display: flex;
  
  img {
    height: 39px;
    width: 71px;
  }

  ${media.smallMobile(css`
      height: 36px; 
  `)}
`;

const Logo = () => {
  return (
    <LogoLink to="/">
      <img src={logo} alt="ZTECH" />
    </LogoLink>
  );
};

export default Logo;