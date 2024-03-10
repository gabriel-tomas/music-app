import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerTracks = styled.div``;

export const ContainerTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 1rem;
  margin-top: .8rem;
  padding: .5rem;
  border-radius: .4rem;

  &:hover {
    background-color: ${colors.neutral2};
  }

  &:hover .left-content .play-track-btn .container-img .hover-img {
    display: flex;
    background-color: rgba(0, 0, 0, .4);
  }

  .left-content {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1rem;
    width: 70%;

    .play-track-btn {
      padding: unset;
      padding-inline: unset;
      height: unset;
      border-radius: unset;
      height: 100%;

      .container-img {
        height: 100%;
        position: relative;

        .hover-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          display: none;
        }

        img {
          border-radius: .4rem;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .track-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: calc(70% - 1rem);
      height: 100%;

      .track-name {
        font-weight: 600;
        font-size: ${fontSizes.fontSizeBase};
        text-align: left;
        white-space: nowrap;
        max-width: 700px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .track-artists {
        text-align: left;
        max-width: 700px;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        a {
          font-weight: normal;
          font-size: ${fontSizes.fontSizeBase};
          color: ${colors.text['950']};
        }

        a + a::before {
          content: ', ';
        }
      }

      @media screen and (max-width: 1280px) {
        .track-name, .track-artists {
          max-width: 500px;
        }
      }

      @media screen and (max-width: 1180px) {
        .track-name, .track-artists {
          max-width: 400px;
        }
      }

      @media screen and (max-width: 950px) {
        .track-name, .track-artists {
          max-width: 300px;
        }
      }

      @media screen and (max-width: 782px) {
        .track-name, .track-artists {
          max-width: 200px;
        }
      }

      @media screen and (max-width: 660px) {
        .track-name, .track-artists {
          max-width: 150px;
        }
      }

      @media screen and (max-width: 350px) {
        .track-name, .track-artists {
          max-width: 100px;
        }
      }

      @media screen and (max-width: 320px) {
        .track-name, .track-artists {
          max-width: 70px;
        }
      }

      @media screen and (max-width: 275px) {
        .track-name, .track-artists {
          max-width: 50px;
        }
      }
    }

    @media screen and (max-width: 316px) {
      width: 50%;
    }

    @media screen and (max-width: 264px) {
      width: 40%;
    }
  }

  .right-container {
    display: flex;
    align-items: center;
    gap: clamp(0.3rem, 0.16rem + 0.933vw, 1rem);

    .track-duration {
      span {
        font-weight: 400;
        font-size: ${fontSizes.fontSizeBase};
      }
    }

    .container-playlist-options {
      height: 50px;
      width: 50px;
    }
  }
`;

export const ContainerTracksOl = styled.ol``;

export const ContainerTrackLi = styled.li`
  display: flex;
  align-items: center;
  height: 70px;
  gap: 1rem;
  margin-top: .8rem;
  padding: .5rem;
  border-radius: .4rem;
  width: 100%;
  counter-increment: playlist-list-counter;

  &:hover {
    background-color: ${colors.neutral2};
  }

  &:hover .left-content .play-track-btn .container-img .hover-img {
    display: flex;
    background-color: rgba(0, 0, 0, .4);
  }

  &::before {
    content: counter(playlist-list-counter)".";
    text-align: center;
    font-size: ${fontSizes.fontSizeBase};
    font-weight: 500;
  }
`;

export const ContainerTrackContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  .left-content {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1rem;
    width: 70%;

    .play-track-btn {
      padding: unset;
      padding-inline: unset;
      height: unset;
      border-radius: unset;
      height: 100%;

      .container-img {
        height: 100%;
        position: relative;

        .hover-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          display: none;
        }

        img {
          border-radius: .4rem;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .track-info {
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;

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

      @media screen and (max-width: 388px) {
        .track-name, .track-artists {
          max-width: 100px;
        }
      }

      @media screen and (max-width: 330px) {
        .track-name, .track-artists {
          max-width: 70px;
        }
      }

      @media screen and (max-width: 310px) {
        .track-name, .track-artists {
          max-width: 50px;
        }
      }

      @media screen and (max-width: 278px) {
        .track-name, .track-artists {
          max-width: 30px;
        }
      }
    }
  }

  .right-container {
    display: flex;
    align-items: center;
    gap: clamp(0.3rem, 0.16rem + 0.933vw, 1rem);

    .track-duration {
      span {
        font-weight: 400;
        font-size: ${fontSizes.fontSizeBase};
      }
    }

    .container-playlist-options {
      height: 50px;
      width: 50px;
    }
  }

`;
