import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../Models/book.model';
import { ShoppingListService } from '../../Services/shopping-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private shoppingList: ShoppingListService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

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
