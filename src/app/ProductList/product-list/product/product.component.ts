import { AddItemService } from './../../../shared/service/add-item.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { CartButtonComponent } from 'src/app/cart/cart-button/cart-button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productList:any=[];
  clickEventsubscription: Subscription;


  constructor(
    private dataService: DataService,
    private addItemService: AddItemService,
  ) { 
  
  }

  ngOnInit(): void {
  }

  addItem(product) {
  //  this.dataService.sharedDataInput();
  this.addItemService.sendAddedItem();
   this.dataService.sharedData.push(product);
  // this.cartButtonComponent.cartIndex();
   }
}
