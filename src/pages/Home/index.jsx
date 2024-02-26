import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import getAlbumsReleases from '../../services/spotifyRequest/albums/albumsRelease';
import getFeaturedPlaylists from '../../services/spotifyRequest/playlists/getFeaturedPlaylists';

import * as loadingActions from '../../store/modules/loading/actions';

import { ContainerHome } from './styled';
import Albums from '../../components/Albums';
import Playlists from '../../components/Playlists';

export default function Home() {
  const dispatch = useDispatch();

  const [albums, setAlbums] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [contentPrepared, setContentPrepared] = useState(false);

  useEffect(() => {
    const homeAlbumsReleases = async () => {
      const response = await getAlbumsReleases();
      setAlbums(response);
    };

    const homeFeaturedPlaylists = async (limit) => {
      const response = await getFeaturedPlaylists(limit);
      setPlaylists(response);
    };

    const requestHomeContent = async () => {
      dispatch(loadingActions.isLoading());
      try {
        await homeAlbumsReleases();
        await homeFeaturedPlaylists(5);
        setContentPrepared(true);
        dispatch(loadingActions.isNotLoading());
      } catch (err) {
        setContentPrepared(false);
        dispatch(loadingActions.isNotLoading());
        toast.error('Ocorreu um erro ao tentar carregar os dados');
      }
    };

    requestHomeContent();
  }, []);

  return (
    contentPrepared && (
      <ContainerHome>
        {albums ? (
          <section>
            <h1>Novos lançamentos</h1>
            <Albums albums={albums} />
          </section>
        ) : null}
        {playlists ? (
          <section>
            <h1>{playlists.message}</h1>
            <Playlists playlists={playlists.playlists.items} />
          </section>
        ) : null}
      </ContainerHome>
    )
  );
}
