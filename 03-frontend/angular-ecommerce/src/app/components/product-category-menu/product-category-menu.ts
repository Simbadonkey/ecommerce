import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category-menu',
  imports: [
            RouterLink, 
            RouterLinkActive,
            CommonModule],
  templateUrl: './product-category-menu.html',
  styleUrl: './product-category-menu.css'
})
export class ProductCategoryMenu implements OnInit {

  productCategories: ProductCategory[] = [];

  constructor(private productService : ProductService
             ){}

  ngOnInit() : void{
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }

}
