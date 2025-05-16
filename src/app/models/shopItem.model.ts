export interface ShopItem {
  id: string
  title: string
  price: number
  images: string[]
}

export interface CartItem extends ShopItem {
  quantity: number
}
