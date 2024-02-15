import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import getAlbum from '../../services/spotifyRequest/albums/album';
import getAlbumTracks from '../../services/spotifyRequest/albums/albumTracks';

import {
  ContainerAlbum,
  ContainerAlbumInfo,
  ContainerAlbumTracks,
} from './styled';

export default function Album() {
  const { state } = useLocation();
  const { id: albumId } = useParams();
  const [album, setAlbum] = useState(false);

  useEffect(() => {
    const requestAlbum = async () => {
      if (state) {
        var albumData = state;
      } else {
        const response = await getAlbum(albumId);
        albumData = response;
      }
      const tracksRequest = await getAlbumTracks(albumId);
      albumData.tracks = tracksRequest;
      setAlbum({ ...albumData });
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
              <Link key={value} to={`/artist/${value.id}`}>
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
        
      </ContainerAlbumTracks>
    </ContainerAlbum>
  ) : null;
}
