import backendApi from '../index';

export const deletePlaylist = async (playlistName) => {
  const request = await backendApi.delete('/playlists/delete', {
    data: {
      playlistName,
    },
  });
  return request.data;
};
