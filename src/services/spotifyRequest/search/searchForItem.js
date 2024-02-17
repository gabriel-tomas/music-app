import base, { requestSpotifyToken } from '../index';

export default async (
  searchString,
  type = 'album,artist,playlist,track',
  limit = 20,
) => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    `/search?q=${searchString}&type=${type}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(request);
  return request.data;
};
