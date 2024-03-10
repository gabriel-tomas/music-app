import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { RxDotsHorizontal, RxPlus } from 'react-icons/rx';
import { MdDeleteOutline } from 'react-icons/md';
import PropTypes from 'prop-types';

import ModalChoiceplaylist from '../ModalChoicePlaylist';

import { ContainerPopUp, BtnPlaylistOptions, ContainerOptions } from './styled';

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

export default function BasicPopover({ track, optionsType }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [boxChoicePlaylist, setBoxChoicePlaylist] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenBoxChoicePlaylist = () => {
    handleClose();
    setBoxChoicePlaylist(true);
  };
  const handleCloseBoxChoicePlaylist = () => setBoxChoicePlaylist(false);

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
            <button
              className="option-btn"
              onClick={handleOpenBoxChoicePlaylist}
            >
              {optionsType === 'outPlaylist' ? (
                <>
                  <RxPlus /> Adicionar a playlist
                </>
              ) : (
                <>
                  <MdDeleteOutline /> Excluir da playlist
                </>
              )}
            </button>
          </ContainerOptions>
        </Popover>
      </ContainerPopUp>
      {boxChoicePlaylist && (
        <ModalChoiceplaylist
          handleClose={handleCloseBoxChoicePlaylist}
          track={track}
        />
      )}
    </>
  );
}

BasicPopover.defaultProps = {
  optionsType: 'outPlaylist',
};

BasicPopover.propTypes = {
  track: PropTypes.object.isRequired,
  optionsType: PropTypes.string,
};
