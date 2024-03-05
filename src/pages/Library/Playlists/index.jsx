import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoDiscOutline, IoAdd } from 'react-icons/io5';

import getAlbumImageUrl from '../../../utils/musicUtils/getAlbumImageUrl';

import ModalCreatePlaylist from './ModalCreatePlaylist';

import {
  ContainerUserPlaylists,
  ContainerPlaylistItems,
  ContainerItemPlaylist,
} from './styled';

import colors from '../../../config/colors';

export default function Playlists({ playlists }) {
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
              <ContainerItemPlaylist key={index}>
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
                            <div className="song" key={index}>
                              <div className="secondary-content">
                                <span className="song-name">{song.name}</span>
                              </div>
                            </div>
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
              </ContainerItemPlaylist>
            );
          })}
        </ContainerPlaylistItems>
      ) : null}
    </ContainerUserPlaylists>
  );
}

Playlists.propTypes = {
  playlists: PropTypes.object.isRequired,
};
