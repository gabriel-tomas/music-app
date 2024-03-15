import backendApi from '../index';

export const getUserData = async () => {
  const request = await backendApi.get('/user');
  return request.data;
};
