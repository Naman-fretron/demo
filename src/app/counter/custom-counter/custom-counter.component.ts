import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent {

 value: number

 constructor(private store: Store<{counter: CounterState}>){}

 addNumber(){
   this.store.dispatch(customIncrement({value: +this.value}))
 }
}
