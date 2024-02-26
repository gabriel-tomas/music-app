import * as types from '../types';

export function setDataSave(payload) {
  return {
    type: types.SAVE_DATA,
    payload: payload,
  };
}
