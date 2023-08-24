import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { OrderComponent } from './order/order.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderItemComponent } from './orderitem.component.html/orderitem.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'brand',component: BrandComponent},
  {path:'order',component: OrderComponent},
  {path:'orderitem/:id',component: OrderItemComponent},
  {path:'orderitem',component: OrderItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }