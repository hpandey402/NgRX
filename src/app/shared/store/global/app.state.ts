import { blogReducer } from "../blog/blog.reducer";
import { counterReducer } from "../counter.reducer";

export const appState = {
    counterState:counterReducer,
    blogState:blogReducer
}