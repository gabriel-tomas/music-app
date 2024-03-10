import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { RxDotsHorizontal } from 'react-icons/rx';
import { get } from 'lodash';

import Tracks from '../../components/Tracks';

import { ContainerNotFound, ContainerUserPlaylist } from './styled';

export default function LibraryPlaylist() {
  const { state } = useLocation();
  const { playlistName } = useParams();

  const userIsLoggedIn = useSelector((state) => state.auth.token);
  const updatePlaylists = useSelector(
    (state) => state.updatePlaylists.updatePlaylists,
  );
  const username = useSelector((state) => state.auth.user.username);

  const [playlistTracks, setPlaylistTracks] = useState(null);
  // null = playlist não existe , {} = playlist existe mas está sem músicas, {playlist1: {...}}[ playlist existe e está com música(as)

  useEffect(() => {
    if (get(state, 'playlistTracks', null)) {
      setPlaylistTracks(state.playlistTracks);
    } else {
      const getPlaylistTracks = async () => {
        // get only a playlist
      };
    }
  }, []);

  /* if (!playlistName) {
    return (
      <ContainerNotFound>
        <h1>Playlist não encontrada</h1>
      </ContainerNotFound>
    );
  } */

  console.log(playlistTracks);

  return (
    playlistTracks && (
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
        {playlistTracks.length !== 0 && (
          <Tracks tracks={playlistTracks} numbered optionsType={'inPlaylist'} />
        )}
      </ContainerUserPlaylist>
    )
  );
}
