import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(formData:FormData) {
    console.log("login: ", formData);
    this.http.post<any>(`http://localhost:8080/login`, formData).subscribe(resp => {
      localStorage.setItem("token", resp.headers.get('csrf'));
      console.log(resp.headers.get('csrf'));
    });
  }
}
