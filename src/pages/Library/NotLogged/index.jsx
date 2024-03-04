import { Link } from 'react-router-dom';
import { ContainerNotLogged } from './styled';

export default function NotLogged() {
  return (
    <ContainerNotLogged>
      <h1>Faça seu cadastro ou login e começe a curtir músicas</h1>
      <p>Salve suas músicas favoritas e curta elas da melhor forma!</p>
      <Link className="redirect-link" to="/account">
        Cadastre-se ou Faça o login
      </Link>
    </ContainerNotLogged>
  );
}
