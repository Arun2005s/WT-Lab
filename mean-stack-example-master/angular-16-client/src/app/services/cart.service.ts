import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  // Add item to cart
  addToCart(item: any) {
    // Check if item already exists (using both title and price for unique identification)
    const existingItem = this.cartItems.find(cartItem => cartItem.title === item.title && cartItem.price === item.price);
    
    if (existingItem) {
      // If the item exists, increment the quantity
      existingItem.quantity += 1;
    } else {
      // If the item doesn't exist, add the item with quantity set to 1
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  // Get all cart items
  getCartItems() {
    return this.cartItems;
  }

  // Remove item
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  // Clear cart
  clearCart() {
    this.cartItems = [];
  }
}
