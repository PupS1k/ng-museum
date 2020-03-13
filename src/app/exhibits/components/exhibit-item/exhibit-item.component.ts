import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-item',
  templateUrl: './exhibit-item.component.html',
  styleUrls: ['./exhibit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitItemComponent {
  @Input() exhibit: Exhibit;
  @Input() isGuide: boolean;
  @Input() isTour: boolean;
}
