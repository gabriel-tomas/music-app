import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import searchForItem from '../../services/spotifyRequest/search/searchForItem';

export default function Search() {
  const [qs] = useSearchParams();
  const [searchItems, setSearchItems] = useState({});
  const searchString = qs.get('q');

  useEffect(() => {
    if (!searchString) return;
    const requestSearchItems = async () => {
      try {
        const items = await searchForItem(searchString);
        setSearchItems(items);
      } catch (err) {
        setSearchItems({});
      }
    };
    requestSearchItems();
  }, [searchString]);

  return Object.keys(searchItems).length !== 0 ? <h1>Search</h1> : null;
}
