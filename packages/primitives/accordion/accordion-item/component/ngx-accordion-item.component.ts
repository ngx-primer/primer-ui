import { AccordionItem } from '../core/accordion-item';
import { Component } from '@angular/core';
import { injectAccordionRootComponent } from '../../accordion-root/provider/accordion-root-component.provider';
import { provideAccordionRootComponent } from '../provider/accordion-item-component.provider';

@Component({
  selector: 'ngx-primer-accordion-item',
  standalone: true,
  templateUrl: './ngx-accordion-item.component.html',
  styleUrl: './ngx-accordion-item.component.scss',
  providers: [
    provideAccordionRootComponent()
  ]
})
export class NgxPrimerAccordionItemComponent<T> extends AccordionItem<T> {
  public readonly accordionRootInstance = injectAccordionRootComponent();
  public readonly accordionItemInstance = this;
}
