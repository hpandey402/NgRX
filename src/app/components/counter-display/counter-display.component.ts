import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/shared/store/counter.selector';
import { CounterModel } from 'src/app/shared/store/counter.state';
import { AppStateModal } from 'src/app/shared/store/global/app.modal';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  counterDisplay!: number;
  // counter$!: Observable<CounterModel>;
  constructor(private store: Store<AppStateModal>) {
  }

  ngOnInit() {
    // this.counter$ = this.store.select('counterStore');
    this.store.select(getCounter()).subscribe(data => {
      this.counterDisplay = data;
    })
  }

}
