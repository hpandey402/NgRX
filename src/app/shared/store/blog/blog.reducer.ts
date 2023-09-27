import { createReducer, on } from "@ngrx/store";
import { addBlog, loadBlog, loadBlogSuccess, removeBlog, updateBlog } from "./blog.actions";
import { initialState } from "./blog.state";


export const blogReducer = createReducer(initialState,
    on(loadBlog, (state)=>{
        return {
            ...state
        }
    }),
    on(loadBlogSuccess, (state, action)=>{
        console.log("checkkk action type", action.type)
        return {
            ...state,
            blogList:action.blogList
        }
    }),
    on(addBlog, (state, action)=>{
        const _blog = {...action.blogData};
        _blog.id = state.blogList.length + 1;
        return {
            ...state,
            blogList:[...state.blogList, _blog]
        }
    }),
    on(updateBlog, (state, action)=>{
        const index = state.blogList.findIndex(el=> el.id == action.blogData.id);
        const updateBlogs = structuredClone(state.blogList);
        updateBlogs[index] = {...action.blogData};

        console.log("runn", updateBlogs)
        return {
            ...state,
            blogList: updateBlogs
        }
    }),
    on(removeBlog, (state, action)=>{
        return {
            ...state,
            blogList: state.blogList.filter(el=> el.id != action.blogId)
        }
    })

)