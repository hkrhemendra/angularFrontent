import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogList.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogsService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.blogService.fetchBlogs().subscribe(reponseData => {
      this.loadedBlogList = reponseData
    })
    this.verifyUserRole()
  }

  loadedBlogList: any
  userRole: any

  onActivateBlog(id:string){
    this.blogService.activateBlog(id).subscribe(responseData => {
      if(responseData === 200){
        alert("Blog has been activated ")
      }else if(responseData === 401){
        alert("Only admin can activate blog")
      }else{
        alert("Something went wrong. Please try again later.")
      }
    })
  }

  onDelete(id:string){
    this.blogService.deleteBlog(id).subscribe(responseData => {
      if(responseData === 200){
        alert("Blog deleted successfully ")
      }else if(responseData === 401){
        alert("Only Super admin can delete Blogs")
      }else{
        alert("something went wrong, please try again later")
      }
    })
  }

  verifyUserRole(){
    this.blogService.getUserRole().subscribe(responseData => {
      this.userRole = responseData
      console.log("userROle", this.userRole)
    })
  }

}
