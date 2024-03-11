import backendApi from '../index';

export const getPlaylist = async (playlistName) => {
  const request = await backendApi.get(`/playlists/${playlistName}`);
  return request.data;
};
