import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import colors from '../../config/colors';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import { ContainerArtists, ContainerArtist } from './styled';

export default function Artists({ artists }) {
  const navigate = useNavigate();

  const handleRedirectToArtist = (link) => {
    navigate(link);
  };

  return (
    <ContainerArtists>
      {artists &&
        artists.map((artist) => (
          <ContainerArtist
            key={artist.id}
            onClick={() => handleRedirectToArtist(`/artist/${artist.id}`)}
          >
            <div className="container-img">
              {artist.images.length === 0 ? (
                <FaUserAlt color={colors.secondary['950']} />
              ) : (
                <img
                  src={getAlbumImageUrl(artist.images, 640)}
                  alt={artist.name}
                />
              )}
            </div>
            <div className="container-info-bottom">
              <span className="artist-name">{artist.name}</span>
              <span className="type">Artista</span>
            </div>
          </ContainerArtist>
        ))}
    </ContainerArtists>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
};
