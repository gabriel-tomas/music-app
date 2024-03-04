import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerNotLogged = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  max-width: 600px;
  margin-inline: auto;
  text-align: center;
  height: calc(100vh - clamp(30px, 20vh, 60px) - 4rem);

  h1 {
    font-size: ${fontSizes.fontSizeLg};
    color: ${colors.text['950']};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['950']};
    margin-bottom: 2rem;
  }

  .redirect-link {
    background-color: ${colors.primary['200']};
    font-size: ${fontSizes.fontSizeBase};
    padding: 1rem 2rem;
    border-radius: 20rem;
    align-self: center;
    font-weight: bold;
  }

  .redirect-link:hover {
    background-color: ${colors.primary['300']};
  }
`;
