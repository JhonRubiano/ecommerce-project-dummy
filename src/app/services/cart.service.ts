import { BehaviorSubject, map } from "rxjs"
import { Injectable } from "@angular/core"
import { CartItem } from "../models/shopItem.model"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([])
  items$ = this.itemsSubject.asObservable()

  getTotalQuantity$() {
    return this.items$.pipe(
      map(items => items.reduce((acc,item) => acc + item.quantity,0))
    )
  }

  addItem (item: CartItem) {
<<<<<<< HEAD
    const items = this.itemsSubject.value;
    this.itemsSubject.next([...items,item])
    console.log("Lista de items :::: ", this.itemsSubject.value);
=======
    const items = this.itemsSubject.value
    const index = items.findIndex( i => i.id === item.id)
    if (index !== -1) {
      items[index].quantity += item.quantity
      this.itemsSubject.next([...items,item])
    } else {
      this.itemsSubject.next([...items,item])
    }
  }

  updateQuantity(index: number, quantity: number) {
    const items = [ ...this.itemsSubject.value ]
    if ( quantity <= 0) {
      items.splice(index, 1)
    } else {
      items[index].quantity = quantity
    }
    this.itemsSubject.next(items)
>>>>>>> origin/main
  }

  removeItem (index: number) {
    const updated = [...this.itemsSubject.value]
    updated.splice(index, 1)
    this.itemsSubject.next(updated)
  }

  clear () {
    this.itemsSubject.next([])
  }

  getTotalPrice () {
    return this.itemsSubject.pipe(
      map(items => items.reduce((acc,{price,quantity})=>acc + (price * quantity),0))
    )
  }
}
