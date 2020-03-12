import {Guide} from '../../guides/models/guide.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {Visitor} from '../../visitors/models/visitor.model';

export interface Tour {
  tourId: number;
  theme: string;
  typeOfExhibits: string;
  duration: number;
  cost: number;
  imageUrl: string;
  guideEntity?: Guide;
  exhibitEntityList?: Exhibit[];
  visitorEntitySet?: Visitor[];
}
