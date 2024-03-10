import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerAlbum = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ContainerAlbumInfo = styled.div`
  .album-type {
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

    .album-name {
      font-size: ${fontSizes.fontSizeMd};
    }

    .album-info {
      .artists-box {
        a {
          font-size: ${fontSizes.fontSizeBase};
          color: ${colors.text['950']};
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
`;

export const ContainerAlbumTrack = styled.li`
  font-size: ${fontSizes.fontSizeBase};
  font-weight: 500;
  border-radius: .3rem;
  height: 70px;
  list-style-position: inside;
  padding: .5rem;
  display: flex;
  align-items: center;
  width: 100%;
  counter-increment: album-list-counter;
  position: relative;
  cursor: pointer;

  &:hover .hover-music {
    display: flex;
  }

  &:hover::before {
    content: '';
  }

  & + & {
    margin-top: .8rem;
  }

  &:hover {
    background-color: ${colors.neutral6};
  }

  &::before {
    content: counter(album-list-counter)".";
    width: 56px;
    text-align: center;
  }

  .hover-music {
    position: absolute;
    top: .5rem;
    left: .5rem;
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .container-track {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: unset;
    width: calc(100% - 56px);
    height: 100%;

    .track-info {
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 1rem;

      .track-name {
        display: block;
        font-weight: 600;
        font-size: ${fontSizes.fontSizeBase};
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 700px;
        overflow: hidden;
      }

      .track-artists {
        text-align: left;
        width: 100%;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 700px;

        a {
          font-weight: normal;
          font-size: ${fontSizes.fontSizeBase};
          color: ${colors.text};
        }

        a + a::before {
          content: ', ';
        }
      }

      @media screen and (max-width: 1080px) {
        .track-name, .track-artists {
          max-width: 500px;
        }
      }

      @media screen and (max-width: 860px) {
        .track-name, .track-artists {
          max-width: 300px;
        }
      }

      @media screen and (max-width: 660px) {
        .track-name, .track-artists {
          max-width: 150px;
        }
      }
    }

    .right-container {
      display: flex;
      align-items: center;
      gap: clamp(0.3rem, 0.16rem + 0.933vw, 1rem);

      .track-time {
        font-weight: 400;
        font-size: ${fontSizes.fontSizeBase};
      }

      .container-playlist-options {
        height: 50px;
        width: 50px;
      }
    }
  }

  h3 {
    font-size: ${fontSizes.fontSizeBase};
    font-weight: 500;
  }
`;
