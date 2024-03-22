import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { editPlaylist } from '../../../../services/backend/library/edit.js';

import * as updatePlaylistActions from '../../../../store/modules/updatePlaylist/actions.js';
import * as authActions from '../../../../store/modules/auth/actions.js';

import LoadingAllScreen from '../../../../components/LoadingAllScreen';

import colors from '../../../../config/colors';
import fontSizes from '../../../../config/fontSizes.js';

import { Title, ContainerSubmit, InputCreate } from './styled.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(400px, 80vw)',
  bgcolor: colors.background['100'],
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
  paddingInline: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '.p-info': {
    fontSize: fontSizes.fontSizeBase,
    '.playlist-name': {
      wordBreak: 'break-all',
    },
  },
  '@media screen and (max-width: 468px)': {
    paddingInline: 4,
  },
};

export default function KeepMountedModal({ open, handleClose, playlistName }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  useEffect(() => {
    setNewPlaylistName('');
  }, [open]);

  const handleSubmit = async (event) => {
    event.stopPropagation();
    if (!userIsLoggedIn) return;
    if (!playlistName) return;
    if (!newPlaylistName) {
      toast.error('Insira um nome para a playlist');
      return;
    }
    if (playlistName.trim() === newPlaylistName.trim()) {
      toast.info('Esse já é o nome da playlist');
      return;
    }

    setIsLoading(true);
    try {
      const response = await editPlaylist(playlistName, newPlaylistName);
      dispatch(updatePlaylistActions.updatePlaylists());
      setIsLoading(false);
      handleClose(event);
      toast.success(response.successMsg);
    } catch (err) {
      const responseData = get(err.response, 'data', '');
      const status = get(err.response, 'status', 0);
      setIsLoading(false);

      if (status === 401) {
        dispatch(authActions.authFail());
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }

      if (status === 400 || status === 500) {
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }
    }
  };

  const handleChangeInput = (e) => {
    e.stopPropagation();
    if (e.target.value.length > 100) {
      toast.error('O nome da playlist deve ter no máximo 100 caracteres');
      return;
    }
    setNewPlaylistName(e.target.value);
  };

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Title component="h3">Editar nome da playlist</Title>
          <p className="p-info">
            Alterar nome da playlist:{' '}
            <strong className="playlist-name">
              &quot;{playlistName}&quot;
            </strong>{' '}
            para:
          </p>
          <InputCreate
            placeholder="Nome da playlist"
            value={newPlaylistName}
            onChange={handleChangeInput}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          ></InputCreate>
          <ContainerSubmit>
            <button className="cancel-btn" onClick={handleClose}>
              Cancelar
            </button>
            <button className="edit-btn" onClick={handleSubmit}>
              Editar
            </button>
          </ContainerSubmit>
        </Box>
      </Modal>
      <LoadingAllScreen
        isLoading={isLoading}
        preventPropagation={(event) => event.stopPropagation()}
      />
    </div>
  );
}

KeepMountedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  playlistName: PropTypes.string.isRequired,
};
