import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
  loadChildren:() => import('./layout/content-layout/homepage/homepage.module').then((m)=>m.HomepageModule)
  },
  {
    path: 'home',
  loadChildren:() => import('./layout/content-layout/homepage/homepage.module').then((m)=>m.HomepageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./layout/content-layout/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./layout/content-layout/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
