import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
  '@media screen and (max-width: 468px)': {
    paddingInline: 4,
  },
};

export default function KeepMountedModal({ open, handleClose, handleSubmit }) {
  const isLoadingEdit = useSelector((state) => state.user.isLoading);

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
          <Title component="h3">Atualizar dados?</Title>
          <p className="p-info">
            Atualizar seus dados vai fazer você sair da sua conta. Você tera que
            logar-se novamente.
          </p>
          <ContainerSubmit>
            <button className="cancel-btn" onClick={handleClose}>
              Cancelar
            </button>
            <button className="edit-btn" onClick={handleSubmit}>
              Salvar
            </button>
          </ContainerSubmit>
        </Box>
      </Modal>
      <LoadingAllScreen isLoading={isLoadingEdit} />
    </div>
  );
}

KeepMountedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
