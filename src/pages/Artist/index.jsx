import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import getArtist from '../../services/spotifyRequest/artists/artist';
import getArtistTopTracks from '../../services/spotifyRequest/artists/artistTopTracks';

import Tracks from '../../components/Tracks';

import {
  ContainerArtist,
  ContainerArtistInfo,
  ContainerTopTracks,
} from './styled';

export default function Artist() {
  const { id: artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState(null);

  useEffect(() => {
    const requestArtistItems = async () => {
      try {
        const responseArtist = await getArtist(artistId);
        const responseArtistTopTracks = await getArtistTopTracks(artistId);
        setArtistTopTracks(responseArtistTopTracks);
        setArtist(responseArtist);
      } catch (err) {
        toast.error(
          'Ocorreu um erro ao tentar acessar as informações do artista',
        );
      }
    };
    requestArtistItems();
  }, []);

  return (
    artist && (
      <ContainerArtist>
        <ContainerArtistInfo>
          <h1 className="type">Artista</h1>
          <div className="container-img">
            <img src={getAlbumImageUrl(artist.images, 320)} alt={artist.name} />
          </div>
          <div className="container-bottom-infos">
            <h2 className="artist-name">{artist.name}</h2>
            <div className="secondary-content">
              <span className="followers">
                Seguidores: {artist.followers.total}
              </span>
            </div>
          </div>
        </ContainerArtistInfo>
        <ContainerTopTracks>
          <h3 className="title-top-tracks">Músicas populares</h3>
          <Tracks tracks={artistTopTracks.tracks} numbered />
        </ContainerTopTracks>
      </ContainerArtist>
    )
  );
}
