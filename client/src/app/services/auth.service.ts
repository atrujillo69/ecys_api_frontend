import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { UserInterface } from "models/user-interface";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  registerUser(Ra:number, name: string, lastname:string, email: string, password: string) {
    const url_api = "http://localhost:3000/api/Users";
    return this.htttp
      .post<UserInterface>(
        url_api,
        {
          Ra: Ra,
          name: name,
          lastname: lastname,
          email: email,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }
}

