import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';
import { Link } from 'react-router-dom';

export const ContainerPlaylists = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: .7rem;
`;

export const ContainerPlaylistItem = styled(Link)`
  background-color: ${colors.cardColor};
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  .container-img {
    width: 100%;
    height: 100%;

    img {
      border-radius: .6rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17)
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

    .owner-box {
      .owner {
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text['950']};
      }
    }
  }
`;
