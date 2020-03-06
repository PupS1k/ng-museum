import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GuidesService} from '../../services/guides.service';
import {Guide} from '../../models/guide.model';

@Component({
  selector: 'app-guide-item',
  templateUrl: './guide-item.component.html',
  styleUrls: ['./guide-item.component.scss']
})
export class GuideItemComponent {
  @Input() guide: Guide;
  @Output() updateGuides = new EventEmitter<void>();

  constructor(private guidesService: GuidesService) { }

  onDeleteGuide() {
    this.guidesService.deleteGuide(this.guide.guideId).subscribe(() => this.updateGuides.emit());
  }
}
