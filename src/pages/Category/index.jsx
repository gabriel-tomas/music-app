import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import categoryPlaylist from '../../services/spotifyRequest/playlists/categoryPlaylist';

import Playlists from '../../components/Playlists';

import { ContainerCategory, ContainerPlaylists } from './styled';

export default function Category() {
  const { id: albumId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const requestCategoryItems = async () => {
      try {
        const response = await categoryPlaylist(albumId, 36);
        setCategory(response);
      } catch (err) {
        toast.error('Ocorreu um erro ao tentar carregar os dados do álbum');
        setCategory(null);
      }
    };
    requestCategoryItems();
  }, [albumId]);

  return (
    category && (
      <ContainerCategory>
        <div className="container-top">
          <h1>{category.message}</h1>
        </div>
        <ContainerPlaylists>
          <Playlists
            playlists={category.playlists.items}
            showDescription={true}
            showOwner={false}
          />
        </ContainerPlaylists>
      </ContainerCategory>
    )
  );
}
