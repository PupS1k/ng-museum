import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Guide} from '../../models/guide.model';

@Component({
  selector: 'app-guides-list-presentation',
  templateUrl: './guides-list-presentation.component.html',
  styleUrls: ['./guides-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuidesListPresentationComponent {
  @Input() guides: Guide[];
  @Input() isTour: boolean;
}
