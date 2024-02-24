import PropTypes from 'prop-types';
import { IoDiscSharp } from 'react-icons/io5';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { ContainerPlaylists, ContainerPlaylistItem } from './styled';

export default function Playlists({ playlists }) {
  return (
    <ContainerPlaylists>
      {playlists &&
        playlists.map((playlist) => {
          return (
            <ContainerPlaylistItem
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
            >
              <div>
                <div className="container-img">
                  {playlist.images.length === 0 ? (
                    <IoDiscSharp />
                  ) : (
                    <img
                      src={getAlbumImageUrl(playlist.images, 300)}
                      alt={playlist.name}
                    />
                  )}
                </div>
                <div className="secondary-content">
                  <span className="playlist-name">{playlist.name}</span>
                  <div className="owner-box">
                    <span className="owner">{playlist.owner.display_name}</span>
                  </div>
                </div>
              </div>
            </ContainerPlaylistItem>
          );
        })}
    </ContainerPlaylists>
  );
}

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
};
