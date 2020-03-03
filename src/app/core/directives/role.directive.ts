import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';

@Directive({selector: '[appRoleUser]'})
export class RoleDirective implements OnInit, OnDestroy {
  private hasView = false;
  userSub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private authService: AuthService
  ) {}

  @Input('appRoleUser') roleUser: string;

  ngOnInit() {
   this.userSub = this.authService.user.subscribe(userData => {
     if (userData) {
        const isShowEl = userData.roles.includes(this.roleUser);

        if (isShowEl && !this.hasView) {
          this.vcr.createEmbeddedView(this.templateRef);
          this.hasView = true;
        }
      } else if (this.hasView) {
        this.vcr.clear();
        this.hasView = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
