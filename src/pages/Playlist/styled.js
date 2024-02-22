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

      @media screen and (max-width: 600px) {
        max-width: 240px;
      }

      img {
        width: 100%;
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
