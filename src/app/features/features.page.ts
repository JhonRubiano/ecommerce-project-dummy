import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { cart, pricetag, qrCode } from 'ionicons/icons';

@Component({
  selector: 'app-features',
  templateUrl: 'features.page.html',
  styleUrls: ['features.page.scss'],
  standalone: false,
})
export class FeaturePage implements OnInit{
  cartCount = 0;

  constructor() {}

  ngOnInit() {
    this.cartCount = 0;
  }
}
