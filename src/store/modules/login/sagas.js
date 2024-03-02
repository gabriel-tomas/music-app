import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import backendApi from '../../../services/backend';

import * as loginActions from '../login/actions';

import * as types from '../types';

function* loginRequest({ payload }) {
  try {
    const response = yield call(backendApi.post, '/login', {
      email: payload.email,
      password: payload.password,
    });
    const responseData = response.data;
    console.log(responseData);
    if (!responseData.loggedIn) {
      yield put(
        loginActions.loginFail({
          loggedIn: responseData.loggedIn,
          errors: responseData.errors,
        }),
      );
      responseData.errors.forEach((error) => toast.error(error));
    } else {
      yield put(
        loginActions.loginSuccess({
          loggedIn: responseData.loggedIn,
          success: responseData.success,
        }),
      );
      toast.success(responseData.success);
    }
  } catch (err) {
    yield put(
      loginActions.loginFail({
        loggedIn: false,
        errors: err.responseData.data.errors,
      }),
    );
    err.response.data.errors.forEach((error) => toast.error(error));
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
