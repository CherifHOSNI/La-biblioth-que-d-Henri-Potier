import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../Services/book.service";
import {Book} from "../Models/book.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList : Book[];
  bookSearch : Book[] = [];

  @Input() keySearch: string;

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      data => {
        this.bookList = data;
        this.bookSearch = data;
      }
    )


    this.bookService.searchKeyWords.subscribe(
      (searchKeyWord: string) => {
        this.bookSearch =this.bookList.filter(b => b.title.toLowerCase().indexOf(searchKeyWord.toLowerCase()) !== -1);
      }
    )
  }

}