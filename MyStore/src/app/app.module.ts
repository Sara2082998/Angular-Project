import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import{HttpClientModule}from '@angular/common/http';
import { AllProductsComponent } from './Components/All-Products/all-products/all-products.component';
import { ProductDetailsComponent } from './Components/ProductDetails/product-details/product-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './Components/Loading/loading/loading.component';
import { CardComponentComponent } from './Components/Card/card-component/card-component.component';
import { ShoppingCardComponent } from './Components/Shopping/shopping-card/shopping-card.component';
import { SuccessComponent } from './Components/Success/success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    
    LoadingComponent,
    CardComponentComponent,
    ShoppingCardComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
