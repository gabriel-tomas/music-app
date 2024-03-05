import backendApi from '../index';

export const createPlaylist = async (playlistName) => {
  const request = await backendApi.post('/playlists/create', {
    playlistName,
  });
  return request.data;
};
