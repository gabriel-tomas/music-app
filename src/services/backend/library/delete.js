import backendApi from '../index';

export const deletePlaylist = async (playlistName) => {
  const request = await backendApi.post('/playlists/delete', {
    playlistName,
  });
  return request.data;
};
