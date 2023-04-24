import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Product } from "../product.modal";


@Injectable({
    providedIn: 'root'
})
export class ProductService{
constructor(private http: HttpClient){

}

getProductList(){
    return this.http.get('https://dummyjson.com/products').pipe(
       map((data: any) => {
        let productArray = data.products
        console.log(productArray)
        return productArray
       })
    )
   }
}