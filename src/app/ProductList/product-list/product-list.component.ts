import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // @Input() productList:any=[];

  // @Output() addItemList = new EventEmitter();

  cartItemList: any = [];
  title = 'shopping';
  productList : any = [
    {
      brand: 'LEVERET',
      name: "Krishna Creation Analogue Dial Men's and Boys' Watch (Pack of 2)'",
      img: 'https://m.media-amazon.com/images/I/71Auk4li+RL._AC_UL320_.jpg'
    },
    {
      brand: 'LEVERET',
      name: 'New Unique Standard Black Attractive Choice Stainless Still',
      img: 'https://m.media-amazon.com/images/I/61G0cAjLB4L._AC_UL320_.jpg'
    },
    {
      brand: 'TIMEWEAR',
      name: "Men's Watch (Brown Colored Strap)",
      img: 'https://m.media-amazon.com/images/I/81+d6eSA0eL._AC_UL320_.jpg'
    }

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  
  onAddItem(items: any){
    console.log('added items are:', items);
    this.cartItemList.push(items);
    console.log('cartItemList', this.cartItemList);
  }

}
