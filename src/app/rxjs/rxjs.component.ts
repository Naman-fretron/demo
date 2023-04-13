import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  searchItem: any
  products$: Observable<any>
  searchSubject = new Subject<any>()
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(1000),
    distinctUntilChanged()).subscribe((value) => {
      console.log(value,'on')
     this.getProduct(value)
    })

    let test = of(1,2,3)

    let combined = test.pipe(switchMap(first => {
      console.log(first)
      return this.http.getProductList()
    }))
    
    combined.subscribe((data: any) => {
      console.log(data)
    })

  }

  searchFunc(e:any){
    let value = e.target.value;
    console.log(value,'sea')
    this.searchSubject.next(value)
  }

  getProduct(val:any){
   this.products$ = this.http.getProduct(val).pipe(map((data: any ) => {
      return data.products
    }))
  }
}


