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

  button.edit-btn {
    background-color: ${colors.primary['200']};
  }

  button.edit-btn:hover {
    background-color: ${colors.primary['300']};
  }

  button.edit-btn:active {
    background-color: ${colors.primary['400']};
  }
`;
