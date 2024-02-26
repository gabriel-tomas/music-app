import { Link } from 'react-router-dom';

import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerCategories = styled.div`
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

export const ContainerCategoryItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: .7rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const ContainerCategoryItem = styled(Link)`
  background-color: ${colors.cardColor};
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  .container-img {
    width: 100%;
    background-color: transparent;

    img {
      border-radius: .6rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);

      @media screen and (max-width: 600px) {
        border-radius: .4rem;
      }
    }
  }

  .container-bottom {
    .category-title {
      display: block;
      max-height: 50px;
      font-size: ${fontSizes.fontSizeBase};
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      color: ${colors.text['950']};
    }
  }
`;
