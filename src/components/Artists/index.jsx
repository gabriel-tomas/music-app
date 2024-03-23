import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import colors from '../../config/colors';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { ContainerArtists, ContainerArtist } from './styled';

export default function Artists({ artists }) {
  const navigate = useNavigate();

  const [imgsLoaded, setImgsLoaded] = useState(false);

  const handleRedirectToArtist = (link) => {
    navigate(link);
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
      artists.map((artist) => {
        if (get(artist, 'artist.images', []).length === 0) return;
        return loadImage(getAlbumImageUrl(artist.images, 640));
      }),
    )
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error('Ocorreu um erro ao tentar carregar a imagem dos artistas'),
      );
  }, []);

  return (
    <ContainerArtists>
      {artists &&
        artists.map(
          (artist) =>
            artist && (
              <ContainerArtist
                key={artist.id}
                onClick={() => handleRedirectToArtist(`/artist/${artist.id}`)}
              >
                <div className="container-img">
                  {artist.images.length === 0 && imgsLoaded ? (
                    <FaUserAlt
                      className="non-img-artist"
                      color={colors.secondary['950']}
                    />
                  ) : imgsLoaded ? (
                    <img
                      src={getAlbumImageUrl(artist.images, 640)}
                      alt={artist.name}
                    />
                  ) : (
                    <FaUserAlt
                      className="default-img"
                      color={colors.neutral7}
                    />
                  )}
                </div>
                <div className="container-info-bottom">
                  <span className="artist-name">{artist.name}</span>
                  <span className="type">Artista</span>
                </div>
              </ContainerArtist>
            ),
        )}
    </ContainerArtists>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
};
