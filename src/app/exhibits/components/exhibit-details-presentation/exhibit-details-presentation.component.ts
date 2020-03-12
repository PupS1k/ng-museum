import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';


@Component({
  selector: 'app-exhibit-details-presentation',
  templateUrl: './exhibit-details-presentation.component.html',
  styleUrls: ['./exhibit-details-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitDetailsPresentationComponent implements OnInit{
  @Input() exhibit: Exhibit;
  @Input() isGuide: boolean;
  @Input() isVisitor: boolean;

  ngOnInit(): void {
    console.log(this.isVisitor);
  }
}
