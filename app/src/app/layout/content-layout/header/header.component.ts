import { Component, OnInit } from '@angular/core';
import { navigationList, product } from '../model/product';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  cartItems: number = 0
  navigationList: navigationList[] = [
    {
      category: 'electronics',
      subcategories: ['mobiles', 'laptops'],
    },
    {
      category: 'funiture',
      subcategories: ['chairs', 'tables'],
    },
  ];
  constructor(){

  }

  ngOnInit(): void {


  }
}
