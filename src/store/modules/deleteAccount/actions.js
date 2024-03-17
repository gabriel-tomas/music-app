import * as types from '../types';

export const userDeleteAccountRequest = () => {
  return {
    type: types.DELETE_ACCOUNT_REQUEST,
  };
};

export const userDeleteAccountSuccess = () => {
  return {
    type: types.DELETE_ACCOUNT_SUCCESS,
  };
};

export const userDeleteAccountFail = () => {
  return {
    type: types.DELETE_ACCOUNT_FAIL,
  };
};
