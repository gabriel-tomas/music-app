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
`;
