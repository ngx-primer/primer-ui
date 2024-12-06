/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Context, ContextDirective } from '@ngx-primer/primitive/utilities';

import { Directive, inject, OnInit } from '@angular/core';
import { NgxPrimerAccordionTriggerComponent} from '../../../components';
import { NgxPrimerAccordionTriggerContext } from '../../../contexts';

@Directive({
  selector: '[ngxPrimerAccordionTriggerContextDirective]',
  exportAs: 'ngxPrimerAccordionTriggerContextDirective',
  standalone: true,
})
export class NgxPrimerAccordionTriggerContextDirective extends ContextDirective<NgxPrimerAccordionTriggerComponent<unknown>>
implements OnInit{

  protected override host: NgxPrimerAccordionTriggerComponent<unknown> = inject(NgxPrimerAccordionTriggerComponent, {
    host: true,
    optional: true
  })!;
  
  protected override context: Context<NgxPrimerAccordionTriggerComponent<unknown>> = inject(NgxPrimerAccordionTriggerContext, {
    optional: true,
  })!;

  ngOnInit(): void {
    this.context.instance = this.host;
  }

  get instance() {
    return this.context?.instance as NgxPrimerAccordionTriggerComponent<unknown>;
  }
}
