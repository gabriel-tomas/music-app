import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RiAlbumLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { ContainerAlbums, ContainerAlbumItem } from './styled';

import colors from '../../config/colors';

export default function Albums({ albums, slowAppearanceAnimation }) {
  const navigate = useNavigate();

  const [imgsLoaded, setImgsLoaded] = useState(false);

  const handleRedirectToAlbum = (link) => {
    navigate(link);
  };

  const handleArtistLinkClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      albums.map((album) => loadImage(getAlbumImageUrl(album.images, 640))),
    )
      .then(() => setImgsLoaded(true))
      .catch(() => toast.error('Ocorreu um erro ao tentar carregar os albums'));
  }, []);

  console.log(imgsLoaded);

  return (
    <ContainerAlbums
      className={`${slowAppearanceAnimation && 'slow-appearance-animation'}`}
    >
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
                    {imgsLoaded ? (
                      <img
                        src={getAlbumImageUrl(album.images, 640)}
                        alt={album.name}
                      />
                    ) : (
                      <RiAlbumLine color={colors.neutral7} />
                    )}
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

Albums.defaultProps = {
  slowAppearanceAnimation: false,
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  slowAppearanceAnimation: PropTypes.bool,
};
