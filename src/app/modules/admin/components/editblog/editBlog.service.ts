import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EditBlogService{
    constructor(private http:HttpClient){
        
    }

    fetchBlogDetails(id:string){
        return this.http.get(`http://3.18.212.149:8000/blog/single-blog/${id}`).pipe(map(responseData=>{
            return responseData['data']
        }))
    }

    updateBlog(id:string, {title , intro, subheading1, subheading2, para1, para2, conclusion }:any){
        return this.http.patch(`http://3.18.212.149:8000/blog/update-blog/${id}`,{
            "title": title,
            "intro": intro,
            "subheading1": subheading1,
            "subheading2": subheading2,
            "para1": para1,
            "para2": para2,
            "conclusion": conclusion
        }).pipe(map(responseDate=> {
            return responseDate['status']
        }))
    }

}