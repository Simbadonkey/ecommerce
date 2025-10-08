import { Component, OnInit } from '@angular/core';
import { Cart } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-status',
  imports: [CommonModule,
            RouterLink
  ],
  templateUrl: './cart-status.html',
  styleUrl: './cart-status.css'
})
export class CartStatus implements OnInit{

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService : Cart){
    
  }

  ngOnInit(): void {
    this.updateCartStatus();
  }


  updateCartStatus() {
    // subscribe to the cart servie: total price and total quantity
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }
}
