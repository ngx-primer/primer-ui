/* eslint-disable @angular-eslint/no-output-rename */
import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[ngxPrimerMouseEventDirective]',
  exportAs: 'ngxPrimerMouseEventDirective',
  standalone: true,
})
export class NgxPrimerMouseEventDirective {
  protected readonly clickEvent = output<MouseEvent>({
    alias: 'ngxPrimerOnClickEvent',
  });

  @HostListener('click', ['$event']) handleOnCLickListener(event: MouseEvent) {
    this.clickEvent.emit(event);
  }
}
