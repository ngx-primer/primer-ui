/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Directive, OnInit, inject } from '@angular/core';

import { ContextDirective } from '@ngx-primer/primitive/utilities';
import { NgxPrimerAccordionRootComponent } from '../../../components';
import { NgxPrimerAccordionRootContext } from '../../../contexts';

@Directive({
  selector: '[ngxPrimerAccordionRootContextDirective]',
  exportAs: 'ngxPrimerAccordionRootContextDirective',
  standalone: true,
})
export class NgxPrimerAccordionRootContextDirective
  extends ContextDirective<NgxPrimerAccordionRootComponent<unknown>>
  implements OnInit
{
  protected override host: NgxPrimerAccordionRootComponent<unknown> = inject(
    NgxPrimerAccordionRootComponent,
    {
      host: true,
      optional: true,
    }
  )!;
  
  protected readonly context = inject(NgxPrimerAccordionRootContext, {
    optional: true,
  })!;

  ngOnInit(): void {
    this.context.instance = this.host;
  }

  get instance() {
    return this.context?.instance as NgxPrimerAccordionRootComponent<unknown>;
  }
}
