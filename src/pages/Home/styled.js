import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerHome = styled.section`
  section {
    margin-top: 2rem;

    h1 {
      font-size: ${fontSizes.fontSizeLg};
      color: ${colors.primary['900']};
    }
  }

  section + section {
    margin-top: 4rem;
  }
`;
