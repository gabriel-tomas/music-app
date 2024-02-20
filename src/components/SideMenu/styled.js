import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerSideMenu = styled.nav`
  height: 100vh;
  height: 100svh;
  width: clamp(300px, 25vw, 500px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: clamp(0.3rem, -0.414rem + 1.667vw, 1.3rem);
  position: sticky;
  top: 0px;
  border-right: 1px solid rgba(0,0,0, .2);
  padding-right: 1rem;

  a {
    color: ${colors.text};
    font-size: ${fontSizes.fontSizeBase};
    padding: 1rem;
    transition: all .3s;
  }

  a.active {
    background-color: ${colors.primary};
    color: ${colors.textLight};
  }
`;

const containerTopAndBottomStyle = `
  border-radius: .7rem;
  display: flex;
  flex-direction: column;

  .container-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: .4rem;

    .container-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: .4rem;
      color: ${colors.text};
      transition: all .3s;
    }

    .container-icon.active {
      background-color: ${colors.textLight};
      color: ${colors.primary};
    }
  }
`;

export const ContainerTopContent = styled.div`${containerTopAndBottomStyle}`;

export const ContainerBottomContent = styled.div`${containerTopAndBottomStyle}`;
