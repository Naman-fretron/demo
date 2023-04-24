import { Product } from "src/app/product.modal"

export interface productState  {
  products: Product[] 
}
export const initialState: productState = {
    products : [],
}