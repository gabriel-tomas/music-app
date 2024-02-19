import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import getAlbum from '../../services/spotifyRequest/albums/album';
import getAlbumTracks from '../../services/spotifyRequest/albums/albumTracks';

import * as currentMusicActions from '../../store/modules/currentMusic/actions';
import * as musicPlayerActions from '../../store/modules/musicPlayer/actions';

import getMinutesAndSeconds from '../../utils/musicUtils/getMinutesAndSeconds';

import {
  ContainerAlbum,
  ContainerAlbumInfo,
  ContainerAlbumTracks,
  ContainerAlbumTrack,
} from './styled';

export default function Album() {
  const dispatch = useDispatch();

  const { state } = useLocation();
  const { id: albumId } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const requestAlbum = async () => {
      if (!albumId) return;
      if (state) {
        const tracksRequest = await getAlbumTracks(albumId);
        var albumData = { ...state, tracks: tracksRequest };
      } else {
        const response = await getAlbum(albumId);
        albumData = { ...response };
      }
      setAlbum(albumData);
    };

    requestAlbum();
  }, [albumId, state]);

  const handleSetMusic = (previewUrl) => {
    console.log(previewUrl);
    dispatch(currentMusicActions.setCurrentMusic({ previewUrl }));
    dispatch(musicPlayerActions.setActualMusicState('playing'));
  };

  return album ? (
    <ContainerAlbum>
      <ContainerAlbumInfo>
        <h1>{album.album_type === 'single' ? 'Single' : 'Álbum'}</h1>
        <div className="bottom-content">
          <div className="container-img">
            <img src={album.images[0].url} alt={album.name} />
          </div>
          <h2>{album.name}</h2>
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
          {album.tracks.items.map((trackItem) => (
            <ContainerAlbumTrack key={trackItem.id}>
              <button
                className="container-track"
                onClick={() => handleSetMusic(trackItem.preview_url)}
              >
                <div className="track-info">
                  <h3 className="track-name">{trackItem.name}</h3>
                  {console.log(trackItem)}
                  <div className="track-artists">
                    {trackItem.artists.map((artist) => (
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
                <span className="track-time">
                  {getMinutesAndSeconds(trackItem.duration_ms)}
                </span>
              </button>
            </ContainerAlbumTrack>
          ))}
        </ol>
      </ContainerAlbumTracks>
    </ContainerAlbum>
  ) : null;
}
