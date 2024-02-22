import styled from 'styled-components';

/* import colors from '../../config/colors'; */
import fontSizes from '../../config/fontSizes';

export const ContainerSearchResults = styled.div`
`;

export const ContainerSearchResult = styled.div`
  .title-item-section {
    font-size: ${fontSizes.fontSizeMd};
  }

  & + & {
    margin-top: 3rem;
  }
`;
