import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import backendApi from '../../../services/backend';

import * as authActions from '../auth/actions';
import * as deleteAccountActions from '../deleteAccount/actions';

import * as types from '../types';

function* deleteUserAccount() {
  try {
    yield call(backendApi.delete, '/user');
    yield put(authActions.authFail());
    yield put(deleteAccountActions.userDeleteAccountSuccess());
    toast.info('Conta deleteda com sucesso');
  } catch (err) {
    const responseData = get(err.response, 'data', '');
    const status = get(err.response, 'status', 0);

    if (status === 401) {
      yield put(authActions.authFail());
      responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
    }

    if (status === 500) {
      responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
    }

    yield put(deleteAccountActions.userDeleteAccountFail());
  }
}

export default all([
  takeLatest(types.DELETE_ACCOUNT_REQUEST, deleteUserAccount),
]);
