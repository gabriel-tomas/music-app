import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FaMusic } from 'react-icons/fa';

import * as dataSaverActions from '../../store/modules/dataSaver/actions';

import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import severalCategories from '../../services/spotifyRequest/categories/severalCategories';

import Loading from '../../components/Loading';

import colors from '../../config/colors';

import {
  ContainerCategories,
  ContainerCategoryItems,
  ContainerCategoryItem,
} from './styled';

const CategoryImage = ({ categoryIcons, categoryName }) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);

        loadImg.onerror = (err) => reject(err);
      });
    };

    loadImage(getAlbumImageUrl(categoryIcons, 274))
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error(
          'Ocorreu um erro ao tentar carregar a imagem das categorias',
        ),
      );
  }, []);

  return imgsLoaded ? (
    <img src={getAlbumImageUrl(categoryIcons, 274)} alt={categoryName} />
  ) : (
    <FaMusic color={colors.neutral7} />
  );
};

CategoryImage.propTypes = {
  categoryIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default function Categories({ slowAppearanceAnimation }) {
  const dispatch = useDispatch();

  const categoriesDataSaved = useSelector(
    (state) => state.dataSaver.global.Categories,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const tryGetCategoriesSavedData = () => {
      let requestCategories = true;
      if (categoriesDataSaved.length !== 0) {
        setCategories(categoriesDataSaved);
        requestCategories = false;
      }
      return requestCategories;
    };

    const requestSeveralCategories = async () => {
      setIsLoading(true);
      try {
        const response = await severalCategories(50);
        dispatch(
          dataSaverActions.setDataSave({
            type: 'categories',
            content: response,
          }),
        );
        setCategories(response);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        dispatch(
          dataSaverActions.setDataSave({
            type: 'categories',
            content: [],
          }),
        );
        toast.error('Ocorreu um erro ao tentar carregar as categorias');
        setCategories(null);
      }
    };

    tryGetCategoriesSavedData() && requestSeveralCategories();
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
                      <CategoryImage
                        categoryIcons={category.icons}
                        categoryName={category.name}
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
