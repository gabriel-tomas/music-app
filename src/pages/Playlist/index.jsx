import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Playlist() {
  const { id: playlistId } = useParams();

  useEffect(() => {
    
  }, [playlistId]);

  return <h1>Playlist</h1>;
}
