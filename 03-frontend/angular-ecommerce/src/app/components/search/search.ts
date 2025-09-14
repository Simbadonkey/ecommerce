import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  // inject the router to this component
  constructor(private router: Router){}

  doSearch(value: string) {
    console.log(`value=${value}`);

    //call the router search for the given keyword
    //route the data to "search" route. it will be handled by the ProductList
    this.router.navigateByUrl(`/search/${value}`);
  }

}
