import styled from 'styled-components';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerUserPlaylists = styled.div`

  .header-user-playlists {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

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

      span {
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }

      @media screen and (max-width: 364px) {
        flex-direction: column;
        gap: .2rem;
      }
    }

    .create-new-playlist-btn {
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

    .create-new-playlist-btn:hover {
      background-color: ${colors.primary['300']};
    }

    .create-new-playlist-btn:active {
      background-color: ${colors.primary['400']};
    }
  }
`;

export const ContainerPlaylistItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContainerItemPlaylist = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr minmax(auto, 64px);
  grid-template-rows: 56px;
  gap: 1rem;

  .container-img {
    height: 56px;
    width: 56px;
    background-color: transparent;
    grid-column: 1;
    grid-row: 1;
    border-radius: .3rem;

    img {
      border-radius: .3rem;
      height: 100%;
      width: 100%;
      object-fit: contain;
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);

      @media screen and (max-width: 600px) {
        border-radius: .1rem;
      }
    }

    svg {
      height: 100%;
      width: 100%;
    }
  }

  .container-img:has(svg) {
    background-color: ${colors.primary['100']};
  }

  .container-right {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: column;

    .name-playlist {
      max-width: 700px;

      h2 {
        font-size: calc(${fontSizes.fontSizeBase} + .15rem);
        color: ${colors.text['950']};
        width: 100%;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }

      @media screen and (max-width: 1240px) {
        max-width: 500px;
      }

      @media screen and (max-width: 965px) {
        max-width: 300px;
      }

      @media screen and (max-width: 757px) {
        max-width: 200px;
      }

      @media screen and (max-width: 410px) {
        max-width: 150px;
      }

      @media screen and (max-width: 364px) {
        max-width: 80px;
      }
    }

    .container-songs {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 700px;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }

      span + span::before {
        content: ', ';
      }

      @media screen and (max-width: 1240px) {
        max-width: 500px;
      }

      @media screen and (max-width: 965px) {
        max-width: 300px;
      }

      @media screen and (max-width: 757px) {
        max-width: 200px;
      }

      @media screen and (max-width: 410px) {
        max-width: 150px;
      }

      @media screen and (max-width: 364px) {
        max-width: 80px;
      }
    }
  }

  .container-playlist-options {
    padding-left: 1rem;
  }
`;

export const ContainerEmptyPlaylists = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2, p {
    text-align: center;
  }

  h2 {
    font-size: ${fontSizes.fontSizeLg};
    color: ${colors.text['950']};
    margin-bottom: .6rem;
  }

  p {
    font-size: ${fontSizes.fontSizeBase};
    color: ${colors.text['950']};
    margin-bottom: 1rem;
  }

  .create-playlist-empty-playlists-btn {
    font-size: ${fontSizes.fontSizeBase};
    background-color: ${colors.primary['200']};
    padding-inline: unset;
    height: unset;
    padding-block: .55rem;
    padding-inline: 1.2rem;
  }

  .create-playlist-empty-playlists-btn:hover {
    background-color: ${colors.primary['300']};
  }

  .create-playlist-empty-playlists-btn:active {
    background-color: ${colors.primary['400']};
  }
`;
