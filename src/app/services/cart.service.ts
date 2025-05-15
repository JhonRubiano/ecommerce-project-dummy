import { BehaviorSubject, map } from "rxjs"
import { Injectable } from "@angular/core"
import { CartItem } from "../models/shopItem.model"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([])
  items$ = this.itemsSubject.asObservable()

  get totalQuantity$() {
    return this.items$.pipe(
      map(items => items.reduce((acc,item) => acc + item.quantity,0))
    )
  }

  addItem (item: CartItem) {
    const items = this.itemsSubject.value
    this.itemsSubject.next([...items,item])
  }

  removeItem (index: number) {
    const updated = [...this.itemsSubject.value]
    updated.splice(index, 1)
    this.itemsSubject.next(updated)
  }

  clear () {
    this.itemsSubject.next([])
  }
}
