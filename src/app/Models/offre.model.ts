enum TypesOfOffres {
  'slice',
  'percentage',
  'minus',
}
export class Offre {
  public type: TypesOfOffres;
  public value: number;
  public sliceValue = 0;

  constructor(type: TypesOfOffres, value: number, sliceValue?: number) {
    this.type = type;
    this.value = value;
    this.sliceValue = sliceValue;
  }
}
