import Wrapper from './styled';
import { FaSearch } from 'react-icons/fa';
import colors from '../../config/colors';

export default function Header() {
  return (
    <Wrapper>
      <div className="container-search">
        <button className="search-btn">
          <FaSearch className="search-icon" color={colors.neutral4} />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Pesquise por música, artista, categoria, álbum..."
        />
      </div>
    </Wrapper>
  );
}
