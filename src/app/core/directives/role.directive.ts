import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {User} from '../models/user.model';

@Directive({ selector: '[appRoleUser]'})
export class RoleDirective implements OnInit {
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>,
              private vcr: ViewContainerRef,
              ) { }

  @Input('appRoleUser') roleUser: string;

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('userData'));
    console.log('tut');

    if (user) {
       const isShowEl = user.roles.includes(this.roleUser);
       console.log(isShowEl);

       if (isShowEl && !this.hasView) {
        this.vcr.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!isShowEl && this.hasView) {
        this.vcr.clear();
        this.hasView = false;
      }
    }
  }
}
