import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannel, decrement, increment, reset } from 'src/app/shared/store/counter.actions';
import { AppStateModal } from 'src/app/shared/store/global/app.modal';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent {

  constructor(private store:Store<AppStateModal>){
  }
  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
  changeName(){
    this.store.dispatch(changeChannel({name:'New Ngrx Course'}))
  }
}
