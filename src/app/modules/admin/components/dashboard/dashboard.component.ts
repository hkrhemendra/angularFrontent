import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BlogsService } from '../blog-list/blogList.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

id: any

  constructor(private auth:AuthService) { }

  loadedBlogList: any
  userRole: any

  ngOnInit(): void {
  }

  logout(): void{
    this.auth.logout();
  }
}
