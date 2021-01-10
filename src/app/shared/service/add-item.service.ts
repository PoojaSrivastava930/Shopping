import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  private subjectItem = new Subject<any>();

  constructor() { }

  sendAddedItem() {
    this.subjectItem.next();
  }

  getAddedItem(): Observable<any> {
    return this.subjectItem.asObservable();
  }
}
