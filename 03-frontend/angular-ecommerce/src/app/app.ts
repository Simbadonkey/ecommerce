import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ProductService } from './service/product.service';
import { ProductCategoryMenu } from './components/product-category-menu/product-category-menu';
import { Search } from './components/search/search';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            ProductCategoryMenu,
            Search],
  providers: [ProductService,
              HttpClient,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
