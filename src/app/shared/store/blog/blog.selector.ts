import { createFeatureSelector, createSelector } from "@ngrx/store";
import {BlogList, BlogModel} from "./blog.model";

const getBlogState = createFeatureSelector<BlogList>('blogState');

export const getBlog = ()=> createSelector(getBlogState, (state)=>{
    return state.blogList
});

export const getBlogById = (id:number)=>createSelector(getBlogState, (state)=>{
    return state.blogList.find(el=> el.id == id) as BlogModel;
});
