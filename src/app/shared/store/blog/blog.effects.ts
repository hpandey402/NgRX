import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { ADD_BLOG, DELETE_BLOG, LOAD_BLOG, UPDATE_BLOG, addBlogSuccess, loadBlog, loadBlogFail, loadBlogSuccess } from "./blog.actions";
import { catchError, concatMap, map, of, switchMap, tap } from "rxjs";
import { loadSpinner, showAlert } from "../global/app.actions";


@Injectable()
export class BlogEffects {
    constructor(private action$: Actions, private masterService: MasterService) {

    }

    _blog = createEffect(() => {
        return this.action$.pipe(
            ofType(LOAD_BLOG),
            switchMap(() => {
                return this.masterService.getAllBlogs()
                    .pipe(
                        switchMap((data) => of(
                            loadBlogSuccess({ blogList: data }),
                            loadSpinner({isLoaded:false}))),
                        catchError((err) => of(loadBlogFail({ errMessage: err.message })))
                    )
            })
        )
    });

    _addBlog = createEffect(() => {
        return this.action$.pipe(
            ofType(ADD_BLOG),
            switchMap((action: any) => {
                return this.masterService.createBlog(action.blogData)
                    .pipe(
                        switchMap((data) => of(
                            addBlogSuccess({ blogData: data }),
                            showAlert({ message: 'Added Successfully' }),
                            loadSpinner({isLoaded:false})
                            )),
                        catchError(err => of(loadBlogFail({ errMessage: err.message })))
                    )
            })
        )
    });

    _updateBlog = createEffect(() => {
        return this.action$.pipe(
            ofType(UPDATE_BLOG),
            switchMap((action: any) => {
                return this.masterService.updateBlog(action.blogData)
                    .pipe(
                        switchMap(() => of(
                            loadBlog(),
                            showAlert({ message: 'Updated Successfully' }),
                        )),
                        catchError(err => of(showAlert({ message: 'Updated Failed due to' + err.message }), loadSpinner({isLoaded:false})))
                    )
            })
        )
    });

    _deleteBlog = createEffect(() => {
        return this.action$.pipe(
            ofType(DELETE_BLOG),
            switchMap((action: any) => {
                return this.masterService.deleteBlog(action.blogId)
                    .pipe(
                        switchMap((data) => of(
                            loadBlog(),
                            showAlert({ message: 'Deleted Successfully' })
                        )),
                        catchError(err => of(showAlert({ message: 'Failed to delete' + err.message }),loadSpinner({isLoaded:false})))
                    )
            })
        )
    });

}