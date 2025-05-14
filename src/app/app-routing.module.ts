import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FeaturePage } from './features/features.page';

const routes: Routes = [
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then( m => m.FeatureModule)
  },
  {
      path: '',
      redirectTo: 'features',
      pathMatch: 'full'
  },
  {
    path: 'features',
      component: FeaturePage,
      children:[
        {
          path:'cart',
          loadChildren: () => import('./features/cart/cart.module').then(m=>m.CartPageModule)
        },
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
