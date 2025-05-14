import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem, CartService } from "./cart.service";

export class CartComponent implements OnInit{
  items$: Observable<CartItem[]>

  constructor (
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.items$ = this.cartService.items$
  }
}
