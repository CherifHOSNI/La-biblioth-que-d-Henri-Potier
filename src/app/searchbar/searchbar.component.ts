import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  constructor(private bookService: BookService) {}

  ngOnInit(): void {}
  onSubmit(searchValue: string): void {
    // mots entrés dans la bare de recherche ensuite captés par le componenets books pour rechercher les livres
    this.bookService.searchKeyWords.emit(searchValue);
  }
}
