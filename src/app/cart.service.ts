import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  private items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }

}