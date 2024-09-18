import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = "";
  password: string = "";

  login() {
    let myPassword: string = "testpass123", myEmail: string = "testaccount@gmail.com";
    if (this.email == myEmail && this.password){
      console.log("Login Successful!");
    }else{
      console.log("Invalid Email or Password!")
    }
  }
}
