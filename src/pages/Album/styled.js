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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 70%;
      height: 100%;
      margin-left: 1rem;

      .track-name {
        font-weight: 600;
        font-size: ${fontSizes.fontSizeBase};
        text-align: left;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .track-artists {
        text-align: left;
        width: min(70vw, 700px);
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        @media screen and (max-width: 1160px) {
          width: min(50vw, 500px);
        }

        @media screen and (max-width: 760px) {
          width: min(40vw, 500px);
        }

        a {
          font-weight: normal;
          font-size: ${fontSizes.fontSizeBase};
          color: ${colors.text};
        }

        a + a::before {
          content: ', ';
        }
      }
    }

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
