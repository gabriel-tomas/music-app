import backendApi from '../index';

export const getPlaylists = async () => {
  const request = await backendApi.get('/playlists');
  return request.data;
};
