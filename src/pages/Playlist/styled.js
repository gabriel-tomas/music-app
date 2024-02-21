import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerPlaylist = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ContainerPlaylistInfo = styled.div`
  .bottom-content {
    .container-img {
      max-width: 300px;

      img {
        width: 100%;
      }
    }

    .container-playlist-info-top {
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
