import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ContainerAlbums, ContainerAlbumItem } from './styled';

export default function Albums({ albums }) {
  return (
    <ContainerAlbums>
      {albums &&
        albums.map((album) => {
          return (
            <ContainerAlbumItem
              key={album.id}
              to={`/album/${album.id}`}
              state={album}
            >
              <div>
                <div className="container-img">
                  <img
                    src={album.images.find((item) => item.width === 640).url}
                    alt={album.name}
                  />
                </div>
                <div className="secondary-content">
                  <span className="album-name">{album.name}</span>
                  <div className="artists-box">
                    {album.artists.map((artist) => {
                      return (
                        <Link
                          key={artist.id}
                          className="artist-link"
                          to={`/artist/${artist.id}`}
                        >
                          {artist.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ContainerAlbumItem>
          );
        })}
    </ContainerAlbums>
  );
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};
