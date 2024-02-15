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
      const tracksRequest = await getAlbumTracks(albumId);
      if (state) {
        var albumData = state;
      } else {
        const response = await getAlbum(albumId);
        albumData = response;
      }
      albumData = { ...albumData, tracks: tracksRequest };
      setAlbum(albumData);
    };

    requestAlbum();
  }, [albumId, state]);

  console.log(album);

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
              <div className="container-track">
                <h3>{value.name}</h3>
                <span className="track-time">
                  {getMinutesAndSeconds(value.duration_ms)}
                </span>
              </div>
            </ContainerAlbumTrack>
          ))}
        </ol>
      </ContainerAlbumTracks>
    </ContainerAlbum>
  ) : null;
}
