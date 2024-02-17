import getAlbumsReleases from '../../services/spotifyRequest/albums/albumsRelease';

import { useState, useEffect } from 'react';
import { ContainerHome } from './styled';
import Albums from '../../components/Albums';

export default function Home() {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const homeAlbumsReleases = async () => {
      const response = await getAlbumsReleases();
      setAlbums(response);
    };
    homeAlbumsReleases();
  }, []);

  return (
    <ContainerHome>
      <h1>Novos lançamentos</h1>
      {albums ? <Albums albums={albums} /> : null}
    </ContainerHome>
  );
}
