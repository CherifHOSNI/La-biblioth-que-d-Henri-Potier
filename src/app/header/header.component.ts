import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';
import { ShoppingListService } from '../Services/shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // nombre de livres dans le panier
  count = 0;

  constructor(
    private bookService: BookService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    // mettre a jour le compteur des livres dans le panier
    this.shoppingListService.selectedBooksCount.subscribe((count: number) => {
      this.count = count;
    });
  }

  onSubmit(searchValue: string): void {
    // mots entrés dans la bare de recherche ensuite captés par le componenets books pour rechercher les livres
    this.bookService.searchKeyWords.emit(searchValue);
  }
}
