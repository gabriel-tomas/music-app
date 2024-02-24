import { useParams } from 'react-router-dom';

export default function Category() {
  const { id: albumId } = useParams();

  console.log(albumId);

  return <h1>Categoria</h1>;
}
