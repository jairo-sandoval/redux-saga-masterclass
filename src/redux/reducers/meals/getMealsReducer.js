import { CREATE_MEALS_FAILED, CREATE_MEALS_INIT, CREATE_MEALS_SUCCEEDED, GET_MEALS_FAILED, GET_MEALS_INIT, GET_MEALS_SUCCEEDED } from "../../types"

const initialStore = {
    meals: [],
    error: null
}

export const getMealsReducer = (store = initialStore, action) => {
    switch(action.type) {
        case GET_MEALS_INIT:
            return store
    
        case GET_MEALS_SUCCEEDED:
            return {
                ...store, 
                meals: action.payload,
                error: null,
            }

        case GET_MEALS_FAILED:
            return {
                ...store,
                error: action.error
            }
                
        case CREATE_MEALS_INIT:
            return store
    
        case CREATE_MEALS_SUCCEEDED:
            return {
                ...store, 
                error: null,
            }

        case CREATE_MEALS_FAILED:
            return {
                ...store,
                error: action.error
            }
            
        default :
            return store
    }
}

