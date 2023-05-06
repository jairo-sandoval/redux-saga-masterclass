import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/main";
import { reducerAuth } from "../reducers/postAuth";
import { getMealsReducer } from "../reducers/meals/getMealsReducer";
import { getRestaurantsReducer } from "../reducers/restaurants/getRestaurants";

const sagaMiddleware = createSagaMiddleware()


const reducer = combineReducers({
    restaurants: getRestaurantsReducer,
    meals: getMealsReducer,
    auth: reducerAuth
})

export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)