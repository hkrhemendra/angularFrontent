import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }

  onSubmit(){
      if(this.loginForm.valid){
        this.auth.login(this.loginForm.value).subscribe(responseData => {
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
