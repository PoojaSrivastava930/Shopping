import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 sharedData: any = [];
 cartData: any = [];
 dataIndex: any = this.sharedData.length;
  constructor() { }

  sharedDataInput(){
    this.dataIndex = this.sharedData.length;
    console.log('data show', this.sharedData);
    console.log('data dataIndex', this.dataIndex);
    return this.dataIndex
  }
}
