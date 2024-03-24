import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RiAlbumLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { ContainerAlbums, ContainerAlbumItem } from './styled';

import colors from '../../config/colors';

const AlbumImage = ({ albumImages, albumName }) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);

        loadImg.onerror = (err) => reject(err);
      });
    };

    loadImage(getAlbumImageUrl(albumImages, 640))
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error('Ocorreu um erro ao tentar carregar a imagem dos albums'),
      );
  }, []);

  return imgsLoaded ? (
    <img src={getAlbumImageUrl(albumImages, 640)} alt={albumName} />
  ) : (
    <RiAlbumLine color={colors.neutral7} />
  );
};

AlbumImage.propTypes = {
  albumImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  albumName: PropTypes.string.isRequired,
};

export default function Albums({ albums, slowAppearanceAnimation }) {
  const navigate = useNavigate();

  const handleRedirectToAlbum = (link) => {
    navigate(link);
  };

  const handleArtistLinkClick = (event) => {
    event.stopPropagation();
  };

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
                    <AlbumImage
                      albumImages={album.images}
                      albumName={album.name}
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

Albums.defaultProps = {
  slowAppearanceAnimation: false,
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  slowAppearanceAnimation: PropTypes.bool,
};
