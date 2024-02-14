import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const requisicao = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch (err) {
    yield put(actions.clicaBotaoFailure());
    toast.error('Deu erro');
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
