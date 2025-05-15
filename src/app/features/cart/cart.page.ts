import { Component, OnInit } from "@angular/core";
import { CartFacade } from "src/app/services/facades/cart.facade";

@Component({
  selector:'app-cart',
  templateUrl:'./cart.page.html',
  standalone: false
})
export class CartPage implements OnInit{
  items$ = this.cartFacade.items$
  total$ = this.cartFacade.totalPrice$

  constructor (
    private cartFacade: CartFacade
  ){}

  ngOnInit(): void {
    this.cartFacade.add({
      id: '1',
      name: 'Camiseta',
      price: 20000,
      quantity: 5
    })
    this.cartFacade.add({
      id: '4',
      name: 'Camiseta Deportiva',
      price: 45000,
      quantity: 1
    })
  }

  updateQuantity( index: number, quantity: number ) {
    this.cartFacade.update(index,quantity)
  }

  removeProduct (index: number) {
    this.cartFacade.remove(index)
  }

  clearCart () {
    this.cartFacade.clear()
  }

}
