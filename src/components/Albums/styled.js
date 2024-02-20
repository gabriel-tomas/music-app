import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerAlbums = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: .7rem;
`;

export const ContainerAlbumItem = styled(Link)`
  background-color: ${colors.cardColor};
  padding: 1rem;
  border-radius: 1rem;

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

    .album-name {
      font-size: ${fontSizes.fontSizeBase};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }

    .artists-box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      a {
        font-size: ${fontSizes.fontSizeBase};
        color: ${colors.text};
      }

      a + a::before {
        content: ', ';
      }
    }
  }
`;
