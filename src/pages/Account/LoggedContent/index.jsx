import { ContainerLoggedContent } from './styled';

export default function NotLogged() {
  return (
    <ContainerLoggedContent>
      <button className="logout-button">Sair da conta</button>
    </ContainerLoggedContent>
  );
}
