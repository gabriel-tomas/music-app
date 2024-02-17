import { FaSearch } from 'react-icons/fa';
import colors from '../../../config/colors';

import ContainerSearch from './styled';

export default function Search() {
  return (
    <ContainerSearch>
      <button className="search-btn">
        <FaSearch className="search-icon" color={colors.neutral4} />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Pesquise por música, artista, categoria, álbum..."
      />
    </ContainerSearch>
  );
}
