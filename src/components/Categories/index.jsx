import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import severalCategories from '../../services/spotifyRequest/categories/severalCategories';

import {
  ContainerCategories,
  ContainerCategoryItems,
  ContainerCategoryItem,
} from './styled';

export default function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const requestSeveralCategories = async () => {
      try {
        const response = await severalCategories(50);
        console.log(response);
        setCategories(response);
      } catch (err) {
        toast.error('Ocorreu um erro ao tentar carregar as categorias');
        setCategories(null);
      }
    };
    requestSeveralCategories();
  }, []);

  return (
    categories && (
      <ContainerCategories>
        <h1 className="title">Categorias</h1>
        <ContainerCategoryItems>
          {categories.map((category) => (
            <ContainerCategoryItem
              key={category.id}
              to={`/category/${category.id}`}
              className="category-link"
            >
              <div className="container-img">
                <img
                  src={getAlbumImageUrl(category.icons, 300)}
                  alt={category.name}
                />
              </div>
              <div className="container-bottom">
                <span className="category-title">{category.name}</span>
              </div>
            </ContainerCategoryItem>
          ))}
        </ContainerCategoryItems>
      </ContainerCategories>
    )
  );
}
