import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { SuggestedProduct } from '../model/product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products:any = [];
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    {
      banerimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'laptop',
      },
    },
    {
      banerimage: 'Baner/Baner_Chair.png',
      category: {
        id: 0,
        category: 'funiture',
        subcategory: 'chairs',
      },
    },
  ];
  


  constructor(private productService : ProductService) {}
  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(data);
        
      }
    );
    throw new Error('Method not implemented.');
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