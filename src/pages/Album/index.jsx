import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import getAlbum from '../../services/spotifyRequest/albums/album';
import getAlbumTracks from '../../services/spotifyRequest/albums/albumTracks';

import getMinutesAndSeconds from '../../utils/musicUtils/getMinutesAndSeconds';

import {
  ContainerAlbum,
  ContainerAlbumInfo,
  ContainerAlbumTracks,
  ContainerAlbumTrack,
} from './styled';

export default function Album() {
  const { state } = useLocation();
  const { id: albumId } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const requestAlbum = async () => {
      if (!albumId) return;
      if (state) {
        const tracksRequest = await getAlbumTracks(albumId);
        var albumData = { ...state, tracks: tracksRequest };
        console.log('VINDO DO STATE: ' + albumData);
      } else {
        const response = await getAlbum(albumId);
        albumData = { ...response };
        console.log('VINDO DIRETO: ' + albumData);
      }
      setAlbum(albumData);
    };

    requestAlbum();
  }, [albumId, state]);

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
            {album.artists.map((value) => (
              <Link key={value.id} to={`/artist/${value.id}`}>
                <span>{value.name}</span>
              </Link>
            ))}
            <span>
              {album.release_date.slice(0, album.release_date.indexOf('-'))}
            </span>
            <div>{album.total_tracks} música(as)</div>
          </div>
        </div>
      </ContainerAlbumInfo>
      <ContainerAlbumTracks>
        <ol>
          {album.tracks.items.map((value) => (
            <ContainerAlbumTrack key={value.id}>
              <button className="container-track">
                <h3>{value.name}</h3>
                <span className="track-time">
                  {getMinutesAndSeconds(value.duration_ms)}
                </span>
              </button>
            </ContainerAlbumTrack>
          ))}
        </ol>
      </ContainerAlbumTracks>
    </ContainerAlbum>
  ) : null;
}
