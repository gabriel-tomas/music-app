import HeaderSearchBar from './HeaderSearch';
import { useSearchParams } from 'react-router-dom';

import SearchResult from './SearchResult';

import { ContainerSearch } from './styled';

export default function Header() {
  const [qs] = useSearchParams();
  const searchString = qs.get('q');

  return (
    <ContainerSearch>
      <HeaderSearchBar />
      {searchString && <SearchResult searchString={searchString} />}
    </ContainerSearch>
  );
}
