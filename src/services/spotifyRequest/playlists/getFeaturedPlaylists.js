import base, { requestSpotifyToken } from '../index';

export default async (limit, locale = 'pt_BR') => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    `/browse/featured-playlists?locale=${locale}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(request.data);
  return request.data;
};
