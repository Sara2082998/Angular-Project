import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  CardProducts:any=[]
length:any
  ngOnInit(): void {
    this.getDataFromLocalDtorage()
  }

  getDataFromLocalDtorage()
  {
    if("card" in localStorage)
    {
      this.CardProducts=JSON.parse(localStorage.getItem("card")!)
    }
     this.length = this.CardProducts.length
     return  this.length
  }


}
