import { createGlobalStyle } from 'styled-components';
import { fontFamilies } from './typography';
import './fonts/barlow.css';
import './fonts/neue-haas.css';

export const GlobalStyles = createGlobalStyle` 
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-gutter: stable;
    font-family: ${fontFamilies.barlow};
  }
 
   body {
    background: #131415;
    color: #FFFFFF;
    font-family: 'Neue Haas Display Pro', sans-serif;
  }
 
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(155, 155, 155, 0.7);
  }

  /* Firefox Scrollbar Styles */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
  img {
    display: block;
    max-width: 100%;
  } 
`;
