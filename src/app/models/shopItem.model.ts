export interface ShopItem {
  id: string
  name: string
  price: number
}

export interface CartItem extends ShopItem {
  quantity: number
}
