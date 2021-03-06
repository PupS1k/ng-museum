import {Tour} from '../../tours/models/tour.model';

export interface Exhibit {
   exhibitId: number;
   title: string;
   dated: number;
   material: string;
   archiveNum: string;
   description: string;
   imageUrl: string;
   tourEntitySet?: Tour[];
}
