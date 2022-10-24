import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './Components/All-Products/all-products/all-products.component';

import { ProductDetailsComponent } from './Components/ProductDetails/product-details/product-details.component';
import { ShoppingCardComponent } from './Components/Shopping/shopping-card/shopping-card.component';
import { SuccessComponent } from './Components/Success/success/success.component';

const routes: Routes = [
 
  {path:"Products" , component:AllProductsComponent},
  {path:"productdetails/:id",component:ProductDetailsComponent},
  {path:"shopping" ,component:ShoppingCardComponent},
  {path:"success",component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
