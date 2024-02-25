import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import getOnlyTrackFromTracks from '../../utils/musicUtils/getOnlyTrackFromTracks';

import getPlaylist from '../../services/spotifyRequest/playlists/playlist';

import Tracks from '../../components/Tracks';

import {
  ContainerPlaylist,
  ContainerPlaylistInfo,
  ContainerPlaylistTracks,
} from './styled';

export default function Playlist() {
  const { id: playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const requestPlaylist = async () => {
      if (!playlistId) return;
      try {
        const response = await getPlaylist(playlistId);
        const playlistData = { ...response };
        setPlaylist(playlistData);
      } catch (err) {
        toast.error('Ocorreu um erro ao tentar acessar a playlist');
      }
    };
    requestPlaylist();
  }, [playlistId]);

  return playlist ? (
    <ContainerPlaylist>
      <ContainerPlaylistInfo>
        <h1 className="playlist-type">Playlist</h1>
        <div className="bottom-content">
          <div className="container-img">
            <img src={playlist.images[0].url} alt={playlist.name} />
          </div>
          <div className="container-playlist-info-top">
            <h2 className="playlist-name">{playlist.name}</h2>
            <p>{playlist.description}</p>
          </div>
          <div className="container-playlist-info-bottom">
            <div className="owner-box">
              <span className="owner">{playlist.owner.display_name}</span>
            </div>
            <div>{playlist.tracks.total} música(as)</div>
          </div>
        </div>
      </ContainerPlaylistInfo>
      <ContainerPlaylistTracks className="container-playlist-tracks">
        <Tracks
          tracks={getOnlyTrackFromTracks(playlist.tracks.items)}
          numbered
        />
      </ContainerPlaylistTracks>
    </ContainerPlaylist>
  ) : null;
}
