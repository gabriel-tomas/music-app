import * as types from '../types';

export function authRequest(payload) {
  return {
    type: types.AUTH_REQUEST,
    payload: payload,
  };
}

export function authSuccess(payload) {
  return {
    type: types.AUTH_SUCCESS,
    payload: payload,
  };
}

export function authFail(payload) {
  return {
    type: types.AUTH_FAIL,
    payload: payload,
  };
}
