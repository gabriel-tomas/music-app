import axios from 'axios';

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

export default axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

export async function requestSpotifyToken() {
  const request = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });
  const response = await request.json();
  return response.access_token;
}
