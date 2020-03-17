import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-item-presentation',
  templateUrl: './exhibit-item-presentation.component.html',
  styleUrls: ['./exhibit-item-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitItemPresentationComponent {
  @Input() exhibit: Exhibit;
  @Input() isGuide: boolean;
  @Input() isTour: boolean;
}
