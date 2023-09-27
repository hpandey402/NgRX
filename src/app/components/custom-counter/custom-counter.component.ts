import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { getChannelName } from 'src/app/shared/store/counter.selector';
import { CounterModel } from 'src/app/shared/store/counter.state';
import { AppStateModal } from 'src/app/shared/store/global/app.modal';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {
  counterInput!: number;
  channelName!:string;
  actionType = 'add';
  constructor(private store: Store<AppStateModal>) {
  }
  customIncrement() {
   if(this.counterInput){
     this.store.dispatch(customIncrement({value:+this.counterInput, counterType:this.actionType}))
   }
  }

  ngOnInit() {
    // this.counter$ = this.store.select('counterStore');
    this.store.select(getChannelName()).subscribe(data => {
      this.channelName = data;
    })
  }
}

