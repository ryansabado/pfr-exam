import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl + "users");
  }

  getTitles(id:any){
    return this.http.get(this.baseUrl + `users/${id}/posts`);
  }

  getBody(id:any){
    return this.http.get(this.baseUrl + `posts/${id}`);
  }


}
