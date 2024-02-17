import base, { requestSpotifyToken } from '../index';

export default async (searchString) => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    `/search?q=${searchString}&type=album,artist,playlist,track`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(request.data);
  return request.data;
};
