import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerLoggedContent = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;

  button {
    font-size: ${fontSizes.fontSizeBase};
    border-radius: unset;
    height: fit-content;
    padding-block: 1rem;
    width: min(250px, 50vw);
    margin-inline: auto;
  }

  button + button {
    border-top: 1px solid ${colors.neutral6};
  }

  button.logout-button {
    background-color: ${colors.primary['300']};
    border-radius: 20rem;
  }
`;
