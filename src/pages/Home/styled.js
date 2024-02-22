import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerHome = styled.section`
  section {
    h1 {
      font-size: ${fontSizes.fontSizeLg};
      color: ${colors.primary['900']};

      @media screen and (max-width: 600px) {
        font-size: ${fontSizes.fontSizeMd};
      }
    }
  }

  section + section {
    margin-top: 4rem;
  }
`;
