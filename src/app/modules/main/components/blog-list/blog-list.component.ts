import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogDetail } from './blog-detail.model';
import { BlogList } from 'src/app/blogs.model';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private http: HttpClient, private blogsService: BlogsService) { }

  loadedBlogs: BlogList[] = []

  ngOnInit() {
    this.blogsService.fetchBlogs().subscribe(blogs => {
      this.loadedBlogs = blogs
      console.log("Loaded BLogs",this.loadedBlogs)
    })
  }


  onFetchBlogs(){
    this.blogsService.fetchBlogs(); 
  }

}
