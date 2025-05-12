// cookies.component.ts
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';  // Make sure to import CartService

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent {
  
  cookies = [
    { title: 'Chocochip cookies', price: '120', image: 'assets/chocochips.jpeg' },
    { title: 'Macarons', price: '160', image: 'assets/macarons.jpg' },
    { title: 'Gingerbread cookies', price: '180', image: 'assets/gingerbread.jpg' },
    { title: 'Biscotti Cookies', price: '150', image: 'assets/biscotti.jpeg' },
    { title: 'Butter cookies', price: '20', image: 'assets/buttercookies.jpg' },
    { title: 'SnickerDoodle cookies', price: '120', image: 'assets/snicker.jpeg' },
    { title: 'Thumbprint cookies', price: '100', image: 'assets/thumbprint.jpg' },
    { title: 'Black and White cookies', price: '150', image: 'assets/blackandwhite.jpg' }
  ];

  constructor(private cartService: CartService) {}

  // Method to add items to the cart
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
