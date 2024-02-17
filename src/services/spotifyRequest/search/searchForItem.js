import base, { requestSpotifyToken } from '../index';

export default async (searchString, type = 'album,artist,playlist,track') => {
  const token = await requestSpotifyToken();
  const request = await base.get(`/search?q=${searchString}&type=${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.data;
};
