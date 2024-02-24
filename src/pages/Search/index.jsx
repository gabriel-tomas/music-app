import HeaderSearchBar from './HeaderSearch';
import { useSearchParams } from 'react-router-dom';

import SearchResult from './SearchResult';
import Categories from '../../components/Categories';

import { ContainerSearch } from './styled';

export default function Header() {
  const [qs] = useSearchParams();
  const searchString = qs.get('q');

  return (
    <ContainerSearch>
      <HeaderSearchBar />
      {!searchString && <Categories />}
      {searchString && <SearchResult searchString={searchString} />}
    </ContainerSearch>
  );
}
