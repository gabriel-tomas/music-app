import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import * as loadingActions from '../../store/modules/loading/actions';

import categoryPlaylist from '../../services/spotifyRequest/playlists/categoryPlaylist';

import Playlists from '../../components/Playlists';

import { ContainerCategory, ContainerPlaylists } from './styled';

export default function Category() {
  const dispatch = useDispatch();

  const { id: albumId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const requestCategoryItems = async () => {
      dispatch(loadingActions.isLoading());
      try {
        const response = await categoryPlaylist(albumId, 36);
        setCategory(response);
        dispatch(loadingActions.isNotLoading());
      } catch (err) {
        dispatch(loadingActions.isNotLoading());
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
