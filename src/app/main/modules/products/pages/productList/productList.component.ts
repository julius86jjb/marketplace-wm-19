import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    RouterModule,
    ProductCardComponent
  ],
  templateUrl: './productList.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductListComponent {

  productService = inject(ProductsService);

  productsResource = this.productService.productsResource;


}
