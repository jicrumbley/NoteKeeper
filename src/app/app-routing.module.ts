import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteviewcmpComponent } from './noteviewcmp/noteviewcmp.component'
import { NoteaddcmpComponent } from './noteaddcmp/noteaddcmp.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: NoteviewcmpComponent
  },
  {
    path: 'add',
    component: NoteaddcmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
