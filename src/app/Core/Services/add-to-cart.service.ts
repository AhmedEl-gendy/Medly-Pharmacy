import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  private selectedItems: any[] = [];

  setItems(items: any[]): void {
    this.selectedItems = items;
  }

  getItems(): any[] {
    return this.selectedItems;
  }

}
