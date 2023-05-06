import {all} from 'redux-saga/effects'
import { mealsSaga } from './meals/getMealsSaga'
import { postAuthSaga } from './postAuth'
import { getRestaurants } from './restaurants/getRestaurantsSaga'
import { postMeal } from './meals/createMealsSaga'

export default function * rootSaga(){
    yield all([
        mealsSaga(),
        postAuthSaga(),
        getRestaurants(),
        postMeal()
    ])
}