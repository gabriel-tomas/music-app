import base, { requestSpotifyToken } from '../index';

export default async (id, market = 'BR') => {
  const token = await requestSpotifyToken();
  const request = await base.get(`/artists/${id}/top-tracks?market=${market}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.data;
};
