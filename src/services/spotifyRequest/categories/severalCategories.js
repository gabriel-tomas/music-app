import base, { requestSpotifyToken } from '../index';

export default async (limit = 20, locale = 'pt_BR') => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    `/browse/categories?locale=${locale}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return request.data.categories.items;
};
