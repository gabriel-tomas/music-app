import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import searchForItem from '../../services/spotifyRequest/search/searchForItem';

import Albums from '../../components/Albums';

import { ContainerSearchResults, ContainerSearchResult } from './styled';

export default function Search() {
  const [qs] = useSearchParams();
  const [searchItems, setSearchItems] = useState({});
  const searchString = qs.get('q');
  const searchResultsName = {
    albums: 'Álbums',
    artists: 'Artistas',
    tracks: 'Músicas',
    playlists: 'Playlists',
  };

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

  return Object.keys(searchItems).length !== 0 ? (
    <ContainerSearchResults>
      {Object.keys(searchItems).map((key) => (
        <ContainerSearchResult key={key}>
          {key === 'albums' ? (
            <>
              <h2>{searchResultsName[key]}</h2>
              <Albums albums={searchItems[key].items} />
            </>
          ) : null}
        </ContainerSearchResult>
      ))}
    </ContainerSearchResults>
  ) : null;
}
