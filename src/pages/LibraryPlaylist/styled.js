import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerNotFound = styled.div``;

export const ContainerUserPlaylist = styled.div`
.header-user-playlists {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    .container-left {
      display: flex;
      align-items: center;
      gap: 1rem;

      .title-user-playlists {
        font-size: ${fontSizes.fontSizeLg};
        text-transform: capitalize;
        color: ${colors.text['950']};
      }

      .title-user-playlists::after {
        content: "•";
        margin-left: 1rem;
      }

      span {
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }

      @media screen and (max-width: 364px) {
        flex-direction: column;
        gap: .2rem;
      }
    }

    .edit-playlist-btn {
      height: clamp(20px, 10vw, 40px);
      width: clamp(20px, 10vw, 40px);
      background-color: ${colors.primary['200']};
      padding-inline: unset;
      padding: .6rem;

      svg {
        height: 100%;
        width: 100%;
      }
    }

    .edit-playlist-btn:hover {
      background-color: ${colors.primary['300']};
    }

    .edit-playlist-btn:active {
      background-color: ${colors.primary['400']};
    }
  }
`;
