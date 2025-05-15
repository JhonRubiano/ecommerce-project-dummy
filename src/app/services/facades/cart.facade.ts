import { Injectable } from "@angular/core";
import { CartService } from "../cart.service";
import { CartItem } from "../../models/shopItem.model";


@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  items$ = this.cartService.items$
  totalQuantity$ = this.cartService.totalQuantity$

  constructor (private cartService: CartService) {}

  add (item: CartItem) {
    this.cartService.addItem(item)
  }

  remove (index: number) {
    this.cartService.removeItem(index)
  }
  clear () {
    this.cartService.clear()
  }
}
