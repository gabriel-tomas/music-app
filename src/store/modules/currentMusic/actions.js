import * as types from '../types';

export function setCurrentMusic(payload) {
  return {
    type: types.SET_CURRENT_MUSIC,
    payload: payload,
  };
}
