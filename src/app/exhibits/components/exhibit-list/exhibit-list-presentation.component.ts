import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-list-presentation',
  templateUrl: './exhibit-list-presentation.component.html',
  styleUrls: ['./exhibit-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitListPresentationComponent {
  @Input() exhibits: Exhibit[];
  @Input() showMode: string;
  @Input() isTour: boolean;
}
