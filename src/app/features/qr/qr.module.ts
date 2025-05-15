import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { QrPage } from './qr.page';
import { QrPageRoutingModule } from './qr-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    QrPageRoutingModule
  ],
  declarations: [QrPage]
})
export class QrPageModule {}
