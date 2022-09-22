import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogDetail } from '../blog-list/blog-detail.model';
import { SingleBlogService } from './single-blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  blog_1:string = "assets/images/blog-1.jpg"
  blog_2:string = "assets/images/blog-2.jpg"
  blog_3:string = "assets/images/blog-3.jpg"

  id: any;

  constructor(private blogDetails: SingleBlogService,
              private route: ActivatedRoute) { 
                this.id = this.route.snapshot.paramMap.get("id")
              }
 
  loadedBlogDetail: BlogDetail

  ngOnInit(): void {
    console.log('test single blogs')
      this.blogDetails.fetchSingleDetail(this.id)
      .subscribe(
        responseData =>{
          console.log("id componenet ==================> ", this.id)
          this.loadedBlogDetail = responseData
          console.log("Single Blog Detail ====================> ", this.loadedBlogDetail)
        }
      )
  }

}
