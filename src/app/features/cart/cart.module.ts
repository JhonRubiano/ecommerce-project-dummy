import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CartPage } from "./cart.page";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    CartPage
  ],
  imports:[
    CommonModule,
    IonicModule
  ],
  exports:[
    CartPage
  ]
})
export class CartPageModule{}
