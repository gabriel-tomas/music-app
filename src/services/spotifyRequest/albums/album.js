import base, { requestSpotifyToken } from '../index';

export default async (albumId) => {
  const token = await requestSpotifyToken();
  const request = await base.get(`/albums/${albumId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.data;
};
