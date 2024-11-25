import { Component, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'ngx-primer-accordion-trigger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-trigger.component.html',
  styleUrl: './accordion-trigger.component.scss',
})
export class NgxPrimerAccordionTriggerComponent<T> {
  /**
   * Accodion item instance.
   */
  public readonly accordionItem = input.required<NgxPrimerAccordionItemComponent<T>>({
    alias: 'ngxPrimerAccordionItemInstanceRef',
  });
}
