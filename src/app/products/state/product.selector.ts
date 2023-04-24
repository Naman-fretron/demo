import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productState } from "./product.state";


const getProductSelector = createFeatureSelector<productState>('product')

export const getProduct = createSelector(getProductSelector, state => {
    return state.products
})