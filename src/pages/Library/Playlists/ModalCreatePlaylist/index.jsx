import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { createPlaylist } from '../../../../services/backend/library/create.js';

import * as updatePlaylistActions from '../../../../store/modules/updatePlaylist/actions.js';

import LoadingAllScreen from '../../../../components/LoadingAllScreen';

import colors from '../../../../config/colors';
import { TitleCreate, InputCreate, ContainerSubmit } from './styled.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(400px, 80vw)',
  bgcolor: colors.background['200'],
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function KeepMountedModal({ open, handleClose }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  const handleSubmit = async () => {
    if (!userIsLoggedIn) return;
    if (!playlistName) {
      toast.error('Insira um nome para a playlist');
      return;
    }
    setIsLoading(true);
    try {
      const response = await createPlaylist(playlistName);
      dispatch(updatePlaylistActions.updatePlaylists());
      setIsLoading(false);
      handleClose();
      toast.success(response.success);
    } catch (err) {
      const responseData = get(err.response, 'data', '');
      const status = get(err.response, 'status', 0);
      setIsLoading(false);

      if (status === 401) {
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      } else {
        toast.error(
          'Ocorreu um erro desconhecido ao tentar acessar as informações das playlists',
        );
      }
    }
  };

  const handleChangeInput = (e) => {
    if (e.target.value.length > 100) {
      toast.error('O nome da playlist deve ter no máximo 100 caracteres');
      return;
    }
    setPlaylistName(e.target.value);
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <TitleCreate>Nome da playlist</TitleCreate>
          <InputCreate
            placeholder="Nome da playlist"
            value={playlistName}
            onChange={handleChangeInput}
          ></InputCreate>
          <ContainerSubmit>
            <button className="cancel-btn" onClick={handleClose}>
              Cancelar
            </button>
            <button className="create-btn" onClick={handleSubmit}>
              Criar
            </button>
          </ContainerSubmit>
        </Box>
      </Modal>
      <LoadingAllScreen isLoading={isLoading} />
    </div>
  );
}

KeepMountedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
