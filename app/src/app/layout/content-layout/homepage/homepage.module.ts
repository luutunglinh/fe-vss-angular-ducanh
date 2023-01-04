import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations:[HomepageComponent, ProductListComponent],
  imports: [CommonModule, HomepageRoutingModule],

})
export class HomepageModule {}
