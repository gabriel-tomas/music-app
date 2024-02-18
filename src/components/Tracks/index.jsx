import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import getMinutesAndSeconds from '../../utils/musicUtils/getMinutesAndSeconds';

import { ContainerTracks, ContainerTrack } from './styled';

export default function Tracks({ tracks }) {
  console.log(tracks);
  return (
    tracks && (
      <ContainerTracks>
        {tracks.map((track) => (
          <ContainerTrack key={track.id}>
            <div className="left-content">
              <button className="play-track-btn">
                <div className="container-img">
                  <img
                    src={
                      track.album.images.find((item) => item.width === 300).url
                    }
                    alt={track.name}
                  />
                </div>
              </button>
              <div className="track-info">
                <span className="track-name">{track.name}</span>
                <div className="track-artists">
                  {track.artists.map((artist) => (
                    <Link
                      key={artist.id}
                      to={`/artist/${artist.id}`}
                      className="artist-link"
                    >
                      {artist.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="track-duration">
              <span>{getMinutesAndSeconds(track.duration_ms)}</span>
            </div>
          </ContainerTrack>
        ))}
      </ContainerTracks>
    )
  );
}

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
