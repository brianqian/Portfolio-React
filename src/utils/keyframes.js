import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
0%{opacity: 0}
85%{opacity: 0}
100%{opacity: 1}
`;

export const fadeOut = keyframes`
0%{opacity: 1}
50%{opacity: .75}
100%{opacity: 0}

`;

export const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;
