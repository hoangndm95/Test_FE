import { css } from 'styled-components';

export const breakpoints = {
  desktop: '1440px',
  laptop: '1200px',
  tablet: '992px',
  mobile: '768px',
  smallMobile: '576px',
};

type CSSReturn = ReturnType<typeof css>;

export const media = {
  smallMobile: (styles: CSSReturn) => css`
    @media (max-width: ${breakpoints.smallMobile}) {
      ${styles}
    }
  `,
  mobile: (styles: CSSReturn) => css`
    @media (max-width: ${breakpoints.smallMobile}) {
      ${styles}
    }
  `,
  tablet: (styles: CSSReturn) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  laptop: (styles: CSSReturn) => css`
    @media (max-width: ${breakpoints.laptop}) {
      ${styles}
    }
  `,
  desktop: (styles: CSSReturn) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${styles}
    }
  `,
  custom: (maxWidth: string) => (styles: CSSReturn) =>
    css`
      @media (max-width: ${maxWidth}) {
        ${styles}
      }
    `,
};
