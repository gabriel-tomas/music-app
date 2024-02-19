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

export function setActualMusicState(payload) {
  return {
    type: types.SET_ACTUAL_MUSIC_STATE,
    payload: payload,
  };
}
