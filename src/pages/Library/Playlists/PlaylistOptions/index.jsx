import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { RxDotsHorizontal } from 'react-icons/rx';
import PropTypes from 'prop-types';

import ModalConfirmPlaylistDelete from '../ModalConfirmPlaylistDelete';

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

export default function BasicPopover({ itemKey }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [boxConfirmDelete, setBoxConfirmDelete] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleOpenConfirmDelete = (event) => {
    handleClose(event);
    setBoxConfirmDelete(true);
  };

  const handleCloseConfirmDelete = (event) => {
    event.stopPropagation();
    setBoxConfirmDelete(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
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
            <button
              className="option-btn delete"
              onClick={handleOpenConfirmDelete}
            >
              Excluir
            </button>
          </ContainerOptions>
        </Popover>
      </ContainerPopUp>
      <ModalConfirmPlaylistDelete
        open={boxConfirmDelete}
        handleClose={handleCloseConfirmDelete}
        itemKey={itemKey}
      />
    </>
  );
}

BasicPopover.propTypes = {
  itemKey: PropTypes.string.isRequired,
};
