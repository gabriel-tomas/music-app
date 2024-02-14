import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerAlbums = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
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
      object-fit: cover;
    }
  }

  .secondary-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;

    h2 {
      font-size: ${fontSizes.fontSizeBase};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .artists-box {
      display: flex;
      align-items: center;

      span {
        font-size: ${fontSizes.fontSizeSm};
        color: ${colors.text};
      }

      span + span::before {
        content: ', ';
      }
    }

  }
`;
