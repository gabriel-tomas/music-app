import { useParams } from 'react-router-dom';

export default function LibraryPlaylist() {
  const params = useParams();
  console.log(params);
  return <h1>Playlist especifica</h1>;
}
