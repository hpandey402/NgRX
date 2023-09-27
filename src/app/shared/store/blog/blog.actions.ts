import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

export const LOAD_BLOG = '[blog page] load blog';
export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';

export const loadBlog = createAction(LOAD_BLOG);
export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS, props<{blogList:BlogModel[]}>());

export const addBlog = createAction('addBlog', props<{blogData:BlogModel}>());
export const updateBlog = createAction('updateBlog', props<{blogData:BlogModel}>());
export const removeBlog = createAction('removeBlog', props<{blogId:number}>());
