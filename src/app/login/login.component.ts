import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = ""
  password = ""
  isInvalid = false;
  invalidLogin = "Invalid Login"

  constructor(private router: Router, // using service
    private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit(): void {
  }


  loginUser() {

    this.hardcodedAuthService.executeJWTAuth(this.userName, this.password).subscribe(

      data => {
        this.isInvalid = false;
        this.router.navigate(["welcome", this.userName]);

      }, error => {
        this.isInvalid = true;
      }
    )

   
  }

  // loginUser()
  // {

  //   if(this.hardcodedAuthService.(this.userName, this.password))
  //     {
  //       this.isInvalid = false;
  //       this.router.navigate(["welcome",this.userName]);
  //     }

  //     else
  //       this.isInvalid = true;
  // }

}
