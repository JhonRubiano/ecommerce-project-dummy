import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { cart, pricetag, qrCode } from 'ionicons/icons';
import { CartFacade } from '../services/facades/cart.facade';

@Component({
  selector: 'app-features',
  templateUrl: 'features.page.html',
  styleUrls: ['features.page.scss'],
  standalone: false,
})
export class FeaturePage{
  totalQuantity$ = this.cartFacade.totalQuantity$

  constructor(private cartFacade: CartFacade) {}
}
