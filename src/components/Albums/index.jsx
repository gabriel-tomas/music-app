import getAlbumsReleases from '../../services/spotifyRequest/albums/albumsRelease';

import { useEffect, useState } from 'react';

import { ContainerAlbums, ContainerAlbumItem } from './styled';

export default function Albums() {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    const homeAlbumsReleases = async () => {
      const response = await getAlbumsReleases();
      console.log(response);
      setAlbums(response);
    };
    homeAlbumsReleases();
  }, []);

  return (
    <ContainerAlbums>
      {albums
        ? albums.map((album) => {
            return (
              <ContainerAlbumItem key={album.id} to={album.href}>
                <div>
                  <div className="container-img">
                    <img src={album.images[2].url} alt={album.name} />
                  </div>
                  <div className="secondary-content">
                    <h2>{album.name}</h2>
                    <div className="artists-box">
                      {album.artists.map((artist) => {
                        return <span key={artist.id}>{artist.name}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </ContainerAlbumItem>
            );
          })
        : null}
    </ContainerAlbums>
  );
}
