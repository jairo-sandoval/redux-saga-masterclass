import { GET_RESTAURANTS_FAILED, GET_RESTAURANTS_INIT, GET_RESTAURANTS_SUCCEEDED } from "../../types"

export const initialStore = {
    restaurants: [],
    error: null
}

export const getRestaurantsReducer = (store = initialStore, action) => {
    switch(action.type) {
        case GET_RESTAURANTS_INIT:
            return store
    
        case GET_RESTAURANTS_SUCCEEDED:
            return {
                ...store, 
                restaurants: action.payload,
                error: null,
            }

        case GET_RESTAURANTS_FAILED:
            return {
                ...store,
                error: action.error
            }
        
        default :
            return store
    }
}

