import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { CartItem } from 'src/app/models/shopItem.model';
import { CartFacade } from 'src/app/services/facades/cart.facade';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: false
})
export class ShopPage implements AfterViewInit{
  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;
  categories: any[] = [];
  products: any[] = [];

  constructor(
    private cartFacade: CartFacade,
    private productsService: ProductsService
  ) {
    this.productsService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }
  
  ngAfterViewInit() {
    const swiperEl = this.swiperEl.nativeElement;
    const tryActivateSwiper = () => {
      const swiperInstance = swiperEl?.swiper;
      if (swiperInstance) {
        swiperInstance.slideTo(1, 0); 
        setTimeout(() => {
          swiperInstance.autoplay?.start();
        }, 100);
      } else {
        setTimeout(tryActivateSwiper, 100);
      }
    };
    tryActivateSwiper();
  }

  addToCart(producto: any) {
    this.products.map((product) => {
      if(producto.id === product.id) {
        product.selected = true;
      }
    });
    this.cartFacade.add(producto);
  }

  trackByCategoryId(index: number, category: any): number {
    return category.id;
  }

  getProducts(id: string) {
    this.productsService.getProductsByCategory(id).subscribe((response) => {
      this.products = response;
      this.products.map((product) => {
        product.selected = false;
      });
    });
  }
}