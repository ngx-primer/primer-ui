/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Context, ContextDirective } from '@ngx-primer/primitive/utilities';

import { Directive, inject, OnInit } from '@angular/core';
import { NgxPrimerAccordionItemComponent} from '../../../components';
import { NgxPrimerAccordionItemContext } from '../../../contexts';

@Directive({
  selector: '[ngxPrimerAccordionItemContextDirective]',
  exportAs: 'ngxPrimerAccordionItemContextDirective',
  standalone: true,
})
export class NgxPrimerAccordionItemContextDirective extends ContextDirective<NgxPrimerAccordionItemComponent<unknown>>
implements OnInit{

  protected override host: NgxPrimerAccordionItemComponent<unknown> = inject(NgxPrimerAccordionItemComponent, {
    host: true,
    optional: true
  })!;
  
  protected override context: Context<NgxPrimerAccordionItemComponent<unknown>> = inject(NgxPrimerAccordionItemContext, {
    optional: true,
  })!;

  ngOnInit(): void {
    this.context.instance = this.host;
  }

  get instance() {
    return this.context?.instance as NgxPrimerAccordionItemComponent<unknown>;
  }
}
