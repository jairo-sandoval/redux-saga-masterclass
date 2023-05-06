import {call, put, takeLatest } from 'redux-saga/effects'
import agiget from '../../../api/apiget'
import { CREATE_MEALS_FAILED, CREATE_MEALS_INIT, CREATE_MEALS_SUCCEEDED } from '../../types'

function* fetchCreateMeal({payload}) {
    try {
        console.log(payload)
        const method = 'POST'
        const url = `/meals/${payload.id}`
        delete payload.id

        const headers = `Authorization: Bearer ${payload.token}`
        const data = payload?.data

        const results = yield call(agiget, method, url, data, headers)
        yield put({ type: CREATE_MEALS_SUCCEEDED, payload: results.data.meals})
    } catch (error) {
        yield put({ type: CREATE_MEALS_FAILED, message: error.message })
    }
}

export function* postMeal() {
    yield takeLatest(CREATE_MEALS_INIT, fetchCreateMeal)
}
  

