import { BehaviorSubject } from "rxjs"
import { Injectable } from "@angular/core"

export interface CartItem {
  id: string,
  cost: number,
  name: string
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([])
  items$ = this.itemsSubject.asObservable()

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
