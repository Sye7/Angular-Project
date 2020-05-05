import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor(private http:HttpClient) { }

  executeJWTAuth(username, password)
  {
      return this.http.post<any>(

        "http://localhost:8080/authenticate",{
          username,
          password
        }).pipe(

          map(
            data=>{
              sessionStorage.setItem("authenticaterUser", username);
              sessionStorage.setItem("token", `Bearer ${data.token}`);
              return data;
            }
          )
        );
  }


  getAuthenticatedUser()
  {
    return sessionStorage.getItem("authenticaterUser");
  }

  getAuthenticatedToken()
  {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem("token");

  }
  isUserLogin()
  {
     let user = sessionStorage.getItem("authenticaterUser")
     return !(user===null);

  }

  logout(){
    sessionStorage.removeItem("authenticaterUser")
    sessionStorage.removeItem("token")
  }


  // authenticate(username, password)
  // {
  
  //   if(username === "yasir" && password === "Yasir@123")
  //     {
  //       sessionStorage.setItem("sessionUser", username);
  //       return true;
  //     }
  
  //   return false;
  // }

  }
