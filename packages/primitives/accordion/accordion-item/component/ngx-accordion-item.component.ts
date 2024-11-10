import { AccordionItem } from '../core/accordion-item';
import { Component } from '@angular/core';
import { booleanAttribute } from '@angular/core';
import { computed } from '@angular/core';
import { injectAccordionRootComponent } from '../../accordion-root/provider/accordion-root-component.provider';
import { input } from '@angular/core';
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
  protected readonly accordionItemId = "_ngx-accordion-item-id";
  protected readonly accordionItemInstance = {
    ...this,
    accordionRootInstance: injectAccordionRootComponent(),
  };

  public readonly value = input.required<T>({
    alias: 'ngxPrimerAccordionItemValue'
  });

  public readonly disabled = input<boolean, boolean>(false, {
    alias: 'ngxPrimerAccordionItemDisabled',
    transform: booleanAttribute,
  });

  public readonly isExpanded = computed(() => this.accordionItemInstance.accordionRootInstance.isOpen(this.value()));
}
