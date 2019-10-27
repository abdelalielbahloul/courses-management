import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  }

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  sign_in(){
    // console.log(this.user.email);
    this.authService._login(this.user)
      .subscribe( res => {
        console.log(res);
        
      }, err => {
        console.log(err);
        
      })
    
  }

}
