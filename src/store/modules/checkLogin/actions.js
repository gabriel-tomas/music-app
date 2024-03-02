import * as types from '../types';

export function checkLoginRequest() {
  return {
    type: types.CHECK_LOGIN_REQUEST,
  };
}

export function checkLoginSuccess() {
  return {
    type: types.CHECK_LOGIN_SUCCESS,
  };
}

export function checkLoginFail() {
  return {
    type: types.CHECK_LOGIN_FAIL,
  };
}
