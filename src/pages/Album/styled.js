import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerAlbum = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ContainerAlbumInfo = styled.div`

  .bottom-content {
    .container-img {
      max-width: 300px;

      img {
        width: 100%;
      }
    }

    .album-info {
      .artists-box {
        a {
          font-size: ${fontSizes.fontSizeBase};
          color: ${colors.text};
        }

        a + a::before {
          content: ', ';
        }
      }

      .album-release {
        margin-left: .6rem;
        font-size: ${fontSizes.fontSizeBase};
      }

      .album-release::before {
        content: '●';
        font-size: .8rem;
        margin-right: .5rem;
      }
    }
  }
`;

export const ContainerAlbumTracks = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.neutral2};

  ol {
    padding-left: 1.2rem;
  }
`;

export const ContainerAlbumTrack = styled.li`
  font-size: ${fontSizes.fontSizeBase};
  font-weight: 500;
  border-radius: .3rem;

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    background-color: ${colors.accent};
  }

  .container-track {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .track-time {
      font-weight: 400;
      font-size: ${fontSizes.fontSizeBase};
    }
  }

  h3 {
    font-size: ${fontSizes.fontSizeBase};
    font-weight: 500;
  }
`;
