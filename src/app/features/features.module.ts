import { NgModule } from "@angular/core";
import { CartPageModule } from "./cart/cart.module";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FeaturePageRoutingModule } from "./features-routing.module";

@NgModule({
  imports:[
    CommonModule,
    FeaturePageRoutingModule,
    CartPageModule,
    IonicModule
  ]
})
export class FeatureModule{}
