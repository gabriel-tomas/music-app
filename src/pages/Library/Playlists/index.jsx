import PropTypes from 'prop-types';
import { IoDiscOutline } from 'react-icons/io5';

import getAlbumImageUrl from '../../../utils/musicUtils/getAlbumImageUrl';

import { ContainerPlaylistItems, ContainerItemPlaylist } from './styled';

import colors from '../../../config/colors';

export default function Playlists({ playlists }) {
  const keys = Object.keys(playlists);

  return keys.length > 0 ? (
    <ContainerPlaylistItems>
      {keys.map((key, index) => {
        return (
          <ContainerItemPlaylist key={index}>
            {playlists[key].length > 0 ? (
              <>
                <div className="container-img">
                  <img
                    src={getAlbumImageUrl(playlists[key][0].album.images, 300)}
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
  ) : null;
}

Playlists.propTypes = {
  playlists: PropTypes.object.isRequired,
};
