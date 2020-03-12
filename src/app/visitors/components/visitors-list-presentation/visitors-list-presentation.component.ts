import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitors-list-presentation',
  templateUrl: './visitors-list-presentation.component.html',
  styleUrls: ['./visitors-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorsListPresentationComponent {
  @Input() visitors: Visitor[];
}
