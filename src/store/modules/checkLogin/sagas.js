import { call, put, all, takeLatest } from 'redux-saga/effects';
/* import { toast } from 'react-toastify'; */

import backendApi from '../../../services/backend';

import * as checkLoginActions from '../checkLogin/actions';

import * as types from '../types';

function* checkRequest() {
  try {
    const response = yield call(backendApi.get, '/checkLogin');
    const isLoggedIn = response.data.login;
    if (!isLoggedIn) {
      yield put(checkLoginActions.checkLoginFail());
    } else {
      yield put(checkLoginActions.checkLoginSuccess());
    }
  } catch (e) {
    yield put(checkLoginActions.checkLoginFail());
  }
}

export default all([takeLatest(types.CHECK_LOGIN_REQUEST, checkRequest)]);
