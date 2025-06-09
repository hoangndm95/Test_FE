import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import installAppImage from '/src/assets/icons/install-app.svg';
import { fontFamilies } from '@/styles/typography';
import { media } from '@/styles/mixins';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 120px;
  margin-top: 70px;
  color: #ffffff;
  border-top: 1px solid rgba(56, 58, 66, 1);
  display: flex;
  justify-content: center;

  ${media.tablet(css`
    padding: 40px 20px;
  `)}
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  ${media.tablet(css`
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  `)}

  ${media.mobile(css`
    grid-template-columns: repeat(2, 1fr);
  `)}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-family: ${fontFamilies.barlow};
  font-style: italic;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 8px;
  color: #ffffff;
  line-height: 28px;

  ${media.tablet(css`
    margin-bottom: 4px;
  `)}
`;

const StyledLink = styled(Link)`
  color: #d2d2d2;
  font-family: ${fontFamilies.neueHaas};
  font-weight: 400;
  font-size: 14px;
  transition: color 0.2s;
  line-height: 20px;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    color: #d2d2d2;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: #ffffff;
    }
  }

  ${media.mobile(css`
    gap: 8px;
  `)}
`;

const InstallButton = styled.img`
  margin-top: 12px;
  cursor: pointer;
  width: 150px;
  height: 44px;
`;

const Footer = () => {
  const aboutLinks = [
    { label: 'Careers', path: '/' },
    { label: 'Company Details', path: '/' },
    { label: 'Terms & Conditions', path: '/' },
    { label: 'Help center', path: '/' },
    { label: 'Privacy Policy', path: '/' },
    { label: 'Affiliate', path: '/' },
  ];

  const productLinks = [
    { label: 'NFT Marketplace', path: '/' },
    { label: 'Slingshot', path: '/' },
    { label: 'Swaps', path: '/' },
    { label: 'NFT Launchpad', path: '/' },
    { label: 'Runes Platform', path: '/' },
    { label: 'Creator Dashboard', path: '/' },
  ];

  const resourceLinks = [
    { label: 'Support', path: '/' },
    { label: 'API', path: '/' },
    { label: 'Feature Requests', path: '/' },
    { label: 'Trust & Safety', path: '/' },
    { label: 'Sitemap', path: '/' },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Title>ABOUT US</Title>
          {aboutLinks.map((link, index) => (
            <StyledLink key={index} to={link.path}>
              {link.label}
            </StyledLink>
          ))}
        </Column>

        <Column>
          <Title>PRODUCTS</Title>
          {productLinks.map((link, index) => (
            <StyledLink key={index} to={link.path}>
              {link.label}
            </StyledLink>
          ))}
        </Column>

        <Column>
          <Title>RESOURCES</Title>
          {resourceLinks.map((link, index) => (
            <StyledLink key={index} to={link.path}>
              {link.label}
            </StyledLink>
          ))}
        </Column>

        <Column>
          <Title>CONTACT US</Title>
          <ContactInfo>
            <a href='mailto:support@tech.email'>support@tech.email</a>
            <a href='mailto:affiliate@tech.com'>affiliate@tech.com</a>
          </ContactInfo>
          <InstallButton src={installAppImage} alt='Install App' />
        </Column>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
