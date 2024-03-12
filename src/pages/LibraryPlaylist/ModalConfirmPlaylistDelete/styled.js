import { styled } from '@mui/material/styles';
import styledCmpnts from 'styled-components';
import Typography from '@mui/material/Typography';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes';

export const ContainerModal = styledCmpnts.div`
  flex: 0 0 100%;
`;

export const Title = styled(Typography)({
  fontSize: fontSizes.fontSizeMd,
  color: colors.text['950'],
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  textAlign: 'center',
});

export const ContainerSubmit = styledCmpnts.div`
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
`;
