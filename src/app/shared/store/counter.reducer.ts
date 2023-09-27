import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeChannel, customIncrement, decrement, increment, reset } from "./counter.actions";

export const counterReducer = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),

    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement,(state, action)=>{
        return {
            ...state,
            counter: action.counterType == 'add' ? state.counter + action.value : state.counter - action.value,
            type: action.counterType
        }
    }),
    on(changeChannel, (state, action)=>{
        return {
            ...state,
            channelName: action.name
        }
    })
)

