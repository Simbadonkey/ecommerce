import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,
            RouterLink,
            NgbModule,
  ],
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit{


  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  //new properties for paginattion
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string = "";
  

  constructor(private productService: ProductService,
              private route: ActivatedRoute){

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
    
  }


  listProducts() {
    
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchProducts();
    }
    else{
      this.handleListProducts();
    }

    
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;


    //if we have a different keyword than previous
    //then set thePageNumber to 1

    if (this.previousKeyword != theKeyword){
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;
    
    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    //now search for the products using keyword
    this.productService.searchProductPaginate(this.thePageNumber - 1,
                                              this.thePageSize,
                                              theKeyword)
                                              .subscribe(this.processResult());
  }


  handleListProducts() {

    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      //get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId =+this.route.snapshot.paramMap.get('id')!;
    }
    else{
      //no category id available ... default to 1
      this.currentCategoryId = 1;
    }



    //
    //check if we have a different category than previous
    //Note: angular will reuse a component if it is currently being viewed
    //
    //if we have a different category id than previous, then set thePageNumber back to 1
    if (this.previousCategoryId != this.currentCategoryId){
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;
    
    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    //now get the products for the given category id
    //note: for data, left-hand side are propertied defined in this class, right-hand side is data from Spring Data REST JSON
    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               this.currentCategoryId)
                                               .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }


  processResult(){
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }
}
