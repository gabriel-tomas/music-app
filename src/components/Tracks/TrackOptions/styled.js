import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerPopUp = styled.div`

`;

export const BtnPlaylistOptions = styled.button`
  width: 100%;
  height: 100%;
  padding-inline: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 100%;
    width: 100%;
    padding: 1rem;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;

  .option-btn {
    padding: 16px;
    padding-inline: 19px;
    height: unset;
    border-radius: unset;
    display: flex;
    align-items: center;
    gap: clamp(0.3rem, 0.16rem + 0.933vw, 1rem);

    svg {
      height: 100%;
      width: 20px;
    }
  }

  .option-btn:hover {
    background-color: ${colors.primary['300']};
  }

  .option-btn.delete:hover {
    background-color: ${colors.warningColor};
  }
`;
