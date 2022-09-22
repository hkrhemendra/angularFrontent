import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddBlogService } from './addBlog.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  blogData = new FormGroup({
    title: new FormControl(''),
    intro: new FormControl(''),
    subheading1: new FormControl(''),
    para1: new FormControl(''),
    subheading2: new FormControl(''),
    para2: new FormControl(''),
    conclusion: new FormControl(''),
    banner: new FormControl(''),
    image1: new FormControl(''),
    image2: new FormControl('')
  })

  constructor(private addBlog:AddBlogService) { }

  ngOnInit(): void {
  }

  onAddingBlog(){
    this.addBlog.submitBlog(this.blogData.value).subscribe(responseData => {
      alert("Your data has been added successfully ")
      this.blogData.patchValue({
        title: '',
        intro: '',
        para1: '',
        para2: '',
        subheading1: '',
        subheading2: '',
        conclusion: '',
        image1: '',
        image2: '',
        banner: ''
      })
    })
  }

}
