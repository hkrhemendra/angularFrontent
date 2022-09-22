import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './components/addblog/addblog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditblogComponent } from './components/editblog/editblog.component';
import { ListusersComponent } from './components/listusers/listusers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'add',
        component: AddblogComponent
      },
      {
        path: 'activate/:id',
        component: DashboardComponent
      },
      {
        path: 'blog-list',
        component: BlogListComponent
      },
      {
        path: 'list-users',
        component: ListusersComponent
      },
      {
        path: 'edit-blog/:id',
        component: EditblogComponent
      },
      {
        path: '',
        redirectTo: 'blog-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
