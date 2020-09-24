import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../Models/book.model';
import { BookService } from '../../Services/book.service';
import { ShoppingListService } from '../../Services/shopping-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],
})
export class BookdetailsComponent implements OnInit {
  public book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private shoppingList: ShoppingListService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.book = data.find(
        (element) => element.isbn === this.route.snapshot.params.isbn
      );
    });
  }

  ajoutAchat(): void {
    this.shoppingList.addBook(this.book);
    this.showToaster();
  }
  showToaster(): void {
    this.toastr.success(
      'Le livre ' + this.book.title + ' a été ajouté au panier'
    );
  }
}
