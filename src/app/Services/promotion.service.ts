import { Offre } from '../Models/offre.model';
import { Book } from '../Models/book.model';

enum TypesOfOffres {
  'slice',
  'percentage',
  'minus',
}

export class PromotionService {
  private promotion = [
    new Offre(TypesOfOffres.percentage, 4),
    new Offre(TypesOfOffres.minus, 15),
    new Offre(TypesOfOffres.slice, 12, 100),
  ];

  // prix initial (total du panier)
  offreInitial: number;
  constructor() {}

  calculOffre(selectedBooks: Book[]): [number, number] {
    this.offreInitial = 0;
    // somme des prix de tout les livres
    selectedBooks.forEach((b) => {
      this.offreInitial = this.offreInitial + b.price;
    });
    let offreslide = 0;
    let offreminus = 0;
    let offrepercentage = 0;

    this.promotion.forEach((offre) => {
      if (
        offre.type === TypesOfOffres.percentage &&
        this.offreInitial - (this.offreInitial / 100) * offre.value > 0
      ) {
        // calcul offre pourcentage
        offrepercentage =
          this.offreInitial - (this.offreInitial / 100) * offre.value;
      }
      if (
        offre.type === TypesOfOffres.minus &&
        this.offreInitial - offre.value > 0
      ) {
        // calcul offre minus
        offreminus = this.offreInitial - offre.value;
      }
      if (
        offre.type === TypesOfOffres.slice &&
        this.offreInitial -
          Math.trunc(this.offreInitial / offre.sliceValue) * offre.value >
          0
      ) {
        // calcul offre slice
        offreslide =
          this.offreInitial -
          Math.trunc(this.offreInitial / offre.sliceValue) * offre.value;
      }
    });

    // return valeur minimale non egale à zero
    // return [ this.offreInitial , Math.min.apply(null, [offreslide,offreminus , offrepercentage].filter(Boolean))];
    return [
      this.offreInitial,
      Math.min(...[offreslide, offreminus, offrepercentage].filter(Boolean)),
    ];
  }
}
