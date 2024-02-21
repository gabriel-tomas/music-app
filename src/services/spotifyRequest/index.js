import axios from 'axios';

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

export default axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

async function tokenExpired(token) {
  await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=1', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

async function requestNewAccessToken() {
  const request = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });
  const response = await request.json();
  localStorage.setItem('access_token', response.access_token);
  return response.access_token;
}

export async function requestSpotifyToken() {
  try {
    let accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      accessToken = await requestNewAccessToken();
    }
    await tokenExpired(accessToken);
    return accessToken;
  } catch (err) {
    if (err.response.data.error.status === 401) {
      const accessToken = await requestNewAccessToken();
      return accessToken;
    }
  }
}
