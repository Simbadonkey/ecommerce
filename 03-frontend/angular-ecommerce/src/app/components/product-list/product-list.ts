import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list-table.html',
  //templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductService){

  }


  ngOnInit(): void {
    this.listProducts();
  }


  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
}
