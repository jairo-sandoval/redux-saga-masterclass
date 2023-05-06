import { CREATE_MEALS_INIT } from "../../types";

export const createMeals = (payload) => {
    return {
        type: CREATE_MEALS_INIT,
        payload: payload
    }
}