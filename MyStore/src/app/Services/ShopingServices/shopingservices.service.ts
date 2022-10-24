import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShopingservicesService {

  constructor(private httpclint:HttpClient) { }
 shopingcarddURL="http://localhost:3000/cart/"

//CardProducts:any


getAllCardProducts()
{
  if("card" in localStorage)
  {
    return JSON.parse(localStorage.getItem("card")!)
      }

}




deleteProductFromCart(index:any)
{
  let CardProducts =this.getAllCardProducts()
  CardProducts.splice(index,1)
  localStorage.setItem("card",JSON.stringify(CardProducts))
 
}



clearShoppingCart()
{
  let CardProducts =this.getAllCardProducts()
  CardProducts.splice(0)
  localStorage.setItem("card",JSON.stringify(CardProducts))

}



GetAllCarts()
{
  return this.httpclint.get(this.shopingcarddURL)
}
}
