import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.modal';
import { AppState } from 'src/app/store/app.state';
import { loadProduct } from '../state/product.actions';
import { getProduct } from '../state/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
   products$ : Observable<Product[]>
  constructor( private store: Store<AppState>){
  }

  ngOnInit(): void {
    this.products$ = this.store.select(getProduct)
    this.store.dispatch(loadProduct())

  }

}
