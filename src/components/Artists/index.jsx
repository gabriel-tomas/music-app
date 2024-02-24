import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
              <img
                src={artist.images.find((item) => item.width === 640).url}
                alt={artist.name}
              />
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
