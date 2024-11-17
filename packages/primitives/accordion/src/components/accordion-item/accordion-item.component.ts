import { Component, contentChild, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionContentComponent } from '../accordion-content/accordion-content.component';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import { NgxPrimerAccordionTriggerComponent } from '../accordion-trigger/accordion-trigger.component';

@Component({
  selector: 'ngx-primer-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
  exportAs: 'ngxPrimerAccordionItemComponent'
})
export class NgxPrimerAccordionItemComponent {
  /**
   * Accordion root instance.
   */
  public readonly accordionRoot = input.required<NgxPrimerAccordionRootComponent>({
    alias: 'ngxPrimerAccordionRootInstanceRef',
  });

  /**
   * Accordion content instance.
   */
  public readonly accordionContent = contentChild(NgxPrimerAccordionContentComponent, {
    descendants: true,
    read: NgxPrimerAccordionContentComponent
  });

  /**
   * Accordion trigger instance.
   */
  public readonly accordionTrigger = contentChild(NgxPrimerAccordionTriggerComponent, {
    descendants: true,
    read: NgxPrimerAccordionTriggerComponent
  });
}
