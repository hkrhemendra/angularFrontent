import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlankComponent } from './components/blank/blank.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children:[
      {
        component: AboutComponent,
        path: 'about'
      },
      {
        component: BlogListComponent,
        path: 'blog-list',
      },
      {
        component: ContactComponent,
        path: 'contact'
      },
      {
        component: LoginComponent,
        path: 'login'
      },
      {
        component: SingleBlogComponent,
        path: 'single-blog/:id',
      },
      {
        component: HomeComponent,
        path: 'home'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
