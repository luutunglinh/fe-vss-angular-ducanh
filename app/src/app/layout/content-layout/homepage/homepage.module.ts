import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { ListComponent } from './product/list/list.component';

@NgModule({
  declarations:[HomepageComponent, ListComponent],
  imports: [CommonModule, HomepageRoutingModule],
})
export class HomepageModule {}
