import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import colors from '../../../../config/colors';
import ContainerSearch from './styled';

export default function Search() {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState('');

  const handleSearchKeyEnter = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search?q=${searchString}`);
    }
  };

  const handleSetSearchValue = (e) => {
    const inputValue = e.target.value;

    setSearchString(inputValue);
  };

  return (
    <ContainerSearch>
      <button className="search-btn">
        <FaSearch className="search-icon" color={colors.neutral4} />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Pesquise por música, artista, categoria, álbum..."
        value={searchString}
        onChange={handleSetSearchValue}
        onKeyUp={handleSearchKeyEnter}
      />
    </ContainerSearch>
  );
}
