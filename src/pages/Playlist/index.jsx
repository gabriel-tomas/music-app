import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import { FaUserAlt } from 'react-icons/fa';

import colors from '../../config/colors';

import getOnlyTrackFromTracks from '../../utils/musicUtils/getOnlyTrackFromTracks';
import checkForFalsyTracks from '../../utils/musicUtils/checkForFalsyTracks';
import getAlbumImageUrl from '../../utils/musicUtils/getAlbumImageUrl';

import getPlaylist from '../../services/spotifyRequest/playlists/playlist';

import Loading from '../../components/Loading';
import Tracks from '../../components/Tracks';

import {
  ContainerPlaylist,
  ContainerPlaylistInfo,
  ContainerPlaylistTracks,
} from './styled';

export default function Playlist() {
  const { id: playlistId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const requestPlaylist = async () => {
      if (!playlistId) return;
      setIsLoading(true);
      try {
        const response = await getPlaylist(playlistId);
        const playlistData = { ...response };
        setPlaylist(playlistData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast.error('Ocorreu um erro ao tentar acessar a playlist');
      }
    };
    requestPlaylist();
  }, [playlistId]);

  useEffect(() => {
    if (!playlist) return;

    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      (() => {
        if (get(playlist, 'images', []).length === 0) return [];
        return [loadImage(getAlbumImageUrl(playlist.images, 640))];
      })(),
    )
      .then(() => setImgsLoaded(true))
      .catch(() =>
        toast.error('Ocorreu um erro ao tentar carregar a imagem da playlist'),
      );
  }, [playlist]);

  return (
    <>
      {playlist ? (
        <ContainerPlaylist>
          <ContainerPlaylistInfo>
            <h1 className="playlist-type">Playlist</h1>
            <div className="bottom-content">
              <div className="container-img">
                {imgsLoaded && get(playlist, 'images', []).length !== 0 ? (
                  <img
                    src={getAlbumImageUrl(playlist.images, 640)}
                    alt={playlist.name}
                  />
                ) : get(playlist, 'images', []).length === 0 ? (
                  <FaUserAlt color={colors.secondary['950']} />
                ) : (
                  <FaUserAlt color={colors.neutral7} />
                )}
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
              tracks={checkForFalsyTracks(
                getOnlyTrackFromTracks(get(playlist, 'tracks.items', [])),
              )}
              numbered
            />
          </ContainerPlaylistTracks>
        </ContainerPlaylist>
      ) : null}
      <Loading isLoading={isLoading} />
    </>
  );
}
