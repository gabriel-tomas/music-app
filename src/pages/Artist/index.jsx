import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as loadingActions from '../../store/modules/loading/actions';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import getArtist from '../../services/spotifyRequest/artists/artist';
import getArtistTopTracks from '../../services/spotifyRequest/artists/artistTopTracks';
import getArtistAlbums from '../../services/spotifyRequest/artists/artistAlbums';

import Tracks from '../../components/Tracks';
import Albums from '../../components/Albums';

import {
  ContainerArtist,
  ContainerArtistInfo,
  ContainerArtistContent,
  ContainerArtistContentItem,
} from './styled';

export default function Artist() {
  const dispatch = useDispatch();

  const { id: artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);
  const [artistAlbumsAppearsOn, setArtistAlbumsAppearsOn] = useState(null);

  useEffect(() => {
    const requestArtistItems = async () => {
      dispatch(loadingActions.isLoading());
      try {
        const responseArtist = await getArtist(artistId);
        const responseArtistTopTracks = await getArtistTopTracks(artistId);
        const responseArtistAlbums = await getArtistAlbums(
          artistId,
          8,
          'album,single',
        );
        const responseArtistAlbumsAppearsOn = await getArtistAlbums(
          artistId,
          8,
          'appears_on',
        );
        setArtist(responseArtist);
        setArtistTopTracks(responseArtistTopTracks);
        setArtistAlbums(responseArtistAlbums);
        setArtistAlbumsAppearsOn(responseArtistAlbumsAppearsOn);
        dispatch(loadingActions.isNotLoading());
      } catch (err) {
        dispatch(loadingActions.isNotLoading());
        toast.error(
          'Ocorreu um erro ao tentar acessar as informações do artista',
        );
      }
    };
    requestArtistItems();
  }, [artistId]);

  return (
    artist &&
    artistTopTracks &&
    artistAlbums &&
    artistAlbumsAppearsOn && (
      <ContainerArtist>
        <ContainerArtistInfo>
          <h1 className="title-type">Artista</h1>
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
        <ContainerArtistContent>
          {artistTopTracks.length !== 0 && (
            <ContainerArtistContentItem>
              <h3 className="title-content-item">Músicas populares</h3>
              <Tracks tracks={artistTopTracks.tracks} numbered />
            </ContainerArtistContentItem>
          )}
          {artistAlbums.items.length !== 0 && (
            <ContainerArtistContentItem>
              <h3 className="title-content-item">Discografia</h3>
              <Albums albums={artistAlbums.items} />
            </ContainerArtistContentItem>
          )}
          {artistAlbumsAppearsOn.items.length !== 0 && (
            <ContainerArtistContentItem>
              <h3 className="title-content-item">Aparece em</h3>
              <Albums albums={artistAlbumsAppearsOn.items} />
            </ContainerArtistContentItem>
          )}
        </ContainerArtistContent>
      </ContainerArtist>
    )
  );
}
