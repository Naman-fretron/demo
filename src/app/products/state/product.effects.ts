import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs";
import { ProductService } from "../product.service";
import { loadProduct, load_success } from "./product.actions";

@Injectable({
    providedIn:'root'
})
export class ProductEffect {
    constructor(private action$ : Actions, private http : ProductService){

    }

    loadProducts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loadProduct),
            mergeMap((action) => {
                return this.http.getProductList().pipe(
                    map(products => {
                        console.log(products)
                        return load_success({products})
                    })
                )
            })
        )
    })


}