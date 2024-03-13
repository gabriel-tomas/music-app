import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const Container404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 10rem);
  min-height: calc(100svh - 10rem);

  h1 {
    font-size: ${fontSizes.fontSizeLg};
    color: ${colors.text['950']};
    margin-bottom: .2rem;
  }

  p {
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['950']};
    margin-bottom: 2rem;
  }

  .redirect-link {
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['950']};
    padding: .5rem 1rem;
    background-color: ${colors.primary['300']};
    border-radius: 20rem;
  }

  @media (hover: hover) {
    .redirect-link:hover {
      background-color: ${colors.primary['400']};
    }
  }

  .redirect-link:active {
    background-color: ${colors.primary['500']};
  }

  @media screen and (max-width: 600px) {
    min-height: calc(100vh - 13rem);
    min-height: calc(100svh - 13rem);
  }
`;
