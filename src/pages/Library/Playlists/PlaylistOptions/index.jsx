import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
/* import Button from '@mui/material/Button'; */
import { RxDotsHorizontal } from 'react-icons/rx';

import { ContainerPopUp, BtnPlaylistOptions, ContainerOptions } from './styled';

import colors from '../../../../config/colors';

const popUpBoxStyle = {
  transform: 'translateY(-.8rem)',
  '& .MuiPaper-root': {
    backgroundColor: colors.background['100'],
    borderRadius: '.6rem',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <ContainerPopUp>
      <BtnPlaylistOptions onClick={handleClick}>
        <RxDotsHorizontal />
      </BtnPlaylistOptions>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={popUpBoxStyle}
      >
        <ContainerOptions>
          <button className="option-btn">Editar</button>
          <button className="option-btn delete">Excluir</button>
        </ContainerOptions>
      </Popover>
    </ContainerPopUp>
  );
}
