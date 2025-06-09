import { media } from '@/styles/mixins';
import { fontFamilies } from '@/styles/typography';
import styled, { css } from 'styled-components';

interface SlideItemProps {
  type: 'grid' | 'single';
}

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &.grid {
    .swiper-backface-hidden .swiper-slide {
      width: 100% !important;
      margin-right: 12px !important;
    }
  }

  &.single {
    .swiper-backface-hidden .swiper-slide {
      margin-right: 0px !important;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 14px;
 
  ${media.smallMobile(css`
    margin-bottom: 10px;
  `)}
`;

export const Title = styled.h2`
  font-style: italic;
  font-size: 32px;
  font-weight: 900;
  color: #ffc700;
  font-family: ${fontFamilies.barlow};

  ${media.smallMobile(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 12px;

  ${media.smallMobile(css`
    gap: 4px;
  `)}
`;

export const NavigationButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #383a42;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  img {
    width: 24px;
    height: 24px;
  }

  ${media.smallMobile(css`
    width: 32px;
    height: 32px;
  `)}
`;

export const SlideItem = styled.div<SlideItemProps>`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;

  ${(props) =>
    props.type === 'grid' &&
    css`
      img {
        height: 254px;
        width: 180px;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 12px;
      }

      h3 {
        font-size: 16px;
        color: #fff;
        font-weight: 500;
      }

      p {
        font-size: 14px;
        color: #ffc700;
      }

      ${media.smallMobile(css`
        width: 102px;
        height: 140px;
        border-radius: 6.86px;
      `)}
    `}

  ${(props) =>
    props.type === 'single' &&
    css`
      width: 100%;
      img {
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }

      h3 {
        font-size: 18px;
        color: #fff;
        font-weight: 600;
      }
    `}
`;
