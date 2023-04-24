import { createReducer, on } from "@ngrx/store"
import { retry } from "rxjs";
import { customIncrement, decremet, increment, reset } from "./counter.action";
import {initialState} from "./counter.state"

const reducerFunc = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
           counter: state.counter+1
        }
    }),
    on(decremet, state => {
        return {
            ...state,
            counter: state.counter-1
        }
    }),
    on(reset, state => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value
        }
    })
    
)

export function counterReducer(state: any, action:any){
    return reducerFunc(state, action);
}