import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerPlayer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(.5rem, 3vw, 1.2rem);
  height: 70px;
  width: min(100%, 600px);
  background-color: ${colors.neutral3};
  padding: .4rem;
  padding-inline: 1rem;
  border-radius: 10px;
  position: fixed;
  bottom: .7rem;
  right: .7rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 6px #00000036;

  .track-infos.mobile {
    width: 80%;
  }

  .play-pause-btn.mobile {
    width: 20%;
  }

  .play-pause-btn {
    display: flex;
    align-items: center;
    padding-inline: 13px;
  }

  .play-pause-btn.disabled {
    cursor: not-allowed;
  }

  .container-duration-current-time {
    display: flex;
  }

  .container-volume {
    display: flex;
    align-items: center;

    input {
      max-width: 75px;
    }
  }

  .music-slide-back {
    width: 60%;
    height: 10px;
    border-radius: 1000px;
    background-color: ${colors.neutral2};

    .music-range {
      background-color: ${colors.primary['700']};
      border-radius: 1000px;
      width: 0;
      height: 100%;
    }
  }

  .btn-volumeup {
    display: none;
  }

  @media screen and (max-width: 648px) {
    width: 97%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 600px) {
    bottom: clamp(30px, 20vh, 60px);
    right: unset;
    height: clamp(30px, 20vh, 60px);
    margin-bottom: .3rem;

    .track-infos {
      width: 50%;
    }

    button {
      padding-inline: unset;
    }


    .play-pause-btn, .container-duration-current-time, .btn-volumeup {
      width: 16.6%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container-volume {
      width: 100%;
    }

    .container-volume {
      input {
        width: 100%;
        max-width: 100px;
      }
    }

    .music-slide-back {
      position: absolute;
      width: 100%;
      height: 4px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      left: 0;
      bottom: 0;

      .music-range {
        border-top-left-radius: 0;
      }
    }

    .container-volume {
      display: none;
      height: 100%;
      opacity: 0;
      animation: .3s .1s showContainerVolume forwards;
    }

    .container-volume:hover {
      display: flex;
    }

    &:has(.btn-volumeup:hover) .container-volume {
      display: flex;
    }

    .btn-volumeup {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes showContainerVolume {
      100% {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 585px) {
    .track-infos {
      width: 65%;
    }

    .play-pause-btn, .btn-volumeup  {
      width: 17.5%;
    }

    .container-duration-current-time {
      display: none;
    }
  }
`;

export const ContainerCurrentTrackInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: .6rem;
  width: 37%;
  border-right: 1px solid ${colors.neutral7};
  padding-right: .7rem;

  .container-img {
    height: 100%;

    img {
      height: 100%;
      border-radius: 5px;
    }

    svg {
      width: max-content;
      max-width: 58px;
      height: 100%;
      padding: .4rem;
      aspect-ratio: 1 / 1;
      background-color: ${colors.neutral1};
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);
      border-radius:.6rem;
    }
  }

  .container-right-info {
    width: 100%;
    overflow: hidden;

    .track-title {
      width: 100%;

      span {
        font-size: ${fontSizes.fontSizeBase};
        display: block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .track-artists {
      display: flex;
      align-items: center;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;

      a {
        display: block;
        white-space: nowrap;
        width: 100%;
        font-weight: normal;
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }

      a:hover {
        text-decoration: underline;
      }

      a + a::before {
        content: ', ';
      }
    }
  }
`;
