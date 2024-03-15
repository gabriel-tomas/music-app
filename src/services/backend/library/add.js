import backendApi from '../index';

export const addToPlaylist = async (track, playlistName) => {
  const request = await backendApi.patch('/playlists/add', {
    track,
    playlistName,
  });
  return request.data;
};
