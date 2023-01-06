import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart, product } from './model/product';
import { user } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  carts:any = []
  check:boolean = true;
  cartProducts:any = [];
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
  getProductDetail(id:any){
    return this.http.get<product>(`http://localhost:8080/product/`+id);
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

  addToCart(cart:any){
    // console.log(cart ,"service");
    // this.carts = cart
    this.check = true;
    for (let item of this.carts){
      if(item[0] == cart[0] ){
        this.check = false;
        item[1]++;
      }
    }
    if (this.check == true ){
      this.carts.push(cart);
    }

  }
  

  

}
