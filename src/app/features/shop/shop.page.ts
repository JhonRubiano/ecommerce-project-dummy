import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { CartFacade } from 'src/app/services/facades/cart.facade';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: false
})
export class ShopPage implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;
  categories: any[] = [];
  products: any[] = [];
  selectedProduct: any = null;
  isModalOpen: boolean = false;
  categorySelected: string = '';
  private routerSub: Subscription | undefined;
  private swiperInstance: Swiper | undefined;

  constructor(
    private cartFacade: CartFacade,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productsService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  ngOnInit(): void {    
    this.routerSub = this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      if (event.urlAfterRedirects === '/features/shop') {
        this.getProducts(this.categorySelected);
      }
    }
  });
  }
  
  ngAfterViewInit() {
    const swiperEl = this.swiperEl.nativeElement;
    const tryActivateSwiper = () => {
      if (swiperEl?.swiper) {
        this.swiperInstance = swiperEl.swiper;
        this.swiperInstance?.update();
        this.swiperInstance?.autoplay?.start();
        this.swiperInstance?.slideTo(0, 0); 
        setTimeout(() => {
          this.swiperInstance?.autoplay?.start();
        }, 100);
      } else {
        setTimeout(tryActivateSwiper, 100);
      }
    };
    tryActivateSwiper();
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
    }
  }

  addToCart(productToAdd: any) {
    this.products.map((product) => {
      if(productToAdd.id === product.id) {
        product.selected = true;
        product.quantity = this.cartFacade.obtainQuantityById(product.id)+1;
        this.cartFacade.add(product);
      }
    });
  }

  trackByCategoryId(index: number, category: any): number {
    return category.id;
  }

  getProducts(id: string) {
    this.categorySelected = id;
    if(this.categorySelected) {
      this.productsService.getProductsByCategory(id).subscribe((response) => {
        const productsToShow = response.map((product: any) => {
          const savedProduct = this.cartFacade.getProductById(product.id);
          if(savedProduct) {
            product = savedProduct? savedProduct : product;
          } else {
            product.quantity = 0;
            product.selected = false;
          }
          return product;
        });
        this.products = productsToShow;        
        if (this.swiperInstance) {
          this.swiperInstance.update();
          this.swiperInstance.autoplay.start();
        }
      });
    }
  }

  async openModal(product: any) {
    if(product.quantity === 0) {
      this.addToCart(product);
    }
    this.selectedProduct = this.cartFacade.getProductById(product.id);
    this.isModalOpen = true;
  }

  onModalDismiss() {
    this.isModalOpen = false;
    this.selectedProduct = null;
  }

  updateQuantity(id:string, quantity: number) {
    this.selectedProduct.quantity = quantity;
    this.cartFacade.update(this.cartFacade.getIndexById(id), quantity)
  }

  removeProduct (id: string) {
    this.selectedProduct = null;
    this.cartFacade.remove(this.cartFacade.getIndexById(id));
    this.products.map((product) => {
      product.quantity = 0;
      product.selected = false;
    });
    this.onModalDismiss();
  }
}