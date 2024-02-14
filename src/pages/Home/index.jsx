import { ContainerHome } from './styled';
import Albums from '../../components/Albums';

export default function Home() {
  return (
    <ContainerHome>
      <h1>Novos lançamentos</h1>
      <Albums />
    </ContainerHome>
  );
}
