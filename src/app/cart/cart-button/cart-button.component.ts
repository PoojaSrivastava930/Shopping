import { DataService } from './../../shared/service/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductComponent } from 'src/app/ProductList/product-list/product/product.component';
import { AddItemService } from 'src/app/shared/service/add-item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {

  cartItem: any = 0;
  clickEventsubscription: Subscription;
 @Input() itemList: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private dataService: DataService,
    private addItemService: AddItemService,
  ) {
    this.clickEventsubscription = this.addItemService.getAddedItem().subscribe(() => {
      this.cartIndex();
    });
   }

  ngOnInit(): void {
    console.log('show itemList', this.dataService.sharedData.length);
  //  this.cartIndex();
  }

  cartIndex(){
    console.log('reached');
    this.cartItem =  this.dataService.sharedDataInput() + 1;
    console.log('length', this.dataService.sharedDataInput())
    console.log('cartItem',  this.cartItem);

    return this.cartIndex
  }

  addItem(){
   this.route.navigate(['/shopping-cart', this.itemList]);
  }

}
