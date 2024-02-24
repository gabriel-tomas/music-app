import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { ContainerAlbums, ContainerAlbumItem } from './styled';

export default function Albums({ albums }) {
  const navigate = useNavigate();

  const handleRedirectToAlbum = (link) => {
    navigate(link);
  };

  const handleArtistLinkClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ContainerAlbums>
      {albums &&
        albums.map((album) => {
          return (
            album && (
              <ContainerAlbumItem
                key={album.id}
                onClick={() => handleRedirectToAlbum(`/album/${album.id}`)}
              >
                <div>
                  <div className="container-img">
                    <img
                      src={getAlbumImageUrl(album.images, 640)}
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
                            onClick={handleArtistLinkClick}
                          >
                            {artist.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ContainerAlbumItem>
            )
          );
        })}
    </ContainerAlbums>
  );
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};
