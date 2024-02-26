import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as loadingActions from '../../../store/modules/loading/actions';

import searchForItem from '../../../services/spotifyRequest/search/searchForItem';

import Albums from '../../../components/Albums';
import Tracks from '../../../components/Tracks';
import Artists from '../../../components/Artists';
import Playlists from '../../../components/Playlists';

import { ContainerSearchResults, ContainerSearchResult } from './styled';
import { toast } from 'react-toastify';

export default function Search({ searchString, slowAppearanceAnimation }) {
  const dispatch = useDispatch();

  const [searchItems, setSearchItems] = useState({});
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
    setSearchItems({});
    const requestSearchItems = async () => {
      dispatch(loadingActions.isLoading());
      try {
        let items;
        if (typeResult === typesResult.all) {
          items = await searchForItem(searchString, undefined, 8);
        } else if (typeResult === typesResult.albums) {
          items = await searchForItem(searchString, undefined, 50);
          //todo: resultado para albums
        }
        setSearchItems(items);
        dispatch(loadingActions.isNotLoading());
      } catch (err) {
        setSearchItems({});
        dispatch(loadingActions.isNotLoading());
        toast.error('Ocorreu um erro ao tentar buscar');
      }
    };
    requestSearchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, typeResult]);

  return Object.keys(searchItems).length !== 0 ? (
    <ContainerSearchResults
      className={`${slowAppearanceAnimation && 'slow-appearance-animation'}`}
    >
      {typeResult === typesResult.all &&
        Object.keys(searchItems).map((key) => (
          <ContainerSearchResult key={key}>
            {key === 'albums' && (
              <>
                <h2 className="title-item-section">{searchResultsName[key]}</h2>
                <Albums albums={searchItems[key].items} />
              </>
            )}
            {key === 'tracks' && (
              <>
                <h2 className="title-item-section">{searchResultsName[key]}</h2>
                <Tracks tracks={searchItems[key].items} />
              </>
            )}
            {key === 'artists' && (
              <>
                <h2 className="title-item-section">{searchResultsName[key]}</h2>
                <Artists artists={searchItems[key].items} />
              </>
            )}
            {key === 'playlists' && (
              <>
                <h2 className="title-item-section">{searchResultsName[key]}</h2>
                <Playlists playlists={searchItems[key].items} />
              </>
            )}
          </ContainerSearchResult>
        ))}
    </ContainerSearchResults>
  ) : null;
}

Search.defaultProps = {
  slowAppearanceAnimation: false,
};

Search.propTypes = {
  searchString: PropTypes.string.isRequired,
  slowAppearanceAnimation: PropTypes.bool,
};
