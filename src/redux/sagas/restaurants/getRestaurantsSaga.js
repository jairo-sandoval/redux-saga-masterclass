import {call, put, takeLatest } from 'redux-saga/effects'
import { GET_RESTAURANTS_FAILED, GET_RESTAURANTS_INIT, GET_RESTAURANTS_SUCCEEDED } from '../../types';
import agiget from '../../../api/apiget'

function* fetchGetRestaurant(action) {
    try {
        const method = 'GET'
        const url = '/restaurants'
        const results = yield call(agiget, method, url)
        yield put({ type: GET_RESTAURANTS_SUCCEEDED, payload: results.data.restaurants })
    } catch (error) {
        yield put({ type: GET_RESTAURANTS_FAILED, message: error.message })
    }
}

export function* getRestaurants() {
    yield takeLatest(GET_RESTAURANTS_INIT, fetchGetRestaurant)
}
  

