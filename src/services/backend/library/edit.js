import backendApi from '../index';

export const editPlaylist = async (playlistName, newPlaylistName) => {
  const request = await backendApi.patch('/playlists/edit', {
    playlistName,
    newPlaylistName,
  });
  return request.data;
};
