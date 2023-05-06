import {call, put, takeLatest } from 'redux-saga/effects'
import { AUTH_FETCH_FAILED, AUTH_FETCH_INIT, AUTH_FETCH_SUCCEEDED, } from '../types';
import agiget from '../../api/apiget'

function* fetchPostAuth(action) {
    try {
        const method = 'POST'
        const url = '/users/login'
        const data = action.payload
        const results = yield call(agiget, method, url, data)
        yield put({ type: AUTH_FETCH_SUCCEEDED, payload: results.data.token })
    } catch (error) {
        yield put({ type: AUTH_FETCH_FAILED, payload: error.response.data.error })
    }
}

export function* postAuthSaga() {
    yield takeLatest(AUTH_FETCH_INIT, fetchPostAuth)
}
  

