import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { FeaturePageRoutingModule } from "./features-routing.module";

import { FeaturePage } from "./features.page";

@NgModule({
  imports:[
    IonicModule,
    CommonModule,
    // FormsModule,
    FeaturePageRoutingModule
  ],
  declarations:[
    FeaturePage
  ]
})
export class FeatureModule{}
