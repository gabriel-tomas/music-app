import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerLoggedContent = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 13rem);
  min-height: calc(100svh - 13rem);

  button {
    font-size: ${fontSizes.fontSizeBase};
    border-radius: unset;
    height: fit-content;
    padding-block: .7rem;
    padding-inline: 1.4rem;
    width: min(220px, 50vw);
    margin-inline: auto;
  }

  button + button {
    border-top: 1px solid ${colors.neutral6};
  }

  button.logout-button {
    background-color: ${colors.primary['300']};
    border-radius: 20rem;
  }

  button.logout-button:hover {
    background-color: ${colors.primary['400']};
  }

  button.logout-button:active {
    background-color: ${colors.primary['500']};
  }

  @media screen and (max-width: 600px) {
    min-height: calc(100vh - 16rem);
    min-height: calc(100svh - 16rem);
  }
`;

export const ContainerOptions = styled.div`
  .option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${fontSizes.fontSizeBase};

    .left-container {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        height: 100%;
        width: 24px;
      }
    }

    & > svg {
      height: 100%;
      width: 24px;
    }
  }

  @media (hover: hover) {
    .option:hover {
      background-color: ${colors.primary['200']};
    }
  }

  button.option:active, a.option:active {
    background-color: ${colors.primary['300']};
  }

  .option + .option {
    margin-top: clamp(0.7rem, 0.485rem + 0.916vw, 1rem);
  }

  button.option, .option {
    height: 64px;
    padding: .8rem;
    border-radius: .6rem;
  }

  button.option {
    width: 100%;
    margin: unset;
    font-weight: normal;
  }
`;
