import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import backendApi from '../../../services/backend';

import * as registerActions from '../register/actions';

import * as types from '../types';

function* registerRequest({ payload }) {
  try {
    const response = yield call(backendApi.post, '/register', {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    });
    const responseData = response.data;
    if (!responseData.loggedIn) {
      yield put(
        registerActions.registerFail({
          loggedIn: responseData.loggedIn,
          errors: responseData.errors,
        }),
      );
      responseData.errors.forEach((error) => toast.error(error));
    } else {
      yield put(
        registerActions.registerSuccess({
          loggedIn: responseData.loggedIn,
          success: responseData.success,
        }),
      );
      toast.success(responseData.success);
    }
  } catch (err) {
    yield put(
      registerActions.registerFail({
        loggedIn: false,
        errors: err.response.data.errors,
      }),
    );
    err.response.data.errors.forEach((error) => toast.error(error));
  }
}

export default all([takeLatest(types.REGISTER_REQUEST, registerRequest)]);
