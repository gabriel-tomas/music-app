import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import getAlbumsReleases from '../../services/spotifyRequest/albums/albumsRelease';
import getFeaturedPlaylists from '../../services/spotifyRequest/playlists/getFeaturedPlaylists';

import { ContainerHome } from './styled';
import Albums from '../../components/Albums';
import Playlists from '../../components/Playlists';

export default function Home() {
  const [albums, setAlbums] = useState(null);
  const [playlists, setPlaylists] = useState(null);

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
      try {
        await homeAlbumsReleases();
        await homeFeaturedPlaylists(5);
      } catch (err) {
        toast.error('Ocorreu um erro ao tentar carregar os dados');
      }
    };

    requestHomeContent();
  }, []);

  return (
    <ContainerHome>
      <section>
        <h1>Novos lançamentos</h1>
        {albums ? <Albums albums={albums} /> : null}
      </section>
      {playlists ? (
        <section>
          <h1>{playlists.message}</h1>
          <Playlists playlists={playlists.playlists.items} />
        </section>
      ) : null}
    </ContainerHome>
  );
}
