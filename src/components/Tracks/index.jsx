import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaPlay, FaStop } from 'react-icons/fa';

import TrackOptions from './TrackOptions';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import * as currentMusicActions from '../../store/modules/currentMusic/actions';
import * as musicPlayerActions from '../../store/modules/musicPlayer/actions';
import colors from '../../config/colors';
import getMinutesAndSeconds from '../../utils/musicUtils/getMinutesAndSeconds';

import {
  ContainerTracks,
  ContainerTrack,
  ContainerTracksOl,
  ContainerTrackLi,
  ContainerTrackContent,
} from './styled';

export default function Tracks({ tracks, numbered }) {
  const dispatch = useDispatch();
  const currentPreviewUrl = useSelector(
    (state) => state.currentMusic.currentPreviewMusic,
  );
  const currentStateMusic = useSelector(
    (state) => state.musicPlayer.currentState,
  );

  const handleSetMusic = (previewUrl, trackImg, trackTitle, trackArtists) => {
    if (!previewUrl.match(/https:|mp3-preview/i)) {
      toast.info('Preview da música não disponível');
      return;
    }
    dispatch(
      currentMusicActions.setCurrentMusic({
        previewUrl,
        trackImg,
        trackTitle,
        trackArtists,
      }),
    );
    dispatch(musicPlayerActions.setActualMusicState('playing'));
  };

  const handlePlayPauseMusic = () => {
    if (currentStateMusic === 'playing') {
      dispatch(musicPlayerActions.setActualMusicState('stopped'));
      return;
    } else if (currentStateMusic === 'stopped') {
      dispatch(musicPlayerActions.setActualMusicState('playing'));
    }
  };

  return (
    tracks &&
    (!numbered ? (
      <ContainerTracks>
        {tracks.map((track) => (
          <ContainerTrack key={track.id}>
            <div className="left-content">
              <button
                className="play-track-btn"
                onClick={() =>
                  currentPreviewUrl === track.preview_url &&
                  currentStateMusic === 'playing'
                    ? handlePlayPauseMusic()
                    : handleSetMusic(
                        track.preview_url || '',
                        getAlbumImageUrl(track.album.images, 300),
                        track.name,
                        track.artists,
                      )
                }
              >
                <div className="container-img">
                  <div className="hover-img">
                    {currentPreviewUrl === track.preview_url &&
                    currentStateMusic === 'playing' ? (
                      <FaStop color={colors.neutral5Light} />
                    ) : (
                      <FaPlay color={colors.neutral5Light} />
                    )}
                  </div>
                  <img
                    src={getAlbumImageUrl(track.album.images, 300)}
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
            <div className="right-container">
              <div className="track-duration">
                <span>{getMinutesAndSeconds(track.duration_ms)}</span>
              </div>
              <div className="container-playlist-options">
                <TrackOptions track={track} />
              </div>
            </div>
          </ContainerTrack>
        ))}
      </ContainerTracks>
    ) : (
      <ContainerTracksOl>
        {tracks.map(
          (track) =>
            track && (
              <ContainerTrackLi key={track.id}>
                <ContainerTrackContent>
                  <div className="left-content">
                    <button
                      className="play-track-btn"
                      onClick={() =>
                        currentPreviewUrl === track.preview_url &&
                        currentStateMusic === 'playing'
                          ? handlePlayPauseMusic()
                          : handleSetMusic(
                              track.preview_url || '',
                              getAlbumImageUrl(track.album.images, 300),
                              track.name,
                              track.artists,
                            )
                      }
                    >
                      <div className="container-img">
                        <div className="hover-img">
                          {currentPreviewUrl === track.preview_url &&
                          currentStateMusic === 'playing' ? (
                            <FaStop color={colors.neutral5Light} />
                          ) : (
                            <FaPlay color={colors.neutral5Light} />
                          )}
                        </div>
                        <img
                          src={getAlbumImageUrl(track.album.images, 300)}
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
                </ContainerTrackContent>
              </ContainerTrackLi>
            ),
        )}
      </ContainerTracksOl>
    ))
  );
}

Tracks.defaultProps = {
  numbered: false,
};

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  numbered: PropTypes.bool,
};
