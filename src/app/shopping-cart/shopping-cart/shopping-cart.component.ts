import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productList: any = [];

  constructor(
    private dataService: DataService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.productList = this.dataService.sharedData;
  }

  backToList(){
    this.route.navigate(['/product-list']);
  }

}
