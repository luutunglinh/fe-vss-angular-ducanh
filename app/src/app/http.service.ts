import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('csrf', localStorage.getItem("csrf")!).set('Accept', '*/*').set('Sec-Fetch-Site', 'none');
  protected options = {
    headers: this.httpHeaders
  };

  login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    this.http.post<any>(`http://localhost:8080/login`, body, this.options).subscribe(resp => {
      console.log('resp', resp);

      localStorage.setItem("csrf", resp.headers.get('csrf'));
    });

  }

}
