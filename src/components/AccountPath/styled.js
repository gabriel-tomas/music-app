import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerPaths = styled.div`
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  gap: .4rem;
`;

export const ContainerLink = styled.span`
  display: flex;
  align-items: center;
  gap: .4rem;

  svg {
    height: 100%;
    width: 22px;
  }

  a {
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['950']};
    line-height: 1.18rem;

    @media screen and (max-width: 440px) {
      font-size: calc(${fontSizes.fontSizeSm} + .1rem);
    }
  }

  @media (hover: hover) {
    a:hover {
      text-decoration: underline;
    }
  }
`;
