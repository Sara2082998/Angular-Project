import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/Services/ProductServices/product-services.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private productserve:ProductServicesService) { }
 allproducts:any
 Loading:boolean=false
 allCategory:any

  ngOnInit(): void {
this.GetAllProducts()
this.getAllCategories()
  }
GetAllProducts()
{
  this.Loading=true
 return this.productserve.GetAllProducts().subscribe((data)=>{
    this.allproducts=data
  
    this.Loading=false     },
    (error)=> {alert(error)
      this.Loading=true }
    )
    ;
}
getAllCategories()
{
  this.productserve.GetAllCategories().subscribe(
    (data) => {this.allCategory = data},
    (error)=> {alert(error)}
    )
 console.log(this.allCategory)
}
getAllProductById(id:any)
{


  if(id==0)
  { this.Loading=true
    return this.productserve.GetAllProducts().subscribe(
      (data) => {this.allproducts = data
        this.Loading=false},
      (error)=> {alert(error)
        this.Loading=true}
      )
      ;
  }
  else{
    this.Loading=true
  return this.productserve.GetAllProductsByCategoryId(id).subscribe(

    (data) => {this.allproducts = data
      this.Loading=false}
    ,
    (error)=> {alert(error)
      this.Loading=true}

    )
    ;
  }
}



CardProducts:any=[]
  addToCard(event:any)
  {
      if("card" in localStorage)
      {
         this.CardProducts=JSON.parse(localStorage.getItem("card")!)

          let found=this.CardProducts.find( (item: { id: any; item:any }) => item.item.id==event.item.id)
           if(found)
           {
            alert("this Product already in Card ")
           }
           else{

             this.CardProducts.push(event)
             localStorage.setItem("card",JSON.stringify(this.CardProducts))
             alert("this Product Successfuly Added To Your Cart")
           }
      }
      else{
        this.CardProducts.push(event)
        localStorage.setItem("card",JSON.stringify(this.CardProducts))
        alert("this Product Successfuly Added To Your Cart")

      }
      console.log(event)
  }

}
