import PropTypes from 'prop-types';

import { ContainerPlaylists, ContainerPlaylistItem } from './styled';

export default function Playlists({ playlists }) {
  console.log(playlists);

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
                  <img src={playlist.images[0].url} alt={playlist.name} />
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
