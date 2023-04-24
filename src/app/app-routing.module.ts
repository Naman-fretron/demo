import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: 'counter', loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule)},
  {path: 'product', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
