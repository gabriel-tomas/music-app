import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoDiscOutline, IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import getAlbumImageUrl from '../../../utils/musicUtils/getAlbumImageUrl';

import ModalCreatePlaylist from './ModalCreatePlaylist';
import PlaylistOptions from './PlaylistOptions';

import {
  ContainerUserPlaylists,
  ContainerPlaylistItems,
  ContainerItemPlaylist,
  ContainerEmptyPlaylists,
} from './styled';

import colors from '../../../config/colors';

export default function Playlists({ playlists }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const keys = Object.keys(playlists);
  const username = useSelector((state) => state.auth.user.username);

  return (
    <ContainerUserPlaylists>
      <ModalCreatePlaylist open={open} handleClose={handleClose} />
      <header className="header-user-playlists">
        <div className="container-left">
          <h1 className="title-user-playlists">{username}</h1>
          <span>Minhas playlists</span>
        </div>
        <button className="create-new-playlist-btn" onClick={handleOpen}>
          <IoAdd />
        </button>
      </header>
      {keys.length > 0 ? (
        <ContainerPlaylistItems>
          {keys.map((key, index) => {
            return (
              <ContainerItemPlaylist
                key={index}
                onClick={(event) => {
                  event.stopPropagation();
                  navigate(`/library/${encodeURIComponent(key)}`, {
                    state: { playlistTracks: playlists[key] },
                  });
                }}
              >
                {playlists[key].length > 0 ? (
                  <>
                    <div className="container-img">
                      <img
                        src={getAlbumImageUrl(
                          playlists[key][0].album.images,
                          300,
                        )}
                        alt=""
                      />
                    </div>
                    <div className="container-right">
                      <div className="name-playlist">
                        <h2>{key}</h2>
                      </div>
                      <div className="container-songs">
                        {playlists[key].map((song, index) => {
                          return (
                            <span key={index} className="song-name">
                              {song.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="container-img">
                      <IoDiscOutline color={colors.primary['800']} />
                    </div>
                    <div className="container-right">
                      <div className="name-playlist">
                        <h2>{key}</h2>
                      </div>
                    </div>
                  </>
                )}
                <div className="container-playlist-options">
                  <PlaylistOptions itemKey={key} />
                </div>
              </ContainerItemPlaylist>
            );
          })}
        </ContainerPlaylistItems>
      ) : (
        <ContainerEmptyPlaylists>
          <h2>Crie novas playlists</h2>
          <p>Salve suas músicas favoritas e escute a hora que quiser</p>
          <button
            className="create-playlist-empty-playlists-btn"
            onClick={handleOpen}
          >
            Criar playlist
          </button>
        </ContainerEmptyPlaylists>
      )}
    </ContainerUserPlaylists>
  );
}

Playlists.propTypes = {
  playlists: PropTypes.object.isRequired,
};
