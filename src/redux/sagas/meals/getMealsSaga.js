import {call, put, takeLatest } from 'redux-saga/effects'
import { GET_MEALS_FAILED, GET_MEALS_INIT, GET_MEALS_SUCCEEDED } from '../../types';
import agiget from '../../../api/apiget'

function* fetchMeals(action) {
    try {
        const method = 'GET'
        const url = '/meals'
        const results = yield call(agiget, method, url)
        yield put({ type: GET_MEALS_SUCCEEDED, payload: results.data.meals })
    } catch (error) {
        yield put({ type: GET_MEALS_FAILED, message: error.message })
    }
}

export function* mealsSaga() {
    yield takeLatest(GET_MEALS_INIT, fetchMeals)
}
  

