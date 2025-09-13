import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { HttpClient, withFetch} from '@angular/common/http';
import { ProductService } from './service/product.service';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            ProductList,
            CommonModule],
  providers: [ProductService,
              HttpClient,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
