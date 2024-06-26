import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaPlay, FaStop } from 'react-icons/fa';
import { IoMdMusicalNote } from 'react-icons/io';

import TrackOptions from './TrackOptions';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';
import getDataTracksQueue from '../../utils/musicUtils/getDataTracksQueue';

import * as queueTracksActions from '../../store/modules/queueMusics/actions';
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

const TrackImage = ({ trackImages, trackName }) => {
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

    loadImage(getAlbumImageUrl(trackImages, 300))
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error('Ocorreu um erro ao tentar carregar a imagem das músicas'),
      );
  }, []);

  return imgsLoaded ? (
    <img src={getAlbumImageUrl(trackImages, 300)} alt={trackName} />
  ) : (
    <IoMdMusicalNote className="default-img" color={colors.neutral7} />
  );
};

TrackImage.propTypes = {
  trackImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  trackName: PropTypes.string.isRequired,
};

export default function Tracks({
  tracks,
  numbered,
  optionsType,
  playlistName,
}) {
  const dispatch = useDispatch();
  const currentPreviewUrl = useSelector(
    (state) => state.currentMusic.currentPreviewMusic,
  );
  const currentStateMusic = useSelector(
    (state) => state.musicPlayer.currentState,
  );

  const handleSetMusic = (
    previewUrl,
    trackImg,
    trackTitle,
    trackArtists,
    trackIndex,
  ) => {
    if (previewUrl !== '' && previewUrl === currentPreviewUrl) {
      dispatch(musicPlayerActions.setActualMusicState('playing'));
      return;
    }
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
    dispatch(
      queueTracksActions.setQueueTracks({
        queueTracks: getDataTracksQueue(tracks, trackIndex),
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
        {tracks.map((track, index) => (
          <ContainerTrack
            key={index}
            onClick={() => {
              currentPreviewUrl === track.preview_url &&
              currentStateMusic === 'playing'
                ? handlePlayPauseMusic()
                : handleSetMusic(
                    track.preview_url || '',
                    getAlbumImageUrl(track.album.images, 300),
                    track.name,
                    track.artists,
                    index,
                  );
            }}
          >
            <div className="left-content">
              <button
                className="play-track-btn"
                onClick={(event) => {
                  event.stopPropagation();
                  currentPreviewUrl === track.preview_url &&
                  currentStateMusic === 'playing'
                    ? handlePlayPauseMusic()
                    : handleSetMusic(
                        track.preview_url || '',
                        getAlbumImageUrl(track.album.images, 300),
                        track.name,
                        track.artists,
                        index,
                      );
                }}
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
                  <TrackImage
                    trackImages={track.album.images}
                    trackName={track.name}
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
                      onClick={(event) => event.stopPropagation()}
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
          (track, index) =>
            track && (
              <ContainerTrackLi
                key={index}
                onClick={() => {
                  currentPreviewUrl === track.preview_url &&
                  currentStateMusic === 'playing'
                    ? handlePlayPauseMusic()
                    : handleSetMusic(
                        track.preview_url || '',
                        getAlbumImageUrl(track.album.images, 300),
                        track.name,
                        track.artists,
                        index,
                      );
                }}
              >
                <ContainerTrackContent>
                  <div className="left-content">
                    <button
                      className="play-track-btn"
                      onClick={(event) => {
                        event.stopPropagation();
                        currentPreviewUrl === track.preview_url &&
                        currentStateMusic === 'playing'
                          ? handlePlayPauseMusic()
                          : handleSetMusic(
                              track.preview_url || '',
                              getAlbumImageUrl(track.album.images, 300),
                              track.name,
                              track.artists,
                              index,
                            );
                      }}
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
                        <TrackImage
                          trackImages={track.album.images}
                          trackName={track.name}
                        />
                      </div>
                    </button>
                    <div className="track-info">
                      <span className={`track-name`}>{track.name}</span>
                      <div className={`track-artists`}>
                        {track.artists.map((artist) => (
                          <Link
                            key={artist.id}
                            to={`/artist/${artist.id}`}
                            onClick={(event) => event.stopPropagation()}
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
                      <TrackOptions
                        track={track}
                        optionsType={optionsType}
                        playlistName={playlistName}
                      />
                    </div>
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
  optionsType: 'outPlaylist',
  playlistName: '',
  typeInsideUserPlaylist: false,
};

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  numbered: PropTypes.bool,
  optionsType: PropTypes.string,
  playlistName: PropTypes.string,
  typeInsideUserPlaylist: PropTypes.bool,
};
