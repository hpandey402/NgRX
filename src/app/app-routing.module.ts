import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {path:'', redirectTo:'counter', pathMatch:'full'},
  {path:'counter', component:CounterComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/edit/:id', component:BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
