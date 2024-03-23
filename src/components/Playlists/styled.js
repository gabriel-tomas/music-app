import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';
import { Link } from 'react-router-dom';

export const ContainerPlaylists = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: .7rem;

  &.slow-appearance-animation {
    animation: .3s sectionItemsAppear;
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @keyframes sectionItemsAppear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const ContainerPlaylistItem = styled(Link)`
  background-color: ${colors.cardColor};
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  .container-img {
    width: 100%;
    height: 100%;
    background-color: transparent;

    &.loading-back {
      background-color: ${colors.neutral1};
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);
      border-radius: .6rem;
    }

    img {
      border-radius: .6rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);
      animation: opacityEffect .20s forwards;

      @media screen and (max-width: 600px) {
        border-radius: .4rem;
      }

      @keyframes opacityEffect {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }
    }

    svg {
      width: 100%;
      height: 100%;
      padding: clamp(2.4rem, 2.295rem + 0.674vw, 2.8rem);
    }
  }

  .secondary-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;

    .playlist-name {
      font-size: ${fontSizes.fontSizeBase};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }

    .playlist-description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
              line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .owner-box {
      .owner {
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }
    }
  }
`;
