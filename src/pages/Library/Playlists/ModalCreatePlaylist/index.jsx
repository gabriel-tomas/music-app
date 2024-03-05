import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import colors from '../../../../config/colors';

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

import { TitleCreate, InputCreate, ContainerSubmit } from './styled.js';

export default function KeepMountedModal({ open, handleClose }) {
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
          <InputCreate></InputCreate>
          <ContainerSubmit>
            <button className="cancel-btn" onClick={handleClose}>
              Cancelar
            </button>
            <button className="create-btn">Criar</button>
          </ContainerSubmit>
        </Box>
      </Modal>
    </div>
  );
}

KeepMountedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
