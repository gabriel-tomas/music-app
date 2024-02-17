import PropTypes from 'prop-types';

import { ContainerAlbums, ContainerAlbumItem } from './styled';

export default function Albums({ albums }) {
  return (
    <ContainerAlbums>
      {albums
        ? albums.map((album) => {
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
                    <h2>{album.name}</h2>
                    <div className="artists-box">
                      {album.artists.map((artist) => {
                        return <span key={artist.id}>{artist.name}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </ContainerAlbumItem>
            );
          })
        : null}
    </ContainerAlbums>
  );
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};
