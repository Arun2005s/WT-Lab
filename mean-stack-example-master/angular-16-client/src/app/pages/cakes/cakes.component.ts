import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent {
  cakes = [
    { title: 'Black Forest', price: 600, image: 'assets/blackforest.jpg' },
    { title: 'Tiramisu', price: 800, image: 'assets/tiramisu.avif' },
    { title: 'Cheese Cake', price: 400, image: 'assets/cheesecake.jpeg' },
    { title: 'Red Velvet', price: 550, image: 'assets/redvelvet.jpeg' },
    { title: 'Carrot Cake', price: 50, image: 'assets/carrotcake.jpg' },
    { title: 'Pavlova Cake', price: 85, image: 'assets/pavlova.jpeg' },
    { title: 'Lamington Cake', price: 450, image: 'assets/lamingtons.jpg' },
    { title: 'Pancake', price: 100, image: 'assets/pancakes.jpg' },
  ];

  constructor(private cartService: CartService) { }

  addToCart(cake: any) {
    this.cartService.addToCart(cake);
    alert(`${cake.title} added to cart!`);
  }
}
