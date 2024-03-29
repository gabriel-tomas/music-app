import styled from 'styled-components';

import colors from '../../../config/colors';
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

export const ContainerNotFound = styled.div`
  position: absolute;
  top: calc(50% + 3rem);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  h1 {
    text-align: center;
    font-size: ${fontSizes.fontSizeMd};
    color: ${colors.text['900']};
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-inline: 1rem;
  }

  p {
    text-align: center;
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['900']};
    font-weight: 400;
    margin-top: 1rem;
    margin-inline: 1rem;
  }
`;
