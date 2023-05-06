import { AUTH_FETCH_FAILED, AUTH_FETCH_INIT, AUTH_FETCH_SUCCEEDED } from "../types"

const initialStore = {
    token: '',
    error: null
}

export const reducerAuth = (store = initialStore, action) => {
    switch(action.type) {
        case AUTH_FETCH_INIT:
            return store
    
        case AUTH_FETCH_SUCCEEDED:
            return {
                ...store, 
                token: action.payload,
                error: null,
            }

        case AUTH_FETCH_FAILED:
            return {
                ...store,
                error: action.payload
            }
            
        default :
            return store
    }
}

