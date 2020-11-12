import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndifined } from "util";
import { UserInterface } from '../models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url = "http://localhost:3000/api";

  constructor(private htttp: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
    "content-type": "aplication/json"
  });

  registerUser(user: UserInterface){
    return this.htttp.post(`${this.url}/user/register`,user); 
  }

  loginUser(carnet: number, contraseña: string): Observable<any> {
    const url = "http://localhost:3000/api/user/login?include=user";
    return this.htttp.post<UserInterface>(
      url,
      { carnet: carnet, contraseña: contraseña },
      { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string)
  }
  
  setToken(token): void {
    localStorage.setItem("accessToken", token)
  }

  getToken() {
    return localStorage.getItem("accessToken")
  }

  getCurrentUser(): UserInterface{
    let user_string = localStorage.getItem('currentUser')
    if(!isNullOrUndifined(user_string)){
      let user: UserInterface = JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.post<UserInterface>(url, { headers: this.headers });
  }
}
