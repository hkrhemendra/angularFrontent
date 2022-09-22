import {
  HttpClient
} from '@angular/common/http';
import {
  Component
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators'
import { Blog, BlogList } from './blogs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  mainImage: string = 'assets/images/corousel.jpg'

  blogs: Observable < any > ;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchBlogs()
  }

  loadedBlogs:BlogList[] = []

  onFetchBlogs() {
    // Send Http request

    return this.http
      .get<{Blog}>('http://127.0.0.1:8000/blog')
      .pipe(map((responseData) => {
        return responseData['data']
      }))
      .subscribe(responseData => {
        console.log(responseData) 
        this.loadedBlogs = responseData
      })

  }

}
