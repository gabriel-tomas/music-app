import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { RxDotsHorizontal } from 'react-icons/rx';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import * as authActions from '../../store/modules/auth/actions';
import * as updatePlaylistActions from '../../store/modules/updatePlaylist/actions';

import { getPlaylist } from '../../services/backend/library/show';

import Tracks from '../../components/Tracks';
import Loading from '../../components/Loading';

import {
  ContainerNotFound,
  ContainerNoTracks,
  ContainerUserPlaylist,
} from './styled';

export default function LibraryPlaylist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;
  const { playlistName } = useParams();

  const userIsLoggedIn = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.auth.user.username);
  const updateOnlyAPlaylist = useSelector(
    (state) => state.updatePlaylists.updateOnlyAPlaylist,
  );

  const [playlistTracks, setPlaylistTracks] = useState(null);
  // null = playlist não setada, false = playlist não existe , {} = playlist existe mas está sem músicas, {playlist1: {...}}[ playlist existe e está com música(as)
  const [isLoading, setIsLoading] = useState(false);

  const getPlaylistTracks = async () => {
    try {
      setIsLoading(true);
      const response = await getPlaylist(playlistName);
      console.log(response.playlist);
      setPlaylistTracks(response.playlist);
      setIsLoading(false);
    } catch (err) {
      const responseData = get(err.response, 'data', '');
      const status = get(err.response, 'status', 0);
      setIsLoading(false);

      if (status === 401) {
        dispatch(authActions.authFail());
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }

      if (status === 500 || status === 400) {
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }
      setPlaylistTracks(false);
    }
  };

  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate('/account');
      return;
    }
  }, [userIsLoggedIn]);

  useEffect(() => {
    let dontUseState = false;
    if (!userIsLoggedIn) {
      return;
    }

    if (updateOnlyAPlaylist) {
      window.history.replaceState({}, '');
      location.state = '';
      dontUseState = true;
      dispatch(updatePlaylistActions.notUpdateOnlyAPlaylist());
    }

    if (get(state, 'playlistTracks', null) && !dontUseState) {
      setPlaylistTracks(state.playlistTracks);
    } else {
      getPlaylistTracks();
    }
  }, [playlistName, state, userIsLoggedIn, updateOnlyAPlaylist]);

  return (
    <>
      {playlistTracks && (
        <ContainerUserPlaylist>
          <header className="header-user-playlists">
            <div className="container-left">
              <h1 className="title-user-playlists">{username}</h1>
              <span>{playlistName}</span>
            </div>
            <button className="edit-playlist-btn">
              <RxDotsHorizontal />
            </button>
          </header>
          {playlistTracks.length !== 0 ? (
            <Tracks
              tracks={playlistTracks}
              numbered
              optionsType={'inPlaylist'}
              playlistName={playlistName}
            />
          ) : (
            <ContainerNoTracks>
              <h2>Playlist vazia</h2>
              <p>Adicione novas músicas a sua playlist</p>
              <Link className="redirect-search" to="/search">
                Procure por novas músicas
              </Link>
            </ContainerNoTracks>
          )}
        </ContainerUserPlaylist>
      )}
      {playlistTracks === false && (
        <ContainerNotFound>
          <h1>Playlist não encontrada</h1>
          <div className="container-link">
            <Link className="redirect-library" to="/library">
              Voltar para biblioteca
            </Link>
          </div>
        </ContainerNotFound>
      )}
      <Loading isLoading={isLoading} />
    </>
  );
}
