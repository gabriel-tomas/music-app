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
  const typesResult = {
    all: 'album,artist,playlist,track',
    albums: 'albums',
    artists: 'artists',
    tracks: 'tracks',
    playlists: 'playlists',
  };
  const [typeResult, setTypeResult] = useState(typesResult.all);

  useEffect(() => {
    if (!searchString) return;
    const requestSearchItems = async () => {
      try {
        let items;
        if (typeResult === typesResult.all) {
          items = await searchForItem(searchString, undefined, 8);
        } else if (typeResult === typesResult.albums) {
          items = await searchForItem(searchString, undefined, 50);
          //todo: resultado para albums
        }
        setSearchItems(items);
      } catch (err) {
        setSearchItems({});
      }
    };
    requestSearchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, typeResult]);

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
