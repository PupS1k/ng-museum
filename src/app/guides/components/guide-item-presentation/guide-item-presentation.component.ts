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
  @Input() isTour: boolean;

  @Output() deleteGuide = new EventEmitter<void>();
  @Output() deleteGuideFromTour = new EventEmitter<void>();

  onDeleteGuide() {
    this.deleteGuide.emit();
  }

  onDeleteGuideFromTour() {
    this.deleteGuideFromTour.emit();
  }

}
