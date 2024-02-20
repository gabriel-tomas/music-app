import * as types from '../types';

export function setVolume(payload) {
  return {
    type: types.SET_VOLUME,
    payload: payload,
  };
}
