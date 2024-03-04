import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerPlaylistItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContainerItemPlaylist = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 60px;
  gap: 1rem;

  .container-img {
    height: 100%;
    background-color: transparent;
    grid-column: 1;
    grid-row: 1;
    border-radius: .3rem;

    img {
      border-radius: .3rem;
      height: 100%;
      object-fit: contain;
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);

      @media screen and (max-width: 600px) {
        border-radius: .1rem;
      }
    }

    svg {
      height: 100%;
      width: 100%;
    }
  }

  .container-img:has(svg) {
    background-color: ${colors.primary['100']};
  }

  .container-right {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: column;
  }
`;
