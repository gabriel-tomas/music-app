import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import backendApi from '../../../services/backend';

import * as authActions from '../auth/actions';
import * as userActions from '../user/actions';

import * as types from '../types';

function* userUpdateRequest({ payload }) {
  try {
    const response = yield call(backendApi.put, '/user', {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    });
    const responseData = get(response, 'data', {});
    toast.success(responseData.successMsg);
    yield put(authActions.authFail());
    yield put(userActions.userUpdateSuccess());
  } catch (err) {
    const responseData = get(err.response, 'data', '');
    const status = get(err.response, 'status', 0);

    if (status === 401) {
      yield put(authActions.authFail());
      responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
    }

    if (status === 500 || status === 400) {
      responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
    }

    yield put(userActions.userUpdateFail());
  }
}

export default all([takeLatest(types.USER_UPDATE_REQUEST, userUpdateRequest)]);
