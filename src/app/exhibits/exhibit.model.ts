import {Tour} from './exhibit-list/tour.model';

export class Exhibit {
   exhibitId: number;
   title: string;
   dated: number;
   material: string;
   archiveNum: string;
   description: string;
   imageUrl: string;
   tourEntitySet: Tour[];

  constructor(
    exhibitId: number,
    title: string,
    dated: string,
    material: string,
    archiveNum: string,
    description: string,
    imageUrl: string,
    tourEntitySet: Tour[]
  ) {
    this.exhibitId = exhibitId;
    this.title = title;
    this.dated = +dated;
    this.material = material;
    this.archiveNum = archiveNum;
    this.description = description;
    this.imageUrl = imageUrl;
    this.tourEntitySet = tourEntitySet;
  }
}
