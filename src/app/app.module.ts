import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifierModule } from 'angular-notifier';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BooksComponent } from './books/books.component';
import { ChariotComponent } from './chariot/chariot.component';
import { BookdetailsComponent } from './books/bookdetails/bookdetails.component';
import { BookService } from './Services/book.service';
import { ShoppingListService } from './Services/shopping-list.service';
import { PromotionService } from './Services/promotion.service';
import { BookComponent } from './books/book/book.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'lib', component: BooksComponent },
  { path: 'panier', component: ChariotComponent },
  { path: 'bookdetails/:isbn', component: BookdetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    BooksComponent,
    ChariotComponent,
    BookdetailsComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NotifierModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [BookService, ShoppingListService, PromotionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
