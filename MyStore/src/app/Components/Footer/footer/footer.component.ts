
import { Component,EventEmitter, Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() data:any={}
  @Output() public item=new EventEmitter()
  addButton:boolean=true
  amount:number=1
  constructor() { }

  ngOnInit(): void {
  }
  addproduct()
{
  if(this.amount<1){
    this.amount=1
    this.item.emit({item:this.data,quantity:this.amount})
  }
  else
  {
    this.item.emit({item:this.data,quantity:this.amount})
  }
}

}
