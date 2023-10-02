import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModal } from 'src/app/shared/store/global/app.modal';
import { getSpinnerState } from 'src/app/shared/store/global/app.selector';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading = false;
constructor(private store:Store<AppStateModal>){

}

ngOnInit(): void {
   this.store.select(getSpinnerState).subscribe(data=>{
    this.isLoading = data;
    console.log("check is loading", this.isLoading)
   })
}

}
