import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CartService } from '../../services/cart.service';  

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems = this.cartService.getCartItems(); 

  constructor(private cartService: CartService, private router: Router) {}

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getCartItems(); 
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems(); 
  }

  proceedToCheckout() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems)); 
    this.router.navigate(['/checkout']); 
  }
}
