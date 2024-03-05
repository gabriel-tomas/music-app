import * as types from '../types';

export function updatePlaylists() {
  return {
    type: types.UPDATE_PLAYLIST,
  };
}

export function notUpdatePlaylists() {
  return {
    type: types.NOT_UPDATE_PLAYLIST,
  };
}
