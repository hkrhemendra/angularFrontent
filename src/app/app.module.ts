import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './modules/main/components/blog-list/blog-list.component';
import { SingleBlogComponent } from './modules/main/components/single-blog/single-blog.component';
import { AboutComponent } from './modules/main/components/about/about.component';
import { ContactComponent } from './modules/main/components/contact/contact.component';
import { LoginComponent } from './modules/main/components/login/login.component';
import { HomeComponent } from './modules/main/components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlankComponent } from './modules/main/components/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthinterceptorService } from './services/authinterceptor.service';
import { EditblogComponent } from './modules/admin/components/editblog/editblog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    SingleBlogComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
