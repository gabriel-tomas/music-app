import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import colors from '../../config/colors';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { ContainerArtists, ContainerArtist } from './styled';

const ArtistImage = ({ artistImages, artistName }) => {
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

    if (artistImages.length === 0) return;

    loadImage(getAlbumImageUrl(artistImages, 640))
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error('Ocorreu um erro ao tentar carregar a imagem dos artistas'),
      );
  }, []);

  return artistImages.length === 0 ? (
    <FaUserAlt className="non-img-artist" color={colors.secondary['950']} />
  ) : imgsLoaded ? (
    <img src={getAlbumImageUrl(artistImages, 640)} alt={artistName} />
  ) : (
    <FaUserAlt className="default-img" color={colors.neutral7} />
  );
};

ArtistImage.propTypes = {
  artistImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistName: PropTypes.string.isRequired,
};

export default function Artists({ artists }) {
  const navigate = useNavigate();

  const handleRedirectToArtist = (link) => {
    navigate(link);
  };

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
                  <ArtistImage
                    artistImages={artist.images}
                    artistName={artist.name}
                  />
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
