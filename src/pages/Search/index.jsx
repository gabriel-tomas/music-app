import HeaderSearchBar from './HeaderSearch';
import { useSearchParams } from 'react-router-dom';

import SearchResult from './SearchResult';
import Categories from '../../components/Categories';

import { ContainerSearch, ContainerDefaultSearchContent } from './styled';

export default function Header() {
  const [qs] = useSearchParams();
  const searchString = qs.get('q');

  return (
    <ContainerSearch>
      <HeaderSearchBar />
      {!searchString && (
        <ContainerDefaultSearchContent>
          <h1 className="title">Navegue pelas categorias</h1>
          <Categories slowAppearanceAnimation />
        </ContainerDefaultSearchContent>
      )}
      {searchString && (
        <SearchResult searchString={searchString} slowAppearanceAnimation />
      )}
    </ContainerSearch>
  );
}
