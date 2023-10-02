import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogState } from 'src/app/shared/store/blog/blog.model';
import { getBlogInfo } from 'src/app/shared/store/blog/blog.selector';
import { AppStateModal } from 'src/app/shared/store/global/app.modal';
import { AddblogComponent } from '../addblog/addblog.component';
import { loadBlog, deleteBlog } from 'src/app/shared/store/blog/blog.actions';
import { loadSpinner } from 'src/app/shared/store/global/app.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogData!: BlogState;
  constructor(private store: Store<AppStateModal>, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.store.dispatch(loadSpinner({isLoaded:true}));
    setTimeout(()=>{
      this.store.dispatch(loadBlog());
    },2000)
    this.store.select(getBlogInfo).subscribe(data => {
      this.blogData = data;
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id:number|null,title:string, isEdit=false ){
    this.dialog.open(AddblogComponent,{
      width: '40%',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        id,
        title,
        isEdit
      }
    })
  }

  editBlog(id:number){
    this.openDialog('300ms', '500ms',id, 'Edit Blog', true);
  }

  removeBlog(id:number){
    this.store.dispatch(loadSpinner({isLoaded:true}))
    this.store.dispatch(deleteBlog({blogId:id}));
  }
}
