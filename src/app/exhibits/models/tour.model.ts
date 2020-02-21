export class Tour {
  tourId: number;
  theme: string;
  typeOfExhibits: string;
  duration: number;
  cost: number;
  imageUrl: string;

  constructor(tourId: number, theme: string, typeOfExhibits: string, duration: number, cost: number, imageUrl: string) {
    this.tourId = tourId;
    this.theme = theme;
    this.typeOfExhibits = typeOfExhibits;
    this.duration = duration;
    this.cost = cost;
    this.imageUrl = imageUrl;
  }
}
