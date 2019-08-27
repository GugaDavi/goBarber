import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
// import history from '~/services/history';

import { singInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Acesso não autorizado',
        'Fornecedores utilizem a versão web'
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singInSuccess(token, user));

    // history.push('/dashboard');
  } catch (error) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados');
    yield put(signFailure());
  }
}

export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (error) {
    Alert.alert('Falha no caddastro', 'verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', singUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
