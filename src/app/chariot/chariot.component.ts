import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../Services/shopping-list.service";
import {PromotionService} from '../Services/promotion.service'
import {Book} from "../Models/book.model";
import { ToastrService } from 'ngx-toastr';
import {BookService} from "../Services/book.service";

@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})

export class ChariotComponent implements OnInit {

  //enlever les livres selectionnés plusieurs fois dans l'affichage
  uniqListArticle : Book[] = [];
  //calcul occurences des livres
  count : number[];
  //suggestion des livres similaires
  similairBooks : Book[] = [];
  PrixTotal : number;
  Remise : number;
  Remise : number;

  constructor(private shoppingList : ShoppingListService,
              private promotionService: PromotionService,
              private toastr: ToastrService,
              private bookService: BookService) {}

  ngOnInit(): void {
    [this.uniqListArticle, this.count] = this.getUniqueArray(this.shoppingList.getSelectedBooks());
    this.calculPrix()
    this.getSimilairBooks();
  }

  supprimerLivre( b : Book){
    this.shoppingList.deleteBook(b);
    this.updatePanier();
    this.showToaster(b.title)
  }

  updatePanier(){
    //mettre a jour le panier apres actions
    [this.uniqListArticle, this.count] = this.getUniqueArray(this.shoppingList.getSelectedBooks());
    this.calculPrix()
    this.getSimilairBooks();
  }

  viderPanier(){
    this.shoppingList.viderPanier();
    this.updatePanier();
    this.toastr.error("Le panier a été vidé")
    this.similairBooks = [];
  }


  //virer les doublons des livres
  getUniqueArray(arr) {
    let a = [], b = [], prev;

    arr.sort(function(a, b){
      if(a.isbn < b.isbn) { return -1; }
      if(a.isbn > b.isbn) { return 1; }
      return 0;
    });

    arr.forEach(element =>{
      if ( element!== prev ) {
        a.push(element);
        b.push(1);
      } else {
        b[b.length-1]++;
      }
      prev = element;
    });

    return [a, b];
  }

  calculPrix(){
    [this.PrixTotal, this.Remise]=this.promotionService.calculOffre(this.shoppingList.getSelectedBooks())
  }

  //afficher notification
  showToaster(titre : string){
    this.toastr.warning("Le livre "+titre+" a été supprimé du panier")
  }

  getSimilairBooks(){
    this.bookService.getBooks().subscribe(
      data => {
        this.similairBooks = data.filter(a => !this.uniqListArticle.map(b=>b.title).includes(a.title))
      }
    )
  }


  ajoutAchat(b : Book):void{
    this.shoppingList.addBook(b);
    this.updatePanier();
  }

}
