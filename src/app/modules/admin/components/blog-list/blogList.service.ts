import {
    HttpClient,
    HttpHeaders,
    HttpParams
  } from "@angular/common/http";
  import {
    Injectable
  } from "@angular/core";
  
  import { map } from "rxjs";
  
  import { Blog, BlogList } from "src/app/blogs.model";
import { AuthService } from "src/app/services/auth.service";
  
  @Injectable({
    providedIn: 'root'
  })
  export class BlogsService {
    constructor(private http: HttpClient,private auth: AuthService) {}
  
    loadedBlogs: BlogList[] = []
  
    fetchBlogs() {
      return this.http
        .get('http://3.18.212.149:8000/blog')
        .pipe(map((responseData) => {
          return responseData['data']
        }))
    }

    activateBlog(id:string){
      console.log("token", this.auth.getToken())
      console.log("Activate Blog")
      return this.http.get(`http://3.18.212.149:8000/blog/activate/${id}`).pipe(map(responseData => {
        return responseData['status']
      }))
    }

    deleteBlog(id:string){
      return this.http.delete(`http://3.18.212.149:8000/blog/delete/${id}`).pipe(map(responseData => {
        return responseData['status']
      }))
    }

    getUserRole(){
      return this.http.get('http://3.18.212.149:8000/get-user-role').pipe(map(responseData => {
          return responseData['role']
      }))
  }
  
  }
  