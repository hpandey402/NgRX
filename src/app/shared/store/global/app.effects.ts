import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { SHOW_ALERT, emptyAction } from "./app.actions";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class AppEffects{
constructor(private actions$:Actions, private _snackBar: MatSnackBar ){
    
}
    _showSnackBar = createEffect(() => {
        return this.actions$.pipe(
            ofType(SHOW_ALERT),
            exhaustMap((action: any) => {
                return this.showSnackBarAlerts(action.message).afterDismissed()
                    .pipe(
                        map(() => emptyAction())
                    )
            })
        )
    })

    showSnackBarAlerts(message: string) {
        return this._snackBar.open(message, 'Ok', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration:3000
        });
    }
}

