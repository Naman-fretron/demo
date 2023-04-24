import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { productReducer } from "../products/state/product.reducer";
import { productState } from "../products/state/product.state";

export interface AppState {
    counter : CounterState,
    product: productState
}

export const appReducer = {
    counter : counterReducer,
    product : productReducer
}