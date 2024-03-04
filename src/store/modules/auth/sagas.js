import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import backendApi from '../../../services/backend';

import * as authActions from '../auth/actions';

import * as types from '../types';

function* authRequest({ payload }) {
  try {
    let response;
    if (payload.type === 'register') {
      response = yield call(backendApi.post, '/register', {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      });
    } else if (payload.type === 'login') {
      response = yield call(backendApi.post, '/login', {
        email: payload.email,
        password: payload.password,
      });
    }
    const responseData = response.data;
    if (get(responseData, 'token', '')) {
      yield put(authActions.authSuccess(responseData));
      backendApi.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      toast.success(responseData.successMsg);
    }
  } catch (err) {
    const responseData = get(err.response, 'data', '');
    const status = get(err.response, 'status', 0);
    if (status === 400) {
      responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
    }
    if (status === 401) {
      yield put(authActions.authFail());
      responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
    }
  }
}

function persistRehydrateAuthorization({ payload }) {
  console.log(payload);
  const token = get(payload, 'auth.token');
  if (!token) return;
  backendApi.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.AUTH_REQUEST, authRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrateAuthorization),
]);
