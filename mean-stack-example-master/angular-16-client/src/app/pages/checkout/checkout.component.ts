import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: any[] = [];
  grandTotal: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Load cart data from localStorage
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      this.calculateTotal();
    }
  }

  // Calculate the total amount for the cart
  calculateTotal() {
    this.grandTotal = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Handle the checkout form submission
  submitCheckoutForm(form: any) {
    const name = form.value.name;

    // Simulate order processing (you can add real processing logic here)
    alert(`Thank you, Sir! Your order has been placed successfully.`);
    
    // Clear the cart after order is placed
    localStorage.removeItem('cart');
    // Redirect to the thank you page or another page
    window.location.href = '/thankyou';  // You can change this to the route for the thank you page
  }
}
