import * as types from '../types';

export function setUserPlatform(payload) {
  return {
    type: types.SET_USER_PLATFORM,
    payload: payload,
  };
}
