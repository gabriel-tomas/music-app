import base, { requestSpotifyToken } from '../index';

export default async (limit = 5) => {
  const token = await requestSpotifyToken();
  const request = await base.get(`/browse/new-releases?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.data.albums.items;
};
