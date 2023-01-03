import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private http: HttpService, private router: Router) { }

  products: product[] = [];

  ngOnInit() {
    this.products = this.http.getProducts();
    console.log('component', this.products);
  }
}
