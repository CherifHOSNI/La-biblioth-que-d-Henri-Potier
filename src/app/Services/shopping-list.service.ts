import {EventEmitter, Injectable} from '@angular/core';
import {Book} from "../Models/book.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  selectedBooks : Book[];
  //evennement emis pour afficher le nombre de livres du panier dans le header
  selectedBooksCount = new EventEmitter<number>();


  constructor() {
    //initialisation des selectedbook = tout les livres
    this.selectedBooks = [];
    this.selectedBooksCount.emit(this.getSelectedBooks().length)
  }

  addBook( b: Book){
    this.selectedBooks.push(b);
    this.selectedBooksCount.emit(this.getSelectedBooks().length)
  }

  deleteBook(b : Book){
    let index = this.selectedBooks.indexOf(b);
    if (index > -1) {
      this.selectedBooks.splice(index, 1);
    }
    this.selectedBooksCount.emit(this.getSelectedBooks().length)
  }

  getSelectedBooks(){
    return this.selectedBooks.slice();
  }

  viderPanier(){
    this.selectedBooks = [];
    this.selectedBooksCount.emit(this.getSelectedBooks().length)
  }

}
