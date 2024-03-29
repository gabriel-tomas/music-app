import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerPlaylist = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ContainerPlaylistInfo = styled.div`
  .playlist-type {
    font-size: ${fontSizes.fontSizeMd};
  }

  .bottom-content {
    .container-img {
      max-width: 300px;
      background-color: ${colors.neutral3};

      @media screen and (max-width: 600px) {
        max-width: 240px;
      }

      img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
        animation: opacityEffect .20s forwards;

        @keyframes opacityEffect {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      }

      svg {
        width: 100%;
        height: 100%;
        padding: 6rem;
      }
    }

    .container-playlist-info-top {
      .playlist-name {
        font-size: ${fontSizes.fontSizeMd};
      }

      p {
        margin-top: .3rem;
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }
    }

    .container-playlist-info-bottom {
      margin-top: .3rem;

      .owner-box {
        .owner {
          font-size: ${fontSizes.fontSizeBase};
          color: ${colors.text['950']};
        }
      }
    }
  }
`;

export const ContainerPlaylistTracks = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.neutral2};
`;
