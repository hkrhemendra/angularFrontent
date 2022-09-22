import {
  HttpClient
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";

import { map } from "rxjs";

import { Blog, BlogList } from "src/app/blogs.model";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  loadedBlogs: BlogList[] = []

  fetchBlogs() {
    return this.http
      .get('http://3.18.212.149:8000//blog/')
      .pipe(map((responseData) => {
        return responseData['data']
      }))
  }

}
