import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddblogComponent } from './components/addblog/addblog.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { EditblogComponent } from './components/editblog/editblog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from 'src/app/services/authinterceptor.service';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AddblogComponent,
    ListusersComponent,
    EditblogComponent,
    BlogListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
