import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { RxDotsHorizontal } from 'react-icons/rx';
import PropTypes from 'prop-types';

import ModalConfirmPlaylistDelete from '../ModalConfirmPlaylistDelete';
import ModalPlaylistEdit from '../ModalPlaylistEdit';

import { ContainerPopUp, ContainerOptions } from './styled';

import colors from '../../../config/colors';

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
  const [boxEditPlaylist, setBoxEditPlaylist] = useState(false);

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

  const handleOpenEditPlaylist = (event) => {
    handleClose(event);
    setBoxEditPlaylist(true);
  };

  const handleCloseEditPlaylist = (event) => {
    event.stopPropagation();
    setBoxEditPlaylist(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <ContainerPopUp>
        <button className="edit-playlist-btn" onClick={handleClick}>
          <RxDotsHorizontal />
        </button>
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
            <button className="option-btn" onClick={handleOpenEditPlaylist}>
              Editar
            </button>
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
      <ModalPlaylistEdit
        open={boxEditPlaylist}
        handleClose={handleCloseEditPlaylist}
        playlistName={itemKey}
      />
    </>
  );
}

BasicPopover.propTypes = {
  itemKey: PropTypes.string.isRequired,
};
