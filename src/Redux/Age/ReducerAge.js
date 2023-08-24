import { DECREMENT_AGE, INCREMENT_AGE, RESET_AGE } from "./ActionTypeAge";
const initialState = {
    age: 20
}

const ReducerAge = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_AGE: {
            return { ...state, age: state.age + 1 }
        }
        case DECREMENT_AGE: {
            return { ...state, age: state.age - 1 }
        }
        case RESET_AGE: {
            return { ...state, age: 20 }
        }
        default: {
            return state
        }
    }
}

export default ReducerAge