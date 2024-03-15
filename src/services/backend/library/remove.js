import backendApi from '../index';

export const removeTrackFromPlaylist = async (trackId, playlistName) => {
  const request = await backendApi.patch('/playlists/remove', {
    trackId,
    playlistName,
  });
  return request.data;
};
