import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ShopPage } from './shop.page';
import { ShopPageRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShopPageRoutingModule
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
