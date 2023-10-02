import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from 'src/app/shared/store/blog/blog.actions';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogById } from 'src/app/shared/store/blog/blog.selector';
import { loadSpinner } from 'src/app/shared/store/global/app.actions';
import { AppStateModal } from 'src/app/shared/store/global/app.modal';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  blogForm = this.fb.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required]
  });
  dialogTitle!:string;
  editData!:BlogModel;
  constructor(private dialogRef: MatDialogRef<AddblogComponent>, 
    private fb: FormBuilder, private store:Store<AppStateModal>, @Inject(MAT_DIALOG_DATA) private data:any) {

  }
  
  ngOnInit(): void {
    this.dialogTitle = this.data.title;
    if(this.data.isEdit){
      this.store.select(getBlogById(this.data.id)).subscribe(blog=>{
        this.editData = blog;
        this.blogForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description
        })
      })
    }
  }
  closePopup() {
    this.dialogRef.close()
  }

  saveBlogs(){
    if(this.blogForm.valid){
      const blog:BlogModel = {
        id:0,
        title:this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      }
      this.store.dispatch(loadSpinner({isLoaded:true}))
      setTimeout(()=>{
        if(this.data.isEdit){
          blog.id = this.blogForm.value.id as number;
          this.store.dispatch(updateBlog({blogData:blog}));
        }else{
          this.store.dispatch(addBlog({blogData:blog}));
        }

      }, 2000)
      this.closePopup()
    }
  }
}
