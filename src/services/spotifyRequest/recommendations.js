import base, { requestSpotifyToken } from './index';

export default async () => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    '/recommendations?limit=5&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_genres=pop,rock',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(request.data.tracks);
};
