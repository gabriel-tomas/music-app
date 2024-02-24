import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

const softColors = {
  paleWhite: 'rgba(240, 248, 255, 0.3)',
  paleCream: 'rgba(230, 230, 250, 0.3)',
  lightSlateBlue: 'rgba(210, 180, 222, 0.3)',
  lightSteelBlue: 'rgba(176, 196, 222, 0.3)',
  white: 'rgba(245, 245, 245, 0.3)',
  lightGreen: 'rgba(154, 205, 50, 0.3)',
  pink: 'rgba(255, 182, 193, 0.3)',
  lightPink: 'rgba(255, 160, 122, 0.3)',
  orange: 'rgba(255, 99, 71, 0.3)',
  lightCoral: 'rgba(255, 127, 80, 0.3)',
  darkOrange: 'rgba(255, 140, 0, 0.3)',
  lightGoldenrodYellow: 'rgba(255, 215, 0, 0.3)',
  teal: 'rgba(0, 128, 128, 0.3)',
  indigo: 'rgba(75, 0, 130, 0.3)',
  lightSalmon: 'rgba(188, 143, 143, 0.3)',
  hotPink: 'rgba(255, 20, 147, 0.3)',
  dodgerBlue: 'rgba(30, 144, 255, 0.3)',
  paleVioletRed: 'rgba(255, 105, 180, 0.3)',
  limeGreen: 'rgba(50, 205, 50, 0.3)',
  salmon: 'rgba(250, 128, 114, 0.3)',
  mediumAquamarine: 'rgba(102, 205, 170, 0.3)',
  navy: 'rgba(0, 0, 205, 0.3)',
  royalBlue: 'rgba(186, 85, 211, 0.3)',
  mediumPurple: 'rgba(147, 112, 219, 0.3)',
  orchid: 'rgba(123, 104, 238, 0.3)',
  blueViolet: 'rgba(0, 191, 255, 0.3)',
  dimGray: 'rgba(105, 105, 105, 0.3)',
};

export const ContainerCategory = styled.div`
  .container-top {
    margin-bottom: 1rem;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${getRandomColor(softColors)};
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding-left: 1rem;
    transition: .2s height;

    @media screen and (max-width: 700px) {
      height: 18vh;
    }

    h1 {
      font-size: ${fontSizes.fontSizeXxl};
      color: ${colors.text['950']};
    }
  }
`;

function getRandomColor(colors) {
  const randomColorKey =
    Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)];

  return colors[randomColorKey];
}

export const ContainerPlaylists = styled.div`
  border-top: 1px solid ${colors.neutral2};
  padding-top: 1rem;
`;
