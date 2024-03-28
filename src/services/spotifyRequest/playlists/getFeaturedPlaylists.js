import base, { requestSpotifyToken } from '../index';

export default async (limit = 5, locale = 'pt_BR') => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    `/browse/featured-playlists?locale=${locale}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return request.data;
};
