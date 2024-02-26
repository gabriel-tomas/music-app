import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import getAlbumsReleases from '../../services/spotifyRequest/albums/albumsRelease';
import getFeaturedPlaylists from '../../services/spotifyRequest/playlists/getFeaturedPlaylists';

import * as dataSaverActions from '../../store/modules/dataSaver/actions';

import { ContainerHome } from './styled';
import Loading from '../../components/Loading';
import Albums from '../../components/Albums';
import Playlists from '../../components/Playlists';

export default function Home() {
  const dispatch = useDispatch();

  const homeDataSaved = useSelector((state) => state.dataSaver.pages.Home);

  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [contentPrepared, setContentPrepared] = useState(false);

  useEffect(() => {
    const tryGetHomeSavedData = () => {
      let requestHomeItems = true;
      if (
        homeDataSaved.albums.length !== 0 &&
        homeDataSaved.playlists.length !== 0
      ) {
        setAlbums(homeDataSaved.albums);
        setPlaylists(homeDataSaved.playlists);
        setContentPrepared(true);
        requestHomeItems = false;
      }
      return requestHomeItems;
    };

    const homeAlbumsReleases = async () => {
      const response = await getAlbumsReleases();
      setAlbums(response);
      return response;
    };

    const homeFeaturedPlaylists = async (limit) => {
      const response = await getFeaturedPlaylists(limit);
      setPlaylists(response);
      return response;
    };

    const requestHomeContent = async () => {
      setIsLoading(true);
      try {
        const albumsResponse = await homeAlbumsReleases();
        const playlistsResponse = await homeFeaturedPlaylists(5);
        dispatch(
          dataSaverActions.setDataSave({
            type: 'home',
            content: {
              albums: albumsResponse,
              playlists: playlistsResponse,
            },
          }),
        );
        setContentPrepared(true);
        setIsLoading(false);
      } catch (err) {
        setContentPrepared(false);
        setIsLoading(false);
        dispatch(
          dataSaverActions.setDataSave({
            type: 'home',
            content: {
              albums: [],
              playlists: [],
            },
          }),
        );
        toast.error('Ocorreu um erro ao tentar carregar os dados');
      }
    };

    tryGetHomeSavedData() && requestHomeContent();
  }, []);

  return (
    <>
      {contentPrepared && (
        <ContainerHome>
          {albums ? (
            <section>
              <h1>Novos lançamentos</h1>
              <Albums albums={albums} slowAppearanceAnimation />
            </section>
          ) : null}
          {playlists ? (
            <section>
              <h1>{playlists.message}</h1>
              <Playlists
                playlists={playlists.playlists.items}
                slowAppearanceAnimation
              />
            </section>
          ) : null}
        </ContainerHome>
      )}
      <Loading isLoading={isLoading} />
    </>
  );
}
