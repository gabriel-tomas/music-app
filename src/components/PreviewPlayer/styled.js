import styled from 'styled-components';
import colors from '../../config/colors';

export const ContainerPlayer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 70px;
  width: min(100%, 500px);
  background-color: ${colors.neutral3};
  padding: 1rem;
  border-radius: 10px;
  position: fixed;
  bottom: .7rem;
  right: .7rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 6px #00000036;

  .play-pause-btn {
    display: flex;
    align-items: center;
  }

  .container-duration-current-time {
    display: flex;
  }

  .container-volume {
    display: flex;
    align-items: center;
  }

  .music-slide-back {
    width: 100%;
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

  @media screen and (max-width: 600px) {
    width: 97%;
    bottom: clamp(30px, 20vh, 60px);
    right: unset;
    height: clamp(30px, 20vh, 60px);
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: .3rem;

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
`;
