import styled from 'styled-components';

/* import colors from '../../config/colors'; */
import fontSizes from '../../../config/fontSizes';

export const ContainerSearchResults = styled.div`
  &.slow-appearance-animation {
    animation: .3s sectionItemsAppear;
  }

  @keyframes sectionItemsAppear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const ContainerSearchResult = styled.div`
  .title-item-section {
    font-size: ${fontSizes.fontSizeMd};
  }

  & + & {
    margin-top: 3rem;
  }
`;
