import { DECREMENT_AGE, INCREMENT_AGE, RESET_AGE } from "./ActionTypeAge";

export const incrementAge = () => {
    return {
        type: INCREMENT_AGE
    }
}
export const decrementAge = () => {
    return {
        type: DECREMENT_AGE
    }
}
export const resetAge = () => {
    return {
        type: RESET_AGE
    }
}
