import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { addToPlaylist } from '../../../services/backend/library/add.js';
import { getPlaylists } from '../../../services/backend/library/index.js';

/* import * as updatePlaylistActions from '../../../store/modules/updatePlaylist/actions.js'; */
import * as authActions from '../../../store/modules/auth/actions.js';

import Loading from '../../../components/Loading';
import LoadingAllScreen from '../../../components/LoadingAllScreen';

import colors from '../../../config/colors';
import fontSizes from '../../../config/fontSizes.js';

import { Title, ContainerPlaylists, ContainerItemPlaylist } from './styled.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(400px, 80vw)',
  bgcolor: colors.background['100'],
  borderRadius: '1rem',
  boxShadow: 24,
  paddingBlock: 2,
  paddingInline: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'center',
  '.p-info': {
    fontSize: fontSizes.fontSizeBase,
  },
};

export default function KeepMountedModal({ handleClose, track }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userIsLoggedIn = useSelector((state) => state.auth.token);
  /* const updatePlaylists = useSelector(
    (state) => state.updatePlaylists.updatePlaylists,
  ); */

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAdding, setisLoadingAdding] = useState(false);
  const [userPlaylists, setUserPlaylists] = useState(null);

  const handleAddToPlaylist = async (event, playlistName) => {
    event.stopPropagation();
    if (!track) return;
    if (!playlistName) return;

    setisLoadingAdding(true);
    try {
      const response = await addToPlaylist(track, playlistName);
      /* dispatch(updatePlaylistActions.updatePlaylists()); */
      setisLoadingAdding(false);
      handleClose(event);
      toast.success(response.successMsg);
    } catch (err) {
      const responseData = get(err.response, 'data', '');
      const status = get(err.response, 'status', 0);
      setisLoadingAdding(false);

      if (status === 401) {
        dispatch(authActions.authFail());
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }

      if (status === 400 || status === 500) {
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }
    }
  };

  const handlePreventPropagation = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate('/account');
      return;
    }
  }, [userIsLoggedIn]);

  useEffect(() => {
    const requestUserPlaylists = async () => {
      if (!userIsLoggedIn) return;
      setIsLoading(true);
      try {
        const response = await getPlaylists();
        setUserPlaylists(response);
        setIsLoading(false);
      } catch (err) {
        const responseData = get(err.response, 'data', '');
        const status = get(err.response, 'status', 0);
        setIsLoading(false);

        if (status === 401) {
          dispatch(authActions.authFail());
          responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
        }

        if (status === 500) {
          responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
        }
      }
    };
    requestUserPlaylists();
  }, [userIsLoggedIn]);

  /* useEffect(() => {
    const requestUserPlaylists = async () => {
      if (!userIsLoggedIn) return;
      setIsLoading(true);
      try {
        const response = await getPlaylists();
        setUserPlaylists(response);
        setIsLoading(false);
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

    if (updatePlaylists) {
      requestUserPlaylists();
      dispatch(updatePlaylistActions.notUpdatePlaylists());
    }
  }, [updatePlaylists, userIsLoggedIn]); */

  return (
    userIsLoggedIn && (
      <>
        <div>
          <Modal
            keepMounted
            open={true}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            onClick={handlePreventPropagation}
          >
            <Box sx={style}>
              <ContainerPlaylists>
                {userPlaylists &&
                  Object.keys(userPlaylists.playlists).map((value) => (
                    <ContainerItemPlaylist
                      key={value}
                      onClick={(event) => handleAddToPlaylist(event, value)}
                    >
                      {value}
                    </ContainerItemPlaylist>
                  ))}
                <Loading isLoading={isLoading} smallComponent />
              </ContainerPlaylists>
            </Box>
          </Modal>
        </div>
        <LoadingAllScreen
          preventPropagation={handlePreventPropagation}
          isLoading={isLoadingAdding}
        />
      </>
    )
  );
}

KeepMountedModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired,
};
