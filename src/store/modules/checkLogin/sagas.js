import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
/* import { toast } from 'react-toastify'; */

import backendApi from '../../../services/backend';

import * as checkLoginActions from '../checkLogin/actions';

import * as types from '../types';

function* checkRequest() {
  try {
    /* const response = yield call(backendApi.get, '/checkLogin', {
      withCredentials: true,
    }); */

    // Agora você pode fazer suas solicitações usando o Axios
    const options = {
      method: 'GET',
      url: 'https://music-app-api-5r44.onrender.com/checkLogin',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        httpOnly: true,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    /* console.log(response);
    const isLoggedIn = response.data.login;
    console.log(response.data); */
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
