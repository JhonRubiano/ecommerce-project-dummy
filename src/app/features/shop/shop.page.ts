import { Component } from "@angular/core";
import { CartItem } from "src/app/models/shopItem.model";
import { CartFacade } from "src/app/services/facades/cart.facade";

@Component({
  selector:'app-shop',
  templateUrl:'./shop.page.html',
  standalone:false
})
export class ShopPage{
  constructor( private cartFacade: CartFacade){}
  addToCart(product: CartItem) {
    this.cartFacade.add(product)
  }
}
