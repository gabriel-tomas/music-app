import base, { requestSpotifyToken } from '../index';

export default async () => {
  const token = await requestSpotifyToken();
  const request = await base.get('/browse/new-releases?limit=5', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.data.albums.items;
};
