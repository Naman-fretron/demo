import { createReducer, on } from "@ngrx/store"
import { load_success } from "./product.actions"
import { initialState } from "./product.state"

const _productsReducer = createReducer(initialState,
    on(load_success, (state, action) => {
        return {
            ...state,
            products: action.products
        }
    }))
    

export function productReducer (state:any, actions:any){
    return _productsReducer(state, actions)
}