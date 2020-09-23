import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppComponent} from "../app.component";


describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
  });

/*  it(`should books to be type of Observable'`, () => {
    let result = service.getBooks()
    expect(result).to;
  });*/

});
