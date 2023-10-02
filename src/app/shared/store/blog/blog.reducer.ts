import { createReducer, on } from "@ngrx/store";
import { addBlogSuccess, loadBlog, loadBlogFail, loadBlogSuccess, deleteBlog, updateBlog, 
    // updateBlogSuccess, deleteBlogSuccess,
     } from "./blog.actions";
import { initialState } from "./blog.state";


export const blogReducer = createReducer(initialState,
    on(loadBlog, (state)=>{
        return {
            ...state
        }
    }),
    on(loadBlogSuccess, (state, action)=>{
        return {
            ...state,
            blogList:action.blogList,
            errorMessage:''
        }
    }),
    on(loadBlogFail, (state, action)=>{
        return {
            ...state,
            blogList:[],
            errorMessage:action.errMessage
        }
    }),
    on(addBlogSuccess, (state, action)=>{
        const _blog = {...action.blogData};
        return {
            ...state,
            blogList:[...state.blogList, _blog]
        }
    })
   

)