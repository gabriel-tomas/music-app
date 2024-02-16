import * as types from '../types';

export function setPlayMusic() {
  return {
    type: types.SET_PLAY_MUSIC,
  };
}

export function setStopMusic() {
  return {
    type: types.SET_STOP_MUSIC,
  };
}
