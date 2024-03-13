import { Link } from 'react-router-dom';

import { Container404 } from './styled';

export default function Page404() {
  return (
    <Container404>
      <h1>Erro 404</h1>
      <p>Essa página não existe</p>
      <Link className="redirect-link" to="/">
        Voltar à página inicial
      </Link>
    </Container404>
  );
}
