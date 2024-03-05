import { styled } from '@mui/material/styles';
import styledCmpnts from 'styled-components';
import Typography from '@mui/material/Typography';

import colors from '../../../../config/colors';
import fontSizes from '../../../../config/fontSizes';

export const TitleCreate = styled(Typography)({
  fontSize: fontSizes.fontSizeLg,
  color: colors.text['950'],
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  textAlign: 'center',
});

export const InputCreate = styledCmpnts.input`
  width: 80%;
  background-color: ${colors.background['50']};
  border-radius: 1rem;
  margin-inline: auto;
  height: 35px;
  padding-inline: 1.2rem;
  padding-block: 1.3rem;
  font-size: ${fontSizes.fontSizeBase};

  &:focus {
    outline: 1px solid ${colors.primary['400']};
  }

  @media screen and (max-width: 386px) {
    width: 100%;
  }
`;

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

  button.create-btn {
    background-color: ${colors.primary['300']};
  }

  button.create-btn:hover {
    background-color: ${colors.primary['400']};
  }

  button.create-btn:active {
    background-color: ${colors.primary['500']};
  }

  button.cancel-btn {
    background-color: ${colors.accent['100']};
  }

  button.cancel-btn:hover {
    background-color: ${colors.accent['200']};
  }

  button.cancel-btn:active {
    background-color: ${colors.accent['300']};
  }
`;
