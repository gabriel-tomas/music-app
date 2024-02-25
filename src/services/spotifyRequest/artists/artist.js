import base, { requestSpotifyToken } from '../index';

export default async (id) => {
  const token = await requestSpotifyToken();
  const request = await base.get(`/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(request.data);
  return request.data;
};
