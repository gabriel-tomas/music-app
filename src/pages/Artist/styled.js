import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerArtist = styled.div``;

export const ContainerArtistInfo = styled.div`
  .title-type {
    font-size: ${fontSizes.fontSizeMd};
    color: ${colors.text['950']};
  }

  .container-img {
    max-width: 300px;
    background-color: ${colors.neutral3};

    @media screen and (max-width: 600px) {
      max-width: 240px;
    }

    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1 / 1;
      animation: opacityEffect .20s forwards;

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
      padding: 6rem;
    }
  }

  .container-bottom-infos {
    .artist-name {
      font-size: ${fontSizes.fontSizeMd};
      color: ${colors.text['950']};
    }

    .secondary-content {
      .followers {
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }
    }
  }
`;

export const ContainerArtistContent = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.neutral2};
`;

export const ContainerArtistContentItem = styled.section`
  & + & {
    margin-top: 2.36rem;
  }

  .title-content-item {
    font-size: ${fontSizes.fontSizeMd};
    color: ${colors.text['950']};
    margin-bottom: 1rem;
  }
`;
