import { createStore } from "redux";

const initialState = {
    number: 0,
}

const reducer = ((state = initialState, action) => {
    if (action.type === "ADD") {
        return { ...state, number: state.number + 1 }
    }
    if (action.type === "SUBTRACT") {
        return { ...state, number: state.number - 1 }
    }
    return state
})

const store = createStore(reducer);

export default store;
