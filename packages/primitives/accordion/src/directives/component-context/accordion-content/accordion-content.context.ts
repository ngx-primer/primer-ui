/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Context, ContextDirective } from '@ngx-primer/primitive/utilities';

import { Directive, inject, OnInit } from '@angular/core';
import { NgxPrimerAccordionContentComponent} from '../../../components';
import { NgxPrimerAccordionContentContext } from '../../../contexts';

@Directive({
  selector: '[ngxPrimerAccordionContentContextDirective]',
  exportAs: 'ngxPrimerAccordionContentContextDirective',
  standalone: true,
})
export class NgxPrimerAccordionContentContextDirective extends ContextDirective<NgxPrimerAccordionContentComponent<unknown>>
implements OnInit{

  protected override host: NgxPrimerAccordionContentComponent<unknown> = inject(NgxPrimerAccordionContentComponent, {
    host: true,
    optional: true
  })!;
  
  protected override context: Context<NgxPrimerAccordionContentComponent<unknown>> = inject(NgxPrimerAccordionContentContext, {
    optional: true,
  })!;

  ngOnInit(): void {
    this.context.instance = this.host;
  }

  get instance() {
    return this.context?.instance as NgxPrimerAccordionContentComponent<unknown>;
  }
}
