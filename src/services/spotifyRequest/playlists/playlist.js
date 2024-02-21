import base, { requestSpotifyToken } from '../index';

export default async (playlist_id) => {
  const token = await requestSpotifyToken();
  const request = await base.get(`/playlists/${playlist_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.data;
};
