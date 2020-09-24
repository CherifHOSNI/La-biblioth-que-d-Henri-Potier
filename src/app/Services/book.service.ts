import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../Models/book.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // titre entré dans la bare de recherche
  searchKeyWords = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://henri-potier.xebia.fr/books');
  }
}
