import { all } from 'redux-saga/effects';

import checkLogin from './checkLogin/sagas';
import register from './register/sagas';
import login from './login/sagas';

export default function* rootSaga() {
  return yield all([checkLogin, register, login]);
}
