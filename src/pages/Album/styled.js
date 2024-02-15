import styled from 'styled-components';

import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerAlbum = styled.section`

`;

export const ContainerAlbumInfo = styled.div`

`;

export const ContainerAlbumTracks = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.neutral2};

  ol {
    padding-left: 1.2rem;
  }
`;

export const ContainerAlbumTrack = styled.li`
  font-size: ${fontSizes.fontSizeBase};
  font-weight: 500;
  border-radius: .3rem;

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    background-color: ${colors.accent};
  }

  .container-track {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  h3 {
    font-size: ${fontSizes.fontSizeBase};
    font-weight: 500;
  }
`;
