import { routerReducer } from "@ngrx/router-store";
import { blogReducer } from "../blog/blog.reducer";
import { counterReducer } from "../counter.reducer";
import { appReducer } from "./app.reducer";

export const globalState = {
    counterState: counterReducer,
    blogState:blogReducer,
    app: appReducer,
    router: routerReducer // not important
}