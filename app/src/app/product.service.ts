import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "localhost:8080/product/";
  
  // private searchUrl = "http://localhost:8080/api/products/search/findByNameContaining?keyword=";

  constructor(private httpClient : HttpClient) { }

  getProductList()  {
    return this.httpClient.get('localhost:8080/product/');
  }
  
}

interface Product{
  id : number,
  code: string,
  description: string,
  image:string,
  price:number,
  quantity:number,
  type:number

}
interface GetProductResponse {
  _embedded : {
    products : Product[];
  }
}