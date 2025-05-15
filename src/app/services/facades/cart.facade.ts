import { Injectable } from "@angular/core";
import { CartService } from "../cart.service";
import { CartItem } from "../../models/shopItem.model";


@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  items$ = this.cartService.items$
  totalQuantity$ = this.cartService.getTotalQuantity$()

  constructor (private cartService: CartService) {}

  add (item: CartItem) {
    this.cartService.addItem(item)
  }

  update ( index: number, quantity:number ) {
    this.cartService.updateQuantity(index, quantity)
  }

  remove (index: number) {
    this.cartService.removeItem(index)
  }
  clear () {
    this.cartService.clear()
  }
}
