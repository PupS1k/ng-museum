import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Guide} from '../../models/guide.model';

@Component({
  selector: 'app-guide-item-presentation',
  templateUrl: './guide-item-presentation.component.html',
  styleUrls: ['./guide-item-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideItemPresentationComponent {
  @Input() guide: Guide;

  @Output() deleteVisitor = new EventEmitter<void>();

  onDeleteGuide() {
    this.deleteVisitor.emit();
  }

}
