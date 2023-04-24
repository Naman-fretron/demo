import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { decremet, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {
  constructor(private store: Store<AppState>){

  }

  onIncrement(){
  this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decremet())
  }

  onReset(){
    this.store.dispatch(reset())
  }
}