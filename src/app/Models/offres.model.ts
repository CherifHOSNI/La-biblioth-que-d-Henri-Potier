import {Offre} from "./offre.model";

export class Offres {
  public offres: Offre[];

  constructor(offres: Offre[]) {
    this.offres = offres;
  }
}
