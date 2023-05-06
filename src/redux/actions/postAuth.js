import { AUTH_FETCH_INIT } from "../types";

export const postAuth = (payload) => {
    return {
        type: AUTH_FETCH_INIT,
        payload,
    }
}