import { GET_RESTAURANTS_INIT } from "../../types";

export const getRestaurants = (payload) => {
    return {
        type: GET_RESTAURANTS_INIT,
        payload: payload
    }
}