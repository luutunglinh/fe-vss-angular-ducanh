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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
