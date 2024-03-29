import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const Title = styled.h1`
  font-size: ${fontSizes.fontSizeMd};
  color: ${colors.text['950']};
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const ContainerInfoBox = styled.div`
  @media screen and (max-height: 760px) {
    max-height: 250px;
    overflow-y: scroll;
  }

  @media screen and (max-height: 481px) {
    max-height: 150px;
  }

  @media screen and (max-height: 348px) {
    max-height: 100px;
  }

  @media screen and (max-height: 310px) {
    max-height: 80px;
  }

  p {
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['950']};
    line-height: 1.73rem;
  }

  p + p {
    margin-top: 1rem;
  }

  p {
    .redirect-project {
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['600']};
    }
    .redirect-project:hover {
      color: ${colors.text['700']};
      text-decoration: underline;
    }
  }
`;
