import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Tour} from '../../../tours/models/tour.model';

@Component({
  selector: 'app-profile-presentation',
  templateUrl: './profile-presentation.component.html',
  styleUrls: ['./profile-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePresentationComponent {
  @Input() userIsVisitor: boolean;
  @Input() userIsGuide: boolean;
  @Input() tours: Tour[];
}
