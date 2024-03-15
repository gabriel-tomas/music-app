import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

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

      svg.trash-can {
        padding: .07rem;
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
    .option.delete:hover {
      background-color: ${colors.warningColor};
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
