import * as types from '../types';

export function isLoading() {
  return {
    type: types.SET_IS_LOADING,
  };
}

export function isNotLoading() {
  return {
    type: types.SET_IS_NOT_LOADING,
  };
}
