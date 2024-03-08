import { styled } from '@mui/material/styles';
import styledCmpnts from 'styled-components';
import Typography from '@mui/material/Typography';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const Title = styled(Typography)({
  fontSize: fontSizes.fontSizeMd,
  color: colors.text['950'],
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  textAlign: 'center',
});

export const ContainerPlaylists = styledCmpnts.div`
  padding-top: 1rem;
  border-top: 1px solid ${colors.neutral6};
`;

export const ContainerItemPlaylist = styledCmpnts.button`
  width: 100%;
  text-align: left;
  border-radius: .6rem;
  font-size: ${fontSizes.fontSizeBase};
  font-weight: 500;

  &:hover {
    background-color: ${colors.primary['300']};
  }

  &:active {
    background-color: ${colors.primary['400']};
  }

`;

/* export const ContainerSubmit = styledCmpnts.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-top: 2rem;

  button {
    width: 100%;
    height: 35px;
    border-radius: 1rem;
    margin-inline: auto;
    font-size: ${fontSizes.fontSizeBase};
    font-weight: 500;
  }

  button.delete-btn {
    background-color: ${colors.warningColor};
  }

  button.delete-btn:hover {
    background-color: ${colors.warningColorHover};
  }

  button.delete-btn:active {
    background-color: ${colors.warningColorActive};
  }
`; */
