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
    color: ${colors.text['950']};
    font-size: ${fontSizes.fontSizeBase};
    padding: 1rem;
    transition: all .3s;
  }

  a.active {
    background-color: ${colors.primary['200']};
    color: ${colors.textLight};
  }

  @media screen and (max-width: 600px) {
    position: fixed;
    height: clamp(30px, 20vh, 60px);
    width: 98%;
    flex-direction: row;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.background200Opacity86};
    backdrop-filter: blur(15px);
    padding: .5rem;
    border-radius: 10px;
    top: unset;
    bottom: 0px;

    a {
      padding: unset;
      font-size: ${fontSizes.fontSizeSm};
    }
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
      color: ${colors.text['950']};
      transition: all .3s;
    }

    .container-icon.active {
      background-color: ${colors.textLight};
      color: ${colors.primary['950']};
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: row;
    gap: .2rem;

    .container-link {
      flex-direction: column;
      gap: unset;
      padding: .5rem;
      width: 100%;

      .container-icon {
        width: 100%;
      }
    }
  }
`;

export const ContainerTopContent = styled.div`
  ${containerTopAndBottomStyle}
  width: 45%;
`;

export const ContainerBottomContent = styled.div`
  ${containerTopAndBottomStyle}
  width: 45%;
`;
