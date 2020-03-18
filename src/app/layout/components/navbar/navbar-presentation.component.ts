import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar-presentation',
  templateUrl: './navbar-presentation.component.html',
  styleUrls: ['./navbar-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarPresentationComponent {
  @Input() isGuide: boolean;
  @Input() isAdmin: boolean;
  @Input() isVisitor: boolean;
  @Input() isAuthenticated: boolean;

  @Input() username: string;
  @Input() profileMode: string;

  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
