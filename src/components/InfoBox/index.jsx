import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { useDispatch } from 'react-redux';

import * as infoShowActions from '../../store/modules/infoShow/actions.js';

import colors from '../../config/colors';

import { Title, ContainerInfoBox } from './styled.js';

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
  paddingInline: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  'button.confirm-btn': {
    height: 'fit-content',
    paddingBlock: '.7rem',
    backgroundColor: colors.primary['200'],
    marginTop: '1.67rem',
  },
  'button.confirm-btn:hover': {
    backgroundColor: colors.primary['300'],
  },
  'button.confirm-btn:active': {
    backgroundColor: colors.primary['400'],
  },
};

export default function TransitionsModal() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(infoShowActions.setInfoShowed());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Title>Aviso!</Title>
            <ContainerInfoBox>
              <p>
                O projeto é feito com o único e exclusivo objetivo de praticar
                certas tecnologias, ele é feito somente para propositos
                educacionais.
              </p>
              <p>
                Tenha o consentimento que as músicas só tem a duração de 30
                segundos por ser um preview do spotify e existe músicas que não
                tem esse preview.
              </p>
              <p>
                Você consegue ver o projeto em mais detalhes aqui:{' '}
                <a
                  className="redirect-project"
                  href="https://github.com/gabriel-tomas/music-app"
                  target="_blank"
                >
                  github.com/gabriel-tomas/music-app
                </a>
              </p>
            </ContainerInfoBox>
            <button className="confirm-btn" onClick={handleClose}>
              Ok, entendi
            </button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
