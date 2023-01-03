import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './model/product';
import { user } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  protected options = {
    headers: this.httpHeaders
  };

  login(username: string, password: string) {
    let payload = { username: username, password: password };
    var message = '';
    this.http.post<any>(`http://localhost:8080/login`, payload, this.options).subscribe(
      res => {
        localStorage.setItem("csrf", res.token);
      }
    );
  }


  getProducts() {
    return this.http.get<product[]>(`http://localhost:8080/product/`)
  }

  getUsers() {
    let users: user[] = []
    this.http.get<user[]>(`http://localhost:8080/user/`).subscribe(
      res => {
        users = res;
        console.log(users);
      });
    console.log('----------', users);
    return users;
  }
}
