import { GET_MEALS_INIT } from "../../types";

export const getMeals = (payload) => {
    return {
        type: GET_MEALS_INIT,
        payload: payload
    }
}