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

  .left-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 1rem;

    .play-track-btn {
      padding: unset;
      padding-inline: unset;
      height: unset;
      border-radius: unset;
      height: 100%;

      .container-img {
        height: 100%;

        img {
          border-radius: .6rem;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .track-info {
      display: flex;
      flex-direction: column;
      width: 100%;

      .track-name {
        font-weight: 600;
        font-size: ${fontSizes.fontSizeBase};
      }

      .track-artists {
        display: flex;
        align-items: center;

        a {
          font-size: ${fontSizes.fontSizeBase};
          color: ${colors.text};
        }

        a + a::before {
          content: ', ';
        }
      }
    }
  }

  .track-duration {
    span {
      font-weight: 400;
      font-size: ${fontSizes.fontSizeBase};
    }
  }
`;
