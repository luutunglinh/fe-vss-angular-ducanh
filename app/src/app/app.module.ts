import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/content-layout/footer/footer.component';
import { HeaderComponent } from './layout/content-layout/header/header.component';
import { OrderDetailComponent } from './layout/content-layout/order-detail/order-detail.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, OrderDetailComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
