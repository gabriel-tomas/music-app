import * as types from '../types';

export function setQueueTracks(payload) {
  return {
    type: types.SET_QUEUE_TRACKS,
    payload: payload,
  };
}

export function shiftQueueTracks() {
  return {
    type: types.SHIFT_QUEUE_TRACKS,
  };
}
