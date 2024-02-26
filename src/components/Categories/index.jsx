import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import severalCategories from '../../services/spotifyRequest/categories/severalCategories';

import Loading from '../../components/Loading';

import {
  ContainerCategories,
  ContainerCategoryItems,
  ContainerCategoryItem,
} from './styled';

export default function Categories({ slowAppearanceAnimation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const requestSeveralCategories = async () => {
      setIsLoading(true);
      try {
        const response = await severalCategories(50);
        setCategories(response);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast.error('Ocorreu um erro ao tentar carregar as categorias');
        setCategories(null);
      }
    };
    requestSeveralCategories();
  }, []);

  return (
    <>
      {categories && (
        <ContainerCategories
          className={`${slowAppearanceAnimation && 'slow-appearance-animation'}`}
        >
          <ContainerCategoryItems>
            {categories.map(
              (category) =>
                category && (
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
                ),
            )}
          </ContainerCategoryItems>
        </ContainerCategories>
      )}
      <Loading isLoading={isLoading} />
    </>
  );
}

Categories.defaultProps = {
  slowAppearanceAnimation: false,
};

Categories.propTypes = {
  slowAppearanceAnimation: PropTypes.bool,
};
