import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem, CartService } from "./cart.service";
@Component({
  selector:'app-cart',
  templateUrl:'./cart.page.html',
  standalone: false
})
export class CartPage implements OnInit{
  items$: Observable<CartItem[]> = this.cartService.items$

  constructor (
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.items$ = this.cartService.items$
  }
}
