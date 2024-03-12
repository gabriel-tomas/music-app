import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { deletePlaylist } from '../../../services/backend/library/delete.js';

import * as updatePlaylistActions from '../../../store/modules/updatePlaylist/actions.js';
import * as authActions from '../../../store/modules/auth/actions.js';

import LoadingAllScreen from '../../../components/LoadingAllScreen';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes.js';

import { ContainerModal, Title, ContainerSubmit } from './styled.js';

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
  },
  '@media screen and (max-width: 468px)': {
    paddingInline: 4,
  },
};

export default function KeepMountedModal({ open, handleClose, itemKey }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  const handleSubmit = async (event) => {
    event.stopPropagation();
    if (!userIsLoggedIn) return;
    if (!itemKey) return;

    setIsLoading(true);
    try {
      const response = await deletePlaylist(itemKey);
      dispatch(updatePlaylistActions.updatePlaylists());
      setIsLoading(false);
      handleClose(event);
      toast.success(response.successMsg);
      navigate('/library');
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

  return (
    <ContainerModal onClick={(event) => event.stopPropagation()}>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Title component="h3">Excluir da sua Biblioteca?</Title>
          <p className="p-info">
            Essa ação vai fazer excluir <strong>&quot;{itemKey}&quot;</strong>{' '}
            da sua <strong>Biblioteca</strong>.
          </p>
          <ContainerSubmit>
            <button className="cancel-btn" onClick={handleClose}>
              Cancelar
            </button>
            <button className="delete-btn" onClick={handleSubmit}>
              Deletar
            </button>
          </ContainerSubmit>
        </Box>
      </Modal>
      <LoadingAllScreen
        isLoading={isLoading}
        preventPropagation={(event) => event.stopPropagation()}
      />
    </ContainerModal>
  );
}

KeepMountedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  itemKey: PropTypes.string.isRequired,
};
