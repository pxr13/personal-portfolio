import styled, { injectGlobal } from 'styled-components';

import media from '../../utils/mediaTemplate';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

export const Wrapper = styled.div`
  color: rgb(66, 66, 65);
  fill: currentcolor;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
    sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.35;
  margin-top: 1.5rem;
`;

export const InnerWrapper = styled.div`
  background-color: rgb(233, 235, 238);
  min-height: 100vh;
  width: 100vw;

  ${media.tablet`height: 100%;`};
`;

export const Container = styled.div`
  margin-top: 2rem;
`;
