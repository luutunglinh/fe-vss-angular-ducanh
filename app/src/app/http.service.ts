import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('csrf', localStorage.getItem("csrf")!);
  protected options = {
    headers: this.httpHeaders
  };

  login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    let payload = {username: username, password: password}
    this.http.post<any>(`http://localhost:8080/login`, payload, this.options).subscribe((resp) => {
      console.log('resp',resp);
      localStorage.setItem('csrf', resp.token);
    });

  }

}
