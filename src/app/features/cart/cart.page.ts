import { Component, OnInit } from "@angular/core";
import { CartFacade } from "src/app/services/facades/cart.facade";

@Component({
  selector:'app-cart',
  templateUrl:'./cart.page.html',
  standalone: false
})
export class CartPage implements OnInit{
  items$ = this.cartFacade.items$

  constructor (
    private cartFacade: CartFacade
  ){}

  ngOnInit(): void {
    this.cartFacade.add({
      id: '1',
      name: 'Camiseta',
      price: 20000,
      quantity: 1
    })
  }

  remove (index: number) {
    this.cartFacade.remove(index)
  }

  clear () {
    this.cartFacade.clear()
  }

}
