import { all } from 'redux-saga/effects';

import checkLogin from './checkLogin/sagas';

export default function* rootSaga() {
  return yield all([checkLogin]);
}
