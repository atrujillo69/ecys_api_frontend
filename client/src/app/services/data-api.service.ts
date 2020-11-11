import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  getAllCourses(){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNhcm5ldCI6MjAxNjAyNzM0LCJub21icmVzIjoiQWxlamFuZHJvIiwiYXBlbGxpZG9zIjoiQmFycmlvcyIsImNvcnJlbyI6IjMwMDExNjEwMTAxMDFAaW5nZW5pZXJpYS51c2FjLmVkdS5ndCJ9LCJpYXQiOjE2MDQ5ODUwNjl9.RL7CkuiBkqz0me4gWKfFD41byqTO9JSLtPVG6633Nrk");
    const url = 'http://localhost:3000/api/courses' 
    return this.http.get(url, {
      headers: headers
    });
  }
}
