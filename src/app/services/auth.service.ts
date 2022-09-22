import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { AuthAccess } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) {}

  setToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken():string | null {
    return localStorage.getItem('token') 
  }

  isLoggedIn() {
    return this.getToken() ? this.getToken() : null
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  login({username, password}: any){
    return this.http.post('http://3.18.212.149:8000/login',{
      "username": username,
      "password": password
    }).pipe(map(responseData => {
      if(responseData['status'] == 200){
        this.setToken(responseData['accessToken'])
      }
      return responseData['status']
    }))
  }

}
