import * as types from '../types';

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload: payload,
  };
}

export function registerSuccess(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload: payload,
  };
}

export function registerFail(payload) {
  return {
    type: types.REGISTER_FAIL,
    payload: payload,
  };
}
