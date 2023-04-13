import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

   getProduct(val:any){
    return this.http.get(`https://dummyjson.com/products/search?q=${val}`)
   }

   getProductList(){
    return this.http.get('https://dummyjson.com/products')
   }
}
