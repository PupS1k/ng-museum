import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Visitor} from '../../../visitors/models/visitor.model';
import {Guide} from '../../../guides/models/guide.model';
import {Exhibit} from '../../../exhibits/models/exhibit.model';

@Component({
  selector: 'app-tour-edit-presentation',
  templateUrl: './tour-edit-presentation.component.html',
  styleUrls: ['./tour-edit-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourEditPresentationComponent {
  @Input() isTour: boolean;
  @Input() visitors: Visitor[];
  @Input() guide: Guide[];
  @Input() exhibits: Exhibit[];
}
