import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerNotFound = styled.div`
  position: absolute;
  top: calc(50% + 2.05326rem);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    text-align: center;
    font-size: ${fontSizes.fontSizeLg};
  }

  .container-link {
    .redirect-library {
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['950']};
      padding: .5rem 1rem;
      background-color: ${colors.primary['300']};
      border-radius: 20rem;
    }

    .redirect-library:hover {
      background-color: ${colors.primary['400']};
    }

    .redirect-library:active {
      background-color: ${colors.primary['500']};
    }
  }
`;

export const ContainerNoTracks = styled.div`
  position: absolute;
  top: calc(50% + 3rem);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-size: ${fontSizes.fontSizeLg};
    margin-bottom: .2rem;
  }

  p {
    text-align: center;
    font-size: ${fontSizes.fontSizeBase};
    margin-bottom: 1.6rem;
  }

  .redirect-search {
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['950']};
    padding: .5rem 1rem;
    background-color: ${colors.primary['300']};
    border-radius: 20rem;
  }

  .redirect-search:hover {
    background-color: ${colors.primary['400']};
  }

  .redirect-search:active {
    background-color: ${colors.primary['500']};
  }
`;

export const ContainerUserPlaylist = styled.div`
  .header-user-playlists {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    .container-left {
      display: flex;
      align-items: center;
      gap: 1rem;

      .title-user-playlists {
        font-size: ${fontSizes.fontSizeLg};
        text-transform: capitalize;
        color: ${colors.text['950']};
      }

      .title-user-playlists::after {
        content: "•";
        margin-left: 1rem;
      }

      span.playlist-name {
        display: block;
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
        max-width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;

        @media screen and (max-width: 980px) {
          max-width: 300px;
        }

        @media screen and (max-width: 830px) {
          max-width: 200px;
        }

        @media screen and (max-width: 680px) {
          max-width: 100px;
        }

        @media screen and (max-width: 600px) {
          max-width: 200px;
        }

        @media screen and (max-width: 476px) {
          max-width: 100px;
        }
      }

      @media screen and (max-width: 364px) {
        flex-direction: column;
        gap: .2rem;
      }
    }

    .edit-playlist-btn {
      height: clamp(20px, 10vw, 40px);
      width: clamp(20px, 10vw, 40px);
      background-color: ${colors.primary['200']};
      padding-inline: unset;
      padding: .6rem;

      svg {
        height: 100%;
        width: 100%;
      }
    }

    .edit-playlist-btn:hover {
      background-color: ${colors.primary['300']};
    }

    .edit-playlist-btn:active {
      background-color: ${colors.primary['400']};
    }
  }
`;
