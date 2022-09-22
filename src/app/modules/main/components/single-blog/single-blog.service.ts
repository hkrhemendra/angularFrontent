import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { BlogDetail } from "../blog-list/blog-detail.model";


@Injectable({ providedIn: 'root' })
export class SingleBlogService {

    constructor(private http:HttpClient) {}

    fetchSingleDetail(id:string){
        return this.http
        .get(`http://3.18.212.149:8000/blog/single-blog/${id}`)
        .pipe(map(responseData=>{
            // console.log('Id ----------------> ', this.id)
            console.log("service single blog =============> ", responseData)
            return responseData['data']
        }))
    }

}