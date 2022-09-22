import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BlogDetail } from './blogDetails.model';
import { EditBlogService } from './editBlog.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  id: any
  constructor(private editService:EditBlogService, private route:ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id')
        console.log("id ----------> ", this.id)
   }

  public editForm = new FormGroup({
    title: new FormControl(''),
    intro: new FormControl(''),
    subheading1: new FormControl(''),
    para1: new FormControl(''),
    subheading2: new FormControl(''),
    para2: new FormControl(''),
    conclusion: new FormControl('')
  })

  ngOnInit(): void {
    this.getBlogDetails()
    
  }

  blogDetails: BlogDetail

  getBlogDetails(){
    this.editService.fetchBlogDetails(this.id).subscribe(responseData => {
      this.blogDetails = responseData
      this.editForm.patchValue({
        title: this.blogDetails.title,
        intro: this.blogDetails.intro,
        para1: this.blogDetails.para1,
        para2: this.blogDetails.para2,
        subheading1: this.blogDetails.subheading1,
        subheading2: this.blogDetails.subheading2,
        conclusion: this.blogDetails.conclusion
      })
    })
  }

  submitUpdate(){
    if(this.editForm.valid){
      this.editService.updateBlog(this.id, this.editForm.value).subscribe(responseData => {
        if(responseData === 200){
          console.log("success")
          this.router.navigate(['admin'])
        }else{
          alert('Wrong Credentials ')
        }
      },(err: Error) => {
        alert(err.message)
      })
    }
  }

}
