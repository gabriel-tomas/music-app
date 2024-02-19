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
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .track-artists {
        text-align: left;
        width: 100%;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

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
  }

  .track-duration {
    span {
      font-weight: 400;
      font-size: ${fontSizes.fontSizeBase};
    }
  }
`;
