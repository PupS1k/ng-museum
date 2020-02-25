import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRoleUser]'
})
export class RoleDirective {
  constructor(
    el: ElementRef

  ) {
    console.log(el);
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
