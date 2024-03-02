import axios from 'axios';

export default axios.create({
  baseURL: 'https://music-app-api-5r44.onrender.com',
  withCredentials: true,
});
