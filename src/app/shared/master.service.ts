import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from './store/blog/blog.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAllBlogs(){
    let url = 'http://localhost:3000/blogs';
    return this.http.get<BlogModel[]>(url);
  }
  createBlog(blogInput: BlogModel){
    return this.http.post<BlogModel>('http://localhost:3000/blogs', blogInput);
  }

  updateBlog(blogInput: BlogModel){
    return this.http.put<BlogModel>('http://localhost:3000/blogs/'+blogInput.id, blogInput);
  }

  deleteBlog(id:number){
    return this.http.delete<BlogModel>('http://localhost:3000/blogs/'+id);
  }
}
