import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductCategoryMenu } from './components/product-category-menu/product-category-menu';
import { Search } from './components/search/search';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatus } from './components/cart-status/cart-status';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            ProductCategoryMenu,
            Search,
            NgbModule,
            CartStatus,
            RouterLink,
            ReactiveFormsModule],
  providers: [ProductService,
              HttpClient,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
