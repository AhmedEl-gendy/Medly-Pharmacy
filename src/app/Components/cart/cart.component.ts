import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/Core/Services/add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  selectedItems: any[] = [];

  constructor(private addToCartService: AddToCartService) { }

  ngOnInit(): void {
    this.selectedItems = this.addToCartService.getItems();

  }

  // quantityAdded:number = 0;

  addToCart(item: any) {
    if (item.quantityAdded < item.quantity) {
      item.quantityAdded++;

    }
  }

  removeFromCart(item: any) {
    if (item.quantityAdded > 0 ) {
      item.quantityAdded--;
    }
  }


}
