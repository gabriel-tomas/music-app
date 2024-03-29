import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FaPlay, FaStop, FaUserAlt } from 'react-icons/fa';

import { get } from 'lodash';

import colors from '../../config/colors';

import Loading from '../../components/Loading';
import TrackOptions from './TrackOptions';

import getAlbum from '../../services/spotifyRequest/albums/album';
import getAlbumTracks from '../../services/spotifyRequest/albums/albumTracks';

import addAlbumToTrack from '../../utils/addAlbumToTrack';
import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import * as currentMusicActions from '../../store/modules/currentMusic/actions';
import * as queueTracksActions from '../../store/modules/queueMusics/actions';
import * as musicPlayerActions from '../../store/modules/musicPlayer/actions';

import getDataTracksQueue from '../../utils/musicUtils/getDataTracksQueue';
import getMinutesAndSeconds from '../../utils/musicUtils/getMinutesAndSeconds';

import {
  ContainerAlbum,
  ContainerAlbumInfo,
  ContainerAlbumTracks,
  ContainerAlbumTrack,
} from './styled';

export default function Album() {
  const dispatch = useDispatch();
  const currentPreviewUrl = useSelector(
    (state) => state.currentMusic.currentPreviewMusic,
  );
  const currentStateMusic = useSelector(
    (state) => state.musicPlayer.currentState,
  );

  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();
  const { id: albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const requestAlbum = async () => {
      if (!albumId) return;
      setIsLoading(true);
      try {
        if (state) {
          const tracksRequest = await getAlbumTracks(albumId);
          var albumData = { ...state, tracks: tracksRequest };
        } else {
          const response = await getAlbum(albumId);
          albumData = { ...response };
        }
        const albumModified = addAlbumToTrack(albumData);
        setAlbum(albumModified);
        setIsLoading(false);
      } catch (err) {
        toast.error('Ocorreu um erro ao tentar carregar os dados do álbum');
        setAlbum(null);
        setIsLoading(false);
      }
    };

    requestAlbum();
  }, [albumId, state]);

  const handleSetMusic = (
    previewUrl,
    trackImg,
    trackTitle,
    trackArtists,
    trackIndex,
  ) => {
    if (previewUrl === currentPreviewUrl) {
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
        queueTracks: getDataTracksQueue(album.tracks.items, trackIndex),
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

  const handlePreventPropagation = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (!album) return;

    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      (() => {
        if (get(album, 'images', []).length === 0) return [];
        return [loadImage(getAlbumImageUrl(album.images, 640))];
      })(),
    )
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error('Ocorreu um erro ao tentar carregar a imagem do album'),
      );
  }, [album]);

  return (
    <>
      {album ? (
        <ContainerAlbum>
          <ContainerAlbumInfo>
            <h1 className="album-type">
              {album.album_type === 'single' ? 'Single' : 'Álbum'}
            </h1>
            <div className="bottom-content">
              <div className="container-img">
                {imgsLoaded ? (
                  <img
                    src={getAlbumImageUrl(album.images, 640)}
                    alt={album.name}
                  />
                ) : (
                  <FaUserAlt color={colors.neutral7} />
                )}
              </div>
              <h2 className="album-name">{album.name}</h2>
              <div className="album-info">
                <span className="artists-box">
                  {album.artists.map((artist) => (
                    <Link
                      key={artist.id}
                      to={`/artist/${artist.id}`}
                      className="artist-link"
                    >
                      <span>{artist.name}</span>
                    </Link>
                  ))}
                </span>
                <span className="album-release">
                  {album.release_date.slice(0, album.release_date.indexOf('-'))}
                </span>
                <div>{album.total_tracks} música(as)</div>
              </div>
            </div>
          </ContainerAlbumInfo>
          <ContainerAlbumTracks>
            <ol>
              {album.tracks.items.map((trackItem, index) => (
                <ContainerAlbumTrack
                  key={trackItem.id}
                  onClick={() =>
                    currentPreviewUrl === trackItem.preview_url &&
                    currentStateMusic === 'playing'
                      ? handlePlayPauseMusic()
                      : handleSetMusic(
                          trackItem.preview_url || '',
                          album.images[0].url,
                          trackItem.name,
                          trackItem.artists,
                          index,
                        )
                  }
                >
                  <div className="hover-music">
                    {currentPreviewUrl === trackItem.preview_url &&
                    currentStateMusic === 'playing' ? (
                      <FaStop color={colors.neutral5Light} />
                    ) : (
                      <FaPlay color={colors.neutral5Light} />
                    )}
                  </div>
                  <div className="container-track">
                    <div className="track-info">
                      <h3 className="track-name">{trackItem.name}</h3>
                      <div className="track-artists">
                        {trackItem.artists.map((artist) => (
                          <Link
                            key={artist.id}
                            to={`/artist/${artist.id}`}
                            className="artist-link"
                            onClick={handlePreventPropagation}
                          >
                            {artist.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="right-container">
                      <span className="track-time">
                        {getMinutesAndSeconds(trackItem.duration_ms)}
                      </span>
                      <div className="container-playlist-options">
                        <TrackOptions track={trackItem} />
                      </div>
                    </div>
                  </div>
                </ContainerAlbumTrack>
              ))}
            </ol>
          </ContainerAlbumTracks>
        </ContainerAlbum>
      ) : null}
      <Loading isLoading={isLoading} />
    </>
  );
}
