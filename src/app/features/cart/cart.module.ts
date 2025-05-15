import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IonicModule } from "@ionic/angular";
import { CartPage } from "./cart.page";
import { CartPageRoutingModule } from "./cart-routing.module";

@NgModule({
  declarations:[
    CartPage
  ],
  imports:[
    IonicModule,
    CommonModule,
    CartPageRoutingModule
  ]
})
export class CartPageModule{}
