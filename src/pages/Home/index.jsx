import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import getAlbumsReleases from '../../services/spotifyRequest/albums/albumsRelease';
import getFeaturedPlaylists from '../../services/spotifyRequest/playlists/getFeaturedPlaylists';

import { ContainerHome } from './styled';
import Loading from '../../components/Loading';
import Albums from '../../components/Albums';
import Playlists from '../../components/Playlists';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      try {
        await homeAlbumsReleases();
        await homeFeaturedPlaylists(5);
        setContentPrepared(true);
        setIsLoading(false);
      } catch (err) {
        setContentPrepared(false);
        setIsLoading(false);
        toast.error('Ocorreu um erro ao tentar carregar os dados');
      }
    };

    requestHomeContent();
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
