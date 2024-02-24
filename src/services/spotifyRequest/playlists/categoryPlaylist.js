import base, { requestSpotifyToken } from '../index';

export default async (categoryId, limit = 20) => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    `/browse/categories/${categoryId}/playlists?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return request.data;
};
