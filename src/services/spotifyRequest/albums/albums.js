import base, { requestSpotifyToken } from '../index';

export default async () => {
  const token = await requestSpotifyToken();
  const request = await base.get(
    '/albums?market=BR&ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return request.data.albums;
};
