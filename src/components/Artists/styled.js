import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerArtists = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: .7rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const ContainerArtist = styled.div`
  background-color: ${colors.cardColor};
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  .container-img {
    width: 100%;
    background-color: transparent;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);
    }
  }

  .container-info-bottom {
    display: flex;
    flex-direction: column;
    gap: .2rem;

    .artist-name {
      font-size: ${fontSizes.fontSizeBase};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
      color: ${colors.text['950']};
    }

    .type {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['950']};
    }
  }
`;
