import { createAction, props } from "@ngrx/store"
import { Product } from "src/app/product.modal"

export const load_product = 'loadProduct'
export const load_product_success = 'loadSuccess'

export const loadProduct = createAction(load_product)

export const load_success = createAction(load_product_success, props<{products: Product[]}>())
