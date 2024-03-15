import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { getPlaylists } from '../../services/backend/library/index';

import * as updatePlaylistActions from '../../store/modules/updatePlaylist/actions.js';
import * as authActions from '../../store/modules/auth/actions.js';

import Loading from '../../components/Loading';
import NotLogged from './NotLogged';
import Playlists from './Playlists';

export default function Library() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const userIsLoggedIn = useSelector((state) => state.auth.token);
  const updatePlaylists = useSelector(
    (state) => state.updatePlaylists.updatePlaylists,
  );
  const [userPlaylists, setUserPlaylists] = useState(null);

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

      setUserPlaylists(null);
    }
  };

  useEffect(() => {
    requestUserPlaylists();
  }, [userIsLoggedIn]);

  useEffect(() => {
    if (updatePlaylists) {
      requestUserPlaylists();
      dispatch(updatePlaylistActions.notUpdatePlaylists());
    }
  }, [updatePlaylists, userIsLoggedIn]);

  return (
    <>
      {!userIsLoggedIn && <NotLogged />}
      {userIsLoggedIn && userPlaylists && (
        <Playlists playlists={userPlaylists.playlists} />
      )}
      <Loading isLoading={isLoading} />
    </>
  );
}
