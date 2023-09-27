import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, loadBlogSuccess } from "./blog.actions";
import { EMPTY, catchError, map, switchMap } from "rxjs";


@Injectable()
export class BlogEffects{
    constructor(private actions$:Actions, private masterService:MasterService){

    }

    _blog = createEffect(()=>{
        return this.actions$.pipe(
            ofType(LOAD_BLOG),
            switchMap(()=>{
                return this.masterService.getAllBlogs()
                .pipe(
                    map((data)=> loadBlogSuccess({blogList:data})),
                    catchError(()=> EMPTY)
                )
            })
        )
    })
}