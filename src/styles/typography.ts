import { css } from 'styled-components';

export const fontFamilies = {
  barlow: "'Barlow Semi Condensed', sans-serif",
  neueHaas: "'Neue Haas Display Pro', sans-serif",
};

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export const typography = {
  fontSizes: {
    'dm-16': '16px',
    'dm-24': '24px',
  },
  lineHeights: {
    'dm-16': '24px',
    'dm-24': '32px',
  },
  fontWeights,
  fontFamilies,
} as const;

export const headingStyle = css`
  font-family: ${fontFamilies.neueHaas};
  font-weight: ${fontWeights.bold};
`;

export const bodyStyle = css`
  font-family: ${fontFamilies.barlow};
  font-weight: ${fontWeights.regular};
`;

export type Typography = typeof typography;
