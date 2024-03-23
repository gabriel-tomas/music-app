import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import getArtist from '../../services/spotifyRequest/artists/artist';
import getArtistTopTracks from '../../services/spotifyRequest/artists/artistTopTracks';
import getArtistAlbums from '../../services/spotifyRequest/artists/artistAlbums';

import Loading from '../../components/Loading';
import Tracks from '../../components/Tracks';
import Albums from '../../components/Albums';

import {
  ContainerArtist,
  ContainerArtistInfo,
  ContainerArtistContent,
  ContainerArtistContentItem,
} from './styled';

import colors from '../../config/colors';

export default function Artist() {
  const [isLoading, setIsLoading] = useState(false);
  const { id: artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);
  const [artistAlbumsAppearsOn, setArtistAlbumsAppearsOn] = useState(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    setArtist(null);
    setArtistTopTracks(null);
    setArtistAlbums(null);
    setArtistAlbumsAppearsOn(null);
    setImgsLoaded(false);
  }, [artistId]);

  useEffect(() => {
    const requestArtistItems = async () => {
      setIsLoading(true);
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
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast.error(
          'Ocorreu um erro ao tentar acessar as informações do artista',
        );
      }
    };
    requestArtistItems();
  }, [artistId]);

  useEffect(() => {
    if (!artist) return;

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
        if (get(artist, 'images', []).length === 0) return [];
        return [loadImage(getAlbumImageUrl(artist.images, 320))];
      })(),
    )
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error('Ocorreu um erro ao tentar carregar a imagem do artista'),
      );
  }, [artist]);

  return (
    <>
      {artist && artistTopTracks && artistAlbums && artistAlbumsAppearsOn && (
        <ContainerArtist>
          <ContainerArtistInfo>
            <h1 className="title-type">Artista</h1>
            <div className="container-img">
              {imgsLoaded && get(artist, 'images', []).length !== 0 ? (
                <img
                  src={getAlbumImageUrl(artist.images, 320)}
                  alt={artist.name}
                />
              ) : get(artist, 'images', []).length === 0 ? (
                <FaUserAlt color={colors.secondary['950']} />
              ) : (
                <FaUserAlt color={colors.neutral7} />
              )}
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
      )}
      <Loading isLoading={isLoading} />
    </>
  );
}
