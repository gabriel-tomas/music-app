import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Wrapper, { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado,
  );
  const iconSize = 17;

  return (
    <Wrapper>
      <h1>Logo</h1>
      <Nav>
        <Link to="/">
          <FaHome size={iconSize} />
          <span>Home</span>
        </Link>
        <p>{botaoClicado ? 'Clicado' : 'Não clicado'}</p>
      </Nav>
    </Wrapper>
  );
}
