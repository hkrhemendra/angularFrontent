import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AddBlogService{
    constructor(private http: HttpClient){}
    
    submitBlog({title, intro, subheading1, subheading2, para1, para2, conclusion,banner, image1, image2}:any){
        return this.http.post(`http://3.18.212.149:8000/blog/upload`,{
            "title": title,
            "intro": intro,
            "subheading1": subheading1,
            "subheading2": subheading2,
            "para1": para1,
            "para2": para2,
            "conclusion": conclusion,
            "banner": banner,
            "image1": image1,
            "image2": image2
        }).pipe(map(responseData => {
            return responseData['status']
        }))
    }

}