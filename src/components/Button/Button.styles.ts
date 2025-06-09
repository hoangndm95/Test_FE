import styled, { css } from 'styled-components';
import { typography } from '../../styles/typography';
import { media } from '@/styles/mixins';

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant: 'primary' | 'secondary';
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 40px;
  padding: 8px 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-style: italic;
  border-radius: 100px;
  font-weight: ${typography.fontWeights.black};
  font-size: 16px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background-color: #ffc700;
      color: #1f1f1f;
      border: none;

      &:hover {
        background-color: #ffc700;
        filter: brightness(1.1);
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: transparent;
      color: #d2d2d2;
      border: 1px solid #ffc700;

      &:hover {
        border-color: #ffe8ab;
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        color: #d2d2d2;
        border: 1px solid #ffc700;
        background-color: transparent;
      }
    `}

  ${media.smallMobile(css`
    padding: 8px 24px;
    height: 36px;
  `)}
`;