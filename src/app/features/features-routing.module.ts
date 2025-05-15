import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturePage } from './features.page';

const routes: Routes = [
  {
    path: 'features',
    component: FeaturePage,
    children: [
      {
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('./qr/qr.module').then(m => m.QrPageModule)
      },
      {
        path: '',
        redirectTo: '/features/shop',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/features/shop',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturePageRoutingModule {}
