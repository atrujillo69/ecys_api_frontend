import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs/internal/Observable"

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  getAllCourses(){
    const url = 'http//localhost:3000/api/courses'
    return this.http.get(url)
  }
}
