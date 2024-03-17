import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { IoAlertCircleSharp } from 'react-icons/io5';

import LoadingAllScreen from '../../../components/LoadingAllScreen';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes.js';

import { Title, ContainerSubmit } from './styled.js';

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
  '.p-info + .p-info': {
    marginTop: 1,
  },
  '.p-info.smaller': {
    alignSelf: 'flex-start',
  },
  '@media screen and (max-width: 468px)': {
    paddingInline: 4,
  },
};

export default function KeepMountedModal({ open, handleClose, handleSubmit }) {
  const isLoadingDeleteAccount = useSelector(
    (state) => state.deleteAccount.isLoading,
  );

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
          <Title component="h3">
            <IoAlertCircleSharp color={colors.warningColorActive} /> Deletar sua
            conta?
          </Title>
          <p className="p-info">
            Você tem certeza que deseja deletar sua conta?
          </p>
          <p className="p-info">
            Todas suas playlists e dados pessoais vão ser deletados e você não
            vai ter mais acesso a esta conta
          </p>
          <p className="p-info smaller">
            <strong>Essa ação não tem volta.</strong>
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
      <LoadingAllScreen isLoading={isLoadingDeleteAccount} />
    </div>
  );
}

KeepMountedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
