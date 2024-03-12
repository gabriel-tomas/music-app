import base, { requestSpotifyToken } from '../index';

export default async (
  id,
  limit = 20,
  includeGroups = 'album,single,appears_on,compilation',
  market = 'BR',
) => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    `/artists/${id}/albums?include_groups=${includeGroups}&market=${market}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return request.data;
};
